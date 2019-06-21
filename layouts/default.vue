<template lang="pug">
  .container(:style="containerStyle")
    .hero-container
      .hero-logo(@click="closed=false")
        img(src="~assets/u_logo.svg")
      .hero-title
        img(src="~assets/unipota.me.svg")
      .hero-text
        | I love design.
      .hero-background
    .spacer(:style="spacerStyle")
    .window(v-if="!closed")
      .window__body(:class="windowBodyClass")
        .window__header
          .window__controller
            .window__controller-button--red(@click="close")
            .window__controller-button--yellow
            .window__controller-button--green(@click="fullScreen")
          .window__title
            | {{titles[pageTitleIndex]}}
        .window__url-bar
          .window__url-bar-button(@click="reload")
            img(src="~assets/ReloadIcon.svg")
          nuxt-link.window__url-bar-button(to="/")
              img(src="~assets/HomeIcon.svg")
          input.window__url-bar-input(type="text" v-model.lazy="routePath")
        flipper.window__tool-bar--expanded(:flipKey="toolbarExpanded" v-if="toolbarExpanded")
          .window__link-item
            flipped(flipId="link-item-profile-icon")
              nuxt-link.window__link-button--profile(to="profile")
                img(src="~assets/IconProfile.svg")
            flipped(flipId="link-item-profile-label")
              span.window__link-label
                | profile
          .window__link-item
            flipped(flipId="link-item-skills-icon")
              nuxt-link.window__link-button--skills(to="skills")
                img(src="~assets/IconSkill.svg")
            flipped(flipId="link-item-skills-label")
              span.window__link-label
                | skills
          .window__link-item
            flipped(flipId="link-item-works-icon")
              nuxt-link.window__link-button--works(to="works")
                img(src="~assets/IconWork.svg")
            flipped(flipId="link-item-works-label")
              span.window__link-label
                | works
        flipper.window__tool-bar(:flipKey="toolbarExpanded" v-else)
          nuxt-link.window__link-item(to="profile")
            flipped(flipId="link-item-profile-icon")
              .window__link-button--profile
                img(src="~assets/IconProfile.svg")
            flipped(flipId="link-item-profile-label")
              span.window__link-label
                | profile
          nuxt-link.window__link-item(to="skills")
            flipped(flipId="link-item-skills-icon")
              .window__link-button--skills
                img(src="~assets/IconSkill.svg")
            flipped(flipId="link-item-skills-label")
              span.window__link-label
                | skills
          nuxt-link.window__link-item(to="works")
            flipped(flipId="link-item-works-icon")
              .window__link-button--works
                img(src="~assets/IconWork.svg")
            flipped(flipId="link-item-works-label")
              span.window__link-label
                | works
        .window__content
          transition(name="layout" mode="out-in")
            nuxt
</template>

<script>
import Color from 'color'
import TWEEN from '@tweenjs/tween.js'

import { Flipper, Flipped } from 'vue-flip-toolkit'

