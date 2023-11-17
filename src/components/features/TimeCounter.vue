<script setup lang="ts">

const props = defineProps<{
  expiresWhen: string | Date
}>()


const timeNow = ref(new Date)
onMounted(() => {
  setInterval(() => timeNow.value = new Date(), 1000)
})

const timeUnitsToTimeCount = computed(() => {
  const endDate = new Date(props.expiresWhen)
  if (endDate.toString() === 'Invalid Date') {
    throw new Error(`TimeCounter.vue: Invalid Date provided: ${props.expiresWhen}` )
  }

  return getSemanticTimeDifference(timeNow.value, endDate)
})

function displayTimeUnitCount(n: number) {
  if (n < 10) return '0' + n
  return n + ''
}
timeUnitsToTimeCount.value


</script>

<template>
  <div class="time-counter">
    <div class="title text_s">Limited time offer</div>
    <div class="counter">
      <div class="counter-group"
        v-for="timeUnitCount, timeUnitName in timeUnitsToTimeCount" :key="timeUnitName"
      >
        <div class="time-unit-count h3">{{ displayTimeUnitCount(timeUnitCount) }}</div>
        <div class="time-unit-name">{{ timeUnitName }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.time-counter {
  color: $color-gray-900;
}
.title {
  text-transform: uppercase;
  color: $color-gray-900;
  font-weight: 700;

  margin-bottom: 1rem;
}
.counter {
  display: flex;
  gap: 2.4rem;
}
.counter-group {

}
.time-unit-count {
  margin-bottom: .5rem;
}
.time-unit-name {
}


</style>