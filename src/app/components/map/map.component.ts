import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as mapboxgl from "mapbox-gl";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: mapboxgl.Map;

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibWFyb29uZWRpb25lIiwiYSI6ImNqdmp0MzB1azBpcDAzem1naHZwMjNndGIifQ.65nvvRg9QeFUV2c6b9W4Vw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [30.31413, 59.93863],
      zoom: 10,
    });
    const draw = new MapboxDraw({
      displayControlsDefault: true,
      controls: {
        polygon: true,
        trash: true,
      },
    });

    map.addControl(draw, 'top-left');
    this.map = map;
  }
}
