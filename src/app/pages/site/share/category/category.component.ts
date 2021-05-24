import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from '../../../../interfaces/ICategory';
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
    @Input()
    public category: ICategory;

    constructor() {}

    public ngOnInit() {}
}
