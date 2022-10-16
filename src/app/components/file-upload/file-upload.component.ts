import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UploadingService } from '@confitec-core/services/upload-file/uploading.service';

@Component({
  selector: 'confitec-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @Output() urlChange = new EventEmitter<string>();
  @Output() barStatusChange = new EventEmitter<boolean>();

  constructor(private uploadService: UploadingService) { }

  ngOnInit() {}

  uploadFile(event: any) {
    this.barStatusChange.emit(true);
    this.uploadService.storageFile(event.target.files[0]).then((res: any) => {
      if (res) {
        this.barStatusChange.emit(false);
        this.urlChange.emit(res);
      }
    });
  }

}
