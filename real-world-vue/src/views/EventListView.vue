<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id"></EventCard>
  <div class="pagination">
    <RouterLink :to="{ name: 'event-list', query: {page: page-1}}" rel="prev" v-if="page != 1" id="page-prev">
      Prev page
    </RouterLink>
    
    <RouterLink :to="{ name: 'event-list', query: {page: page+1}}" rel="next" v-if="hasNextPage" id="page-next">
      Next Page
    </RouterLink>
  </div>


  </main>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type'
import EventCard from '@/components/EventCard.vue'
import { ref, type Ref , computed , watchEffect } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'

const events: Ref<Array<EventItem>> = ref([])
const totalEvent = ref<number>(0)
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

watchEffect( () => {
  EventService.getEvent(2, props.page)
    .then( (res: AxiosResponse<EventItem[]>) => {
        events.value = res.data
        totalEvent.value = res.headers['x-total-count']
    })
})

const hasNextPage = computed (() => {
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page.valueOf() < totalPages
})

</script>

<style scoped>

.paginaition {
  display: flex;
  width: 290px;
}
.paginaition a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#prev-next {
  text-align: right;
}

</style>
