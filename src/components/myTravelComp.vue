<template>
    <div class="tableContainer">

        <table>
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Nom</th>
                    <th>Date Début</th>
                    <th>Date fin</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>


            <tbody >
                <tr class="" v-for="(list, index) in listTravel  " :key="index" >
                    <td>{{ list.destination }}</td>
                    <td>{{ list.name }}</td>
                    <td>{{ formattedDateD(list.start_date ,list.description) }}</td>
                    <td>{{ formattedDateD(list.end_date,list.description) }}</td>
                    <td @mouseover="showTooltip(list.description)"   @mousemove="updatePosition"
                        @mouseleave="tooltipActive = false;" 
                        style="text-overflow:ellipsis; overflow: hidden;">
                        {{ descrip }} 
                    </td>
                    <td class="">
                       <div @click="update" class="bg-blue-700 w-10 h-6 rounded-lg border-red-700 border-2 flex justify-center items-center" >
                        <AkPencil class="text-white"/>
                       </div>
                    </td>
                            
            
                </tr>
              
            </tbody>
        </table>


        <div v-if="tooltipActive" :style="`left: ${mouseLeft}px; top: ${mouseTop}px;`" class="tooltip">
            {{ descriptionn }}
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { AkPencil } from '@kalimahapps/vue-icons';


const props = defineProps({
    key: Number,
    listTravel: Array,

});


const descrip = ref()
const descriptionn = ref('')
let tooltipActive = ref(false);
let mouseLeft = ref(0);
let mouseTop = ref(0);
const showTooltip = (desc) => {
    tooltipActive.value = true;
    descriptionn.value = desc;
}

const formattedDateD = (date,desc) => {
    descrip.value = desc.slice(0, 25) + ' ...';
    return new Date(date).toLocaleDateString();
}

const updatePosition = (e) => {
    mouseLeft.value = e.clientX + 5;
    mouseTop.value = e.clientY + 10;
}


</script>

<style scoped>
.tableContainer {
    width: 100%;
}

.tooltip {
    position: absolute;
    width: 250px;
    height: auto;
    padding: 10px;
    text-align: center;
    border: 1px solid rgb(129, 129, 129);
    background-color: white;
    transition: .1s;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th:nth-child(1) {
    width: 12%;
}

thead th:nth-child(2) {
    width: 20%;
}

thead th:nth-child(3) {
    width: 15%;
}

thead th:nth-child(4) {
    width: 10%;
}

thead th:nth-child(5) {
    width: 35%;
}
thead th:nth-child(6) {
    width: 5%;
}

th,
td {
    text-align: center;
    height: 50px;
    border-bottom: 1px solid #ddd;
}
</style>