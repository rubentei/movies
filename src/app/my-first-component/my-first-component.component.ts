import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  location = 'Madrid';
  phone = '916515486';
  description = 'Somos una empresa lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
}
