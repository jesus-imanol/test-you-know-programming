import { Component } from '@angular/core';
import { SectionCharacterComponent } from './components/section-character/section-character.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionCharacterComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
