import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-comp',
  templateUrl: './photo-comp.component.html',
  styleUrls: ['./photo-comp.component.css'],
})
export class PhotoCompComponent implements OnInit {
  @Input() photo: any;
  user: any;
  urls: any;

  constructor() {}

  ngOnInit(): void {
    this.user = this.photo.user;
    this.urls = this.photo.urls;
  }
}
