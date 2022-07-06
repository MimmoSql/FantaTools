import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FT-Front';
}


@Component({
  selector: 'nav-bar',
  templateUrl: './app.navbar.html',
  styleUrls: ['./app.component.css']
})
export class NavBar {
  title = 'FT-Front';
}

@Component({
  selector: 'foo-ter',
  templateUrl: './app.footer.html',
  styleUrls: ['./app.component.css']
})
export class FooTer {
  title = 'FT-Front';
}