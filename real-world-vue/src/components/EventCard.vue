
<script setup lang="ts">
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})

// const events = ref<EventItem[]>([
//   {
//     id: 5928101,
//     category: 'animal welfare',
//     title: 'Cat Adoption Day',
//     description: 'Find your new feline friend at this event',
//     location: 'Meow Town',
//     date: 'January 28, 2022',
//     time: '12:00',
//     petsAllowed: true,
//     organizer: 'Kat Laydee'
//   },
//   {
//     id:4582797,
//     category: 'food',
//     title: 'Community Gaardening',
//     description: 'Join us as we tend to the community edible plants',
//     location: 'Flora City',
//     date : 'March 14, 2022',
//     time: '10:00',
//     petsAllowed: true ,
//     organizer: 'Fren Pollin'
//   },
//   {
//     id: 5928101,
//     category: 'sustainability',
//     title: 'Beach Cleanup',
//     description: 'Help pick up trash along the shore.',
//     location: 'Playa Del Carmen',
//     date: 'July 22, 2022',
//     time: '11:00',
//     petsAllowed: false,
//     organizer: 'Carey Wales'
//   }
// ])
</script>


<template>
  <div class="event-class">
    <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </div>
</template>


<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
</style>
