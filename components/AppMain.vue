<template>
<!-- Container -->
  <main class="bg-white h-[calc(100vh-3.5rem)] w-full mt-32 lg:mt-0 font-montserrat">

      <!-- Content Section -->
      <section class="flex flex-col my-24">

        <!-- Main Text -->
        <div class="p-12 h-96 w-full flex items-center justify-center text-center flex-col">
            <h1 class="font-bold text-4xl text-theme-primary mb-9">Your Financial<br />Assitance</h1>
            <h4 class="text-theme-secondary mb-9">We know how large objects will act, but things on a small scale.</h4>
            <div class="flex flex-col items-center mb-8">
                <!-- Get Quote Now Btn -->
                <AppCircularButton text="Get Quote Now" class="mb-5"/>
                <AppCircularButton text="Learn More" :alt="true" class="w-10/12"/>
                <!-- Learn More Btn -->
            </div>
        </div>

        <!-- Background Image -->
        <div class="h-96">
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