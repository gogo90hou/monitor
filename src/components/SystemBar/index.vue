<template>
  <div class="SystemBar">
    <el-tree
      :data="showList"
      :props="defaultProps"
      node-key="path"
      show-checkbox
      :highlight-current="true"
      :default-expand-all="true"
      :default-checked-keys="[currentPath]"
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
  min-height: calc(100vh - 78px);
  text-align: center;
  .el-tree {
    color: #fff;
    background-color: #2c2b40;
    min-height: calc(100vh - 78px);
    .el-checkbox {
      display: none;
    }
    .is-checked > .el-tree-node__content {
      background-color: #0edcf76b;
      @include themeify {
        color: themed("highLight");
      }
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
