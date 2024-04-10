import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  players: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.http.get<any[]>('http://localhost:3000/api/players').subscribe(
      (response) => {
        this.players = response;
      },
      (error) => {
        console.error('Error al obtener datos de jugadores:', error);
      }
    );
  }

 
}
