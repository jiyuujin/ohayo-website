<template>
  <div class="issues">
    <h3 id="#tags">Tags</h3>
    <div
      v-for="(label, index) in Object.keys(counts)"
      :key="index"
      class="issue"
    >
      <a
        :href="`https://github.com/jiyuujin/dailyradar/labels/${label}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ `${label} (${counts[label]})` }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { getLabels, getCounts, sortCounts } from '../services/utilService'
import { IssuesType } from '../services/utilService'

type HistoryTagsProps = {
  items?: Array<unknown>
}

export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props: HistoryTagsProps) {
    const counts = computed(() => {
      const labels = getLabels(props.items as IssuesType)
      return sortCounts(getCounts(labels))
    })
    return { counts }
  }
}
</script>
