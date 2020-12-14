import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './css/header.component.mobile.css'
  ]
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated = false;
  @Output() signIn = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSignIn(): void{
    this.signIn.emit();
  }
}
