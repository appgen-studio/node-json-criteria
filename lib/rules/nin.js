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
var nin_exports = {};
__export(nin_exports, {
  default: () => nin_default
});
module.exports = __toCommonJS(nin_exports);
var import_utils = require("../utils");
var nin_default = {
  conditions: {
    // Evaluates to true if provided value is not in array document.
    $nin: function(d, q) {
      let da = (0, import_utils.arrize)(d);
      return (0, import_utils.arrize)(q).every(function(e) {
        return da.indexOf(e) < 0;
      });
    }
  }
};
//# sourceMappingURL=nin.js.map
