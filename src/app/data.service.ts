import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories = [
    { name: 'Wallpapers', id: 1, slug: 'wallpapers' },
    { name: '3d Renders', id: 2, slug: '3d-renders' },
    { name: 'Nature', id: 3, slug: 'nature' },
    { name: 'Travel', id: 4, slug: 'travel' },
    { name: 'Architecture & Interiors', id: 5, slug: 'architecture-interior' },
    { name: 'Street Photography', id: 6, slug: 'street-photography' },
    { name: 'Textures & Patterns', id: 7, slug: 'textures-patterns' },
    { name: 'Film', id: 8, slug: 'film' },
    { name: 'Experimental', id: 9, slug: 'experimental' },
    { name: 'Animals', id: 10, slug: 'animals' },
  ];

  constructor() {}

  getCategories() {
    return this.categories;
  }
}
