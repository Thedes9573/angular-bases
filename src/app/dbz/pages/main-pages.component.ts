import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent {

    constructor ( private dbzSerive: DbzService) {
        
    }
    get characters(): Character[]{
        return [...this.dbzSerive.characters];
    }
    onDeleteCharacter (id:string):void{
        this.dbzSerive.deleteCharacterById(id);
    }
    onNewCharacter( character: Character){
        this.dbzSerive.addCharacter(character);
    }
}