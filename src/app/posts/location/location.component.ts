import { Component, AfterViewInit } from '@angular/core';
import { MapboxService } from 'src/app/services/mapbox.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {
  constructor(private mapboxSvc: MapboxService) { }

  ngAfterViewInit() {
    //this.mapChangeCoord(this.latitude, this.longitude);

    let latitude: number = 40.73;
    let longitude: number = -73.93;
    this.mapboxSvc.init(latitude, longitude)
      .then(() => {
        //Success
        console.log("Mapbox loaded successfully");
      }, () => {
        //Reject
        console.log("Mapbox failed to load!");
      });
  }
}
