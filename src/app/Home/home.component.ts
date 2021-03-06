import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 500,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'circle',
        },
      }
    };
  }
}
