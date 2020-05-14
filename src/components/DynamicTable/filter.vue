<template>
  <div ref="filters" class="filters">
    <span v-if="!item.filters">{{ item.label }}</span>
    <el-popover
      v-else
      v-model="showPopup"
      placement="bottom"
      trigger="click"
      :width="width"
      popper-class="filter-popup"
    >
      <div class="layPopup" @click="closePopup" />
      <ul class="filters_list">
        <li v-for="(i,key) in item.filters" :key="key">{{ i.text }}</li>
      </ul>
      <div slot="reference">
        <span>{{ item.label }}</span>
        <span class="arrow_triangle-down" />
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      showPopup: false,
      width: 0
    }
  },
  mounted () {
    if (this.item.filters) {
      this.$nextTick(function () {
        this.width = this.$refs.filters.clientWidth
      })
    }
  },
  methods: {
    closePopup () {
      console.log(this.showPopup)
      this.showPopup = false
    }
  }
}
</script>
<style lang="scss" scope>
.filters {
  width: 100%;
  height: 50px;
  position: relative;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px 0px 5px 0px rgba(44, 43, 64, 0.55);
  .el-popover__reference {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
}
.filter-popup {
  border-radius: 0;
  box-shadow: 0px 0px 5px 0px rgba(44, 43, 64, 0.55);
  background: transparent;
  margin-top: -50px !important;
  padding: 0 !important;
  .layPopup {
    height: 50px;
    background: transparent;
  }
  .filters_list {
    background: rgba(255, 255, 255, 1);
    padding: 0 3px;
    li {
      padding: 5px 0;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: #e8ebf3;
      }
    }
  }
}
</style>
