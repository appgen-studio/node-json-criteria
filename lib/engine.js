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
var engine_exports = {};
__export(engine_exports, {
  default: () => Engine
});
module.exports = __toCommonJS(engine_exports);
var is = __toESM(require("./is"));
var import_same = __toESM(require("./same"));
var import_utils = require("./utils");
class Engine {
  constructor({ virtuals = [], conditions = [], expansions = [] } = {}) {
    this.registry = { virtuals, conditions, expansions };
  }
  clone() {
    return new Engine({
      virtuals: this.registry.virtuals.slice(),
      conditions: this.registry.conditions.slice(),
      expansions: this.registry.expansions.slice()
    });
  }
  append2(d) {
    for (let t in d) {
      if (t === "expansions" || t === "virtuals" || t === "conditions") {
        for (let k in d[t]) {
          let f = d[t][k];
          this.append(t, k, f);
        }
      }
    }
  }
  append(t, k, f) {
    this.registry[t].push([k, f]);
  }
  prepend(t, k, f) {
    this.registry[t].shift([k, f]);
  }
  replace(t, k, f) {
    let [tk] = this.rule(k);
    if (tk) {
      this.registry[tk][k] = f;
    } else {
      this.append(t, k, f);
    }
  }
  // Find rule with k name.
  rule(k) {
    let r = [void 0, void 0];
    for (let [tk, tv] of (0, import_utils.kvs)(this.registry)) {
      for (let [rk, rf] of tv) {
        if (k === rk) {
          r = [tk, rf];
          break;
        }
      }
    }
    return r;
  }
  test(d, q = {}) {
    let r = true;
    if (is.leaf(q)) {
      r = r && (0, import_same.default)(d, q);
    } else {
      for (let [qk, qv] of (0, import_utils.kvs)(q)) {
        if (qk[0] === "$") {
          let [t, f] = this.rule(qk);
          switch (t) {
            case "expansions":
              r = r && this.test(d, f);
              break;
            case "virtuals":
              r = r && this.test(f.bind(this)(d, qv), qv);
              break;
            case "conditions":
              r = r && f.bind(this)(d, qv, q);
              break;
            default:
              throw new Error(`Unknown rule ${qk}`);
          }
          if (r === false) {
            break;
          }
        } else {
          let tqk = (0, import_utils.decoded)(qk);
          let [dvp, dk] = (0, import_utils.resolve)(d, tqk) || [];
          if (dvp != null && dk.length === 1) {
            r = r && this.test(dvp[dk[0]], qv);
          } else {
            r = r && this.test(void 0, qv);
          }
        }
      }
    }
    return r;
  }
}
//# sourceMappingURL=engine.js.map
