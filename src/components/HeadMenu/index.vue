<template>
  <div class="head-menu">
    <div class="head-menu-left">
      <span class="head-menu-title">{{ title }}</span>
      <span class="head-menu-smalltitle">{{ smalltitle || '' }}</span>
    </div>
    <div class="head-menu-right">
      <el-input
        v-show="search"
        v-model="listQuery.serachinputName"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleSerchKey"
      >
        <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSerchKey" />
      </el-input>
      <el-button
        v-for="item in btnarr"
        v-show="btnarr"
        :key="item.id"
        class="filter-item"
        type="primary"
        style="margin-left: 10px;"
        @click="handleSerchKey"
      >{{ item.value }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadMenu',
  props: {
    title: {
      required: true,
      type: String
    },
    smalltitle: {
      type: String,
      default: ''
    },
    btnarr: {
      type: Array,
      default () {
        return []
      }
    },
    search: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      props: ['title', 'smalltitle', 'search', 'btnarr'],
      // 列表查询
      listQuery: {
        page: 1,
        limit: 20,
        total: 0,
        searchEnvironmentId: '',
        serachinputName: '请输入要搜索的关键字'
      }
    }
  },
  created () {
  },
  methods: {
    handleSerchKey () {
      console.log(123);
    }
  }
}
</script>

<style scoped>
.head-menu-left {
  float: left;
}
.head-menu-right {
  float: right;
}
.head-menu-title {
  font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
  font-weight: 650;
  font-style: normal;
  font-size: 18px;
  color: #bdc8c8;
}
.head-menu-smalltitle {
  font-size: 14px;
  color: rgba(27, 208, 219, 1);
  margin-left: 30px;
}
</style>
