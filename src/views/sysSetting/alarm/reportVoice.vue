<template>
  <div class="body-content">
    <HeadMenu title="告警声音列表" />
    <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
export default {
  components: { HeadMenu, DynamicTable },
  data () {
    return {
      getters: 'sysSetting/alarm/reportVoice/list',
      fieldArr: [
        {
          label: '告警级别',
          key: 'level',
          formatter: ''
        }, {
          label: '声音文件',
          key: 'voiceFile',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: '',
          filters: [{ text: '运行中', value: '运行中' }, { text: '已停止', value: '已停止' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '停止',
            type: 'url',
            path: '/detail',
            query: ['id', 'name']
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('sysSetting/alarm/reportVoice/getList')
  },
  methods: {
    edit (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
</style>
