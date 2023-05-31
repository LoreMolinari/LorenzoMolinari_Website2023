<template>
    <div class="flex flex-row justify-between mb-10">
        <Slide class="lg:hidden">
            <nuxt-link to="/" class="mr-4">Home</nuxt-link>
            <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
        </Slide>
        <Logo class="hidden lg:block" />
        <div id="web-header" class="flex">
            <div class="hidden lg:flex">
                <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
            </div>
            <a href="mailto:loremolinari1n@gmail.com" class="focus:outline-none lg:hidden"
                @click="darkMode = !darkMode"><mail-icon size="1.5x" class=""></mail-icon></a>
        </div>
    </div>
</template>

<script>
import { MailIcon } from 'vue-feather-icons'
export default {
    data() {
        return {
            darkMode: false
        }
    },
    components: {
        MailIcon,
    }
}
</script>

<style scoped></style>