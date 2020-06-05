<template>
  <div class="detail_body">
    <el-row class="detail_box port_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">端口</span>
            <span class="box_small_title">总数：7个</span>
            <span class="box_small_title">已用4个/未用3个</span>
          </div>
          <div class="tableBox two">
            <div class="cacheName">
              <el-row class="medium_box" :gutter="20">
                <el-col :span="4">
                  <div class="small_box active">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">流速 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">流速 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">流速 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(带宽 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
              </el-row>
              <el-row class="medium_box" :gutter="20">
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口2(带宽 10M)</span>
                    <span class="fr">流速 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口1(带宽 10M)</span>
                    <span class="fr">流速 329B/s</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="lineChart">
            <div class="lineChart_body">
              <div class="lineChart_title">
                <span>流速  b / s</span>
                <span class="rightBox">
                  <span class="square one">端口一</span>
                </span>
              </div>
              <div>放置折线图</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box cpu_box">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">CPU</span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="black small_title_one">cpu温度:</span>
              <span class="small_title_two">
                <span class="info">CPU1: 34&#8451;</span>
                <span class="info">CPU2: 34&#8451;</span>
                <span class="info" style="color: #F02323;">CPU3: 38&#8451;</span>
                <span class="info">CPU4: 34&#8451;</span>
              </span>
            </div>
            <div class="lineChart_body">
              <div class="lineChart_title_two">
                <span>&#8451;</span>
                <span class="rightBox">
                  <span class="square one">CPU1</span>
                  <span class="square two">CPU2</span>
                  <span class="square three">CPU3</span>
                  <span class="square four">CPU4</span>
                </span>
              </div>
              <div>放置折线图</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="lineChart" style="margin-top: 52px;">
            <div class="lineChart_title">
              <span class="black small_title_one">cpu负载：</span>
              <span class="small_title_two">
                <span class="info">CPU1: 34%</span>
                <span class="info">CPU2: 34%</span>
                <span class="info" style="color: #F02323;">CPU3: 98%</span>
                <span class="info">CPU4: 34%</span>
              </span>
            </div>
            <div class="lineChart_body">
              <div class="lineChart_title_two">
                <span>负载（%）</span>
                <span class="rightBox">
                  <span class="square one">CPU1</span>
                  <span class="square two">CPU2</span>
                  <span class="square three">CPU3</span>
                  <span class="square four">CPU4</span>
                </span>
              </div>
              <div>放置折线图</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box run_describe_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行信息</span>
          </div>
          <div class="main">
            <div class="row row_one">
              <span class="col_one">
                设备名称 ：
                <span class="black">大门门禁</span>
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
        <div class="detail describe_detail">
          <div class="title">
            <span class="box_title">描述信息</span>
          </div>
          <div class="information">
            <div class="row">
              所在区域：
              <span class="black">锦江监狱</span>
            </div>
            <div class="row">
              所在位置：
              <span class="black">省局机房1</span>
            </div>
            <div class="row">
              描述信息：
              <span
                class="black"
              >服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span>
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
      runStateColor: '#2FD902',
      noStateColor: '#A0A0A0',
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
  .port_box {
    .detail {
      height: 454px;
      .title {
        .box_small_title {
          margin-left: 27px;
        }
      }
      .tableBox.two {
        height: 120px;
        .cacheName {
          .medium_box {
            margin-top: 20px;
            .small_box {
              width: 100%;
              height: 32px;
              background-color: #f4f3f9;
              line-height: 32px;
              color: #444444;
              font-size: 14px;
              padding: 0 4px;
            }
            @media screen and (max-width: 1600px) {
              .small_box {
                height: 64px;
              }
              .fr {
                float: left;
                margin-left: 12px;
              }
            }
            .no {
              opacity: 0.9;
              color: #c2c2c2;
              border: 1px solid #eeefff;
            }
            .active {
              background-color: #5466e0;
              color: #ffffff;
            }
          }
        }
        .lineChart {
          .lineChart_title {
            margin-top: 40px;
            margin-bottom: 26px;
          }
        }
      }
    }
  }
  .cpu_box {
    .detail {
      height: 391px;
      .lineChart {
        .lineChart_title {
          font-size: 14px;
          padding-bottom: 66px;
          .small_title_one {
            float: left;
            width: 20%;
          }
          .small_title_two {
            float: right;
            width: 80%;
            .info {
              float: left;
              width: 25%;
              text-align: center;
            }
          }
        }
        .lineChart_body {
          .lineChart_title_two {
            margin-bottom: 14px;
          }
        }
      }
    }
  }
  .run_describe_box {
    .detail {
      height: 240px;
      .row {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
