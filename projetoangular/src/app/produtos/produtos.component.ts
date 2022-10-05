import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from './element-dialog/element-dialog.component';
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
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['categoria', 'descricao', 'preco', 'datavalidade','unidademedida','marca','actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(element: PeriodicElement | null ): void{
      console.log("Fui clicado");
      const dialogRef = this.dialog.open(ElementDialogComponent, {
        width: '250px',
        data: element === null?{
          categoria: '',
          descricao: '',
          preco: '',
          datavalidade: '',
          unidademedida: '',
          marca: ''
        } : {
          categoria : element.categoria,
          descricao: element.descricao,
          preco:element.preco,
          datavalidade:element.datavalidade,
          unidademedida:element.unidademedida,
          marca: element.marca
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result !== undefined){
          if(this.dataSource.map(p=>p.categoria).includes(result.categoria)){
            this.dataSource[result.categoria-1] = result;
            this.table.renderRows();
          }
          else{
            this.dataSource.push(result);
            this.table.renderRows();
          }
        }
      });
  }
  pablo(){
    console.log("o brabo!!!");
  }
  deleteElement(categoria:number):void{
    this.dataSource = this.dataSource.filter(p => p.categoria !== categoria)
  }
  editElement(element:PeriodicElement):void{
    this.openDialog(element);
  }
}
