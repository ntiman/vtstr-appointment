

<script setup lang="ts">
import { useConcernsStore, useStepperStore } from '@/stores/counter';
import CardItem from '../CardItem.vue';
import { ref } from 'vue';

const concernsStore = useConcernsStore();
const stepperStore = useStepperStore();

const concerns = ref(concernsStore.concerns)

const selectConcerns = (pet: any): void => {
    console.log('selected concern -> ');
}

</script>

<template>
    <div id="concerns" class="flex flex-col justify-center">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="concern in concerns" :key="concern['id']">
                <CardItem @click="selectConcerns(concern)">
                    <template #icon>{{ concern['icon'] }}</template>
                    <template #description>{{ concern['description'] }}</template>
                </CardItem>
            </div>
        </div>
        <button type="button" :disabled="true" 
            class="text-white mt-8 bg-vetster-pink block font-normal rounded-md text-sm px-5 py-4 text-center me-2 mb-2">Next</button>
    </div>
</template>
<style></style>