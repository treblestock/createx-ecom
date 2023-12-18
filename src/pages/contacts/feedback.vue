<script setup lang="ts">
import IconIphone from '~/assets/img/icons/decor/Iphone.svg'
import IconMail from '~/assets/img/icons/decor/Mail.svg'
import IconChat from '~/assets/img/icons/decor/Chat.svg'
import IconTwitter from '~/assets/img/icons/socials-share/tw.svg'



</script>

<template>
  <div class="page">
    <div class="text-l-b">If you have any questions, concerns or comments, we would love to hear from you! Submit your query using any of the methods below:</div>
    <div class="contacs-list">
      <div class="row">
        <IconIphone class="icon"></IconIphone>
        <a class="link" href="tel:4055550128">(405) 555-0128</a>
      </div>

      <div class="row">
        <IconMail class="icon"></IconMail>
        <a class="link" href="mailto:hello@createx.com">Send us an email</a>
      </div>

      <div class="row">
        <IconChat class="icon"></IconChat>
        <a class="link" href="">Connect on Messenger</a>
      </div>

      <div class="row geo">
        <IconTwitter class="icon"></IconTwitter>
        <a class="link" href="">Tweet us</a>
      </div>
    </div>
    <div class="text-l-b">Or get in touch with us by completing the below form:</div>

    <form class="form">
      <InputGroup class="input-group"
        placeholder="Your full name "
      >Full Name*</InputGroup>
      <InputGroup class="input-group"
        placeholder="Your working email"
      >Email*</InputGroup>
      <InputGroup class="input-group"
        placeholder="Your phone number"
      >Phone</InputGroup>
      <InputGroup class="input-group"
        placeholder="Title your message"
      >Subject</InputGroup>

      <TextareaGroup class="textarea-group"
        placeholder="Write your message here"    
      >Message*</TextareaGroup>


      <Btn class="submit" type="button">Send message</Btn>
    </form>
  </div>
</template>

<style scoped>
@import '~css/consts';

.page {
}
.text-l-b {
  margin-bottom: 3.2rem;

  color: $color-gray-900;
}
.contacs-list {
  
  margin-bottom: 6rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.2rem;
}
.icon {
  color: $color-green;
}
.link {
}
.geo {
}
.form {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 2.4rem;
}
.input-group {
  flex: 1 0 max(calc(50% - 1.5rem), 20rem);
}
.textarea-group {
  flex: 0 0 100%;
  height: 13rem;

  margin-bottom: 2.4rem;
}
.submit {
  flex: 0 0 18.5rem;
}

</style>