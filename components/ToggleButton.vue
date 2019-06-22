<template lang="pug">
  .button(:class="buttonClass" @click="handleClick" :style="buttonStyle")
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
    },
    primaryColor: {
      type: String,
      default: 'gray'
    },
    secondaryColor: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    buttonClass() {
      return {
        'is-active': this.value
      }
    },
    buttonStyle() {
      return {
        color: this.primaryColor,
        backgroundColor: this.secondaryColor
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
  transition: all .5s

  &.is-active
    opacity: 1
</style>
