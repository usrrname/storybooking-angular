import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {User} from '../../models/types';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() user: User | null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

}
