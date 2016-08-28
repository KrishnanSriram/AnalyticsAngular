/**
 * Created by krishnan on 8/27/16.
 */
import { RouterModule }  from '@angular/router';
import {LogoutComponent} from "./logout.component";

export const routing = RouterModule.forChild([
    {
        path: '',
        component: LogoutComponent
    }
]);