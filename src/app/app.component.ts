import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiService, User } from './api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  users :User[]=[]
  constructor(private apiService:ApiService){}
  array = [
    {name: 'Jesus', age: 30},
    {name: 'Castillo', age: 35},
    {name: 'Miguel', age: 28}
  ]

  selectedOption = new FormControl(this.array[0])
  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    })

    console.log(this.users);
    


    this.selectedOption.valueChanges.subscribe(value => {
      console.log("    el elemento seleccionado es ", value);
    })
  }
  show(){
    console.log("    el elemento seleccionado es ", this.selectedOption);
    
  }

}
