import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //card
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

  //pw-generator
  randomText: string = lorem.sentence();

  //pagination
  images = [
    {
      title: 'The Big Trip',
      url: 'https://unsplash.com/photos/emUahxWNvyA'
    },
    {
      title: 'Birds',
      url: 'https://unsplash.com/photos/e0ao3_yoGNU'
    },
    {
      title: 'Parrot',
      url: 'https://unsplash.com/photos/sViOG348DOM'
    },
    {
      title: 'Nights in Alaska',
      url: 'https://unsplash.com/photos/0Bj1foVFTdU'
    }
  ];

  index: number = 0;

  onPageChange(e: any) {
    this.index = e;
  }
}
