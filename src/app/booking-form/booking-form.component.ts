import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { customerType } from '../interface/dataType';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  customer: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public dialog: MatDialog,
    private newCustomer: ServicesComponent,
  ) { }

  ngOnInit(): void {

  }

  // ===============Update item===============
  updateItem(element: any){
    this.customer= element.customer;
    this.phone= element.phone;
    this.email= element.email;
    this.address= element.address;

    console.log(element);
    
  }

  // ==============Get value from input==============
  createCustomer() {
    let customer: customerType = {
      customer: this.customer,
      phone: this.phone,
      email: this.email,
      address: this.address
    }

    console.log(customer);
    

    if (this.customer == '' || this.phone == '' || this.email == '' || this.address == '') {

    } else {
      this.newCustomer.addItem(customer);
    }

  }


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
    });
  }
}


