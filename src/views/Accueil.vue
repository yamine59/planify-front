<template>
    <div class="nn">
        <div class="flex justify-between mb-4">
            <a href="/" class="ml-8 mt-5">
                <img src="../assets/img/logo.png" class="w-56">
            </a>
            <div class="mt-6">
                <button class="btn mx-4 px-10 py-2 rounded-md">Inscription</button>
                <button class="btn mx-4 px-10 py-2 rounded-md">Connexion</button>
            </div>
        </div>

        <div class="ban flex justify-between w-full">
            <div class="flex flex-col ml-16">
                <p class="font text-left mt-20 text-black">
                    Voyager léger,<br>
                    en planifiant<br>
                    Vos voyages !
                </p>

                <div class="mt-10 flex">
                    <Btn class="px-8">
                        S'inscrire
                    </Btn>
                </div>
            </div>

            <div class="">
                <img src="../assets/img/itinenaire.png" class="iti mr-8">
            </div>

        </div>

    </div>

</template>


<script setup>
import Btn from "../components/btn.vue";

</script>


<style scoped lang="scss">
@import "@/style/variablecouleur.scss";
@import "@/style/variableFont.scss";
.btn {
    background-color: $gris;
}
.btn:hover {
    background-color: $grisFonce;
}
.nn{
    flex-grow: 1;
}
.ban {
    background-color: $primary;
}

.font {
    font-family: $font-pop-bolt;
    font-size: 80px;
    line-height: 80px;
}

.iti {
    width: 600px;
}
</style>