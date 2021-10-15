<template>
  <main>
    <h1>Spaces in Routine</h1>
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else>
      <calendar :items="issues" />
      <history-tags :items="issues" />
    </section>
  </main>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'

import Calendar from '../components/Calendar.vue'
import HistoryTags from '../components/HistoryTags.vue'

export default {
  components: {
    Calendar,
    HistoryTags
  },
  setup() {
    const { result, error, loading } = useQuery(searchQuery)
    const issues = useResult(
      result,
      null,
      (data) => data.viewer.repository?.issues?.nodes
    )
    return { loading, error, issues }
  }
}
</script>
