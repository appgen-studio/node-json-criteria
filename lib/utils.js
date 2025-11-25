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
var utils_exports = {};
__export(utils_exports, {
  arrize: () => arrize,
  biconditional: () => biconditional,
  decoded: () => decoded,
  itest: () => itest,
  itest2: () => itest2,
  kvs: () => kvs,
  map: () => map,
  minimize: () => minimize,
  mintermexp: () => mintermexp,
  minterms: () => minterms,
  patrics: () => patrics,
  patrics2: () => patrics2,
  resolve: () => resolve,
  split: () => split,
  unmap: () => unmap
});
module.exports = __toCommonJS(utils_exports);
var import_assert = __toESM(require("assert"));
var import_json_hash = require("json-hash");
var is = __toESM(require("./is"));
function patrics(minterms2) {
  let F = {};
  for (let minterm of minterms2) {
    if (minterm[2] !== "v") {
      if (!F[minterm[0]]) {
        F[minterm[0]] = minterm[3];
      }
    }
  }
  let P = [];
  let PO = {};
  let alpha = "abcdefghijklmnopqrstuvwxy";
  let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  for (let k in F) {
    let v = F[k];
    let pk = k.split("").map(
      function(e, i) {
        return { "0": ALPHA[i], "1": alpha[i], "-": null }[e];
      }
    ).filter((e) => e).join("");
    P.push([pk, v]);
    for (let pi of v) {
      PO[pi] = true;
    }
  }
  let PI = Object.keys(PO).map((e) => parseInt(e)).sort();
  let PR = PI.map(function(pi) {
    let r = [];
    P.forEach(function(e, i) {
      if (e[1].indexOf(pi) !== -1) {
        r.push(i);
      }
    });
    return r.map((e) => `P${e}`);
  });
  let PM = PR.map((e) => e.map((f) => [f]));
  while (PM.length > 1) {
    let p = PM.pop();
    p.forEach((e) => {
      e.forEach((e2) => {
        PM.forEach((f) => {
          f.forEach((g) => {
            if (g.indexOf(e2) === -1) {
              g.push(e2);
            }
          });
        });
      });
    });
  }
  return PM[0].map((e) => {
    return e.map((f) => {
      return P[parseInt(f.substr(1))][0];
    }).join("");
  }).join("+");
}
function patrics2(minterms2) {
  let P = patrics(minterms2);
  let alpha = "abcdefghijklmnopqrstuvwxy";
  let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  let or = P.split("+").map(function(p) {
    let and = p.split("").map((e) => alpha.indexOf(e)).filter((e) => e !== -1);
    let nor = p.split("").map((e) => ALPHA.indexOf(e)).filter((e) => e !== -1);
    let r = {};
    if (and.length > 0) {
      r.$and = and;
    }
    if (nor.length > 0) {
      r.$nor = nor;
    }
    if (Object.keys(r).length > 0) {
      return r;
    } else {
      return null;
    }
  });
  if (or.length > 0) {
    if (or.length === 1) {
      return or[0];
    } else {
      return { $or: or };
    }
  } else {
    return null;
  }
}
function mintermexp(minterms2) {
  function diff(a, b) {
    let r = [];
    let n = 0;
    let f = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "0" && b[i] === "1" || a[i] === "1" && b[i] === "0") {
        r.push("-");
        if (++n > 1) {
          f = true;
          break;
        }
      } else {
        if (a[i] === b[i]) {
          r.push(a[i]);
        } else {
          f = true;
          break;
        }
      }
    }
    if (f) {
      return false;
    } else {
      return r.join("");
    }
  }
  function combine1(i) {
    let r = [];
    for (; i < minterms2.length; i++) {
      let o = minterms2[i][1];
      for (let j = i + 1; j < minterms2.length; j++) {
        let od = minterms2[j][1] - o;
        if (od === 0) {
          continue;
        }
        if (od === 1) {
          let d = diff(minterms2[i][0], minterms2[j][0]);
          if (d) {
            let _1s = d.split("").filter((e) => e === "1").length;
            minterms2[i][2] = "v";
            minterms2[j][2] = "v";
            let k = [];
            for (let z of [minterms2[i][3], minterms2[j][3]]) {
              for (let l of z) {
                if (k.indexOf(l) === -1) {
                  k.push(l);
                }
              }
            }
            r.push([d, _1s, " ", k]);
          }
        } else {
          break;
        }
      }
    }
    for (let e of r) {
      minterms2.push(e);
    }
    return i;
  }
  {
    let i = 0;
    while (true) {
      let j = combine1(i);
      if (i == j) {
        break;
      } else {
        i = j;
      }
    }
  }
}
function minterms(q, n) {
  let r = [];
  for (let i = 0; i < 2 ** n; i++) {
    let s = new Array(n).fill("0").map((e, j) => 1 << j & i ? "1" : "0").join("");
    let _1s = s.split("").filter((e) => e === "1").length;
    if (itest(q, i)) {
      r.push([s, _1s, " ", [i]]);
    }
  }
  r.sort((a, b) => a[1] - b[1]);
  return r;
}
function itest2(qa, qb, n) {
  let r = true;
  for (let i = 0; i < 2 ** n; i++) {
    let ra = itest(qa, i);
    let rb = itest(qb, i);
    if (ra !== rb) {
      let s = new Array(n).fill("0").map((e, j) => 1 << j & i ? "1" : "0").join("");
      console.error(`${ra} !== ${rb} for ${s}`);
      r = false;
      break;
    }
  }
  return r;
}
function itest(q, i) {
  let r = false;
  if (is.number(q)) {
    r = 1 << q & i ? true : false;
  } else {
    r = ["$and", "$or", "$nor", "$not"].every(
      function(k) {
        let r2 = true;
        if (is.none(q[k])) {
          r2 = true;
        } else {
          switch (k) {
            case "$and":
              r2 = q[k].every((e) => itest(e, i));
              break;
            case "$or":
              r2 = q[k].some((e) => itest(e, i));
              break;
            case "$nor":
              r2 = q[k].every((e) => !itest(e, i));
              break;
            case "$not":
              r2 = !itest(q[k], i);
              break;
          }
        }
        return r2;
      }
    );
  }
  return r;
}
function map(q, f) {
  let r = null;
  if (is.plain(q)) {
    r = {};
    let d = {};
    for (let [k, v] of kvs(q)) {
      if (["$and", "$or", "$nor"].indexOf(k) !== -1) {
        r[k] = map(v, f);
      } else {
        d[k] = v;
      }
    }
    if (!is.leaf(d)) {
      let fd = f(d);
      if (is.leaf(r)) {
        r = fd;
      } else {
        r = { $and: [fd, r] };
      }
    }
  } else {
    if (is.array(q)) {
      r = q.map((e) => map(e, f));
    } else {
      r = f(q);
    }
  }
  return r;
}
function unmap(q, fs) {
  let r = null;
  if (is.plain(q)) {
    r = {};
    for (let [k, v] of kvs(q)) {
      r[k] = unmap(v, fs);
    }
  } else {
    if (is.array(q)) {
      r = q.map((e) => unmap(e, fs));
    } else {
      r = fs[q][1];
    }
  }
  return r;
}
function minimize(qr) {
  let fs = [];
  let q = map(qr, (e) => {
    let d = (0, import_json_hash.digest)(e);
    let i = fs.findIndex((f) => f[0] == d);
    if (i === -1) {
      i = fs.length;
      fs.push([d, e]);
    }
    return i;
  });
  let minterms_ = minterms(q, fs.length);
  mintermexp(minterms_);
  let p = patrics2(minterms_);
  import_assert.default.ok(itest2(q, p, fs.length));
  let r = unmap(p, fs);
  let rks = Object.keys(r);
  if (rks.length === 1 && rks[0] === "$and" && r[rks[0]].length === 1) {
    r = r[rks[0]][0];
  }
  return r;
}
function biconditional(a, b) {
  return !!a ^ !!b ? false : true;
}
function decoded(qk) {
  let r = qk;
  let trim = false;
  loop:
    for (let i = 0; i < qk.length; i++) {
      switch (qk[i]) {
        case " ":
          trim = true;
          continue loop;
        case "$":
          if (trim) {
            r = qk.substr(1);
          }
          break loop;
        default:
          break loop;
      }
    }
  return r;
}
function split(a) {
  let r = void 0;
  if (a[0] === " ") {
    r = [a.substring(1)];
  } else {
    r = a.split(".");
  }
  return r;
}
function resolve(a, path) {
  let stack = split(path);
  let last = [];
  if (stack.length > 0) {
    last.unshift(stack.pop());
  }
  let k = void 0;
  let e = a;
  if (!is.none(e)) {
    while (!is.none(k = stack.shift())) {
      if (!is.none(e[k])) {
        e = e[k];
      } else {
        stack.unshift(k);
        break;
      }
    }
  }
  while (!is.none(k = stack.pop())) {
    last.unshift(k);
  }
  return [e, last];
}
function arrize(a) {
  return Array.isArray(a) ? a : [a];
}
function* kvs(a) {
  if (is.object(a)) {
    for (let k of Object.keys(a)) {
      if (a.hasOwnProperty(k)) {
        yield [k, a[k]];
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  arrize,
  biconditional,
  decoded,
  itest,
  itest2,
  kvs,
  map,
  minimize,
  mintermexp,
  minterms,
  patrics,
  patrics2,
  resolve,
  split,
  unmap
});
//# sourceMappingURL=utils.js.map
