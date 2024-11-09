<template>
    <form>
        <label class="text-sm">
            <p class="mb-2 text-gray-600">Destination*</p>
            <input type="text" v-model="destination"
                class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5"
                placeholder="Paris" />
        </label>

        <div class="flex gap-2">
            <label class="text-sm w-full">
                <p class="mb-2 text-gray-600">Arrivée*</p>
                <input type="date" v-model="arrive"
                    class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 marker:block input p-2.5" />
            </label>

            <label class="text-sm w-full">
                <p class="mb-2 text-gray-600">Départ*</p>
                <input type="date" v-model="depart"
                    class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 marker:block input p-2.5" />
            </label>
        </div>

        <label class="text-sm">
            <p class="mb-2 text-gray-600">Nom*</p>
            <input type="text" v-model="nom"
                class="w-full mb-4 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 block input p-2.5"
                placeholder="Mon voyage à Paris" />
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
</template>


<script setup>
const destination = defineModel('destination');
const arrive = defineModel('arrive');
const depart = defineModel('depart');
const nom = defineModel('nom');
const participants = defineModel('participants');
const prix = defineModel('prix');
const description = defineModel('description');
</script>