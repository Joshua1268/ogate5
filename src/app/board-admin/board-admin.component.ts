import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  content?: string;
  page = 'home'; // Initialisez la page sur 'home'
  activeLink = 'home'; // Ajoutez cette ligne pour suivre le lien actif

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = `Error with status: ${err.status}`;
      }
    });
  }

  setPage(page: string): void {
    this.page = page; // Mettez à jour la page lorsque vous cliquez sur un lien
    this.activeLink = page; // Mettez à jour le lien actif lorsque vous cliquez sur un lien
  }
}
