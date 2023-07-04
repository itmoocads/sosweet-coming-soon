<template>
  <div class="lang_switcher">
    <NuxtLink v-if="locale === 'zh'"  :to="switchLocalePath('en')">EN</NuxtLink>
    <NuxtLink v-if="locale === 'en'" :to="switchLocalePath('zh')">中</NuxtLink>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>

<style scoped>
.lang_switcher{
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #FDF9EB;
  border-radius: 5px;
  display:flex; 
  flex-direction:column; 
  justify-content: center; 
  align-items: center;
  z-index: 99;
  width: 30px;
  height: 30px;
  border: 1px solid #50815b;
}
</style>