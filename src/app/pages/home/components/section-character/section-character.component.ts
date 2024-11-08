import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { DragonBallService } from '../../services/dragon-ball.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-section-character',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './section-character.component.html',
  styleUrl: './section-character.component.css'
})
export class SectionCharacterComponent implements OnInit {
  characters : Character[] = [];
  message : any
  constructor(private dragonBallService : DragonBallService){}
  ngOnInit(): void {
    this.dragonBallService.getCharacter().subscribe(data => {
      this.characters = data;
    });
  }
  receiveResponse(event : any){
    this.message = event;
    Swal.fire({
      title: 'Character Information',
      text: `${JSON.stringify(this.message)}`,
      icon: 'info',
      confirmButtonText: 'Okay'
    });
    
  }
}
