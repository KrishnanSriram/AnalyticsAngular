import {Component, OnInit, Input} from '@angular/core';
import {NavbarItem} from "../navbaritem";

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {

    @Input() navbartitle: string;
    @Input() navbarusername: string;

    private navbarItems: NavbarItem[];

    constructor() {
        if(this.navbartitle == null) {
            this.navbartitle = "Test";
        }
    }

    ngOnInit() {
        if(this.navbarusername == null) {
            this.navbarItems = this.preloginNavbarItems();
        }
    }

    private preloginNavbarItems(): NavbarItem[] {
        return [
            new NavbarItem('about', 'About'),
            new NavbarItem('contacts', 'Contacts')
        ];
    }

}
