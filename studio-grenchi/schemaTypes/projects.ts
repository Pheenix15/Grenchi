// schemaTypes/project.ts
import { defineType, defineField, defineArrayMember } from 'sanity';

// defines the project document type with proper sanity typing
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'hasArticle',
      title: 'Has Article?',
      type: 'boolean',
      initialValue: false,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (top of article, only used if project has an article)',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      // for projects that don't have an article, use a YouTube video as the thumbnail instead
      name: 'youtubeEmbed',
      title: 'YouTube Embed Code (for projects with no article, video acts as thumbnail)',
      type: 'text'
    }),
    defineField({
      name: 'body',
      title: 'Body (leave empty if project has no article)',
      type: 'array',
      // defineArrayMember gives each array item type proper typing too
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'caption', type: 'string', title: 'Caption' })
          ]
        }),
        defineArrayMember({
          type: 'object',
          name: 'youtube',
          title: 'YouTube Video',
          fields: [
            defineField({ name: 'YoutubeEmbed', type: 'text', title: 'YouTube Embed code (paste the full iframe embed code)' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' })
          ]
        })
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery (optional, scrolls at end of article)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true }
        })
      ]
    })
  ]
});