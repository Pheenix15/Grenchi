// schemaTypes/newsItem.ts
import { defineType, defineField } from 'sanity';

// defines the newsItem document type with proper sanity typing
export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'externalLink',
      title: 'Link to News Article',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedDate',
      title: 'Date Published',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayImage',
      title: 'Display Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    })
  ]
});