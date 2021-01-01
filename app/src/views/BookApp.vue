<template>
  <div class="bookapp">
    <Books msg="This is the Book App page!"/>
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
