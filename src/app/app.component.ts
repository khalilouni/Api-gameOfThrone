import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from './model/characterModel.model';
import { CharacterService } from './service/character.service';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination/custom-pagination.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Game of throne';
  allCharacter  : any = [];
  character :  any;
  public page = 1;
  public pageSize = 10;
  constructor(private http: HttpClient, private CharaterService: CharacterService) {
  }

  ngOnInit():void {

  this.CharaterService.fetchallCharacters().subscribe(
    (acc) => { 
      //console.log(acc)
      this.allCharacter =  acc 
      this.character = this.allCharacter[0];
  }
  );
  }

  clicSurBouton(id: number){
  
    this.character = this.allCharacter[id];
    window.scroll({ 
      top: 0, 
      left: 0, 
     
});
    
   
    
    
  }

}