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

import { emailPattern
} from '../pattern/email-pattern';

import { Observable
} from "rxjs/Rx";

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
            Validators.pattern(emailPatter)
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
          'username': ['Max', [Validators.required, this.exampleValidator]],
          'email':    ['', [ Validators.required, Validators.pattern(emailPattern)]],
        }),
        'password': ['', Validators.required],
        'gender':   ['male'],
        'hobbies':  formBuilder.array([
          ['Cooking', Validators.required, this.asyncExampleValidator],
        ]),
      });

      // Listen to value changes
      this.myForm.valueChanges.subscribe(
        (data: any) => console.log(data)
      );

      // Listen to status changes of your form, ie invalid, pending valide
      this.myForm.statusChanges.subscribe(
        (data: any) => console.log(data)
      )

    }

    onSubmit() {
      console.log(this.myForm);
    }

    onAddHobby() {
      (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator))
    }

    // Custom validator
    exampleValidator(control: FormControl): {[s: string]: boolean} {
      if (control.value === 'Example') { // if validation fail
        return {example: true};
      }
      return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>(
        (resolve, reject) => {
          setTimeout(() => {
            if (control.value === 'Example') {
              resolve({'invalid': true});
            } else {
              resolve(null);
            }
          }, 1500)
        }
      );
      return promise;

    }

}
