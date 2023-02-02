import { Component, OnInit } from '@angular/core';
import { cardService } from '../shared/models/services/card.service';
import { productService } from '../shared/models/services/product.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']

})
export class DashboradComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
