import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portafolio';
  ngOnInit(){
    setTimeout(function () {
      let viewheight = window.visualViewport.height;
      let viewwidth = window.visualViewport.width;
      let viewport = document.querySelector("meta[name=viewport]");
      viewport!.setAttribute("content", "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0" + ",user-scalable=no");
  },300);
  }
  
  
}
