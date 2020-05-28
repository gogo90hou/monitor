<template>
  <div class="TreeMenu">
    <el-tree
      :data="menu"
      :props="defaultProps"
      node-key="path"
      :highlight-current="true"
      :default-expanded-keys="[currentPath]"
      :default-checked-keys="[currentPath]"
      @node-click="handleNodeClick"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <span class="dashed-line"></span>
        <span class="icon iconfont iconicon_topology"></span>
        <span>{{ data.label }}</span>
      </span>
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'TreeMenu',
  props: {
    menu: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data () {
    return {
      imgList: {
        'setting': require('../../assets/icon/setting.png'),
        'warn': require('../../assets/icon/warn.png'),
        'performance': require('../../assets/icon/performance.png')
      },
      currentPath: this.$route.path,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      this.$emit('click', data);
    }
  }
}
</script>
<style lang="scss">
.TreeMenu {
  $menu-height: 56px;
  width: 100%;
  .el-tree--highlight-current {
    .el-tree-node {
      &.is-current {
        & > .el-tree-node__content {
          background-color: transparent !important;
          color: rgba(116, 210, 254, 1);
        }
      }
    }
  }
  .el-tree {
    color: rgba(234, 234, 234, 1);
    background-color: #242938;
    font-size: 18px;
    padding: 0px 10px;
    > .el-tree-node {
      > .el-tree-node__children {
        > .el-tree-node {
          margin-left: 8px;
        }
      }
    }
    .el-tree-node {
      position: relative;
      &:focus {
        & > .el-tree-node__content {
          background-color: transparent;
        }
      }
      .el-tree-node {
        margin-left: 32px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          left: 0;
          top: 0;
          width: 0px;
          border-left: 1px dashed rgba(155, 150, 253, 0.2);
        }
        &:last-child::before {
          height: $menu-height / 2;
        }
        .dashed-line {
          display: inline-block;
          width: 20px;
          height: 0px;
          border-top: 1px dashed rgba(155, 150, 253, 0.2);
          vertical-align: middle;
        }
      }
      .el-tree-node__content {
        position: relative;
        height: $menu-height;
        padding-left: 0px !important;
        > .el-tree-node__expand-icon {
          position: absolute;
          right: 0px;
          font-size: 0;
          background-image: url("../../assets/icon/add.png");
          width: 10px;
          height: 10px;
          padding: 0;
          &.expanded {
            background-image: url("../../assets/icon/reduce.png");
            transform: rotate(0);
          }
        }
        & > .is-leaf {
          background-image: none;
        }
        &:hover {
          background-color: transparent;
          color: rgba(116, 210, 254, 1);
        }
      }
    }
  }
}
</style>
