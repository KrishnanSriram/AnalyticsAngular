import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-newchannel',
    templateUrl: 'newchannel.component.html',
})
export class NewchannelComponent implements OnInit {

    @Input() formid: string;
    @Input() formtitle: string;

    constructor() {
    }

    ngOnInit() {
    }

}
