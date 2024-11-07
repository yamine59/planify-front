<template>
    <div class="bgn font " v-if="user.username">
        <div class=" w-80"><img src="./../assets/img/Logo_en_blanc.png" alt=""></div>
        <div class="menucontainer">
            <div class="blocMenu">
                <div  @click="travel"class="flex hn rounded-lg items-center text-white gap-3 p-5 w-72 justify-between ">
                    <div class="flex gap-4 ">
                        <CgProfile class="h-6 w-6 " />
                        <p>Mes voyages</p>
                    </div>
                    <FlIOsArrowRtl class="h-4 w-4 " />
                </div>
                <div @click="createtravel" class="flex hn rounded-lg items-center text-white gap-3 p-5 w-72 justify-between ">
                    <div  class="flex gap-4"> <img src="./../assets/img/wallet.png" alt="">
                        <p>Organiser un voyage</p>
                    </div>
                    <FlIOsArrowRtl class="h-4 w-4 " />
                </div>
                <div class="flex hn rounded-lg items-center text-white gap-3 p-5 w-72 justify-between ">
                    <div class="flex gap-4"><img src="./../assets/img/message.png" alt="">
                        <p>Contact</p>
                    </div>
                    <FlIOsArrowRtl class="h-4 w-4 " />
                </div>
            </div>
            <div class="flex  rounded-lg items-center text-white gap-3 p-5 w-72 justify-between ">
                <div class="flex hn rounded-lg items-center text-white gap-3 p-5 w-72 justify-between">

                    <div class="flex gap-4">
                        <p>{{user.username}}</p>
                    </div>
                    <FlIOsArrowRtl class="h-4 w-4 " />
                </div>
                <div @click="logout" class="hover:bg-red-500 rounded-lg items-center text-white gap-3 p-5 ">
                    <LuLogOut/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { CgProfile, FlIOsArrowRtl ,LuLogOut } from '@kalimahapps/vue-icons';
import { computed } from 'vue';
const user = computed (() => store.state.user || {});

const travel = () => {
    router.push('/voyage')
}
const createtravel = () => {
    router.push('/creation-voyage')
}


const logout = () => {
    store.dispatch('logout'); // Call the logout action in Vuex
    router.push('/'); // Redirect to the login page
};
</script>
<style scoped lang="scss">
@import "@/style/variablecouleur.scss";
@import "@/style/variableFont.scss";

.bgn {
    background-color: $primary;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100vh;
    left: 0;
    align-items: center;
}

.menucontainer {
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hn:hover {
    background-color: $btn;
}

.font {
    font-family: $font-pop;
}
</style>
