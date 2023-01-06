import Promise from "./Promise";

const promise = new Promise((resolve, reject) => {
  // resolve("成功了...");
  setTimeout(() => {
    resolve("成功了...");
  });
});

/* promise.then(
  (successinfo) => {
    console.log("successinfo-1:", successinfo);
    return "OK-1";
  },
  (errorinfo) => {
    console.log("errorinfo-1:", errorinfo);
    return "fail-1";
  }
); */

promise
  .then(
    (successinfo) => {
      console.log("successinfo-1:", successinfo);
      return "OK-1";
    },
    (errorinfo) => {
      console.log("errorinfo-1:", errorinfo);
      return "fail-1";
    }
  )
  .then(
    (successinfo2) => {
      console.log("successinfo-2:", successinfo2);
      return "OK-2";
    },
    (errorinfo) => {
      console.log("errorinfo:-2", errorinfo);
      return "fail-2";
    }
  )
  .then(
    (successinfo3) => {
      console.log("successinfo-3:", successinfo3);
    },
    (errorinfo) => {
      console.log("errorinfo:-3", errorinfo);
    }
  );

console.log("end-----");
