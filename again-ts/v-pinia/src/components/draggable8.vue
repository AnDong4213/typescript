<template>

  <div>

    <el-table :data="tableData"
              ref="singleTable"
              highlight-current-row
              border
              row-key="id"
              class="load_table">

      <el-table-column type="index"
                       width="50"
                       label="序号"
                       align="center"></el-table-column>

      <el-table-column prop="name"
                       width="50"
                       label="姓名"
                       align="center"></el-table-column>

      <el-table-column prop="sex"
                       width="50"
                       label="性别"
                       align="center"></el-table-column>

      <el-table-column prop="height"
                       width="50"
                       label="身高"
                       align="center"></el-table-column>

      <el-table-column prop="weight"
                       width="50"
                       label="体重"
                       align="center"></el-table-column>

    </el-table>

  </div>

</template>

<script>
// import Sortable from "sortablejs";
import Sortable from "vuedraggable";

export default {

  data() {

    return {

      tableData: []

    };

  },

  mounted() {

    this.dragSort();

    setTimeout(() => {

      this.tableData = [

        {

          id: '1',

          name: '小明',

          height: '33',

          weight: '3',

          sex: '男'

        },

        {

          id: '2',

          name: '小红',

          height: '22',

          weight: '75',

          sex: "男"

        },

        {

          id: '3',

          name: '小红2',

          height: '22',

          weight: '74',

          sex: "男",

          by: '7z'

        }, {

          id: '4',

          name: '小红3',

          height: '20',

          weight: '73',

          sex: "男",

          by: '3'

        }, {

          id: '5',

          name: '小红5',

          height: '22',

          weight: '72',

          sex: "男"

        }

      ]

    }, 0)

  },

  methods: {

    //表格拖动排序

    dragSort() {

      const el = this.$refs.singleTable.$el.querySelectorAll(

        ".el-table__body-wrapper > table > tbody"

      )[0];

      this.sortable = Sortable.create(el, {

        ghostClass: "sortable-ghost",

        setData: function (dataTransfer) {

          dataTransfer.setData("Text", "");

        },

        onEnd: e => {

          //e.oldIndex为拖动一行原来的位置，e.newIndex为拖动后新的位置

          const targetRow = this.tableData.splice(e.oldIndex, 1)[0];

          this.tableData.splice(e.newIndex, 0, targetRow);

          console.log(this.tableData, '排序后的数据')

          let dragId = this.tableData[e.newIndex].id; //拖动行的id

          let oneId, twoId;

          //拖动行的前一行

          if (this.tableData[e.newIndex - 1]) {

            oneId = this.tableData[e.newIndex - 1].id;

          } else {

            oneId = "";

          }

          //拖动行的后一行

          if (this.tableData[e.newIndex + 1]) {

            twoId = this.tableData[e.newIndex + 1].id;

          } else {

            twoId = "";

          }

          console.log(dragId, oneId, twoId)

          this.postRequest({

            url: this.dragUrl,

            data: {

              dragId: dragId,

              oneId: oneId,

              twoId: twoId,

              projectId: ""

            },

            success: result => {

              if (result) {

                this.$message({

                  message: "拖动排序成功!",

                  type: "success"

                });

              } else {

                this.$message({

                  message: "拖动排序失败！",

                  type: "error"

                });

              }

            }

          });

        }

      });

    }

  }

};

</script>
