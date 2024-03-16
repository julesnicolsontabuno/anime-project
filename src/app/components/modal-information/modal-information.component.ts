import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrl: './modal-information.component.css',
})
export class ModalInformationComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ModalInformationComponent>
  ) {
    console.log(data);
  }
}
