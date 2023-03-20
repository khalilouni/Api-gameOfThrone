import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Character } from "../model/characterModel.model";
import { map } from 'rxjs/operators';

export interface CharaterResponseData {
    data: {
      characters: Character[];
    };
  }

@Injectable({providedIn: "root"})

export class CharacterService {

    constructor(private http: HttpClient) {}

    fetchallCharacters()  {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })

      return  this.http.get<CharaterResponseData>('https://thronesapi.com/api/v2/Characters')
      
        
    }
}