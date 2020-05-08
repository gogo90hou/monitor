<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <h1>环亚信通</h1>
      </el-col>
      <el-col :span="20">
        <ul class="header__list">
          <li v-for="(item,key) in showList" :key="key">{{ item.name }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CommonHeader',
  data () {
    return {
      showList: []
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  },
  mounted () {
    this.showList = this.permission_routes.filter((item) => {
      return !item.hidden
    })
    console.log(this.showList)
  }
}
</script>
<style lang="scss">
.header {
  height: 78px;
  line-height: 78px;
  width: 100%;
  text-align: center;
  @include themeify {
    background-color: themed("bgColor");
  }
  @include themeify {
    color: themed("light");
  }
  h1 {
    vertical-align: middle;
    color: $highLight;
  }
  &__list {
    li {
      display: inline-block;
    }
  }
}
</style>
