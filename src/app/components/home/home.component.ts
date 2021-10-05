import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  personData: any = [];

  ngOnInit(): void {
    this.personData = this.getPersonData();
  }

  getPersonData(): any {
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
      },
    ];

    return data;
  }

  selectPerson(index: any) {
    this.router.navigate(['/person-details', this.personData[index].id]);
  }
}
