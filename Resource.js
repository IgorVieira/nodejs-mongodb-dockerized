'use strict';

class Resource {
  constructor(resourceId, ipAddr, inUse, clientId) {
    this._resourceId = resourceId;
    this._ipAddr = ipAddr || null;
    this._inUse = inUse || false;
    this._clientId = clientId || null;
  }

  static createFromAnon(anonObj) {
    return new Resource(anonObj.resourceId, anonObj.ipAddr, anonObj.inUse, anonObj.clientId);
  }

  get resourceId() {
    return this._resourceId;
  }

  get ipAddr() {
    return this._ipAddr;
  }

  get inUse() {
    return this._inUse;
  }

  set inUse(value) {
    this._inUse = value;
  }

  get clientId() {
    return this._clientId;
  }

  set clientId(value) {
    this._clientId = value;
  }
}

module.exports = Resource;
