<template>
  <div class="detail_body">
    <el-row class="detail_box run_speed_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行状态</span>
          </div>
          <div class="main detail_info">
            <div class="row ">
              <span class="">
                运行时长 ：
                <span class="black">3h</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="20" class="table_box">
        <div class="detail table_box">
          <div class="title">
            <span class="box_title">速率</span>
          </div>
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters"/>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box partition_box">
      <el-col :span="24">
        <div class="detail partition_detail">
          <div class="title">
            <span class="box_title">分区数</span>
          </div>
          <el-row>
            <el-col :span="4">分区数：<span class="blue">320</span></el-col>
            <el-col :span="4">复制分区数：<span class="blue">3320</span></el-col>
            <el-col :span="16">leader副本数：<span class="blue">320</span></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box describe_box">
      <el-col :span="24">
        <div class="describe_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">基本信息</span>
            </div>
            <div class="information">
              <el-row>
                <el-col :span="6">
                  中间件名称：
                  <span class="black">ngdf3-3320</span>
                </el-col>
                <el-col :span="6">
                  所在区域：
                  <span class="black">锦江监狱</span>
                </el-col>
                <el-col :span="12">
                  版本信息：
                  <span class="black">v1.0</span>
                </el-col>
                <el-col :span="6">
                  中间件类型：
                  <span class="black">Apache</span>
                </el-col>
                <el-col :span="18">
                  所在服务器：
                  <span class="black">省局服务器</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">中间件描述：</span>
                  <span
                    class="black content"
                  >相较于普通的IDC机房以及服务器厂商，云服务器具有高可用性的特点，阿里云使用更严格的IDC标准、服务器准入标准以及运维标准，保证云计算基础框架的高可用性、数据的可靠性以及云服务器的高可用性。</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      runStateColor: '#27B102',
      getters: 'monitor/soft/flowList',
      fieldArr: [
        {
          label: '流程名称',
          key: 'name',
          formatter: ''
        }, {
          label: '流程状态',
          key: 'state',
          filters: [{ text: '进行中', value: '进行中' }, { text: '已完结', value: '已完结' }, { text: '已拒绝', value: '已拒绝' }]

        }, {
          label: '发起时间',
          key: 'time',
          formatter: ''
        }, {
          label: '耗时',
          key: 'payTime'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_body {
  .tables {
    background-color: #ffffff;
    height: calc(100% - 42px);
    width: 100%;
    overflow-y: scroll;
  }
  .run_speed_box {
    // 运行情况
    .detail {
      position: relative;
      height: 338px;
      font-size: 14px;
      color: #606060;
    }
  }
  .partition_box {
    .detail {
      height: 94px;
      .blue {
        color: #5466e0;
      }
    }
  }
  .describe_box {
    .detail {
      height: 229px;
    }
  }
}
</style>
