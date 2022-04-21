import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'bookingForm', component: BookingFormComponent },
  { path: 'customerForm', component: CustomerFormComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '**', component: PageNotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
