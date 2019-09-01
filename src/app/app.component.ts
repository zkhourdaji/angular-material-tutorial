import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-material-tutorial';

  spinner = 0;
  opened = false;


  @ViewChild('myToggleGroup', { static: false })
  myToggleGroup: ElementRef;

  @ViewChild('toggleGroup', { static: false })
  toggleGroup: MatButtonToggleGroup;

  ngOnInit() {
    setInterval(() => {
      this.spinner++;
    }, 50);
  }

  ngAfterViewInit() {
    console.log(this.toggleGroup);
    this.toggleGroup.change.subscribe((value) => value ? console.log(value) : false);
  }
}
