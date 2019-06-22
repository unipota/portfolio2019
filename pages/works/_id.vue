<template lang="pug">
  .work-detail-container
    .work-icon
      img(v-lazy="`/img/${data.img}`")
    .work-title {{data.title}}
    .work-desc(v-html="data.desc")
    .work-links
      a(v-for="l in data.links" :href="l.url" target="_blank")
        | {{l.text}}
        img.icon-link(src="~assets/OutLink.svg")
    .work-subimages-container
      .work-subimage(v-for="i in data.subimgs" v-lazy:background-image="`/img/${i}`")
</template>

<script>
import worksData from '@/assets/works.json'

export default {
  name: 'WorksDetail',
  transition: 'works-detail',
  computed: {
    id() {
      return this.$route.params.id
    },
    data() {
      return worksData[this.id]
    }
  }
}
</script>

<style lang="sass" scoped>
.work-detail-container
  padding: 0 12px 0

.work-icon
  display: flex
  justify-content: center
  align-items: center
  margin: 0 auto 0
  width: 60%
  min-height: 120px

  img
    width: 100%
    border-radius: 8px
    transition: all 1s
    filter: blur(0)

    &[lazy=loading], &[lazy=error]
      filter: blur(5px)

.work-title
  font:
    size: 20px
    weight: bold
  text-align: center

.work-desc
  margin-top: 12px

.work-links
  margin-top: 12px
  color: #15436F
  font:
    weight: bold

  a
    display: inline-flex

  .icon-link
    margin-left: 12px

.work-subimages-container
  padding: 12px 0

.work-subimage
  margin: 0 auto 18px
  width: 60%
  min-height: 150px
  background:
    position: center
    size: contain
  border-radius: 8px
  transition: all 1s
  filter: blur(0)

  &[lazy=loading], &[lazy=error]
    filter: blur(5px)
</style>
