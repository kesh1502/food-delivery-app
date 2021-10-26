import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  public constructor(private router:Router){}

  ngOnInit() {
  }

  navigate(){
   this.router.navigate(['/home']);
  }

}