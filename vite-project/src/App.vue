<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
const pageSize = ref<number | string>(2)

const route = useRoute()
const router = useRouter()
const updateRoute = (newSize: number) => {
  router.push({
    name: route.name,
    query: { ...route.query, size: newSize },
  })
}
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink v-bind:to="{ name: 'event-list-view' }">Event</RouterLink>
          | <RouterLink v-bind:to="{ name: 'about' }">About</RouterLink> |
          <RouterLink v-bind:to="{ name: 'students' }">Student</RouterLink>
          <div class="page-size-selector">
            <label for="pageSize">Events per page:</label>
            <select
              id="pageSize"
              v-model="pageSize"
              @change="updateRoute(parseInt(pageSize))"
            >
              <option value="2">default</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
