import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent} from '../../pages/auth/share/alert/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    constructor(private matSnackBar: MatSnackBar, private matDialog: MatDialog) { }

    public treatError(response: any) {
        let messages = [];
        Object.keys(response.error.errors).forEach((errorKey) =>
          response.error.errors[errorKey].forEach((key) => messages.push(key))
        );
        this.matSnackBar.open(messages.join(','), "Fechar", {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
        });
    }

    public toast(message: string) {
        this.matSnackBar.open(message, "Fechar", {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
        });
    }

    public confirm(message: string, title = 'Confirme', yes: string = 'Sim', no: string = 'Não'): Observable<any> {
        const matDialog = this.matDialog.open(ConfirmComponent, {
            minWidth: '300px',
            maxWidth: '700px',
            disableClose: true,
            panelClass: 'dialog-no-padding',
            data: { message, title, yes, no },
        });
        return matDialog.afterClosed();
    }

    public alert(message: string, title: string) {
        const matDialog = this.matDialog.open(ConfirmComponent, {
            minWidth: '300px',
            maxWidth: '700px',
            disableClose: true,
            panelClass: 'dialog-no-padding',
            data: { message, title },
        });
        return matDialog.afterClosed();
    }
}
