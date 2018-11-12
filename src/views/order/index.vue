<template>
    <div>
        <Table :data="data" :columns="columns"></Table>
                <Page :total="total" @on-change="pageChange" style="margin-top:10px"></Page>

    </div>
</template>

<script>
import { getOrderList } from "@/plugins/service";
import moment from "moment";
export default {
  data() {
    return {
      data: [],
      total: 0,
      params: {
        skip: 0,
        limit: 10
      },
      columns: [
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
          title: "用户码",
          key: "luckyNumber"
        }
      ]
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let data = await getOrderList(this.params);
      this.data = data.map(item => {
        item.attributes.createdAt = moment(item.createdAt).format(
          "YYYY-MM-DD hh:mm"
        );
        return item.attributes;
      });
    },
    pageChange(pageIndex) {
      let count = (pageIndex - 1) * 10;
      this.params.skip = count;
      this.getData();
    }
  }
};
</script>

<style>
</style>
