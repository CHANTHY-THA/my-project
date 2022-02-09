import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesComponent } from '../services/services.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {
  myid: number = 0;
  sms: string = '';
  constructor(
    private snackBar: MatSnackBar,
    private remove: ServicesComponent,
    ) { }

  ngOnInit(): void {
  }

  alertSnackbar(){
    this.snackBar.open('Deleted', 'Dissmiss', {duration: 3000});
  }

  deleteCustomer(id: number){
    // console.log(id);
    this.sms = "Id" + id + " is Deleted"
    this.remove.removeItem(id);

  }

}
