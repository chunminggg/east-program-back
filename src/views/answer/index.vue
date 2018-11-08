<template>
    <div style="height:100%"> 
        <div style="margin-bottom:10px;">
            <Button type="error" @click="deleteRows">删除</Button>
        </div>
        <Table ref="table" :data="data" :columns="columns" height="400"></Table>
        <Page :total="total" @on-change="pageChange" style="margin-top:10px"></Page>
    </div>
</template>

<script>
import { getAnswerList,deleteAnswerList,getAnswerListCount } from "@/plugins/service";
import moment from "moment";
export default {
  data() {
    return {
      data: [],
      total:0,
       params:{
          skip:0,
          limit:10,
      },
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          key: "name",
          title: "姓名"
        },
        {
          key: "phoneNumber",
          title: "手机号"
        },
        {
          key: "address",
          title: "地址"
        },
        {
          title: "创建时间",
          key: "createdAt"
        },
        {
          title: "答案1",
          key: "answer1"
        },
        {
          title: "答案2",
          key: "answer2"
        },
        {
          title: "答案3",
          key: "answer3"
        },
        {
          title: "答案4",
          key: "answer4"
        }
      ],
     
    };
  },
  mounted() {
    this.getData();

  },
  methods: {
    async deleteRows() {
      let selections = this.$refs.table.getSelection();
      if (selections.length) {
          let idArray = selections.map(item => {
              return item.id
          })
        this.$Modal.confirm({
            content:'确认删除吗？',
            title:'提醒',
            onOk:()=>{
                deleteAnswerList(idArray).then(()=>{
                    this.getData()
                })
            }
        })
      } else {
          this.$Message.warning('您未选中任何数据')
      }
    },
    pageChange(pageIndex){
        let count = (pageIndex -1)*10
        this.params.skip = count
        this.getData()

    },
    async getData() {
        
      let data = await getAnswerList(this.params);
      this.data = data.map(item => {
        item.attributes.createdAt = moment(item.createdAt).format(
          "YYYY-MM-DD hh:mm"
        );
        item.attributes.id = item.id
        return item.attributes;
      });
      let count = await getAnswerListCount()
      this.total = count
    }
  }
};
</script>

<style>
</style>
