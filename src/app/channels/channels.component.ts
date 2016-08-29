import {Component, OnInit} from '@angular/core';
import {NewchannelComponent} from "./newchannel/newchannel.component";
import {ListchannelComponent} from "./listchannel/listchannel.component";
import {ChannelDetailsComponent} from "./channel-details/channel-details.component";

@Component({
    moduleId: module.id,
    selector: 'app-channels',
    templateUrl: 'channels.component.html',
    directives: [ChannelDetailsComponent, NewchannelComponent,ListchannelComponent]
})
export class ChannelsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
