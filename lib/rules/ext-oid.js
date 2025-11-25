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
var ext_oid_exports = {};
__export(ext_oid_exports, {
  default: () => ext_oid_default
});
module.exports = __toCommonJS(ext_oid_exports);
var ext_oid_default = {
  expansions: {
    // Matches Extended JSON ObjectId.
    "$ext:oid": {
      $type: "object",
      $keys: ["$oid"],
      " $oid": {
        $is: "string:oid"
      }
    }
  }
};
//# sourceMappingURL=ext-oid.js.map
