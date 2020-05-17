<template>
  <div class="body-content">
    <HeadMenu title="云平台" :smalltitle="smalltitle" :btnarr="btnarr" @getValue="searchKey" @getEvent="judgeEvent" />
    <dynamic-table :show-check-box="showCheckBox" :field-arr="fieldArr" :getters="getters" @edit="edit" />
    <pagination
      v-show="listQuery.total>0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="pagination"
    />
    <el-dialog
      title="添加云平台"
      :visible.sync="dialogVisible"
      width="37.5%"
      :before-close="handleClose"
    >
      <span>接入信息</span>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码 : " prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
        </el-form-item>
        <el-col :span="12">
          <el-form-item label="确认密码 : " prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="请再次输入密码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年龄 : " prop="age">
            <el-input v-model="ruleForm.age" placeholder="请输入年龄" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动区域">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
import Pagination from '@/components/Pagination/index';
export default {
  components: { HeadMenu, DynamicTable, Pagination },
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
      getters: 'sysSetting/deviceLayout/cloudManage/list',
      showCheckBox: true,
      dialogVisible: true,
      // 分页列表
      listQuery: {
        total: 86,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '批量导入', eventName: 'importHandle', type: 'success' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/cloud' },
      fieldArr: [
        {
          label: '云平台名称',
          key: 'cloudName',
          formatter: ''
        }, {
          label: '接入方式',
          key: 'access',
          formatter: '',
          filters: [{ text: '网管接入', value: '网管接入' }]
        }, {
          label: '网关',
          key: 'gateway',
          formatter: '',
          filters: [{ text: '网关1', value: '网关1' }, { text: '网关2', value: '网关2' }, { text: '网关3', value: '网关3' }]
        }, {
          label: '设备ID',
          key: 'equipmentId',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '雷马屏监狱', value: '雷马屏监狱' }]
        }, {
          label: '云平台描述',
          key: 'describe',
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
            query: ['id', 'name']
          }, {
            label: '删除',
            type: 'button',
            method: 'edit'
          }]
        }
      ],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        region: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { min: 1, max: 3, message: '长度在 1 到 3 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择区域', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$store.dispatch('sysSetting/deviceLayout/cloudManage/getList')
  },
  methods: {
    searchKey (val) {
      console.log(val);
    },
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
    pagination (val) {
      this.listQuery.page = val.page;
    },
    // 触发关闭弹窗事件
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 提交表单
    onSubmit () {
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
</style>
