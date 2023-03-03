import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog',
  template: `
  <div id="instruction-dialog-container">
  <h2 mat-dialog-title>Bevor sie starten... </h2>
<mat-dialog-content class="mat-typography">
  <h3>Herzlich willkommen zum Prototypen der "Multi-Tabbing"-Anwendung.</h3>
  <p>
  Auf der linken Seite finden Sie drei Tabs, welche Unterwasserkameras anzeigen. Auf der rechten Seite im oberen Bereich sind zwei Tabs verfügbar, 
  die Ihnen bei der Identifizierung von Tierarten behilflich sein können. Im unteren Bereich befindet sich ein weiterer Tab, der es Ihnen ermöglicht, 
  Notizen zu speichern.
</p>
<p>
  Nutzen Sie die Möglichkeit, die Tabs der drei Kameras zu verschieben, um eine optimale Arbeitsumgebung zu schaffen.
</p>
<p>
  Falls Probleme bei der Nutzung auftreten, empfehlen wir Ihnen, die Seite neu zu laden.
</p>
<p>
  Wenn Sie Tierarten identifizieren, haben Sie die Möglichkeit, diese in den Notizen festzuhalten. Wir bitten Sie, im Fragebogen Ihre identifizierten Tierarten anzugeben. 
</p>
<p>
  <b>Bitte denken Sie daran, vor dem Schließen der Webseite Ihre Notizen zu kopieren.</b>
</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ich habe verstanden</button>
</mat-dialog-actions>
  </div>
  `
})
export class StartDialog {
  constructor() {}

}
