import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
