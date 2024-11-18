import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showNav : boolean = false;

  toggleNav(){
    this.showNav = !this.showNav;
  }
}
