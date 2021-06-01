import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any[] = [
    {
      title: 'madetation',
      imgUrl: 'https://via.placeholder.com/30',
      username: 'coolkid',
      content: 'green forest 🧘‍♂️🧘‍♂️'
     },
     {
      title: 'Hiking',
      imgUrl: 'https://via.placeholder.com/50',
      username: 'dreamer',
      content: 'hiking in the alb mountains 🏔🚶‍♀️'
     },
     {
      title: 'race',
      imgUrl: 'https://via.placeholder.com/20/30',
      username: 'yourboifa',
      content: 'running the marthone 🏃‍♀️'
     }
  ]; 

  randomText: string = lorem.sentence();
  
}
