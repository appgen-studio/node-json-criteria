var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var same_exports = {};
__export(same_exports, {
  arrays: () => arrays,
  default: () => same
});
module.exports = __toCommonJS(same_exports);
var is = __toESM(require("./is"));
function arrays(a, b, sort = false) {
  let r = true;
  let an = a.length;
  let bn = b.length;
  if (an === bn) {
    if (sort) {
      a.sort();
      b.sort();
    }
    for (let i = 0; i < an; i++) {
      if (a[i] !== b[i]) {
        r = false;
        break;
      }
    }
  } else {
    r = false;
  }
  return r;
}
function same(a, b) {
  let r = false;
  switch (true) {
    // Same scalars.
    case a === b:
      r = true;
      break;
    // Objects.
    case (is.object(a) && is.object(b)):
      switch (true) {
        // Dates.
        case (is.date(a) && is.date(b)):
          r = a.getTime() === b.getTime();
          break;
        // RegExps.
        case (is.regexp(a) && is.regexp(b)):
          r = a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
          break;
        // Array like.
        case (is.array(a) && is.array(b)):
        case (is.args(a) && is.args(b)):
        case (is.buffer(a) && is.buffer(b)):
          r = arrays(a, b);
          break;
        // Other objects.
        default:
          let aks = Object.keys(a);
          let bks = Object.keys(b);
          if (arrays(aks, bks, true)) {
            r = aks.every((k) => same(a[k], b[k]));
          }
          break;
      }
      break;
  }
  return r;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  arrays
});
//# sourceMappingURL=same.js.map
