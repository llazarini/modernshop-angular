import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Output()
  private removeEvent = new EventEmitter<number>();
  @Input()
  public formGroup: FormGroup;
  @Input()
  public index: number = 0;

  constructor() { }

  ngOnInit(): void {}
}
