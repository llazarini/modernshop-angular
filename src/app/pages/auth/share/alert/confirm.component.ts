import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.scss'],
	
})
export class ConfirmComponent {

	constructor(
		private dialogRef: MatDialogRef<ConfirmComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	public confirm(result: boolean) {
		this.dialogRef.close(result);
	}
}
