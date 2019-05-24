<template>
  <div class="home">
    <!-- <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </div> -->

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      > 
        <img :src="feature.imageUrl">
        <div class="title">
          <h2>{{ feature.title }}</h2>
        </div>
      </div>
    </div>

    <Content custom/>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue'

export default {
  components: { NavLink },
  created () {
    console.log(this.$page.frontmatter.features)
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'
@import '../styles/theme.styl'

.home
  padding $navbarHeight 10rem
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    margin-top 2.5rem
    display grid
    grid-template-columns repeat(auto-fit, minmax(400px, 1fr))
    grid-gap 1em
    overflow hidden
  .feature
    grid-column 1 / -1
    background #fff
    border-radius 8px
    display inline-block
    position relative
    border 1px solid #efefef
    box-shadow 2px 4px 10px rgba(0,0,0,.025)
    transition all 0.3s cubic-bezier(.25,.8,.25,1)
    &:hover
      box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    img
      width 100%
      height auto
    .title
      padding 1em
      h2
        font-size 2rem
        font-weight 500
        border-bottom none
        padding-bottom 0
        margin 0
        color lighten($textColor, 10%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    padding-left 1.2rem
    padding-right 1.2rem
    .features
      flex-direction column
    .feature
      max-width 100%

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
