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
      <G6Editor :mode="'view'" :data="topo" />
    </div>
  </div>
</template>
<script>
import G6Editor from '@/components/topo';
import TreeMenu from '@/components/treeMenu'
export default {
  components: {
    G6Editor,
    TreeMenu
  },
  data () {
    return {
      selectTopo: {},
      menu: null,
      topo: null,
      serachinputName: ''
    };
  },
  computed: {
    pageHeight: () => {
      return document.documentElement.clientHeight - 100;
    }
  },
  created () {
    this.menu = this.getTopoOrg();
    this.topo = this.getTopoData();
  },
  methods: {
    handleSerchKey (val) {

    },
    handleNodeClick (data) {
      this.selectTopo = data;
      this.getTopoData(data);
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
    },
    getTopoData (id) {
      return {
        nodes: [
          {
            value: 'service',
            label: '交换机',
            fontIcon: 'iconicon_IT_equipment',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 44,
            offsetY: 42,
            x: 87.69957176587798,
            y: -414.7249874383501,
            type: 'node',
            id: 'node112'
          },
          {
            value: 'service',
            label: '服务器',
            fontIcon: 'iconicon_server',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 60,
            offsetY: 52,
            x: 87.6844998304947,
            y: -271.9946703364061,
            type: 'node',
            id: 'node119'
          },
          {
            value: 'service',
            label: '服务器',
            fontIcon: 'iconicon_server',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 44,
            offsetY: 47,
            x: -117.80773419004584,
            y: -272.444447222721,
            type: 'node',
            id: 'node126'
          },
          {
            value: 'service',
            label: '服务器',
            fontIcon: 'iconicon_server',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 60,
            offsetY: 36,
            x: 297.6980549094869,
            y: -272.0432728674026,
            type: 'node',
            id: 'node133'
          },
          {
            value: 'service',
            label: '交换机',
            fontIcon: 'iconicon_IT_equipment',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 52,
            offsetY: 36,
            x: 87.7013016737175,
            y: -134.43944002324457,
            type: 'node',
            id: 'node140'
          },
          {
            value: 'app',
            label: '应用软件',
            fontIcon: 'iconicon_Application_software',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 57,
            offsetY: 48,
            x: -38.42189222073267,
            y: 28.79926240873226,
            type: 'node',
            id: 'node147'
          },
          {
            value: 'service',
            label: '存储',
            fontIcon: 'iconicon_data_base',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 42,
            offsetY: 26,
            x: 87.71996209243491,
            y: 24.95573588367529,
            type: 'node',
            id: 'node154'
          },
          {
            value: 'service',
            label: '防火墙',
            fontIcon: 'iconicon_firewall',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 15,
            offsetY: 41,
            x: 353.6352880207331,
            y: 28.950374755680798,
            type: 'node',
            id: 'node161'
          },
          {
            value: 'app',
            label: '应用软件',
            fontIcon: 'iconicon_Application_software',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 58,
            offsetY: 45,
            x: -11.752271503479676,
            y: 146.06561262595096,
            type: 'node',
            id: 'node168'
          },
          {
            value: 'app',
            label: '应用软件',
            fontIcon: 'iconicon_Application_software',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 70,
            offsetY: 57,
            x: 166.5975612412111,
            y: 146.83658331513897,
            type: 'node',
            id: 'node175'
          },
          {
            value: 'app',
            label: '应用软件',
            fontIcon: 'iconicon_Application_software',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 46,
            offsetY: 40,
            x: 330.1982327006094,
            y: 139.2683866198305,
            type: 'node',
            id: 'node223'
          },
          {
            value: 'app',
            label: '应用软件',
            fontIcon: 'iconicon_Application_software',
            text: '',
            shape: 'monitorNode',
            size: [36, 36],
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 48,
            offsetY: 61,
            x: 504.7310033137462,
            y: 140.1454357183888,
            type: 'node',
            id: 'node230'
          }
        ],
        edges: [
          {
            id: 'edge279',
            source: 'node112',
            target: 'node119',
            sourceId: 'node112',
            targetId: 'node119',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 87.6976182159227, y: -396.2249874383501 },
            endPoint: { x: 87.68645338044998, y: -290.4946703364061 }
          },
          {
            id: 'edge314',
            source: 'node112',
            target: 'node126',
            sourceId: 'node112',
            targetId: 'node126',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 69.19957176587798, y: -401.9167323656391 },
            endPoint: { x: -99.30773419004584, y: -285.252702295432 }
          },
          {
            id: 'edge371',
            source: 'node112',
            target: 'node133',
            sourceId: 'node112',
            targetId: 'node133',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 106.19957176587798, y: -402.1553170290767 },
            endPoint: { x: 279.1980549094869, y: -284.61294327667605 }
          },
          {
            id: 'edge394',
            source: 'node119',
            target: 'node140',
            sourceId: 'node119',
            targetId: 'node140',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            color: '#ff0000',
            label: '断网',
            startPoint: { x: 87.68675953446171, y: -253.4946703364061 },
            endPoint: { x: 87.69904196975048, y: -152.93944002324457 }
          },
          {
            id: 'edge452',
            source: 'node140',
            target: 'node154',
            sourceId: 'node140',
            targetId: 'node154',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 87.7034674716741, y: -115.93944002324457 },
            endPoint: { x: 87.7177962944783, y: 6.455735883675288 }
          },
          {
            id: 'edge494',
            source: 'node140',
            target: 'node147',
            sourceId: 'node140',
            targetId: 'node147',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 73.40763814732658, y: -115.93944002324457 },
            endPoint: { x: -24.128228694341757, y: 10.299262408732261 }
          },
          {
            id: 'edge555',
            source: 'node140',
            target: 'node161',
            sourceId: 'node140',
            targetId: 'node161',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 106.2013016737175, y: -123.07304186206407 },
            endPoint: { x: 335.1352880207331, y: 17.583976594500296 }
          },
          {
            id: 'edge603',
            source: 'node154',
            target: 'node168',
            sourceId: 'node154',
            targetId: 'node168',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 72.52519539772115, y: 43.45573588367529 },
            endPoint: { x: 3.4424951912340944, y: 127.56561262595096 }
          },
          {
            id: 'edge634',
            source: 'node154',
            target: 'node175',
            sourceId: 'node154',
            targetId: 'node175',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 99.69260270828656, y: 43.45573588367529 },
            endPoint: { x: 154.62492062535947, y: 128.33658331513897 }
          },
          {
            id: 'edge669',
            source: 'node161',
            target: 'node223',
            sourceId: 'node161',
            targetId: 'node223',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 349.7049640772938, y: 47.4503747556808 },
            endPoint: { x: 334.12855664404873, y: 120.7683866198305 }
          },
          {
            id: 'edge734',
            source: 'node161',
            target: 'node230',
            sourceId: 'node161',
            targetId: 'node230',
            start: { x: 0, y: 18 },
            end: { x: 0, y: -18 },
            shape: 'monitorEdge',
            type: 'edge',
            startPoint: { x: 372.1352880207331, y: 42.564980727933815 },
            endPoint: { x: 486.2310033137462, y: 126.53082974613578 }
          }
        ],
        groups: []
      }
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
      button {
        position: absolute;
        right: 28px;
      }
    }
  }
}
</style>
