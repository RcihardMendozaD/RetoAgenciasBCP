import { HttpClient } from '@angular/common/http';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RetoSedesBCP';

  public loading: boolean;
  Arreglo: any[] = [];
  private _jsonURL = './assets/data/sedes.json';
  
  constructor(private http:HttpClient,private modalService: NgbModal) { 
    this.loading=false

    this.http.get("assets/data/sedes.json")
    .subscribe((data:any) => {
      this.Arreglo=data;
    })
    if(!this.Arreglo){
      this.loading=true
    }else
    {
      this.loading=true  
    }  

  }

  ngOnInit(): void {
    
  }

  editar(id:number, dato:any){
    const modalRef = this.modalService.open(PrincipalComponent, { scrollable: true });
    modalRef.componentInstance.idSede = dato;
    console.log(id);
    
    modalRef.componentInstance.objSede.subscribe((data:any) => {
      console.log(data);
     })
  }
}
