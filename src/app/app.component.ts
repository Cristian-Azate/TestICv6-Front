import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noticias: any[] = [];
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.noticiaService.getNews()
    .subscribe(response => {
      this.noticias = response.Noticias;
    });
  }

  createNews(): void {
    const newNews = {
      titulo: 'Nuevo Título',
      cuerpo: 'Cuerpo de la noticia'
    };

    this.noticiaService.createNews(newNews)
      .subscribe(response => {
        console.log('Noticia creada:', response);
        this.getNews(); // Refrescar la lista de noticias después de crear una nueva
      });
  }

  getBase64Image(imageBytes: string): string {
    return `data:image/jpeg;base64,${imageBytes}`;
  }
}