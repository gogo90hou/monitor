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
      <tree-menu :menu="menu" @click="handleNodeClick" @formData="formDataHandle" @deleteTopo="deleteTopoHandle" />
    </div>
    <div class="right-panel">
      <div class="title-container">
        <span class="title">{{ selectTopo.topoName || selectTopo.topoTypeName || "查询中" }}</span>
        <el-button type="primary" class="edit-top" @click="editTopo">修改配置</el-button>
      </div>
      <G6Editor :mode="'view'" :data="topo" @deal="deal" />
    </div>
  </div>
</template>
<script>
import G6Editor from '@/components/topo';
import TreeMenu from '@/components/treeMenu';
import { unPack } from '@/utils/parse';
import { getTopo, deleteTopoMock, createTopoMock } from '@/api/topo';
// import { getTopoList, getImageTypeList, getTopoDetail, createTopo, deleteTopo } from '@/api/topo';

export default {
  components: {
    G6Editor,
    TreeMenu
  },
  data () {
    return {
      selectTopo: {},
      menu: [],
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
    this.getList();
    // getImageTypeList().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
    // getTypeList().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
    // getTopoDetail().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
    // this.menu = this.getTopoOrg();
    // console.log(this.$store.getters.topological);
    if (this.$store.getters.topological) {
      const temp = unPack(this.$store.getters.topological);
      // console.log(temp);
      this.topo = ((temp.nodes && temp.nodes.length > 1) || (temp.groups && temp.groups.length > 1)) ? temp : null;
    }
  },
  methods: {
    deal (meId) {
      this.$router.push({ path: 'warn', query: { meId } });
    },
    getList () {
      // getTopoList().then(res => {
      //   console.log(res);
      //   this.menu = res;
      // }).catch(err => {
      //   console.log(err);
      // })
      getTopo().then(res => {
        // console.log(res.items);
        this.menu = res.items;
      }).catch(err => {
        console.log(err);
      })
    },
    handleSerchKey (val) {

    },
    handleNodeClick (data) {
      this.selectTopo = data;
    },
    // 添加topo图
    formDataHandle (val) {
      const data = {
        areaId: '123',
        areaName: '锦江监狱',
        groups: [
          {
            groupId: '分组id',
            parentId: '父分组id',
            title: '分组名称'
          }
        ],
        nodes: [],
        parentAreaId: '111',
        topoDesc: '拓扑图描述',
        topoName: '拓扑图123',
        topoTypeId: 1000
      }
      data.topoTypeId = val.data.topoTypeId;
      data.nodes = this.topo.nodes;
      data.topoName = val.name;
      // createTopo(data).then(res => {
      //   this.$message({
      //     message: '添加成功',
      //     type: 'success'
      //   });
      //   this.getList();
      // }).catch(err => {
      //   console.log(err);
      // });
      // console.log(data);
      createTopoMock(data).then(res => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.getList();
      }).catch(err => {
        console.log(err);
      });
    },
    deleteTopoHandle (id) {
      // console.log(id);
      // deleteTopo(id).then(res => {
      //   console.log(res);
      //   this.$message({
      //     type: 'success',
      //     message: '删除成功!'
      //   });
      //   this.getList();
      // }).catch(() => {
      //   this.$message({
      //     type: 'error',
      //     message: '删除失败!'
      //   });
      // })
      // Mock实现删除tab栏
      deleteTopoMock(id).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getList();
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '删除失败!'
        });
      })
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
                  'label': '自发现拓扑图123',
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
                  'label': '自发现拓扑图456',
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
  $menu-width: 280px;
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
        font-size: 20px;
        font-weight: bold;
        color: #7785e6;
        line-height: 56px;
      }
      span:before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 16px;
        background-color: #5365df;
        margin-right: 5px;
      }
    }
  }
}
</style>
