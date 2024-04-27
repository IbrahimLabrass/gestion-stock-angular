import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ChangerMotDePasseUtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-change-passw',
  templateUrl: './change-passw.component.html',
  styleUrls: ['./change-passw.component.scss']
})
export class ChangePasswComponent implements OnInit {

  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
    .subscribe(data => {
      // rien faire
      this.router.navigate(['profil']);
    });
  }
}

