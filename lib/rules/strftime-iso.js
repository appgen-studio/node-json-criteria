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
var strftime_iso_exports = {};
__export(strftime_iso_exports, {
  default: () => strftime_iso_default
});
module.exports = __toCommonJS(strftime_iso_exports);
var strftime_iso_default = {
  expansions: {
    // Matches ISO date strings.
    "$strftime:iso": {
      $strftime: "%Y-%m-%dT%H:%M:%S%Z"
    }
  }
};
//# sourceMappingURL=strftime-iso.js.map
