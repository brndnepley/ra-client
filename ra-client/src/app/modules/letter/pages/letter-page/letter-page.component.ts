import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letter-page',
  templateUrl: './letter-page.component.html',
  styleUrls: ['./letter-page.component.css']
})
export class LetterPageComponent implements OnInit {

  @Output() letterHasText = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
}
