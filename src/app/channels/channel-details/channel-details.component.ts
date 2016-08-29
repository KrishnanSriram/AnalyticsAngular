import { Component, OnInit, Input } from '@angular/core';
import {Channel} from "../channel";

@Component({
  moduleId: module.id,
  selector: 'app-channel-details',
  templateUrl: 'channel-details.component.html',
})
export class ChannelDetailsComponent implements OnInit {

    @Input() selectedChannel: Channel;
  constructor() { }

  ngOnInit() {
  }

}
