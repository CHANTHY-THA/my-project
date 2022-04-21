import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { customerType } from '../interface/customerType';
import { ServicesComponent } from '../services/services.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerList: any = [];
  filterValue: string = '';
  constructor(
    private customerService: ServicesComponent,
    public dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private route: Router,
    private update: CustomerFormComponent,
    ) { 
   
  }

  ngOnInit(): void {
    this.displayUserList();
    
  }

  displayUserList(){
    this.customerList = this.customerService.getUserList();
    this.dataSource = new MatTableDataSource(this.customerList);
  }

  deleteCustomer(id:number){
    console.log(id);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {message: "Are you sure ?",title:"Remove"}
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if(result == 1) {
        this.customerService.removeCustomer(id);
        this.displayUserList();
        this.snackBar.open("Deleted", 'Dissmiss', {duration: 2500});
      }
    
     });
  }

  editCustomer(element: customerType){
    this.update.updateCustomer(element);
    this.route.navigateByUrl('/customerForm');
    
  }
  displayedColumns: string[] = ['id','customer', 'phone', 'email', 'address','action'];
  dataSource! : MatTableDataSource<any>;

  // ========Search==========
  applyFilter(event: any) {
    if(event == ""){
      this.dataSource.filter = event;
    }else{
      this.filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
    }
   
  }

  // =================Reload search===============
  reloadAgain(){
    console.log("Reload");
    let reload = "";
    this.applyFilter(reload);
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
