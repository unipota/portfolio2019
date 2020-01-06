<template lang="pug">
  .skills-container
    .skill-item
      .skill-item__icon
        img(src="~assets/vue.svg")
      .skill-item__title Vue.js
    .skill-item
      .skill-item__icon
        img(src="~assets/react.svg")
      .skill-item__title React
    .skill-item
      .skill-item__icon
        img(src="~assets/sass.svg")
      .skill-item__title Sass
    .skill-item
      .skill-item__icon
        img(src="~assets/ts.png")
      .skill-item__title TypeScript
    .skill-item
      .skill-item__icon
        img(src="~assets/php.svg")
      .skill-item__title PHP
    .skill-item
      .skill-item__icon
        img(src="~assets/go.svg")
      .skill-item__title Go
    .skill-item
      .skill-item__icon
        img(src="~assets/git.png")
      .skill-item__title Git
    .skill-item
      .skill-item__icon
        img(src="~assets/figma.svg")
      .skill-item__title Figma
    .skill-item
      .skill-item__icon
        img(src="~assets/adobe-illustrator-cc.svg")
      .skill-item__title Illustrator
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="sass" scoped>
.skills-container
  padding:
    top: 12px
    bottom: 64px
  display: flex
  flex-wrap: wrap

.skill-item
  width: 50%
  margin-bottom: 24px

  &__icon
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto 0
    width: 50%
    height: 60px

    img
      object-fit: contain
      max-width: 100%
      max-height: 100%

  &__title
    padding-top: 4px
    font:
      weight: bold
    text-align: center
</style>
