import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Output() tryIt = new EventEmitter<any>();
  @Output() howItWorks = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onTryIt(): void {
    alert('Try it out.');
  }

  onHowItWorks(): void {
    alert('How it works.');
  }
}
