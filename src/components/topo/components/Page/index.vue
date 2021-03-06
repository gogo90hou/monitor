<template>
  <div class="page">
    <div :id="pageId" class="graph-container" style="position: relative;"></div>
    <slot></slot>
  </div>
</template>

<script>
import G6 from '@antv/g6/build/g6';
import Grid from '@antv/g6/build/grid';
import { initBehavors } from '&/behavior';
import eventBus from '&/utils/eventBus'

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
        return null;
      }
    },
    mode: {
      type: String,
      default: () => {
        return 'view'
      }
    }
  },
  data () {
    return {
      pageId: 'graph-container',
      graph: null,
      defaultBehavors: [
        'drag-canvas',
        'zoom-canvas',
        // 'hover-node',
        'select-node',
        'hover-edge',
        'keyboard',
        'customer-events',
        'add-menu'
      ],
      grid: null
    };
  },
  created () {
    // 预览模式下显示tooltip
    if (this.mode === 'view') {
      this.defaultBehavors = this.defaultBehavors.concat([{
        type: 'tooltip', // 提示框
        formatText (model) {
          // 提示框文本内容
          const text = 'label: ' + model.label + '<br/> class: ' + model.class;
          return text;
        }
      },
      {
        type: 'edge-tooltip', // 边提示框
        formatText (model) {
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
    } else {
      this.defaultBehavors.push('hover-node');
    }
    initBehavors();
  },
  mounted () {
    this.$nextTick(() => {
      this.init();
      this.bindEvent();
    });
  },
  beforeUpdate () {
    if (!this.graph) {
      return;
    }
    this.graph.destroy();
    this.init();
  },
  methods: {
    init () {
      const height = this.height;
      const width = this.width;

      this.graph = new G6.Graph({
        container: 'graph-container',
        height: height,
        width: width,
        fitView: true, // 设置是否将图适配到画布中
        fitViewPadding: [20, 20, 20, 20], // 画布上四周的留白宽度
        animate: true, // 是否启用图的动画
        modes: {
          // 支持的 behavior
          default: this.defaultBehavors,
          mulitSelect: ['mulit-select'],
          addEdge: ['add-edge'],
          moveNode: ['drag-item']
        },
        layout: {
          type: 'concentric',
          center: [0, 0],
          preventOverlap: true,
          nodeSize: 30
        }
      });
      const { editor, command } = this.$parent;
      editor.emit('afterAddPage', { graph: this.graph, command });

      this.readData();
    },
    readData () {
      const data = this.data;
      if (data) {
        this.graph.read(data);
      }
      this.grid = new Grid();
      this.graph.addPlugin(this.grid);
    },
    bindEvent () {
      this.graph.on('wheelzoom', (deltaX, deltaY) => {
        this.updateGrid();
      });
      this.graph.on('canvas:dragend', (e) => {
        this.updateGrid();
      });
      eventBus.$on('redrawCanvas', () => {
        this.updateGrid();
      });
    },
    updateGrid () {
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
.page {
  position: relative;
}
</style>
