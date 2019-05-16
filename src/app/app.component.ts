import { Component } from '@angular/core';
import { MapConfig, ComponentLoadEvent } from './locate-on-map/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ers-hachathon-test';
  mapConfig: MapConfig = {
    defaultPosition: {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    },
    markerHeight: 60,
    markerWidth: 60,
    displayInfoWindow: true,
    displayMoreOption: true,
    infoWindowHeaderAlign: "center",
    displayOpenHoursOnInfoWindow: true,
    displayRatingsOnInfoWindow: true,
    displayReviewOnInfoWindow: true,
    displayAddressOnInfoWindow: true,
    displayContactOnInfoWIndow: true,
    moreOptions: ["Change input color", "Custom option1", "Custom option2"]
  }

  onComponentLoad(event: ComponentLoadEvent){
    //event.componentRef.nativeElement.getElementsByTagName('input')[0].place = "1px solid blue";
  }
}
