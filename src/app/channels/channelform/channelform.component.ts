import {Component, OnInit, Input, ViewChild, ElementRef, Renderer, OnChanges} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, NgForm, FormGroup, Validators} from "@angular/forms";
import {Channel} from "../channel";
import {ChannelService} from "../channelservice.service";

@Component({
    moduleId: module.id,
    selector: 'app-newchannel',
    templateUrl: 'channelform.component.html',

})
export class ChannelFormComponent implements OnInit, OnChanges {

    @Input() formid: string;
    @Input() formtitle: string;
    @Input() formsubmitbuttontitle: string;
    @Input() channel: Channel;
    channelData: Channel = null;

    channelForm: FormGroup;
    private statusChoices:string[];
    private addChannelStatus: boolean;
    private addChannelErrorMessage: string;

    @ViewChild('modalCancelDismiss') modalCancelDismiss: ElementRef;

    constructor(private channelService: ChannelService,private formBuilder: FormBuilder, private renderer: Renderer) {
        console.log("NewChannelDialog instantiated: " + formBuilder);
        this.statusChoices = ['', 'Open', 'Close'];
        this.addChannelStatus = true;
        if(this.channel == null) {
            this.channel = new Channel('','','',true, 'Open');
            this.channelForm = this.formBuilder.group({
                'name':[this.channel.name, Validators.required],
                'description':[this.channel.description, Validators.required],
                'tags': [this.channel.tags, Validators.required],
                'status':[this.channel.status, Validators.required],
                'start_date':[Channel.todaysDate(), Validators.required],
                'isPrivate': [this.channel.isPrivate, Validators.required]
            });
        }

    }

    ngOnInit() {
    }

    ngOnChanges() {
        console.log('onChanges in ChannelFormComponent');
        this.channelData = this.channel;
        if(this.channelData != null) {
            console.log("ID is: " + this.channelData._id);
                if(this.channel.status == null) {
                    console.log('Updated Status');
                    this.channel.status = "Open";
                }
                if(this.channel.isPrivate == null) {
                    this.channel.isPrivate = false;
                    console.log('Updated isPrivate');
                }
            this.channelForm = this.formBuilder.group({
                'name':[this.channel.name, Validators.required],
                'description':[this.channel.description, Validators.required],
                'tags': [this.channel.tags, Validators.required],
                'status':[this.channel.status, Validators.required],
                'start_date':[Channel.todaysDate(), Validators.required],
                'isPrivate': [this.channel.isPrivate, Validators.required]
            })
        }
    }

    onSubmit() {
        let name = this.channelForm.controls['name'].value;
        let description = this.channelForm.controls['description'].value;
        let tags = this.channelForm.controls['tags'].value;
        let status = this.channelForm.controls['status'].value;
        let start_date = this.channelForm.controls['start_date'].value;
        let isPrivate = this.channelForm.controls['isPrivate'].value;

        if(this.channel.isNewChannel() == true && this.channelForm.valid == true) {
            this.channel = new Channel(name, description, tags, isPrivate, status);
            // save new channel
            this.channelService.addNewChannel(this.channel).subscribe(
                (data) => this.addSuccess(data),
                (err) => this.handleServiceError(err),
                () => console.log('Completed addNewChannel service request')
            );
        } else {
            // update existing channel. Do not create new Channel instance. If we do, then that will be
            // treated as an insert operation
            console.log('Update new Channel information');
            this.channel.name = name;
            this.channel.description = description;
            this.channel.tags = tags;
            this.channel.status = status;
            this.channel.isPrivate = isPrivate;
            this.channel.start_date = start_date;
            console.dir(this.channel);

            this.channelService.updateChannel(this.channel).subscribe(
                (data) => this.addSuccess(data),
                (err) => this.handleServiceError(err),
                () => console.log('Completed updateService request')
            );
        }
    }

    addSuccess(data) {
        this.addChannelStatus= true;
        this.channelForm.reset('')
        this.channel = null;
        let event = new MouseEvent('click', {bubbles: true});
        this.renderer.invokeElementMethod(this.modalCancelDismiss.nativeElement, 'dispatchEvent', [event]);
        // Fire an event to refresh button in Channels component
    }

    handleServiceError(err) {
        this.addChannelStatus = false;
        this.addChannelErrorMessage = 'Failed to save channel information. Please try again later. ' + err.description;
    }

}
