<template>
  <div class="detail_body">
    <el-row class="detail_box run_request_box" :gutter="20">
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
      <el-col :span="20">
        <div class="detail_box">
          <el-row style="height: 100%;">
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="detail request_box">
              <div class="title">
                <span class="box_title">请求</span>
              </div>
              <div class="round-box">
                <CircleBar :circle-data="circleData" class="roundBar" style="width: 5.20vw;" />
                <div class="usage">通道使用百分比</div>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4" class="detail borderLeftNone borderRightNone info_box">
              <div class="box">
                <div class="info">通道容量：<span class="black">3000</span></div>
                <div class="info">通道事件数量：<span class="black">3500</span></div>
                <div class="info">成功发送的事件数量：<span class="black">3600</span></div>
              </div>
            </el-col>
            <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="17" class="lineChart_box">
              <div class="detail borderLeft lineChart">
                <div class="lineChart_title">
                  <span class="one">近段时间通道使用百分比</span>
                </div>
                <div class="lineChart_body">
                  <echarts-line style="height:180px" :charts-data="chartsData" class="echarts"></echarts-line>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box date_send_box" :gutter="20">
      <el-col :span="12">
        <div class="detail date_detail">
          <div class="title">
            <span class="box_title">数据源</span>
          </div>
          <div class="main">
            <el-row>
              <el-col :span="7">数据源连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="8">写入通道事件数量：<span class="blue">3442</span></el-col>
              <el-col :span="9">接收到的事件总数量：<span class="blue">3442</span></el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail date_detail">
          <div class="title">
            <span class="box_title">发送</span>
          </div>
          <div class="main">
            <el-row>
              <el-col :span="7">发送连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="10">由于错误关闭的连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="7">成功发送数量：<span class="blue">3442</span></el-col>
            </el-row>
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
        y: [1000, 1300, 1100, 2000, 1500, 2660, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      circleData: {
        precent: 60,
        fontSize: 30,
        color: '#5466E0',
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
  .run_request_box {
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
    .request_box {
      border: none;
    }
    .info_box {
      .box {
        height: 144px;
        margin-top: 35px;
        padding-left: 30px;
        border-left: 1px solid rgba(219, 219, 219, 0.52);
        .info {
          padding-top: 24px;
        }
      }
      @media screen and (max-width: 1550px) {
        .box {
          padding-left: 16px;
        }
      }
    }
  }
  .date_send_box {
    .detail {
      height: 111px;
      color: #000;
    }
  }
  .describe_box {
    .detail {
      height: 229px;
    }
  }
}
</style>
