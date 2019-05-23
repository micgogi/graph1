import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GraphService {

  constructor(private http:HttpClient) { }

addDots(){
  return this.http.get("http://localhost:8080/api/graph");
}
}
