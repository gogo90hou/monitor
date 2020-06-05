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
            <el-col :span="3" class="detail request_box">
              <div class="title">
                <span class="box_title">请求</span>
              </div>
              <div class="round-box">
                <RoundBar :percent-num="50" :speed="3" class="roundBar" />
                <div class="usage">通道使用百分比</div>
              </div>
            </el-col>
            <el-col :span="4" class="detail info_box">
              <div class="box">
                <div class="info">通道容量：<span class="black">3000</span></div>
                <div class="info">通道事件数量：<span class="black">3500</span></div>
                <div class="info">成功发送的事件数量：<span class="black">3600</span></div>
              </div>
            </el-col>
            <el-col :span="17" class="lineChart_box">
              <div class="detail lineChart">
                <div class="lineChart_title">
                  <span class="one">近段时间通道使用百分比</span>
                </div>
                <div class="lineChart_body">放置折线图</div>
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
              <el-col :span="8">数据源连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="8">写入通道事件数量：<span class="blue">3442</span></el-col>
              <el-col :span="8">接收到的事件总数量：<span class="blue">3442</span></el-col>
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
              <el-col :span="8">发送连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="8">由于错误关闭的连接数量：<span class="blue">3442</span></el-col>
              <el-col :span="8">成功发送数量：<span class="blue">3442</span></el-col>
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
      .round-box {
        >>> .roundBar {
          width: 100px;
          height: 100px;
          .circle-left,
          .circle-right {
            background-color: #5466e0;
          }
          .number {
            top: 8%;
            right: 8%;
            bottom: 8%;
            left: 8%;
            font-size: 30px;
          }
        }
      }
    }
    .info_box {
      border: none;
      .box {
        height: 144px;
        margin-top: 35px;
        padding-left: 30px;
        border-left: 1px solid rgba(219, 219, 219, 0.52);
        .info {
          padding-top: 24px;
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
