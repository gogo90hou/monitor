<template>
  <div>
    <HeadMenu
      title="网关配置"
      :search="false"
      :btnarr="btnarr"
      @getEvent="judgeEvent"
    />
    <v-table
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      :show-check-box="true"
      @edit="edit"
      @delete="deletItem"
      @selection-change="handleSelectionChange"
    />
    <el-dialog
      title="添加应用软件"
      :visible.sync="dialogVisible"
      width="37%"
      :before-close="handleClose"
    >
      <div class="dialog-from" style="height: 100%;">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <span class="smallTitle">添加网关配置</span>
          <el-col :span="12">
            <el-form-item label="采集网关名称 : " prop="gatewayName">
              <el-input
                v-model="ruleForm.gatewayName"
                autocomplete="off"
                placeholder="请输入采集网关名称"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="采集源 : " prop="source">
              <el-input
                v-model="ruleForm.source"
                autocomplete="off"
                placeholder="请输入采集源"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在区域 :">
              <el-select
                v-model="ruleForm.configuration"
                placeholder="请选择"
                style="width: 100%;"
              >
                <el-option label="配置一" value="Windows" />
                <el-option label="配置二" value="Linux" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动区域 :">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="活动形式">
              <el-input v-model="ruleForm.desc" type="textarea" placeholder="请输入活动形式" />
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit">确 定</el-button>
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle' }, { id: '2', value: '删除', eventName: 'deleteHandle' }],
      form: {
        name: ''
      },
      showCheckBox: true,
      dialogVisible: false,
      tableSetting: {
        pagination: {
          show: true,
          rowsPerPage: [5, 10, 20]
        },
        param: {
          page: 1,
          rows: 5,
          sord: 'desc',
          _search: false,
          filters: {
            groupOp: 'AND',
            rules: []
          }
        },
        apiUrl: 'gateway',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      fieldArr: [
        {
          label: '采集网关名称',
          key: 'name'
        }, {
          label: '采集源',
          key: 'collecting',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]

        }, {
          label: '网关描述',
          key: 'des',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '编辑',
            type: 'button',
            method: 'edit'
          }, {
            label: '删除',
            type: 'button',
            method: 'delete'
          }]
        }
      ],
      ruleForm: {
        gatewayName: '',
        source: '',
        age: '',
        region: '',
        configuration: '',
        desc: ''
      },
      rules: {
        gatewayName: [
          { required: true, message: '请输入采集网关名称', trigger: 'blur' },
          { min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
        ],
        source: [
          { required: true, message: '请输入采集源', trigger: 'blur' },
          { min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { min: 1, max: 3, message: '长度在 1 到 3 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择区域', trigger: 'blur' }
        ],
        desc: [
          { message: '请输入活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    edit (data) {
      console.log(data)
    },
    deletItem (data) {
      console.log(data)
    },
    judgeEvent (event) {
      if (event === 'addHandle') {
        this.addHandle();
      } else if (event === 'deleteHandle') {
        this.deleteHandle();
      }
    },
    addHandle () {
      this.dialogVisible = true;
    },
    deleteHandle () { },
    handleSelectionChange () {
    }
  }
}
</script>
<style lang="scss">
.publicheader {
  overflow: hidden;
  padding: 10px 0;
  h2 {
    float: left;
  }
  .right-wrapper {
    float: right;
    width: 50%;
    text-align: right;
    .el-input {
      width: 200px;
    }
  }
}
</style>
