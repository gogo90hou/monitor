<template>
  <div class="head-menu">
    <div class="head-menu-left">
      <span class="head-menu-title">{{ title }}</span>
      <span class="head-menu-smalltitle" @click="listDetails(smalltitle.path)">{{ smalltitle.name || '' }}</span>
    </div>
    <div class="head-menu-right">
      <el-select v-show="options.length > 0" v-model="selectId" placeholder="选择区域" @change="selectHandle">
        <el-option
          v-for="item in options"
          :key="item.selectId"
          :label="item.label"
          :value="item.selectId"
        />
      </el-select>
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
        @click="btnHandle(item.eventName)"
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
      type: Object,
      default () {
        return {}
      }
    },
    options: {
      type: Array,
      default () {
        return []
      }
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
      props: ['title', 'smalltitle', 'search', 'btnarr', 'options'],
      // 列表查询
      listQuery: {
        serachinputName: '请输入要搜索的关键字'
      },
      selectId: ''
    }
  },
  created () {
  },
  methods: {
    listDetails (val) {
      // 直接跳转
      this.$router.push({ path: val })
    },
    // input搜索关键字
    handleSerchKey () {
      this.$emit('getValue', this.listQuery.serachinputName);
    },
    // 点击按钮触发事件
    btnHandle (val) {
      this.$emit('getEvent', val);
    },
    // 级联选择框事件
    selectHandle (val) {
      this.$emit('getSelectId', val);
    }
  }
}
</script>

<style scoped>
.head-menu {
  padding-bottom: 50px;
}
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
  cursor: pointer;
}
</style>
