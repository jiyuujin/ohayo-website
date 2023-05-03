<script setup lang="ts">
// FIXME: use vue-ui paths
// import { GitHubRibbon } from '@ohayo/vue-ui'
import { GitHubRibbon } from '../../../../packages/vue-ui/src/index'
</script>

<template>
  <router-view />
  <git-hub-ribbon />
</template>
