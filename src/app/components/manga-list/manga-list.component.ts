import { Component } from '@angular/core';
import { AnimeService } from '../../anime/anime.service';
import { ModalInformationComponent } from '../modal-information/modal-information.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.css',
})
export class MangaListComponent {
  constructor(private animeService: AnimeService, private dialog: MatDialog) {}

  mangaData: any = [];

  ngOnInit(): void {
    this.animeService.getTopManga().subscribe((data) => {
      this.mangaData = data;
    });
  }

  getMangaDetails(id: number): void {
    this.animeService.getMangaById(id).subscribe((result) => {
      this.dialog.open(ModalInformationComponent, {
        width: '50%',
        height: 'auto',
        data: result.data,
      });
    });
  }
}
