import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'nowy_projekt';
pi = Math.PI;
date = new Date();
days = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

friend = new Friend ('Grzegorz', 35);
showFriend() {
  return 'Mój kumpel '+ this.friend.name + ' ma ' + this.friend.age + ' lat';
}

}

class Friend {
  constructor(public name:string , public age: number) {
  }
}
