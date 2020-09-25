import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import ButtonComponent from '../components/button/button.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { NgModule } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CollapseModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CollapseModule,
    CommonModule,
    RouterModule,
    AccordionModule,
    BsDropdownModule,
    CollapseModule
  ]
})
export class SharedModule { }
