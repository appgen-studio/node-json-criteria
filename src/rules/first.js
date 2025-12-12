import * as is from "../is";

export default {
  virtuals: {
    // Returns the first element of an array.
    $first: function (d) {
      let r = undefined;
      if (is.array(d) && d.length > 0) {
        r = d[0];
      }
      return r;
    },
  },
};
