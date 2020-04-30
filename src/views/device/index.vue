<template>
  <div>
    <el-table :data="list" tooltip-effect="dark" style="width: 100%">
      <el-table-column label="序号" type="index" />
      <el-table-column label="设备名称" prop="mename" />
      <el-table-column label="JIT编译器" prop="jitCompileName" />
      <el-table-column label="管理接口的规范版本" prop="managementSpecVersion" />
      <el-table-column label="虚拟机名称" prop="jvmName" />
      <el-table-column label="虚拟机规范名称" prop="specName" />
      <el-table-column label="虚拟机规范供应商" prop="specVendor" />
      <el-table-column label="虚拟机规范版本" prop="specVersion" />
    </el-table>
    <!-- <pagination v-if="total" :total="total" :page="page" :limit="limit" @pagination="getList" /> -->
  </div>
</template>
<script>
// import Pagination from '@/components/Pagination';
import request from '@/utils/request';
export default {

  data () {
    return {
      list: [],
      total: 1
    }
  },
  mounted () {
    this.timeRun = window.setInterval(() => {
      this.getData();
    }, 600000)
    this.getData();
  },
  destroyed () {
    window.clearInterval(this.timeRun)
  },
  methods: {
    getData () {
      request({
        url: `cmme/list`,
        method: 'get'
      }).then((data) => {
        this.list = data;
        console.log(data)
      })
    }
  }
}
</script>
