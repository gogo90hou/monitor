<template>
  <div class="body-content">
    <HeadMenu
      title="IT设备"
      :smalltitle="smalltitle"
      :btnarr="btnarr"
      @getEvent="judgeEvent"
    />
    <v-table
      ref="table"
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      :show-check-box="true"
      class="tab_body"
      @edit="edit"
      @delete="deleteItem"
      @selection-change="handleSelectionChange"
    />
    <el-dialog title="IT设备" :visible.sync="dialogVisible" custom-class="addHandleWidth" :before-close="resetForm">
      <el-form :model="ruleForm" label-position="right" label-width="100px">
        <el-row class="inlineSelect" :gutter="50">
          <el-col :span="12">
            <el-form-item label="设备类型:">
              <el-select v-model="ruleForm.type" @change="changeType">
                <el-option label="服务器" value="服务器"></el-option>
                <el-option label="交换机" value="交换机"></el-option>
                <el-option label="防火墙" value="防火墙"></el-option>
                <el-option label="存储" value="存储"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <addServer v-if="currentType === '服务器'" />
        <addSwitch v-if="currentType === '交换机'" />
        <addFirewall v-if="currentType === '防火墙'" />
        <addStorage v-if="currentType === '存储'" />
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import addServer from './itDialog/addServer';
import addSwitch from './itDialog/addSwitch';
import addStorage from './itDialog/addStorage';
import addFirewall from './itDialog/addFirewall';
export default {
  components: {
    addServer,
    addSwitch,
    addStorage,
    addFirewall
  },
  data () {
    return {
      btnarr: [{ id: '1', value: '新增', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/it' },
      fieldArr: [
        {
          label: '设备名称',
          key: 'name',
          formatter: ''
        }, {
          label: '设备类型',
          key: 'type',
          formatter: '',
          filters: [{ text: '服务器', value: '服务器' }, { text: '交换机', value: '交换机' }, { text: '防火墙', value: '防火墙' }, { text: '存储', value: '存储' }]
        }, {
          label: '采集网关',
          key: 'gateway',
          formatter: '',
          filters: [{ text: '锦江浏览器网关', value: '锦江浏览器网关' }, { text: '邑州数据库网关', value: '邑州数据库网关' }, { text: '川西服务器网关', value: '川西服务器网关' }, { text: '川北数据库网关', value: '川北数据库网关' }, { text: '乐山服务器网关', value: '乐山服务器网关' }]
        }, {
          label: '接入设备',
          key: 'accessEquipment',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '乐山监狱', value: '乐山监狱' }]
        }, {
          label: '所在位置',
          key: 'location',
          formatter: ''
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
        apiUrl: 'itManage',
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
        accessEquipment: '',
        area: '',
        location: '',
        des: ''
      },
      // 选中数据ID
      ids: [],
      currentType: '服务器'
    }
  },
  created () {
  },
  methods: {
    changeType (val) {
      this.currentType = val;
    },
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
      this.dialogVisible = true;
    },
    importHandle () {
      console.log('我是批量导入事件');
    },
    deleteHandle () {
      this.remove();
    }
  }
}
</script>

<style scoped>
</style>
