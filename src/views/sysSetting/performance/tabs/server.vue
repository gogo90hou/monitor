<template>
  <div class="server">
    <el-row class="header">
      <el-col :span="5" :offset="5">上限值</el-col>
      <el-col :span="4">下限值</el-col>
      <el-col :span="5">设置越限时长</el-col>
      <el-col :span="5">越限时长</el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="5">风扇转数(转/分)</el-col>
      <el-col :span="5">
        <el-input v-model="input" />
      </el-col>
      <el-col :span="4">
        <el-input />
      </el-col>
      <el-col :span="5">
        <el-input class="mini" />
        <span>× 4min (采集周期）</span>
      </el-col>
      <el-col :span="5">80min</el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="5">硬盘使用率(%)</el-col>
      <el-col :span="5">
        <el-input v-model="input" />
      </el-col>
      <el-col :span="4">
        <el-input />
      </el-col>
      <el-col :span="5">
        <el-input class="mini" />
        <span>× 1d (采集周期）</span>
      </el-col>
      <el-col :span="5">80min</el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="5">内存使用率(%)</el-col>
      <el-col :span="5">
        <el-input v-model="input" />
      </el-col>
      <el-col :span="4">
        <el-input />
      </el-col>
      <el-col :span="5">
        <el-input class="mini" />
        <span>× 1d (采集周期）</span>
      </el-col>
      <el-col :span="5">80min</el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="5">CPU温度（℃）</el-col>
      <el-col :span="5">
        <el-input v-model="input" />
      </el-col>
      <el-col :span="4">
        <el-input />
      </el-col>
      <el-col :span="5">
        <el-input class="mini" />
        <span>× 1h (采集周期）</span>
      </el-col>
      <el-col :span="5">80min</el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="5">CPU负载（%）</el-col>
      <el-col :span="5">
        <el-input v-model="input" />
      </el-col>
      <el-col :span="4">
        <el-input />
      </el-col>
      <el-col :span="5">
        <el-input class="mini" />
        <span>× 1h (采集周期）</span>
      </el-col>
      <el-col :span="5">80min</el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scope>
.server {
  text-align: center;
  color: #595959;
  font-size: 14px;
  .header {
    height: 63px;
    line-height: 63px;
    background: #e8ebf3;
    color: #25243e;
    font-size: 15px;
  }
  .line {
    border-bottom: 1px solid #e8ebf3;
    padding: 20px 0;
    .el-input {
      width: 70%;
      height: 32px;
      border: 1px solid rgba(236, 236, 238, 1);
      border-radius: 3px;
      color: #595959;
      font-size: 14px;
      input {
        text-align: center;
      }
      &.mini {
        width: 30%;
        input {
          text-align: right;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
