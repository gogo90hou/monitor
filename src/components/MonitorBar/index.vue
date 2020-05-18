<template>
  <div class="monitorbar">
    <ul>
      <li
        v-for="(item,key) in showList"
        :key="key"
        :class="[currentPath.indexOf(item.path) !== -1?'active':'']"
        @click="jump(item)"
      >
        <div class="icon iconfont" :class="setClass(item.data.icon)" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MonitorBar',
  data () {
    return {
      showList: [],
      currentPath: this.$route.path
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  },
  created () {
    this.permission_routes.forEach((item) => {
      if (item.children && item.children.length > 0) {
        var list = item.children.find((i) => {
          return this.$route.path.indexOf(i.path) !== -1
        })
        if (list) {
          this.showList = item.children;
          console.log(this.showList)
        }
      }
    })
  },
  methods: {
    jump (item) {
      this.$router.push(item.path)
    },
    setClass (item) {
      const obj = {};
      obj[item] = true;
      return obj;
    }
  }
}
</script>
<style lang="scss">
.monitorbar {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 1px;
  // border-image: -webkit-linear-gradient(#111, #1bd0db, #111) 30 30;
  background-color: #2c2b40;
  min-height: 100vh;
  // @include themeify {
  //   border-color: themed("navColor");
  // }
  li {
    padding: 20px 0;
    background-color: rgba(128, 107, 253, 0.2);
    margin-bottom: 1px;
    color: #fff;
    cursor: pointer;
    &:hover,
    &.active {
      background: -webkit-linear-gradient(
        left,
        rgba(128, 107, 253, 0.7) 0%,
        rgba(128, 107, 253, 0.2) 100%
      );
    }
    .icon {
      font-size: 30px;
      margin-bottom: 5px;
    }
  }
}
</style>
