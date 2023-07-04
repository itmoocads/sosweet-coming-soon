<template>
  <div class="bg-[#F9EDD0] w-100 py-10">
    <div class="w-[90vw] mx-auto">
      <div class="flex flex-col items-center ">
        <h3 class="font-bold text-primary text-lg mb-6">{{$t('join_us')}}</h3>
        <ul class="job_list flex gap-4 mb-10 lg:grid lg:grid-cols-3 sm:grid-cols-1" >
          <li>{{$t('dessert_chef')}}</li>
          <li>{{$t('patissier')}}</li>
          <li>{{$t('baker')}}</li>
          <li>{{$t('kichen_assistant')}}</li>
          <li>{{$t('front_desk')}}</li>
        </ul>
        <p class="text-primary mb-2 text-center">{{$t('if_you_have_suitable')}}</p>
        <a href="mailto:info@sosweetcanada.com" class="flex items-center text-primary"> 
          <img src="/icons/email.svg" alt="" class="mr-2" ><span class="border-b-2 border-primary">info@sosweetcanada.com</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.job_list li{
  color:#50815B;
  padding:12px 32px;
  border-radius: 50px;
  background:#FDF9EB;
  min-width: 180px;
  text-align: center;
  display:flex; 
  justify-content: center;
  align-items: center;
}
</style>