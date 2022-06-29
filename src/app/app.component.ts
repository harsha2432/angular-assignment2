import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persons = [
    {
      name: 'harsha',
      age: 32,
    },
    {
      name: 'vamshi',
      age: 34,
    },
    {
      name: 'ravi',
      age: 25,
    },
  ];

  name: string = '';
  age: number;

  add(name, age) {
    this.persons.push({
      name: name,
      age: age,
    });

    // resetting the input field
    this.name = '';
    this.age = undefined;
  }
}
