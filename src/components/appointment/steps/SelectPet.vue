<script setup lang="ts">
import { usePetsStore, useStepperStore } from '@/stores/counter';
import CardItem from '../CardItem.vue';
import { ref} from 'vue';

const petStore = usePetsStore();
const stepperStore = useStepperStore();

// let displayPets = petStore.topPets;
const displayPets = ref(petStore.topPets)

const selectPet = (pet: any): void => {
    console.log('User selected -> ', pet.description)
    if (pet.id === 3) {
        displayPets.value = petStore.allPets;
    } else {
        stepperStore.setPet(pet);
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="pet in displayPets" :key="pet['id']">
            <CardItem @click="selectPet(pet)">
                <template #icon>{{ pet['icon'] }}</template>
                <template #description>{{ pet['description'] }}</template>
            </CardItem>
        </div>
    </div>
</template>
<style></style>