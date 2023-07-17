<template>
  <div class="flex flex-col h-full">
    <div id="easterEgg" hidden>
      <div class="egg-animation">
        <p class="egg-text">Happy Easter!</p>
      </div>
    </div>
    <!--<AnimatedBackground class="flex-grow" />-->
    <div class="flex flex-col items-center justify-center justify-items-center m-auto">
      <img class="inline object-cover w-24 h-24 mr-2 rounded-full bg-white" @click="showEasterEgg" :src="mainPhoto" alt="Lorenzo Molinari profile pic"/>
      <h1 class="my-5 text-lg font-bold">Hey, I'm Lorenzo 👋</h1>
      <h2
        class="my-5 text-4xl md:text-5xl lg:text-6xl lg:px-32 xl:px-56 tracking-tighter leading-tight md:leading-none text-center font-bold">
        I am a <span style="color: darkcyan;">23</span> year old <span class="italic"
          style="color: darkcyan;">software</span> developer, <span class="italic"
          style="color: darkcyan;">Cybersecurity</span> Graduate & <span class="italic"
          style="color: darkcyan;">Computer Science</span> student
      </h2>
      <div class="flex md:flex-row lg:px-32 flex-col sm:flex-row buttonContainer" style="margin-top: 20px; align-content: center;">
        <div class="flex">
          <p class="mb-8 md:mr-3 indexButtons bs"
          style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;">
          <nuxt-link to="projects"><archive-icon size="1.5x" class="indexIcons"></archive-icon>Projects</nuxt-link>
        </p>
        <p class="mb-8 md:mr-3 indexButtons"
          style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;"><a
            href="https://loremolinari.hashnode.dev/" target="_blank"><hash-icon size="1.5x" class="indexIcons"></hash-icon>Blog</a></p>
        </div>
        <div class="flex">
          <p class="mb-8 md:mr-3 indexButtons bs"
          style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;">
          <nuxt-link to="find"><map-pin-icon size="1.5x" class="indexIcons"></map-pin-icon>Find me</nuxt-link>
        </p>
        <p class="mb-8 md:mr-3 indexButtons"
          style="border-color: white; border: 2px solid; border-radius: 15px; padding: 5px; font-size: large;">
          <nuxt-link to="cv"><user-icon size="1.5x" class="indexIcons"></user-icon>My CV</nuxt-link>
        </p>
        </div>
      </div>

      <hr class="my-10 w-full border-theme-tertiary border-dashed">

      <div class="text-center mb-10">
        <p class="italic font-semibold text-md mb-8">Want to contact me?</p>
        <a href="mailto:loremolinari1@gmail.com"
          class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">Mail</a>
        <a href="tel:+393518002677"
          class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">Call</a>

      </div>
    </div>

  </div>
</template>

<script>
import mainPhoto from '~/assets/images/LorenzoMolinari_profile.png'
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import { ArchiveIcon, MapPinIcon, HashIcon, UserIcon } from 'vue-feather-icons'

export default {
  name: 'IndexPage',
  data() {
    return {
      mainPhoto: mainPhoto,
      eggClickCount: 0,
      showEggText: false,
    };
  },
  methods: {
    showEasterEgg() {
      this.eggClickCount++;
      console.log(this.eggClickCount);

      if (this.eggClickCount === 3) {
        const easterEggElement = document.getElementById('easterEgg');
        if (easterEggElement) {
          easterEggElement.removeAttribute('hidden');

          setTimeout(() => {
            easterEggElement.setAttribute('hidden', 'true');
            this.eggClickCount = 0; // Reseta il conteggio dei clic
          }, 5000); // Nasconde l'easter egg dopo 3 secondi (puoi regolare il tempo in base alle tue esigenze)
        }
      }
    },
  },
  components: {
    AnimatedBackground,
    ArchiveIcon,
    MapPinIcon,
    HashIcon,
    UserIcon,
  },
}
</script>

<style scoped>
.egg-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.egg-text {
  animation-name: eggAppear;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 24px;
  color: darkcyan;
  font-weight: 700;
}

@keyframes eggAppear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>