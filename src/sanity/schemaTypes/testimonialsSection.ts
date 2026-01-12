import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'testimonialsSection',
  title: 'Section Témoignages',
  type: 'document',
  fields: [
    defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'quote', type: 'text', validation: (Rule) => Rule.required() }),
            defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'role', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'rating', type: 'number', validation: (Rule) => Rule.required().min(1).max(5) }),
            defineField({ name: 'avatar', type: 'string', validation: (Rule) => Rule.required().length(1) }),
          ],
          preview: {
            select: { name: 'name', role: 'role', rating: 'rating' },
            prepare({ name, role, rating }) {
              return { title: name, subtitle: `${role} - ${rating}⭐` }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Section Témoignages', subtitle: 'Avis clients' }
    }
  }
})
