import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character'
import { tap,map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  constructor(private http: HttpClient) { }
  private url: string  = "https://dragonball-api.com/api/characters"

  getCharacter() : Observable<Character[]> {
   return this.http.get<any>(this.url).pipe(
     tap(data => console.log("Character Data:", data)),
     map(response => response.items)
   )
  }
  getCharacterById(id : number) : Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map(
      response => response
    ))
  }
}
