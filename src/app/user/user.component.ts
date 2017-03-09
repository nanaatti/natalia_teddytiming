import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private user: any = {};
  //username: string = "";

  constructor() { }

  setUserinfo = (formValues: any) => {
    localStorage.setItem('user', JSON.stringify(formValues));
    this.user = formValues;
    console.log(this.user);
    // router link?
    // this.router.navigate(['main']);
  };

  clearField() {
    //document.getElementById('usernamefield').value= "";
  }


  /* createUser() {
    let kayttaja: any = [];
    if (localStorage.getItem('user') != null){
      kayttaja = JSON.parse(localStorage.getItem('user'));
    }
    const kayttajaobject: any = {
      username: this.username
    };
    kayttaja.push(kayttajaobject);
    localStorage.setItem('user', JSON.stringify(kayttaja));
  }*/

  /* deleteUser = () => {
    localStorage.removeItem('user');
  }*/

  userAlert() {
    //localStorage.removeItem('user');
    //localStorage.removeItem('lists');
    localStorage.clear();
  }

  ngOnInit() {
    //this.user = JSON.parse(localStorage.getItem('user'));
  }

}
