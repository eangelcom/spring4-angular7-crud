import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultantAddComponent } from './consultant-add/consultant-add.component';
import { ConsultantGetComponent } from './consultant-get/consultant-get.component';
import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';

import { ConsultantService } from './consultant.service';
import { ConsultantDelComponent } from './consultant-del/consultant-del.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDelComponent } from './customer-del/customer-del.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardGetComponent } from './card-get/card-get.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardDelComponent } from './card-del/card-del.component';
import { ConsumptionAddComponent } from './consumption-add/consumption-add.component';
import { ConsumptionGetComponent } from './consumption-get/consumption-get.component';
import { ConsumptionEditComponent } from './consumption-edit/consumption-edit.component';
import { ConsumptionDelComponent } from './consumption-del/consumption-del.component';
import { CreditcardDirective } from './creditcard.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConsultantAddComponent,
    ConsultantGetComponent,
    ConsultantEditComponent,
    ConsultantDelComponent,
    CustomerAddComponent,
    CustomerGetComponent,
    CustomerEditComponent,
    CustomerDelComponent,
    CardAddComponent,
    CardGetComponent,
    CardEditComponent,
    CardDelComponent,
    ConsumptionAddComponent,
    ConsumptionGetComponent,
    ConsumptionEditComponent,
    ConsumptionDelComponent,
    CreditcardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule
  ],
  providers: [ ConsultantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
