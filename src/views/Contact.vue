<template>
    <div class="containerbody flex flex-col pl-14 w-full h-full pt-10">
        <div class="flex w-full justify-start text-4xl">
            <p>Bonjour {{ user.username }}</p>
        </div>

        <form class="w-2/5 bg-white rounded-xl p-5">
            <div class="flex gap-2">
                <label class="text-sm w-full">
                    <p class="mb-2 text-gray-600">Nom*</p>
                    <input type="text" v-model="arrive"
                        class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 marker:block input p-2.5" />
                </label>
    
                <label class="text-sm w-full">
                    <p class="mb-2 text-gray-600">Prénom*</p>
                    <input type="text" v-model="depart"
                        class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 marker:block input p-2.5" />
                </label>
            </div>
    
            <label class="text-sm">
                <p class="mb-2 text-gray-600">Nom*</p>
                <input type="email" v-model="nom"
                    class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5"
                    placeholder="Votre e-mail" />
            </label>
    
            <label class="text-sm">
                <p class="mb-2 text-gray-600">Nombre de participants*</p>
                <input type="number" v-model="participants"
                    class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5"
                    placeholder="1" min="1"/>
            </label>
    
            <label class="text-sm">
                <p class="mb-2 text-gray-600">Prix</p>
                <input type="number" v-model="prix"
                    class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5"
                    placeholder="500€" min="0"/>
            </label>
    
            <label class="text-sm">
                <p class="mb-2 text-gray-600">Description*</p>
                <textarea rows="5" v-model="description"
                    class="w-full border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5" />
            </label>
        </form>
    </div>
</template>



<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import store from '@/store';
import router from '@/router';
import FormVoyage from '@/components/formVoyage.vue';
import { User } from '@/types/types';
import { IoOutlineAirplane, BsCalendar3, AkPencil, PhFillUsers, AkPaper, AnOutlinedDollarCircle } from '@kalimahapps/vue-icons';

const destination = ref('');
const arrive = ref('');
const depart = ref('');
const nom = ref('');
const participants = ref('');
const description = ref('');
const prix = ref('');

const erreurs = ref<string[]>([])

const user = computed(() => store.state.user || {} as User);
const userId = computed(() => store.state.user?.id || null);

console.log("Utilisateur dans le store :", store.state.user);


const verify = (event: Event) => {
    event.preventDefault()
    erreurs.value = []

    if (!destination.value.length) {
        erreurs.value.push('Le champ destination est obligatoire !')
    }
    if (!arrive.value.length) {
        erreurs.value.push("Le champ date d'arrivé est obligatoire !");
    }
    if (!depart.value.length) {
        erreurs.value.push("Le champ date de départ est obligatoire !");
    }
    if (!nom.value.length) {
        erreurs.value.push("Le champ nom est obligatoire !");
    }
    if (!participants.value || isNaN(Number(participants.value)) || Number(participants.value) <= 0) {
        erreurs.value.push("Le champ participants est obligatoire et doit être un nombre positif !");
    }
    if (!description.value.length) {
        erreurs.value.push("Le champ description est obligatoire !");
    }

    if (erreurs.value.length === 0) {
        travel();
    } else {
        return;
    }
}


console.log("User ID:", userId.value);

const travel = async () => {
    const data = {
        name: nom.value,
        destination: destination.value,
        persons: Number(participants.value),
        start_date: arrive.value,
        end_date: depart.value,
        description: description.value,
        amount: prix.value,
    }
    try {
        const response = await fetch(`http://localhost:3001/travel/creationTravel/${userId.value}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erreur lors de la création du voyage:', errorData.message);
            return;
        }

        nom.value = ''
        destination.value = ''
        participants.value = ''
        arrive.value = ''
        depart.value = ''
        description.value = ''
        prix.value = ''

        router.push('/')
    } catch (error) {
        console.error('Erreur durant la création du voyage : ', error)
    }
}
</script>


<style lang="scss" scoped>
@import "@/style/variablecouleur.scss";
@import "@/style/variableFont.scss";

.containerbody {
    font-family: $font-pop;
    background-color: $gris;
}

.container {
    width: 95%;
}

.fontBolt {
    font-family: $font-pop-bolt;
}

.recap {
    background-color: $gris;
}

.truncate {
    word-break: break-word;
}
</style>