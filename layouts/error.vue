<template lang="pug">
  div
    | {{error.statusCode}}
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    error: Object
  }
}
</script>
