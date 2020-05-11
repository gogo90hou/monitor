<template>
  <div class="SystemBar">
    <el-tree
      :data="showList"
      :props="defaultProps"
      :default-expand-all="true"
      @node-click="handleNodeClick"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SystemBar',
  data () {
    return {
      showList: [],
      currentPath: this.$route.path,
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  },
  created () {
    this.showList = this.permission_routes.find((item) => {
      return item.name === '系统设置'
    }).children
  },
  methods: {
    handleNodeClick (data) {
      if (data.data && data.data.menuType === 'url') {
        this.$router.push(data.path)
      }
    }
  }
}
</script>
<style lang="scss">
.SystemBar {
  width: 100%;
  height: auto;
  text-align: center;
  .el-tree {
    @include themeify {
      color: themed("highColor");
    }
    @include themeify {
      background-color: themed("bgColor");
    }
  }
  .el-tree-node__content:hover,
  .el-tree-node:focus > .el-tree-node__content {
    background-color: #0edcf76b;
    @include themeify {
      color: themed("highLight");
    }
  }
}
</style>
