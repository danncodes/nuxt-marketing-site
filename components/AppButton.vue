<template>
  <button class="bg-theme-primary rounded-[5px] text-sm font-semibold font-montserrat text-white p-4 whitespace-nowrap" :class="customClasses">{{text}}
      <i class="mx-2" :class="icon" v-if="icon"></i>
    </button>
</template>

<script>
export default {
    props: ["text", "customClasses", "icon"]

}
</script>

<style>

</style>