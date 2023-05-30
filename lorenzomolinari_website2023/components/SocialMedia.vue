<template>
    <div>
        <!-- <p class="text-xs mb-5 text-theme-secondary text-center">Let's stay connected:</p> -->
        <div class="flex justify-center text-white">
            <a href="https://twitter.com/LoreMolinari0" target="_blank" rel="noreferrer" aria-label="Twitter"><twitter-icon size="1.5x" class="mr-3"></twitter-icon></a>
            <a href="https://www.linkedin.com/in/lorenzomolinari1/" target="_blank" rel="noreferrer" aria-label="Linkedin"><linkedin-icon size="1.5x" class="mr-3"></linkedin-icon></a>
            <a href="https://github.com/LoreMolinari" target="_blank" rel="noreferrer" aria-label="Github"><github-icon size="1.5x" class="mr-3"></github-icon></a>
            <a href="https://wa.me/3518002677" target="_blank" rel="noreferrer" aria-label="Whatsapp"><phone-icon size="1.5x" class="mr-3"></phone-icon></a>
            <a href="https://www.facebook.com/LoreMolinari0" target="_blank" rel="noreferrer" aria-label="Facebook"><facebook-icon size="1.5x" class="mr-3"></facebook-icon></a>
            <a href="https://www.youtube.com/@LorenzoMolinari0" target="_blank" rel="noreferrer" aria-label="Youtube"><youtube-icon size="1.5x" class="mr-3"></youtube-icon></a>
            <a href="https://unsplash.com/@loremolinari" target="_blank" rel="noreferrer" aria-label="Unsplash"><aperture-icon size="1.5x" class="mr-3"></aperture-icon></a>
            <a href="https://instagram.com/loremolinari1" target="_blank" rel="noreferrer" aria-label="Instagram"><instagram-icon size="1.5x" class="mr-3"></instagram-icon></a>
        </div>
         
    </div>
</template>

<script>
import { TwitterIcon, LinkedinIcon, GithubIcon, YoutubeIcon, PhoneIcon, FacebookIcon, ApertureIcon, InstagramIcon  } from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    YoutubeIcon,
    PhoneIcon,
    FacebookIcon,
    ApertureIcon,
    InstagramIcon
  }
}
</script>