import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { HomeComponent } from './components/home/home.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime', component: AnimeListComponent },
  { path: 'manga', component: MangaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
