import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Icharacters } from '@/types/characters'
import type { IPagination } from '@/types/pagination'
import axios from 'axios'

export const usecharacterStore = defineStore('character', () => {
  const BaseUrl = 'https://rickandmortyapi.com/api/character'
  const characters = ref<Icharacters[]>([])
  const pagination = ref<IPagination>({
    page: 1,
    pages: 0,
    total: 0,
    next: '',
    prev: ''
  })

  const getCharacters = async (page?: number, name?: string, status?: string) => {
    try {
      const { data } = await axios.get(BaseUrl, {
        params: { page: page, name: name, status: status }
      })

      characters.value = data.results
      pagination.value = {
        page: page || 1,
        pages: data.info.pages,
        total: data.info.count,
        next: data.info.next,
        prev: data.info.prev
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateFilter = async (characterName: string, category: string) => {
    if (category === '0') {
      category = ''
      await getCharacters(1, characterName, category)
    } else {
      await getCharacters(1, characterName, category)
    }
  }

  const changePage = async (page: number) => {
    if (page !== pagination.value.page) {
      await getCharacters(page)
    }
  }

  return { characters, pagination, getCharacters, updateFilter, changePage }
})
