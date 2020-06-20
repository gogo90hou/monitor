<template>
  <div class="body-content">
    <HeadMenu
      title="告警规则设置"
      :btnarr="btnarr"
      @getEvent="addReportRule"
    />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
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
  </div>
</template>

<script>
import ruleTable1 from './ruleTable1';
import ruleTable2 from './ruleTable2';
import ruleTable3 from './ruleTable3';
export default {
  components: {
    ruleTable1,
    ruleTable2,
    ruleTable3
  },
  data () {
    return {
      activeName: 'first',
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }]
    }
  },
  created () {
  },
  methods: {
    addReportRule (val) {
      if (this.activeName === 'first') {
        this.$refs.ruleTable1.add();
      } else if (this.activeName === 'second') {
        this.$refs.ruleTable2.add();
      } else if (this.activeName === 'three') {
        this.$refs.ruleTable3.add();
      }
    },
    handleClick () { }
  }
}
</script>

<style lang="sass" scoped>

</style>
