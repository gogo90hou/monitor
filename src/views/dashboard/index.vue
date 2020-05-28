
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
        <div class="boxs warnRank">
          <h3>
            设备告警排名
            <span class="right">起止目前排名</span>
          </h3>
          <ul ref="warnRanklist">
            <li
              v-for="(item,index) in warnList"
              :key="index"
              :style="{height:liHeight + 'px',lineHeight:liHeight+'px'}"
            >
              <span class="sort">{{ index+1 }}</span>
              <span class="name">{{ item.name }}</span>
              <span class="right">{{ item.num }}个</span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="boxs">
          <h3>设备完好率</h3>
          <el-row class="chooseGroup">
            <el-col :span="8">
              <div>
                <span class="checkboxs active"></span>
                <span>周</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <span class="checkboxs"></span>
                <span>月</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <span class="checkboxs"></span>
                <span>年</span>
              </div>
            </el-col>
          </el-row>
          <echartBar></echartBar>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="boxs">
          <h3>监控设备告警趋势</h3>
          <el-row class="chooseGroup">
            <el-col :span="8">
              <div>
                <span class="checkboxs active"></span>
                <span>周</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <span class="checkboxs"></span>
                <span>月</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <span class="checkboxs"></span>
                <span>年</span>
              </div>
            </el-col>
          </el-row>
          <echartLine></echartLine>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import bar from './ui/bar.vue'
import pie from './ui/pie.vue'
import echartBar from './ui/echartBar.vue'
import echartLine from './ui/echartLine.vue'
export default {
  components: { bar, pie, echartBar, echartLine },
  data () {
    return {
      gutter: document.body.clientHeight / 100 * 3,
      liHeight: 40,
      showNum: 5,
      warnList: [{
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 550
      }, {
        name: '省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }, {
        name: '省局服务器省局服务器省局服务器1',
        num: 620
      }]
    }
  },
  mounted () {
    this.changeLayout();
  },
  methods: {
    changeLayout () {
      const ulHeight = this.$refs.warnRanklist.clientHeight;
      let i = 1;
      while (ulHeight / i < 35 || ulHeight / i > 45) {
        i++;
      }
      this.liHeight = ulHeight / i;
      this.showNum = i;
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
    padding: 2vh 15px;
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
    .chooseGroup {
      height: auto;
      width: 30%;
      font-size: 12px;
      margin-left: 70%;
      margin-bottom: 10px;
      .checkboxs {
        display: inline-block;
        vertical-align: middle;
        width: 13px;
        height: 13px;
        border: 1px solid #acb3c6;
        border-radius: 100%;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          width: 11px;
          height: 11px;
          position: absolute;
          border: 2px solid #fff;
          background-color: #acb3c6;
          border-radius: 100%;
        }
        &.active {
          border: 1px solid #5466e0;
          &::after {
            background-color: #5466e0;
          }
        }
      }
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
  .warnRank {
    overflow: hidden;
    h3 {
      overflow: hidden;
      margin-bottom: 1vh;
      .right {
        float: right;
        font-size: 14px;
        color: #c5c5c5;
      }
    }
    ul {
      height: calc(33vh - 32px - 18px);
      overflow: hidden;
    }
    li {
      color: #000000;
      font-size: 14px;
      border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
      .right {
        float: right;
      }
    }
  }
}
</style>
