<template>
  <G6Editor :mode="'edit'" :data="topo" @save="save" />
</template>
<script>
import G6Editor from '@/components/topo';
import { Message } from 'element-ui';
import { pack, unPack } from '@/utils/parse.js';

export default {
  name: 'EditTopo',
  components: {
    G6Editor
  },
  data () {
    return {
      topo: null
    }
  },
  created () {
    if (this.$store.getters.topological) {
      const temp = unPack(this.$store.getters.topological, 'edit');
      this.topo = ((temp.nodes && temp.nodes.length > 1) || (temp.groups && temp.groups.length > 1)) ? temp : null;
    }
  },
  methods: {
    save (data) {
      this.$store.dispatch('topo/setTopo', pack(data));
      Message.success('保存成功');
      this.$router.push({ path: 'preview_topo' });
    }
  }
}
</script>
<style scoped lang="scss">
</style>
