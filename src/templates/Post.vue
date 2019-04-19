<template>
    <FeatureLayout>
        <h2 class="post-title">{{ $page.post.title }}</h2>
        <div class="markdown-body" v-html="$page.post.content" />
    </FeatureLayout>
</template>

<page-query>
    query Post ($path: String!) {
        post:  post( path: $path ) {
            title
            content
            excerpt
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {key: 'description', title: this.$page.post.title, content: this.$page.post.excerpt}
            ]
        }
    }
}
</script>

<style>
    .post-title {
        margin-left: 20px;
        color: var(--main);
    }

    @media screen and (max-width: 767px){
        .post-title {
            font-size: 1rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }

    
    .markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 0 45px;
        font-weight: bold;
	}

	@media (max-width: 850px) {
		.markdown-body {
			padding: 15px;
            font-size: .8rem;
            padding-top: 0!important;
		}

        .post-title {
            margin-bottom: 0;
        }
	}
</style>