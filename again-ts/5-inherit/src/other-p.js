function getToken() {
  var array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  var token = array[0];
  const random = array[0] / 0xffffffff;
  return token;
}
console.log(getToken());
console.log(Math.random());

const mRandom = () => {
  // crypto 需要考虑浏览器兼容
  const crypto =
    window.crypto ||
    window.webkitCrypto ||
    window.mozCrypto ||
    window.oCrypto ||
    window.msCrypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const random = array[0] / 0xffffffff;

  return random;
};
console.log(mRandom());

function randomPassword(size) {
  let seed = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]; //数组
  let createString = "",
    seedLength = seed.length; //数组长度
  for (let i = 0; i < size; i++) {
    let j = Math.floor(mRandom() * seedLength);
    createString += seed[j];
  }
  return createString;
}
console.log(randomPassword(10));

function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return (
    "" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    hour +
    "时" +
    minute +
    "分" +
    second +
    "秒"
  );
}

console.log(getDateTime());

console.log("---------------------------------------------");

const list2 = [
  {
    organizationName: "北京银行",
    organizationId: "88789a04b6c74942a42c8a551c88bb56",
    parentId: null,
    departmentAdminNum: 50,
    manageMerchantNum: 37,
    childrenList: [
      {
        organizationName: "海淀区分行",
        organizationId: "512e2be9586b45f5a30802603694b864",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 9,
        manageMerchantNum: 23,
        childrenList: [
          {
            organizationName: "中关村支行",
            organizationId: "4240a6b225974544bd2504f069962452",
            parentId: "512e2be9586b45f5a30802603694b864",
            departmentAdminNum: 7,
            manageMerchantNum: 20,
            childrenList: null,
            value: "4240a6b225974544bd2504f069962452"
          },
          {
            organizationName: "苏州街支行",
            organizationId: "79b1102ce86647049664e5a45d987134",
            parentId: "512e2be9586b45f5a30802603694b864",
            departmentAdminNum: 0,
            manageMerchantNum: 1,
            childrenList: null,
            value: "79b1102ce86647049664e5a45d987134"
          }
        ],
        value: "512e2be9586b45f5a30802603694b864"
      },
      {
        organizationName: "朝阳区分行",
        organizationId: "fbafca33422541929b6aa1e7bc9a3a50",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 1,
        childrenList: [
          {
            organizationName: "望京西分行1",
            organizationId: "dbbe1c8174a54b1ca4f7971d96b76404",
            parentId: "fbafca33422541929b6aa1e7bc9a3a50",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "dbbe1c8174a54b1ca4f7971d96b76404"
          },
          {
            organizationName: "太阳宫支行",
            organizationId: "b3edf6540b784104846b877ed50c3a59",
            parentId: "fbafca33422541929b6aa1e7bc9a3a50",
            departmentAdminNum: 0,
            manageMerchantNum: 1,
            childrenList: null,
            value: "b3edf6540b784104846b877ed50c3a59"
          }
        ],
        value: "fbafca33422541929b6aa1e7bc9a3a50"
      },
      {
        organizationName: "石景山分行",
        organizationId: "5bb3d33b13444563922c768e9ed9c4bf",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "石景山分行石景山县分行",
            organizationId: "e0338f8e78dd4a48b95423aaa2a1f30f",
            parentId: "5bb3d33b13444563922c768e9ed9c4bf",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "e0338f8e78dd4a48b95423aaa2a1f30f"
          }
        ],
        value: "5bb3d33b13444563922c768e9ed9c4bf"
      },
      {
        organizationName: "密云区分行",
        organizationId: "fe676d250313400885371f6e4262a158",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "密云区子分行",
            organizationId: "f407488aaf724c1d874a1fb83bf0e83e",
            parentId: "fe676d250313400885371f6e4262a158",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "f407488aaf724c1d874a1fb83bf0e83e"
          }
        ],
        value: "fe676d250313400885371f6e4262a158"
      },
      {
        organizationName: "昌平区分行",
        organizationId: "c30623dcb6604feb96561b93d6848616",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "沙河分行",
            organizationId: "4d80f8e3b6d44c94bb77483cddc8bd17",
            parentId: "c30623dcb6604feb96561b93d6848616",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "4d80f8e3b6d44c94bb77483cddc8bd17"
          }
        ],
        value: "c30623dcb6604feb96561b93d6848616"
      },
      {
        organizationName: "辽宁分行（王大仙专用）",
        organizationId: "ead0552d11ae431a86575b17653b9eb9",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 2,
        manageMerchantNum: 1,
        childrenList: [
          {
            organizationName: "振安区支行",
            organizationId: "81193d1882a24136bb4dfeaa55d152cc",
            parentId: "ead0552d11ae431a86575b17653b9eb9",
            departmentAdminNum: 1,
            manageMerchantNum: 1,
            childrenList: null,
            value: "81193d1882a24136bb4dfeaa55d152cc"
          },
          {
            organizationName: "振兴区支行",
            organizationId: "a4de914bcc4e41c6820cf8d9756d39b7",
            parentId: "ead0552d11ae431a86575b17653b9eb9",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "a4de914bcc4e41c6820cf8d9756d39b7"
          },
          {
            organizationName: "元宝区支行",
            organizationId: "834638eca7a4470390c84c59509e462e",
            parentId: "ead0552d11ae431a86575b17653b9eb9",
            departmentAdminNum: 1,
            manageMerchantNum: 0,
            childrenList: null,
            value: "834638eca7a4470390c84c59509e462e"
          }
        ],
        value: "ead0552d11ae431a86575b17653b9eb9"
      },
      {
        organizationName: "上海分行（大力专用）",
        organizationId: "ddf4493b3e184137bece2c541a67fecf",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "虹桥支行",
            organizationId: "ed4db9260e494984a0e8eb9d0ae60789",
            parentId: "ddf4493b3e184137bece2c541a67fecf",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "ed4db9260e494984a0e8eb9d0ae60789"
          }
        ],
        value: "ddf4493b3e184137bece2c541a67fecf"
      },
      {
        organizationName: "黑龙江支行",
        organizationId: "f5e1246c1c0541d1855513b97e1d534c",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: null,
        value: "f5e1246c1c0541d1855513b97e1d534c"
      },
      {
        organizationName: "丰台区分行",
        organizationId: "e661baa494414e38b0dcb881a3cd02d5",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 0,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "金融港支行",
            organizationId: "3b19723dfcb64b1b9a7d0958c7b97b5c",
            parentId: "e661baa494414e38b0dcb881a3cd02d5",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "3b19723dfcb64b1b9a7d0958c7b97b5c"
          }
        ],
        value: "e661baa494414e38b0dcb881a3cd02d5"
      },
      {
        organizationName: "吉林省北京银行分行",
        organizationId: "4cddf9284cfa4aa0974036344df453d7",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 6,
        manageMerchantNum: 6,
        childrenList: [
          {
            organizationName: "北京银行四平支行",
            organizationId: "46a06a032e9148488038cc754b58fa82",
            parentId: "4cddf9284cfa4aa0974036344df453d7",
            departmentAdminNum: 3,
            manageMerchantNum: 2,
            childrenList: null,
            value: "46a06a032e9148488038cc754b58fa82"
          },
          {
            organizationName: "北京银行珲春支行",
            organizationId: "e15a3ec61ab84eff971fb1d14706a88a",
            parentId: "4cddf9284cfa4aa0974036344df453d7",
            departmentAdminNum: 3,
            manageMerchantNum: 4,
            childrenList: null,
            value: "e15a3ec61ab84eff971fb1d14706a88a"
          },
          {
            organizationName: "北京银行延边支行",
            organizationId: "4a7511c147774405bbd2cff575e71fb7",
            parentId: "4cddf9284cfa4aa0974036344df453d7",
            departmentAdminNum: 0,
            manageMerchantNum: 0,
            childrenList: null,
            value: "4a7511c147774405bbd2cff575e71fb7"
          }
        ],
        value: "4cddf9284cfa4aa0974036344df453d7"
      },
      {
        organizationName: "香港分行",
        organizationId: "8a82f95a185e42df82eab043f277b795",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 1,
        manageMerchantNum: 1,
        childrenList: [
          {
            organizationName: "九龙支行",
            organizationId: "a397084f6fc24114accdc6a067209a2f",
            parentId: "8a82f95a185e42df82eab043f277b795",
            departmentAdminNum: 1,
            manageMerchantNum: 1,
            childrenList: null,
            value: "a397084f6fc24114accdc6a067209a2f"
          }
        ],
        value: "8a82f95a185e42df82eab043f277b795"
      },
      {
        organizationName: "辽宁分行",
        organizationId: "0077bc0cebc54e22915ba50a7a0dde95",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 1,
        manageMerchantNum: 0,
        childrenList: [
          {
            organizationName: "辽宁-本溪分行",
            organizationId: "011ff003406d45659defcf0df25ba743",
            parentId: "0077bc0cebc54e22915ba50a7a0dde95",
            departmentAdminNum: 1,
            manageMerchantNum: 0,
            childrenList: null,
            value: "011ff003406d45659defcf0df25ba743"
          }
        ],
        value: "0077bc0cebc54e22915ba50a7a0dde95"
      },
      {
        organizationName: "天津分行",
        organizationId: "feb975a1bd2b46ad8ee99e1fc7c00ad2",
        parentId: "88789a04b6c74942a42c8a551c88bb56",
        departmentAdminNum: 1,
        manageMerchantNum: 4,
        childrenList: [
          {
            organizationName: "北辰区支行",
            organizationId: "64d742470ff842059b25287feadb6db8",
            parentId: "feb975a1bd2b46ad8ee99e1fc7c00ad2",
            departmentAdminNum: 1,
            manageMerchantNum: 4,
            childrenList: null,
            value: "64d742470ff842059b25287feadb6db8"
          }
        ],
        value: "feb975a1bd2b46ad8ee99e1fc7c00ad2"
      }
    ],
    value: "88789a04b6c74942a42c8a551c88bb56"
  }
];
console.time("开始");
let bank = "";
const handleFindBank = (list, id, pId = "") => {
  /* list.forEach((item) => {
    if (pId === item.parentId && item.organizationId === id) {
      handleFindBank(list2, pId, "");
    }
    if (item && item.organizationId === id) {
      bank += item.organizationName;
    } else {
      if (item.childrenList && item.childrenList.length) {
        console.log(item.organizationName);
        handleFindBank(item.childrenList, id, item.organizationId);
      }
    }
  }); */
  for (let i = 0; i < list.length; i++) {
    if (pId === list[i].parentId && list[i].organizationId === id) {
      handleFindBank(list2, pId, "");
    }
    if (list[i] && list[i].organizationId === id) {
      bank += list[i].organizationName + "/";
      break;
    } else {
      if (list[i]?.childrenList && list[i].childrenList?.length) {
        // console.log(list[i].organizationName);
        handleFindBank(list[i].childrenList, id, list[i].organizationId);
      }
    }
  }
};
handleFindBank(list2, "ed4db9260e494984a0e8eb9d0ae60789", "");
if (bank.length) {
  bank = bank.substring(0, bank.length - 1);
}

console.log("kkkkkk6kkk-----", bank);
console.timeEnd("开始");

/* let aObj = { a: 1 };
const bObj = { age: 25, name: "徕卡" };
Object.setPrototypeOf(aObj, bObj);
console.log(aObj.__proto__);
// console.log(Object.getPrototypeOf(aObj));
console.log(aObj.age); // 25 */
