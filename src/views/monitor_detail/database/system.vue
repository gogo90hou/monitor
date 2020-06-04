<template>
  <div class="detail_body">
    <el-row class="detail_box run_hardDisk_box">
      <el-col :span="7">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行情况</span>
          </div>
          <div class="run_detail_body">
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
                <RoundBar :percent-num="91" :speed="3" />
                <div class="usage">使用率:91%(64G/128G)</div>
              </div>
            </el-col>
            <el-col :span="2" class="partition">
              <div class="histogram_title">分区4个</div>
            </el-col>
            <el-col :span="7" class="histogram_box">
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
            <el-col :span="7" class="histogram_box" style="margin-left:20px;">
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
                <span class="percentage">90%</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_box">
      <el-col :span="7">
        <div class="memory_box_round">
          <div class="detail" style="height: 100%;">
            <div class="title">
              <span class="box_title">内存</span>
            </div>
            <div class="round-box">
              <RoundBar :percent-num="72" :speed="3" />
              <div class="usage">使用率:72%(6G/8G)</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="memory_box_lineChart">
          <span>使用率</span>
          <echarts-line style="height:220px" :charts-data="chartsData"></echarts-line>
        </div>
        <div></div>
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
            <echarts-line style="height:220px" :charts-data="chartsData"></echarts-line>
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
            <echarts-line style="height:220px" :charts-data="chartsData"></echarts-line>
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
                  <span class="black">省局服务器1</span>
                </el-col>
                <el-col :span="24">
                  描述信息：
                  <span
                    class="black"
                  >服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span>
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
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      }
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
      .run_detail_body {
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
          margin-left: 20px;
          margin-top: 16px;
          color: #606060;
          font-size: 14px;
          text-align: right;
        }
      }
    }
  }
  .memory_box {
    .memory_box_round,
    .memory_box_lineChart {
      height: 287px;
      background-color: #fff;
    }
    .memory_box_lineChart {
      padding-left: 22px;
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
}
</style>

