function Autocomplete(element) {
  this.textBoxElement = element;
  this.availableNames = new Array();
}

Autocomplete.prototype.init = function() {
  this.loadJSON();
  this.bindEvents();
};

Autocomplete.prototype.loadJSON = function() {
  var _this = this;
  $.ajax({
    url : "data/users.json",
    dataType : "json",
    type : "GET",
    success : function(result){
      console.log(result);
      $.each(result, function(index) {
        $("#availableNames").append($("<option/>").attr("value", result[index].name));
      });
    }
  });
};

$(document).ready(function() {
  var textBox = $("#text");	
  var autoCompleteObj = new Autocomplete(textBox);
  autoCompleteObj.init();
});