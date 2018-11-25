import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultantAddComponent } from './consultant-add/consultant-add.component';
import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';
import { ConsultantGetComponent } from './consultant-get/consultant-get.component';
import { ConsultantDelComponent } from './consultant-del/consultant-del.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { CustomerDelComponent } from './customer-del/customer-del.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardGetComponent } from './card-get/card-get.component';
import { CardDelComponent } from './card-del/card-del.component';
import { ConsumptionAddComponent } from './consumption-add/consumption-add.component';
import { ConsumptionEditComponent } from './consumption-edit/consumption-edit.component';
import { ConsumptionGetComponent } from './consumption-get/consumption-get.component';
import { ConsumptionDelComponent } from './consumption-del/consumption-del.component';

const routes: Routes = [
  {
    path: 'consultant/create',
    component: ConsultantAddComponent
  },
  {
    path: 'consultant/edit/:id',
    component: ConsultantEditComponent
  },
  {
    path: 'consultant',
    component: ConsultantGetComponent
  },
  {
    path: 'consultant/del/:id',
    component: ConsultantDelComponent
  },
  {
    path: 'customer/create',
    component: CustomerAddComponent
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'customer',
    component: CustomerGetComponent
  },
  {
    path: 'customer/del/:id',
    component: CustomerDelComponent
  },
  {
    path: 'card/:idcustomer/create',
    component: CardAddComponent
  },
  {
    path: 'card/:idcustomer/edit/:id',
    component: CardEditComponent
  },
  {
    path: 'card/:idcustomer',
    component: CardGetComponent
  },
  {
    path: 'card/:idcustomer/del/:id',
    component: CardDelComponent
  },
  {
    path: 'consumption/:idcard/create',
    component: ConsumptionAddComponent
  },
  {
    path: 'consumption/:idcard/edit/:id',
    component: ConsumptionEditComponent
  },
  {
    path: 'consumption/:idcard',
    component: ConsumptionGetComponent
  },
  {
    path: 'consumption/:idcard/del/:id',
    component: ConsumptionDelComponent
  }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