export default {
  name: 'DefaultRayout',
  components: { Flipper, Flipped },
  data() {
    return {
      isMobile: false,
      titles: ['ERROR', 'HOME', 'PROFILE', 'WORKS', 'SKILLS'],
      closed: false,
      allowScroll: false,
      topColor: Object,
      tweenedTopColor: Object,
      bottomColor: Object,
      windowExpanded: false,
      toolbarExpanded: true
    }
  },
  computed: {
    pageTitleIndex() {
      const index = ['index', 'profile', 'works', 'skills'].findIndex(
        s => s === this.routeName
      )
      return index !== -1 ? index + 1 : 0
    },
    routeName() {
      return this.$route.name
    },
    routePath: {
      get() {
        return this.$route.path
      },
      set(to) {
        this.$router.push(to)
      }
    },
    containerStyle() {
      return {
        overflowY: this.allowScroll ? 'scroll' : 'hidden',
        background: `white linear-gradient(180deg, ${Color(
          this.tweenedTopColor
        ).rgb()} 0%, ${Color(this.bottomColor)
          .alpha(0.3)
          .rgb()} 80%)`
      }
    },
    spacerStyle() {
      return {
        height: this.routePath === '/' ? 'calc(100vh - 250px)' : '3vh'
      }
    },
    windowBodyClass() {
      return {
        'window--expanded': this.windowExpanded
      }
    },
    toolbarClass() {
      return {
        'toolbar--expanded': this.toolbarExpanded
      }
    }
  },
  watch: {
    topColor() {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween(this.tweenedTopColor).to(this.topColor, 750).start()

      animate()
    },
    routePath: {
      handler(to) {
        switch (to) {
          case '/':
            this.topColor = { r: 35, g: 202, b: 192 }
            this.windowExpanded = false
            this.toolbarExpanded = true
            break
          case '/profile':
            this.topColor = { r: 245, g: 146, b: 146 }
            this.windowExpanded = true
            this.toolbarExpanded = false
            break
          case '/skills':
            this.topColor = { r: 62, g: 156, b: 208 }
            this.windowExpanded = true
            this.toolbarExpanded = false
            break
          case '/works':
            this.topColor = { r: 236, g: 54, b: 240 }
            this.windowExpanded = true
            this.toolbarExpanded = false
            break
          default:
            this.topColor = { r: 208, g: 62, b: 62 }
            this.windowExpanded = true
            this.toolbarExpanded = false
        }
      },
      immediate: true
    }
  },
  created() {
    this.bottomColor = { r: 90, g: 206, b: 95 }
    this.tweenedTopColor = Object.assign({}, this.topColor)
  },
  methods: {
    handleWindowResize(e) {
      this.mql = e
    },
    fullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
    },
    close() {
      this.closed = true
    },
    reload() {
      location.reload(false)
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  position: absolute
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  min-height: 100vh
  width: 100%
  height: 100%
  overflow-x: hidden
  transition: all .5s

  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar:horizontal
    display: none
  &::-webkit-scrollbar-button
    display: none
  &::-webkit-scrollbar-piece
    background: #eee
  &::-webkit-scrollbar-piece:start
    background: #eee
  &::-webkit-scrollbar-thumb
    background: rgba(255,255,255,0.5)
    border-radius: 999px
  &::-webkit-scrollbar-corner
    background: #333

.hero-container
  position: fixed
  z-index: 1
  top: 10vw
  left: 10vw
  pointer-events: none
  // overflow: hidden

  .hero-logo

  .hero-title
    margin-top: 16vh

  .hero-text
    color: white
    font-size: 1.5rem

  .hero-background

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

.spacer
  transition: height 1.5s $easeInOutCubic

.window
  position: relative
  z-index: 10
  +mq(pc)
    position: absolute
    right: 10vw
    top: 12vh

  &__body
    display: flex
    flex-flow: column
    width: 80vw
    height: 94vh
    margin: auto
    padding: 16px
    background: white
    border-radius: 16px
    box-shadow: 0px 12px 24px 0 rgba(0, 0, 0, 0.4)
    transition: all .5s $authenticMotion
    +mq(pc)
      width: 40vw
      height: 70vh
      min-height: 500px
      max-width: 400px

    &.window--expanded
      +mq(sp)
        width: calc(100vw - 32px)

  &__header
    width: 100%
    position: relative

  &__controller
    display: inline-block
    position: absolute
    left: 2px
    top: 50%
    transform: translateY(-50%)

  &__title
    text-align: center
    font:
      size: 20px
      weight: 700
    height: 25px
    color: #8C8C8C

  %__controller-button
    display: inline-block
    width: 12px
    height: 12px
    border-radius: 12px
    margin:
      right: 12px
    cursor: pointer

  &__controller-button
    @extend %__controller-button

    &--red
      @extend %__controller-button
      background: #EB3A2F

    &--yellow
      @extend %__controller-button
      background: #EBC12F

    &--green
      @extend %__controller-button
      background: #2FEBC9

  &__url-bar
    display: flex
    align-items: center
    padding:
      top: 12px
      left: 4px
      right: 4px

  &__url-bar-button
    @extend %flex-center
    margin-right: 12px
    width: 18px
    cursor: pointer
    border-radius: 100%
    position: relative

    &::before
      content: ''
      display: block
      position: absolute
      width: 28px
      height: 28px
      border-radius: 100%
      transition: all .5s

    &:hover::before
      background: rgba(0,0,0,0.1)

  &__url-bar-input
    flex: 1
    min-width: 0
    font:
      size: 14px
      weight: 700
    color: #8c8c8c
    background: #EFEFEF
    border:
      radius: 9999px
    margin:
      left: 2px
      right: 4px
    padding:
      top: 4px
      left: 18px
      bottom: 4px
    transition: all .5s

    &:hover
      background: #d6d6d6

    &:focus
      background: #EFEFEF
      outline: none
      box-shadow: 0 0 0 2px #2FEBC9

  .window__tool-bar
    display: flex
    justify-content: flex-start
    margin-top: 4px
    padding: 12px 2px 0

    .window__link-item
      display: flex
      flex-flow: row
      align-items: center
      margin: 0 12px 0 0px

    .window__link-label
      display: inline-block
      margin-left: 6px
      width: 100%
      text-align: center
      color: #8c8c8c
      font:
        size: 0.9em
        weight: bold

    %__link-button
      flex-shrink: 0
      display: flex
      width: 24px
      height: 24px
      border-radius: 100%
      justify-content: center
      align-items: center

      img
        width: 50%
        height: auto

    .window__link-button--profile
      @extend %__link-button
      background: #F59292

    .window__link-button--skills
      @extend %__link-button
      background: #77B6F0

    .window__link-button--works
      @extend %__link-button
      background: #ED92F5

  .window__tool-bar--expanded
    display: flex
    justify-content: center
    margin-top: 4px
    padding: 24px 8px 0

    .window__link-item
      display: flex
      flex-flow: column
      margin: 0 12px 0

    .window__link-label
      margin-top: 12px
      display: inline-block
      width: 100%
      text-align: center
      font:
        weight: bold

    %__link-button
      display: flex
      width: 60px
      height: 60px
      border-radius: 100%
      justify-content: center
      align-items: center

    .window__link-button--profile
      @extend %__link-button
      background: #F59292

    .window__link-button--skills
      @extend %__link-button
      background: #77B6F0

    .window__link-button--works
      @extend %__link-button
      background: #ED92F5

  .window__content
    margin-top: 16px
    flex: 1
    overflow:
      x: hidden
      y: scroll

    @extend %scroll-bar

.footer
  height: 64px

.text
  &-enter-active, &-leave-active, &-move
    transition: all 1s
  &-leave-active
    position: absolute
  &-enter, &-leave-to
    opacity: 0
</style>
