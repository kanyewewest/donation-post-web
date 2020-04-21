import { Injectable } from '@angular/core';
import { environment } from '../..//environments/environment'
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  mapbox: typeof mapboxgl = mapboxgl;
  mapboxToken: string = environment.MAPBOX_TOKEN;
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
    return this.load();
  }

  private load(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.on('load', () => {
        try {
          this.loadMarkerImage();
          resolve();
        } catch (e) {
          reject();
        }
      });
    });
  }

  loadMarkerImage() {
    let pulsingDot: mapboxgl.CustomLayerInterface | ImageData = {
      width: this.markerRadius,
      height: this.markerRadius,
      data: new Uint8ClampedArray(this.markerRadius * this.markerRadius * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

      // called once before every frame where the icon will be used
      render: function () {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (this.markerRadius / 2) * 0.3;
        var outerRadius = (this.markerRadius / 2) * 0.7 * t + radius;
        var context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        this.map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };
    this.map.addImage('pulsing-dot', <ImageData>pulsingDot, { pixelRatio: 2 });
  }

  addMarker(latitude: number, longitude: number) {
    this.map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [latitude, longitude]
            },
            properties: {} //hmm really makes me think
          }
        ]
      }
    });
  }
}