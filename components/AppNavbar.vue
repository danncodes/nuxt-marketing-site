<template>
<main class="nav lg:bg-[#F6F6F6] fixed top-0 lg:static w-full shadow font-montserrat z-50">
  <header class="h-14 lg:h-24 mx-auto p-9 flex bg-[#F6F6F6] justify-between items-center max-w-7xl">

    <!-- Logo/Hamburger Menu and Close Icon -->
      <h1 class="text-2xl text-theme-primary font-semibold">BrandName</h1>
      <i class="fas fa-bars cursor-pointer text-2xl text-theme-secondary lg:hidden" @click="mobileNav = !mobileNav" v-if="!mobileNav"></i>
      <i class="fas fa-times cursor-pointer text-2xl text-theme-secondary lg:hidden" @click="mobileNav = !mobileNav" v-if="mobileNav"></i>
    <!-- Desktop Nav -->
      <ul class="h-full hidden lg:flex items-center text-theme-secondary max-w-md gap-8 font-medium">
        <a href="#Home" class="link hover:text-[#666565] transition duration-300">
          <li>Home</li>
        </a>
        <a href="#Product" class="link hover:text-[#666565] transition duration-300">
          <li>Product</li>
        </a>
        <a href="#Pricing" class="link hover:text-[#666565] transition duration-300">
          <li>Pricing</li>
        </a>
        <a href="#Contact" class="link hover:text-[#666565] transition duration-300">
          <li>Contact</li>
        </a>
      </ul>

      <ul class="h-full hidden lg:flex items-center gap-8">
        <li class="font-semibold text-[#23A6F0]">Login</li>
        <AppButton text="Become a member" icon="fas fa-arrow-right"/>
      </ul>


  </header>
  <!-- Mobile -->
    <TheMobileNav class="duration-500" :class="!mobileNav ? '-translate-x-full' : 'translate-x-0'" />
</main>
</template>

<script>


export default {
  data(){
    return {
      mobileNav: false
    }
  },
  mounted(){
    const tl = gsap.timeline()
    tl.from(".nav", {duration: 1.5, y: '-100%', ease: 'bounce'})
  }
}
</script>

<style scoped>

</style>