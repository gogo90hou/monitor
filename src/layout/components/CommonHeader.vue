<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <h1>环亚信通</h1>
      </el-col>
      <el-col :span="12">
        <ul class="header__list">
          <li v-for="(item,key) in showList" :key="key" @click="linkTo(item)">{{ item.name }}</li>
        </ul>
      </el-col>
      <el-col :span="8" class="right-menu">
        <template v-if="device === 'desktop'">
          <el-tooltip content="菜单搜索" effect="dark" placement="bottom">
            <search id="header-search" class="right-menu-item" />
          </el-tooltip>
          <error-log class="errLog-container right-menu-item hover-effect" />
          <el-tooltip content="语言切换" effect="dark" placement="bottom">
            <lang-select class="right-menu-item hover-effect" />
          </el-tooltip>

          <el-tooltip content="全屏" effect="dark" placement="bottom">
            <screenfull id="screenfull" class="right-menu-item hover-effect" />
          </el-tooltip>

          <el-tooltip content="字体大小" effect="dark" placement="bottom">
            <size-select id="size-select" class="right-menu-item hover-effect" />
          </el-tooltip>
        </template>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <span>超级管理员</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '@/components/HeaderSearch';
import Screenfull from '@/components/Screenfull';
import SizeSelect from '@/components/SizeSelect';
import ErrorLog from '@/components/ErrorLog';
import LangSelect from '@/components/LangSelect';
import defaultHeadPic from '@/assets/police.png';
export default {
  name: 'CommonHeader',
  components: {
    LangSelect,
    Screenfull,
    SizeSelect,
    Search,
    ErrorLog
  },
  data () {
    return {
      showList: [],
      defaultHeadPic
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'avatar',
      'device'
    ])
  },
  mounted () {
    this.showList = this.permission_routes.filter((item) => {
      return !item.hidden
    })
  },
  methods: {
    linkTo (item) {
      if (item.data && item.data.menuType === 'directory') {
        this.$router.push(item.children[0].path)
      } else {
        this.$router.push(item.path)
      }
    }
  }
}
</script>
<style lang="scss">
.header {
  height: 78px;
  line-height: 78px;
  width: 100%;
  text-align: center;
  @include themeify {
    background-color: themed("bgColor");
  }
  @include themeify {
    color: themed("light");
  }
  h1 {
    font-size: 30px;
    display: inline;
    @include themeify {
      color: themed("highLight");
    }
  }
  &__list {
    text-align: left;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        color: themed("highLight");
      }
    }
  }
  .right-menu {
    text-align: right;
    height: 78px;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 78px;
      line-height: 78px;
      font-size: 18px;
      @include themeify {
        color: themed("light");
      }
      vertical-align: middle;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
