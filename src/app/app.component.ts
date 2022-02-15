import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CommonService } from './core/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onestop-app';
  show: boolean = true;

  constructor(private commonservice: CommonService){}

  ngOnInit() {
    this.commonservice.showHeader().subscribe((status) =>{
      this.show = status;
    });
  }
}
