import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com' ;
  
  cursoAngular = true;

  urlImagem = 'http://lorempixel.com/400/200/cats/';

  

  

  constructor() { }

  ngOnInit(): void {

  }
  n: number = 1;

  getValor(): any{
     this.n;
     return this.n;
  }

  getCurtirCurso(){
    return true;
  }

}
