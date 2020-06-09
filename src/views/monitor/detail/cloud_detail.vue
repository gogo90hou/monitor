<template>
  <div class="headNav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/cloud' }">云平台</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>{{ queryData.name }}</el-breadcrumb-item> -->
    </el-breadcrumb>
    <el-button @click="$router.back(-1)">返回</el-button>
  </div>
</template>

<style lang="scss" scoped>
</style>
