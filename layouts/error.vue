<template lang="pug">
  .error-page-container
    .error-code
      | {{error.statusCode}}
    .error-detail
      | {{errorMessage}}
    .error-background
      .error-background__line-1
      .error-background__line-2
      .error-background__line-3
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    error: Object
  },
  computed: {
    errorMessage() {
      return this.error.statusCode === 404 ? 'Not Found' : 'Error'
    }
  }
}
</script>

<style lang="sass" scoped>
.error-page-container
  position: relative

.error-code
  margin-top: 48px
  text-align: center
  font:
    size: 4em
    weight: bold
  color: #C12D62

.error-detail
  margin-top: 12px
  text-align: center
  font:
    size: 2em
    weight: bold
  color: #C12D62

.error-background
  position: absolute
  top: 0
  width: 100%
  height: 100%

  %__line
    position: absolute
    height: 20px
    background: rgba(192,45,98,0.4)
    border-radius: 9999px

    &::before
      position: absolute
      right: 0
      content: ''
      display: block
      background: rgba(192,45,98,0.4)
      width: 20px
      height: 20px
      border-radius: 100%
      transform: translateX(-100%) translate(100%)

  &__line-1
    @extend %__line
    width: 100px
    top: -10%

  &__line-2
    @extend %__line
    width: 120px
    top: 100%
    left: 10%

  &__line-3
    @extend %__line
    width: 70px
    top: 10%
    left: 70%
</style>
