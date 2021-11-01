<template>
    <main class="w-full flex justify-center items-center font-montserrat">
        <section class="flex flex-col items-center">

            <!-- Project Text -->
            <div class="text-center p-10 md:text-left max-w-sm md:max-w-md mx-auto md:mx-0 duration-1000">
                <h2 class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-theme-primary mb-3">We Are Optimists Who Love To Work Together</h2>
                <p class="text-center text-theme-secondary text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <!-- Project Cards -->
            <div class="w-full p-3 sm:p-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 max-w-7xl justify-items-center">
                <ProjectCard :project="{ tag: 'Tax Management', title: 'Life Tips From Top Ten Adventure Travelers', image: require('../assets/post1.jpg') }"/>
                <ProjectCard :project="{ tag: 'Tax Management', title: 'Life Tips From Top Ten Adventure Travelers', image: require('../assets/post2.jpg') }"/>
                <ProjectCard :project="{ tag: 'Tax Management', title: 'Life Tips From Top Ten Adventure Travelers', image: require('../assets/post3.jpg') }"/>
                <ProjectCard :project="{ tag: 'Tax Management', title: 'Life Tips From Top Ten Adventure Travelers', image: require('../assets/post4.jpg') }"/>
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