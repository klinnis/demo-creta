import { Component, OnInit } from '@angular/core';

interface Categories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  categories: Categories[] = [
    {value: 'Υγεία', viewValue: 'Υγεία'},
    {value: 'Ταξίδια', viewValue: 'Ταξίδια'},
    {value: 'Ομορφιά', viewValue: 'Ομορφιά'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
