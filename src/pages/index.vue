<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'

import ArchivesView from '../components/ArchivesView.vue'
import Pagination from '../components/Pagination.vue'
import FooterText from '../components/FooterText.vue'
import NavText from '../components/NavText.vue'
import MaintainerView from '../components/MaintainerView.vue'

const currentPage = ref(1)
const perPage = ref(10)
const tag = ref('')
const { result: github, error, loading } = useQuery(searchQuery(tag.value || ''))

const issues = computed(() => {
  return [...github.value.viewer.repository?.issues?.nodes]
})
const totalPage = computed(() => {
  return Math.ceil(issues.value.length / perPage.value)
})
const displayIssues = computed(() => {
  const startIdx = (currentPage.value - 1) * perPage.value
  const endIdx = startIdx + perPage.value
  return issues.value.slice(startIdx, endIdx)
})

const changePage = (value: number) => {
  currentPage.value = value
}
</script>

<template>
  <div :style="{ background: '#fff' }">
    <nav-text />
  </div>
  <section v-if="loading">
    {{ `Loading...` }}
  </section>
  <section v-else-if="error">
    {{ `Error` }}
  </section>
  <section v-else>
    <div class="content">
      <archives-view :data="displayIssues" />
      <pagination
        :current-page="currentPage"
        :total-page="totalPage"
        :per-page="perPage"
        @change-page="changePage"
      />
      <maintainer-view />
    </div>
  </section>
  <footer-text />
</template>
