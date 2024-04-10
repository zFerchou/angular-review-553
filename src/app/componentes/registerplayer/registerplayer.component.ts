import { Component } from '@angular/core';

@Component({
  selector: 'app-registerplayer',
  templateUrl: './registerplayer.component.html',
  styleUrls: ['./registerplayer.component.css']
})
export class RegisterplayerComponent {
  jugador = {
    nombre: '',
    apellido: '',
    apodo: '',
    equipo: '',
    posicion: '',
    edad: 0,
    numeroCamiseta: 0
  };

  registrarJugador() {
    console.log('Jugador registrado:', this.jugador);

  }

  limpiarFormulario() {
    this.jugador = {
      nombre: '',
      apellido: '',
      apodo: '',
      equipo: '',
      posicion: '',
      edad: 0,
      numeroCamiseta: 0
    };
  }
}
