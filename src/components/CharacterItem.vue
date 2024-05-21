<script setup lang="ts">
import type { Icharacters } from '@/types/characters'
import { onMounted, ref, computed } from 'vue'
const prop = defineProps<{ character: Icharacters }>()
</script>

<template>
  <div class="catalog__item">
    <div class="left__info">
      <img :src="character.image" alt="Изображение персонажа" />
    </div>
    <div class="right__info">
      <h3 class="character__title">{{ character.name }}</h3>
      <p class="character__description">{{ character.species }}</p>

      <span class="character__span">Последнее известное местоположение:</span>
      <p class="character__location-description">{{ character.location.name }}</p>

      <span class="character__span">Впервые замечен в:</span>
      <p class="character__location-description">{{ character.origin.name }}</p>
    </div>
  </div>
</template>
