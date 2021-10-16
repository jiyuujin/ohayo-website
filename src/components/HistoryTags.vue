<template>
  <div class="issues">
    <h3 id="#tags">
      Tags
    </h3>
    <span
      v-for="(label, index) in Object.keys(counts)"
      :key="index"
    >
      <a
        :href="`https://github.com/jiyuujin/ohayo-developers/labels/${label}`"
        target="_blank"
        rel="noopener noreferrer"
        class="tag"
      >
        {{ `${label} (${counts[label]})` }}
      </a>
    </span>
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

<style scoped>
@media (prefers-color-scheme: dark) {
  .tag {
    color: #fefefe;
    border: 1px solid #dedede;
  }

  .tag a {
    color: #fefefe;
  }
}
</style>
