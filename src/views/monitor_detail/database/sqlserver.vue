<template>
  <div class="detail_body">
    <el-row class="detail_box run_cache_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行信息</span>
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
            <div class="row row_three">
              <span class="col_one">
                每秒执行编译数量 ：
                <span class="black">32次</span>
              </span>
            </div>
            <div class="row row_four">
              <span class="col_one">
                已获取的缓冲页数 ：
                <span class="black">17</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="detail statistical_detail">
          <div class="title">
            <span class="box_title">缓存管理</span>
          </div>
          <div class="main statistical_detail_body">
            <el-row class="row">
              <el-col :span="8">
                <span>高速缓冲区命中率：</span>
                <span class="black">40%</span>
              </el-col>
              <el-col :span="8">
                <span>缓冲池页面数：</span>
                <span class="black">23</span>
              </el-col>
              <el-col :span="8">
                <span>线程缓存命中率：</span>
                <span class="black">60%</span>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col :span="8">
                <span>每秒懒写入个数：</span>
                <span class="black">589</span>
              </el-col>
              <el-col :span="8">
                <span>物理数据页每秒读取数：</span>
                <span class="black">589</span>
              </el-col>
              <el-col :span="8">
                <span>物理数据每秒写入数：</span>
                <span class="black">65</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box save_lock_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">锁存</span>
          </div>
          <div class="main">
            <el-row>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  线程获取闩的平均等待时间：
                  <span class="blue">325</span>
                </span>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  未能立即授予的闩锁请求数：
                  <span class="blue">158</span>
                </span>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  闩锁请求的总等待时间：
                  <span class="blue">74</span>
                </span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">锁</span>
          </div>
          <div class="main">
            <el-row>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  锁平均等待时间：
                  <span class="blue">225</span>
                </span>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  每秒超时的锁请求数：
                  <span class="blue">125</span>
                </span>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <span>
                  每秒导致死锁的请求数：
                  <span class="blue">24</span>
                </span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box plan_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">计划缓存信息</span>
            <span class="box_title_center">
              计划缓存内存占用：
              <span class="title_green">30%</span>
            </span>
          </div>
          <div class="tableBox">
            <div class="tables table_body">
              <dynamic-table :field-arr="fieldArr" :getters="getters" :height="240" class="tables"/>
            </div>
          </div>
          <div class="tableBox two">
            <div class="table_title">计划缓存命中率</div>
            <div class="cacheName">
              <el-row class="medium_box" :gutter="20">
                <el-col v-for="item in cacheArr" :key="item.id" :span="4">
                  <div class="small_box" :class="item.active ? 'active': ''" @click="cacheChange(item)">
                    <span class="fl">{{ item.cacheName }}</span>
                    <span class="fr">{{ item.precent }}%</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="lineChart">
              <div class="lineChart_title">
                <span>%</span>
                <span class="rightBox">
                  <span class="square one">{{ chartsData.cacheName }}</span>
                </span>
              </div>
              <div class="lineChart_body">
                <echarts-line style="height:230px" :charts-data="chartsData"></echarts-line>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box sql_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">SQL错误</span>
          </div>
          <div class="main">
            <el-row>
              <el-col :span="5">
                <span>
                  每秒累计错误数：
                  <span class="blue">325</span>
                </span>
              </el-col>
              <el-col :span="5">
                <span>
                  每秒DB离线错误：
                  <span class="blue">178</span>
                </span>
              </el-col>
              <el-col :span="5">
                <span>
                  信息错误：
                  <span class="blue">347</span>
                </span>
              </el-col>
              <el-col :span="5">
                <span>
                  断开错误：
                  <span class="blue">125</span>
                </span>
              </el-col>
              <el-col :span="4">
                <span>
                  用户错误：
                  <span class="blue">24</span>
                </span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box temporary_box">
      <el-col :span="7">
        <div class="detail">
          <div class="title">
            <span class="box_title">SQL错误</span>
          </div>
          <div class="row row_one">
            <span class="col_one">
              当前使用的的临时表数量：
              <span class="black">2325</span>
            </span>
          </div>
          <div class="row row_two">
            <span class="col_one">
              当前每秒创建临时表数量：
              <span class="black">37</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail lineChart">
          <div class="lineChart_title">
            <span>个</span>
          </div>
          <div class="lineChart_body">
            <echarts-line style="height:210px" :charts-data="chartsData2"></echarts-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box batch_scanning_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">批处理请求</span>
            <span class="box_title_center">
              当前每秒批处理请求数：
              <span class="title_blue">2341次</span>
            </span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>次</span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:230px" :charts-data="chartsData3"></echarts-line>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">全表扫描数量</span>
            <span class="box_title_center">
              全表扫描数量:
              <span class="title_blue">1258次</span>
            </span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>次</span>
            </div>
            <div class="lineChart_body">
              <echarts-line style="height:230px" :charts-data="chartsData4"></echarts-line>
            </div>
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
                  sqlserver版本：
                  <span class="black">企业版</span>
                </el-col>
                <el-col :span="4">
                  版本号:
                  <span class="black">v1.2</span>
                </el-col>
                <el-col :span="5">
                  所在操作系统：
                  <span class="black">linux操作系统</span>
                </el-col>
                <el-col :span="10">
                  所在服务器：
                  <span class="black">省局服务器</span>
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
      cacheArr: [
        { id: 1, cacheName: '缓存区1', precent: '76', active: true },
        { id: 2, cacheName: '缓存区2', precent: '84', active: false },
        { id: 3, cacheName: '缓存区3', precent: '32', active: false },
        { id: 4, cacheName: '缓存区4', precent: '47', active: false },
        { id: 5, cacheName: '缓存区5', precent: '51', active: false },
        { id: 6, cacheName: '缓存区6', precent: '69', active: false },
        { id: 7, cacheName: '缓存区7', precent: '78', active: false },
        { id: 8, cacheName: '缓存区8', precent: '40', active: false }
      ],
      getters: 'monitor/soft/flowList',
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [92, 73, 57, 78, 75, 60, 70, 40, 23, 70, 70, 80, 27],
        style: 'purple',
        markLine: { yAxis: 80, name: '门限' },
        cacheName: '缓存区1'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2600, 2300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData4: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2800, 1800, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
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
  },
  methods: {
    cacheChange (data) {
      if (this.chartsData.cacheName !== data.cacheName) {
        data.active = true;
        this.cacheArr.forEach(item => {
          item.active = false;
          if (item === data) {
            item.active = true;
          }
        })
        this.chartsData.cacheName = data.cacheName;
        var arr = [];
        for (var i = 0; i < 12; i++) {
          arr.push(Math.floor(Math.random() * 100))
        }
        this.chartsData.y = arr
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_body {
  .tables {
    background-color: #ffffff;
    width: 100%;
    height: 240px;
    padding: 0px;
  }
  .tables >>> .el-table__header {
    width: calc(100% + 17px) !important;
  }
  .tables >>> .el-table__body {
    width: calc(100% + 5px) !important;
  }
  .run_cache_box {
    // 运行情况
    .detail {
      height: 240px;
    }
    .detail_info,
    .statistical_detail_body {
      // 加高行间距
      .row {
        margin-bottom: 20px;
      }
    }
  }
  .save_lock_box {
    .detail {
      height: 94px;
    }
    @media screen and (max-width: 1919px) {
      .detail {
        height: 114px;
        .el-col {
          line-height: 22px;
        }
      }
    }
  }
  .plan_box {
    .detail {
      height: 770px;
      .tableBox {
        height: calc(40% - 36px);
        .table_title {
          color: #606060;
          font-size: 16px;
        }
        .table_body {
          margin-top: 15px;
        }
      }
      .tableBox.two {
        height: calc(60% - 36px);
        .cacheName {
          height: 84px;
          .medium_box {
            margin-top: 20px;
            .small_box {
              width: 100%;
              height: 32px;
              background-color: rgba(244, 243, 249, 0.9);
              line-height: 32px;
              color: #444444;
              font-size: 14px;
              padding: 0 12px;
              margin-bottom: 20px;
              cursor: pointer;
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
  .sql_box {
    .detail {
      height: 94px;
    }
  }
  .temporary_box {
    .detail {
      height: 287px;
      .row {
        margin-top: 26px;
      }
      .row_two {
        margin-top: 44px;
      }
    }
    .lineChart {
      border-left: 1px solid rgba(236, 236, 236, 0.52);
      .lineChart_title {
        margin-top: 20px;
        margin-bottom: 14px;
      }
    }
  }
  .batch_scanning_box {
    .detail {
      height: 330px;
    }
  }
}
</style>
