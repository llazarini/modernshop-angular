import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileService} from '../../../../services/file/file.service';
import {IFile} from '../../../../interfaces/IFile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input()
  public type: string;
  @Input()
  public id: number;
  @Input()
  public multiple: boolean;
  public file: File;
  public loading: boolean;
  public files: Array<IFile>;

  constructor(
      private fileService: FileService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.images();
    }
  }

  public changed(event?: any) {
    this.loading = true;
    const file = event.target.files?.item(0);
    this.fileService.store(file, this.type, this.id)
      .subscribe(file => {
        this.files.push(file);
      })
        .add(() => this.loading = false)
  }

  public images() {
    this.loading = true;
    this.fileService
        .images(this.type, this.id)
        .subscribe(response => {
          this.files = response.data;
        })
        .add(() => this.loading = false)
  }

  delete(file: IFile) {
    this.loading = true;
    this.fileService
        .delete(file.id)
        .subscribe(response => {
          this.files.splice(this.files.findIndex(fileFound => fileFound.id === file.id), 1);
        })
        .add(() => this.loading = false)
  }
}
