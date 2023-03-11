import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [DatePipe],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() currentDate: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
