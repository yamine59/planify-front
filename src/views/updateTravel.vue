<template>
    <div class="containerbody flex flex-col pl-14 w-full h-full pt-10">
        <div class="flex w-full justify-start text-4xl">
            <p>Bonjour {{ user.username }}</p>
        </div>

        <div class="container flex flex-col bg-white rounded-xl p-5 my-10">
            <div class="flex justify-between">
                <p class="fontBolt text-2xl mb-6">Creation de votre Planify</p>
                <p class="fontBolt text-2xl mb-6 ">Votre récap</p>
            </div>

            <div class="flex justify-between mb-10">
                <FormVoyage 
                class="w-2/5"
                v-model:destination="destination"
                v-model:arrive="arrive"
                v-model:depart="depart"
                v-model:nom="nom"
                v-model:participants="participants"
                v-model:prix="prix"
                v-model:description="description"
            />

            <div class="recap w-2/5 rounded-lg px-6 py-4">
                <div class="mb-4">
                    <IoOutlineAirplane class="text-3xl mb-1"/>
                    <p class="text-xl truncate">{{ destination }}</p>
                </div>

                <div class="mb-4">
                    <BsCalendar3 class="text-3xl mb-1"/>
                    <div class="flex gap-5">
                        <p>{{ arrive }}</p>
                        <p v-if="arrive && depart">/</p>
                        <p>{{ depart }}</p>
                    </div>
                </div>

                <div class="mb-4">
                    <AkPencil class="text-3xl mb-1"/>
                    <p class="truncate">{{ nom }}</p>
                </div>

                <div class="mb-4">
                    <PhFillUsers class="text-3xl mb-1"/>
                    <div class="flex gap-2">
                        <p class="truncate">
                            {{ participants }}
                        </p>
                        <p v-if="participants">Participants</p>
                    </div>
                </div>

                <div class="mb-4">
                    <AnOutlinedDollarCircle class="text-3xl mb-1"/>
                    <div class="flex gap-2">
                        <p class="truncate line-clamp-4 text-ellipsis whitespace-normal">
                            {{ prix }}
                        </p>
                        <p v-if="prix">€</p>
                    </div>
                </div>

                <div>
                    <AkPaper class="text-3xl mb-1"/>
                    <p class="truncate line-clamp-4 text-ellipsis whitespace-normal">{{ description }}</p>
                </div>
            </div>
            </div>

            <div class="text-red-600 my-2 text-center text-xs">
                <p v-for="erreur in erreurs" :key="erreur">
                    {{ erreur }}
                </p>
            </div>

            <div class="flex justify-center cursor-pointer">
                <div @click="" class="p-5 w-52 rounded-xl bg-blue-500 text-center">
                    Suivant
                </div>
            </div>
        </div>

    </div>
</template>



<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import store from '@/store';
import { useRoute, useRouter } from 'vue-router'
import FormVoyage from '@/components/formVoyage.vue';
import { User } from '@/types/types';
import { IoOutlineAirplane, BsCalendar3, AkPencil, PhFillUsers, AkPaper, AnOutlinedDollarCircle } from '@kalimahapps/vue-icons';
const route = useRoute()
const router = useRouter()

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


onMounted(() => {
    travel()
})

const formattedDateD = (date:any) => {
    return new Date(date).toLocaleDateString();
};

const travel = async () => {
   console.log(route.params.id);
    try {
        const response = await fetch(`http://localhost:3001/travel/show1Travel/${route.params.id}`, {
            // ${route.params.id}
            
            
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erreur lors de la recuperation du voyage:', errorData.message);
            return;
        }

        const result = await response.json();
        const travel = result.listtravel[0]
        
        nom.value = travel.name;
        destination.value = travel.destination;
        participants.value = travel.persons;
        arrive.value = formattedDateD(travel.start_date);
        depart.value = formattedDateD(travel.end_date);
        description.value = travel.description;
        prix.value = travel.amount;

       
    } catch (error) {
        console.error('Erreur durant la recherche de voyage : ', error)
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