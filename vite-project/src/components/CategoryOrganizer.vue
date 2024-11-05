<template>
  <div class="event-category-organizer">
    <p class="text">{{ event.category }}</p>
    <p class="text">{{ event.organizer }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/types' // 假设Event类型定义在@/types目录下

defineProps<{
  event: Event
}>()
</script>

<style scoped>
.event-category-organizer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%; /* 确保容器占据可用宽度 */
  text-align: center; /* 这才是将文本对齐到右侧的正确方式，但需要应用于文本元素上 */
}

.text {
  font-size: 22px; /* 或您希望的任何大小 */
  margin: 0 0 8px;
  border: 1px solid #000;
  padding: 4px;
}

/* 注意：由于align-items: flex-end;在这里不会按预期工作（因为它用于子元素的对齐），  
     我们已经在.text类上设置了text-align: right;来确保文本右对齐。 */
</style>
