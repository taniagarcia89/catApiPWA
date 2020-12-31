import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { Cat } from 'src/app/models/cat.interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
    this.catsService
      .getAllCats()
      .subscribe((cats) => this.cats = cats);
  }

}
