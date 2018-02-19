import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

declare var ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  // Supporting java and python.
  public languages: string[] = ['Java', 'Python'];
  language: string = 'Java';

  editor: any;
  output: string = '';

  sessionId: string;

  constructor(private collabration: CollaborationService,
              private route: ActivatedRoute,
              private dataService: DataService) { }

  // Define the default content for java and python in editor;
  defaultContent = {
    'Java': `public class Example {
      public static void main(String[] args) {
        // Type your Java code here.
      }
    }`,
    'Python': `class Solution:
      def example():
        # write your python code here.
    `
  };

  ngOnInit() {
    // Get the session id
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        this.initEditor();

        // When start the editor, restore buffer
        this.collabration.restoreBuffer();
      });
  }

  initEditor(): void {
    // Initialize editor;
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.editor.setFontSize(20);
    this.resetEditor();

    // Set up collabration socket;
    this.collabration.init(this.editor, this.sessionId);

    this.editor.lastAppliedChange = null;
    this.editor.on("change", (e) => {
      if (this.editor.lastAppliedChange != e) {
        this.collabration.change(JSON.stringify(e));
      }
    });
  }

  // Reset the editor;
  resetEditor(): void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode("ace/mode/" + this.language.toLocaleLowerCase());
  }

  // Choose programming language;
  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  // Submit the code;
  submit(): void {
    let user_code = this.editor.getValue();
    console.log(user_code);

    const data = {
      user_code: user_code,
      lang: this.language.toLocaleLowerCase()
    }

    this.dataService.buildAndRun(data)
      .then(res => this.output = res);
  }
}
