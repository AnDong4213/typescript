import ArrayList from "./ArrayList";

export default class Pager {
  firstRecordNoCurPage!: number; //每一页的第一条记录号是多少
  pageSize: number = 3; //每一页总共有几条记录
  pageCount: number = 0; // 当前是第几页--从前端页面传递过来的数据
  dataList!: ArrayList; // 封装数据表取出来的全部数据的集合类【等外部传递数据给dataList】

  constructor(pageCount: number) {
    this.pageCount = pageCount;
  }

  public showCurrentPageData() {
    console.log(this.dataList);
  }
}
