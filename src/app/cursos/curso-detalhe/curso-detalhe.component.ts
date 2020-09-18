import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomePortal: string;

  // pode ser any;
  
  constructor(){
    this.nomePortal = 'http://loiane.training'
  }
  ngOnInit(): void {
  }

}
