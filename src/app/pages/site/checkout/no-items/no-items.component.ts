import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-items',
  templateUrl: './no-items.component.html',
  styleUrls: ['./no-items.component.scss'],
})
export class NoItemsComponent implements OnInit {
    public loading: number = 0;
    ngOnInit(): void {
    }

}
