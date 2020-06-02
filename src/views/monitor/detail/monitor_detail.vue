<!--
 * @Author: your name
 * @Date: 2020-05-28 19:25:33
 * @LastEditTime: 2020-05-28 20:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\monitor\detail\monitor_detail.vue
-->
<template>
  <div class="monitor_detail">
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/monitor' }">安防运维</el-breadcrumb-item>
        <el-breadcrumb-item>windows</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button>返回</el-button>
    </div>
    <div class="detail_body">
      <el-row class="run_hardDisk_box">
        <el-col :span="12">
          <div class="run_detail">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div class="run_detail_body">
              <div>
                <span>运行时长 ： 3h</span>
              </div>
              <div>
                <span>
                  运行状态 ：
                  <i :style="{backgroundColor: runStateColor}"></i> 正常
                </span>
              </div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
          <div class="run_detail desInfo" style="margin-top:20px">
            <div class="title">
              <span class="box_title">描述信息</span>
            </div>
            <div class="run_detail_body">
              <div>
                <span>所在区域 ： 3h</span>
              </div>
              <div>
                <span>所在位置 ： 正常</span>
              </div>
              <div>
                <span>其他信息 ： 正常</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="run_detail calendar">
            <div class="title">
              <span class="box_title">运行状态</span>
            </div>
            <div class="calendar-container">
              <calendar></calendar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbValue: '',
      runStateColor: '#27B102'
    }
  }
}
</script>
<style lang="scss">
.monitor_detail {
  .detail_body .run_hardDisk_box .run_detail {
    height: 158px;
    &.desInfo {
      height: 256px;
    }
    &.calendar {
      height: 434px;
      .calendar-container {
        padding: 0 21px;
      }
    }
  }
}
</style>
