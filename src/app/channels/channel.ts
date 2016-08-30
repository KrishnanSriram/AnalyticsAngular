export class Channel {
    // TODO: This should be a enum with open and closed status
    //TODO: May need to add more fields like _id, rev, start_date
    public owner: string;
    public start_date:string;
    public _id: string;
    public rev: string;

    constructor(public name: string, public description: string, public tags: string, public isPrivate: boolean,
                public status: string) {
        this.owner="Misko Hevery";
        this.start_date = Channel.todaysDate();
    }

    static fromJSON(obj): Channel {
        let channel = new Channel(obj.name, obj.description, obj.tags, obj.isPrivate, obj.status);
        channel._id = obj._id;
        channel.rev = obj.rev;
        return channel;
    }

    toJSON() {
        console.log('Number of tags: ' + this.tags.split(',').length);
        return {
            "name": this.name,
            "owner": this.owner,
            "description": this.description,
            "tags": this.tags.split(','),
            "private": this.isPrivate,
        };
    }

    isPrivateDisplayValue(): string {
        if(this.isPrivate == true) {
            return "Yes";
        }

        return "No";
    }

    static todaysDate(): string {
        let date = new Date();
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }
}