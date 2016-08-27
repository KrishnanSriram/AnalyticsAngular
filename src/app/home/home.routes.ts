/**
 * Created by krishnansriramrama on 8/20/16.
 */
import { RouterModule }  from '@angular/router';
import { HomeComponent } from './home.component';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);
