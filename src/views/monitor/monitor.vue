<template>
  <div class="monitorlist">
    <div class="header-title">
      <HeadMenu title="所有设备" />
      <ul class="colorList">
        <li>
          <span class="red"></span>异常
        </li>
        <li>
          <span class="gray"></span>维护中
        </li>
        <li>
          <span class="blue"></span>总数
        </li>
      </ul>
    </div>
    <el-row class="list" :gutter="30">
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">门禁</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_Access_control"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">报警</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_alarm"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">周边电网</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_power_grid"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">广播</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_radio_broadcast"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">监听对讲</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_Monitor_intercom"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <div class="left">
            <p class="name">摄像头</p>
            <p class="num">
              <span class="red">5</span>/
              <span class="gray">5</span>/
              <span class="blue">347</span>
            </p>
          </div>
          <div class="right">
            <span class="icon iconfont iconicon_Webcam"></span>
          </div>
        </div>
      </el-col>
    </el-row>
    <HeadMenu
      title="安防设备监控列表"
      :search="true"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="judgeEvent"
    />
    <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
    <pagination
      v-show="listQuery.total>0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="pagination"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      getters: 'monitor/system/list',
      activeName: 'first',
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: ' 管理设备', eventName: 'manageHandle', type: 'info' }],
      fieldArr: [
        {
          label: '设备名称',
          key: 'sysNum',
          formatter: ''
        }, {
          label: '设备类型',
          key: 'sysCategory',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '状态',
          key: 'disk',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'diskUtilization',
          formatter: ''
        }, {
          label: '所在位置',
          key: 'memory',
          formatter: ''
        }, {
          label: '设备描述',
          key: 'memoryUtilization',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/detail',
            query: ['id', 'name']
          }, {
            label: '查看详情',
            type: 'button',
            method: 'edit'
          }]
        }
      ]
    }
  },

  methods: {
    pagination (val) {
      this.listQuery.page = val.page;
      this.listQuery.limit = val.limit;
    },
    handleClick () { },
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (val) {
      console.log(val);
    },
    edit (data) {
      console.log(data)
    },
    filterTab (val) {
      this.filterName = val;
    }
  }
}
</script>
<style lang="scss">
.monitorlist {
  .header-title {
    overflow: hidden;
    .head-menu {
      display: inline-block;
    }
  }
  .colorList {
    float: right;
    font-size: 14px;
    li {
      display: inline-block;
      margin-right: 20px;
      span {
        display: inline-block;
        width: 16px;
        height: 8px;
        vertical-align: middle;
        background-color: #ff0000;
        margin-right: 6px;
        &.gray {
          background-color: #999999;
        }
        &.blue {
          background-color: #afa9dc;
        }
      }
    }
  }
  .list {
    padding-bottom: 50px;
    .content {
      padding: 10px;
      width: 100%;
      color: #545454;
      font-size: 0;
      background-color: #fff;
      .left {
        display: inline-block;
        width: 70%;
        vertical-align: middle;
      }
      .right {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
        text-align: center;
      }
      .icon {
        font-size: 38px;
        color: #5466e0;
      }
      .name {
        margin-bottom: 20px;
        font-size: 16px;
      }
      .num {
        font-size: 20px;
        .red {
          color: #ff0000;
          font-size: 24px;
        }
        .gray {
          color: #999999;
        }
        .blue {
          color: #afa9dc;
        }
      }
    }
  }
}
</style>
