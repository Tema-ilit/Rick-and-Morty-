<script setup lang="ts">
import { ref } from 'vue'
defineEmits(['update:filter'])

const characterName = ref<string>()
const category = ref<string>('0')

const reset = () => {
  ;(characterName.value = ''), (category.value = '0')
}
</script>

<template>
  <h2>Фильтр</h2>
  <form action="" method="get" style="margin-bottom: 25px">
    <div>
      <legend class="form__legend">Имя</legend>
      <label class="form__label form__label--price">
        <input class="form__input" type="text" name="min-price" v-model="characterName" />
      </label>
      <select class="form__select" type="text" name="category" v-model="category">
        <option value="0">Все категории</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <button
        class="filter__submit button button--primery"
        type="submit"
        @click.prevent="$emit('update:filter', characterName, category)"
      >
        Применить
      </button>
      <button
        class="filter__reset button button--second"
        type="button"
        @click.prevent="$emit('update:filter'), reset()"
      >
        Сбросить
      </button>
    </div>
  </form>
</template>
