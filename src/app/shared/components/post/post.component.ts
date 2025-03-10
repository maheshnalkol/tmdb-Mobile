import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../modules/post';
import { jsonData } from '../../constants/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postData:Array<Ipost>=jsonData
  constructor() { }

  ngOnInit(): void {
  }

}
