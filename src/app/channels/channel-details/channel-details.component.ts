import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Channel} from "../channel";

@Component({
    moduleId: module.id,
    selector: 'app-channel-details',
    templateUrl: 'channel-details.component.html',
})
export class ChannelDetailsComponent implements OnInit {

    @Input() selectedchannel: Channel;
    private editChannelDialogId: string;
    private editChannelModalTitle: string;
    private editChannelModalSubmitButtonTitle: string;

    constructor() {
        console.log('ChannelDetailsComponent constructor');
        console.dir(this.selectedchannel);
        this.editChannelDialogId = "editChannelDialog";
        this.editChannelModalTitle = "Edit Channel";
        this.editChannelModalSubmitButtonTitle = "Update Channel";
    }

    ngOnInit() {
    }
}
