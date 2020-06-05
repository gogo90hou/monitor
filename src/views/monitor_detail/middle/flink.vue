<template>
  <div class="detail_body">
    <el-row class="detail_box run_count_box" :gutter="20">
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
      <el-col :span="9" class="count_box" style="padding-right: 0;">
        <div class="detail count_detail">
          <div class="title">
            <span class="box_title">统计</span>
          </div>
          <div class="main detail_info">
            <div class="row ">
              <span class="">
                注册任务管理器数：
                <span class="black">40</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                正在运行的作业数量：
                <span class="black">344</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="">
                任务槽的总数：
                <span class="black">198</span>
              </span>
            </div>
            <div class="row row_four">
              <span class="">
                可用任务槽数量：
                <span class="black">34</span>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="11" class="lineChart_box" style="padding-left: 0;">
        <div class="detail lineChart_detail">
          <div class="lineChart">
            <div class="lineChart_title">近段时间io读写速率(kb/s)</div>
            <div class="lineChart_body">
              <div class="lineChart_title">(个)</div>
              <div class="box">放置折线图</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_active_box" :gutter="20">
      <el-col :span="12">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">堆内存</span>
            <span class="info two">堆内存使用率：<span class="title_yellow">49%</span></span>
            <span class="info three">堆内存已使用：<span class="title_blue">6G</span></span>
            <span class="info four">堆内存最大可用：<span class="title_blue">5G</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>(%)</span>
            </div>
            <div class="lineChart_body">放置折线图</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">活动线程数</span>
            <span class="box_title_center">当前活动线程数：<span class="title_blue">32个</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>(个)</span>
            </div>
            <div class="lineChart_body">放置折线图</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box gc_box">
      <el-col :span="12">
        <div class="detail lineChart_detail one">
          <div class="title">
            <span class="box_title">GC</span>
            <span class="box_title_center">近段时间老年代GC执行次数:<span class="title_blue">32次/秒</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>近段时间老年代GC执行次数(次)</span>
            </div>
            <div class="lineChart_body">放置折线图</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail lineChart_detail two">
          <div class="title">
            <span class="box_title_center">年轻代GC执行次数：<span class="title_blue">32次/秒</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="box_title">近段时间年轻代GC执行次数（次）</span>
            </div>
            <div class="lineChart_body">放置折线图</div>
          </div>
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
                  <span class="black">省局服务器1</span>
                </el-col>
                <el-col :span="24">
                  中间件描述：
                  <span
                    class="black"
                  >服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS,服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span>
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
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]

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
    height: calc(100% - 52px);
    width: 100%;
    >>> .el-table__body-wrapper {
      height: calc(224px - 57px);
      overflow-y: scroll;
    }
  }
  .run_count_box {
    // 运行情况
    .detail {
      position: relative;
      height: 300px;
      font-size: 14px;
      color: #666;
      .lineChart_title {
        display: inline-block;
        height: 22px;
        line-height: 22px;
      }
      .detail_info {
        .row {
          margin-bottom: 25px;
        }
      }
    }
    .lineChart_detail {
      border-left: 1px solid rgba(219, 219, 219, 0.52);
      .lineChart_body {
        margin-left: 40px;
      }
    }
  }
  .memory_active_box {
    .detail {
      height: 331px;
      .title {
        .info {
          display: inline-block;
          width: 26%;
          text-align: center;
          .title_yellow {
            color: #ffd04e;
          }
          .title_blue {
            color: #6474e2;
          }
        }
      }
    }
  }
  .gc_box {
    .detail {
      height: 391px;
    }
    .lineChart_detail {
      .lineChart {
        padding-top: 30px;
      }
      .box_title_center {
        margin-top: 30px;
      }
    }
    .lineChart_detail.two {
      border-left: 1px solid rgba(219, 219, 219, 0.52);
    }
  }
  .describe_box {
    .detail {
      height: 229px;
    }
  }
}
</style>
