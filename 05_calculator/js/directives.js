angular.module('calculator', []).directive('wbcalc', function($compile) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var html = "<div class='row-fluid" + (attrs.type == 'calc' ? " sum" : "") + "'>";
            var title = attrs.item.camelToProper();
            html += "<div class='span3 title'>" + title + "</div><div class='span1'>";
            if (attrs.type == 'input') {
                html += "<input ng-model='" + attrs.item + "' size='3'>";
            } else {
                var filter = "number:1";
                if (attrs.unit == "dollars") {
                    filter = "currency:'$'";
                }
                html += "{{" + attrs.item + "() | " + filter + "}}";
            }
            html += "</div><div class='span3'>" + attrs.unit;
            html += "</div>";
            element.append($compile(html)(scope));
        }
    }
});
String.prototype.camelToProper = function () {
 if (this == null || this == "") {
  return this;
 }
 var newText = "";
 var characters = this.split("");
 characters[0] = characters[0].toUpperCase();
 for (var i = 0; i < characters.length; i++) {
  if (characters[i] == characters[i].toUpperCase()
 && i != 0
 && !(characters[i + 1] == characters[i + 1].toUpperCase())
 && characters[i - 1] != " ") {
 newText += " ";
  }
  newText += characters[i];
 }

 return newText;
}

