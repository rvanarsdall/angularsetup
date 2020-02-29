import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showhide',
  templateUrl: './showhide.component.html',
  styleUrls: ['./showhide.component.css']
})
export class ShowhideComponent implements OnInit {
  showText: boolean

  constructor() { 
    this.showText=true
  }

  ngOnInit(): void {
    
  }

  toggle(){
    this.showText = !this.showText
    console.log(this.showText)
  }

}
