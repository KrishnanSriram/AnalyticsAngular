"use strict";
var Channel = (function () {
    function Channel(name, description, tags, isPrivate, status) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.isPrivate = isPrivate;
        this.status = status;
        this.owner = "Misko Hevery";
        this.start_date = Channel.todaysDate();
    }
    Channel.fromJSON = function (obj) {
        var channel = new Channel(obj.name, obj.description, obj.tags, obj.isPrivate, obj.status);
        channel._id = obj._id;
        channel.rev = obj.rev;
        return channel;
    };
    Channel.prototype.toJSON = function () {
        console.log('Number of tags: ' + this.tags.split(',').length);
        return {
            "name": this.name,
            "owner": this.owner,
            "description": this.description,
            "tags": this.tags.split(','),
            "private": this.isPrivate,
        };
    };
    Channel.prototype.isPrivateDisplayValue = function () {
        if (this.isPrivate == true) {
            return "Yes";
        }
        return "No";
    };
    Channel.todaysDate = function () {
        var date = new Date();
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    };
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map