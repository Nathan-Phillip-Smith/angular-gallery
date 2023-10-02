import { Component, OnInit } from '@angular/core';
import { FeedContextService } from '../feed-context.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  data: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe((data) => (this.data = data));
  }
}
