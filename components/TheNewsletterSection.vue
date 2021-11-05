<template>
  <section class="font-montserrat h-96 w-full bg-theme-secondary flex justify-center">
    <main class="h-full flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center w-full lg:w-10/12" v-if="!formCompleted">
      <!-- Newsletter Text -->
      <div class="w-8/12 mb-9 md:w-4/12 md:p-2">
          <h1 class="text-white font-bold text-lg sm:text-xl md:text-2xl text-center md:hidden">Subscribe For Latest Newsletter</h1>
          <h1 class="text-white font-bold text-lg sm:text-xl md:text-2xl hidden md:block">Get In Touch</h1>
          <p class="text-white text-xs hidden md:block" >The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th </p>
      </div>
      
      <!-- Input Field -->
      <div class="w-10/12 md:w-6/12 flex justify-center md:p-2">
        <SubscriptionField @formSubmitted="formSubmitted"/>
      </div>
    </main>

    <main class="flex flex-col justify-center items-center" v-if="formCompleted">
        <div class="flex w-full justify-center items-center mb-2">
            <i class="fas fa-check-circle mr-3 text-2xl text-[#2DC071]"></i>
            <h2 class="text-2xl text-white font-semibold">Subscribed</h2>
        </div>
        <p class="text-[10px] text-center text-white">{{ email }}</p>
    </main>

  </section>
</template>

<script>
export default {
    data(){
        return {
            formCompleted: false,
            email: undefined
        }
    },
    methods: {
        formSubmitted(email){
            this.email = email
            this.formCompleted = true
        }
    }

}
</script>

<style>

</style>