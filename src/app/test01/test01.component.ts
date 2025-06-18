import { Component } from '@angular/core';
import { UserViewComponent } from '../user-view/user-view.component';
import { ChartTest01Component } from '../chart-test01/chart-test01.component';

@Component({
  selector: 'app-test01',
  imports: [UserViewComponent, ChartTest01Component],
  templateUrl: './test01.component.html',
  styleUrl: './test01.component.scss'
})
export class Test01Component {

}
