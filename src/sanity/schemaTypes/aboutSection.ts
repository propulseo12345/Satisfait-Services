import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'aboutSection',
  title: 'Section À Propos',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({ name: 'value', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'label', type: 'string', validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderImage',
      title: 'Photo fondatrice',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'founderName',
      title: 'Nom fondatrice',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderTitle',
      title: 'Titre fondatrice',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderQuote',
      title: 'Citation fondatrice',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainTitle',
      title: 'Titre principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Texte en surbrillance',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragraphe 1',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationHighlight',
      title: 'Localisation (surbrillance)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraphe 2',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Valeurs',
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
                  { title: '❤️ Coeur', value: 'heart' },
                  { title: '🛡️ Bouclier', value: 'shield' },
                  { title: '🏆 Trophée', value: 'award' },
                  { title: '🎯 Cible', value: 'target' },
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
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texte bouton CTA',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
