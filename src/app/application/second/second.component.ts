import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
date:Date;
  constructor(private service:DateService) { }

  ngOnInit() {this.date=this.service.dateJour();
  }

}
