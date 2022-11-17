<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

const { path } = useRoute()

const baseSlug = path.replace('/blog', '');

interface MyCustomParsedContent extends MarkdownParsedContent {
  title: string;
  description: string;
  publishedDate: number;
}

const { data: blogEntries } = await useAsyncData('blogEntries', () => queryContent<MyCustomParsedContent>().find())
const { data } = await useAsyncData('home', () => queryContent<MyCustomParsedContent>('/').where({ _path: baseSlug }).only(['title', 'description', 'publishedDate', 'body']).findOne())
console.log({path}, data)
</script>

<template>
  <nav>
    <li v-for="entry in blogEntries">
      <NuxtLink :href="'/blog' + entry._path">{{entry.title}}</NuxtLink>
    </li>
  </nav>
  <h1>{{data?.title}}</h1>

</template>
