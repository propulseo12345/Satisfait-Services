import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqSection',
  title: 'Section FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mainTitle',
      title: 'Titre principal',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'highlightedText',
      title: 'Texte en surbrillance',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'faqItems',
      title: 'Questions FAQ',
      type: 'array',
      of: [{ type: 'faqItem' }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'ctaCard',
      title: 'Carte CTA',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'buttonText', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'buttonLink', type: 'string', validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required()
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Section FAQ',
        subtitle: 'Questions fréquentes'
      }
    }
  }
})
