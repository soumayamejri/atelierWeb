import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
goals=[];
  constructor(private dataservice:DataService) { 
    this.goals=this.dataservice.getGoal();
  }

  ngOnInit() {
  }

}
