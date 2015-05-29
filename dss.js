var Dss, dss;

Dss = function () {

  this.text = "";

  this.id = "";

};

Dss.prototype.setId = function (idString) {

  this.id = idString;

};

Dss.prototype.setStyle = function (styleString) {

  this.text = styleString;

};

Dss.prototype.insert = function () {

  var style;

  style = document.createElement("style");

  style.setAttribute("type", "text/css");

  style.id = this.id || "dss";

  style.innerHTML = this.text;

  document.body.appendChild(style) || document.getElementsByTagName("body")[0].appendChild(style);

  this.element = style;

  return this;

};

Dss.prototype.update = function (selector, styleString) {

  if (this.text.indexOf(selector) !== -1) {

    var part;
    
    part = this.text.substring(this.text.indexOf(selector));

    part = part.substring(part.indexOf("{"), part.indexOf("}"));

    this.text = this.text.replace(part, styleString);

    this.element.innerHTML = this.text;

  } else {

    this.element.innerHTML = this.element.innerHTML + "\n" + selector + "\n  {\n" + styleString + "\n}";

  }

};

dss = function () {

  return new dss();

};