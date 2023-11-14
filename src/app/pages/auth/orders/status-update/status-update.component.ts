import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
	selector: 'app-status-update',
	templateUrl: './status-update.component.html',
	styleUrls: ['./status-update.component.scss'],
	
})
export class StatusUpdateComponent {
	public trackingCode: string;

	constructor(
		private dialogRef: MatDialogRef<StatusUpdateComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	public confirm() {
		this.dialogRef.close({
			update: true,
			trackingCode: this.trackingCode
		});
	}
}
