<template>
  <div class="topo-container">
    <toolbar v-if="mode === 'edit'" @save="save" />
    <div class="bottom-container" :class="mode === 'edit' ? 'edit-statu' : 'view-statu'">
      <div ref="sidebar" class="topo-sidebar">
        <item-panel v-if="mode === 'edit'" @toggle="toggleItempanel" />
      </div>
      <div ref="viewContainer" class="viewContainer">
        <page
          class="viewport"
          :style="{ left: sideBarWidth + 'px'}"
          :height="viewportHeight"
          :width="viewportWidth"
          :data="data"
          :mode="mode"
        >
          <warning-dialog v-if="mode === 'view'"></warning-dialog>
          <setting-dialog v-if="mode === 'edit'"></setting-dialog>
          <!-- <context-menu v-if="mode === 'edit'" /> -->
          <div class="mini-viewport">
            <minimap />
          </div>
        </page>
      </div>
    </div>
    <flow :mode="mode" />
  </div>
</template>
<script>
import Toolbar from '../Toolbar';
import ItemPanel from '../ItemPanel';
import Minimap from '../Minimap';
import Page from '../Page';
import Flow from '../Flow';
import WarningDialog from '../TopoDialog/warning.vue';
import SettingDialog from '../TopoDialog/setting.vue';
// import ContextMenu from '../ContextMenu';
import Editor from '&/components/Base/Editor';
import Command from '&/command';

export default {
  name: 'G6Editor',
  components: {
    Toolbar,
    ItemPanel,
    Minimap,
    Page,
    // ContextMenu,
    Flow,
    WarningDialog,
    SettingDialog
  },
  props: {
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
      editor: {},
      command: null,
      sideBarWidth: 0,
      viewportHeight: 0,
      viewportWidth: 0
    };
  },
  created () {
    this.init();
  },
  mounted () {
    this.viewportHeight = this.$refs['viewContainer'].offsetHeight;
    this.viewportWidth = this.$refs['viewContainer'].offsetWidth - this.sideBarWidth;
  },
  methods: {
    init () {
      this.editor = new Editor();
      this.command = new Command(this.editor);
    },
    toggleItempanel (data) {
      this.sideBarWidth = data || 0;
      this.viewportWidth = this.$refs['viewContainer'].offsetWidth - this.sideBarWidth;
    },
    save (data) {
      this.$emit('save', data);
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
    width: 100%;
    overflow: hidden;
    &.edit-statu {
      top: 72px;
      height: calc(100% - 72px);
    }
    &.view-statu {
      top: 0px;
      height: 100%;
    }
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
