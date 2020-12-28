import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Output() tryIt = new EventEmitter<any>();
  @Output() howItWorks = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTryIt(): void {
    this.router.navigate(['send']);
  }

  onHowItWorks(): void {
    alert('How it works.');
  }
}
