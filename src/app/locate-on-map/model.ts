import { ElementRef } from "@angular/core";
import { LocateOnMapComponent } from "./locate-on-map.component";

export type Location = {
    latitude: number;
    longitude: number;
}

export type MapPosition = {
    center: MapCenter;
    zoom: number;
}

export type MapCenter = {
    lat: number;
    lng: number;
}

export type PlacePhoto = {
    image: string;
    map: string;
}

export type MapConfig = {
    markerHeight?: number;
    markerWidth?: number;
    markerIcon?: string;
    moreOptions?: string[],
    defaultPosition?: MapPosition;
    displayInfoWindow?: boolean;
    displayMoreOption?: boolean;
    infoWindowHeaderAlign?: string;
    displayAddressOnInfoWindow?: boolean;
    displayOpenHoursOnInfoWindow?: boolean;
    displayRatingsOnInfoWindow?: boolean;
    displayReviewOnInfoWindow?: boolean;
    displayContactOnInfoWIndow?: boolean;
    isInfoWindowCustomizable?: boolean;
    isMoreOptionCustomizable?: boolean;
}

export type InfoWindowEvent = {
    map: any;
    marker: any;
    place: any;
}

export type MoreOptionEvent = {
    option: string;
    componentRef: ElementRef;
    component: LocateOnMapComponent
}

export type ComponentLoadEvent = {
    componentRef: ElementRef;
    component: LocateOnMapComponent
}

export const ERRORS = [
    "Include the script having the map key in index.html",
    "Provide the valid map key",
    "Check your network connection"
]