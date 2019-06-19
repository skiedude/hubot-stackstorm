// Copyright 2019 Extreme Networks, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

var Log = require('log');

function Logger(enabled) {
  this.enabled = enabled;
  this.log = new Log('debug');

  this.error = function(msg) {
    if (!this.enabled) {
      return;
    }
    this.log.error(msg);
  };

  this.warning = function(msg) {
    if (!this.enabled) {
      return;
    }
    this.log.warning(msg);
  };

  this.info = function(msg) {
    if (!this.enabled) {
      return;
    }
    this.log.info(msg);
  };

  this.debug = function(msg) {
    if (!this.enabled) {
      return;
    }
    this.log.debug(msg);
  };
}

function Robot(name, adapter, enable_logging) {
  this.logger = new Logger(enable_logging);
  this.name = name;
  this.commands = [];
  this.adapter = adapter;

  this.messageRoom = function(recipient, data) {
    return;
  }

  this.emit = function(event, data) {
    return;
  }
}

module.exports = Robot;
