import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../anime/anime.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInformationComponent } from '../modal-information/modal-information.component';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css',
})
export class AnimeListComponent implements OnInit {
  constructor(private animeService: AnimeService, private dialog: MatDialog) {}

  animeData: any = [];

  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe((data) => {
      this.animeData = data;
    });
  }

  getAnimeDetails(id: number): void {
    this.animeService.getAnimeById(id).subscribe((result) => {
      this.dialog.open(ModalInformationComponent, {
        width: '50%',
        height: 'auto',
        data: result.data,
      });
    });
  }
}
