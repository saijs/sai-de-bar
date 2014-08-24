
var $ = require("jquery");
var Sai = require("sai");

require("./bar.css");

var count = 0;
var SaiDeBar = $('<div class="sai-de-bar" tabindex="0"></div>').appendTo(document.body);
var StatusBar = $('<div class="sai-de-status-bar">' +
  '<span class="sai-de-status-bar-error"></span>' +
  '<span class="sai-de-status-bar-warn"></span>' +
  '<span class="sai-de-status-bar-info"></span>' +
  '</div>').appendTo(SaiDeBar);
var SaideConsole = $('<div class="sai-de-console"></div>').appendTo(SaiDeBar);


var COUNTS = {
  error: 0,
  warn: 0,
  info: 0,
  all: 0
}
function log(type, message) {
  SaideConsole.append('<div class="sai-de-console-' + type + '">' + message + '</div>');

  COUNTS[type] ++;
  COUNTS.all ++;

  var error_width = COUNTS.error *100 / COUNTS.all;
  var warn_width = COUNTS.warn * 100 / COUNTS.all;
  var info_width = COUNTS.info * 100 / COUNTS.all;

  StatusBar.find(".sai-de-status-bar-error").css({width: error_width + "%"});
  StatusBar.find(".sai-de-status-bar-warn").css({
    width: warn_width + "%",
    left: error_width + "%"
  });
  StatusBar.find(".sai-de-status-bar-info").css({
    width: info_width + "%",
    left: (error_width + warn_width) + "%"
  });
}

function info(message){
  log("info", message);
}

function warn(message){
  log("warn", message);
}

function error(message){
  log("error", message);
}

Sai.on("jserror", function(err){
  error( err.msg + '<br/>File: ' +err.file + '#L' + err.line);
});

module.exports = {
  show: function(){
    SaiDeBar.show();
  },
  hide: function(){
    SaiDeBar.hide();
  },
  info: info,
  warn: warn,
  error: error,
  valueOf: function(){
    return count;
  }
};
