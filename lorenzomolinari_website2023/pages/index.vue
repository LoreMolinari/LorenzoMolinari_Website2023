<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col items-center justify-center justify-items-center m-auto">
        <img class="inline object-cover w-24 h-24 mr-2 rounded-full bg-white" :src="mainPhoto"/>
        <h1 class="my-5 text-lg font-bold">Hey, I'm Lorenzo 👋</h1>
        <h2 class="my-5 text-4xl md:text-5xl lg:text-6xl lg:px-32 xl:px-56 tracking-tighter leading-tight md:leading-none text-center font-bold">
          I am a <span style="color: darkcyan;">23</span> year old <span class="italic" style="color: darkcyan;">software</span> developer & <span class="italic" style="color: darkcyan;">cybersecurity</span> student
        </h2>
        <div class="flex md:flex-row lg:px-32 flex-col" style="margin-top: 20px;">
          <p class="mb-8 md:mr-3" style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;"><nuxt-link to="projects">Projects</nuxt-link></p>
          <p class="mb-8 md:mr-3" style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;"><nuxt-link to="blog">Blog</nuxt-link></p>
          <p class="mb-8 md:mr-3" style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;"><nuxt-link to="findme">Find me</nuxt-link></p>
        </div>

        <hr class="my-10 w-full border-theme-tertiary border-dashed">

        <div class="text-center mb-10">
          <p class="italic font-semibold text-md mb-8">Want to contact me?</p>
          <a href="mailto:loremolinari1@gmail.com" class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">Mail</a>
          <a href="tel:+393518002677" class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">Call</a>
          
        </div>
    </div>
    
  </div>
</template>

<script>
import mainPhoto from '~/assets/images/LorenzoMolinari_profile.png'

export default {
  name: 'IndexPage',
  data() {
    return {
      mainPhoto: mainPhoto,
    };
  }
}
</script>
