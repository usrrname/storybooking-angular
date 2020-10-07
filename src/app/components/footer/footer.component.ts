import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() title = 'Footer Content';
  @Input() subtitle = 'Footer Subtitle';

  constructor() { }

  ngOnInit(): void {
  }

}
