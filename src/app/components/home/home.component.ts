import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public titel: string = "Hallo Benutzer !";
  public showalert: boolean = true;
  public isValid: boolean = true;
  public newDvdTitle: string;
  public filme: string[] = [
    "Film 1", "Film2", "Film 3"
  ];
  constructor() { }

  ngOnInit(): void {
    this.filme.push("Film4")
  }

  public transformDvdTitle(title): string {
    return "DVD :" + title;
  }
  //public onButtonClicked(): void { }

  public addNewDvd(): void {
    //this.showAlert
    this.filme.push(this.newDvdTitle)
    this.newDvdTitle = "";
  }
  public typed(): void {
    this.isValid = this.newDvdTitle.length >= 25 ? false : true
  }
}
