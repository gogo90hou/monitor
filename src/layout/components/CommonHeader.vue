<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <img src="@/assets/logo.png" />
      </el-col>
      <el-col :span="12">
        <ul class="header__list">
          <li
            v-for="(item,key) in showList"
            :key="key"
            v-addClass="[item,currentRouter]"
            @click="linkTo(item)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="8" class="right-menu">
        <!-- <template v-if="device === 'desktop'">
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
        </template>-->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <span>超级管理员</span>
            <i class="el-icon-caret-bottom"></i>
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
        <span style="font-size: 14px;">欢迎进入系统!</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import defaultHeadPic from '@/assets/police.png';
function addClass (el, list, currentRouter) {
  // console.log(list)
  let isChild = false;
  if (currentRouter === list.path || (list.redirect && currentRouter === list.redirect)) {
    isChild = true;
  } else if (list.children && list.children.length > 0) {
    list.children.forEach((item) => {
      addClass(el, item, currentRouter)
    })
  }
  if (isChild) {
    el.className = 'active'
  }
}
export default {
  name: 'CommonHeader',
  components: {
  },
  directives: {
    addClass: {
      inserted: function (el, bingind, vnode) {
        el.className = '';
        addClass(el, bingind.value[0], bingind.value[1])
      },
      bind: function () {
      },
      update: function (el, bingind, vnode) {
        if (JSON.stringify(bingind.oldValue) !== JSON.stringify(bingind.value)) {
          el.className = '';
          addClass(el, bingind.value[0], bingind.value[1])
        }
      },
      componentUpdated: function (el, bingind, vnode) {
      },
      unbind: function () {
      }
    }
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
    ]),
    currentRouter () {
      return this.$route.path
    }
  },
  mounted () {
    this.showList = this.permission_routes.filter((item) => {
      return !item.hidden
    })
  },
  methods: {
    linkTo (item) {
      if (item.data && item.data.menuType === 'directory') {
        this.linkTo(item.children[0])
      } else {
        this.$router.push(item.path)
      }
    }
  }
}
</script>
<style lang="scss">
.header {
  height: $navBar;
  line-height: $navBar;
  width: 100%;
  text-align: center;
  background: linear-gradient(-90deg, rgba(47, 53, 72, 1), rgba(37, 42, 57, 1));
  color: #ffffff;
  overflow: hidden;
  img {
    vertical-align: middle;
    width: 160px;
  }
  &__list {
    text-align: center;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-right: 3vw;
      width: 78px;
      text-align: center;
      cursor: pointer;
      color: #adb0b6;
      font-size: 18px;
      &:hover,
      &.active {
        span {
          border-bottom: 2px solid #5466e0;
          color: #fff;
        }
      }
      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .right-menu {
    text-align: right;
    height: 64px;
    line-height: 64px;
    padding-right: 20px;
    font-size: 16px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 64px;
      line-height: 64px;
      font-size: 16px;
      @include themeify {
        color: themed('light');
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
      cursor: pointer;
      font-size: 14px;
      .avatar-wrapper {
        position: relative;
        color: #ffffff;
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
          top: 27px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
