<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'

import ArchivesView from '../components/ArchivesView.vue'
import FooterText from '../components/FooterText.vue'
import NavText from '../components/NavText.vue'
import MaintainerView from '../components/MaintainerView.vue'

const tag = ref('')
const { result, error, loading } = useQuery(searchQuery(tag.value || ''))
const issues = useResult(
  result,
  null,
  (data) => data.viewer.repository?.issues?.nodes
)
</script>

<template>
  <main>
    <nav-text />
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
    <footer-text />
  </main>
</template>
