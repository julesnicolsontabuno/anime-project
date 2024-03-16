import { Component } from '@angular/core';
import { AnimeService } from '../../anime/anime.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInformationComponent } from '../modal-information/modal-information.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private animeService: AnimeService, private dialog: MatDialog) {}

  getRandomAnime() {
    this.animeService.getRandomAnime().subscribe((result) => {
      this.dialog.open(ModalInformationComponent, {
        width: '50%',
        height: 'auto',
        data: result.data,
      });
    });
  }
}
