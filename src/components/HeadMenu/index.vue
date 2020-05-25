<template>
  <div class="head-menu">
    <div class="head-menu-left">
      <span class="head-menu-title">{{ title }}</span>
      <span v-show="Object.keys(smalltitle).length > 0" class="head-menu-smalltitle" @click="listDetails(smalltitle.path)">( <span>{{ smalltitle.name || '' }}</span> )</span>
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
        v-model="serachinputName"
        style="width: 200px;"
        class="filter-item"
        placeholder="请输入关键字"
        @keyup.enter.native="handleSerchKey"
      >
        <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSerchKey" />
      </el-input>
      <!-- 为每一个按钮绑定一个事件类型 类型共分为:addHandle importHandle deleteHandle manageHandle -->
      <el-button
        v-for="item in btnarr"
        v-show="btnarr"
        :key="item.id"
        class="btnStyle"
        :type="item.type"
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
      serachinputName: '',
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
      this.$emit('getValue', this.serachinputName);
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

<style lang="scss" scoped>
.head-menu {
  padding-bottom: 50px;
}
.head-menu-left {
  float: left;
  .head-menu-title:before {
    content: '';
    display: inline-block;
    height: 16px;
    width: 5px;
    background-color: #5466e0;
    margin-right: 10px;
  }
  .head-menu-title {
    font-size: 20px;
    color: #38393a;
  }
  .head-menu-smalltitle {
    font-size: 14px;
    color: #5466e0;
    cursor: pointer;
    span {
      text-decoration: underline;
      text-decoration-color: #5466e0;
    }
  }
}
.head-menu-right {
  float: right;
  .el-input {
    width: 360px !important;
    height: 36px !important;
    padding: 0;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: normal;
    vertical-align: none;
    text-align: left;
    text-transform: none;
  }
  .btnStyle {
    margin-left: 10px;
    background-color: #5466e0;
    border-radius: 5px;
    opacity: 0.79;
    font-size: 14px;
    color: #fff;
  }
  .el-select {
    height: 36px;
    >>> .el-input {
      height: 36px;
      .el-input__inner {
        border-color: transparent !important;
      }
    }
  }
  .el-select:hover >>> .el-input__inner {
    border-color: transparent !important;
  }
}
</style>
