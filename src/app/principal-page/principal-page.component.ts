import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit{

  loading: boolean = false;
  views: any = {
    home: true,
    products: true,
    contact: true,
    history: true,
    aboutUs: true
  }

  numHojas = 10; // Número de hojas a generar
  hojas = Array(this.numHojas).fill(0); //


  newsList: any = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.newsList.push({
      title: 'Noticias',
      description: 'Noticias deportes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUyd_650ABW3GADJqYjYuHVtiXL5mfToLiQ&s'
    })
    this.newsList.push({
      title: 'Noticias',
      description: 'Noticias deportes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLcjYSsH00k292b4mgZkhym0JL0cWASqMnw&s'
    })
    this.newsList.push({
      title: 'Noticias',
      description: 'Noticias deportes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_KD8uvndppB1ClN_MzXJhP2Z7j_ZAS1ZyQ&s'
    })
    this.newsList.push({
      title: 'Noticias',
      description: 'Noticias deportes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXraORAI1D1X8VSgEBtXCfblzyscIZboZWrA&s'
    })
  }

  checkSection(section: string) {
    this.views[section] = true;
    for (let key in this.views) {
      if (key !== section) {
        this.views[key] = false;
      }
    }
  }

  randomLeftPosition(): string {
    return Math.floor(Math.random() * 100) + '%'; // Genera posiciones entre 0% y 100% del contenedor
  }

  navigate() {
    this.router.navigate(['/login']);
  }
}
