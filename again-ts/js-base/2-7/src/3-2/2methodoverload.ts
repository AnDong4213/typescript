type MessageType = "image" | "audio" | string;
type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};
const messages: Array<Message> = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好啊,今晚咱们一起去三里屯吧"
  },
  {
    id: 2,
    type: "audio",
    sendmessage: "朝辞白帝彩云间，千里江陵一日还"
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "你好！张无忌"
  },
  {
    id: 4,
    type: "image",
    sendmessage: "刘老根苦练舞台绝技！"
  },
  {
    id: 5,
    type: "image",
    sendmessage: "今晚王牌对王牌节目咋样?"
  }
];

// 函数重载
// 重载签名的参数的类型一定是具体的
function getMessage(value: number): Message;
function getMessage(value: MessageType, count: number): Array<Message>;

// 实现签名的参数的可以是any
function getMessage(
  value: number | MessageType, // value可以是any
  count: number = 1 // 没有初始值的话，第一个重载函数会报错
): Message | Array<Message> | undefined {
  // 返回值的类型可以不写，会自动推导
  if (typeof value === "number") {
    return messages.find((msg) => value === msg.id);
  } else {
    // return messages.filter((msg) => value === msg.type);
    return messages.filter((msg) => value === msg.type).splice(0, count);
  }
}

/* console.log(getMessage("audio"));
// let msg = getMessage(1).id; // 写法错误
let msg = (<Message>getMessage(1)).id; // 类型转换，转换为联合类型中的(Message | Array<Message> | undefined)某一种类型
console.log(msg); */
console.log(getMessage(1).type);
getMessage("image", 2).forEach((msg) => {
  console.log(msg);
});
