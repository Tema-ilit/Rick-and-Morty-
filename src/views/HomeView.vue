<script setup lang="ts">
import CharacterItem from '@/components/CharacterItem.vue'
import BasePagination from '@/components/BasePagination.vue'
import { onMounted } from 'vue'
import CharacterFiler from '@/components/CharacterFiler.vue'
import { usecharacterStore } from '@/stores/counter'

const store = usecharacterStore()

onMounted(() => {
  store.getCharacters()
})
</script>

<template>
  <main>
    <h1>API Рика и Морти</h1>

    <CharacterFiler @update:filter="store.updateFilter" />
    <section class="catalog">
      <div>
        <ul class="characters__list">
          <li v-for="character in store.characters" :key="character.id" class="characters__item">
            <CharacterItem :character="character" />
          </li>
        </ul>
      </div>

      <BasePagination
        :current-page="store.pagination.page"
        :total-pages="store.pagination.pages"
        @update:current-page="store.changePage"
      />
    </section>
  </main>
</template>
