import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../anime/anime.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInformationComponent } from '../modal-information/modal-information.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private animeService: AnimeService, private dialog: MatDialog) {}

  query: string = '';
  animeList: any = [];
  animeData: any = [];
  anime: boolean = true;

  ngOnInit(): void {
    this.animeService.getAnimeList().subscribe((data) => {
      this.animeData = data;
    });
  }

  search() {
    if (this.query.trim() !== '') {
      this.animeService.searchAnime(this.query).subscribe((response: any) => {
        this.animeList = response;
        this.anime = false;
      });
    } else {
      this.animeList = null;
    }
  }

  getAnimeDetails(id: number): void {
    this.animeService.getAnimeById(id).subscribe((result) => {
      this.dialog.open(ModalInformationComponent, {
        width: '60%',
        height: 'auto',
        data: result.data,
      });
    });
  }
}
