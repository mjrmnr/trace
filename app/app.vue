<script setup lang="ts">
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })

  const title = 'Trace'
  const description = 'A cartographic transportation simulator'

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description
  })
</script>

<template>
  <UApp>
    <UMain class="w-full">
      <NuxtPage />
    </UMain>
  </UApp>
</template>
