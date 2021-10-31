<template>
  <main class="w-full flex justify-center items-center font-montserrat bg-[#FAFAFA] duration-300">

      <section class="lg:w-10/12 flex flex-col items-center">
      
        <!-- Feedback Text -->
        <div class="text-center p-10 md:text-left max-w-sm md:max-w-md mx-auto md:mx-0 duration-1000">
            <h2 class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-theme-primary mb-3">What Clients Say</h2>
            <p class="text-center text-theme-secondary text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <!-- Feedback Cards -->
        <div class="w-full px-9 mb-14 flex flex-col lg:flex-row lg:gap-7 items-center lg:justify-around max-w-7xl">
            <FeedbackCard :person="{name: 'Regina Miles', jobTitle:'Designer', feedback:'Slate helps you see how many more days you need to work to reach your financial goal.', image: require('../assets/user.png')}"/>
            <FeedbackCard :person="{name: 'Joe King', jobTitle:'Consultant', feedback:'Slate helps you see how many more days you need to work to reach your financial goal.', image: require('../assets/user2.png')}"/>
            <FeedbackCard :person="{name: 'Janet Vue', jobTitle:'Developer', feedback:'Slate helps you see how many more days you need to work to reach your financial goal.', image: require('../assets/user3.png')}"/>
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