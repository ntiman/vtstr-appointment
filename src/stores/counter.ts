import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePetsStore = defineStore('pets', () => {
  const selectedPet = ref<{} | null>(null)
  const allPets = ref<[]>([])
  const topPets = ref<[]>([])

  function setPets(newPets: any): void {
    allPets.value = newPets.filter((pet: any) => pet['id']!==3)
    topPets.value = newPets.splice(0,3);
  }

  return { selectedPet, setPets, allPets, topPets }
})

export const useConcernsStore = defineStore('concerns', () => {
  const concerns = ref()
  function setConcerns(newConcerns: any): void {
    concerns.value = newConcerns;
  }
  return { concerns, setConcerns }
})

export const useLocationsStore = defineStore('locations', () => {
  const locations = ref()
  function setLocation(newLocation: any): void {
    locations.value = newLocation;
  }
  return { locations, setLocation }
})

export const useStepperStore = defineStore('stepper', () => {
  const pet = ref<{} | null>(null)
  const concern = ref<{} | null>(null)
  const location = ref<{} | null>(null)
  function setPet(newLocation: any): void {
    pet.value = newLocation;
  }
  function setConcern(newLocation: any): void {
    pet.value = newLocation;
  }
  function setLocation(newLocation: any): void {
    pet.value = newLocation;
  }
  return { pet, concern, location, setLocation, setPet, setConcern }
})