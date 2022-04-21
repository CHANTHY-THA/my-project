import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { customerType } from 'src/app/interface/customerType';
import { ServicesComponent } from 'src/app/services/services.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
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


  form: FormGroup = new FormGroup({
    customer: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('',Validators.email),
    address: new FormControl('', Validators.required),
  })

  ngOnInit(): void {

  }

  // ===============Update item===============
  updateCustomer(element: customerType){
  
    console.log(element);
    this.customer = element.customer;

    console.log(this.customer);
    
    
  }

  // ==============Get value from input==============
  createCustomer() {
    let customer: customerType = {
      customer: this.customer,
      phone: this.phone,
      email: this.email,
      address: this.address
    }
    if (this.customer == '' || this.phone == '' || this.email == '' || this.address == '') {
      this.snackBar.open("Invalid input", 'Dissmiss', {duration: 2500});
    } else{
      this.newCustomer.addCustomer(customer);
      console.log(customer);
      
      this.snackBar.open("Success", 'Dissmiss', {duration: 2500});
      this.route.navigateByUrl('/customer');
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


