<template>
  <div class="monitor">
    <HeadMenu title="所有设备" />
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
            <span class="icon iconfont iconicon_Access_control" />
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
            <span class="icon iconfont iconicon_alarm" />
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
            <span class="icon iconfont iconicon_power_grid" />
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
            <span class="icon iconfont iconicon_radio_broadcast" />
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
            <span class="icon iconfont iconicon_Monitor_intercom" />
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
            <span class="icon iconfont iconicon_Webcam" />
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
      btnarr: [{ id: '1', value: ' 管理设备', eventName: 'manageHandle', type: 'primary' }],
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
  }
}
</script>
<style lang="scss">
.monitor {
  .list {
    padding-bottom: 50px;
    .content {
      padding: 10px;
      width: 100%;
      color: #545454;
      font-size: 0;
      background-color: rgba(135, 116, 255, 0.07);
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
        color: #999;
      }
      .name {
        margin-bottom: 20px;
        font-size: 16px;
      }
      .num {
        font-size: 20px;
        .red {
          color: #ff0000;
        }
        .gray {
          color: #999999;
        }
        .blue {
          color: #9083ec;
        }
      }
    }
  }
}
</style>
