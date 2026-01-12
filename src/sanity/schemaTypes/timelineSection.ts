import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'timelineSection',
  title: 'Section Timeline (Page À Propos)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedText', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'milestones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'year', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'shortYear', type: 'string', validation: (Rule) => Rule.required().max(2) }),
            defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'position',
              type: 'string',
              options: {
                list: [
                  { title: 'Gauche', value: 'left' },
                  { title: 'Droite', value: 'right' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
