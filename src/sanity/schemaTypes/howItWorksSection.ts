import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'howItWorksSection',
  title: 'Section Comment ça fonctionne',
  type: 'document',
  fields: [
    defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedText', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: '📞 Téléphone', value: 'phone' },
                  { title: '📄 Document', value: 'fileText' },
                  { title: '📅 Calendrier', value: 'calendar' },
                  { title: '✨ Étoile', value: 'sparkles' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bgColor',
              type: 'string',
              options: {
                list: [
                  { title: 'Bleu', value: 'blue' },
                  { title: 'Violet', value: 'purple' },
                  { title: 'Vert', value: 'green' },
                  { title: 'Orange', value: 'orange' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
})
