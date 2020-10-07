import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/models/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = 'Apothecary';
  constructor() { }

  @Input() user: User | null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();

  ngOnInit(): void {
  }

}
