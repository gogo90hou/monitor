<template>
  <div class="detail_body">
    <el-row class="detail_box run_statistical_time_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行状态</span>
          </div>
          <div class="main detail_info">
            <div class="row row_one">
              <span class="col_one">
                运行时长 ：
                <span class="black">3h</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="col_one">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="detail statistical_detail">
          <div class="title">
            <span class="box_title">统计</span>
          </div>
          <div class="detail_info">
            <div class="row"><span class="col one">连接客户端数</span><span class="col two">332</span></div>
            <div class="row"><span class="col one">连接从库数</span><span class="col two">332</span></div>
            <div class="row"><span class="col one">阻塞客户端数</span><span class="col two">332</span></div>
            <div class="row"><span class="col one">pub/sub通道数</span><span class="col two">332</span></div>
            <div class="row last"><span class="col one">pub/sub模式数</span><span class="col two">332</span></div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="detail">
          <div class="title">
            <span class="box_title">当前分钟连接数</span>
            <span class="box_title_right">单位(个)</span>
          </div>
          <div class="lineChart">
            <div class="lineChart_body">
              <echarts-line style="height:190px" :charts-data="chartsData" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_box">
      <el-col :span="7">
        <div class="detail memory_detail">
          <div class="title">
            <span class="box_title">内存</span>
          </div>
          <div class="round-box">
            <CircleBar style="width : 5.2vw;" :circle-data="circleData" class="roundBar" />
            <div class="usage">内存使用率：75%&emsp;&emsp;内存共(8G)：已使用(6G)</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">使用率</span>
          </div>
          <div class="lineChart">
            <div class="lineChart_body">
              <echarts-line style="height:220px" :charts-data="chartsData2" class="echarts"></echarts-line>
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
                  <span class="black">省局服务器1</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">中间件描述：</span>
                  <span
                    class="black content"
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
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1000, 1300, 1100, 2000, 1500, 2660, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1000, 800, 1100, 1020, 1500, 2060, 1870, 2000, 2200, 2000, 1130, 1080, 2700],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'green'
      },
      circleData: {
        precent: 75,
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
  .run_statistical_time_box {
    // 运行情况
    .detail {
      position: relative;
      height: 240px;
      font-size: 14px;
      color: #666;
      .lineChart_title .one {
        display: inline-block;
        height: 22px;
        line-height: 22px;
      }
    }
    .statistical_detail {
      .detail_info {
        width: calc(100% - 24px);
        height: 152px;
        border: 1px solid #e8ebf3;
        margin: 0 12px;
        box-sizing: border-box;
        .row {
          height: 30px;
          line-height: 30px;
          width: 100%;
          border-bottom: 1px solid #e8ebf3;
          color: #606060;
          .one {
            display: inline-block;
            width: 64%;
            height: 100%;
            text-align: center;
            background-color: #f4f5f9;
          }
          .two {
            display: inline-block;
            width: 36%;
            height: 100%;
            text-align: center;
          }
        }
        .last {
          border-bottom: none;
        }
      }
      @media screen and (max-width: 1600px) {
        .detail_info {
          width: 100%;
          margin: 0;
          .row {
            .one {
              width: 75%;
            }
            .two {
              width: 25%;
            }
          }
        }
      }
    }
  }
  .memory_box {
    .detail {
      height: 287px;
      color: #000;
      .round-box {
        >>> .roundBar {
          width: 100px;
          height: 100px;
          top: 40%;
          .number {
            top: 8%;
            right: 8%;
            bottom: 8%;
            left: 8%;
            font-size: 30px;
          }
        }
        .usage {
          color: #666666;
          top: calc(40% + 80px);
        }
      }
    }
    .lineChart_detail {
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
