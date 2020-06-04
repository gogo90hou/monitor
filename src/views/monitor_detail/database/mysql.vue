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
              <span class="title_blue">24次</span>
            </span>
            <span class="box_title_three">
              物理磁盘读取次数：
              <span class="title_yellow">49%</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title">TPS</span>
            <span class="box_title_center">
              每秒事务数( tps )：
              <span class="title_blue">32次</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box cache_box">
      <el-col :span="12">
        <div class="detail" style="border-right: 1px solid rgba(219,219,219,.52);">
          <div class="title">
            <span class="box_title">缓存管理</span>
            <span class="box_title_two">
              当前线程缓存命中个数：
              <span class="title_blue">32个</span>
            </span>
            <span class="box_title_three">
              当前线程缓存命中率：
              <span class="title_yellow">43%</span>
            </span>
          </div>
          <div class="main line_title">近段时间线程缓存命中率: ( % )</div>
          <div class="main">放置折线图</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail">
          <div class="title">
            <span class="box_title_two">
              当前查询缓存命中个数：
              <span class="title_blue">32个</span>
            </span>
            <span class="box_title_three">
              当前查询缓存命中率：
              <span class="title_yellow">43%</span>
            </span>
          </div>
          <div class="main line_title">近段时间查询缓存命中个数: ( % )</div>
          <div class="main">放置折线图</div>
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
}
</style>
