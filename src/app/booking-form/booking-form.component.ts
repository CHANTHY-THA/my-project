import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { bookingtype } from '../interface/bookingType';
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
    private route: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private newCustomer: ServicesComponent,
  ) { }

  ngOnInit(): void {

  }

  // ===============Update item===============
  updateItem(element: bookingtype){
    this.customer= element.customer;
    
    console.log(element);
    
  }

  // ==============Get value from input==============
  createCustomer() {
    let customer: bookingtype = {
      customer: this.customer,
      phone: this.phone,
      email: this.email,
      address: this.address
    }
    if (this.customer == '' || this.phone == '' || this.email == '' || this.address == '') {
      this.snackBar.open("Invalid input", 'Dissmiss', {duration: 2500});
    } else{
      this.newCustomer.addItem(customer);
      this.snackBar.open("Success", 'Dissmiss', {duration: 2500});
      this.route.navigateByUrl('/booking');
    }
  

    // const dialogRef = this.dialog.open(DialogComponent, {
    //   width: '350px',
    //   data: {message: "Are you sure ?",title:"Save"}
    // });

    // dialogRef.afterClosed().subscribe(result => {
      
    //   if(result == 1) {

    //     this.newCustomer.addItem(customer);
    //     this.snackBar.open("Created", 'success', {duration: 2500});

    //     if (this.customer == '' || this.phone == '' || this.email == '' || this.address == '') {
    //       this.snackBar.open("Invalid input", 'Dissmiss', {duration: 2500});
    //     } else {
      
    //       this.newCustomer.addItem(customer);
    //       this.snackBar.open("Created", 'success', {duration: 2500});
    //     }
        
    //   }
    // });

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

}


