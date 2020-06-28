<template>
  <div class="body-content">
    <HeadMenu title="告警声音设置" />
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="grid-content bg-purple-left">
          <el-row>
            <el-col :span="7">
              <div class="level levelDeadly">
                <span class="col-title">级别</span>
                <div>
                  <i class="iconfont iconicon_Fatal_warning"></i>
                  <span>致命</span>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="changeVoice">
                <span class="col-title">选择声音</span>
                <div>报警声音1.mp3</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="switchVoice">
                <span class="col-title">开启/关闭声音</span>
                <div class="switch-body">
                  <div
                    :class="{'switch-open': switchIsOpen,'isSwitchLeft': true}"
                    @click="switchOpen"
                  >已开启</div>
                  <div
                    :class="{'switch-close': !switchIsOpen,'isSwitchRight': true}"
                    @click="switchClose"
                  >已关闭</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-left">
          <el-row>
            <el-col :span="7">
              <div class="level levelSerious">
                <span class="col-title">级别</span>
                <div>
                  <i class="iconfont iconicon_Critical_warning"></i>
                  <span>严重</span>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="changeVoice">
                <span class="col-title">选择声音</span>
                <div>报警声音1.mp3</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="switchVoice">
                <span class="col-title">开启/关闭声音</span>
                <div class="switch-body">
                  <div
                    :class="{'switch-open': switchIsOpen2,'isSwitchLeft': true}"
                    @click="switchOpen2"
                  >已开启</div>
                  <div
                    :class="{'switch-close': !switchIsOpen2,'isSwitchRight': true}"
                    @click="switchClose2"
                  >已关闭</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="grid-content bg-purple-left">
          <el-row>
            <el-col :span="7">
              <div class="level levelGeneral">
                <span class="col-title">级别</span>
                <div>
                  <i class="iconfont iconicon_General_warning"></i>
                  <span>一般</span>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="changeVoice">
                <span class="col-title">选择声音</span>
                <div>报警声音1.mp3</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="switchVoice">
                <span class="col-title">开启/关闭声音</span>
                <div class="switch-body">
                  <div
                    :class="{'switch-open': switchIsOpen3,'isSwitchLeft': true}"
                    @click="switchOpen3"
                  >已开启</div>
                  <div
                    :class="{'switch-close': !switchIsOpen3,'isSwitchRight': true}"
                    @click="switchClose3"
                  >已关闭</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-left">
          <el-row>
            <el-col :span="7">
              <div class="level levelPrompt">
                <span class="col-title">级别</span>
                <div>
                  <i class="iconfont iconicon_Friendship_tips"></i>
                  <span>提示</span>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="changeVoice">
                <span class="col-title">选择声音</span>
                <div>报警声音1.mp3</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="switchVoice">
                <span class="col-title">开启/关闭声音</span>
                <div class="switch-body">
                  <div
                    :class="{'switch-open': switchIsOpen4,'isSwitchLeft': true}"
                    @click="switchOpen4"
                  >已开启</div>
                  <div
                    :class="{'switch-close': !switchIsOpen4,'isSwitchRight': true}"
                    @click="switchClose4"
                  >已关闭</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      switchIsOpen: true,
      switchIsOpen2: false,
      switchIsOpen3: false,
      switchIsOpen4: true
    }
  },
  computed: {
    showName () {
      return this.switchName === '1' ? '开启' : '关闭'
    }
  },
  created () {
  },
  methods: {
    switchOpen () {
      this.switchIsOpen = true;
    },
    switchClose () {
      this.switchIsOpen = false;
    },
    switchOpen2 () {
      this.switchIsOpen2 = true;
    },
    switchClose2 () {
      this.switchIsOpen2 = false;
    },
    switchOpen3 () {
      this.switchIsOpen3 = true;
    },
    switchClose3 () {
      this.switchIsOpen3 = false;
    },
    switchOpen4 () {
      this.switchIsOpen4 = true;
    },
    switchClose4 () {
      this.switchIsOpen4 = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  width: 100%;
  height: 127px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px 20px;
  .col-title {
    font-size: 14px;
    color: #a1a1a1;
    display: inline-block;
    margin-bottom: 20px;
  }
  .level {
    font-size: 20px;
    div {
      height: 56px;
      line-height: 56px;
      i {
        display: inline-block;
        font-size: 48px;
        vertical-align: middle;
        margin-top: -5px;
        margin-right: 20px;
      }
      span {
        display: inline-block;
      }
    }
  }
  .levelDeadly {
    i {
      color: red;
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 48px;
      transform: rotate(45deg);
      margin-left: 3px;
      margin-top: -11px !important;
      -ms-transform: rotate(45deg); /* IE 9 */
      -moz-transform: rotate(45deg); /* Firefox */
      -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
      -o-transform: rotate(45deg); /* Opera */
    }
  }
  .levelSerious {
    i {
      color: #fa7c00;
    }
  }
  .levelGeneral {
    i {
      color: #ffc600;
    }
  }
  .levelPrompt {
    i {
      color: #a09116;
    }
  }
  .changeVoice div {
    height: 56px;
    line-height: 56px;
    color: #5466e0;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
  .switch-body {
    position: relative;
    width: 125px;
    height: 42px;
    line-height: 42px;
    background-color: #e6e6f5;
    border-radius: 21px;
    font-size: 14px;
    color: #fff;
    margin-top: 7px;
    cursor: pointer;
    .isSwitchLeft {
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 100%;
      text-align: center;
      padding-right: 10px;
      border-radius: 21px;
      background-color: #e6e6f5;
    }
    .isSwitchRight {
      position: absolute;
      top: 0;
      right: 0;
      width: 70px;
      height: 100%;
      text-align: center;
      padding-left: 10px;
      border-radius: 21px;
      background-color: #e6e6f5;
    }
    .switch-open {
      padding: 0;
      background-color: #5466e0;
      z-index: 2;
    }
    .switch-close {
      padding: 0;
      background-color: #8a8a8a;
    }
  }
}
</style>
