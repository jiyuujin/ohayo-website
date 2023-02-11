<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'

import ArchivesView from '../components/ArchivesView.vue'
import FooterText from '../components/FooterText.vue'
import NavText from '../components/NavText.vue'
import MaintainerView from '../components/MaintainerView.vue'

const tag = ref('')
const { result: github, error, loading } = useQuery(searchQuery(tag.value || ''))

const issues = computed(() => {
  return [...github.value.viewer.repository?.issues?.nodes]
})
</script>

<template>
  <nav-text />
  <div class="content">
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else-if="error">
      {{ `Error` }}
    </section>
    <section v-else>
      <archives-view :data="issues" />
    </section>
    <maintainer-view />
  </div>
  <footer-text />
</template>
