
<template>
  <div class="dashboard">
    <el-row class="list" :gutter="gutter">
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconsafety"></span>
            <span>安防设备</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconicon_Application_software"></span>
            <span>应用软件</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconshebeiguanli"></span>
            <span>IT设备</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconicon_Intermediate_key1"></span>
            <span>中间件</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconicon_Cloud_platform1"></span>
            <span>云平台</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="boxs">
          <h3>
            <span class="icon iconfont iconshujukulianjie"></span>
            <span>操作系统和数据库</span>
          </h3>
          <div class="content">
            <div class="left">
              <strong>432</strong>
              <p>总个数</p>
            </div>
            <div class="right">
              <strong>0</strong>
              <p>告警个数</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="gutter" class="two">
      <el-col :span="8">
        <div class="boxs healthy">
          <h3>应用系统健康度</h3>
          <el-row>
            <el-col :span="6">
              <bar :score="50" />
              <span class="name">一体化平台</span>
            </el-col>
            <el-col :span="6">
              <bar :score="40" />
              <span class="name">会见系统</span>
            </el-col>
            <el-col :span="6">
              <bar :score="20" />
              <span class="name">OA系统</span>
            </el-col>
            <el-col :span="6">
              <bar :score="80" />
              <span class="name">狱政系统</span>
            </el-col>
          </el-row>
          <!-- <img src="./ui/wave.svg" alt /> -->
        </div>
      </el-col>
      <el-col :span="16">
        <div class="boxs warn">
          <h3>告警级别状态</h3>
          <el-row>
            <el-col :span="6">
              <pie :num="50" :type="1" />
              <span class="name">致命告警</span>
            </el-col>
            <el-col :span="6">
              <pie :num="40" :type="2" />
              <span class="name">严重告警</span>
            </el-col>
            <el-col :span="6">
              <pie :num="20" :type="3" />
              <span class="name">一般告警</span>
            </el-col>
            <el-col :span="6">
              <pie :num="80" :type="4" />
              <span class="name">提示告警</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="gutter" class="three">
      <el-col :span="8">
        <div class="boxs">
          <h3>设备告警排名</h3>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="boxs">
          <h3>设备完好率</h3>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="boxs">
          <h3>监控设备告警趋势</h3>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import bar from './ui/bar.vue'
import pie from './ui/pie.vue'
export default {
  components: { bar, pie },
  data () {
    return {
      gutter: document.body.clientHeight / 100 * 3
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  padding: 3vh;
  background-color: #eff0f5;
  height: calc(100vh - 64px);
  .el-col {
    height: 100%;
  }
  .boxs {
    background-color: #fff;
    height: 100%;
    h3 {
      color: #000000;
      font-size: 16px;
    }
  }
  .list {
    font-size: 16px;
    color: #000000;
    height: 14vh;
    .boxs {
      padding: 1vh 15px;
      position: relative;
      .content {
        font-size: 0;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 1vh;
        .left,
        .right {
          display: inline-block;
          font-size: 14px;
          color: #b8b8b8;
          width: 50%;
          text-align: center;
          strong {
            font-size: 24px;
            font-family: "Arial-BoldMT", Arial;
            font-weight: bold;
          }
        }
        p {
          margin-top: 0.5vh;
        }
        .left strong {
          color: #252a39;
        }
        .right strong {
          color: #f57923;
        }
      }
    }

    .icon {
      color: #5690ea;
    }
  }
  .two,
  .three {
    margin-top: 3vh;
    height: calc((100vh - 26vh - 64px) / 2);
    .el-row {
      height: 100%;
    }
  }
  .healthy {
    padding: 2vh 15px;
    .el-row {
      margin-top: 5vh;
      text-align: center;
      .name {
        font-size: 14px;
        color: #000000;
        display: inline-block;
        margin-top: 2vh;
      }
    }
  }
  .warn {
    padding: 2vh 15px;
    .el-row {
      margin-top: 3vh;
      text-align: center;
      .name {
        font-size: 14px;
        color: #000000;
        display: inline-block;
        margin-top: 20px;
      }
    }
  }
}
</style>
