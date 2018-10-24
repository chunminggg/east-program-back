<template>
    <div>
        <h3 class="common-margin">中奖号配置</h3>
         <Card title="本期中奖号码" icon="ios-options" :padding="0" shadow style="width: 80%;" >
            <CellGroup>
                <Cell v-for="item in data" class="common-margin" :title="item.attributes.luckyNumber" >
                    <Button type="error" size="small" slot="extra" @click="removeSingleNumber(item)">删除</Button>
                </Cell>
            </CellGroup>
        </Card>
        <div class="common-margin">
            <Input v-model="luckyNumber" placeholder="输入中奖号" style="width:50%"></Input>
            <Button type="primary" style="margin-left:10px;" @click="addLuckyNumber">添加中奖号</Button>
        </div>

    </div>
</template>

<script>
import {
  addLuckyNumber,
  getLuckyNumberList,
  deleteAllNumberlist,
  deleteSingleNumber
} from "@/plugins/service";
export default {
  data() {
    return {
      data: [],
      luckyNumber: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let data = await getLuckyNumberList();
        this.data = data;
      } catch (error) {
        console.error;
      }
    },
    async addLuckyNumber() {
      try {
        let data = await addLuckyNumber(this.luckyNumber);
        this.luckyNumber = "";
        this.$Message.success("添加成功");
        this.getData();
      } catch (error) {
        console.error;
      }
    },
    async removeSingleNumber(item){
        try {
            let data = await deleteSingleNumber(item.id)
            this.$Message.success('删除成功')
            this.getData()
        } catch (error) {
            
        }
    },
    async cleanAllNumber(){
        try {
            let data = await deleteAllNumberlist(this.data)
            this.$Message.success('清空成功')
            this.getData()
        } catch (error) {
            console.error
        }
    },
  }
};
</script>

<style scoped>
.common-margin {
  margin-top: 10px;
}
</style>
