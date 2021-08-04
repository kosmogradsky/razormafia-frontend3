import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'razormafia-frontend3';

  ngOnInit() {
    const socket = io('ws://localhost:3000/auth', {
      transports: ['websocket'],
    });

    const queueSocket = io('ws://localhost:3000/queue', {
      transports: ['websocket'],
    });

    // socket.emit(
    //   'register',
    //   { email: 'kosmogradsky@gmail.com', password: '123456' },
    //   (response: string) => {
    //     console.log(response);
    //   }
    // );

    // socket.emit(
    //   'sign in with email and password',
    //   { email: 'kosmogradsky@gmail.com', password: '123456' },
    //   (response: string) => {
    //     console.log(response);
    //   }
    // );

    const token = "eyJhbGciOiJIUzI1NiJ9.UEpGSWh2R0lnNnI4eGZaT0dFWkZK.ebrNz7Gcp1wgqyZ0cJPgIV4n12sywQ_fFARNf8OBI3s";

    socket.emit(
      'sign in with session token',
      token,
      (response: string) => {
        console.log(response);

        // socket.emit(
        //   'sign out',
        //   (response: string) => {
        //     console.log(response);
        //   }
        // );
      }
    );
  }
}
