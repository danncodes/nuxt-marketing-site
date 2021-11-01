<template>
  <section ref="card" :style="'background-image: url(' + project.image + ')'" class="card w-full h-96 bg-black bg-opacity-40 hover:bg-opacity-25 bg-blend-overlay max-w-xs shadow duration-500 hover:shadow-lg flex items-end p-7 hover:scale-105">
      <div class="h-36 w-full text-white">

          <!-- Project Tag -->
          <h6 class="text-sm font-semibold mb-4">{{ project.tag }}</h6>

          <!-- Project Title -->
          <h3 class="font-bold mb-4 text-lg">{{ project.title }}</h3>

          <!--  Btn -->
          <AppCircularButton text="View Project"/>

      </div>
  </section>
</template>

<script>
export default {
    props: ["project"]

}
</script>

<style scoped>
section{
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>