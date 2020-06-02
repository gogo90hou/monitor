<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">操作系统和数据库</el-breadcrumb-item>
        <el-breadcrumb-item>oracle</el-breadcrumb-item>
        <el-breadcrumb-item>oracle名称</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <div class="detail_body">
      <el-row class="detail_box run_hardDisk_box">
        <el-col :span="7">
          <div class="detail run_detail">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div class="run_detail_body">
              <div class="row row_one"><span class="col_one">运行时长 ： 3h</span><span class="col_two">运行状态 ： <i :style="{backgroundColor: runStateColor}"></i> 正常</span></div>
              <div class="row row_two"><span class="col_one">进程数量 ： 43</span><span class="col_two">线程数量 ：32</span></div>
              <div class="row row_three"><span class="col_one">最大句柄数 ： 1254</span><span class="col_two">当前句柄数 ： 871</span></div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="detail hardDisk_detail">
            <el-row style="height: 100%;">
              <el-col :span="7" class="hardDisk_detail_round">
                <div class="title">
                  <span class="box_title">硬盘</span>
                </div>
                <div class="round-box">
                  <RoundBar :percent-num="91" :speed="3" />
                  <div class="usage">使用率:91%(64G/128G)</div>
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
              <el-col :span="7" class="histogram_box" style="margin-left:20px;">
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
      <el-row class="detail_box memory_box">
        <el-col :span="7">
          <div class="memory_box_round">
            <div class="detail" style="height: 100%;">
              <div class="title">
                <span class="box_title">内存</span>
              </div>
              <div class="round-box">
                <RoundBar :percent-num="72" :speed="3" />
                <div class="usage">使用率:72%(6G/8G)</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="memory_box_lineChart">456</div>
        </el-col>
      </el-row>
      <el-row class="detail_box cpu_disk_box">
        <el-col :span="12">
          <div class="cpu_detail">
            <div class="detail">
              <div class="title">
                <span class="box_title">CPU</span>
                <span class="box_title_two">当前cpu负载：<span class="value">60%</span></span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="disk_detail">
            <div class="detail">
              <div class="title">
                <span class="box_title">磁盘IO</span>
                <span class="box_title_two">入方向字节数：<span class="value">43kb/s</span></span>
                <span class="box_title_three">出方向字节数：<span class="value">45kb/s</span></span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box describe_box">
        <el-col :span="24">
          <div class="describe_detail">
            <div class="detail">
              <div class="title">
                <span class="box_title">描述信息</span>
              </div>
              <div class="information">
                <el-row :gutter="20">
                  <el-col :span="5">操作系统：<span>windows操作系统</span></el-col>
                  <el-col :span="4">操作系统版本：<span>v1.2</span></el-col>
                  <el-col :span="5">操作系统类型：<span>64位操作系统</span></el-col>
                  <el-col :span="10">所在服务器：<span>省局服务器1</span></el-col>
                  <el-col :span="24">描述信息：<span>服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span></el-col>
                </el-row>
              </div>
            </div>
          </div>
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
.detail_body {
  .run_hardDisk_box {
    // 运行情况
    .run_detail {
      margin-right: 22px;
      .run_detail_body {
        font-size: 14px;
        color: #606060;
        .row {
          height: 35px;
          line-height: 35px;
          .col_one {
            float: left;
            width: 50%;
          }
          .col_two {
            float: right;
            width: 50%;
            text-align: left;
          }
        }
        .row_one {
          margin-top: 15px;
          .col_two i {
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
      .box_title_two {
        position: absolute;
        color: #6d727a;
        left: 50%;
        transform: translateX(-50%);
        .value {
          color: #27b102;
        }
      }
    }
    .disk_detail {
      margin-left: 11px;
      .box_title_two {
        margin-left: 166px;
        color: #6d727a;
        .value {
          color: #6d7ee1;
        }
      }
      .box_title_three {
        margin-left: 80px;
        color: #6d727a;
        .value {
          color: #ffd04e;
        }
      }
      @media screen and (max-width: 1500px) {
        .box_title_two {
          margin-left: 30px;
        }
        .box_title_three {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
