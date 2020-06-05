<template>
  <div class="detail_body">
    <el-row class="detail_box run_space_box" :gutter="20">
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
      <el-col :span="7" class="space_box" style="padding-right: 0;">
        <div class="detail space_detail">
          <div class="title">
            <span class="box_title">空间</span>
          </div>
          <div class="box">
            <div class="round-box one">
              <RoundBar :percent-num="75" :speed="3" class="roundBar" />
              <div class="usage">内存(6G/共8G)</div>
            </div>
            <div class="round-box two">
              <RoundBar :percent-num="59" :speed="3" class="roundBar" />
              <div class="usage">存储(6G/共8G)</div>
            </div>
            <div class="round-box three">
              <RoundBar :percent-num="50" :speed="3" class="roundBar" />
              <div class="usage">临时(6G/共8G)</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="13" class="lineChart_box" style="padding-left: 0;">
        <div class="detail lineChart_detail">
          <div class="lineChart">
            <div class="lineChart_title">内存空间使用率</div>
            <div class="lineChart_body">放置折线图</div>
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
            <div class="lineChart_body">放置折线图</div>
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
        >>> .roundBar {
          width: 100px;
          height: 100px;
          top: 45%;
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
          top: calc(45% + 60px);
        }
        @media screen and (max-width: 1550px) {
          >>> .roundBar {
            width: 80px;
            height: 80px;
          }
          .usage {
            top: calc(45% + 50px);
          }
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
          padding: 0 60px 0 30px;
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
