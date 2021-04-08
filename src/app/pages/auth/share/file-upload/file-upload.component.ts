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
    @Input()
    public token: string;
    public file: File;
    public loading: number = 0;
    public files: Array<IFile>;

    constructor(
        private fileService: FileService
    ) {
        this.files = [];
    }

    ngOnInit(): void {
        if (this.id) {
            this.images();
        }
    }

    public changed(event?: any) {
        if (this.loading > 0) {
            return;
        }
        console.log(event.target.files.items)
        const files = [event.target.files.item(0)];
        files.forEach(file => {
            this.loading += 1;
            this.fileService
                .store(file, this.type, this.id, this.token)
                .subscribe(file => {
                    this.files.push(file);
                })
                .add(() => this.loading -= 1)
        })
    }

    public images() {
        this.loading += 1;
        this.fileService
            .images(this.type, this.id)
            .subscribe(response => {
                this.files = response.data;
            })
            .add(() => this.loading -= 1)
    }

    public delete(file: IFile) {
        this.loading += 1;
        this.fileService
            .delete(file.id)
            .subscribe(response => {
                this.files.splice(this.files.findIndex(fileFound => fileFound.id === file.id), 1);
            })
            .add(() => this.loading -= 1)
    }
}
