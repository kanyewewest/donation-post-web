import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) viewMap: ElementRef;
  private map: google.maps.Map;
  private coordinates: google.maps.LatLng;
  private mapOptions: google.maps.MapOptions;
  private latitude: number = 40.73;
  private longitude: number = -73.93;

  constructor() { }

  ngAfterViewInit() {
    this.mapChangeCoord(this.latitude, this.longitude);
  }

  mapChangeCoord(latitude: number, longitude: number) {
    this.coordinates = new google.maps.LatLng(latitude, longitude);
    this.mapOptions = {
      center: this.coordinates,
      zoom: 8
    }
    this.map = new google.maps.Map(this.viewMap.nativeElement,
      this.mapOptions);
  }
}
