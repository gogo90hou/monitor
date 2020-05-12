<template>
  <div class="dynamicTable">
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column v-if="showCheckBox" type="selection" width="55" label="全选" />
      <el-table-column
        v-for="(item,index) in fieldArr"
        :key="index"
        :prop="item.key"
        :label="item.label"
        :width="item.width"
        :filters="item.filters"
        :filter-method="item.filters?filterTag:null"
      >
        <template slot-scope="scope">
          <div v-if="item.key=='operation'">
            <el-button
              v-for="(i,k) in item.buttons"
              :key="k"
              type="text"
              @click="handleClick(i,scope.row)"
            >{{ i.label }}</el-button>
          </div>
          <div v-else-if="item.formatter">
            <div v-format="[scope.row[item.key],item.formatter,scope.row,themeGroup]" />
          </div>
          <div v-else>{{ scope.row[item.key] }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
function format (el, bingind, vnode) {
  const key = bingind.value[0];
  const arr = bingind.value[1];
  const data = bingind.value[2];
  const themeGroup = bingind.value[3];
  if (typeof arr === 'string') {
    const reg = /[^\(\)]+(?=\))/g;
    const arrName = arr.match(reg);
    let str = arr;
    arrName.forEach((item) => {
      str = str.replace(`(${item})`, data[item])
    })
    el.innerHTML = `<span>${str}</span>`
  } else {
    const obj = arr.find((item) => { return item.key === key });
    const color = obj.color ? themeGroup[obj.color] : themeGroup.highLight;
    el.innerHTML = `<span style="color:${color}">${obj.label}</span>`
  }
}
export default {
  directives: {
    format: {
      inserted: function (el, bingind, vnode) {
        format(el, bingind, vnode)
      },
      bind: function () {
      },
      update: function (el, bingind, vnode) {
        if (JSON.stringify(bingind.oldValue) !== JSON.stringify(bingind.value)) {
          format(el, bingind, vnode)
        }
      },
      componentUpdated: function (el, bingind, vnode) {
      },
      unbind: function () {
      }
    }
  },
  props: {
    getters: {
      type: String,
      default: ''
    },
    filters: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showCheckBox: {
      type: Boolean,
      default: false
    },
    fieldArr: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapGetters({
      'themeGroup': 'themeGroup'
    }),
    tableData: function () {
      return this.$store.getters[this.getters]
    }
  },
  methods: {
    handleClick (i, data) {
      if (i.type === 'url') {
        const query = {};
        i.query.forEach((item) => {
          query[item] = data[item]
        })
        this.$router.push({ path: i.path, query: query })
      }
      if (i.type === 'button') {
        this.$emit(i.method, data)
      }
    },
    filterTag () {

    },
    handleSelectionChange () {

    }
  }
}
</script>
<style lang="scss">
.dynamicTable {
  .el-table,
  .el-table tr,
  .el-table th {
    @include themeify {
      color: themed("highLight");
    }
    @include themeify {
      background-color: themed("tableColor");
    }
    @include themeify {
      border-color: themed("tbaleBorder");
    }
    &:hover {
      @include themeify {
        background-color: themed("tableColor");
      }
    }
  }
  .el-table thead {
    @include themeify {
      color: themed("highLight");
    }
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    @include themeify {
      background-color: themed("tableColor");
    }
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    @include themeify {
      background-color: themed("tableColor");
    }
  }
  .el-table--border,
  .el-table--group {
    border: none;
  }
  .el-table td,
  .el-table th.is-leaf {
    @include themeify {
      border-color: themed("tbaleBorder");
    }
  }
}
</style>
