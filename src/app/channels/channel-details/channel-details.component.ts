import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Channel} from "../channel";
import {ChannelService} from "../channelservice.service";

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

    constructor(private channelService: ChannelService) {
        console.log('ChannelDetailsComponent constructor');
        console.dir(this.selectedchannel);
        this.editChannelDialogId = "editChannelDialog";
        this.editChannelModalTitle = "Edit Channel";
        this.editChannelModalSubmitButtonTitle = "Update Channel";
    }

    ngOnInit() {
    }

    onDelete() {
        if(this.selectedchannel == null) {
            alert("Please select a channcel to delete");
            return;
        }
        if(this.selectedchannel.isNewChannel()) {
            alert('Cannot delete channel');
        }

        this.channelService.deleteChannel(this.selectedchannel).subscribe(
            (data) => this.confirmDelete(data),
            (err) => this.handleError(err),
            () => console.log('Completed Delete Channel action')
        );
    }

    confirmDelete(data) {
        console.dir(data);
        this.selectedchannel = null;
    }

    handleError(err) {
        var message = 'Failed to remove channel information. Please try again later';
        message += 'ERROR: ' + err.description;
        alert(message);
    }
}
