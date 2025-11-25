var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var is_exports = {};
__export(is_exports, {
  args: () => args,
  array: () => array,
  buffer: () => buffer,
  date: () => date,
  leaf: () => leaf,
  none: () => none,
  number: () => number,
  object: () => object,
  plain: () => plain,
  regexp: () => regexp,
  rep: () => rep,
  string: () => string,
  strings: () => strings
});
module.exports = __toCommonJS(is_exports);
function rep(a, b) {
  return Object.prototype.toString.call(a) === b;
}
function array(a) {
  return Array.isArray(a);
}
function plain(a) {
  return object(a) && a.constructor === Object;
}
function object(a) {
  return typeof a === "object" && a !== null;
}
function string(a) {
  return typeof a === "string";
}
function number(a) {
  return typeof a === "number";
}
function strings(a) {
  return array(a) && a.every((e) => string(e));
}
function date(a) {
  return object(a) && rep(a, "[object Date]");
}
function regexp(a) {
  return object(a) && rep(a, "[object RegExp]");
}
function none(a) {
  return a == null;
}
function args(a) {
  return rep(a, "[object Arguments]");
}
function buffer(a) {
  return Buffer != null ? Buffer.isBuffer(a) : false;
}
function leaf(a) {
  let r = true;
  switch (true) {
    case (array(a) && a.length > 0):
    case (object(a) && Object.keys(a).length > 0):
      r = false;
      break;
  }
  return r;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  args,
  array,
  buffer,
  date,
  leaf,
  none,
  number,
  object,
  plain,
  regexp,
  rep,
  string,
  strings
});
//# sourceMappingURL=is.js.map
