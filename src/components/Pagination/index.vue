<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <div class="pagination-btn">
      <i class="iconfont iconicon_dislike_alt"></i>
      <i class="iconfont iconicon_dislike_alt"></i>
      <!-- <img v-show="page > 1" src="@/assets/icon/pagebefore.png" @click="firstPage">
      <img v-show="page > 1" src="@/assets/icon/pageone.png" @click="previousPage"> -->
      <el-input v-model="currentPage" @blur="handleCurrentChange" @input="setOnlyNumber" />
      <span>共{{ totalPage }}页</span>
      <i class="iconfont iconicon_dislike_alt"></i>
      <i class="iconfont iconicon_dislike_alt"></i>
      <!-- <img v-show="page < totalPage" src="@/assets/icon/pagelast.png" @click="nextPage">
      <img v-show="page < totalPage" src="@/assets/icon/pageafter.png" @click="lastPage"> -->
    </div>
    <div class="pagination-total">
      <span>每页显示</span>
      <el-select v-model="selectValue" placeholder="请选择" @change="selectHandle">
        <el-option
          v-for="item in pageSizes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span>条，总共{{ total }}条</span>
    </div>
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to';

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [
          { value: 10, label: '10条/页' },
          { value: 20, label: '20条/页' },
          { value: 30, label: '30条/页' },
          { value: 50, label: '50条/页' }
        ];
      }
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      totalPage: 4,
      currentPage: 1,
      selectValue: 10
    }
  },
  computed: {},
  methods: {
    setOnlyNumber (val) {
      // 正则表达式，限制输入数字
      this.currentPage = val.replace(/[^\d]/g, '');
    },
    handleCurrentChange () {
      if (parseInt(this.currentPage) > this.totalPage) {
        this.currentPage = this.totalPage;
        this.$emit('pagination', { page: this.currentPage, limit: this.limit });
      } else if (parseInt(this.currentPage) >= 1 && parseInt(this.currentPage) <= this.totalPage) {
        this.$emit('pagination', { page: parseInt(this.currentPage), limit: this.limit });
      } else {
        this.currentPage = 1;
        this.$emit('pagination', { page: this.currentPage, limit: this.limit });
      }
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    firstPage () {
      this.currentPage = 1;
      this.$emit('pagination', { page: 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    previousPage () {
      this.currentPage = this.page - 1;
      this.$emit('pagination', { page: this.page - 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    nextPage () {
      this.currentPage = this.page + 1;
      this.$emit('pagination', { page: this.page + 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    lastPage () {
      this.currentPage = this.totalPage;
      this.$emit('pagination', { page: Math.ceil(this.total / this.limit), limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    selectHandle (val) {
      this.limit = val;
      this.$emit('pagination', { page: 1, limit: this.limit });
    }
  }
};
</script>

<style scoped>
.pagination-container {
  position: relative;
  color: #2c2b40;
  background-color: #fff;
  height: 88px;
  padding: 32px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
}
.pagination-container.hidden {
  display: none;
}
.pagination-btn {
  width: 360px;
  height: 66px;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
}
.pagination-btn i {
  display: inline-block;
  width: 16px;
  height: 13px;
  margin-right: 12px;
}
.pagination-btn span {
  margin: 0 12px;
}
.pagination-total {
  position: absolute;
  height: 20px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.el-input {
  width: 101px;
  height: 36px;
  vertical-align: middle;
  border: 1px solid #dedfe3 !important;
}
</style>
