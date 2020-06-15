<template>
  <div>
    <HeadMenu title="网关配置" :search="false" :btnarr="btnarr" @getEvent="judgeEvent" />
    <v-table
      ref="table"
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      :show-check-box="true"
      @edit="edit"
      @delete="deleteItem"
      @selection-change="handleSelectionChange"
    />
    <el-dialog title="网关配置" :visible.sync="dialogVisible" width="50%" :before-close="resetForm">
      <el-form :model="form" label-position="left" label-width="100px">
        <el-form-item label="采集网关名称:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-row class="inlineSelect" :gutter="50">
          <el-col :span="12">
            <el-form-item label="选择采集源:">
              <el-select v-model="form.collecting">
                <el-option label="采集网关1" value="采集网关1"></el-option>
                <el-option label="采集网关2" value="采集网关2"></el-option>
                <el-option label="采集网关3" value="采集网关3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在区域:">
              <el-select v-model="form.area">
                <el-option label="所在区域1" value="所在区域1"></el-option>
                <el-option label="所在区域2" value="所在区域2"></el-option>
                <el-option label="所在区域3" value="所在区域3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="网关描述">
          <el-input v-model="form.des" placeholder="网关名称" />
        </el-form-item>
      </el-form>
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
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      form: {
        name: '',
        collecting: '',
        area: '',
        des: ''
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
      ]
    }
  },
  created () {
  },
  methods: {
    onSubmit () {
      if (this.form.id) {
        this.$refs.table.update(this.form).then(() => {
          this.resetForm();
        })
      } else {
        this.$refs.table.add(this.form).then(() => {
          this.resetForm();
        })
      }
    },
    resetForm () {
      this.dialogVisible = false;
      this.form = {
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
      this.form = data;
    },
    deleteItem (data) {
      const ids = [];
      ids.push(data.id);
      this.$refs.table.deleteItem(ids)
    },
    remove () {
      this.$refs.table.deleteItem(this.ids)
    },
    handleSelectionChange (data) {
      this.ids = [];
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
