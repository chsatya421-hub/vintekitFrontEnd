// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    {
      title: 'About',
      text: 'Vintek is an IT consulting and professional services firm based in Cumming, GA, USA. We aim to provide clients exceptional IT technicians and consultants to meet the demanding technology challenges of today...'
    },
    {
      title: 'Services',
      text: 'Vintek is an IT consulting and professional services firm based in Cumming, GA, USA. We aim to provide clients exceptional IT technicians and consultants to meet the demanding technology challenges of today...'
    },
    {
      title: 'Technology',
      text: 'Vintek is an IT consulting and professional services firm based in Cumming, GA, USA. We aim to provide clients exceptional IT technicians and consultants to meet the demanding technology challenges of today...'
    }
  ];
}
