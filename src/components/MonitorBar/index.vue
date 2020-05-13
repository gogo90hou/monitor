<template>
  <div class="monitorbar">
    <ul>
      <li
        v-for="(item,key) in showList"
        :key="key"
        :class="[currentPath.indexOf(item.path) !== -1?'active':'']"
        @click="jump(item)"
      >{{ item.name }}</li>
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
          // let isCurrent = false;
          // if (i.path === this.$route.path) {
          //   isCurrent = true
          // } else if (i.children && i.children.length > 0) {
          //   isCurrent = !!i.children.find((child) => {
          //     return child.path === this.$route.path
          //   })
          // }
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
    }
  }
}
</script>
<style lang="scss">
.monitorbar {
  width: 100%;
  height: auto;
  text-align: center;
  border-right: 1px solid;
  padding: 10px;
  @include themeify {
    border-color: themed("navColor");
  }
  li {
    height: 80px;
    cursor: pointer;
    @include themeify {
      color: themed("navColor");
    }
    &:hover,
    &.active {
      @include themeify {
        color: themed("navHighColor");
      }
    }
  }
}
</style>
