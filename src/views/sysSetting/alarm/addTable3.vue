<template>
  <div>
    <el-form :model="ruleForm" label-position="right" label-width="100px">
      <el-row class="inlineSelect" :gutter="50">
        <el-col :span="12">
          <el-form-item label="序号:">
            <el-input v-model="ruleForm.num" placeholder="序号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="规则名称:">
            <el-input v-model="ruleForm.name" placeholder="规则名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="告警源:">
            <el-select v-model="ruleForm.source">
              <el-option label="门禁告警一" value="门禁告警一"></el-option>
              <el-option label="服务器告警2" value="服务器告警2"></el-option>
              <el-option label="应用软件告警三" value="应用软件告警三"></el-option>
              <el-option label="广播告警" value="广播告警"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="告警类别:">
            <el-select v-model="ruleForm.type">
              <el-option label="安防设备" value="安防设备"></el-option>
              <el-option label="应用软件" value="应用软件"></el-option>
              <el-option label="IT设备" value="IT设备"></el-option>
              <el-option label="中间件" value="中间件"></el-option>
              <el-option label="云平台" value="云平台"></el-option>
              <el-option label="操作系统和数据库" value="操作系统和数据库"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="告警级别:">
            <el-select v-model="ruleForm.level">
              <el-option label="致命" :value="1"></el-option>
              <el-option label="严重" :value="2"></el-option>
              <el-option label="一般" :value="3"></el-option>
              <el-option label="提示" :value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="重定义级别:">
            <el-select v-model="ruleForm.redirectLevel">
              <el-option label="致命" :value="1"></el-option>
              <el-option label="严重" :value="2"></el-option>
              <el-option label="一般" :value="3"></el-option>
              <el-option label="提示" :value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        num: '',
        name: '',
        source: '',
        type: '',
        level: '',
        redirectLevel: ''
      }
    }
  }
}
</script>

