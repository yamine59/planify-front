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

        <div class="ban flex justify-between">
            <div class="flex flex-col ml-16">
                <p class="banFont text-left mt-20 text-black">
                    Voyager léger,<br>
                    en planifiant<br>
                    Vos voyages !
                </p>

                <div class="mt-10 flex">
                    <button class="banBtn px-12 py-4 rounded-lg text-white text-lg">
                        S'inscrire
                    </button>
                </div>
            </div>

            <div class="">
                <img src="../assets/img/itinenaire.png" class="banImg mr-8">
            </div>
        </div>

        <div class="flex justify-center gap-48 py-28">
            <div>
                <p class="bodyFontTitre text-4xl mb-8">
                    Créez votre itinéraire<br> facilement
                </p>
                <div class="flex items-center gap-6 mb-14">
                    <img src="../assets/img/accueilMap.png" class="iconBody px-2 py-2 rounded-xl w-14">
                    <p class="fontBodyIcon">Choisissez votre destination</p>
                </div>
                <div class="flex items-center gap-6 mb-14">
                    <img src="../assets/img/accueilCalendrier.png" class="iconBody px-2 py-2 rounded-xl w-14">
                    <p class="fontBodyIcon">Choisissez vos dates</p>
                </div>
                <div class="flex items-center gap-6 mb-14">
                    <img src="../assets/img/accueilNage.png" class="iconBody px-2 py-2 rounded-xl w-14">
                    <p class="fontBodyIcon">Rajoutez les activités de votre choix</p>
                </div>
            </div>
            <div class="bodyImg  rounded-xl">
                <img src="../assets/img/accueilCarte.png" class="w-96 h-full rounded-xl">
            </div>
        </div>

        <div>
            <p class="fontBody2 uppercase text-4xl text-center">Nos services proposes</p>

            <div class="flex justify-center m-16">
                <div class="pb-28 pt-8 px-28 justify-center items-center hover:rounded-xl hover:bg-white hover:cursor-pointer">
                    <div class="flex justify-center items-center">
                        <img src="../assets/img/accueilBasCalendrier.png" class="w-28">
                    </div>
                    <p class="fontIconBas mt-2 text-center">
                        Gérer votre temps
                    </p>
                </div>
                <div class="pb-28 pt-8 px-28 justify-center items-center hover:rounded-xl hover:bg-white hover:cursor-pointer">
                    <div class="flex justify-center items-center">
                        <img src="../assets/img/accueilBasDollar.png" class="w-28">
                    </div>
                    <p class="fontIconBas mt-2 text-center">
                        Economie
                    </p>
                </div>
                <div class="pb-28 pt-8 px-28 justify-center items-center hover:rounded-xl hover:bg-white hover:cursor-pointer">
                    <div class="flex justify-center items-center">
                        <img src="../assets/img/accueilBasMondial.png" class="w-28">
                    </div>
                    <p class="fontIconBas mt-2 text-center">
                        Mondial
                    </p>
                </div>
                <div class="pb-28 pt-8 px-28 justify-center items-center hover:rounded-xl hover:bg-white hover:cursor-pointer">
                    <div class="flex justify-center items-center">
                        <img src="../assets/img/accueilBasEngrenage.png" class="w-28">
                    </div>
                    <p class="fontIconBas mt-2 text-center">
                        Organisation
                    </p>
                </div>
            </div>
        </div>

        <div class="flex">
            <div class="footerBg flex flex-col justify-start items-center w-1/3 py-8">
                <img src="../assets/img/logo.png" class="w-96">
                <div class="flex gap-10">
                    <img src="../assets/img/footerInsta.png" class="w-16 mt-6">
                    <img src="../assets/img/footerX.png" class="w-16 mt-6">
                    <img src="../assets/img/footerMeta.png" class="w-16 mt-6">
                </div>
            </div>
            <div class="footerBg flex flex-col justify-center items-center w-1/3">
                <p class="py-4">Mentions Légales</p>
                <p class="py-4">Conditions générales</p>
                <p class="py-4">Politique de confdentialité</p>
            </div>
            <div class="footerBg flex justify-center items-center w-1/3">
                <p>© Copyright 2024,Tous droits réservés.</p>
            </div>
        </div>

    </div>

</template>


<script setup>

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

.nn {
    flex-grow: 1;
    background-color: #EFEFEF;
}

.ban {
    background-color: $primary;
}

.banFont {
    font-family: $font-pop-bolt;
    font-size: 80px;
    line-height: 80px;
}

.banImg {
    width: 600px;
}

.banBtn {
    background-color: $btn;
}
.banBtn:hover {
    background-color: #131fa1;
}

.bodyFontTitre, .fontBodyIcon {
    font-family: $font-pop;
}
.iconBody {
    background-color: $primary;
}
.bodyImg {
    box-shadow: 0px 9px 22px -9px rgba(0,0,0,0.75);
}

.fontBody2, .fontIconBas {
    font-family: $font-pop-bolt;
}

.footerBg {
    background-color: #DDDDE3;
}
</style>