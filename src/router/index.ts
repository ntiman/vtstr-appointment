import { createRouter, createWebHistory } from 'vue-router'
import AppointmentView from '../views/AppointmentView.vue'
import SelectPet from '@/components/appointment/steps/SelectPet.vue'
import SelectConcern from '@/components/appointment/steps/SelectConcern.vue'
import SelectLocation from '@/components/appointment/steps/SelectLocation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppointmentView,
      redirect: 'pet',
      children: [
        { path: 'pet', name: 'pet', component: SelectPet,meta: { title: 'Who is the appointment for?' }},
        { path: 'concerns', name: 'concerns', component: SelectConcern,meta: { title: 'What are  your concerns?' } },
        { path: 'location', name: 'location', component: SelectLocation,meta: { title: 'Where are you lcoated?' } },
      ],
    },
    
  ]
})

export default router
