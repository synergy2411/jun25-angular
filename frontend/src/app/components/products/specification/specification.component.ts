import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrl: './specification.component.css',
})
export class SpecificationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => console.log('Query : ', query));
  }
}
