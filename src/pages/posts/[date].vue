<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { searchQuery } from '../../graphql/issue'
import { currentDateLabelText } from '../../services/utilService'

import IssueView from '../../components/IssueView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateLabel = computed(() => currentDateLabelText(props.date))

const { result, error, loading } = useQuery(searchQuery)
const issues = useResult(
  result,
  null,
  (data) => data.viewer.repository?.issues?.nodes
)
</script>

<template>
  <nav-text />
  <div class="section">
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else-if="error">
      {{ `Error` }}
    </section>
    <section v-else>
      <issue-view :data="issues" :date="postDate" />
    </section>
  </div>
  <footer-text />
</template>
