<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Microsoft YaHei";
  color: #333;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.ellipsis{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.vm {
  vertical-align: middle;
}
// 辅助垂直居中的伪元素
.vms::after {
  content: "";
  vertical-align: middle;
  display: inline-block;
  height: 100%;
}
a {
  transition: all 0.2s !important;
}
.bold {
  font-weight: bold;
}
.font12 {
  font-size: 12px;
}
.font14 {
  font-size: 14px;
}
.ivu-btn-text:focus {
  box-shadow: none !important;
}
.max-height {
  height: 100% !important;
}
.ivu-table {
  .blue-a {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
  .green-a {
    color: #19be6b;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .red-a {
    color: #ed3f14;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
.green-btn:hover {
  color: #13bd6c !important;
  border-color: #13bd6c !important;
}
</style>
