<template>
  <div class="body-content">
    <HeadMenu
      title="应用软件"
      :smalltitle="smalltitle"
      :btnarr="btnarr"
      @getEvent="judgeEvent"
    />
    <v-table :field-arr="fieldArr" :table-setting="tableSetting" @edit="edit" />
    <el-dialog
      title="添加应用软件"
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
          label-width="100px"
          class="demo-ruleForm"
        >
          <span style="display : inline-block;">
            <div>
              <span class="smallTitle">接入信息</span>
              <el-col :span="24">
                <el-form-item label="密码 : " prop="pass">
                  <el-input
                    v-model="ruleForm.pass"
                    type="password"
                    autocomplete="off"
                    placeholder="请输入密码"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="确认密码 : " prop="checkPass">
                  <el-input
                    v-model="ruleForm.checkPass"
                    type="password"
                    autocomplete="off"
                    placeholder="请再次输入密码"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="11" style="float : right;">
                <el-form-item label="年龄 : " prop="age">
                  <el-input v-model="ruleForm.age" placeholder="请输入年龄" />
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="配置信息 :">
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
              <el-col :span="11" style="float : right;">
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
              <span class="smallTitle">接入配置</span>
              <el-col :span="24">
                <el-form-item label="密码 : " prop="pass">
                  <el-input
                    v-model="ruleForm.pass"
                    type="password"
                    autocomplete="off"
                    placeholder="请输入密码"
                  />
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item label="年龄 : " prop="age">
                  <el-input v-model="ruleForm.age" placeholder="请输入年龄" />
                </el-form-item>
              </el-col>
            </div>
          </span>
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      getters: 'sysSetting/deviceLayout/softManage/list',
      showCheckBox: true,
      dialogVisible: false,
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '批量导入', eventName: 'importHandle', type: 'success' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/cloud' },
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
        apiUrl: 'soft/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      fieldArr: [
        {
          label: '应用软件名称',
          key: 'applicationName',
          formatter: ''
        }, {
          label: '采集网关',
          key: 'gateway',
          formatter: '',
          filters: [{ text: '网关1', value: '网关1' }, { text: '网关2', value: '网关2' }, { text: '网关3', value: '网关3' }]
        }, {
          label: '接入软件',
          key: 'accessApplication',
          formatter: ''
        }, {
          label: '所在服务器',
          key: 'serverLocation',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '雷马屏监狱', value: '雷马屏监狱' }]
        }, {
          label: '软件描述',
          key: 'applicationDescription',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '编辑',
            type: 'url',
            path: '/detail',
            query: ['id', 'name'],
            colorType: 'edit'
          }, {
            label: '删除',
            type: 'button',
            method: 'delete',
            colorType: 'delete'
          }]
        }
      ],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        region: '',
        configuration: '',
        desc: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
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
    this.$store.dispatch('sysSetting/deviceLayout/softManage/getList')
  },
  methods: {
    judgeEvent (event) {
      if (event === 'addHandle') {
        this.addHandle();
      } else if (event === 'importHandle') {
        this.importHandle();
      } else if (event === 'deleteHandle') {
        this.deleteHandle();
      }
    },
    addHandle () {
      console.log('我是添加事件');
      this.dialogVisible = true;
    },
    importHandle () {
      console.log('我是批量导入事件');
    },
    deleteHandle () {
      console.log('我是删除事件事件');
    },
    edit (data) {
      console.log(data)
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
    // 提交表单
    onSubmit () {
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
</style>
