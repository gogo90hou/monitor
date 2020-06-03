<template>
  <div class="detail_body">
    <el-row class="detail_box run_process_box" :gutter="20">
      <el-col :span="4">
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
            </div>
            <div class="row row_two">
              <span class="col_one">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="col_one">
                数据库文件大小 ：
                <span class="black">8G</span>
              </span>
            </div>
            <div class="row row_four">
              <span class="col_one">
                每秒事务数 ：
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
              当前进程数：
              <span class="title_blue">60</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box session_hit_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">会话</span>
          </div>
          <el-row style="padding-left:16px;">
            <el-col :span="8">
              <span>非活动会话: <span class="blue">324</span></span>
            </el-col>
            <el-col :span="8">
              <span>活动会话: <span class="blue">125</span></span>
            </el-col>
            <el-col :span="8">
              <span>系统会话: <span class="blue">24</span></span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">命中率</span>
          </div>
          <el-row style="padding-left:16px;">
            <el-col :span="6">
              <span>高速缓存命中率：<span class="blue">45%</span></span>
            </el-col>
            <el-col :span="6">
              <span>空间利用率：<span class="blue">86%</span></span>
            </el-col>
            <el-col :span="6">
              <span>库缓存命中率：<span class="blue">19%</span></span>
            </el-col>
            <el-col :span="6">
              <span>字典缓存命中率：<span class="blue">23%</span></span>
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
            <RoundBar :percent-num="46" :speed="3" class="roundBar" />
            <div class="usage">空间利用率：47%(5G/23G)</div>
            <div class="grayBox">
              <span class="one">目标容量：30G</span>
              <span class="two">最大容量：30G</span>
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
            <RoundBar :percent-num="72" :speed="3" class="roundBar" />
            <div class="usage">空间利用率：72%(6G/8G)</div>
            <div class="grayBox pga">
              <span class="one">缓存命中率：68%</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">TPS</span>
            <span class="box_title_center">
              当前事务数（tps）：
              <span class="title_blue">32次/秒</span>
            </span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>每秒事务数（tps）：32次</span>
            </div>
            <div class="lineChart_body">放置折线图</div>
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
              审计功能状态：
              <span class="tltle_blue">开启</span>
            </span>
          </div>
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters" />
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
            <dynamic-table :field-arr="fieldArr" :getters="getters" />
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
              <dynamic-table :field-arr="fieldArr" :getters="getters" />
            </div>
          </div>
          <div class="tableBox">
            <div class="table_title">死锁会话信息</div>
            <div class="tables table_body">
              <dynamic-table :field-arr="fieldArr" :getters="getters" />
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
            <dynamic-table :field-arr="fieldArr" :getters="getters" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">逻辑 I/O</span>
            <span class="box_title_center">当前I/O次数：<span class="title_green">32次/秒</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box fragmentation_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">碎片化程度</span>
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
                  oracle版本：
                  <span class="black">企业版</span>
                </el-col>
                <el-col :span="4">版本号: <span class="black">v1.2</span>
                </el-col>
                <el-col :span="5">
                  所在操作系统：
                  <span class="black">linux操作系统</span>
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
  .run_process_box {
    // 运行情况
    .detail {
      height: 332px;
    }
    .run_detail_body {
      // 加高行间距
      .row {
        margin-bottom: 20px;
      }
    }
  }
  .session_hit_box {
    .detail {
      height: 94px;
    }
  }
  .s_p_t_box {
    .detail {
      height: 300px;
      .round-box {
        .roundBar {
          position: absolute;
          top: 60px;
          transform: translate(-50%, 0);
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
      height: 643px;
      .tableBox {
        height: calc(50% - 36px);
        .table_title {
          color: #606060;
          font-size: 16px;
        }
        .table_body {
          margin-top: 15px;
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
}
</style>
