import { Injectable } from '@angular/core';

declare var io: any;
@Injectable()
export class CollaborationService {
  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string): void {
    // Build the connection to server;
    this.collaborationSocket = io(window.location.origin, {query: 'sessionId=' + sessionId});

    // Receive data from server;
    this.collaborationSocket.on("change", (delta: string) => {
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });
  }

    // Emit event to tell what changes to other collabrators and server
  change(delta: string): void {
    this.collaborationSocket.emit("change", delta);
  }
}
