<template>
  <div class="topo-container">
    <toolbar v-if="mode === 'edit'" @save="save" />
    <div class="bottom-container" :class="mode === 'edit' ? 'edit-statu' : 'view-statu'">
      <!-- 左侧图元选择 -->
      <div ref="sidebar" class="topo-sidebar">
        <item-panel v-if="mode === 'edit'" @toggle="toggleItempanel" />
      </div>
      <!-- topo图 -->
      <div ref="viewContainer" class="viewContainer">
        <page
          class="viewport"
          :style="{ left: sideBarWidth + 'px'}"
          :height="viewportHeight"
          :width="viewportWidth"
          :data="data"
          :mode="mode"
        >
          <warning-dialog v-if="mode === 'view'" @handle="deal"></warning-dialog>
          <setting-dialog v-if="mode === 'edit'" @handle="bindDevice"></setting-dialog>
          <!-- <context-menu v-if="mode === 'edit'" /> -->
          <!-- 下侧小topo图 -->
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
      // console.log(data);
      // const topo = {
      //   areaId: '123',
      //   areaName: '锦江监狱',
      //   groups: [
      //     {
      //       groupId: '分组id',
      //       parentId: '父分组id',
      //       title: '分组名称'
      //     }
      //   ],
      //   nodes: [],
      //   parentAreaId: '111',
      //   topoDesc: '拓扑图描述',
      //   topoName: '拓扑图123',
      //   topoTypeId: 1000
      // }
      // topo.nodes = data.nodes;
      // createTopo(topo).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })
      this.$emit('save', data);
    },
    bindDevice ({ item, device }) {
      const model = item._cfg.model;
      model.meId = device.key;
      model.label = device.label;
      this.editor.getGrpah().updateItem(item, model);
    },
    deal (meId) {
      this.$emit('deal', meId);
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
      top: 42px;
      height: calc(100% - 42px);
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
