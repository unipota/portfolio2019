<template lang="pug">
  .small-tag(:style="tagStyle")
    slot
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: 'gray'
    },
    backgroundColor: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    tagStyle() {
      return {
        color: this.textColor,
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.small-tag
  width: 50px
  height: 14px
  text-align: center
  border-radius: 9999px
</style>
