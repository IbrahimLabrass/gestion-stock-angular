import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models/category-dto';

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.scss']
})
export class NouvelCategorieComponent  implements OnInit {

  categoryDto: CategoryDto = {};
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if (idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe(cat => {
        this.categoryDto = cat;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

  enregistrerCategory(): void {
    this.categoryService.enregistrerCategory(this.categoryDto)
    .subscribe(res => {
      this.router.navigate(['categories']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}
