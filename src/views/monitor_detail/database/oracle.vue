<template>
  <div class="detail_body">
    <el-row class="detail_box run_process_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行情况</span>
          </div>
          <div class="detail_info">
            <div class="row row_one">
              <span class="col_one">
                运行时长 :
                <span class="black">3h</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="col_one">
                运行状态 :
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="col_one">
                数据库文件大小 :
                <span class="black">8G</span>
              </span>
            </div>
            <div class="row row_four">
              <span class="col_one">
                每秒事务数 :
                <span class="black">32</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="detail process_detail">
          <div class="title">
            <span class="box_title">进程</span>
            <span class="box_title_center">
              当前进程数:
              <span class="title_blue">60</span>
            </span>
          </div>
          <echarts-line style="height:260px" :charts-data="chartsData"></echarts-line>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box session_hit_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">会话</span>
          </div>
          <el-row class="main">
            <el-col :span="8">
              <span>
                非活动会话:
                <span class="blue">324</span>
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                活动会话:
                <span class="blue">125</span>
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                系统会话:
                <span class="blue">24</span>
              </span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">命中率</span>
          </div>
          <el-row class="main">
            <el-col :xs="12" :sm="12" :lg="12" :xl="6">
              <span>
                高速缓存命中率:
                <span class="blue">45%</span>
              </span>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12" :xl="6">
              <span>
                空间利用率:
                <span class="blue">86%</span>
              </span>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12" :xl="6">
              <span>
                库缓存命中率:
                <span class="blue">19%</span>
              </span>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12" :xl="6">
              <span>
                字典缓存命中率:
                <span class="blue">23%</span>
              </span>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box s_p_t_box" :gutter="20">
      <el-col :span="6">
        <div class="detail">
          <div class="title">
            <span class="box_title">SGA</span>
          </div>
          <div class="round-box">
            <CircleBar style="width : 6.51vw;height: 6.51vw;" :circle-data="circleData" class="roundBar" />
            <div class="usage">空间利用率:47%(5G/23G)</div>
            <div class="grayBox">
              <span class="one">目标容量:30G</span>
              <span class="two">最大容量:30G</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="detail">
          <div class="title">
            <span class="box_title">PGA</span>
          </div>
          <div class="round-box">
            <CircleBar style="width : 6.51vw;height : 6.51vw;" :circle-data="circleData2" class="roundBar" />
            <div class="usage">空间利用率:72%(6G/8G)</div>
            <div class="grayBox pga">
              <span class="one">缓存命中率:68%</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">TPS</span>
            <span class="box_title_center">
              当前事务数（tps）:
              <span class="title_blue">32次/秒</span>
            </span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>每秒事务数（tps）:32次</span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:220px" :charts-data="chartsData2"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box audit_user_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">审计</span>
            <span class="box_title_right">
              审计功能状态:
              <span class="tltle_blue">开启</span>
            </span>
          </div>
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters" :height="230" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">用户</span>
            <span class="box_title_right">
              连接用户
              <span class="title_green">365</span>个 / 锁定用户
              <span class="title_green">26</span>个
            </span>
          </div>
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters" :height="230" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box key_box">
      <el-col :span="24">
        <div class="detail key_detail">
          <div class="title">
            <span class="box_title">锁</span>
          </div>
          <div class="tableBox">
            <div class="table_title">锁等待列表</div>
            <div class="tables table_body">
              <dynamic-table :field-arr="fieldArr" :getters="getters" :height="240" />
            </div>
          </div>
          <div class="tableBox">
            <div class="table_title">死锁会话信息</div>
            <div class="tables table_body">
              <dynamic-table :field-arr="fieldArr" :getters="getters" :height="240" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box table_logic_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">表空间</span>
          </div>
          <div class="tables table_body">
            <dynamic-table :field-arr="fieldArr" :getters="getters" :height="230" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">逻辑 I/O</span>
            <span class="box_title_center">
              当前I/O次数:
              <span class="title_green">32次/秒</span>
            </span>
          </div>
          <echarts-line style="height:230px" :charts-data="chartsData3"></echarts-line>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box fragmentation_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">碎片化程度</span>
          </div>
          <ul class="dash">
            <li>
              <dashProgress name="表空间1" :num="15"></dashProgress>
            </li>
            <li>
              <dashProgress name="表空间2" :num="80"></dashProgress>
            </li>
            <li>
              <dashProgress name="表空间3" :num="25"></dashProgress>
            </li>
            <li>
              <dashProgress name="表空间4" :num="40"></dashProgress>
            </li>
            <li>
              <dashProgress name="表空间5" :num="61"></dashProgress>
            </li>
          </ul>
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
                  oracle版本:
                  <span class="black">企业版</span>
                </el-col>
                <el-col :span="4">
                  版本号:
                  <span class="black">v1.2</span>
                </el-col>
                <el-col :span="5">
                  所在操作系统:
                  <span class="black">linux操作系统</span>
                </el-col>
                <el-col :span="10">
                  所在服务器:
                  <span class="black">省局服务器</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">描述信息:</span>
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
        y: [1800, 1700, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1200, 2300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      circleData: {
        precent: 47
      },
      circleData2: {
        precent: 72
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
    height: 230px;
    width: 100%;
    padding: 0px;
  }
  .tables >>> .el-table__header {
    width: calc(100% + 17px) !important;
  }
  .tables >>> .el-table__body {
    width: calc(100% + 5px) !important;
  }
  .tm {
    text-align: center;
  }
  .run_process_box {
    // 运行情况
    .detail {
      height: 332px;
    }
    .detail_info {
      // 加高行间距
      .row {
        margin-bottom: 20px;
      }
    }
  }
  .dash {
    font-size: 0;
    width: 80%;
    margin: auto;
    li {
      display: inline-block;
      width: 20%;
      font-size: 14px;
    }
  }
  .session_hit_box {
    .detail {
      height: 100px;
    }
  }
  .s_p_t_box {
    .detail {
      height: 300px;
      .round-box {
        .roundBar {
          top: 40%;
        }
        .usage {
          position: absolute;
          top: 75%;
        }
        .grayBox {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: 66%;
          height: 30px;
          line-height: 30px;
          background-color: #eeeff4;
          word-spacing: -5px;
          .one,
          .two {
            display: inline-block;
            width: 50%;
            height: 100%;
            border: 1px solid #fff;
            text-align: center;
          }
          .two {
            border-right: 0;
          }
        }
        .grayBox.pga {
          width: 60%;
          .one {
            width: 100%;
            border: none;
          }
        }
        @media screen and (max-width: 1500px) {
          .grayBox {
            width: 88%;
          }
        }
      }
      .lineChart {
        .lineChart_title {
          margin-top: -18px;
        }
      }
    }
  }
  .audit_user_box {
    .detail {
      height: 300px;
    }
  }
  .key_box {
    .key_detail {
      height: 644px;
      .tableBox {
        height: calc(50% - 36px);
        .table_title {
          color: #606060;
          margin-top: 20px;
          font-size: 16px;
        }
        .table_body {
          margin-top: 26px;
        }
      }
    }
  }
  .table_logic_box {
    .detail {
      height: 300px;
    }
  }
  .fragmentation_box {
    .detail {
      height: 233px;
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
