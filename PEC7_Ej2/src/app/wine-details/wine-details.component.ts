import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../models/wine.model';
import { WineServiceService } from '../wine-service.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  public wine?: Wine;
  constructor(private wineService: WineServiceService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.data.subscribe((data: {wine?: Wine}) => {
      this.wine = data.wine;
    });
  }

 

}


