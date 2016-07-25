import { Component, OnInit          } from '@angular/core';
import { HighlightDirective         } from './highlight.directive';
import { UnlessDirective            } from './unless.directive';

@Component({
  moduleId:    module.id,
  selector:    'dir-root',
  templateUrl: 'app.component.html',
  styleUrls:   ['app.component.css'],
  directives:  [ HighlightDirective, UnlessDirective ]
})
export class AppComponent implements OnInit {
  private switch: boolean;
  private items: [number];
  private value: number;

  onSwitch() {
    this.switch = !this.switch;
  }

  ngOnInit() {
    this.switch = true;
    this.items = [1, 2, 3, 4, 5];
    this.value = 10;
  }
}
