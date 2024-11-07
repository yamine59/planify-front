<template>
    <div class="containerbody font ">
        <div class="flex w-2/3 justify-start  mb-20 text-4xl">
            <p>Bonjour {{user.username}},</p>
        </div>


        <div class="bodyTravel">
            <div class="flex w-full justify-between p-5">
                <p class="fontBolt">Creation de votre Planify</p>
                <div class="flex gap-2">
                    <p>Trier par : </p>
                    <select name="pets" id="pet-select">
                        <option value="">Le plus reçent</option>
                        <option value="dog">Le plus ancien</option>

                    </select>
                </div>
            </div>

            <activityAddCom/>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import activityAddCom from '@/components/activityAddCom.vue';
import store from '@/store';

const user = computed (() => store.state.user || {});

onMounted(() => {

})



</script>

<style lang="scss" scoped>
@import "@/style/variablecouleur.scss";
@import "@/style/variableFont.scss";

.font {
    font-family: $font-pop;
}

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
}

.bodyTravel {
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    min-height: 40%;
    width: 80%;
}
</style>