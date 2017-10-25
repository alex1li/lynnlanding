var showText = function (message, index, interval) {
  if (index < message.length) {
    var div = "<div style='font-size:900%; color:white; font-weight:lighter'>"+message[index++]+"</div>"
    $(div).hide().appendTo("#title").fadeIn(1000);
    setTimeout(function () { showText(message, index, interval); }, interval);
  }
  else{
    addArrow();
  }
}

var addArrow = function() {
  var div = "<section id='arrow'><a href='' style='text-align:center; display:block;'><span></span></a></section>"
  $(div).hide().appendTo("#scroll").fadeIn(1000);
}

$(function () {
  showText(["Stop \n", "Wasting\n", "Time"], 0, 500);
});
