<template>
  <div class="body-content">
    <HeadMenu
      title="操作系统和数据库"
      :smalltitle="smalltitle"
      :btnarr="btnarr"
      @getEvent="judgeEvent"
    />
    <el-tabs v-model="activeName" type="card" class="tab_body" @tab-click="handleClick">
      <el-tab-pane label="操作系统" name="first">
        <v-table
          ref="table"
          :field-arr="fieldArr"
          :table-setting="tableSetting"
          :show-check-box="true"
          class="pdNone"
          @edit="edit"
          @delete="deleteItem"
          @selection-change="handleSelectionChange"
        />
      </el-tab-pane>
      <el-tab-pane label="数据库" name="second">
        <v-table
          ref="table2"
          :field-arr="databaseArr"
          :table-setting="tableSetting2"
          :show-check-box="true"
          class="pdNone"
          @edit="edit2"
          @delete="deleteItem2"
          @selection-change="handleSelectionChange2"
        />
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="操作系统" :visible.sync="dialogVisible" custom-class="addHandleWidth" :before-close="resetForm">
      <el-form :model="ruleForm" label-position="right" label-width="100px">
        <el-row class="inlineSelect" :gutter="50">
          <el-col :span="12">
            <el-form-item label="操作系统名称:">
              <el-input v-model="ruleForm.name" placeholder="操作系统名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="系统类型:">
              <el-select v-model="ruleForm.type">
                <el-option label="Windows操作系统" value="Windows操作系统"></el-option>
                <el-option label="Linux操作系统" value="Linux操作系统"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="采集网关:">
              <el-select v-model="ruleForm.gateway">
                <el-option label="数据库采集网关" value="数据库采集网关"></el-option>
                <el-option label="浏览器采集网关" value="浏览器采集网关"></el-option>
                <el-option label="服务器采集网关" value="服务器采集网关"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="接入系统:">
              <el-input v-model="ruleForm.accessSystem" placeholder="接入系统名称" />
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
          <el-col :span="12">
            <el-form-item label="所在服务器:">
              <el-input v-model="ruleForm.server" placeholder="所在服务器" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="操作系统描述:">
              <el-input v-model="ruleForm.des" type="textarea" placeholder="操作系统描述" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="数据库" :visible.sync="dialogVisible2" custom-class="addHandleWidth" :before-close="resetForm2">
      <el-form :model="ruleForm2" label-position="right" label-width="100px">
        <el-row class="inlineSelect" :gutter="50">
          <el-col :span="12">
            <el-form-item label="数据库名称:">
              <el-input v-model="ruleForm2.name" placeholder="操作系统名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="数据库类型:">
              <el-select v-model="ruleForm2.type">
                <el-option label="Orcle" value="Orcle"></el-option>
                <el-option label="MySQL" value="MySQL"></el-option>
                <el-option label="SqlServer" value="SqlServer"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="采集网关:">
              <el-select v-model="ruleForm2.gateway">
                <el-option label="数据库采集网关" value="数据库采集网关"></el-option>
                <el-option label="浏览器采集网关" value="浏览器采集网关"></el-option>
                <el-option label="服务器采集网关" value="服务器采集网关"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="接入数据库:">
              <el-input v-model="ruleForm2.accessDatabase" placeholder="接入系统名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在区域:">
              <el-select v-model="ruleForm2.area">
                <el-option label="锦江监狱" value="锦江监狱"></el-option>
                <el-option label="邑州监狱" value="邑州监狱"></el-option>
                <el-option label="川西监狱" value="川西监狱"></el-option>
                <el-option label="川北监狱" value="川北监狱"></el-option>
                <el-option label="乐山监狱" value="乐山监狱"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在服务器:">
              <el-input v-model="ruleForm2.server" placeholder="所在服务器" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="数据库描述:">
              <el-input v-model="ruleForm.des" type="textarea" placeholder="数据库描述" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit2">确 定</el-button>
        <el-button type="warning" @click="dialogVisible2 = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      btnarr: [{ id: '1', value: '新增', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/system' },
      fieldArr: [
        {
          label: '操作系统名称',
          key: 'name',
          formatter: ''
        }, {
          label: '系统类型',
          key: 'type',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '采集网关',
          key: 'gateway',
          filters: [{ text: '锦江浏览器网关', value: '锦江浏览器网关' }, { text: '邑州数据库网关', value: '邑州数据库网关' }, { text: '川西服务器网关', value: '川西服务器网关' }, { text: '川北数据库网关', value: '川北数据库网关' }, { text: '乐山服务器网关', value: '乐山服务器网关' }]
        }, {
          label: '接入系统',
          key: 'accessSystem'
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '乐山监狱', value: '乐山监狱' }]
        }, {
          label: '所在服务器',
          key: 'server'
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '编辑',
            type: 'button',
            method: 'edit',
            colorType: 'edit'
          }, {
            label: '删除',
            type: 'button',
            method: 'delete',
            colorType: 'delete'
          }]
        }
      ],
      dialogVisible: false,
      dialogVisible2: false,
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
        apiUrl: 'systemManage',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      tableSetting2: {
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
        apiUrl: 'databaseManage',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      ruleForm: {
        name: '',
        type: '',
        gateway: '',
        accessSystem: '',
        area: '',
        location: '',
        des: ''
      },
      ruleForm2: {
        name: '',
        type: '',
        gateway: '',
        accessDatabase: '',
        area: '',
        location: '',
        des: ''
      },
      // 选中数据ID
      ids: [],
      ids2: []
    }
  },
  computed: {
    databaseArr: function () {
      return [
        {
          label: '数据库名称',
          key: 'name'
        }, {
          label: '数据库类型',
          key: 'type',
          filters: [{ text: 'Orcle', value: 'Orcle' }, { text: 'MySQL', value: 'MySQL' }, { text: 'SqlServer', value: 'SqlServer' }]
        }, {
          label: '采集网关',
          key: 'gateway',
          filters: [{ text: '锦江浏览器网关', value: '锦江浏览器网关' }, { text: '邑州数据库网关', value: '邑州数据库网关' }, { text: '川西服务器网关', value: '川西服务器网关' }, { text: '川北数据库网关', value: '川北数据库网关' }, { text: '乐山服务器网关', value: '乐山服务器网关' }]
        }, {
          label: '接入数据库',
          key: 'accessDatabase',
          width: '210'
        }, {
          label: '所在区域',
          key: 'area',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '乐山监狱', value: '乐山监狱' }]
        }, {
          label: '所在服务器',
          key: 'server'
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '编辑',
            type: 'button',
            method: 'edit',
            colorType: 'edit'
          }, {
            label: '删除',
            type: 'button',
            method: 'delete',
            colorType: 'delete'
          }]
        }
      ]
    }
  },
  created () {
  },
  methods: {
    handleClick () { },
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
    onSubmit2 () {
      if (this.ruleForm2.id) {
        this.$refs.table2.update(this.ruleForm2).then(() => {
          this.resetForm2();
        })
      } else {
        console.log(this.$refs.table2);
        this.$refs.table2.add(this.ruleForm2).then(() => {
          this.resetForm2();
        })
      }
    },
    resetForm () {
      this.dialogVisible = false;
      this.ruleForm = {
        name: '',
        type: '',
        gateway: '',
        accessSystem: '',
        area: '',
        location: ''
      }
    },
    resetForm2 () {
      this.dialogVisible2 = false;
      this.ruleForm2 = {
        name: '',
        type: '',
        gateway: '',
        accessSystem: '',
        area: '',
        location: ''
      }
    },
    add () {
      this.dialogVisible = true;
    },
    add2 () {
      this.dialogVisible2 = true;
    },
    edit (data) {
      this.dialogVisible = true;
      this.ruleForm = data;
    },
    edit2 (data) {
      this.dialogVisible2 = true;
      this.ruleForm2 = data;
    },
    deleteItem (data) {
      const deleteIds = [];
      deleteIds.push(data.id);
      this.$refs.table.deleteItem(deleteIds)
    },
    deleteItem2 (data) {
      console.log(data);
      const deleteIds = [];
      deleteIds.push(data.id);
      this.$refs.table2.deleteItem(deleteIds)
    },
    remove () {
      this.$refs.table.deleteItem(this.ids)
    },
    remove2 () {
      this.$refs.table2.deleteItem(this.ids2)
    },
    handleSelectionChange (data) {
      this.chooseData = data;
      data.forEach((item) => {
        this.ids.push(item.id)
      })
    },
    handleSelectionChange2 (data) {
      this.chooseData2 = data;
      data.forEach((item) => {
        this.ids2.push(item.id)
      })
    },
    judgeEvent (event) {
      if (event === 'addHandle' && this.activeName === 'first') {
        this.addHandle();
      } else if (event === 'deleteHandle' && this.activeName === 'first') {
        this.deleteHandle();
      } else if (event === 'addHandle' && this.activeName === 'second') {
        this.addHandle2();
      } else if (event === 'deleteHandle' && this.activeName === 'second') {
        this.deleteHandle2();
      }
    },
    addHandle () {
      this.dialogVisible = true;
    },
    addHandle2 () {
      this.dialogVisible2 = true;
    },
    deleteHandle () {
      this.remove();
    },
    deleteHandle2 () {
      this.remove2();
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_body {
  padding: 17px 12px;
  background-color: #fff;
  .pdNone {
    padding: 0 !important;
  }
}
</style>
