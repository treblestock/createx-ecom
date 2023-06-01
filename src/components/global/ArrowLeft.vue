<template>
  <div class="arrow">
    <div class="arrow__icon">&#x1F814;</div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.arrow {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: palegreen;
  }

  cursor: pointer;
}
  


.arrow__icon {
  font-size: 2.4rem;
  color: #000;
  user-select: none;
}

</style>