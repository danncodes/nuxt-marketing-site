<template>
  <main class="w-full flex justify-center items-center font-montserrat">

      <section class="lg:w-10/12 flex flex-col items-center">
      
        <!-- Feature Text -->
        <div class="text-center p-10 md:text-left max-w-sm md:max-w-md mx-auto md:mx-0 duration-1000">
            <h2 class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-theme-primary mb-3">Better Strategy<br/>With Quality Business</h2>
            <p class="text-center text-theme-secondary text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <!-- Feature Cards -->
        <div class="w-full px-9 mb-14 flex flex-col lg:flex-row lg:gap-7 items-center lg:justify-around max-w-7xl">
            <FeatureCard :text="card.text" v-for="card in featureCards" :key="card.id" class="card"/>
        </div>
      </section>

  </main>
</template>

<script>
export default {
  data(){
    return {
      featureCards: [{id: 1, text: "Investment Trading"}, { id: 2, text: "Support On Raising Funds"}, {id: 3, text: "Financial Analysis"}]
    }
  },
  mounted(){
    const tl = gsap.timeline()
    tl.from(".card", {duration: 1, stagger: 0.5, delay: .5,  ease: 'power1.in', y: '30px', opacity : 0})
  }
}
</script>

<style>

</style>