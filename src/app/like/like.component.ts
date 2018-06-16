import { Component, OnInit, Input, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  faHeart=faHeart;

  @Input("likesCount") likesCount: number; 
  @Input("isActive") isActive: boolean; 

  toggle(){
    this.likesCount += this.isActive? -1:1;
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}
