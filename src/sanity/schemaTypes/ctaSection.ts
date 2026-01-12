import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Section CTA (Page À Propos)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedText', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'buttons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'Primaire', value: 'primary' },
                  { title: 'Secondaire', value: 'secondary' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: '→ Flèche droite', value: 'arrowRight' },
                  { title: '📞 Téléphone', value: 'phone' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
    defineField({
      name: 'contactInfo',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'value', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: '📞 Téléphone', value: 'phone' },
                  { title: '💬 Message', value: 'messageCircle' },
                  { title: '📧 Email', value: 'mail' },
                  { title: '📍 Localisation', value: 'mapPin' },
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
