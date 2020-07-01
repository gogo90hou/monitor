<template>
  <div class="detail_body">
    <el-row class="detail_box run_space_box" :gutter="20">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
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
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="7" class="space_box" style="padding-right: 0;">
        <div class="detail borderRight space_detail">
          <div class="title">
            <span class="box_title">空间</span>
          </div>
          <div class="box">
            <div class="round-box one">
              <CircleBar :circle-data="circleData" class="roundBar" style="width : 5.2vw;" />
              <div class="usage">内存(6G/共8G)</div>
            </div>
            <div class="round-box two">
              <CircleBar :circle-data="circleData2" class="roundBar" style="width : 5.2vw;" />
              <div class="usage">存储(6G/共8G)</div>
            </div>
            <div class="round-box three">
              <CircleBar :circle-data="circleData3" class="roundBar" style="width : 5.2vw;" />
              <div class="usage">临时(6G/共8G)</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="13" class="lineChart_box" style="padding-left: 0;">
        <div class="detail borderLeftNone lineChart_detail">
          <div class="lineChart">
            <div class="lineChart_title">内存空间使用率</div>
            <div class="lineChart_body">
              <echarts-line style="height:180px" :charts-data="chartsData" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box message_box">
      <el-col :span="12">
        <div class="detail message_detail">
          <div class="title">
            <span class="box_title">消息</span>
            <span class="box_title_right">消息数量：<span class="title_blue">34</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="fl">平均每分钟生产的消息数</span>
              <span class="fr">数量(个)</span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:240px" :charts-data="chartsData2" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title_left one">生产者数量：<span class="title_blue">34</span></span>
            <span class="box_title_left two">消费者数量：<span class="title_blue">300</span></span>
            <span class="box_title_left three">已消费消息数量：<span class="title_blue">524</span></span>
            <span class="box_title_left four">未消费消息数量：<span class="title_blue">524</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="fl">平均每分钟消费的消息数</span>
              <span class="fr">数量(个)</span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:240px" :charts-data="chartsData3" class="echarts"></echarts-line>
            </div>
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
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 91, 90, 65, 73, 78, 20, 88, 66, 71, 54],
        markLine: { yAxis: 80, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [70, 77, 61, 90, 88, 73, 58, 60, 88, 90, 71, 54],
        markLine: { yAxis: 80, name: '门限' },
        style: 'green'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 81, 90, 65, 73, 58, 70, 48, 66, 71, 84],
        markLine: { yAxis: 80, name: '门限' },
        style: 'purple'
      },
      circleData: {
        precent: 75,
        fontSize: 30,
        width: 100,
        borderWidth: 8
      },
      circleData2: {
        precent: 75,
        fontSize: 30,
        width: 100,
        borderWidth: 8
      },
      circleData3: {
        precent: 91,
        fontSize: 30,
        width: 100,
        borderWidth: 8
      },
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
    height: calc(100% - 52px);
    width: 100%;
    >>> .el-table__body-wrapper {
      height: calc(224px - 57px);
      overflow-y: scroll;
    }
  }
  .run_space_box {
    // 运行情况
    .detail {
      position: relative;
      height: 240px;
      font-size: 14px;
      color: #666;
      .lineChart_title {
        display: inline-block;
        height: 22px;
        line-height: 22px;
      }
    }
    .space_detail {
      .box {
        margin-left: 15px;
      }
      .round-box {
        width: 33.333%;
        .roundBar {
          top: 45%;
        }
        .usage {
          color: #666666;
          top: calc(45% + 60px);
        }
      }
      .round-box.one {
        left: 4%;
      }
      .round-box.two {
        left: 33%;
      }
      .round-box.three {
        left: 62%;
      }
    }
  }
  .message_box {
    .detail {
      height: 370px;
      .title {
        margin-bottom: 0;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(219, 219, 219, 0.52);
      }
      .lineChart {
        position: absolute;
        top: 90px;
        width: calc(100% - 12px);
        .lineChart_title {
          width: 100%;
          padding-left: 30px;
          padding-right: 60px;
          overflow: hidden;
        }
        @media screen and (max-width: 1500px) {
          .lineChart_title {
            padding-right: 30px;
          }
        }
        .lineChart_body {
          height: 200px;
          padding-left: 30px;
          width: 100%;
          border-right: 1px solid rgba(219, 219, 219, 0.52);
        }
      }
    }
    .message_detail {
      padding-right: 0;
      border-right: none;
      .box_title_right {
        margin-right: 44px;
      }
    }
    .lineChart_detail {
      padding-left: 0;
      border-left: none;
      .title {
        float: right;
        width: 100%;
        .box_title_left {
          float: left;
          width: 25%;
          .title_blue {
            color: #5466e0;
          }
        }
        .box_title_left.one {
          box-sizing: border-box;
          padding-left: 30px;
        }
        .box_title_left.two {
          width: 20%;
        }
        .box_title_left.three {
          width: 25%;
        }
        .box_title_left.four {
          box-sizing: border-box;
          width: 30%;
          text-align: right;
          padding-right: 60px;
        }
        @media screen and (max-width: 1550px) {
          .box_title_left.four {
            padding-right: 30px;
          }
        }
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
