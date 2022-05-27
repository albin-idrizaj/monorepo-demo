import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-regular-lib',
  template: `
    <p>
      regular-lib works!
    </p>
  `,
  styles: [
  ]
})
export class RegularLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
