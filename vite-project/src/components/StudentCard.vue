<template>
  <div class="student-card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  student: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.student-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 10px;
  width: 200px;
  text-align: center;
}
</style>
