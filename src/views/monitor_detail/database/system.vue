<template>
  <div class="detail_body">
    <el-row class="detail_box run_hardDisk_box">
      <el-col :span="7">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行情况</span>
          </div>
          <div class="detail_info">
            <div class="row row_one">
              <span class="col_one">
                运行时长 ：
                <span class="black">3h</span>
              </span>
              <span class="col_two">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="col_one">
                进程数量 ：
                <span class="black">43</span>
              </span>
              <span class="col_two">
                线程数量 ：
                <span class="black">32</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="col_one">
                最大句柄数 ：
                <span class="black">1254</span>
              </span>
              <span class="col_two">
                当前句柄数 ：
                <span class="black">871</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail hardDisk_detail">
          <el-row style="height: 100%;">
            <el-col :span="7" class="hardDisk_detail_round">
              <div class="title">
                <span class="box_title">硬盘</span>
              </div>
              <div class="round-box">
                <CircleBar style="width : 6.51vw" :circle-data="circleData" class="roundBar" />
                <div class="usage">使用率:92%(64G/128G)</div>
              </div>
            </el-col>
            <el-col :span="3" class="partition">
              <div class="histogram_title">分区4个</div>
            </el-col>
            <el-col :span="6" class="histogram_box" style="padding-right:10px;">
              <div class="histogram_cdef">
                <span class="disk">C盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
              <div class="histogram_cdef">
                <span class="disk">E盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
            </el-col>
            <el-col :span="6" class="histogram_box" style="padding-left:10px;">
              <div class="histogram_cdef">
                <span class="disk">D盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
              <div class="histogram_cdef">
                <span class="disk">F盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small" style="width : 90%;background-color: #F13E3E;"></div>
                  </div>
                  <div class="text">已使用90G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">100%</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_box">
      <el-col :span="7">
        <div class="detail borderRightNone memory_box_round">
          <div class="title">
            <span class="box_title">内存</span>
          </div>
          <div class="round-box">
            <CircleBar style="width : 6.51vw" :circle-data="circleData2" class="roundBar" />
            <div class="usage">使用率:72%(6G/8G)</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail lineChart_detail">
          <div class="lineChart">
            <span class="lineChart_title">使用率</span>
            <echarts-line style="height:220px" :charts-data="chartsData" class="echarts"></echarts-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box cpu_disk_box">
      <el-col :span="12">
        <div class="cpu_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">CPU</span>
              <span class="box_title_center">
                当前cpu负载：
                <span class="title_green">60%</span>
              </span>
            </div>
            <echarts-line style="height:260px" :charts-data="chartsData2"></echarts-line>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="disk_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">磁盘IO</span>
              <span class="box_title_two">
                入方向字节数：
                <span class="title_blue">43kb/s</span>
              </span>
              <span class="box_title_three">
                出方向字节数：
                <span class="title_yellow">45kb/s</span>
              </span>
            </div>
            <echarts-line style="height:260px" :charts-data="chartsData3"></echarts-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box describe_box">
      <el-col :span="24">
        <div class="describe_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">描述信息</span>
            </div>
            <div class="information">
              <el-row :gutter="20">
                <el-col :span="5">
                  操作系统：
                  <span class="black">windows操作系统</span>
                </el-col>
                <el-col :span="4">
                  操作系统版本：
                  <span class="black">v1.2</span>
                </el-col>
                <el-col :span="5">
                  操作系统类型：
                  <span class="black">64位操作系统</span>
                </el-col>
                <el-col :span="10">
                  所在服务器：
                  <span class="black">省局服务器</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">描述信息：</span>
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
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [62, 53, 61, 78, 25, 60, 70, 70, 53, 60, 70, 80, 71],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [42, 53, 61, 78, 25, 60, 70, 70, 53, 60, 70, 80, 71],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [
          [92, 65, 64, 62, 65, 20, 23, 60, 30, 80, 26, 60, 87],
          [63, 66, 63, 62, 66, 60, 70, 25, 26, 66, 30, 90, 26]
        ],
        multiple: true,
        markLine: { yAxis: 80, name: '门限' },
        style: 'multipleStyle2'
      },
      circleData: {
        precent: 92
      },
      circleData2: {
        precent: 72
      },
      info: ''
    }
  },
  created () {
    this.getDetail();
  },
  methods: {
    getDetail () {
      this.$request({
        url: '/os/metric/detail',
        method: 'get'
      }).then(data => {
        this.info = data
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_body {
  .run_hardDisk_box {
    .detail {
      height: 240px;
    }
    // 运行情况
    .run_detail {
      margin-right: 20px;
      .detail_info {
        .row {
          margin-bottom: 20px;
          .col_one {
            float: left;
            width: 50%;
          }
          .col_two {
            float: right;
            width: 50%;
            text-align: left;
          }
        }
      }
    }
    // 硬盘
    .hardDisk_detail {
      .hardDisk_detail_round {
        position: relative;
        height: 100%;
        border-right: 1px solid #ececec;
      }
      // 分区
      .partition {
        .histogram_title {
          margin-left: 47px;
          color: #606060;
          font-size: 14px;
          text-align: left;
          height: 22px;
          line-height: 22px;
        }
        @media screen and (max-width: 1550px) {
          .histogram_title {
            margin-left: 26px;
          }
        }
      }
    }
  }
  .memory_box {
    .detail {
      height: 287px;
      border-left: none;
    }
    .lineChart_detail {
      padding-left: 0;
      .lineChart {
        height: 100%;
        border-left: 1px solid rgba(236, 236, 236, 0.52);
        .lineChart_title {
          width: 100%;
          margin-left: 11px;
        }
        .echarts {
          top: 25px;
        }
      }
    }
  }
  .cpu_disk_box {
    .detail {
      background-color: #fff;
      height: 331px;
    }
    .cpu_detail {
      margin-right: 11px;
    }
    .disk_detail {
      margin-left: 11px;
    }
  }
  .describe_box {
    .detail {
      .last_info {
        .content {
          width: calc(100% - 76px);
        }
      }
    }
  }
}
</style>

