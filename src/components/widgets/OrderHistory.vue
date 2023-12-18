<script setup lang="ts">
import type { TrackHistoryType } from '~/types'
import { dateToHumanCase  } from '~/utils'


const props = defineProps<{
  orderHistory: TrackHistoryType[]
}>()

</script>

<template>
  <table class="tracking-history">
    <thead class="titles text-l-b table-row">
      <th class="record-status">Status</th>
      <th class="record-location">Location</th>
      <th class="record-date">Date</th>
      <th class="record-time">Time</th>
    </thead>

    <tbody>
      <tr class="history-record table-row"
        v-for="record in orderHistory" :key="record.status"
      >
        <td class="record-status">{{ record.status }}</td>
        <td class="record-location">{{ record.location }}</td>
        <td class="record-date">{{ dateToHumanCase(record.time, 'long') }}</td>
        <td class="record-time">2:00 pm</td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped>
@import "~css/consts";
.tracking-history {
  width: 70.5rem;
  padding-left: 4rem;
}
.table-row {
  display: flex;
  gap: 3rem;
}

.record-status, 
.record-location {
  flex: 0 0 18rem;
}
.record-date {
  flex: 0 0 14rem;
}
.record-time {
  flex: 0 0 7.5rem;
}
.titles {
  color: $color-gray-900;
  padding-bottom: 2rem;

  & > * {
    text-align: left;
  }
}
.history-record {
  padding: 2rem 0;
  border-top: 1px solid $color-gray-300;

  color: $color-gray-800;

  /* decor */
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -4rem;

    width: 0.6rem;
    height: 0.6rem;
    background: $color-green;
    border-radius: 50%;
  }
}
</style>