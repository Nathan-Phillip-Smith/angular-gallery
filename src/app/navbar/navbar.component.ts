import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
interface Category {
  name: string;
  id: number;
  slug: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories: Category[] = [];
  bold = 'wallpapers';
  url = ''; // initialize with your default URL

  constructor(private dataService: DataService) {} // Inject DataService here

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }

  setUrlAndBold(category: Category): void {
    this.url =
      'https://api.unsplash.com/topics/' +
      category.slug +
      '/photos/?per_page=30&client_id=YofUCMZ1_mklUXWkA2rdZI2PeIzXlI05p7hC4SaQwTQ';
    this.bold = category.slug;
  }
}
