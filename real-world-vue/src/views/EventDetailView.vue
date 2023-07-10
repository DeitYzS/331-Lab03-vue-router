<template>
  <main>
    <!-- <EventDetail :event="event" ></EventDetail> -->
    <div v-if="event">
      <h1>{{event.title}}</h1>
      <div id="nav">
        <router-link :to="{name: 'EventDetails', params: { id }}">
          Details
        </router-link>

        <router-link :to="{name: 'EventRegister', params: { id }}">
          Register
        </router-link>

        <router-link :to="{name: 'EventEdit', params: { id }}">
          Edit
        </router-link>
      </div>
      <p>{{event.time}} on {{event.date}} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>>
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
