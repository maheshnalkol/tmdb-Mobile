import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../modules/mobile';
import { mobileDate } from '../../constants/mobile';

@Component({
  selector: 'app-mobile-p',
  templateUrl: './mobile-p.component.html',
  styleUrls: ['./mobile-p.component.scss']
})
export class MobilePComponent implements OnInit {

  mobileProduct:Array<Imobile>=mobileDate
  constructor() { }

  ngOnInit(): void {
  }

}
