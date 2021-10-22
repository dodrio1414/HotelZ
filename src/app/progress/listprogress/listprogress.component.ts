import { Component, OnInit } from '@angular/core';
import { SeguimientoUser } from '../interfaces/empresa.interface';
import { ProgressService } from '../services/proveedores.service';


@Component({
  selector: 'app-listprogress',
  templateUrl: './listprogress.component.html',
  styleUrls: ['./listprogress.component.css']
})
export class ListprogressComponent implements OnInit {

  constructor(
    private progressService: ProgressService,
  ) { }

  ngOnInit(): void {
    console.table(this.usuarioVar)
  }

  usuarioVar: SeguimientoUser[] = this.progressService.usuarios
  usuarioVar2: SeguimientoUser[] = []
}
