
<template>
  <main>
    <EventOrganizerCard v-for="event in events" :key="event.id" :event="event"></EventOrganizerCard>
  </main>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type';
import EventOrganizerCard from '@/components/EventOrganizerCard.vue';
import { ref, type Ref } from 'vue';
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';

const events: Ref<Array<EventItem>> = ref([])
  const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
EventService.getEvent(2, props.page)
  .then((res: AxiosResponse<EventItem[]>) => {
    events.value = res.data
})

</script>

<style scoped>
  .event {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    font-size: 20px;
  }

</style>
