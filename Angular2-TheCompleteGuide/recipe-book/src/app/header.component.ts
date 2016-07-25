import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Component({
  moduleId:    module.id,
  selector:    'quachio-header',
  templateUrl: 'header.component.html',
  directives:  [ DropdownDirective ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
