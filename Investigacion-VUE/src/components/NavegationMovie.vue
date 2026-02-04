<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navigation-movie">
        <h1>Navigation Movie</h1>
        <RouterLink class="link" to="/movie">Movie</RouterLink>
        <RouterLink class="link" to="/all-movies">All Movies</RouterLink>
        <RouterLink class="link" to="/create-movie">Create Movie</RouterLink>
    </div>
</template>

<style scoped>
    h1 {
        color: red;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
    .link {
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
    .navigation-movie {
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
</style>