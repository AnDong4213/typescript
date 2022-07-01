class Node<T> {
  public currentValue!: T;
  public next!: Node<T>;
  public prev!: Node<T>;

  constructor(prev: Node<T>, currentValue: T, next: Node<T>) {
    this.prev = prev;

    this.currentValue = currentValue;

    this.next = next;
  }
}

class LinkedList<T> {
  public first!: Node<T>;
  public currentOrLast!: Node<T>;
  public size: number = 0; // 集合大小

  public add(newValue: T): void {
    // 把当前节点保存成前一个节点。
    let currentToPrev: Node<T> = this.currentOrLast;

    //console.log("currentToPrev:", currentToPrev);

    // 新建当前节点

    let nextNode: any = null;
    let currentNode: Node<T> = new Node<T>(currentToPrev, newValue, nextNode);
    this.currentOrLast = currentNode; // 把当前新建的节点保存成当前节点
    if (!Boolean(currentToPrev)) {
      // 如果前一个节点不存在,表示新建的当前节点是第一个节点
      this.first = currentNode; // 把新建的当前节点赋值成第一个节点
    } else {
      // 如果不是第一个节点,那么前一个节点就已经存在，
      //  那么要建立上一个节点的下一个节点为当前节点。
      currentToPrev.next = currentNode;
    }

    this.size++;
  }

  public checkIndex(index: number) {
    if (index >= this.size) {
      throw new Error(`提供的索引值大于元素个数:"this.size`);
    }
  }

  public get(index: number) {
    this.checkIndex(index);

    return this.node(index).currentValue;
  }

  node(index: number): Node<T> {
    //  console.log("this.size >> 1:", this.size >> 1)

    if (index < this.size >> 1) {
      let transmitNode: Node<T> = this.first;

      for (let i = 0; i <= index - 1; i++) {
        transmitNode = transmitNode.next;
      }

      return transmitNode;
    } else {
      let transmitNode: Node<T> = this.currentOrLast;

      for (let i = this.size - 1; i > index; i--) {
        transmitNode = transmitNode.prev;
      }

      return transmitNode;
    }
  }

  remove(indexOrNodeObj: number): number;
  remove(indexOrNodeObj: T): T;
  remove(indexOrNodeObj: any): any {
    if (typeof indexOrNodeObj === "number") {
      let nodeRemoved: Node<T> = this.node(indexOrNodeObj);
      this.unlink(nodeRemoved);
    } else {
      this.unlink(indexOrNodeObj);
    }

    return indexOrNodeObj;
  }

  public unlink(nodeRemoved: Node<T>) {
    //let currentValue = nodeRemoved.currentValue;
    let next: Node<T> = nodeRemoved.next;
    let prev: Node<T> = nodeRemoved.prev;
    let tempUseNodeOrValue: any = null;

    if (prev === null) {
      this.first = next;
    } else {
      prev.next = next;
      nodeRemoved.prev = tempUseNodeOrValue;
      nodeRemoved.next = tempUseNodeOrValue;
    }

    nodeRemoved.currentValue = tempUseNodeOrValue;

    this.size--;

    return nodeRemoved;
  }
}

export {};
