<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col items-center justify-center justify-items-center m-auto">
            <img class="inline object-cover w-24 h-24 mr-2 rounded-full bg-white" @click="showEasterEgg" :src="mainPhoto" />

            <!-- Education Section -->
            <section class="my-10">
                <h3 class="text-2xl font-bold mb-3">Education</h3>
                <ul>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Master Degree in Computer Science</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md"><span class="italic" style="color: darkcyan;">University of Milan-Bicocca,</span> Milan, Italy (Attending)</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Bachelor's Degree in Cybersecurity for Systems and Networks</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md"><span class="italic" style="color: darkcyan;">University of Milan,</span> Milan, Italy (2023)</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">High School Diploma in Information Technology and Computer Science
                            </h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md"><span class="italic" style="color: darkcyan;">I.T.I.S Enea Mattei,</span> Sondrio, Italy (2019)</p>
                        </div>
                    </li>
                    <!-- Add more education entries as needed -->
                </ul>
            </section>

            <!-- Work Experience Section -->
            <section class="my-10">
                <h3 class="text-2xl font-bold mb-3">Work Experience</h3>
                <ul>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Web developer</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md" style="color: darkcyan;">UnitBit</p>
                            <p>Design and build front-end website. (2022-2023)</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Network Manager</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md" style="color: darkcyan;">Bormio FIS Alpine Ski World Cup</p>
                            <p>Creation and management of proper internet network functionality for the event: World Cup of
                                Skiing held in Bormio in 2022.</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Network Manager</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md" style="color: darkcyan;">Bormio FIS Alpine Ski World Cup</p>
                            <p>Creation and management of proper internet network functionality for the event: World Cup of
                                Skiing held in Bormio in 2021.</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Web developer</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md" style="color: darkcyan;">UnitBit</p>
                            <p>Design and build front-end website. (2020)</p>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="titleWorks">
                            <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <h4 class="text-lg font-bold">Collaborator for the Organization Valfurva Vallivo Museum</h4>
                        </div>
                        <div class="descriptionWorks">
                            <p class="text-md" style="color: darkcyan;">Museo Vallivo Valfurva</p>
                            <p>Collaborator for the Organization Valfurva Vallivo Museum, archiving and researching old
                                photos, photographer and various projects. (2015 - Now)</p>
                        </div>
                    </li>
                    <!-- Add more work experience entries as needed -->
                </ul>
            </section>

            <!-- Download Section -->
            <section class="my-10">
                <h3 class="text-2xl font-bold mb-3">Download</h3>
                <ul class="cvContainer">
                    <li class="cvDoc">
                        <a href="https://drive.google.com/file/d/1te1DoiKh6wTnFpOBH0TzaHXFblZsnhG_/view?usp=sharing" target="_blank"
                            class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">Italian
                            CV</a>
                    </li>
                    <li class="cvDoc">
                        <a href="https://drive.google.com/file/d/1U8T-_PBIkj5Z7jbCb2Oya18C8ZlOVmrX/view?usp=sharing" target="_blank"
                            class="mr-2 font-bold border-2 border-dashed p-2 border-theme-tertiary rounded-lg text-white">English
                            CV</a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
  
<script>
import mainPhoto from '~/assets/images/LorenzoMolinari_profile.png'
import { ChevronRightIcon } from 'vue-feather-icons'

export default {
    name: 'IndexPage',
    data() {
        return {
            mainPhoto: mainPhoto,
            eggClickCount: 0,
        };
    },
    methods: {
        showEasterEgg() {
            this.eggClickCount++;

            if (this.eggClickCount === 3) {
                const easterEggElement = document.getElementById('easterEgg');
                if (easterEggElement) {
                    easterEggElement.removeAttribute('hidden');

                    setTimeout(() => {
                        easterEggElement.setAttribute('hidden', 'true');
                        this.eggClickCount = 0; // Reset the click count
                    }, 5000); // Hide the easter egg after 5 seconds (you can adjust the time as needed)
                }
            }
        },
    },
    components: {
        ChevronRightIcon,
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
    font-size: 3rem;
}

@keyframes eggAppear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}</style>
  