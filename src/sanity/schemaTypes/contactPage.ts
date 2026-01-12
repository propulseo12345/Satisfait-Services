import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Page Contact',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero', options: { collapsible: true, collapsed: false } },
    { name: 'form', title: 'Formulaire', options: { collapsible: true, collapsed: false } },
    { name: 'cards', title: 'Cartes de contact', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Section Hero',
      type: 'object',
      fieldset: 'hero',
      fields: [
        defineField({ name: 'badge', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'mainTitle', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'highlightedText', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', type: 'text', validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form',
      title: 'Configuration du formulaire',
      type: 'object',
      fieldset: 'form',
      fields: [
        defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', type: 'text', validation: (Rule) => Rule.required() }),
        defineField({
          name: 'fields',
          title: 'Champs du formulaire',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'placeholder', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({
                  name: 'type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Texte', value: 'text' },
                      { title: 'Email', value: 'email' },
                      { title: 'Téléphone', value: 'tel' },
                      { title: 'Sélection', value: 'select' },
                      { title: 'Zone de texte', value: 'textarea' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({ name: 'required', type: 'boolean', initialValue: true }),
                defineField({
                  name: 'options',
                  title: 'Options (pour select)',
                  type: 'array',
                  of: [{ type: 'string' }],
                  hidden: ({ parent }) => parent?.type !== 'select',
                }),
              ],
              preview: {
                select: { name: 'name', type: 'type', required: 'required' },
                prepare({ name, type, required }) {
                  return {
                    title: name,
                    subtitle: `${type}${required ? ' (requis)' : ''}`,
                  }
                },
              },
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: 'submitButton', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'privacyText', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'privacyLink', type: 'string', validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactCards',
      title: 'Cartes de contact',
      type: 'array',
      fieldset: 'cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: '📞 Téléphone', value: 'phone' },
                  { title: '📧 Email', value: 'mail' },
                  { title: '📍 Localisation', value: 'mapPin' },
                  { title: '🕐 Horloge', value: 'clock' },
                  { title: '💬 Message', value: 'messageCircle' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'value', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'subtitle', type: 'string' }),
          ],
          preview: {
            select: { label: 'label', value: 'value', icon: 'icon' },
            prepare({ label, value, icon }) {
              const icons = { phone: '📞', mail: '📧', mapPin: '📍', clock: '🕐', messageCircle: '💬' }
              return { title: label, subtitle: value, media: icons[icon as keyof typeof icons] }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page Contact',
        subtitle: 'Formulaire et coordonnées',
      }
    },
  },
})
