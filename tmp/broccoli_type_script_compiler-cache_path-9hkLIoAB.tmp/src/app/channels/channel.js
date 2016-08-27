"use strict";
var Channel = (function () {
    // TODO: This should be a enum with open and closed status
    //TODO: May need to add more fields like _id, rev, start_date
    function Channel(name, description, tags, isPrivate, status) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.isPrivate = isPrivate;
        this.status = status;
    }
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map