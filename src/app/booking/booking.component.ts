import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { DialogComponent } from '../dialog/dialog.component';
import { bookingtype } from '../interface/bookingType';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  filterValue: string = '';

  listItems: bookingtype[] = [] ;

  constructor(
    private listItem: ServicesComponent,
    public dialog: MatDialog, 
    private router: Router,
    private snackBar: MatSnackBar,
    private removeItem: RemoveDialogComponent,
    private editItem: BookingFormComponent,
    ) { }
  ngOnInit(): void {
    this.displayItem();
  }

  displayItem(){
    this.listItems = this.listItem.getItemList();
    this.dataSource = new MatTableDataSource(this.listItems);
  }

  displayedColumns: string[] = ['no','customer', 'phone', 'email', 'address','action'];
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

  updatedataItem(element: bookingtype){
    this.editItem.updateItem(element);
  
    let isEdit = "1"
    let ID = element
    let body = JSON.stringify({"ID":ID,"isEdit":isEdit})
    let navigationExtra : NavigationExtras={
      queryParams :{
        "element":body
      }
    }

    this.router.navigate(["./bookingForm"],navigationExtra)
  }

  deleteItem(id: number) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {message: "Are you sure ?",title:"Remove"}
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if(result == 1) {
        this.removeItem.deleteCustomer(id);
        this.displayItem();
        this.snackBar.open("Deleted", 'Dissmiss', {duration: 2500});
      }
    
     });
  }

  onCreateItem(data: bookingtype){
    console.log(data);
    
  }

}




