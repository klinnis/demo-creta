import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clicked = false;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  toggler() {
    if (!this.clicked) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  close() {
    this.clicked = false;
  }

}
