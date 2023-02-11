<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from '../../graphql/issue'

import ArchivesView from '../../components/ArchivesView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

const props = defineProps<{ tag: string }>()
const tag = computed(() => props.tag)

const { result: github, error, loading } = useQuery(searchQuery(tag.value || ''))
const issues = computed(() => {
  return github.value.repository?.issues?.nodes
})
</script>

<template>
  <nav-text :subheader="`${tag} タグ`" />
  <div class="section">
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else-if="error">
      {{ `Error` }}
    </section>
    <section v-else>
      <archives-view :data="issues" />
    </section>
  </div>
  <footer-text />
</template>
