<template>
  <section class="bg-white border-[#DEDEDE] border h-60 w-full max-w-xs rounded-md my-4 shadow hover:shadow-lg duration-500 py-7 px-9 flex flex-col justify-around">
      
      <!-- Star Rating -->
      <div class="h-6 w-max">
          <i class="fas fa-star text-[#F3CD03]"></i>
          <i class="fas fa-star text-[#F3CD03]"></i>
          <i class="fas fa-star text-[#F3CD03]"></i>
          <i class="fas fa-star text-[#F3CD03]"></i>
          <i class="fas fa-star text-[#F3CD03]"></i>
      </div>

      <!-- Feedback Text -->
      <div class="h-16 w-56">
          <h6 class="font-semibold text-sm text-theme-secondary">{{ person.feedback}}</h6>
      </div>

      
      <!-- Name and Title -->
      <div class="h-12 flex">

          <!-- User Image -->
          <div class="h-full w-[50px] rounded-full">
              <img loading="lazy" :src="person.image" alt="" class="h-full w-full object-contain">
          </div>

          <!-- UserName and Title -->
          <div class="flex flex-col justify-center ml-4">
          <h6 class="font-semibold text-sm text-[#23A6F0]">{{person.name}}</h6>
          <h6 class="font-semibold text-sm text-theme-primary">{{person.jobTitle}}</h6>

          </div>



      </div>
  </section>
</template>

<script>
export default {
    props: ["person"]

}
</script>

<style>

</style>