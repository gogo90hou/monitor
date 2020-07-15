<template>
  <div>
    <el-form :model="ruleForm" label-position="right" label-width="100px">
      <el-row :gutter="50">
        <el-col :span="12">
          <el-form-item label="交换机名称:">
            <el-input v-model="ruleForm.name" placeholder="交换机名称" />
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
          <el-form-item label="接入设备:">
            <el-input v-model="ruleForm.accessEquipment" placeholder="接入设备名称" />
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
          <el-form-item label="所在位置:">
            <el-input v-model="ruleForm.location" placeholder="所在位置" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="交换机描述:">
            <el-input v-model="ruleForm.des" type="textarea" placeholder="交换机信息" />
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
        name: '',
        gateway: '',
        accessEquipment: '',
        area: '',
        location: '',
        des: ''
      }
    }
  }
}
</script>
