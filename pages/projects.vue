<template>
    <div class="py-8">
        <div class="container mx-auto">
            <div class="title-container">
                <h1 class="text-4xl font-bold text-center">
                    My <b style="color:#008b8b">last</b> projects:
                </h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Progetto 1 -->
                <div class="project-container rounded-lg shadow-md">
                    <div class="project-image-container">
                        <img :src="WeatherPhoto" alt="Weather Valtellina Project Image" class="project-image rounded-t-lg">
                    </div>
                    <div class="project-details p-6">
                        <h2 class="text-xl font-bold mb-2">Weather Valtellina</h2>
                        <p class="text-gray-700">Weather app (Android) to check the weather in cities of Valtellina
                            (Sondrio) - Italy.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.dinatium.weatherValtellina&gl=US"
                            target="_blank"
                            class="mt-4 inline-block details text-white px-4 py-2 rounded">Dettagli</a>
                    </div>
                </div>

                <!-- Progetto 2 -->
                <div class="project-container rounded-lg shadow-md">
                    <div class="project-image-container">
                        <img :src="VVMPhoto" alt="Valtellina Virtual Museum Project Image"
                            class="project-image rounded-t-lg">
                    </div>
                    <div class="project-details p-6">
                        <h2 class="text-xl font-bold mb-2">Valtellina Virtual Museum</h2>
                        <p class="text-gray-700">Virtual Museum Project about the story of Valtellina</p>
                        <a href="https://valtellinavirtualmuseum.netlify.app/" target="_blank"
                            class="mt-4 inline-block details text-white px-4 py-2 rounded">Dettagli</a>
                    </div>
                </div>

                <!-- Progetto 3 -->
                <div class="project-container rounded-lg shadow-md">
                    <div class="project-image-container">
                        <img :src="OroscopoPhoto" alt="Oroscopo Fausto Molinari Project Image"
                            class="project-image rounded-t-lg">
                    </div>
                    <div class="project-details p-6">
                        <h2 class="text-xl font-bold mb-2">Oroscopo Fausto Molinari</h2>
                        <p class="text-gray-700">L'applicazione dell'oroscopo di Fausto Molinari, ogni giorno in onda su
                            radio e TV alle ore 9:15 <a href="https://faustomolinari.it"
                                target="_blank">www.faustomolinari.it</a></p>
                        <a href="https://play.google.com/store/apps/details?id=com.dinatium.oroscopofaustomolinari&gl=US"
                            target="_blank"
                            class="mt-4 inline-block details text-white px-4 py-2 rounded">Dettagli</a>
                    </div>
                </div>

                <!-- E così via per gli altri progetti -->
            </div>
        </div>
    </div>
</template>

<script>
import Weather from '~/assets/images/projects/weatherApp.webp'
import VVM from '~/assets/images/projects/VVMLogo.png'
import Oroscopo from '~/assets/images/projects/Oroscopo.webp'

export default {
    name: 'ProjectPage',
    data() {
        return {
            WeatherPhoto: Weather,
            VVMPhoto: VVM,
            OroscopoPhoto: Oroscopo,
        };
    }
};
</script>

<style scoped>
.py-8 {
    background-color: transparent;
}

.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    background-color: transparent;
}

.title-container {
    margin-bottom: 40px;
}

.project-container{
    background-color: #080808e0;
    border: solid 0.05rem #3a3a3a;
}

.project-image-container {
    height: 200px;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 2.5%;
}

.project-details {
    color: #333;
}

.project-details h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.project-details p {
    color: #ffffff;
}

.details{
    background-color: darkcyan;
}

.details:hover{
    background-color: rgb(1, 110, 110);
}

.project-image:hover {
    transform: rotate(360deg);
    transition: transform 1s ease;
}
</style>
