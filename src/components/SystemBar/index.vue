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
    .is-expanded {
      background-color: #1d1e24;
    }
    .el-checkbox {
      display: none;
    }
    .is-checked > .el-tree-node__content {
      background-image: url("../../assets/icon/tranBg.png");
      background-size: cover;
    }
  }
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background-color: #2c2b40;
  }
  .el-tree--highlight-current
    .el-tree-node.is-current.is-expanded
    > .el-tree-node__content {
    background-color: #1d1e24;
  }
  .el-tree-node__content:hover,
  .el-tree-node:focus > .el-tree-node__content {
    background-color: #2c2b40;
    @include themeify {
      color: themed("highLight");
    }
  }
  .el-tree-node__content {
    position: relative;
    height: 52px;
    padding: 0 10px !important;
  }
  .el-tree-node__children .el-tree-node__content {
    justify-content: center;
    &:hover {
      background-image: url("../../assets/icon/tranBg.png");
      background-size: cover;
    }
  }
  .el-tree-node__content > .el-tree-node__expand-icon {
    position: absolute;
    right: 10px;
    font-size: 0;
    background-image: url("../../assets/icon/add.png");
    width: 10px;
    height: 10px;
    padding: 0;
  }
  .el-tree-node__expand-icon.expanded {
    background-image: url("../../assets/icon/reduce.png");
    transform: rotate(0);
  }
  .el-tree-node__expand-icon.is-leaf {
    background-image: none;
  }
}
</style>
