import * as is from "../is";

export default {
  virtuals: {
    // Returns the last element of an array.
    // Similar to JavaScript's Array.pop() behavior (returns last element).
    $pop: function (d) {
      let r = undefined;
      if (is.array(d) && d.length > 0) {
        r = d[d.length - 1];
      }
      return r;
    },
  },
};
