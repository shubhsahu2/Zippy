import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http:HttpClient) { }
  getfood():Observable<any>{
    return this.http.get('http://localhost:3000/food');

  }
  getnorthfood():Observable<any>{
    return this.http.get('http://localhost:3000/NorthIndian')
  }
  getsouthfood():Observable<any>{
    return this.http.get('http://localhost:3000/SouthIndian')

  }
  geteastfood():Observable<any>{
    return this.http.get('http://localhost:3000/EastIndian')

  }
  getwestfood():Observable<any>{
    return this.http.get('http://localhost:3000/WestIndian')

  }
  
}

function Of():Observable<any>{
  throw new Error('Function not implemented');
}

