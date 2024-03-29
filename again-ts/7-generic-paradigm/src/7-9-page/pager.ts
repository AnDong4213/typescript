import ArrayList from "./ArrayList";

// T extends object 【是泛型约束的一种表现】泛型约束简单点说就是把泛型的具体化数据类型范围缩小
export default class Pager<U extends object> {
  firstRecordNoCurPage!: number; //每一页的第一条记录号是多少
  pageSize: number = 3; //每一页总共有几条记录
  pageCount: number = 0; // 当前是第几页--从前端页面传递过来的数据
  dataList!: ArrayList<U>; // 封装数据表取出来的全部数据的集合类【等外部传递数据给dataList】

  constructor(pageCount: number) {
    this.pageCount = pageCount;
  }

  public showCurrentPageData() {
    this.firstRecordNoCurPage = this.pageSize * (this.pageCount - 1);
    // 当前页的最后一条记录号
    let lastRecordNoCurPage = this.firstRecordNoCurPage + this.pageSize - 1;
    //  当前页的所有记录

    //let resultDataListCurpage = lastRecordNoCurPage >= this.dataList.size() - 1 ?
    // 如果lastRecordNoCurPage计算是按照每一页3条记录计算出来的最后一页的最后一条记录，
    // 如果最后一页小于3条记录, 就直接slice到this.dataList.size()就可以了
    return lastRecordNoCurPage >= this.dataList.size() - 1
      ? this.dataList.element.slice(
          this.firstRecordNoCurPage,
          this.dataList.size()
        )
      : this.dataList.element.slice(
          this.firstRecordNoCurPage,
          lastRecordNoCurPage + 1
        );
  }
}
