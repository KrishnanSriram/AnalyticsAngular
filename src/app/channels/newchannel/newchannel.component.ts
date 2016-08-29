import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, NgForm} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'app-newchannel',
    templateUrl: 'newchannel.component.html',

})
export class NewchannelComponent implements OnInit {

    @Input() formid: string;
    @Input() formtitle: string;

    constructor(private formBuilder: FormBuilder) {
        console.log("NewChannelDialog instantiated: " + formBuilder);
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.dir(form.value);
    }

}
