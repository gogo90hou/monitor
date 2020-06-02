<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">操作系统和数据库</el-breadcrumb-item>
        <el-breadcrumb-item>windows</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <system></system>
  </div>
</template>
<script>
import system from '../../monitor_detail/database/system'
export default {
  components: {
    system
  },
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

