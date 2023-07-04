<template>
  <footer class="bg-primary py-10 text-[#fdf9eb]">
    <div class="w-[90vw] mx-auto max-w-7xl">
      <div class="flex justify-between md:flex-col gap-6">
        <div class="footer_item max-w-lg md:max-w-none">
          <img src="/icons/white-logo.svg" alt="" class="mb-4 -ml-2" />
          <p>
            {{ $t("footer_about") }}
          </p>
        </div>
        <div class="footer_item w-full">
          <h4 class="text-xl font-bold pb-4 mb-4 border-b border-[#fdf9eb]">
            {{ $t("hours") }}
          </h4>
          <ul>
            <li>Tue - Sat</li>
            <li class="mb-4">10:00 am - 5:00 pm</li>
            <li>Sun & Mon</li>
            <li>CLOSE</li>
          </ul>
        </div>
        <div class="footer_item w-full">
          <h4 class="text-xl font-bold pb-4 mb-4 border-b border-[#fdf9eb]">
            {{ $t("contact_us") }}
          </h4>
          <a href="tel:+16476137768">{{ $t("tel") }}: +1(647)-613-7768</a><br />
          <a href="mailto:info@sosweetcanada.com" class="inline-block "
            >{{ $t("email") }}: <span class="border-b-2 border-[#fdf9eb]">info@sosweetcanada.com</span></a
          >
          <p>{{ $t("address") }}:</p>
          <p class="mb-4">90 Esna Park Dr, Unit 12, Markham, ON, L3R 2R7</p>
          <div class="footer_social_icons flex gap-3">
            <a href="https://instagram.com/sosweet_canada?igshid=Y2I2MzMwZWM3ZA==" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ins-icon.svg" alt="" />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/5a660e8911be1063076b1c2f?xhsshare=CopyLink&appuid=5ad26e6211be1050e5524661&apptime=1688135549"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/red.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>