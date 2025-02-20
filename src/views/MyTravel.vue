<template>
    <div class="containerbody">
        <div class="flex w-3/4 justify-start  mb-20 text-4xl">
            <p class="capitalize">Bonjour {{user.username}}</p>
        </div>


        <div class="bodyTravel">
            <div class="flex w-full justify-between p-5">
                <p class="fontBolt">Mes voyage</p>
                <div class="flex gap-2">
                    <p>Trier par : </p>
                    <select name="pets" id="pet-select">
                        <option value="">Le plus reçent</option>
                        <option value="dog">Le plus ancien</option>

                    </select>
                </div>
            </div>
            <div>
                <myTravelComp 
                :listTravel="listTravel"
                
                />
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import myTravelComp from '@/components/myTravelComp.vue';
import store from '@/store';

const user = computed (() => store.state.user || {});

onMounted(() => {
    list_travel()
})

const listTravel = ref()
const list_travel = async () => {
    try {
        const response = await fetch(`http://planify-back-production-af72.up.railway.app/travel/showTravel/${user.value.id}`, {
            method: 'get',

            headers: {

                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.log("ERREUR")
            alert("erreur ")
        }

        const result = await response.json();

        // list_quizz.value.push(result.quizz) 
        listTravel.value = result.listtravel
        console.log(listTravel.value)
        

    } catch (err) {
        console.error('Error during login:', err);
    }
}

</script>

<style lang="scss" scoped>
$primary:#6872F0;
$btn:#4C58D4;
$black:rgba(34, 35, 38, 1);
$white:rgba(255, 236, 236, 1);
$gris: #D9D9D9;
$grisFonce: #8a8a8a;
@font-face {
    font-family: 'poppins';
    src: url('./../assets/font/Poppins/Poppins-Medium.ttf');
};

@font-face {
    font-family: 'poppinsBolt';
    src: url('./../assets/font/Poppins/Poppins-Bold.ttf');
};


$font-pop:'poppins';
$font-pop-bolt:'poppinsBolt';
.fontBolt {
    font-family: $font-pop-bolt;
}

.containerbody {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    flex-grow: 0;
    position: relative;
    background-color: $gris;
    padding-top: 5vh;
    font-family: $font-pop;
}

.bodyTravel {
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    min-height: 40%;
    height: 80%;
    width: 80%;
    overflow-y: auto;
    
}

.bodyTravel::-webkit-scrollbar {
 
    display: none;
 
}

</style>