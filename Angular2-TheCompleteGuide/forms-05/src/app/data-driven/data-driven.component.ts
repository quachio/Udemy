import {
  Component
} from '@angular/core';

import {
  FormGroup,
  FormControl,
  REACTIVE_FORM_DIRECTIVES,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

import { emailPattern } from '../pattern/email-pattern';

@Component({
    moduleId:    module.id,
    selector:    'data-driven',
    templateUrl: 'data-driven.component.html',
    directives:  [ REACTIVE_FORM_DIRECTIVES ],
})
export class DataDrivenComponent {
    myForm: FormGroup;
    genders: string[];

    constructor(private formBuilder: FormBuilder) {
      /*
      this.myForm = new FormGroup({
        'userData': new FormGroup({
          'username': new FormControl('Max', Validators.required),
          'email':    new FormControl('', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
        }),
        'password': new FormControl('', Validators.required),
        'gender':   new FormControl('male'),
        'hobbies':  new FormArray([
          new FormControl('Cooking', Validators.required)
        ]),
      });
      */

      this.genders = ['male', 'female'];

      this.myForm = formBuilder.group({
        'userData': formBuilder.group({
          'username': ['Max', Validators.required],
          'email':    ['', [ Validators.required, Validators.pattern(emailPattern)]
          ],
        }),
        'password': ['', Validators.required],
        'gender':   ['male'],
        'hobbies':  formBuilder.array(['Cooking', Validators.required]),
      });

    }

    onSubmit() {
      console.log(this.myForm);
    }

    onAddHobby() {
      (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required))
    }
}
