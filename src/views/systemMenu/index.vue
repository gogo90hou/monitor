<template>
  <div>
    <!-- <h1>菜单权限管理</h1> -->
    <el-row type="flex" justify="center" class="permission" :gutter="40">
      <el-col :span="12" class="tree">
        <el-tree
          ref="tree"
          :data="menus"
          :props="props"
          node-key="id"
          :expand-on-click-node="false"
          :highlight-current="true"
          :load="loadNode"
          lazy
          @node-click="choose"
        >
          <span slot-scope="{ node, data }" class="custom-tree-node">
            <span>{{ data.name }}</span>
            <!-- <span>
              <el-button type="text" size="mini" @click.stop="() => append(data)">添加</el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
            </span>-->
          </span>
        </el-tree>
      </el-col>
      <el-col :span="12" class="form">
        <div class="buttons">
          <el-button type="primary" @click="append">新增</el-button>
          <el-button @click="remove">删除</el-button>
        </div>
        <el-form ref="ruleForm" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="菜单名称" prop="menuName">
            <el-input v-model="form.menuName" />
          </el-form-item>
          <el-form-item v-if="form.parent" label="父级菜单">
            <el-input v-model="form.parent.menuName" />
          </el-form-item>
          <el-form-item label="菜单类型">
            <el-select v-model="form.menuType">
              <el-option value="directory">directory</el-option>
              <el-option value="url">url</el-option>
              <el-option value="perm">perm</el-option>
              <el-option value="icon">icon</el-option>
              <el-option value="class">class</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单路径">
            <el-input v-model="form.menuValue" />
          </el-form-item>
          <el-form-item label="图标">
            <el-input v-model="form.icon" />
          </el-form-item>
          <el-form-item label="序号">
            <el-input-number v-model="form.pxNum" :min="1" />
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.memo" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  list,
  getDetail,
  systemMenu
} from '@/api/menu';
export default {
  data () {
    return {
      menus: [],
      props: {
        isLeaf: (data, node) => {
          return !data.isParent
        }
      },
      rules: {
        menuName: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ]
      },
      form: {
        menuName: '',
        parent: {},
        icon: '',
        pxNum: '',
        menuType: '',
        menuValue: '',
        memo: ''
      }
    }
  },
  mounted () {
    console.log(this.menus)
  },

  methods: {
    append () {
      this.resetForm();
      const data = this.$refs.tree.getCurrentNode();
      this.form.parent = {
        menuName: data.name,
        menuId: data.id
      }
    },
    resetForm () {
      this.form = {
        name: '',
        menuName: '',
        parent: {},
        icon: '',
        pxNum: '',
        menuType: '',
        memo: ''
      }
    },
    remove () {
      if (this.$refs.tree.currentNode) {
        const parent = this.$refs.tree.currentNode.node.parent;
        const data = this.$refs.tree.currentNode.node.data;
        const children = parent.childNodes;
        const index = children.findIndex(d => d.data.id === data.id);
        children.splice(index, 1);
      }
    },
    choose (data, node) {
      getDetail(data.id).then((res) => {
        if (res) {
          this.form = res
        }
      })
      // if (data.data) {
      //   this.form = data.data
      // } else {
      //   this.form = this.getPerm(data.id)
      // }
    },
    // 组合数据
    makeUpData (data) {
      return {
        id: data.id,
        menuName: data.menuName,
        parentMenuId: data.parent ? data.parent.menuId : '',
        parentMenuName: data.parent ? data.parent.menuName : '',
        menuType: data.menuType,
        menuValue: data.menuValue,
        pxNum: data.pxNum,
        icon: data.icon,
        memo: data.memo,
        _method: data.id ? 'put' : 'add'
      }
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const data = this.makeUpData(this.form)
          systemMenu(data).then((res) => {
            const node = data.id ? this.$refs.tree.currentNode : this.$refs.tree.currentNode.node.parent;
            node.loaded = false;
            node.isLeaf = false;
            node.node.data.name = res.menuName;
            this.$refs.tree.$set(node, 'expanded', false);
          })
        }
      })
    },
    loadNode (node, resolve) {
      const data = {
        id: node.data ? node.data.id : ''
      }
      list(data).then((res) => {
        return resolve(res)
      })
    }
  }
}
</script>
<style lang="scss">
.permission {
  padding: 30px;
  .tree {
    height: 500px;
    overflow: auto;
  }
  .form {
    .buttons {
      margin-bottom: 10px;
    }
  }
}
</style>
