<template lang="pug">
  div
    .filter-container
      .filter-container__button(v-for="(c,i) in filterCategories")
        toggle-button(:label="c" v-model="filterActiveFlags[i]")
    .works-container
      .works-item(v-for="w in data")
        img.works-item__image(v-lazy="`img/${w.img}`")
        .works-item__details
          .works-item__tags
            .works-item__tag(v-for="t in w.tags")
              | {{t}}
          .works-item__title
            | {{w.title}}
</template>

<script>
import ToggleButton from '@/components/ToggleButton'
import worksData from '@/assets/works.json'

export default {
  name: 'Works',
  components: { ToggleButton },
  data() {
    return {
      data: worksData,
      filterCategories: ['UI', 'Logo', 'Game'],
      filterActiveFlags: [false, false, false]
    }
  }
}
</script>

<style lang="sass" scoped>
.filter-container
  display: flex
  margin: 4px 0
  overflow:
    x: scroll
    y: hidden

  @extend %scroll-bar

.works-container
  padding-top: 12px

.works-item
  display: flex

  &__image
    object-fit: contain
    flex-shrink: 0
    width: 80px
    height: 80px
    border:
      radius: 8px
    transition: all 1s
    filter: blur(0)
    background: rgba(0,0,0,0)

    &[lazy=loading], &[lazy=error]
      background: linear-gradient(136.09deg, #F9F9F9 9.98%, #E1E1E1 99.22%)
      filter: blur(3px)

  &__details
    display: flex
    flex-flow: column
    padding:
      left: 12px

  &__tags
    padding: 4px 0

  &__tag
    display: inline-block
    font:
      size: 12px
      weight: bold

  &__title
    font:
      size: 16px
      weight: bold
</style>
