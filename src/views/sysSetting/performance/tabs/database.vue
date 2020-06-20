<template>
  <div class="database">
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
      <el-col :span="3" class="boxs">mysql</el-col>
      <el-col :span="21" class="box-left">
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">物理磁盘读取次数(次/分)</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">线程缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">查询缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="3" class="boxs">oracle</el-col>
      <el-col :span="21" class="box-left">
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">物理磁盘读取次数(次/分)</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">线程缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">查询缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="3" class="boxs">sqlserver</el-col>
      <el-col :span="21" class="box-left">
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">物理磁盘读取次数(次/分)</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">线程缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
        <el-row class="line" type="flex" align="middle">
          <el-col :span="4" class="tl">查询缓存命中率（%）</el-col>
          <el-col :span="5">
            <el-input v-model="input" />
          </el-col>
          <el-col :span="5">
            <el-input />
          </el-col>
          <el-col :span="5">
            <el-input class="mini" />
            <span>× 4min (采集周期）</span>
          </el-col>
          <el-col :span="5">80min</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.database {
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
  .boxs {
    color: #5a70e1;
  }
  .box-left {
    border-left: 1px solid #e8ebf3;
  }
  .line {
    border-top: 1px solid #e8ebf3;
    padding: 20px 0;
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
