import {Component, OnInit} from '@angular/core';
import {NewchannelComponent} from "./newchannel/newchannel.component";
import {ListChannelComponent} from "./listchannel/listchannel.component";
import {ChannelDetailsComponent} from "./channel-details/channel-details.component";
import {ChannelService} from "./channelservice.service";
import {Channel} from "./channel";

@Component({
    moduleId: module.id,
    selector: 'app-channels',
    templateUrl: 'channels.component.html',
    directives: [ChannelDetailsComponent, NewchannelComponent,ListChannelComponent],
    providers: [ChannelService]
})
export class ChannelsComponent implements OnInit {

    private selectedChannel: Channel;
    constructor() {
    }

    ngOnInit() {
    }

}
