<script>
export default {
    name: 'BlogPostPreview',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.item.frontmatter.date)
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            } 

            return dateFormat.toLocaleDateString('en-US', options)
        }
    },

    data () {
        return {
            img: require('../public/bg.jpg')
        }
    }
}
</script>

<template>
	<article>
        <div :style="{ backgroundImage: 'url(' + img + ')', backgroundRepeat: 'no-repeat' ,backgroundSize: 'cover', backgroundPosition: 'center top', height: '100%' }"></div>
        <!-- <img src="../theme/assets/bg.jpg" alt=""> -->
        <div class="bottom-box">
            title
        </div>
        <!-- <time>{{ formatPublishDate }}</time>
        <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
        <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>
        <p v-if="item.readingTime">Estimated time: {{ item.readingTime.text }}</p>
        <router-link class="button blog-post__button" :to="item.path">Read More ></router-link> -->
    </article>
</template>

<style lang="scss" scoped>
@import '../theme/styles/_variables.scss';
article {
    position: relative;
    height: 200px;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        max-height: 200px;
    }
    .bottom-box {
        position: absolute;
        background-color: rgba(0,0,0,0.4);
        width: 100%;
        height: 5rem;
        color: $white-color;
        bottom: 0;
        overflow-wrap: break-word;
        padding: .5rem 1rem;
    }
}
.blog-post__button {
	margin-bottom: 1.5rem;
	display: inline-block;
}

.blog-post__title {
	margin-top: 0.5rem;
}

.button {
	border: 1px solid #32c8cf;
	border-radius: 4px;
	color: #32c8cf;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.tag-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-bottom: 25px;
}

.tag-list__item {
    margin-left: 10px;
}

.tag-list__item:first-child {
    margin-left: 0;
}

.tag-list__btn {
    padding: 5px;
    font-size: 0.9rem;
    background-color: #fff;
}
</style>
