import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  categoria: number;
  descricao: string;
  preco: number;
  datavalidade: string;
  unidademedida: string;
  marca:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {categoria: 1, descricao: 'arroz', preco: 1.79, datavalidade:'25-06-2022', unidademedida:'1kg', marca:'tiaju'},
];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'descricao', 'preco', 'datavalidade','unidademedida','marca','actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
