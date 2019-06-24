<template lang="pug">
  .works-container
    .filter-container
      .filter-container__button(v-for="(c,i) in filterCategories")
        toggle-button(
          :label="c"
          v-model="filterActiveFlags[i]"
          :primaryColor="primaryColors[i]"
          :secondaryColor="secondaryColors[i]")
    .works-item-container
      transition-group(name="works-filter")
        nuxt-link.works-item(v-for="(w,i) in filteredData" :key="w.data.title" :to="`/works/${w.index}`")
          img.works-item__image(v-lazy="`/img/${w.data.img}`")
          .works-item__details
            .works-item__tags
              .works-item__tag(v-for="t in w.data.tags")
                small-tag(
                  :backgroundColor="secondaryColors[filterCategories.findIndex(e=>e===t)]"
                  :textColor="primaryColors[filterCategories.findIndex(e=>e===t)]")
                  | {{t}}
            .works-item__title
              | {{w.data.title}}
</template>

<script>
import ToggleButton from '@/components/ToggleButton'
import SmallTag from '@/components/SmallTag'
import worksData from '@/assets/works.json'

export default {
  name: 'Works',
  components: { ToggleButton, SmallTag },
  data() {
    return {
      worksData,
      filterCategories: ['Design', 'Web', 'Game'],
      filterActiveFlags: [false, false, false],
      primaryColors: ['#1D8522', '#092CA6', '#9511A0'],
      secondaryColors: ['#B0FFB4', '#B0C2FF', '#EBB0FF']
    }
  },
  computed: {
    filteredData() {
      const enabledFilter = this.filterCategories.filter(
        (e, index) => this.filterActiveFlags[index]
      )
      return this.worksData
        .map((w, i) => {
          return {
            data: w,
            index: i
          }
        })
        .filter(({ data, index }) => {
          if (this.filterActiveFlags.every(e => !e)) return true
          return enabledFilter.some(e => data.tags.includes(e))
        })
    }
  },
  methods: {
    getTagStyle(t) {
      return {
        color: this.primaryColors[this.filterCategories[t]],
        backgroundColor: this.secondaryColors[this.filterCategories[t]]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.works-container
.filter-container
  display: flex
  margin: 4px 0

  @extend %scroll-bar

.works-item-container
  padding-top: 12px
  position: relative

.works-item
  display: flex
  margin:
    bottom: 8px

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
      filter: blur(5px)

  &__details
    display: flex
    flex-flow: column
    padding:
      left: 12px

  &__tags
    padding: 4px 0 0

  &__tag
    display: inline-block
    font:
      size: 12px
      weight: bold
    margin-right: 4px

  &__title
    font:
      size: 16px
      weight: bold

.works-filter
  &-enter-active, &-leave-active, &-move
    transition: opacity .3s, transform .5s

  &-leave-active
    position: absolute

  &-enter, &-leave-to
    opacity: 0
</style>
