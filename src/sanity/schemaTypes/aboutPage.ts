import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Page À Propos',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({ name: 'icon', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'text', type: 'string', validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderImage',
      title: 'Photo fondatrice',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'founderName', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'founderTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'founderQuote', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedName', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'paragraphs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'highlight', type: 'string' }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'missionVision',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: '🎯 Cible', value: 'target' },
                  { title: '👁️ Oeil', value: 'eye' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
  ],
})
