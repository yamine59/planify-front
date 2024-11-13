<template>
    <div>
        <!-- Section à capturer -->
        <div >
            <form>
                <p class="mb-2 text-gray-600">Votre Destination</p>
                <div class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                    {{ destination }}
                </div>

                <div class="flex gap-2">
                    <label class="text-sm w-full">
                        <p class="mb-2 text-gray-600">Arrivée</p>
                        <div class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                            {{ arrive }}
                        </div>
                    </label>

                    <label class="text-sm w-full">
                        <p class="mb-2 text-gray-600">Départ</p>
                        <div class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                            {{ depart }}
                        </div>
                    </label>
                </div>

                <label class="text-sm">
                    <p class="mb-2 text-gray-600">Nombre de participants</p>
                    <div class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                        {{ participants }}
                    </div>
                </label>

                <label class="text-sm">
                    <p class="mb-2 text-gray-600">Prix</p>
                    <div class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                        {{ prix }} €
                    </div>
                </label>

                <label class="text-sm">
                    <p class="mb-2 text-gray-600">Description</p>
                    <div class="w-full border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5">
                        {{ description }}
                    </div>
                </label>
            </form>
        </div>

        <!-- Bouton pour capturer et télécharger -->
        
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';


const route = useRoute();
const user = computed(() => store.state.user || {});

// Référence pour la section à capturer


onMounted(() => {
    travel();
});

const nom = ref();
const destination = ref();
const arrive = ref();
const depart = ref();
const participants = ref();
const prix = ref();
const description = ref();

const formattedDateD = (date) => {
    return new Date(date).toLocaleDateString();
};

const travel = async () => {
    try {
        const response = await fetch(`http://localhost:3001/travel/show1Travel/${route.params.id_travel}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erreur lors de la recuperation du voyage:', errorData.message);
            return;
        }

        const result = await response.json();
        const travel = result.listtravel[0];

        nom.value = travel.name;
        destination.value = travel.destination;
        participants.value = travel.persons;
        arrive.value = formattedDateD(travel.start_date);
        depart.value = formattedDateD(travel.end_date);
        description.value = travel.description;
        prix.value = travel.amount;
    } catch (error) {
        console.error('Erreur durant la recherche de voyage : ', error);
    }
};
</script>

<style scoped>
.template-section {
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
}
</style>
