import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  url: string =
    'https://api.unsplash.com/topics/' +
    'wallpapers' +
    '/photos/?per_page=40&client_id=YofUCMZ1_mklUXWkA2rdZI2PeIzXlI05p7hC4SaQwTQ';

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getImages();
  }

  async getImages(): Promise<void> {
    try {
      const response$ = this.http.get<any[]>(this.url);
      this.data = await firstValueFrom(response$);
      this.sharedService.changeData(this.data);
    } catch (error) {
      console.log(error);
    }
  }
}
