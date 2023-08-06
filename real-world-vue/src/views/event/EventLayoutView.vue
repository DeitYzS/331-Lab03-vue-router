<template>
    <div v-if="event">
        <h1> {{ event.title }} </h1>
        <div id="nav">
            <router-link :to="{ name: 'event-detail', params: { id } }">
                Details
            </router-link>
            |
            <router-link :to="{ name: 'event-register', params: { id } }">
                Register
            </router-link>
            |
            <router-link :to="{ name: 'event-edit', params: { id } }">
                Edit
            </router-link>

            <RouterView :event="event"></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type EventItem } from '@/type';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router'

const event = ref<EventItem | null>(null)
const router = useRouter()
const props = defineProps ({
    id:String
})

EventService.getEventById(Number(props.id))
    .then((res) => {
        event.value = res.data
    })
    .catch((err) => {
        console.log(err);
    if(err.res && err.res.status === 404) {
        router.push({ name: '404-resource', params: {resource: 'event'} })
    } else {
        router.push({ name: 'network-error' })
    }
            
    })
</script>