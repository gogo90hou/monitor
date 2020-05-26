<template>
  <div></div>
</template>

<script>
import customNode from './customNode';
import customEdge from './customEdge';
import teamNode from './teamNode'
export default {
  name: 'Flow',
  props: {
    mode: {
      type: String,
      default: () => {
        return 'view'
      }
    }
  },
  data () {
    return {
      page: null
    };
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      customNode.init(this.mode);
      customEdge.init();
      teamNode.init();
    }
  }
};
</script>
