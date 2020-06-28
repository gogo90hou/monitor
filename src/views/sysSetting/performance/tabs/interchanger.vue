<template>
  <div class="interchanger">
    <el-row class="header" type="flex" align="middle">
      <el-col :span="21" :offset="3">
        <el-row class="header" type="flex" align="middle">
          <el-col :span="5" :offset="4">上限值</el-col>
          <el-col :span="5">下限值</el-col>
          <el-col :span="6">
            设置越限时长
            <span style="color:#f00;font-size:14px;display:inline-block">(越限时长必须是采集数值周期的倍数)</span>
          </el-col>
          <el-col :span="4">越限时长</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="3" class="boxs">端口流速</el-col>
      <el-col :span="21" class="box-left">
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4">10M网口</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4">100M网口</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 1d (采集周期）&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4">1000M网口</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input />
            <span>B/S</span>
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 1d (采集周期）&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="3">CPU负载</el-col>
      <el-col :span="21">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5" :offset="4">
            <el-input v-model="input" />
            <span>%&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">
            <el-input />
            <span>%&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 1d (采集周期）&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="line" type="flex" justify="center" align="middle">
      <el-col :span="3">CPU内存利用率</el-col>
      <el-col :span="21">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5" :offset="4">
            <el-input v-model="input" />
            <span>%&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">
            <el-input />
            <span>%&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 1d (采集周期）&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.interchanger {
  color: #595959;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e8ebf3;
  .header {
    height: 63px;
    background: #e8ebf3;
    color: #25243e;
    font-size: 15px;
    line-height: initial;
    display: flex;
    align-items: center;
  }
  .box-left {
    border-left: 1px solid #e8ebf3;
  }
  .line {
    border-top: 1px solid #e8ebf3;
    padding: 10px 0;
    .el-input {
      width: 70%;
      height: 32px;
      border: 1px solid #e8ebf3;
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
