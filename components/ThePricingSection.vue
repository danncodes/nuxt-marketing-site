<template>
<main class="w-full flex justify-center items-center font-montserrat bg-[#FAFAFA]">

      <section class="lg:w-10/12 flex flex-col items-center">
      
        <!-- Feature Text -->
        <div class="text-center p-10 md:text-left max-w-sm md:max-w-md mx-auto md:mx-0 duration-1000">
            <h2 class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-theme-primary mb-3">Pricing</h2>
            <p class="text-center text-theme-secondary text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <!-- Feature Cards -->
        <div class="w-full px-2 xl:px-9 mb-14 flex flex-col lg:flex-row gap-7 items-center lg:justify-around max-w-7xl">
            <PricingCard :product="{ tier: 'FREE', price: '0', includedBenefits: ['Unlimited product updates','Unlimited product updates','Unlimited product updates'], excludedBenefits:['1GB Cloud storage', 'Email and community support'], new: false}"/>
            <PricingCard :product="{ tier: 'SILVER', price: '9.99', includedBenefits: ['Unlimited product updates','Unlimited product updates','Unlimited product updates', '1GB Cloud storage'], excludedBenefits:['Email and community support'], new: true}"/>
            <PricingCard :product="{ tier: 'GOLD', price: '19.99', includedBenefits: ['Unlimited product updates','Unlimited product updates','Unlimited product updates', '1GB Cloud storage', 'Email and community support'], excludedBenefits:[], new: false}"/>
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