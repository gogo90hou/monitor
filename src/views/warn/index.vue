<template>
  <div class="content">
    <div class="headMenu">
      <el-row>
        <el-col :span="2"><HeadMenu title="今日新增" class="headMenuLeft" /></el-col>
        <el-col :span="22">
          <el-row class="headMenuRight">
            <el-col :span="4">
              <div class="alarm-event">
                <span class="alarm-event-text">告警</span>
                <span class="alarm-event-num">23</span>
                <i class="iconfont iconicon_call_police before" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="alarm-event">
                <span class="alarm-event-text">事件</span>
                <span class="alarm-event-num">24</span>
                <i class="iconfont iconshijian before" />
              </div>
            </el-col>
            <el-col :span="16">
              <div class="alarm-level">
                <span class="untreated">
                  <span>未处理告警:</span>
                  <span>147</span>
                </span>
                <span class="iconBox deadly">
                  <i class="iconfont iconicon_close_alt" />
                  <span>致命</span>
                  <span>23</span>
                </span>
                <span class="iconBox serious">
                  <i class="iconfont iconicon_Critical_warning" />
                  <span>严重</span>
                  <span>24</span>
                </span>
                <span class="iconBox general">
                  <i class="iconfont iconicon_minus_alt" />
                  <span>一般</span>
                  <span>25</span>
                </span>
                <span class="iconBox prompt">
                  <i class="iconfont iconicon_info" />
                  <span>提示</span>
                  <span>26</span>
                </span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tabs-body">
      <HeadMenu class="tabs-right-head" :search="true" :options="options" @getValue="searchKey" />
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="告警列表" name="first">
          <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" @turnOrder="turnOrder" />
        </el-tab-pane>
        <el-tab-pane label="事件列表" name="second">事件列表</el-tab-pane>
        <el-tab-pane label="智能告警" name="third">智能告警</el-tab-pane>
        <el-tab-pane label="历史告警" name="four">历史告警</el-tab-pane>
      </el-tabs>
    </div>
    <pagination
      v-show="listQuery.total>0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="pagination"
    />
    <el-dialog
      title="填写工单信息"
      :visible.sync="dialogVisible"
      width="37.5%"
      :before-close="handleClose"
      style="height:100%;"
    >
      <div class="dialog-from" style="height: 100%;">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <span style="display : inline-block;">
            <div>
              <el-col :span="24">
                <el-form-item label="告警源：" prop="alarmSource">
                  <el-input
                    v-model="ruleForm.alarmSource"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="处理人：">
                  <el-select
                    v-model="ruleForm.dealingPeople"
                    placeholder="请选择"
                    style="width : 50%;"
                  >
                    <el-option label="张飞" value="zhangfei" />
                    <el-option label="李四" value="lisi" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="计划解决时间：">
                  <el-date-picker v-model="ruleForm.solveTime" type="date" :clearable="false" placeholder="请选择" style="width : 50%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注信息：">
                  <el-input v-model="ruleForm.note" type="textarea" placeholder="请输入备注信息" />
                </el-form-item>
              </el-col>
            </div>
          </span>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="confirmBtn" @click="onSubmit">确认</el-button>
        <el-button type="warning" class="closeBtn" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="新增一条致命告警"
      class="alarmDialag"
      :visible.sync="alarmDialogVisible"
      width="480px"
      :before-close="alarmHandleClose"
      style="height:100%;"
    >
      <el-row>
        <el-col :span="16" style="float:left;">
          <span>告警源：<span style="color : red;">甘孜监狱-大门门禁</span></span>
        </el-col>
        <el-col :span="8" style="float:right;">
          <span>告警级别：<span style="color : red;">致命</span></span>
        </el-col>
        <el-col :span="24">
          <span>告警描述：大门长时间未关闭</span>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="confirmBtn" @click="dealAlarm">立即处理</el-button>
        <el-button type="warning" class="closeBtn" @click="alarmDialogVisible = false">暂不处理</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getters: 'warn/index/list',
      activeName: 'first',
      dialogVisible: false,
      alarmDialogVisible: true,
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      options: [{ selectId: '1', label: '锦江监狱' }, { selectId: '2', label: '川北监狱' }, { selectId: '3', label: '川西监狱' }],
      fieldArr: [
        {
          label: '序号',
          key: 'serialNumber',
          formatter: ''
        }, {
          label: '告警源',
          key: 'alarmSource',
          formatter: '',
          filters: [{ text: '甘孜监狱-大门门禁', value: '甘孜监狱-大门门禁' }, { text: '锦江监狱-二楼楼梯口报警设备', value: '锦江监狱-二楼楼梯口报警设备' }, { text: '锦江监狱-三楼服务器-192.168.1.1', value: '锦江监狱-三楼服务器-192.168.1.1' }, { text: '门禁告警一', value: '门禁告警一' }]
        }, {
          label: '告警类别',
          key: 'alarmCategory',
          formatter: '',
          filters: [{ text: '安防设备', value: '安防设备' }, { text: '应用软件', value: '应用软件' }, { text: 'IT设备', value: 'IT设备' }, { text: '中间件', value: '中间件' }, { text: '云平台', value: '云平台' }, { text: '操作系统和数据库', value: '操作系统和数据库' }]
        }, {
          label: '告警级别',
          key: 'alarmLevel',
          formatter: [{
            key: '1',
            label: '致命',
            color: '',
            className: 'iconicon_close_alt',
            iconColor: 'red'
          }, {
            key: '2',
            label: '严重',
            color: '',
            className: 'iconicon_Critical_warning',
            iconColor: 'levelSerious'
          }, {
            key: '3',
            label: '一般',
            color: '',
            className: 'iconicon_minus_alt',
            iconColor: 'levelGeneral'
          }, {
            key: '4',
            label: '提示',
            color: '',
            className: 'iconicon_info',
            iconColor: 'levelprompt'
          }],
          filters: [{ text: '致命', value: '致命' }, { text: '严重', value: '严重' }, { text: '一般', value: '一般' }, { text: '提示', value: '提示' }]
        }, {
          label: '告警描述',
          key: 'alarmDescription',
          formatter: ''
        }, {
          label: '告警时间',
          key: 'alarmTime',
          formatter: ''
        }, {
          label: '告警状态',
          key: 'alarmState',
          formatter: '',
          filters: [{ text: '已确认', value: '已确认' }, { text: '未确认', value: '未确认' }, { text: '已清除', value: '已清除' }, { text: '未清除', value: '未清除' }]
        }, {
          label: '确认时间',
          key: 'setTime',
          formatter: ''
        }, {
          label: '处理状态',
          key: 'dealState',
          formatter: '',
          filters: [{ text: '待处理', value: '待处理' }, { text: '已派单', value: '已派单' }, { text: '已处理', value: '已处理' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '转工单',
            type: 'button',
            method: 'turnOrder',
            query: ['id', 'name'],
            colorType: 'edit'
          }, {
            label: '清除',
            type: 'button',
            method: 'delete',
            colorType: 'delete'
          }]
        }
      ],
      ruleForm: {
        alarmSource: '',
        dealingPeople: '',
        solveTime: '',
        note: ''
      },
      rules: {
        alarmSource: [
          { required: true, message: '请输入告警源', trigger: 'blur' }
        ],
        dealingPeople: [
          { required: true, message: '请选择处理人', trigger: 'blur' }
        ],
        note: [
          { message: '请输入备注信息', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$store.dispatch('warn/index/getList')
  },
  methods: {
    edit (data) {
      console.log(data);
    },
    handleClick () { },
    pagination (val) {
      this.listQuery.page = val.page;
      this.listQuery.limit = val.limit;
    },
    searchKey () {

    },
    turnOrder (data) {
      this.ruleForm.alarmSource = data.alarmSource;
      this.dialogVisible = true;
      console.log(data);
    },
    // 触发关闭弹窗事件
    handleClose (done) {
      this.dialogVisible = false;
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => { });
    },
    alarmHandleClose (done) {
      this.alarmDialogVisible = false;
    },
    // 提交表单
    onSubmit () {
      this.dialogVisible = false;
    },
    dealAlarm () {
      this.alarmDialogVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  font-size: 14px;
  padding: 28px 10px;
  box-sizing: border-box;
  background-color: #eeeff4;
  .headMenu {
    height: 60px;
    overflow: hidden;
    margin-bottom: 23px;
    .headMenuLeft {
      font-size: 18px;
      color: #0d0d0d;
      height: 60px;
      line-height: 60px;
      padding: 0;
    }
    .headMenuRight {
      vertical-align: top;
      .alarm-event,
      .alarm-level {
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        box-sizing: border-box;
        color: #0d0d0d;
        margin-right: 15px;
        .alarm-event-text {
          font-size: 14px;
          vertical-align: middle;
          padding-left: 15%;
        }
        .alarm-event-num {
          font-size: 26px;
          color: #5466e0;
          padding-left: 15%;
          vertical-align: middle;
        }
        i {
          padding-left: 26px;
          color: #d9d9d9;
          font-size: 35px;
          vertical-align: middle;
          opacity: 85%;
        }
        .before {
          float: right;
          padding-left: 0;
          margin-right: 15px;
        }
        // 防止盒子内元素下掉
        @media screen and (max-width: 1650px) {
          .alarm-event-text,
          .alarm-event-num {
            padding-left: 5%;
          }
          i {
            padding-left: 8%;
          }
        }
      }
      .alarm-level {
        margin-right: 0;
        width: 100%;
        .untreated {
          width: 24%;
          float: left;
          span:nth-child(1) {
            font-size: 16px;
            color: #0d0d0d;
            vertical-align: middle;
          }
          span:nth-child(2) {
            font-size: 26px;
            color: #5466e0;
            padding-left: 1%;
            vertical-align: middle;
          }
        }
        .untreated:before {
          content: '';
          width: 4px;
          height: 10px;
          display: inline-block;
          background-color: #5466e0;
          margin-left: 15%;
          margin-right: 4px;
          vertical-align: middle;
        }
        .deadly {
          color: red;
          i {
            color: red;
          }
        }
        .serious {
          color: #fa7c00;
          i {
            color: #fa7c00;
          }
        }
        .general {
          color: #ffc600;
          i {
            color: #ffc600;
          }
        }
        .prompt {
          color: #a09116;
          i {
            color: #a09116;
          }
        }
        .iconBox {
          width: 19%;
          float: left;
          i {
            font-size: 14px;
            margin-right: 4px;
            vertical-align: middle;
          }
          span:nth-of-type(1) {
            font-size: 14px;
            padding-right: 8%;
            vertical-align: middle;
            color: #b2b2b2;
          }
          span:nth-of-type(2) {
            font-size: 24px;
            vertical-align: middle;
          }
        }
        .iconBox:before {
          content: '';
          float: left;
          width: 1px;
          height: 36px;
          margin-top: 12px;
          background-color: #eeeeee;
        }
      }
    }
  }
  .tabs-body {
    position: relative;
    padding: 21px 10px;
    background-color: #fff;
    .tabs-right-head {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 99;
    }
  }
  .dialog-from >>> .el-input--prefix {
    .el-input__inner {
      padding-left: 5px;
    }
    .el-input__prefix {
      font-size: 16px;
      color: #9599eb;
      left: 100%;
      transform: translateX(-100%);
    }
  }
  .dialog-footer {
    .confirmBtn,
    .closeBtn {
      height: 34px;
      padding: 0 26px;
      border-radius: 4px;
      font-size: 14px;
      background-color: #5466e0;
    }
    .closeBtn {
      background-color: #f89744;
    }
  }
}
// 记得把当前致命告警抽离出去
.alarmDialag >>> .el-dialog {
  .el-dialog__header {
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #f74545, #f74545);
    padding: 0;
    .el-dialog__title {
      color: #fff;
      font-size: 20px;
      display: flex;
    }
    .el-dialog__title:before {
      content: '\e7a0';
      font-size: 64px;
      font-family: 'iconfont';
      margin-right: 10px;
      align-items: center;
    }
    .el-dialog__headerbtn {
      top: 0;
      right: 0;
      .el-dialog__close {
        color: #fff;
        font-size: 16px;
        opacity: 67%;
      }
    }
  }
  .el-dialog__body {
    color: #999999;
    font-size: 16px;
    line-height: 40px;
    .el-col {
      margin-bottom: 20px;
    }
  }
  .dialog-footer {
    .confirmBtn,
    .closeBtn {
      height: 34px;
      padding: 0 26px;
      border-radius: 4px;
      font-size: 14px;
      background-color: #5466e0;
    }
    .closeBtn {
      background-color: #f89744;
    }
  }
}
</style>
