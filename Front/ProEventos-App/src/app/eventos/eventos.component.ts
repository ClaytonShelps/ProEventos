import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor(private http: HttpClient) {}

  /*Executa esse método antes de chamar o HTML */
   ngOnInit(): void {
    this.getEventos();
  }

  private getEventos(): void{
    //Recebendo a resposta do servidor e atribuindo a minha variavel eventos
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos=response
    )

  }
}
