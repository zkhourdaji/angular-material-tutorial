import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-material-tutorial';

  @ViewChild('myToggleGroup', { static: false })
  myToggleGroup: ElementRef;

  @ViewChild('toggleGroup', { static: false })
  toggleGroup: MatButtonToggleGroup;

  ngOnInit() {
    console.log(this.myToggleGroup);
  }

  ngAfterViewInit() {
    console.log(this.toggleGroup);
    this.toggleGroup.change.subscribe((value) => value ? console.log(value) : false);
  }
}
