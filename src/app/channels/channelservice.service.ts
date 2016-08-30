import {Channel} from "./channel";
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";

@Injectable()
export class ChannelService {
    //TODO: this should be moved into a configuration file, and should be used across the application.
    // private BASE_URL = "http://localhost:3000/api/";
    private BASE_URL = "http://personalanalytics.mybluemix.net/api/";
    private CHANNEL_LIST = this.BASE_URL + "channels";
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // this.headers.append('Access-Control-Allow-Origin', '*');
    }


    getChannels(): Observable<any> {
        return this.http.get(this.CHANNEL_LIST, this.headers)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    /**
     * Handle HTTP error
     */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    addNewChannel(channel: Channel): Observable<any> {
        console.log("addNewChannel for new channel");
        var channelJSON = channel.toJSON();
        console.log(channelJSON);
        return this.http.post(this.CHANNEL_LIST, channelJSON)
            .map(res => res.json())
            .catch(this.handleError);
    }

    editChannel(channel: Channel) {
        console.log("editChannel")
        // this should return an observable
    }

    updateChannel(channel: Channel) {
        console.log("updateChannel in Channel")
        let url = this.CHANNEL_LIST + "/" + channel._id;
        var channelJSON = channel.toJSON();
        console.log('UpdateChannel JSON: ');
        console.dir(channelJSON);
        return this.http.put(url, channelJSON)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteChannel(channel: Channel) {
        console.log("deleteChannel in Channel")
        let url = this.CHANNEL_LIST + "/" + channel._id;
        return this.http.delete(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findChannel() {
        console.log("getChannelList")
        // this should return an observable
    }

}