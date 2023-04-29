<template>
  <div class="pagination">
    <button
      v-for="n in totalPage" :key="n" 
      :class="{ active: isCurrentPage(n) }"
      @click="event => changePage(event, n)"
    >
      {{ n }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    },
  },
  setup(props, ctx) {
    const isCurrentPage = (value: number) => {
      return value === props.currentPage
    }
    const changePage = (event: MouseEvent, value: number) => {
      ctx.emit('change-page', value)
    }
    return { isCurrentPage, changePage }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

button {
  background: #3d3d3d;
  color: #fff;
  border: none;
  box-shadow: 2px 2px 4px #0f83fd;
  backdrop-filter: blur(28px);
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  padding: 8px;
  margin: 0;
  transition: width 1s ease-in-out;
  width: 36px;
  height: 36px;
}

.active {
  background: #0f83fd;
}
</style>
