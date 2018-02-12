import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  sessionId: string;

  constructor(private collabration: CollaborationService,
              private route: ActivatedRoute) { }

  // Define the default content for java and python in editor;
  defaultContent = {
    'Java': `public class Solution {
      public static void main(String[] args) {
      // Write your code here;
      }
    }`,

    'Python': `class Solution:
      def example():
        # Write your code here;`
  };

  ngOnInit() {
    // Get the session id
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        this.initEditor();
      });
  }

  initEditor(): void {
    // Initialize editor;
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.editor.setFontSize(25);
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
  }
}
