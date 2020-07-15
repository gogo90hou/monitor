<template>
  <div class="body-content">
    <HeadMenu
      title="告警规则设置"
      :btnarr="btnarr"
      @getEvent="addReportRule"
    />
    <el-tabs v-model="activeName" type="card" class="tab_body" @tab-click="handleClick">
      <el-tab-pane label="告警过滤" name="first">
        <rule-table1 ref="ruleTable1" />
      </el-tab-pane>
      <el-tab-pane label="告警邮件转发" name="second">
        <rule-table2 ref="ruleTable2" />
      </el-tab-pane>
      <el-tab-pane label="级别重定义" name="three">
        <rule-table3 ref="ruleTable3" />
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="添加告警规则" :visible.sync="dialogVisible" custom-class="addHandleWidth" :before-close="resetForm">
      <el-form :model="ruleForm" label-position="right" label-width="100px">
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="规则类别:">
              <el-select v-model="ruleForm.ruleType" @change="changeType">
                <el-option label="告警过滤规则" value="告警过滤规则"></el-option>
                <el-option label="告警邮件转发规则" value="告警邮件转发规则"></el-option>
                <el-option label="告警级别重定义规则" value="告警级别重定义规则"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <addTable1 v-if="changeTypeName === '告警过滤规则'" />
        <addTable2 v-if="changeTypeName === '告警邮件转发规则'" />
        <addTable3 v-if="changeTypeName === '告警级别重定义规则'" />
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ruleTable1 from './ruleTable1';
import ruleTable2 from './ruleTable2';
import ruleTable3 from './ruleTable3';
import addTable1 from './addTable1';
import addTable2 from './addTable2';
import addTable3 from './addTable3';
export default {
  components: {
    ruleTable1,
    ruleTable2,
    ruleTable3,
    addTable1,
    addTable2,
    addTable3
  },
  data () {
    return {
      activeName: 'first',
      btnarr: [{ id: '1', value: '新增', eventName: 'addHandle', type: 'primary' }],
      dialogVisible: false,
      ruleForm: {
        ruleType: '',
        num: '',
        name: '',
        source: '',
        type: '',
        level: '',
        des: '',
        runstate: ''
      },
      changeTypeName: '告警过滤规则'
    }
  },
  created () {
  },
  methods: {
    addReportRule (val) {
      this.dialogVisible = true
      // if (this.activeName === 'first') {
      //   this.$refs.ruleTable1.add();
      // } else if (this.activeName === 'second') {
      //   this.$refs.ruleTable2.add();
      // } else if (this.activeName === 'three') {
      //   this.$refs.ruleTable3.add();
      // }
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
    changeType (val) {
      this.changeTypeName = val;
    },
    handleClick () { }
  }
}
</script>

<style lang="scss" scoped>
.tab_body {
  padding: 17px 12px;
  background-color: #fff;
}
</style>
