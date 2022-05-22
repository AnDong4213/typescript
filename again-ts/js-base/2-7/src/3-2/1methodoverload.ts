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

function getMessage(
  value: number | MessageType
): Message | Array<Message> | undefined {
  if (typeof value === "number") {
    return messages.find((msg) => value === msg.id);
  } else {
    return messages.filter((msg) => value === msg.type);
  }
}

console.log(getMessage("audio"));
// let msg = getMessage(1).id; // 写法错误
let msg = (<Message>getMessage(1)).id; // 类型转换，转换为联合类型中的(Message | Array<Message> | undefined)某一种类型
console.log(msg);
