<template>
    <div>
        <Table :data="data" :columns="columns"></Table>
    </div>
</template>

<script>
import {
    getAnswerList
} from '@/plugins/service'
import moment from 'moment'
export default {
    data(){
        return {
            data:[],
            columns:[
                {
                    key:'name',
                    title:'姓名'
                },
                  {
                    key:'phoneNumber',
                    title:'手机号'
                },
                  {
                    key:'address',
                    title:'地址'
                },
                {
                    title:'创建时间',
                    key:'createdAt'
                },
                  {
                    title:'答案1',
                    key:'answer1'
                },
                  {
                    title:'答案2',
                    key:'answer2'
                },
                  {
                    title:'答案3',
                    key:'answer3'
                },
                  {
                    title:'答案4',
                    key:'answer4'
                },
            ],
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            let data = await getAnswerList()
            this.data = data.map(item =>{
                item.attributes.createdAt = moment(item.createdAt).format('YYYY-MM-DD hh:mm')
                return item.attributes
            })
        },
    }
}
</script>

<style>

</style>
