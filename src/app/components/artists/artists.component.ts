import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor(private router: Router) { }

  artistsData: any = [];

  ngOnInit(): void {
    this.artistsData = this.getArtistsData();
  }

  getArtistsData(): any {
    const data = [
      {
        id: 1,
        name: 'George Walton'
      },
      {
        id: 2,
        name: 'Mark Hamil'
      },
      {
        id: 7,
        name: 'Andrew'
      },
      {
        id: 4,
        name: 'Carrie Frances'
      },
      {
        id: 11,
        name: 'Dave Reynolds'
      },
      {
        id: 6,
        name: 'Anthony Kingsley'
      }
    ];

    return data;
  }

  selectArtist(index: any) {
    this.router.navigate(['/person-details', this.artistsData[index].id]);
  }
}
