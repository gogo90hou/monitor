<template>
  <div>
    <HeadMenu
      title="网关配置"
      :search="false"
      :btnarr="btnarr"
      @getValue="searchKey"
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
    <el-dialog title="网关配置" :visible.sync="dialogVisible" width="60%">
      <el-form :model="form">
        <el-form-item label="网关名称:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关地址:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="所在区域:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关ID:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关描述">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
      ]
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
