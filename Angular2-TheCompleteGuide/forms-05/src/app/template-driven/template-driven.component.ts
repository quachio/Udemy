import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId:  module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `],
})
export class TemplateDrivenComponent {

  user = {
    username: 'Max',
    email: 'chris@test.com',
    password: 'a1s2d3f4',
    gender: 'male',
  };

  gender = [
    'male',
    'female',
  ];

  onSubmit(form: NgForm){
    //console.log('It Works!');
    //console.log(form);
    //console.log(this.user);
    console.log(form.value);
  }
}
