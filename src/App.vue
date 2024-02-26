<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navigation/NavBar.vue'
import FooterLinks from './components/navigation/FooterLinks.vue';
import { onBeforeMount } from 'vue';
import { useConcernsStore, usePetsStore } from './stores/counter';

const petStore = usePetsStore()
const concernsStore = useConcernsStore();

onBeforeMount(() => {
  petStore.setPets([
    {
      id: 1,
      icon: "🐶",
      description: "Dog"
    },
    {
      id: 2,
      icon: "🐈",
      description: "Cat"
    },
    {
      id: 3,
      icon: "🐾",
      description: "Show More"
    },
    {
      id: 4,
      icon: "🐘",
      description: "Elephant"
    },
    {
      id: 5,
      icon: "🦘",
      description: "Kangaroo"
    },
    {
      id: 6,
      icon: "🦑",
      description: "Squid"
    },
    {
      id: 7,
      icon: "🐙",
      description: "Octopus"
    },
    {
      id: 8,
      icon: "🦙",
      description: "Lama"
    },
    {
      id: 9,
      icon: "🫎",
      description: "Moose"
    },
    {
      id: 10,
      icon: "🐼",
      description: "Panda"
    },
  ]);
  concernsStore.setConcerns([
    {
      icon: "🥕",
      description: "Nutrition"
    },
    {
      icon: "👂",
      description: "Ear infections"
    },
    {
      icon: "👁️",
      description: "Eye issues"
    },
    {
      icon: "⚗️",
      description: "Urinary problems"
    },
    {
      icon: "💉",
      description: "Mobility concerns"
    },
    {
      icon: "😟",
      description: "Concern 9"
    },
    {
      icon: "😟",
      description: "Concern 10"
    },
    {
      icon: "😟",
      description: "Concern 11"
    },
    {
      icon: "😟",
      description: "Concern 12"
    },
  ]);
})
</script>

<template>
  <Navbar />
  <div class="pt-16 p-10 h-screen w-screen flex align-middle justify-center">
    <!-- <AppointmentView class="" /> -->
    <div class="mt-10 max-w-xl">
    <router-view></router-view>
    </div>
  </div>
  <FooterLinks />
</template>

<style scoped></style>
