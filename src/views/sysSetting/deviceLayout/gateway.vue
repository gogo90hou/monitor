<template>
  <div>
    <HeadMenu title="网关配置" :btnarr="btnarr" @getEvent="judgeEvent" />
    <v-table
      ref="table"
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      :show-check-box="true"
      @edit="edit"
      @delete="deleteItem"
      @selection-change="handleSelectionChange"
    />
    <el-dialog title="网关配置" :visible.sync="dialogVisible" custom-class="addHandleWidth" :before-close="resetForm">
      <el-form :model="ruleForm" label-position="right" label-width="100px">
        <el-form-item label="采集网关名称:">
          <el-input v-model="ruleForm.name" placeholder="网关名称" />
        </el-form-item>
        <el-row class="inlineSelect" :gutter="50">
          <el-col :span="12">
            <el-form-item label="采集源:">
              <el-input v-model="ruleForm.collecting" placeholder="采集源名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在区域:">
              <el-select v-model="ruleForm.area">
                <el-option label="锦江监狱" value="锦江监狱"></el-option>
                <el-option label="邑州监狱" value="邑州监狱"></el-option>
                <el-option label="川西监狱" value="川西监狱"></el-option>
                <el-option label="川北监狱" value="川北监狱"></el-option>
                <el-option label="乐山监狱" value="乐山监狱"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="网关描述:">
          <el-input v-model="ruleForm.des" type="textarea" placeholder="网关名称" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle' }, { id: '2', value: '删除', eventName: 'deleteHandle' }],
      showCheckBox: true,
      dialogVisible: false,
      tableSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: {
          page: 1,
          rows: 10,
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
          filters: 'layout/area'
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
        name: '',
        collecting: '',
        area: '',
        des: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入采集网关名称', trigger: 'blur' },
          { min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
        ],
        collecting: [
          { required: true, message: '请输入采集源', trigger: 'blur' },
          { min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请选择所在区域', trigger: 'blur' }
        ],
        desc: [
          { message: '请输入网关描述', trigger: 'blur' }
        ]
      },
      // 选中数据ID
      ids: []
    }
  },
  created () {
  },
  methods: {
    onSubmit () {
      if (this.ruleForm.id) {
        this.$refs.table.update(this.ruleForm).then(() => {
          this.resetForm();
        })
      } else {
        this.$refs.table.add(this.ruleForm).then(() => {
          this.resetForm();
        })
      }
    },
    resetForm () {
      this.dialogVisible = false;
      this.ruleForm = {
        name: '',
        collecting: '',
        area: '',
        des: ''
      }
    },
    add () {
      this.dialogVisible = true;
    },
    edit (data) {
      this.dialogVisible = true;
      this.ruleForm = data;
    },
    deleteItem (data) {
      const deleteIds = [];
      deleteIds.push(data.id);
      this.$refs.table.deleteItem(deleteIds)
    },
    remove () {
      this.$refs.table.deleteItem(this.ids)
    },
    handleSelectionChange (data) {
      this.chooseData = data;
      data.forEach((item) => {
        this.ids.push(item.id)
      })
    },
    judgeEvent (val) {
      if (val === 'addHandle') {
        this.dialogVisible = true;
      }
      if (val === 'deleteHandle') {
        this.remove();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
