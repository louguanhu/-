<template>
  <div class="pagination">
<!--    上-->
    <button :disabled="pageNo===1" @click="$emit('getPageNo',pageNo-1)" >上一页</button>
      <button v-if="startNumAndEndNum.start<1" @click="$emit('getPageNo', 1)"
      :class="{active:pageNo===1}">1</button>
      <button v-if="startNumAndEndNum.start>2">···</button>
<!--    中间部分-->
    <span v-for="(page,index) in startNumAndEndNum.end" :key="index"
          @click="$emit('getPageNo',page)">
      <button v-if="page>=startNumAndEndNum.start" :class="{active:pageNo===page}">{{page}}</button>
    </span>
<!--    下-->
    <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end>totalPage"
            @click="$emit('getPageNo',totalPage)" :class="{active:pageNo===totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo===totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  data(){
    return {
      asc:0,
      bsc:0
    }
  },
  computed:{
    //总共多少页
    totalPage(){
      //向上取整
      return Math.ceil(this.total/this.pageSize)
    },
    startNumAndEndNum(){
      const {continues,totalPage,pageNo} = this
      let start = 0,end=0
      //补助政策现象，连续的页码数比总页数多
      //continutes为连续页码数
      if(continues>totalPage){
        start=1
        end=totalPage
        this.asc=start
        this.bsc=end
      }
      else{
        //  页码数大于5.连续页码为5
        start = pageNo - Math.trunc(continues/2)
        end = pageNo + Math.trunc(continues/2)
        //把不正常的情况解决掉（开始的数字start为0或者-1）
        if(start<1){
          start =1
          end=continues
        }
        //把不正常的情况解决掉（开始的数字end超过页码的总数）
        if(end>totalPage){
          end = totalPage
          start = totalPage-continues+1
        }
      }
      return {start,end}
    }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  };
  .active{
    background: #4cb9fc;
  }
}
</style>
