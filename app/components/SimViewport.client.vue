<script setup lang="ts">
import { MapController } from '~/map/mapController'

    const viewport = ref<HTMLDivElement | null>(null)

    let controller: MapController | null = null

    function initViewport() {
        if (!viewport.value) return

        controller = new MapController()

        controller.attachRenderer(viewport.value)
    }

    onMounted(async () => {
        // Wait for the next tick so that we have time to render the DOM once so the viewport is set
        await nextTick()
        
        initViewport()
    })

    onBeforeUnmount(() => {
        controller?.dispose()
    })
</script>

<template>
    <div class="relative w-full h-dvh overflow-hidden">
        <div ref="viewport" class="sim-viewport"></div>
    </div>
</template>

<style scoped>
    .sim-viewport {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
