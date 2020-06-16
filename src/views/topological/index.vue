<template>
  <div class="topological-container">
    <div class="topo-menu">
      <div class="search-container">
        <el-input
          v-model="serachinputName"
          class="filter-item"
          placeholder="请输入关键字"
          @keyup.enter.native="handleSerchKey"
        >
          <i
            slot="suffix"
            class="el-input__icon el-icon-search"
            style="cursor : pointer;"
            @click="handleSerchKey"
          />
        </el-input>
      </div>
      <tree-menu :menu="menu" @click="handleNodeClick" />
    </div>
    <div class="right-panel">
      <div class="title-container">
        <span class="title">{{ selectTopo.label || "查询中" }}</span>
        <el-button type="info" class="edit-top" @click="editTopo">修改配置</el-button>
      </div>
      <G6Editor :mode="'view'" :data="topo" @deal="deal" />
    </div>
  </div>
</template>
<script>
import G6Editor from '@/components/topo';
import TreeMenu from '@/components/treeMenu';
import { unPack } from '@/utils/parse';

export default {
  components: {
    G6Editor,
    TreeMenu
  },
  data () {
    return {
      selectTopo: {},
      menu: null,
      serachinputName: '',
      topo: null
    };
  },
  computed: {
    pageHeight: () => {
      return document.documentElement.clientHeight - 100;
    }
  },
  created () {
    this.menu = this.getTopoOrg();
    if (this.$store.getters.topological) {
      const temp = unPack(this.$store.getters.topological);
      this.topo = ((temp.nodes && temp.nodes.length > 1) || (temp.groups && temp.groups.length > 1)) ? temp : null;
    }
  },
  methods: {
    deal (meId) {
      this.$router.push({ path: 'warn', query: { meId } });
    },
    handleSerchKey (val) {

    },
    handleNodeClick (data) {
      this.selectTopo = data;
    },
    editTopo () {
      this.$router.push({ path: 'edit_topo', params: this.selectTopo });
    },
    getTopoOrg (id) {
      return [
        {
          'label': '应用拓扑图',
          'children': [
            {
              'label': '一楼机房服务器拓扑图',
              'children': [
              ]
            },
            {
              'label': '报警设备拓扑图',
              'children': []
            },
            {
              'label': '自发现拓扑图',
              'children': [
                {
                  'label': '自发现拓扑图2',
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'label': '网络拓扑图',
          'children': [
            {
              'label': '自发现拓扑图1',
              'children': [
                {
                  'label': '自发现拓扑图2',
                  'children': [
                    {
                      'label': '自发现拓扑图2',
                      'children': []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ];
    }
  }
}
</script>
<style scoped lang="scss">
.topological-container {
  $title-height: 68px;
  $menu-width: 320px;
  position: absolute;
  height: 100%;
  width: 100%;
  .topo-menu {
    position: absolute;
    width: $menu-width;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: #2c2b40;
    .search-container {
      padding: 22px 10px;
      .filter-item {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(65, 64, 97, 1);
        border-radius: 3px;
      }
    }
  }
  .right-panel {
    position: absolute;
    width: calc(100% - #{$menu-width});
    height: calc(100% - #{$title-height});
    left: $menu-width;
    top: 0;
    bottom: 0;
    right: 0;
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $title-height;
      padding-left: 28px;
      padding-right: 28px;
      box-shadow: 0px -1px 4px #909090;
      span {
        border-left: 5px solid;
        font-size: 20px;
        font-weight: bold;
        color: rgba(161, 153, 214, 1);
        line-height: 56px;
        padding-left: 5px;
      }
    }
  }
}
</style>
