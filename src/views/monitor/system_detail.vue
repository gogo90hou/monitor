<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">操作系统和数据库</el-breadcrumb-item>
        <el-breadcrumb-item>windows</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button>返回</el-button>
    </div>
    <div class="detail_body">
      <el-row class="run_hardDisk_box">
        <el-col :span="7">
          <div class="run_detail">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div class="run_detail_body">
              <div><span>运行时长 ： 3h</span><span>运行状态 ： <i :style="{backgroundColor: runStateColor}"></i> 正常</span></div>
              <div><span>进程数量 ： 43</span><span>线程数量 ：32</span></div>
              <div><span>最大句柄数 ： 1254</span><span>当前句柄数 ： 871</span></div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="hardDisk_detail">
            <el-row style="height: 100%;">
              <el-col :span="7" class="hardDisk_detail_round">
                <div class="title">
                  <span class="box_title">硬盘</span>
                </div>
              </el-col>
              <el-col :span="2" class="partition">
                <div class="histogram_title">分区4个</div>
              </el-col>
              <el-col :span="7" class="histogram_box">
                <div class="histogram_cdef">
                  <span class="disk">C盘 ：</span>
                  <div class="histogram_middle_box">
                    <div class="figure">
                      <div class="figure_small"></div>
                    </div>
                    <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                  </div>
                  <span class="percentage">45%</span>
                </div>
                <div class="histogram_cdef">
                  <span class="disk">E盘 ：</span>
                  <div class="histogram_middle_box">
                    <div class="figure">
                      <div class="figure_small"></div>
                    </div>
                    <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                  </div>
                  <span class="percentage">45%</span>
                </div>
              </el-col>
              <el-col :span="7" class="histogram_box haha">
                <div class="histogram_cdef">
                  <span class="disk">D盘 ：</span>
                  <div class="histogram_middle_box">
                    <div class="figure">
                      <div class="figure_small"></div>
                    </div>
                    <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                  </div>
                  <span class="percentage">45%</span>
                </div>
                <div class="histogram_cdef">
                  <span class="disk">F盘 ：</span>
                  <div class="histogram_middle_box">
                    <div class="figure">
                      <div class="figure_small" style="width : 90%;background-color: #F13E3E;"></div>
                    </div>
                    <div class="text">已使用90G&nbsp;&nbsp;共100G</div>
                  </div>
                  <span class="percentage">90%</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="memory_box">
        <el-col :span="7">
          <div class="memory_box_round">123</div>
        </el-col>
        <el-col :span="17">
          <div class="memory_box_lineChart">456</div>
        </el-col>
      </el-row>
      <el-row class="cpu_disk_box">
        <el-col :span="12">
          <div class="cpu_detail">123</div>
        </el-col>
        <el-col :span="12">
          <div class="disk_detail">456</div>
        </el-col>
      </el-row>
      <el-row class="describe_box">
        <el-col :span="24">
          <div class="describe_detail">123</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbValue: '',
      runStateColor: '#27B102'
    }
  },
  created () {
    this.breadcrumbValue = this.$route.query;
    console.log(this.breadcrumbValue);
    this.$store.dispatch('monitor/system/getSysDetail', { actualId: this.$route.query.id });
  }
}
</script>

<style lang="scss" scoped>
.headNav {
  height: 34px;
  margin-bottom: 15px;
  .el-breadcrumb {
    float: left;
    height: 34px;
    line-height: 34px;
  }
  .el-button {
    float: right;
    color: #fff;
    background-color: #5466e0;
    margin: 0;
  }
}
.detail_body {
  // 运行和硬盘大盒子
  .run_hardDisk_box {
    .run_detail,
    .hardDisk_detail {
      position: relative;
      height: 240px;
      padding: 0 12px;
      background-color: #fff;
      .title {
        height: 22px;
        line-height: 22px;
        padding-top: 12px;
        box-sizing: content-box;
        .box_title {
          position: relative;
          margin-left: 10px;
          font-size: 16px;
          color: #5466e0;
        }
        .box_title:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 16px;
          top: 3px;
          left: -10px;
          background-color: #5466e0;
        }
      }
    }
    // 运行情况
    .run_detail {
      margin-right: 22px;
      .run_detail_body {
        font-size: 14px;
        color: #606060;
        div {
          height: 35px;
          line-height: 35px;
          span:nth-of-type(1) {
            float: left;
            width: 50%;
          }
          span:nth-of-type(2) {
            float: right;
            width: 50%;
            text-align: left;
          }
        }
        div:nth-of-type(1) {
          margin-top: 15px;
          span:nth-of-type(2) i {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            margin-top: -2px;
            vertical-align: middle;
          }
        }
      }
      .iconicon_cog {
        position: absolute;
        bottom: 12px;
        right: 15px;
        font-size: 81px;
        color: #190e74;
        opacity: 4%;
      }
    }
    // 硬盘
    .hardDisk_detail {
      .hardDisk_detail_round {
        height: 100%;
        border-right: 1px solid #ececec;
      }
    }
    // 分区
    .partition {
      .histogram_title {
        margin-left: 20px;
        margin-top: 16px;
        color: #606060;
        font-size: 14px;
        text-align: right;
      }
    }
    // 柱形图盒子
    .histogram_box {
      position: relative;
      height: 100%;
      .histogram_cdef {
        position: absolute;
        height: 64px;
        line-height: 64px;
        padding: 0 32px;
        width: 100%;
        border-radius: 32px;
        background-color: #f8f7fb;
        background: rgba(248, 247, 251, 0.5);
        box-shadow: 0px 0px 3px 0px rgba(156, 158, 172, 0.25);
        .disk {
          font-weight: bold;
          color: #606060;
          opacity: 100%;
        }
        .histogram_middle_box {
          display: inline-block;
          width: calc(100% - 100px);
          .figure {
            display: inline-block;
            width: 100%;
            height: 8px;
            border-radius: 4px;
            border: 1px solid #eeefff;
            background-color: #e8e8e8;
            .figure_small {
              width: calc(100% * 0.55);
              height: 8px;
              border-radius: 4px;
              background-color: #27b102;
              margin-top: -1px;
              margin-left: -1px;
            }
          }
          .text {
            position: absolute;
            width: 130px;
            height: 20px;
            line-height: 20px;
            top: 38px;
            left: calc(50% - 65px);
            color: #606060;
            font-size: 14px;
          }
        }
        .percentage {
          font-size: 16px;
          color: #27b102;
          margin-left: 13px;
          vertical-align: middle;
        }
      }
      .histogram_cdef:nth-child(1) {
        top: 55px;
      }
      .histogram_cdef:nth-child(2) {
        top: 134px;
      }
    }
    .haha {
      position: relative;
      margin-left: 15px;
      .histogram_cdef {
        position: absolute;
        top: 50px;
        right: 0;
      }
    }
  }
  .memory_box {
    margin-top: 20px;
    .memory_box_round,
    .memory_box_lineChart {
      height: 287px;
      background-color: #fff;
    }
    .memory_box_lineChart {
      padding-left: 22px;
    }
  }
  .cpu_disk_box {
    margin-top: 20px;
    .cpu_detail,
    .disk_detail {
      background-color: #fff;
      height: 331px;
    }
    .cpu_detail {
      margin-right: 11px;
    }
    .disk_detail {
      margin-left: 11px;
    }
  }
  .describe_box {
    margin-top: 20px;
    .describe_detail {
      background-color: #fff;
      height: 180px;
    }
  }
}
</style>

