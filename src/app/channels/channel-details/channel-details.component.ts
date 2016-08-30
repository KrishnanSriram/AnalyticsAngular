import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Channel} from "../channel";

@Component({
    moduleId: module.id,
    selector: 'app-channel-details',
    templateUrl: 'channel-details.component.html',
})
export class ChannelDetailsComponent implements OnInit, OnChanges {

    @Input() selectedChannel: Channel;
    private editChannelDialogId: string;
    private editChannelModalTitle: string;
    private editChannelModalSubmitButtonTitle: string;

    constructor() {
        console.log('ChannelDetailsComponent constructor');
        console.dir(this.selectedChannel);
        this.editChannelDialogId = "editChannelDialog";
        this.editChannelModalTitle = "Edit Channel";
        this.editChannelModalSubmitButtonTitle = "Update Channel";
    }

    ngOnInit() {
    }


    ngOnChanges() {
        console.log('Selected Channel: ');
        console.dir(this.selectedChannel);
    }
}
