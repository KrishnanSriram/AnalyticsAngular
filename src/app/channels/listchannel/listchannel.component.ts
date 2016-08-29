import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ChannelService} from "../channelservice.service";
import {Channel} from "../channel";

@Component({
    moduleId: module.id,
    selector: 'app-listchannel',
    templateUrl: 'listchannel.component.html',
})
export class ListChannelComponent implements OnInit {

    private channelItems: Channel[];
    private channelListError = null;
    private isLoading: boolean;
    @Output() channelSelected: EventEmitter<Channel>;

    constructor(private channelService: ChannelService) {
        this.isLoading = false;
    }

    ngOnInit() {
        this.channelSelected = new EventEmitter<Channel>();
        this.getChannels();
    }

    getChannels() {
        this.isLoading = true;
        this.channelService.getChannels()
            .subscribe(
                data => {this.channelItems = data; console.log(data)},
                error => this.channelListError = error,
                () => { console.log('getChannels() in ListChannelComponent completed.'); this.isLoading = false }
            )
    }

    onRefresh() {
        this.isLoading = true;
        this.getChannels();
    }

    onSelected(channel) {
        let model = new Channel(channel.name, channel.description, channel.tags.join(', '), channel.isPrivate, channel.status);
        model._id = channel._id;
        model.rev = channel._rev;
        console.log('Channel selected event fired ListChannelComponent: ' + model.toJSON());
    }
}
