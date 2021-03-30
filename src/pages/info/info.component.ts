import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  issues: any[] = [];
  userInfo: any;
  talk: any;
  constructor(private router: Router) {}

  async ngOnInit() {
    const userInfo = await axios.get(
      `https://api.github.com/repos${this.router.url}`
    );
    this.userInfo = userInfo.data;
    console.log(this.userInfo);

    const { data } = await axios.get(
      `https://api.github.com/repos${this.router.url}/issues`
    );
    this.issues = data;
  }
}
