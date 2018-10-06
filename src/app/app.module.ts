import { BrowserModule , } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './shared/search/search.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import { AddItemComponent } from './add-item/add-item.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    SidebarComponent,
    HomePageComponent,
    AddItemComponent,
    ProductsComponent,
  ],
  exports: [
    LoginHeaderComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    ListboxModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
