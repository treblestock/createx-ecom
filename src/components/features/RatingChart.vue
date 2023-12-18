<script setup lang="ts">
import IconStar from '~/assets/img/icons/decor/star.svg'


const props = defineProps<{
  '5': number
  '4': number
  '3': number
  '2': number
  '1': number
}>()


const totalMarksCount = computed(() => {
  return props[5] + props[4] + props[3] + props[2] + props[1]
})

const markFrequencies = computed(() => {
  return {
    5: (props[5] / totalMarksCount.value * 100).toFixed(0) + '%',
    4: (props[4] / totalMarksCount.value * 100).toFixed(0) + '%',
    3: (props[3] / totalMarksCount.value * 100).toFixed(0) + '%',
    2: (props[2] / totalMarksCount.value * 100).toFixed(0) + '%',
    1: (props[1] / totalMarksCount.value * 100).toFixed(0) + '%',
  }
})


</script>

<template>
  <div class="ratin-chart">
    <div class="rating-row"
      v-for="n in 5" :key="6 - n"
    >
      <div class="mark">
        {{ 6 - n }}
        <IconStar></IconStar>
      </div>

      <div class="line"
        :class="`line-${6 - n}`"
      ></div>

      <div class="count">{{ props[(6 - n) as 1 | 2 | 3 | 4 | 5] }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";
.ratin-chart {
}
.rating-row {
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & + & {
    margin-top: .5rem;
  }
}
.mark {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  gap: 1rem;

  color: $color-gray-700;
}
.line {
  flex: 1 1 auto;

  height: 4px;
  background: $color-gray-300;
  border-radius: $radius;
}


.line-5 {
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: v-bind(markFrequencies[5]);

    background: $color-green-light;
  }
}
.line-4 {
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: v-bind(markFrequencies[4]);

    background: $color-green-bright;
  }
}
.line-3 {
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: v-bind(markFrequencies[3]);

    background: $color-yellow;
  }
}
.line-2 {
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: v-bind(markFrequencies[2]);

    background: $color-orange;
  }
}
.line-1 {
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: v-bind(markFrequencies[1]);

    background: $color-red;
  }
}

.count {
  flex: 0 0 auto;

  color: $color-gray-700;
}


</style>