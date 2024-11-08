import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Character } from '../../models/character';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DragonBallService } from '../../services/dragon-ball.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  response : any
  @Input() character ={
    id: 0,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: '',
    deletedAt: null
  };
  constructor(private dragonBallService: DragonBallService) { }
  @Output() sendMessageEvent = new EventEmitter<any>();

  sendMessage() {
   this.dragonBallService.getCharacterById(this.character.id).subscribe(
     data => {
       this.response = data;
       this.sendMessageEvent.emit(this.response);
     }
   );
   
  }
}
