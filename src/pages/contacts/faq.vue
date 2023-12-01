<script setup lang="ts">


</script>

<template>
  <div class="questions">
    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        Do I need to register to place an order?
      </template>
      <template #default>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati nihil modi ab sed quis, consectetur deleniti explicabo accusantium ipsa laboriosam et, numquam consequatur molestiae, nemo natus eos neque. Dicta.
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        What is the estimated delivery time?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet, eligendi ipsam, consequuntur, corporis saepe error dolore totam hic distinctio alias voluptatem illo perferendis? Corporis ab temporibus cum architecto ratione.
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        How can I pay for my order?
      </template>
      <template #default>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam delectus sapiente, tempora harum veniam minima inventore, sed animi odit earum reiciendis iusto! Nesciunt numquam nulla tempore recusandae, molestiae harum.
      </template>
    </Spoiler>
    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        Can I get a refund if the price has changed since I ordered it?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam maiores reprehenderit porro a officiis sapiente quod laborum placeat cupiditate, atque dicta rem aut sit ea. Quia in expedita ducimus asperiores?
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        Do you refund delivery charges if I return something?
      </template>
      <template #default>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis similique ut cupiditate earum quam provident tenetur. Magnam, vel ut! Adipisci praesentium aut, ut enim reiciendis repudiandae. Recusandae harum ipsum non!
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        What documents will be provided with the order?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consequuntur repellendus dolores ullam voluptatibus voluptas nostrum quia, temporibus sequi odit explicabo veniam blanditiis nihil iste nulla repudiandae officia libero incidunt.
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        Can I return the order to the courier if anything does not suit me?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloribus veniam, reprehenderit quidem esse voluptate quis repudiandae, ex rerum dolor quo. A nesciunt iste sed ullam possimus ea totam eius!
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        What should I do if my order hasn't been delivered yet?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe quae doloremque, veniam eligendi itaque blanditiis velit sequi ad fuga pariatur iste error cum debitis necessitatibus numquam in sint et.
      </template>
    </Spoiler>

    <Spoiler class="spoiler"
      classTitle="spoiler-title text_lb"
      classBody="spoiler-body"
    >
      <template #title>
        What is your Returns Policy?
      </template>
      <template #default>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga facere, eligendi voluptatibus mollitia excepturi, commodi cum maxime saepe beatae, voluptates fugit aspernatur quis possimus necessitatibus praesentium. Tenetur, aliquid nesciunt?
      </template>
    </Spoiler>

  </div>  
</template>

<style scoped>
@import '~css/consts';

.questions {
  
}
.spoiler {
  max-width: 100%;
  padding: 0;

  & + & {
    border-top: 1px solid $color-gray-300;
  }
}

:deep(.spoiler-title) {
  padding: 2rem 0;
}
:deep(.spoiler-body) {
  padding: 0;
  padding-bottom: 2rem;

  color: $color-gray-700;
}

</style>