import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat.interface';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cat: Cat;

  constructor(private catsService: CatsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.catsService.getCatById(identifier).subscribe((cat) => {
      if (!cat) {
        return this.router.navigateByUrl('/');
      }

      this.cat = cat;
      console.log('Cat --> ', this.cat);

    })
  }

}
