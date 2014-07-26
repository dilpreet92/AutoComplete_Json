function Autocomplete(element) {
  this.textBoxElement = element;
  this.availableNames = new Array();
}
Autocomplete.prototype.loadJson = function() {
  var _this = this;
  $.ajax({
    url : "data/users.json",
    dataType : "json",
    type : "POST",
    success : function(result){
      $.each(result, function(index) {
        _this.availableNames.push(result[index].name);
      });
    }
  });
  this.bindEvents();
};

Autocomplete.prototype.bindEvents = function() {
  var _this = this;
  this.textBoxElement.autocomplete({
    minlength :2,
    source : _this.availableNames
  });
};

$(document).ready(function() {
  var textBox = $("#text");	
  var autoCompleteObj = new Autocomplete(textBox);
    autoCompleteObj.loadJson();
});