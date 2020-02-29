import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
 students: Student[] = [{name: "John", age: 35, study: "Script"},
 {name: "Brandy", age: 23, study: ".Net"}]

  constructor() { }

  ngOnInit(): void {
  }

}
