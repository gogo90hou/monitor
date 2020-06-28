<template>
  <div class="detail_body">
    <el-row class="detail_box run_resource_box" :gutter="20">
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
      <el-col :span="4" class="resource_box" style="padding-right: 0;">
        <div class="detail resource_detail">
          <div class="title">
            <span class="box_title">资源占用</span>
          </div>
          <div class="main detail_info">
            <div class="row ">
              <span class="">
                CPU使用率：
                <span class="black">40%</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                io写入速率：
                <span class="black">344kb/s</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="">
                io读取速率：
                <span class="black">40%</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                线程数：
                <span class="black">34个</span>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16" class="lineChart_box" style="padding-left: 0;">
        <div class="detail lineChart_detail">
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="fl leftTitle">近段时间io读写速率(kb/s)</span>
              <span class="rightBox">
                <span class="square one">接收数据字节速率</span>
                <span class="square two">发送数据字节速率</span>
              </span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:200px" :charts-data="chartsData" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box network_box">
      <el-col :span="24">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">网络</span>
            <span class="rightBox">
              <span class="box_title_left one">总请求数：<span class="title_blue">344个</span></span>
              <span class="box_title_left two">总连接数：<span class="title_blue">343个</span></span>
              <span class="box_title_left three">当前请求数：<span class="title_blue">34个</span></span>
              <span class="box_title_left four">接收数据字节总数：<span class="title_blue">343个</span></span>
              <span class="box_title_left five">发送数据字节总数：<span class="title_blue">343个</span></span>
              <span class="box_title_left six">接收数据字节的速率：<span class="title_blue">344kb/s</span></span>
              <span class="box_title_left seven">发送数据字节的速率：<span class="title_blue">344kb/s</span></span>
            </span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="fl leftTitle">近段时间接收和发送字节的速率(kb/s)</span>
              <span class="rightBox">
                <span class="square one">接收数据字节速率</span>
                <span class="square two">发送数据字节速率</span>
              </span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:200px" :charts-data="chartsData2" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box deta_box">
      <el-col :span="24">
        <div class="data_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">数据源</span>
            </div>
            <el-row>
              <el-col :span="4">当前文件缓存数：<span class="blue">320</span></el-col>
              <el-col :span="4">文件缓存命中数：<span class="blue">3320</span></el-col>
              <el-col :span="16">文件未缓存命中数：<span class="blue">33320</span></el-col>
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
        y: [
          [60, 77, 91, 90, 65, 73, 78, 20, 88, 66, 71, 54],
          [70, 77, 61, 90, 88, 73, 58, 60, 88, 90, 51, 84]
        ],
        multiple: true,
        markLine: { yAxis: 80, name: '门限' },
        style: 'multipleStyle'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [
          [70, 77, 61, 90, 88, 73, 58, 60, 88, 90, 51, 84],
          [60, 47, 61, 50, 65, 73, 78, 80, 88, 96, 71, 94]
        ],
        multiple: true,
        markLine: { yAxis: 80, name: '门限' },
        style: 'multipleStyle'
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
  .run_resource_box {
    // 运行情况
    .detail {
      position: relative;
      height: 240px;
      font-size: 14px;
      color: #666;
      .lineChart {
        margin: 0 18px;
        .lineChart_title {
          height: 22px;
          .leftTitle {
            line-height: 22px;
          }
          .rightBox {
            .square {
              width: 120px;
            }
            .square.two {
              margin-left: 30px;
            }
          }
        }
      }
    }
    .resource_detail {
      .detail_info {
        .row {
          margin-bottom: 14px;
        }
      }
    }
  }
  .network_box {
    .detail {
      height: 386px;
      .title {
        padding-bottom: 22px;
        border-bottom: 1px solid rgba(219, 219, 219, 0.52);
        @media screen and (max-width: 1800px) {
          .rightBox {
            width: 880px;
            height: 44px;
            .box_title_left {
              width: 25%;
              box-sizing: border-box;
              padding: 0;
            }
          }
        }
      }
      .lineChart {
        margin: 0 18px;
        .lineChart_title {
          height: 22px;
          .leftTitle {
            line-height: 22px;
          }
          .rightBox {
            .square {
              width: 120px;
            }
            .square.two {
              margin-left: 30px;
            }
          }
        }
      }
    }
  }
  .deta_box {
    .detail {
      height: 111px;
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
