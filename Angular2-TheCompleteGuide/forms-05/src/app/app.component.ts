import { Component               } from '@angular/core';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

@Component({
  moduleId:    module.id,
  selector:    'forms-app',
  templateUrl: 'forms.component.html',
  directives: [ TemplateDrivenComponent]
})
export class AppComponent {
}
