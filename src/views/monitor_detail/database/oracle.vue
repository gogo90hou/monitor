<template>
  <div class="detail_body">
      <el-row class="detail_box run_process_box" :gutter="20">
        <el-col :span="4">
          <div class="detail run_detail">
            <div class="title">
              <span class="box_title">运行情况</span>
            </div>
            <div class="run_detail_body">
              <div class="row row_one"><span class="col_one">运行时长 ： <span class="black">3h</span></span></div>
              <div class="row row_two"><span class="col_two">运行状态 ： <i class="small_round" :style="{backgroundColor: runStateColor}"></i> <span class="black">正常</span></span></div>
              <div class="row row_three"><span class="col_one">数据库文件大小 ： <span class="black">8G</span></span></div>
              <div class="row row_four"><span class="col_one">每秒事务数 ： <span class="black">32</span></span></div>
            </div>
            <div class="iconfont iconicon_cog"></div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="detail process_detail">
            <div class="title">
              <span class="box_title">进程</span>
              <span class="box_title_center">当前进程数：<span class="value">60</span></span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box session_hit_box" :gutter="20">
        <el-col :span="12">
          <div class="detail">
            <div class="title">
              <span class="box_title">会话</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="detail">
            <div class="title">
              <span class="box_title">命中率</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box s_p_t_box" :gutter="20">
        <el-col :span="6">
          <div class="detail">
            <div class="title">
              <span class="box_title">SGA</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="detail">
            <div class="title">
              <span class="box_title">PGA</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="detail">
            <div class="title">
              <span class="box_title">TPS</span>
              <span class="box_title_center">当前事务数（tps）：<span class="value">32次/秒</span></span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="detail_box audit_user_box" :gutter="20">
        <el-col :span="12">
          <div class="detail">
            <div class="title">
              <span class="box_title">审计</span>
              <span class="box_title_right">审计功能状态：<span class="value">开启</span></span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="detail">
            <div class="title">
              <span class="box_title">用户</span>
              <span class="box_title_right">连接用户<span class="valueNum">365</span>个 / 锁定用户<span class="valueNum">26</span>个</span>
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
                  <el-col :span="5">操作系统：<span class="black">windows操作系统</span></el-col>
                  <el-col :span="4">操作系统版本：<span class="black">v1.2</span></el-col>
                  <el-col :span="5">操作系统类型：<span class="black">64位操作系统</span></el-col>
                  <el-col :span="10">所在服务器：<span class="black">省局服务器1</span></el-col>
                  <el-col :span="24">描述信息：<span class="black">服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span></el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      runStateColor: '#27B102'
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_body {
  .run_process_box {
    // 运行情况
    .detail {
      height: 332px;
    }
    .run_detail_body {
      // 加高行间距
      .row {
        margin-bottom: 20px;
      }
    }
  }
  .session_hit_box {
    .detail {
      height: 94px;
    }
  }
  .s_p_t_box {
    .detail {
      height: 300px;
    }
  }
  .audit_user_box {
    .detail {
      height: 300px;
    }
  }
}
</style>
