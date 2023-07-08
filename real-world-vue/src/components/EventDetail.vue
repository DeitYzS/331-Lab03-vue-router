<template>
    <div v-if="event">
        <h1>{{event?.title}}</h1>
        <p> {{event?.time }} on {{ event?.date }} @ {{ event?.location}}</p>
        <p> {{event?.description}} </p>
    </div>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type';
import type { PropType } from 'vue'

const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        required: true
    }
})



</script>

