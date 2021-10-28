<template>
<main class="lg:bg-[#F6F6F6] fixed top-0 lg:static w-full shadow font-montserrat">
  <header class="h-14 lg:h-24 mx-auto p-9 flex bg-[#F6F6F6] justify-between items-center max-w-7xl">

    <!-- Logo/Hamburger Menu and Close Icon -->
      <h1 class="text-2xl text-theme-primary font-semibold">BrandName</h1>
      <i class="fas fa-bars cursor-pointer text-2xl text-theme-secondary lg:hidden" @click="mobileNav = !mobileNav" v-if="!mobileNav"></i>
      <i class="fas fa-times cursor-pointer text-2xl text-theme-secondary lg:hidden" @click="mobileNav = !mobileNav" v-if="mobileNav"></i>
    <!-- Desktop Nav -->
      <ul class="h-full hidden lg:flex items-center text-theme-secondary max-w-md gap-8 font-medium">
        <a href="#Home" class="hover:text-[#666565] transition duration-300">
          <li>Home</li>
        </a>
        <a href="#Product" class="hover:text-[#666565] transition duration-300">
          <li>Product</li>
        </a>
        <a href="#Pricing" class="hover:text-[#666565] transition duration-300">
          <li>Pricing</li>
        </a>
        <a href="#Contact" class="hover:text-[#666565] transition duration-300">
          <li>Contact</li>
        </a>
      </ul>

      <ul class="h-full hidden lg:flex items-center gap-8">
        <li class="font-semibold text-[#23A6F0]">Login</li>
        <AppButton text="Become a member" icon="fas fa-arrow-right"/>
      </ul>


  </header>
  <!-- Mobile -->
  <nav class="h-[calc(100vh-3.5rem)] mt-14 fixed left-0 top-0 w-10/12 sm:w-8/12 bg-[#F6F6F6] text-theme-secondary lg:hidden max-w-md font-medium" v-if="mobileNav">
        <ul class="w-10/12 h-3/6 flex flex-col justify-center text-lg ml-8 gap-3">
          <a href="#Home" class="hover:bg-theme-primary hover:text-white transition duration-300 p-2 rounded-[5px]">
            <li class="ml-2">Home</li>
          </a>
          <a href="#Product" class="hover:bg-theme-primary hover:text-white transition duration-300 p-2 rounded-[5px]">
            <li class="ml-2">Product</li>
          </a>
          <a href="#Pricing" class="hover:bg-theme-primary hover:text-white transition duration-300 p-2 rounded-[5px]">
            <li class="ml-2">Pricing</li>
          </a>
          <a href="#Contact" class="hover:bg-theme-primary hover:text-white transition duration-300 p-2 rounded-[5px]">
            <li class="ml-2">Contact</li>
          </a>
        </ul>
  </nav>
</main>
</template>

<script>


export default {
  data(){
    return {
      mobileNav: false
    }
  }
}
</script>

<style>

</style>