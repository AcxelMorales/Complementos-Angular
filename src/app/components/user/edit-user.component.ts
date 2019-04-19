import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: []
})
export class EditUserComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
