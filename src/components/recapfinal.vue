<template>
    <div>
        <!-- Section à capturer -->
        <div ref="captureSection" class="template-section">
            <h1>Mon Template à Capturer</h1>
            <p>Ceci est un exemple de template.</p>
        </div>

        <!-- Bouton pour capturer et télécharger -->
        <button @click="captureAndDownload">Télécharger le Template</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';

// Créer une référence pour la section à capturer
const captureSection = ref(null);

// Fonction pour capturer et télécharger la section
const captureAndDownload = () => {
    // Utiliser html2canvas pour capturer la section
    if (captureSection.value) {
        html2canvas(captureSection.value).then(canvas => {
            // Convertir le canvas en une image de type PNG
            const imageData = canvas.toDataURL('image/png');

            // Créer un lien temporaire pour télécharger l'image
            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'template-capture.png';

            // Déclencher le téléchargement
            link.click();
        }).catch(error => {
            console.error('Erreur lors de la capture:', error);
        });
    }
};
</script>

<style scoped>
.template-section {
    /* Styles pour l'élément que vous souhaitez capturer */
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
}
</style>