
<template>
    <div class="bgn font ">
        <div class="h-56 w-80"><img src="./../assets/img/Logo_en_blanc.png" alt=""></div>
        <div class="flex items-center text-white gap-3 p-5 "> <CgProfile class="h-6 w-6 "/> <p>Mes voyages</p> <FlIOsArrowRtl class="h-4 w-4 ml-16"/></div>
        <div> <p>Organiser un voyage</p></div>
        <div> <p>Help</p></div>
    </div>
</template>

<script setup>
import { CgProfile ,FlIOsArrowRtl } from '@kalimahapps/vue-icons';
</script>
<style lang="scss">
@import "@/style/variablecouleur.scss";
@import "@/style/variableFont.scss";
.bgn{
    background-color:$primary;
    
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100vh;
    position: absolute;
    left: 0;
  
    align-items: center;
}
.font {
    font-family: $font-pop;
}
</style>
