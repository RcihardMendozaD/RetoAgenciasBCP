import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  GrupoSede: FormGroup = new FormGroup({});
  @Input() idSede: any;
  @Output() objSede = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder,private modalService: NgbModal) { 
   
  }

  ngOnInit(): void {
    this.CargarFormulario();
    
  }

  CargarFormulario() {
    this.GrupoSede = this._formBuilder.group({
      agencia: [this.idSede.agencia ],
      distrito: [ this.idSede.distrito ],
      direccion: [ this.idSede.direccion ]
      //selectTResultados: [[], Validators.required],
      //fecha: ['', Validators.required],
      //Comentario: ['', Validators.required]
    });
  }

  GuardarFormulario() {
    let obj= {
      agencia:this.GrupoSede.get('agencia')?.value,
      distrito:this.GrupoSede.get('distrito')?.value,
      direccion:this.GrupoSede.get('direccion')?.value
    };

    this.objSede.emit(obj);
    this.modalService.dismissAll()
  }

}
