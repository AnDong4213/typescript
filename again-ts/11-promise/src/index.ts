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

/* promise
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
  ); */

promise
  .then(
    (successinfo) => {
      console.log("successinfo-1:", successinfo);
      // return "OK-1";
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("第二个异步操作。。。。");
        }, 5);
      });
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

let promise1 = new Promise((resolve, reject) => {
  console.log("第一个Promise的同步区域");
  setTimeout(() => {
    console.log("进入第一个setTimeout");
    resolve("setTimeout第一个Promise");
  }, 5);
});

let promise2 = new Promise((resolve, reject) => {
  console.log("第二个Promise的同步区域");
  setTimeout(() => {
    console.log("进入第二个setTimeout");
    resolve("setTimeout第二个Promise");
    // reject("第二个Promise失败了...");
  }, 5);
});

let promise3 = new Promise((resolve, reject) => {
  console.log("第三个Promise的同步区域");
  setTimeout(() => {
    console.log("进入第三个setTimeout");
    resolve("setTimeout==第三个Promise");
  }, 5);
});

Promise.all([promise1, promise2, promise3])
  .then(
    (resolveValue) => {
      console.log("Promise.all==>哈哈resolveValue:", resolveValue);
    },
    (rejectValue) => {
      console.log("Promise.all==>哈哈rejectValue:", rejectValue);
    }
  )
  .catch((res) => {
    console.log(res);
  });

console.log("end-----");
