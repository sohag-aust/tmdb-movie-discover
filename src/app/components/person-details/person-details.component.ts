import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  pathVariable: string;
  personDetail: any;
  baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.pathVariable = paramMap.get('personId');
    });

    this.personService.getPersonDetails(this.pathVariable).subscribe( (data) => {
      this.personDetail = data;
    });
  }
}
