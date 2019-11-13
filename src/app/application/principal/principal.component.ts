import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
laDate:Date;

  constructor(private service :DateService) { }

  ngOnInit() {this.laDate=this.service.dateJour();
  }

}
