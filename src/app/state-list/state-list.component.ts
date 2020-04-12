import { Component, OnInit } from '@angular/core';
import { states } from '../records/states';



@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  states = states;

  constructor() { }

  ngOnInit() {
  }

}