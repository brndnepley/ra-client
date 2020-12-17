import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-send-page',
  templateUrl: './send-page.component.html',
  styleUrls: ['./send-page.component.css']
})
export class SendPageComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 25;
  steps = [
    'Write your letter',
    'Create your seal',
    'Where should it go?',
    'Send your raven.'
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
