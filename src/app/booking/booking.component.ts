import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { customerType } from '../interface/dataType';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  filterValue: string = '';

  listItems: customerType[] = [] ;

  constructor(
    private listItem: ServicesComponent,
    public dialog: MatDialog, 
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
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updatedataItem(element: any){
    this.editItem.updateItem(element);
  }

  deleteItem(id: number) {

    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.removeItem.deleteCustomer(id);
       
     });



  }
}




