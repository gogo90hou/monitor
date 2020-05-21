<template>
  <G6Editor :mode="'edit'" :height="pageHeight" />
</template>
<script>
import G6Editor from '@/components/topo';
export default {
  components: {
    G6Editor
  },
  computed: {
    pageHeight: () => {
      return document.documentElement.clientHeight - 100;
    }
  }
}
</script>
<style scoped>

</style>
