
var $ = require("jquery");
var Sai = require("sai");

require("./bar.css");

var count = 0;
var SaiDeBar = $('<div class="sai-de-bar" tabindex="0"></div>').appendTo(document.body);
var StatusBar = $('<div class="sai-de-status-bar">' +
  '<span class="sai-de-status-bar-error" data-status="error"></span>' +
  '<span class="sai-de-status-bar-warn" data-status="warn"></span>' +
  '<span class="sai-de-status-bar-info" data-status="info"></span>' +
  '</div>').appendTo(SaiDeBar);

StatusBar.find(">span").on("click", function(){
  var state = $(this).attr("data-status");
  filter(state);
}).on("dblclick", function(){
  filter();
});

var SaideConsole = $('<div class="sai-de-console"></div>').appendTo(SaiDeBar);


var COUNTS = {
  error: 0,
  warn: 0,
  info: 0,
  all: 0
}

function filter(state){

  var list = SaideConsole.find(">div");
  if (!state) {
    list.show();
  } else {
    list.each(function(index, item){
      var st = $(item).attr("data-status");
      if (st === state){
        $(item).show();
      } else {
        $(item).hide();
      }
    });
  }
}
function log(type, message) {
  if (type === "log"){
    type = "info";
  }
  SaideConsole.append('<div class="sai-de-console-' + type + '"' +
    ' data-status="' + type + '">' + message + '</div>');

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

module.exports = {
  show: function(){
    SaiDeBar.show();
  },
  hide: function(){
    SaiDeBar.hide();
  },
  log: function(message){
    log("log", message);
  },
  info: info,
  warn: warn,
  error: error,
  valueOf: function(){
    return count;
  }
};
