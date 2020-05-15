<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <div class="pagination-btn">
      <img v-show="page > 1" src="@/assets/icon/pagebefore.png" @click="firstPage">
      <img v-show="page > 1" src="@/assets/icon/pageone.png" @click="previousPage">
      <el-input v-model="currentPage" @click="handleCurrentChange" />
      <span>共{{ totalPage }}页</span>
      <img v-show="page < totalPage" src="@/assets/icon/pagelast.png" @click="nextPage">
      <img v-show="page < totalPage" src="@/assets/icon/pageafter.png" @click="lastPage">
    </div>
    <div class="pagination-total">{{ 10 * (page -1) + 1 }}-{{ page === totalPage ? 10 * (page -1) + total % 10 : 10 * page }}条，总共{{ total }}条</div>
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
      totalPage: 4
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page ? this.page : 1;
      },
      set (val) {
        this.$emit('update:page', val ? parseInt(val) : 1);
      }
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(val);
      this.$emit('pagination', { page: parseInt(val), limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    firstPage () {
      this.$emit('pagination', { page: 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    previousPage () {
      this.$emit('pagination', { page: this.page - 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    nextPage () {
      // this.page = this.page + 1;
      this.$emit('pagination', { page: this.page + 1, limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    lastPage () {
      // this.page = Math.ceil(this.total / this.limit);
      this.$emit('pagination', { page: Math.ceil(this.total / this.limit), limit: this.limit });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
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
.pagination-btn img {
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
.el-input >>> .el-input__inner {
  width: 100%;
  height: 36px;
  color: #2c2b40 !important;
}
</style>
