<template>
  <div class="page">
    <div :id="pageId" class="graph-container" style="position: relative;" />
    <slot />
  </div>
</template>

<script>
import G6 from '@antv/g6/build/g6';
import Grid from '@antv/g6/build/grid';
import { initBehavors } from '&/behavior';

export default {
  name: 'Page',
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: () => {
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
        };
      }
    },
    mode: {
      type: String,
      default: () => {
        return 'view'
      }
    }
  },
  data() {
    return {
      pageId: 'graph-container',
      graph: null,
      defaultBehavors: [
        'drag-canvas',
        'zoom-canvas',
        'hover-node',
        'select-node',
        'hover-edge',
        'keyboard',
        'customer-events',
        'add-menu'
      ],
      grid: null
    };
  },
  created() {
    if (this.mode === 'view') {
      this.defaultBehavors = this.defaultBehavors.concat([{
        type: 'tooltip', // 提示框
        formatText(model) {
          // 提示框文本内容
          const text = 'label: ' + model.label + '<br/> class: ' + model.class;
          return text;
        }
      },
      {
        type: 'edge-tooltip', // 边提示框
        formatText(model) {
          // 边提示框文本内容
          const text =
            'source: ' +
            model.source +
            '<br/> target: ' +
            model.target +
            '<br/> weight: ' +
            model.weight;
          return text;
        }
      }]);
    }
    initBehavors();
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.bindEvent();
    });
  },
  methods: {
    init() {
      const height = this.height;
      const width = this.width;

      this.graph = new G6.Graph({
        container: 'graph-container',
        height: height,
        width: width,
        modes: {
          // 支持的 behavior
          default: this.defaultBehavors,
          mulitSelect: ['mulit-select'],
          addEdge: ['add-edge'],
          moveNode: ['drag-item']
        }
      });
      const { editor, command } = this.$parent;
      editor.emit('afterAddPage', { graph: this.graph, command });

      this.readData();
    },
    readData() {
      const data = this.data;
      if (data) {
        this.graph.read(data);
      }
      this.grid = new Grid();
      this.graph.addPlugin(this.grid);
    },
    bindEvent() {
      this.graph.on('wheelzoom', (deltaX, deltaY) => {
        this.updateGrid();
      });
      this.graph.on('canvas:dragend', (e) => {
        this.updateGrid();
      });
    },
    updateGrid() {
      if (this.grid) {
        this.graph.removePlugin(this.grid);
        this.grid = null;
      }
      this.grid = new Grid();
      this.graph.addPlugin(this.grid);
    }
  }
};
</script>

<style scoped>
</style>
