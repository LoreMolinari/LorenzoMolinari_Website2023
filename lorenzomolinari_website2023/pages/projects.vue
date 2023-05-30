<template>
    <div class="py-8">
        <div class="container mx-auto">
            <h1 class="text-3xl font-bold text-center mb-8">My last projects</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Progetto 1 -->
                <div class="bg-white rounded-lg shadow-md">
                    <img src="path_to_project_image.jpg" alt="Project Image" class="w-full h-48 object-cover rounded-t-lg">
                    <div class="p-6">
                        <h2 class="text-xl font-bold mb-2">Valtellina Weather App</h2>
                        <p class="text-gray-700">Descrizione breve del progetto.</p>
                        <a href="#"
                            class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Dettagli</a>
                    </div>
                </div>

                <!-- Progetto 2 -->
                <div class="bg-white rounded-lg shadow-md">
                    <!-- ... Resto del codice per il secondo progetto ... -->
                </div>

                <!-- Progetto 3 -->
                <div class="bg-white rounded-lg shadow-md">
                    <!-- ... Resto del codice per il terzo progetto ... -->
                </div>

                <!-- E così via per gli altri progetti -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProjectPage',
    // ... altre opzioni del componente ...
};
</script>
  
<style scoped>
/* Rimuovi il background dalla sezione principale */
.py-8 {
    background-color: transparent;
}

/* Rimuovi il background dalla griglia di progetti */
.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    background-color: transparent;
}

/* Personalizza gli stili delle schede dei progetti */
.bg-white {
    /* Aggiungi eventuali stili personalizzati */
}

.rounded-lg {
    /* Aggiungi eventuali stili personalizzati */
}

.shadow-md {
    /* Aggiungi eventuali stili personalizzati */
}

/* Personalizza gli stili dei contenuti all'interno delle schede dei progetti */
.p-6 {
    /* Aggiungi eventuali stili personalizzati */
}

.text-xl {
    /* Aggiungi eventuali stili personalizzati */
}

.text-gray-700 {
    /* Aggiungi eventuali stili personalizzati */
}

.mt-4 {
    /* Aggiungi eventuali stili personalizzati */
}

.inline-block {
    /* Aggiungi eventuali stili personalizzati */
}

.bg-blue-500 {
    /* Aggiungi eventuali stili personalizzati */
}

.hover\:bg-blue-600:hover {
    /* Aggiungi eventuali stili personalizzati */
}

.text-white {
    /* Aggiungi eventuali stili personalizzati */
}

.px-4 {
    /* Aggiungi eventuali stili personalizzati */
}

.py-2 {
    /* Aggiungi eventuali stili personalizzati */
}

.rounded {
    /* Aggiungi eventuali stili personalizzati */
}
</style>
  