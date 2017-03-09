import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  private user: any = {};

  constructor() { }

  ngOnInit() {
    // document.getElementById("navbar").style.display = "none";
  }

}
