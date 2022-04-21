import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { bookingtype } from '../interface/bookingType';
import { customerType } from '../interface/customerType';
import { CustomerModel } from '../model/customer.model';
import { Api } from '../utilities/api';
import { ResponseBody } from '../utilities/responsebody';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  listItems: bookingtype[] = [
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
  
  ];

  customerList: customerType[] = [
    { customer: 'Chanthy tha', phone: '0968547447', email: 'chanthy@gmail.com', address: "BTB"},
    { customer: 'Lyhor', phone: '0968547447', email: 'Lyhor@gmail.com', address: "PP"},
    { customer: 'Phearak', phone: '0968547447', email: 'Phearak@gmail.com', address: "KPC"},
    { customer: 'Chhay', phone: '0968547447', email: 'Chhay@gmail.com', address: "KPT"},
    { customer: 'Sophanna', phone: '0968547447', email: 'Sophanna@gmail.com', address: "KPT"},
    { customer: 'Thin', phone: '0968547447', email: 'Thin@gmail.com', address: "RTK"},
    { customer: 'Eng', phone: '0968547447', email: 'Eng@gmail.com', address: "BTB"},
    { customer: 'Sareth', phone: '0968547447', email: 'Sareth@gmail.com', address: "BTB"},
    { customer: 'Smite', phone: '0968547447', email: 'Smite@gmail.com', address: "French"},
    { customer: 'Jack', phone: '0968547447', email: 'Jack@gmail.com', address: "BTB"},
    { customer: 'Gilin', phone: '0968547447', email: 'Gilin@gmail.com', address: "BTB"},

  ];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // ==================Customer function========================
  // ======Add new customer===========
  addItem(item: bookingtype){
    console.log('Created');
    this.listItems.unshift(item);
    this.getItemList
  }
  addCustomer(customer: customerType){
    this.customerList.unshift(customer);
    this.getUserList();
  }
  // =================Get customer to display=====================
  getItemList(){
    return this.listItems.slice();
  }

  // =========================User Function========================
  getUserList(){
    return this.customerList.slice();
  }

  // ======Delete customer============
  removeItem(id: number){
    console.log('index :' + id);
    this.listItems.splice(id, 1);

    this.getItemList();
  }

  removeCustomer(id: number){
    this.customerList.splice(id, 1);
    this.getUserList();
  }
  
  updateCustomer(element: customerType) {
    console.log("Service");
    
    console.log(element);
    
  }
}




