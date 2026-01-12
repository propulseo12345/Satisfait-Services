import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'valuesSection',
  title: 'Section Valeurs (Page À Propos)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedText', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'values',
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
                  { title: '❤️ Cœur', value: 'heart' },
                  { title: '🛡️ Bouclier', value: 'shield' },
                  { title: '🏆 Trophée', value: 'award' },
                  { title: '✨ Étoiles', value: 'sparkles' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bgColor',
              type: 'string',
              options: {
                list: [
                  { title: 'Rose', value: 'pink' },
                  { title: 'Bleu', value: 'blue' },
                  { title: 'Jaune', value: 'yellow' },
                  { title: 'Violet', value: 'purple' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
  ],
})
