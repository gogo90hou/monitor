<!--
 * @Author: your name
 * @Date: 2020-05-29 10:00:05
 * @LastEditTime: 2020-05-29 10:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\monitor\detail\soft_detail.vue
-->
<template>
  <div class="soft_detail">
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/monitor' }">应用监控软件</el-breadcrumb-item>
        <el-breadcrumb-item>刑罚执行</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button>返回</el-button>
    </div>
    <div class="detail_body">
      <el-row class="run_hardDisk_box">
        <el-col :span="5">
          <div class="run_detail">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div class="run_detail_body">
              <div>
                <span>运行时长 ： 3h</span>
              </div>
              <div>
                <span>
                  运行状态 ：
                  <i :style="{backgroundColor: runStateColor}"></i> 正常
                </span>
              </div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="run_detail noMargin">
            <div class="title">
              <span class="box_title">流程</span>
            </div>
            <div class="run_detail_body">
              <div>
                <span>流程总数 ： 3h</span>
              </div>
              <div>
                <span>当前审批流程 ： 正常</span>
              </div>
              <div>
                <span>已完成流程 ： 正常</span>
              </div>
              <div>
                <span>已拒绝流程 ： 正常</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="tables">
            <dynamic-table :field-arr="fieldArr" :getters="getters" />
            <!-- <div class="title">
              <span class="box_title">流程</span>
            </div>-->
          </div>
        </el-col>
      </el-row>
      <el-row class="run_hardDisk_box" style="margin-top:20px">
        <el-col>
          <div class="run_detail" style="height:auto">
            <div class="title">
              <span class="box_title">系统</span>
              <div class="tips">
                <p>今日请求耗时详情（注：默认时间排序，点击切换耗时排序）</p>
                <div class="buttons">
                  <span>时间排序</span>
                  <span>耗时排序</span>
                </div>
              </div>
            </div>
            <div class="sysTable">
              <dynamic-table :field-arr="fieldArr" :getters="getters" />
              <pagination
                v-show="listQuery.total>0"
                :total="listQuery.total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
              />
            </div>
            <el-row>
              <el-col :span="12">
                <echartsLine style="height:400px" :charts-data="chartsData"></echartsLine>
              </el-col>
            </el-row>
            <!-- <div class="title">
              <span class="box_title">流程</span>
            </div>-->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        style: 'green'
      },
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
<style lang="scss">
.soft_detail {
  .tables {
    background-color: #ffffff;
    height: 240px;
    width: calc(100% - 20px);
    .el-table__body-wrapper {
      height: 189px;
      overflow-y: scroll;
    }
  }
  .sysTable {
    margin-top: 40px;
  }
  .detail_body .run_hardDisk_box .run_detail {
    &.noMargin {
      margin: 0;
    }
    .run_detail_body {
      div {
        span {
          width: 100%;
        }
      }
    }
  }
}
</style>
