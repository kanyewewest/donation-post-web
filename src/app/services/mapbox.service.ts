import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  mapbox: typeof mapboxgl = mapboxgl;
  mapboxToken: string = 'pk.eyJ1IjoiZHZja3l5IiwiYSI6ImNrOTJoa2dyZTA3NzczZW85aWI2MXp2bjgifQ.1azZbBtPPBE_grS12M3zrA';
  map: mapboxgl.Map;
  zoom: number = 15;
  elementId: string = "map";

  markerRadius = 100;

  constructor() {
    console.log("MapboxService works!")
  }

  init(latitude: number, longitude: number) {
    this.mapbox.accessToken = this.mapboxToken;
    this.map = new mapboxgl.Map({
      container: this.elementId,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: this.zoom,
      center: [longitude, latitude]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  addMarker(latitude: number, longitude: number) {

  }
}