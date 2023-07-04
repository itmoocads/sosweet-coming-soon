<script setup>
if (process.client) {
  // Splitting();
  // const headingTitle = document.querySelector('#heading_title');
  // const results = Splitting({ target: headingTitle, by: 'chars' });
  // console.log(results)
  //   let tl = gsap.timeline();
  //   tl.from(".main_logo",{
  //     y:50,
  //     autoAlpha:0,
  //     duration:1,
  //   })
  //   tl.from('#heading_title',{
  //     autoAlpha:0
  //   })
  //   tl.from(".char",{
  //     autoAlpha:0,
  //     duration:0.1,
  //     stagger:0.05,
  //     ease: "power2.out",
  //   })
  //   tl.from('#direction_btn',{
  //     y:50,
  //     autoAlpha:0,
  //     duration:1,
  //   })
  //   tl.from('#social_icons',{
  //     y:50,
  //     autoAlpha:0,
  //     duration:1
  //   })
  //   if(window.innerWidth < 768){
  //   tl.from('#wechat_mobile',{
  //     y:50,
  //     autoAlpha:0,
  //     duration:1
  //   })
  //   }else{
  //  tl.from('#wechat_desktop',{
  //     y:50,
  //     autoAlpha:0,
  //     duration:1
  //   })
  //   }
}
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
console.log('test')
</script>

<template>
  <LangSwitcher/>
  <div>
    <div class="coming_soon_wrap relative">
      <img
        src="/imgs/pattern1.png"
        class="max-w-[20vw] absolute top-0 left-0 md:max-w-[50vw]"
      />
      <img
        src="/imgs/pattern1.png"
        class="max-w-[20vw] absolute top-0 right-1 rotate-90 md:hidden"
      />
      <img
        src="/imgs/pattern1.png"
        class="max-w-[20vw] absolute bottom-0 left-0 -rotate-90 md:hidden"
      />
      <img
        src="/imgs/pattern1.png"
        class="max-w-[20vw] absolute bottom-0 right-0 rotate-180 md:max-w-[50vw]"
      />
      <div class="w-[90vw] mx-auto">
        <main
          class="relative z-10 flex flex-col justify-center items-center py-20 md:py-10"
        >
          <img
            src="/imgs/logo-green.svg"
            class="main_logo w-full md:w-[150px]"
          />
          <h2 class="text-xl">Every so sweet moment with SOSWEET!</h2>
          <h1
            id="heading_title"
            class="text-7xl text-primary mt-24 mb-24 md:mt-12 md:mb-12 text-center"
          >
           {{ $t("coming_soon") }}
          </h1>
          <button
            id="direction_btn"
            class="bg-primary text-base text-white py-3 px-7 mb-11 rounded-full transition-colors hover:bg-green-800 md:py-3 md:px-8"
          >
            <a
              href="https://www.google.com/maps/place/90+Esna+Park+Dr+UNIT+12,+Markham,+ON+L3R+2R7/@43.8278362,-79.3384274,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d4810385aee3:0xcff78190cb625961!8m2!3d43.8278362!4d-79.3384274!16s%2Fg%2F11n12r1r63?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{$t('get_direction')}}</a
            >
          </button>
          <p class="text-xl font-light text-primary text-center md:text-base">
           {{$t('social_media_slogan')}}
          </p>
          <div id="social_icons" class="grid grid-cols-2 gap-4 mt-6">
            <a
              href="https://instagram.com/sosweet_canada?igshid=Y2I2MzMwZWM3ZA=="
              target="_blank"
              class="relative"
            >
              <img
                src="/icons/ins-icon.svg"
                alt=""
                class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-100 hover:z-0 hover:opacity-0"
              />
              <img
                src="/icons/ins-white.svg"
                alt=""
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 opacity-0 hover:z-10 hover:opacity-100"
              />
            </a>
            <!-- <a href="" target="_blank" class="relative">
              <img
                src="/icons/fb-icon.svg"
                alt=""
                class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-100 hover:z-0 hover:opacity-0"
              />
              <img
                src="/icons/fb-white.svg"
                alt=""
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 opacity-0 hover:z-10 hover:opacity-100"
              />
            </a> -->
            <a
              href="https://www.xiaohongshu.com/user/profile/5a660e8911be1063076b1c2f?xhsshare=CopyLink&appuid=5ad26e6211be1050e5524661&apptime=1688135549"
              target="_blank"
              class="relative"
            >
              <img
                src="/icons/red.svg"
                alt=""
                class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-100 hover:z-0 hover:opacity-0"
              />
              <img
                src="/icons/red-white.svg"
                alt=""
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 opacity-0 hover:z-10 hover:opacity-100"
              />
            </a>
          </div>
          <div
            id="wechat_desktop"
            class="relative py-6 px-20 my-8 rounded-full border border-primary md:w-full md:px-4 md:rounded-[60px]"
          >
            <div
              class="wechat_icon relative flex items-center justify-center mb-6"
            >
              <img src="/icons/wechat.svg" alt="" class="md:w-[30px]" /><span
                class="ml-2 text-primary font-black"
                >{{$t('wechat_customer_service')}}</span
              >
            </div>
            <div
              class="grid grid-cols-3 gap-x-36 gap-y-4 md:grid-cols-1 md:gap-x0"
            >
              <div class="qrcode_item flex flex-col items-center">
                <div class="p-2.5 mb-3 rounded-2xl border border-[#DCF0E1]">
                  <img src="/imgs/gta.jpg" alt="" />
                </div>
                <p>{{$t('gta')}}</p>
              </div>
              <div class="qrcode_item flex flex-col items-center">
                <div class="p-2.5 mb-3 rounded-2xl border border-[#DCF0E1]">
                  <img src="/imgs/mississauga.jpg" alt="" />
                </div>
                <p>{{$t('mississauga')}}</p>
                <p>{{$t('oakville')}}</p>
                <p>{{$t('hamilton')}}</p>
                <p>{{$t('st_catharines')}}</p>
              </div>
              <div class="qrcode_item flex flex-col items-center">
                <div class="p-2.5 mb-3 rounded-2xl border border-[#DCF0E1]">
                  <img src="/imgs/waterloo.jpg" alt="" />
                </div>
                <p>{{$t('waterloo')}}</p>
                <p>{{$t('guelph')}}</p>
                <p>{{$t('london')}}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <JoinUs />
    <Footer />
  </div>
</template>

<style scoped>
h1 {
  font-family: BianTaoTi;
}
h2 {
  font-family: "Indie Flower", cursive;
  color: #dec38c;
}
.char {
  visibility: hidden;
}
.coming_soon_wrap {
  background-color: #fdf9eb;
  min-height: 100svh;
  width: 100%;
}
.main_logo {
  max-width: 230px;
}
.qrcode_item p {
  color: #50815b;
}
.qrcode_item img {
  max-width: 100px;
}
@media screen and (max-width: 767px) {
  .main_logo {
    max-width: 200px;
  }
}
</style>
