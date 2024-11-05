<template>
  <div class="students-view">
    <StudentCard
      v-for="student in students"
      :key="student"
      :student="student"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentCard from '@/components/StudentCard.vue'
import { getStudents } from '@/services/StudentService'

const students = ref([])

onMounted(() => {
  getStudents()
    .then(data => {
      students.value = data
    })
    .catch(error => {
      console.error('Failed to fetch students:', error)
    })
})
</script>

<style scoped>
.students-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
