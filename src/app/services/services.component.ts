import { Component, Injectable, OnInit } from '@angular/core';
import { customerType } from '../interface/dataType';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  listItems: customerType[] = [
    { customer: 'Phearak', phone: '1111111111111' , email: 'phearak@gmail.com', address: 'KPC' },
    { customer: 'Lyhor', phone: '222222222222' , email: 'lyhor@gmail.com', address: 'PP' },
    { customer: 'Chanthy', phone: '333333333333' , email: 'chanthy@gmail.com', address: 'PP' },
    { customer: 'Chhay', phone: '44444444444' , email: 'chhay@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Pros', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Dyna', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Bunsal', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // ======Add new customer===========
  addItem(item: customerType){
    console.log(item);
    this.listItems.unshift(item);
  }

  // ======Get customer to display====
  getItemList(){
    return this.listItems.slice();
  }

  // ======Delete customer============
  removeItem(id: number){
    console.log('index :' + id);
    this.listItems.splice(id, 1);

    this.getItemList();
  }


}

