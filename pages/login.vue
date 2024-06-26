<template>
  <el-row justify="center" align="middle">
    <el-col class="login-form" :span="8">
      <el-text size="large">Login</el-text>
      <el-form v-model="form">
        <el-form-item label="Account / Email">
          <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ElText } from "element-plus";

const form = reactive({
  account: "",
  password: "",
});
</script>

<style scoped lang="scss">
.el-row {
  height: 100dvh;

  & .el-col {
    border: var(--el-box-shadow-light);
  }
}
</style>
