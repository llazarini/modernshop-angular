import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
