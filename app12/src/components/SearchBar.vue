<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    name: 'SearchBar',
    setup() {
        const search = ref('');
        const router = useRouter();
        const searchForItems = () => {
            if (search.value) {
                router.push(`/items/${search.value}`);
                search.value = '';
            }
        };
        return { search, searchForItems };
    }
}
</script>

<template>
    <form @submit.prevent="searchForItems">
        <input v-model="search" type="text" placeholder="Search for items...">
        <button type="submit">Search</button>
    </form>
</template>