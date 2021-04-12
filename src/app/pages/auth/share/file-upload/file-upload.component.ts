import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileService} from '../../../../services/auth/file/file.service';
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
    public multiple: boolean;
    @Input()
    public token: string;
    @Output()
    public uploaded: EventEmitter<IFile>;
    public file: File;
    public loading: number = 0;
    public files: Array<IFile>;
    private typeId: number;

    @Input()
    public set id(id) {
        if (!id) {
            return;
        }
        this.typeId = id;
        this.images();
    }

    public get id() {
        return this.typeId;
    }

    constructor(
        private fileService: FileService
    ) {
        this.files = [];
        this.uploaded = new EventEmitter<IFile>();
    }

    ngOnInit(): void {
    }

    public changed(event?: any) {
        if (this.loading > 0) {
            return;
        }
        const file = event.target.files.item(0);
        this.loading += 1;
        this.fileService
            .store(file, this.type, this.id, this.token)
            .subscribe(file => {
                if (!this.multiple && this.files.length) {
                    this.delete(this.files[0]);
                    this.files = []
                }
                this.files.push(file);
                this.uploaded.emit(file);
            })
            .add(() => this.loading -= 1)

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
                const fileFound = this.files.findIndex(fileFound => fileFound.id === file.id);
                if (fileFound < 0) {
                    return;
                }
                this.files.splice(fileFound, 1);
            })
            .add(() => this.loading -= 1)
    }
}
