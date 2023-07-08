<template>
  <main>
    <EventDetail :event="event" ></EventDetail>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'
import EventDetail from '@/components/EventDetail.vue';

const event = ref<EventItem | null>(null)
const props = defineProps({
  id: String
})

EventService.getEventById(Number(props.id))
  .then((res) => {
    event.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })
</script>
