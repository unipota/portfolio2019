<template lang="pug">
  .profile-container
    img.profile-icon(src="~assets/uni_600.png")
    h4 > name
    h3 WATARU Yasunishi
    br
    h4 > screen name
    h3 unipota
    br
    h4 > location
    h3 Tokyo
    br
    h4 > education
    h3 Tokyo Institute of Technology,
      br
      | School of Computing (2016-20)
    br
    h4 > likes
    h3
      | Web programming / design,
      br
      | Game programming / playing,
      br
      | Logo design
    br
    h4 > email
    h3 contact&#064;unipota.me
    br
    h4 > GitHub
    h3
      a(href="https://github.com/unipota" target="_blank")
        | @unipota
        img.icon-link(src="~assets/OutLink.svg")
    br
    h4 > twitter
    h3
      a(href="https://twitter.com/unipota" target="_blank")
        | @unipota
        img.icon-link(src="~assets/OutLink.svg")
</template>

<style lang="sass" scoped>
.profile-container
  padding: 0 12px 12px

h4
  color: #8C8C8C

a
  color: #15436F
  display: inline-flex

.profile-icon
  display: block
  margin: 12px auto 24px
  width: 25%
  height: 25%
  border-radius: 100%
  animation: box-shadow .5s forwards .3s

@keyframes box-shadow
  from
    box-shadow: 0 0 0 0 rgba(35,202,192,0.3)
  to
    box-shadow: 0 4px 8px 0 rgba(35,202,192,0.3)

.icon-link
  margin-left: 12px
</style>
