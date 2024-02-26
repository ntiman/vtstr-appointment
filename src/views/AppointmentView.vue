<script setup lang="ts">
import StepperItem from '@/components/appointment/StepperItem.vue';
import { useStepperStore } from '@/stores/counter';
import { computed, watch, ref, nextTick} from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter()
const title = ref('Who is the appointment for?');

router.afterEach((to) => {
    nextTick(() => {
        title.value = to.meta.title as string;
    });
});

const stepperStore = useStepperStore();

const isPetSelected = computed(() => {
    return stepperStore.pet !== null;
})

watch(isPetSelected, (selected) => {
    if(selected){
        router.push({ name: 'concerns'})
    }
})

router.beforeEach((to) => {
    console.log("navigating to -> ", to);
    if(to.fullPath === '/pet'){
        stepperStore.setPet(null);
    }
})
</script>

<template>
    <div class="max-w-screen-xl flex flex-col items-center w-full">
        <StepperItem class="mt-6"/>
        <h1 class="break-after-right font-thin text-2xl mt-24">{{ title }}</h1>
        <div class="w-full h-max mt-14">
            <router-view></router-view>
        </div>
        <div class="mt-12 sm:mt-16 font-thin text-base text-neutral-700 text-center">Already have an account? <a class="text-vetster-pink font-normal hover:text-indigo-400 transition duration-150">Log in</a></div>
    </div>
</template>

<style scoped></style>
