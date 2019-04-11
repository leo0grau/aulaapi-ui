import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias =  [
    {id: '1', nome: 'JONATHAN JOESTAR'},
    {id: '2', nome: 'JOSEPH JOESTAR'},
    {id: '3', nome: 'JOTARO KUJO'},
    {id: '4', nome: 'JOSUKE HIGASHIKATA'}

  ]
  constructor() {

   }

  ngOnInit() {
  }

}
