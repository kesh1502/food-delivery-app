import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage{

  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  
  infoWindows:any =[];
  markers:any = [
    {
      title: "Port Louis",
      latitude: "-20.16194",
      longitude: "57.49889"
    },
    {
      title: 'Morcellement Saint Andre',
      latitude: "-20.06822", 
      longitude: "57.57185"
    }
  ]

  constructor() { }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">'+ 
                            '<h2 id="firstHeading">'+ marker.title + '<h2>' +
                            '<p> Latitude: ' + marker.latitude + '</p>' +
                            '<p> Longitude: ' + marker.longitude + '</p>' +
                          '</div';
                        
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });
       
    marker.addListener('click',() =>{
     this.closeAllInfoWindows();
     infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }
     
  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap(){
  
    const location = new google.maps.LatLng( -20.16194, 57.49889);
    const options ={ 
      center:location,
      zoom:12,
      
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

}
