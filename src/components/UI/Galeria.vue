<template>
    <div :id="galleryID">
      <a
        v-for="(image, key) in images"
        :key="key"
        :href="image.largeURL"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="image.thumbnailURL" alt="" />
      </a>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  
  const props = defineProps({
    galleryID: String,
    images: Array,
  });
  
  let lightbox;
  
  onMounted(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: `#${props.galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  });
  
  onUnmounted(() => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
  });
  </script>
  