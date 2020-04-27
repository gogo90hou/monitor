<template>
  <div class="app-container">
    <div class="app-options">
      <el-button v-permission="{type: 'create', permission: $route.meta.permission}" size="mini" type="primary" @click="addArticles()">{{ $t('table.add') }}</el-button>
      <el-button v-permission="{type: 'delete', permission: $route.meta.permission}" size="mini" type="danger" @click="deleteArticles()">{{ $t('table.deleteMulti') }}</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" :label="$t('table.id')" width="95">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column :label="$t('table.title')">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column :label="$t('table.author')" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('table.status')"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" :label="$t('table.date')" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" :label="$t('table.actions')" width="200">
        <template slot-scope="scope">
          <el-button v-permission="{type: 'update', permission: $route.meta.permission}" size="mini" type="info" @click="edit(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button v-permission="{type: 'delete', permission: $route.meta.permission}" size="mini" type="danger" @click="del(scope.row.id)">{{ $t('table.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-if="total" :total="total" :page="page" :limit="limit" @pagination="getArticles" />
    <el-dialog :visible.sync="dialogVisible">
      <el-form
        :ref="'form'"
        :label-position="'right'"
        label-width="80px"
        :model="form"
        :rules="rules"
      >
        <el-form-item hidden :label="$t('table.id')" prop="id">
          <el-input v-model="form.id" />
        </el-form-item>
        <el-form-item :label="$t('table.author')" prop="author">
          <el-input v-model="form.author" />
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item
          v-if="dialogOpenStatus === 'edit'"
          :label="$t('table.readings')"
          prop="pageviews"
        >
          <el-input v-model="form.pageviews" />
        </el-form-item>
        <el-form-item :label="$t('table.status')" prop="status">
          <el-select
            v-model="form.status"
            class="select-type"
            :placeholder="$t('table.placeholder')"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="$t('table.'+item.label)"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="dialogOpenStatus === 'edit'"
          :label="$t('table.date')"
          prop="display_time"
        >
          <el-input v-model="form.display_time" />
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="unSubmit">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="submitForm('form')">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  addArticles,
  getArticles,
  deleteArticle,
  deleteArticles,
  updateArticles
} from '@/api/table';
import Pagination from '@/components/Pagination';
import { Message } from 'element-ui';
import Permission from '@/directive/permission'

const openStatus = {
  EDIT: 'edit',
  CREATE: 'create'
};

export default {
  directives: {
    Permission
  },
  components: {
    Pagination
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      page: 1,
      limit: 10,
      sleection: [],
      options: {
        published: {
          value: 'published',
          label: 'publish'
        },
        draft: {
          value: 'draft',
          label: 'draft'
        },
        deleted: {
          value: 'deleted',
          label: 'delete'
        }
      },
      form: {
        id: '',
        title: '',
        author: '',
        pageviews: '',
        status: '',
        display_time: ''
      },
      rules: {
        title: [
          {
            type: 'string',
            required: true,
            message: '请录入标题',
            trigger: 'change'
          }
        ],
        author: [
          {
            type: 'string',
            required: true,
            message: '请录入作者',
            trigger: 'change'
          }
        ],
        status: [
          {
            type: 'string',
            required: true,
            message: '请选择状态',
            trigger: 'change'
          }
        ]
      },
      dialogVisible: false, // 默认对话框关闭
      dialogOpenStatus: openStatus.CREATE // 默认以创建的方式打开对话框
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      this.getArticles();
    },
    getArticles(param = { page: 1, limit: 10 }) {
      const query = {
        page: param.page,
        row: param.limit
      };
      getArticles(query).then(response => {
        this.list = response.items || [];
        this.total = response.totalRows || 0;
        this.listLoading = false;
      });
    },
    edit(data) {
      this.openDailog(openStatus.EDIT, data);
    },
    del(id) {
      this.listLoading = true;
      deleteArticle(id)
        .then(response => {
          this.page = 1;
          this.getArticles();
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    openDailog(status, data) {
      this.dialogOpenStatus = status;
      this.dialogVisible = true;
      setTimeout(() => {
        this.resetForm('form');
        if (this.dialogOpenStatus === openStatus.EDIT) {
          const oldData = this.form;
          this.form = { ...oldData, ...data };
        }
      });
    },
    addArticles() {
      this.openDailog(openStatus.CREATE);
    },
    deleteArticles() {
      if (this.sleection.length <= 0) {
        Message.warning('请选择要删除的数据！');
      }
      this.listLoading = true;
      deleteArticles(this.sleection)
        .then(response => {
          this.page = 1;
          this.getArticles();
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    handleSelectionChange(items) {
      if (items && items.length) {
        const arr = [];
        items.forEach(element => {
          arr.push(element.id);
        });
        this.sleection.splice(0, this.sleection.length, ...arr);
      }
    },
    unSubmit() {
      this.dialogVisible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          Message.warning('请确保参数正确！');
          return false;
        }
        this.unSubmit();
        this.listLoading = true;
        if (this.dialogOpenStatus === openStatus.CREATE) {
          addArticles([this.form]).then(() => {
            Message.success('创建成功');
            this.getArticles();
          }).finally(() => {
            this.listLoading = false;
          });
        } else {
          updateArticles([this.form]).then(() => {
            Message.success('修改成功');
            this.getArticles();
          }).finally(() => {
            this.listLoading = false;
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scope>
.app-options {
  padding-bottom: 20px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}

.select-type {
  display: block;
}
</style>
