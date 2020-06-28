<template>
  <div class="detail_body">
    <el-row class="detail_box run_space_line_box" :gutter="20">
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
      <el-col :span="11">
        <div class="detail space_detail histogram_box">
          <div class="title">
            <span class="box_title">空间使用情况</span>
          </div>
          <div class="one">
            <div class="histogram_cdef">
              <span class="disk">eden:</span>
              <div class="histogram_middle_box">
                <div class="figure">
                  <div class="figure_small"></div>
                </div>
                <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
              </div>
              <span class="percentage">45%</span>
            </div>
            <div class="histogram_cdef">
              <span class="disk">oldGen:</span>
              <div class="histogram_middle_box">
                <div class="figure">
                  <div class="figure_small"></div>
                </div>
                <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
              </div>
              <span class="percentage">45%</span>
            </div>
          </div>
          <div class="two">
            <div class="histogram_cdef">
              <span class="disk">survivor:</span>
              <div class="histogram_middle_box">
                <div class="figure">
                  <div class="figure_small"></div>
                </div>
                <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
              </div>
              <span class="percentage">45%</span>
            </div>
            <div class="histogram_cdef">
              <span class="disk">PermGen:</span>
              <div class="histogram_middle_box">
                <div class="figure">
                  <div class="figure_small" style="width : 90%;background-color: #F13E3E;"></div>
                </div>
                <div class="text">已使用90G&nbsp;&nbsp;共100G</div>
              </div>
              <span class="percentage">90%</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="detail line_detail">
          <div class="title">
            <span class="box_title">线程数</span>
            <span class="box_title_right">单位(个)</span>
          </div>
          <div class="lineChart">
            <div class="lineChart_body">
              <echarts-line style="height:180px" :charts-data="chartsData" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_box">
      <el-col :span="7">
        <div class="detail memory_detail">
          <div class="title">
            <span class="box_title">堆内存</span>
          </div>
          <div class="round-box">
            <CircleBar style="width : 5.2vw;" :circle-data="circleData" class="roundBar" />
            <div class="usage">堆内存使用率:75%(6G/共8G)</div>
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
    <el-row class="detail_box gc_box">
      <el-col :span="12">
        <div class="detail GC_detail">
          <div class="title">
            <span class="box_title">GC</span>
            <div class="box_title_bottom">当前老年代GC执行次数：<span class="title_blue">34 次/秒</span></div>
          </div>
          <div class="lineChart" style="width: 100%;">
            <div class="lineChart_title">近期老年代GC执行次数(次)</div>
            <div class="lineChart_body">
              <echarts-line style="height:220px" :charts-data="chartsData2" class="echarts"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail GC_detail">
          <div class="title">
            <div class="box_title_bottom two">当前年轻代GC执行次数：<span class="title_blue">34 次/秒</span></div>
          </div>
          <div class="lineChart" style="width: 100%;">
            <div class="lineChart_title">近期年轻代GC执行次数(次)</div>
            <div class="lineChart_body"><echarts-line style="height:220px" :charts-data="chartsData3" class="echarts"></echarts-line></div>
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
          [1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100, 1200, 1300, 1100, 1800, 1500],
          [1100, 1800, 1500, 1200, 1300, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100]
        ],
        multiple: true,
        markLine: { yAxis: 2000, name: '门限' },
        style: 'multipleStyle'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1000, 1300, 1100, 2000, 1500, 2660, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2000, 1700, 1100, 2000, 1500, 1300, 1870, 2000, 1800, 1600, 1130, 2400],
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
  .run_space_line_box {
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
    .histogram_box {
      .histogram_cdef {
        margin-left: 38px;
        width: 40%;
        .disk {
          width: 68px;
        }
        .histogram_middle_box {
          display: inline-block;
          width: calc(100% - 130px);
        }
      }
      .two {
        margin-left: calc(40% + 20px);
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
  .gc_box {
    .detail {
      height: 370px;
      .box_title_bottom {
        width: 100%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(219, 219, 219, 0.52);
      }
      .box_title_bottom.two {
        margin-top: 22px;
      }
      .lineChart {
        position: absolute;
        top: 114px;
      }
    }
    .lineChart_detail {
      border: 1px solid rgba(219, 219, 219, 0.52);
    }
  }
  .describe_box {
    .detail {
      height: 229px;
    }
  }
}
</style>
