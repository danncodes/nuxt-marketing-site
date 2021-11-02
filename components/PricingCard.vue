<template>
<section class="relative font-montserrat flex flex-col p-10 items-center w-full max-w-xs bg-white shadow rounded-md border-4 border-[#DEDEDE] h-full hover:shadow-lg duration-500 hover:border-[#23A6F0]">

    <!-- Product Sticker -->
    <div class="h-20 w-20 bg-[#E77C40] rounded-full flex justify-center items-center absolute -top-8 right-4 shadow-xl" v-if="product.new">
        <h1 class="text-white font-bold text-xl">New</h1>
    </div>
    
    <!-- Product Tier and Description -->
    <div class="w-10/12 px-4">
        <h3 class="text-theme-primary font-bold text-lg mb-3 text-center">{{ product.tier }}</h3>
         <h5 class="text-theme-secondary font-semibold mb-9 text-center text-sm">Organize across all apps by hand</h5>
    </div>

    <!-- Product Price -->
    <div class="flex text-[#23A6F0] mb-9">
        <h1 class="text-3xl font-bold mr-3">{{ product.price }}</h1>
        <div class="text-xs flex flex-col">
            <span class="font-semibold">£</span>
            <span class="text-[#8EC2F2] text-[10px]">Per Month</span>
        </div>
    </div>

    <!-- Product Benefits -->
    <ul>
        <li class="flex w-full items-center mb-2" v-for="product in product.includedBenefits" :key="product">
            <i class="fas fa-check-circle mr-3 text-2xl text-[#2DC071]"></i>
            <p class="text-sm text-theme-primary font-semibold">{{ product }}</p>
        </li>

        <li class="flex w-full items-center mb-2"  v-for="product in product.excludedBenefits" :key="product">
            <i class="fas fa-check-circle mr-3 text-2xl text-[#BDBDBD]"></i>
            <p class="text-sm text-theme-primary font-semibold">{{ product }}</p>
        </li>
    </ul>

    <!-- Button -->
    <AppButton text="Try for free" class="w-full my-9"/>

</section>
  
</template>

<script>
export default {
    props: ["product"]

}
</script>

<style>

</style>