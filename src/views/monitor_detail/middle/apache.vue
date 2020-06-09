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
        <div class="detail_box hardDisk_box">
          <el-row style="height: 100%;">
            <el-col :span="7" class="detail disk_box">
              <div class="title">
                <span class="box_title">硬盘</span>
              </div>
              <div class="round_box">
                <div class="circle"></div>
                <div class="info_box">
                  <div class="prompt one">当前每秒请求数：<span class="size">62个</span></div>
                  <div class="prompt two">运行线程数：<span class="size">58个</span></div>
                  <div class="prompt three">空闲线程数：<span class="size">35个</span></div>
                  <div class="prompt four">空闲线程数：<span class="size">75个</span></div>
                  <div class="prompt five">数据发送速率：<span class="size">54kb/s</span></div>
                  <div class="prompt six">数据接收速率：<span class="size">68kb/s</span></div>
                </div>
              </div>
            </el-col>
            <el-col :span="17" class="lineChart_box">
              <div class="detail lineChart">
                <div class="lineChart_title">
                  <span class="one">每秒请求数(个)</span>
                </div>
                <div class="lineChart_body">放置折线图</div>
              </div>
            </el-col>
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
  .run_request_box {
    // 运行情况
    .detail {
      position: relative;
      height: 240px;
      .round_box {
        .circle {
          position: absolute;
          top: 50%;
          left: 12%;
          transform: translateY(-50%);
          width: 36%;
          padding-top: 18%;
          padding-bottom: 18%;
          border-radius: 50%;
          border: 1px solid red;
        }
        .info_box {
          position: absolute;
          top: 40px;
          width: 45%;
          left: 55%;
          .prompt {
            font-size: 14px;
            height: 30px;
            color: #666666;
            .size {
              color: #434c5f;
            }
          }
          .prompt:before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 10px;
          }
          .one:before {
            background-color: #5466e0;
          }
          .two:before {
            background-color: #5cabfb;
          }
          .three:before {
            background-color: #2ed6c6;
          }
          .four:before {
            background-color: #ffc34e;
          }
          .five:before {
            background-color: #aa49d6;
          }
          .six:before {
            background-color: #26b414;
          }
        }
      }
      .lineChart_title .one {
        display: inline-block;
        height: 22px;
        line-height: 22px;
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
