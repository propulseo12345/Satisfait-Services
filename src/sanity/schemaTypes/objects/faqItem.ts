import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'Question FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'reponse',
      title: 'Réponse',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
  ],
  preview: {
    select: { question: 'question' },
    prepare({ question }) {
      return { title: question }
    }
  }
})
