
import { PeriodicElement } from '../produtos.component';
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})

export class ElementDialogComponent implements OnInit {

  element!: PeriodicElement;

  ngOnInit(): void {
  
  }

constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
