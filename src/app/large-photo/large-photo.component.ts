import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-large-photo',
  templateUrl: './large-photo.component.html',
  styleUrls: ['./large-photo.component.css'],
})
export class LargePhotoComponent implements OnInit {
  image: any;
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let state = window.history.state;
    this.route.queryParams.subscribe((params) => {
      this.image = state.image;
      this.user = state.user;
    });
  }
}
