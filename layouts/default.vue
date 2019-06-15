<template lang="pug">
  .container
    .hero-container
      .hero-logo
        img(src="~assets/u_logo.svg")
      .hero-title
        img(src="~assets/unipota.me.svg")
      .hero-text
        | I love design.
    .spacer(:style="spacerStyle")
    .window(v-if="!closed")
      .window__body
        .window__header
          .window__controller
            .window__controller-button--red(@click="close")
            .window__controller-button--yellow
            .window__controller-button--green(@click="fullScreen")
          .window__title
            transition-group(name="text")
              span(v-for="(t,i) in titleObjects[pageTitleIndex]" :key="t.id" v-text="t.text")
        .window__url-bar
          .window__url-bar-button(@click="reload")
            img(src="~assets/ReloadIcon.svg")
          nuxt-link(to="/")
            .window__url-bar-button
              img(src="~assets/HomeIcon.svg")
          input.window__url-bar-input(type="text" v-model.lazy="routePath")
        .window__tool-bar
          nuxt-link(to="profile") profile
          nuxt-link(to="works") works
          nuxt-link(to="skills") skills
        .window__content
          nuxt
    .footer
</template>

<script>
export default {
  name: 'DefaultRayout',
  data() {
    return {
      titles: ['ERROR', 'HOME', 'PROFILE', 'WORKS', 'SKILLS'],
      titleObjects: [],
      closed: false
    }
  },
  computed: {
    pageTitleIndex() {
      switch (this.routeName) {
        case 'index':
          return 1
        case 'profile':
          return 2
        case 'works':
          return 3
        case 'skills':
          return 4
      }
      return 0
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
    spacerStyle() {
      return {
        height: this.routePath === '/' ? '60vh' : '24px'
      }
    }
  },
  created() {
    this.titleObjects = this.titles.map(t => this.convText(t))
  },
  methods: {
    convText(text) {
      const words = {}
      const result = text.split('').map(t => {
        words[t] = words[t] ? ++words[t] : 1
        return { id: `${t}-${words[t]}`, text: t }
      })
      return Object.freeze(result)
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  min-height: 100vh
  width: 100vw
  height: 100vh
  overflow: scroll
  background: white linear-gradient(180deg, #23CAC0 0%, rgba(90, 206, 95, 0.3) 80%)
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

  .hero-logo

  .hero-title
    margin-top: 84px

  .hero-text
    color: white
    font-size: 1.5rem

.spacer
  transition: height 1.5s $easeInOutCubic

.window
  position: relative
  z-index: 10

  &__body
    width: 80vw
    height: 80vh
    margin: auto
    padding: 16px
    background: white
    border-radius: 16px
    box-shadow: 0px 12px 24px 0 rgba(0, 0, 0, 0.4)

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
    margin-top: 12px

  .window__content
    padding-top: 16px

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
