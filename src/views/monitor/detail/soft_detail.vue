<!--
 * @Author: your name
 * @Date: 2020-05-29 10:00:05
 * @LastEditTime: 2020-05-29 10:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\monitor\detail\soft_detail.vue
-->
<template>
  <div class="soft_detail">
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/monitor' }">应用监控软件</el-breadcrumb-item>
        <el-breadcrumb-item>刑罚执行</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button>返回</el-button>
    </div>
    <div class="detail_body">
      <el-row class="detail_box run_process_box">
        <el-col :span="5">
          <div class="detail run_detail" style="margin-right: 22px;">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div>
              <div class="row row_one">
                <span>运行时长 : <span class="black">3h</span> </span>
              </div>
              <div class="row row_two">
                <span>
                  运行状态 ：
                  <i class="small_round" :style="{backgroundColor: runStateColor}"></i><span class="black">正常</span>
                </span>
              </div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="detail process_detail noMargin">
            <div class="title">
              <span class="box_title">流程</span>
            </div>
            <div>
              <div class="row">
                <span>流程总数 : <span class="black">3h</span> </span>
              </div>
              <div class="row">
                <span>当前审批流程 : <span class="black">正常</span> </span>
              </div>
              <div class="row">
                <span>已完成流程 : <span class="black">正常</span> </span>
              </div>
              <div class="row">
                <span>已拒绝流程 : <span class="black">正常</span> </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters" />
            <!-- <div class="title">
              <span class="box_title">流程</span>
            </div>-->
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box run_hardDisk_box" style="margin-top:20px">
        <el-col>
          <div class="detail run_detail" style="height:auto">
            <div class="title">
              <span class="box_title">系统</span>
              <div class="tips">
                <p>今日请求耗时详情（注：默认时间排序，点击切换耗时排序）</p>
                <div class="buttons">
                  <span>时间排序</span>
                  <span>耗时排序</span>
                </div>
              </div>
            </div>
            <div class="sysTable">
              <dynamic-table :field-arr="fieldArr" :getters="getters" />
              <pagination
                v-show="listQuery.total>0"
                :total="listQuery.total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
              />
            </div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="nums">
                  每分钟请求个数:
                  <strong>344</strong>
                </div>
                <echarts-line style="height:240px" :charts-data="chartsData"></echarts-line>
              </el-col>
              <el-col :span="12">
                <div class="nums">
                  今日异常:
                  <strong>344</strong>
                </div>
                <dynamic-table :field-arr="abnormalArr" :getters="getters" class="tables" />
              </el-col>
            </el-row>
            <!-- <div class="title">
              <span class="box_title">流程</span>
            </div>-->
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box describe_box">
        <el-col :span="24">
          <div class="detail describe_detail">
            <div class="title">
              <span class="box_title">基本信息</span>
            </div>
            <div class="information">
              <el-row>
                <el-col :span="6">
                  应用软件名称：
                  <span class="black">省局刑罚执行</span>
                </el-col>
                <el-col :span="18">
                  所在区域：
                  <span class="black">锦江监狱</span>
                </el-col>
                <el-col :span="6">
                  版本号：
                  <span class="black">v1.1</span>
                </el-col>
                <el-col :span="18">
                  所在服务器：
                  <span class="black">省局服务器1</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">应用软件描述：</span>
                  <span
                    class="black content"
                  >服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS,阿里云提供的云服务器ECS,阿里云提供的云服务器ECS</span>
                </el-col>
              </el-row>
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
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        // markLine: { yAxis: 2000, name: 'test' },
        style: 'green'
      },
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
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]

        }, {
          label: '发起时间',
          key: 'time',
          formatter: ''
        }, {
          label: '耗时',
          key: 'payTime'
        }
      ],
      abnormalArr: [
        {
          label: '异常类型',
          key: 'name',
          formatter: ''
        }, {
          label: '异常发生时间',
          key: 'time',
          formatter: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.soft_detail {
  .tables {
    background-color: #ffffff;
    height: 240px;
    width: calc(100% - 20px);
    .el-table__body-wrapper {
      height: 189px;
      overflow-y: scroll;
    }
  }
  .tips {
    font-size: 14px;
    color: #000;
    overflow: hidden;
    p {
      display: inline-block;
    }
    .buttons {
      float: right;
      span {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.14);
      }
    }
  }
  .nums {
    font-size: 16px;
    color: #000;
    margin-bottom: 10px;
    strong {
      font-weight: bold;
    }
  }
  .sysTable {
    margin-top: 40px;
  }
  .detail_body .run_process_box {
    &.noMargin {
      margin: 0;
    }
    .run_detail {
      height: 240px;
      .row {
        margin-bottom: 20px;
      }
    }
    .process_detail {
      height: 240px;
      .row {
        margin-bottom: 20px;
      }
    }
  }
  .describe_box {
    .detail {
      height: 229px;
      .last_info {
        .content {
          width: calc(100% - 104px);
        }
      }
    }
  }
}
</style>
