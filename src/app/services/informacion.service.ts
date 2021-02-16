import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(public http:Http) { 
    this.http.get("assets/data/sedes.json")
        .subscribe(data => {
          console.log(data);
        })
  }
}