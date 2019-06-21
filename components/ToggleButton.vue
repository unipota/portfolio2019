<template lang="pug">
  .button(:class="buttonClass" @click="handleClick")
    | {{label}}
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass() {
      return {
        'is-active': this.value
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  font:
    weight: bold
  margin-right: 4px
  padding: 2px 16px
  background: #B0FFB4
  border-radius: 9999px
  cursor: pointer
  opacity: 0.3
  user-select: none

  &.is-active
    opacity: 1
</style>
