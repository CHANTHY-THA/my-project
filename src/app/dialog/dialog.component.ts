import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmationAction{
  title:String = "Save"
  message:String = "Are you sure to save this change?"
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationAction
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(0);
  }

  onYesClick():void{
    this.dialogRef.close(1)
  }
  
}

