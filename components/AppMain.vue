<template>
<!-- Container -->
  <main class="bg-white w-full mt-32 lg:mt-0 font-montserrat">

      <!-- Content Section -->
      <section class="flex flex-col items-center my-24 md:flex-row md:justify-center">

        <!-- Main Text -->
        <div class="p-12 h-96 text-center md:text-left max-w-sm md:max-w-md mx-auto md:mx-0">
          <img src="../assets/blob.png" class="absolute -left-60" alt="">
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-theme-primary mb-9">Your Financial<br />Assitance</h1>
            <h4 class="text-theme-secondary mb-9">We know how large objects will act, but things on a small scale.</h4>
            <div class="flex flex-col items-center mb-8 md:flex-row">
                <!-- Get Quote Now Btn -->
                <AppCircularButton text="Get Quote Now" class="mb-3 md:mb-0 md:mx-1"/>

                <!-- Learn More Btn -->
                <button class="bg-white border border-[#23A6F0] text-[#23A6F0] flex justify-center rounded-[37px] text-xs font-medium font-montserrat py-2 px-6 whitespace-nowrap md:mx-1">Learn More</button>
            </div>
        </div>

        <!-- Background Image -->
        <div class="h-96 w-full flex justify-center items-center p-3 max-w-xs md:max-w-md">
          <img src="../assets/bg.jpg" alt="">
        </div>

      </section>

  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>