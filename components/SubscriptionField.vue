<template>
<form class="h-14 w-full font-montserrat max-w-lg relative flex" @submit.prevent="$emit('formSubmitted', email)">
    <input required placeholder="Your Email" type="email" class="h-full w-[calc(100%-107px)] p-5 outline-none rounded text-sm" @input="updateEmail">
    <AppButton text="Subscribe" class="absolute right-0 top-0 h-full"/>
</form>
</template>

<script>
export default {
    emits: ["formSubmitted"],
    data(){
        return {
            email: ""
        }
    },
    methods: {
        updateEmail(e){
            this.email = e.target.value
        },
    }
}
</script>

<style>

</style>