import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 50;
  hideRooms: boolean = false;

  toggle = () => {
    this.hideRooms = !this.hideRooms;
  };

}
