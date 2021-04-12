import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {UserService} from '../../../services/auth/user/user.service';
import {IUser} from '../../../interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public displayedColumns: Array<string> = ['id', 'name', 'email', 'actions'];
  public loading: boolean = true;
  public dataSource: Array<IUser>;
  public page: number = 0;
  public total: number;
  constructor(
      private userService: UserService,
      private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.loading = true;
    this.userService
        .getAll(this.page+1)
        .subscribe((response) => {
          this.dataSource = response.data;
          this.total = response.total;
        })
        .add(() => this.loading = false);
  }

  private delete(row) {
    this.loading = true;
    this.userService
        .delete(row.id)
        .subscribe((response) => {
          this.getAll();
          this.alertService.toast(response.message);
        })
        .add(() => this.loading = false);
  }

  public pageChange(event: any) {
    this.page = event.pageIndex;
    this.getAll();
  }

  public deleteConfirm(row: IUser) {
    this.alertService.confirm("Deseja remover o registro?", "Remover")
        .subscribe((response) => {
          if(response) {
            this.delete(row);
          }
        })
  }
}
