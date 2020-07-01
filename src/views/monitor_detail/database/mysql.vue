<template>
  <div class="detail_body">
    <el-row class="detail_box run_statistical_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行情况</span>
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
        <div class="detail statistical_detail">
          <div class="title">
            <span class="box_title">查询统计</span>
          </div>
          <div class="main statistical_detail_body">
            <el-row class="row">
              <el-col :span="6">
                <span>查询操作数量：</span>
                <span class="black">98</span>
              </el-col>
              <el-col :span="6">
                <span>删除操作数量：</span>
                <span class="black">23</span>
              </el-col>
              <el-col :span="6">
                <span>更新操作数量：</span>
                <span class="black"></span>
              </el-col>
              <el-col :span="6">
                <span>慢查询：</span>
                <span class="black">124</span>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col :span="6">
                <span>每秒接收字节数：</span>
                <span class="black">589</span>
              </el-col>
              <el-col :span="6">
                <span>每秒发送字节数：</span>
                <span class="black">589</span>
              </el-col>
              <el-col :span="6">
                <span>当前连接数：</span>
                <span class="black">589</span>
              </el-col>
              <el-col :span="6">
                <span>最大连接数：</span>
                <span class="black">589</span>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col :span="6">
                <span>当前线程活跃数：</span>
                <span class="black">41</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box disk_tps_box" :gutter="20">
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">磁盘</span>
            <span class="box_title_two">
              物理磁盘读取次数：
              <span class="title_blue">2224次</span>
            </span>
            <span class="box_title_three">
              物理磁盘读取次数：
              <span class="title_yellow">49%</span>
            </span>
          </div>
          <echarts-line style="height:260px" :charts-data="chartsData"></echarts-line>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">TPS</span>
            <span class="box_title_center">
              每秒事务数( tps )：
              <span class="title_blue">1232次</span>
            </span>
          </div>
          <echarts-line style="height:260px" :charts-data="chartsData2"></echarts-line>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box cache_box">
      <el-col :span="12">
        <div class="detail borderRightNone">
          <div class="title">
            <span class="box_title">缓存管理</span>
            <span class="box_title_two">
              当前线程缓存命中个数：
              <span class="title_blue">72个</span>
            </span>
            <span class="box_title_three">
              当前线程缓存命中率：
              <span class="title_yellow">43%</span>
            </span>
          </div>
          <div class="main line_title">近段时间线程缓存命中率: ( % )</div>
          <div class="main">
            <echarts-line style="height:200px" :charts-data="chartsData3"></echarts-line>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail borderLeft">
          <div class="title">
            <span class="box_title_two">
              当前查询缓存命中个数：
              <span class="title_blue">92个</span>
            </span>
            <span class="box_title_three">
              当前查询缓存命中率：
              <span class="title_yellow">73%</span>
            </span>
          </div>
          <div class="main line_title">近段时间查询缓存命中个数: ( % )</div>
          <div class="main">
            <echarts-line style="height:200px" :charts-data="chartsData4"></echarts-line>
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
                  mysql版本：
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
      getters: 'monitor/soft/flowList',
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [92, 73, 57, 78, 75, 60, 70, 40, 23, 70, 70, 80, 27],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData4: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [92, 63, 56, 68, 65, 60, 60, 40, 23, 60, 60, 80, 26],
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
  .run_statistical_box {
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
  .disk_tps_box {
    .detail {
      height: 330px;
    }
  }
  .cache_box {
    .detail {
      height: 330px;
      .line_title {
        color: #6d727a;
        margin-bottom: 40px;
      }
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
