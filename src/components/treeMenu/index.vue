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
      @node-contextmenu="handleContextmenuClick"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <span class="dashed-line"></span>
        <span class="icon iconfont" :class="data.topoTypeName ? 'iconicon_topology':''"></span>
        <span>{{ data.topoTypeName }}</span>
        <span style="font-size:14px">{{ data.topoName }}</span>
      </span>
    </el-tree>
    <el-dialog title="新建应用拓扑图" :visible.sync="dialogFormVisible" width="37%">
      <el-form :model="form">
        <el-form-item label="拓扑图名称：" label-width="120px" placeholder="请输入拓扑图名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
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
        children: 'topoList',
        label: 'topoTypeName'
      },
      dialogFormVisible: false,
      form: {
        name: '',
        data: ''
      }
    }
  },
  created () {
    console.log(this.menu);
  },
  methods: {
    handleNodeClick (data) {
      this.$emit('click', data);
    },
    handleContextmenuClick (event, data) {
      // console.log(data);
      var result = this.menu.some(item => {
        if (item === data) {
          return true;
        }
      })
      if (result) {
        this.form.data = data;
        this.dialogFormVisible = true;
      } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('deleteTopo', data.id);
        })
      }
    },
    submit () {
      this.$emit('formData', this.form);
      this.dialogFormVisible = false;
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
    background-color: transparent;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 16px;
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
          content: '';
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
          background-image: url('../../assets/icon/add.png');
          width: 10px;
          height: 10px;
          padding: 0;
          &.expanded {
            background-image: url('../../assets/icon/reduce.png');
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
