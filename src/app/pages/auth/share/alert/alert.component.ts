import { Component, Inject } from '@angular/core';
import {
	MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
	MatLegacyDialogRef as MatDialogRef
} from '@angular/material/legacy-dialog';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],

})
export class AlertComponent {
	constructor(
		private dialogRef: MatDialogRef<AlertComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	public done() {
		this.dialogRef.close();
	}
}
