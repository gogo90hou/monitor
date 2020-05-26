<template>
  <div class="topo-container">
    <context-menu />
    <toolbar />
    <div class="bottom-container">
      <div ref="sidebar" class="topo-sidebar">
        <item-panel v-if="mode === 'edit'" @toggle="toggleItempanel" />
      </div>
      <div ref="viewContainer" class="viewContainer">
        <page class="viewport" :style="{ left: sideBarWidth + 'px'}" :height="viewportHeight" :width="viewportWidth" :data="data" :mode="mode">
          <div class="mini-viewport">
            <minimap />
          </div>
        </page>
      </div>
    </div>
    <flow />
  </div>
</template>
<script>
import Toolbar from '../Toolbar';
import ItemPanel from '../ItemPanel';
import Minimap from '../Minimap';
import Page from '../Page';
import Flow from '../Flow'
import ContextMenu from '../ContextMenu';
import Editor from '&/components/Base/Editor';
import Command from '&/command';
export default {
  name: 'G6Editor',
  components: {
    Toolbar,
    ItemPanel,
    Minimap,
    Page,
    ContextMenu,
    Flow
  },
  props: {
    height: {
      type: Number,
      default: document.documentElement.clientHeight
    },
    width: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    data: {
      type: Object,
      default: () => {}
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
      editor: {},
      command: null,
      sideBarWidth: 0,
      viewportHeight: 0,
      viewportWidth: 0
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.viewportHeight = this.$refs['viewContainer'].offsetHeight;
  },
  methods: {
    init() {
      this.editor = new Editor();
      this.command = new Command(this.editor);
    },
    toggleItempanel(data) {
      this.sideBarWidth = data || 0;
      this.viewportWidth = this.$refs['viewContainer'].offsetWidth - this.sideBarWidth;
    }
  }
};
</script>

<style scoped lang="scss">
.topo-container {
  position: absolute;
  width: 100%;
  height: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .bottom-container {
    position: absolute;
    top: 72px;
    height: calc(100% - 72px);
    width: 100%;
    .topo-sidebar {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
    }
    .viewContainer {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      height: 100%;
      min-width: 597px;
      .viewport {
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        height: 100%;
      }
    }
    .mini-viewport {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}

</style>
