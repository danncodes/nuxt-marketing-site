<template>
  <button class="bg-theme-primary flex justify-center rounded-[37px] text-xs font-medium font-montserrat text-white py-[10px] px-8 whitespace-nowrap shadow" 
  :class="customClasses">{{text}}</button>
</template>

<script>
export default {
    props: ["text", "customClasses"]

}
</script>

<style>

</style>