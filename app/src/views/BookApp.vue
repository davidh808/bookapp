<template>
  <div class="bookapp">
    <Books/>
  </div>
</template>

<script>
import Books from '@/components/Books.vue';

export default {
  name: 'BookApp',
  components: {
    Books,
  },
};
</script>
