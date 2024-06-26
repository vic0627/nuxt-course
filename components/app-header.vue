<template>
  <el-menu
    class="app-header"
    default-active="1"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0" @click="navigateTo('/')">
      <img class="logo-pic" src="/favicon.ico" alt="logo" />
    </el-menu-item>
    <div class="app-header-nav">
      <el-switch
        v-model="darkModeActive"
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon"
        @click="toggleDarkMode"
      />
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-dropdown trigger="click" size="large">
        <el-avatar
          class="app-header-avatar"
          :size="35"
          :icon="UserFilled"
        ></el-avatar>
        <template #dropdown>
          <el-dropdown-item
            v-if="true"
            :icon="IconsLogin"
            @click="navigateTo('/login')"
          >
            Login
          </el-dropdown-item>
          <template v-else>
            <el-dropdown-item :icon="Tools"> Configuration </el-dropdown-item>
            <el-dropdown-item :icon="IconsLogout"> Logout </el-dropdown-item>
          </template>
        </template>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { Sunny, Moon, UserFilled, Tools } from "@element-plus/icons-vue";
import { IconsLogin, IconsLogout } from "#components";
const toggleDarkMode = useToggleDarkMode();
const darkModeActive = ref(false);
</script>

<style scoped lang="scss">
.app-header {
  @extend %flex-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  z-index: 9999;

  & .app-header-nav {
    @extend %flex-between;
    align-items: center;
  }

  .app-header-avatar {
    cursor: pointer;
  }
}
.logo-pic {
  width: 100%;
}
</style>
