import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, NgForm, FormGroup, Validators} from "@angular/forms";
import {Channel} from "../channel";
import {ChannelService} from "../channelservice.service";

@Component({
    moduleId: module.id,
    selector: 'app-newchannel',
    templateUrl: 'newchannel.component.html',

})
export class NewchannelComponent implements OnInit {

    @Input() formid: string;
    @Input() formtitle: string;
    @Input() channel: Channel;

    channelForm: FormGroup;
    private statusChoices:string[];
    private addChannelStatus: boolean;
    private addChannelErrorMessage: string;

    constructor(private channelService: ChannelService,private formBuilder: FormBuilder) {
        console.log("NewChannelDialog instantiated: " + formBuilder);
        this.channelForm = formBuilder.group({
           'name':['', Validators.required],
            'description':['', Validators.required],
            'tags': ['', Validators.required],
            'status':['Open', Validators.required],
            'start_date':[Channel.todaysDate(), Validators.required],
            'isPrivate': ['private', Validators.required]
        });
        this.statusChoices = ['', 'Open', 'Close'];
        this.addChannelStatus = true;
    }

    ngOnInit() {
    }

    onSubmit() {
        let name = this.channelForm.controls['name'].value;
        let description = this.channelForm.controls['description'].value;
        let tags = this.channelForm.controls['tags'].value;
        let status = this.channelForm.controls['status'].value;
        let start_date = this.channelForm.controls['start_date'].value;
        let isPrivate = this.channelForm.controls['isPrivate'].value;
        console.log('New ChannelForm');
        console.dir(this.channelForm);
        //
        if(this.channel == null && this.channelForm.valid == true) {
            this.channel = new Channel(name, description, tags, isPrivate, status);
            console.dir(this.channel);
            // save new channel
            this.channelService.addNewChannel(this.channel).subscribe(
                (data) => this.addSuccess(data),
                (err) => this.handleServiceError(err),
                () => console.log('Completed addNewChannel service request')
            );
        } else {
            // update existing channel

        }
    }

    addSuccess(data) {
        this.addChannelStatus= true;
        this.channel = null;
        // Fire an event to refresh button in Channels component
    }

    handleServiceError(err) {
        this.addChannelStatus = false;
        this.addChannelErrorMessage = 'Failed to add channel. Please try again later. ' + err.description;
    }

}
