<script setup lang="ts">
import type { EventItem } from '@/type';
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue';

const events = ref<EventItem[]>([
  {
    id: 5928101,
    category: 'Animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id:4582797,
    category: 'Food',
    title: 'Community Gaardening',
    description: 'Join us as we tend to the community edible plants',
    location: 'Flora City',
    date : 'March 14, 2022',
    time: '10:00',
    petsAllowed: true ,
    organizer: 'Fren Pollin'
  },
  {
    id: 5928101,
    category: 'Sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
])
</script>

<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard  v-for="event in events" :event="event" :key="event.id"></EventCard>
  </main>
</template>

<style scoped>
  
</style>
