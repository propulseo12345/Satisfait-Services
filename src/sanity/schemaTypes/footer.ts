import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Pied de page',
  type: 'document',
  fieldsets: [
    { name: 'identity', title: 'Identité', options: { collapsible: true, collapsed: false } },
    { name: 'contact', title: 'Contact', options: { collapsible: true, collapsed: false } },
    { name: 'navigation', title: 'Navigation', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Texte du logo affiché en haut du footer',
      type: 'object',
      fieldset: 'identity',
      fields: [
        defineField({
          name: 'text',
          title: 'Texte principal',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'highlight',
          title: 'Texte en surbrillance',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Texte de présentation affiché sous le logo',
      type: 'text',
      fieldset: 'identity',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informations de contact',
      description: 'Liste des coordonnées affichées (téléphone, email, adresse)',
      type: 'array',
      fieldset: 'contact',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: '📞 Téléphone', value: 'phone' },
                  { title: '📧 Email', value: 'mail' },
                  { title: '📍 Localisation', value: 'mapPin' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Valeur',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
          ],
          preview: {
            select: { icon: 'icon', value: 'value' },
            prepare({ icon, value }) {
              const icons = { phone: '📞', mail: '📧', mapPin: '📍' }
              return { title: value, subtitle: icons[icon as keyof typeof icons] || icon }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigation',
      title: 'Liens de navigation',
      description: 'Menu de navigation du footer',
      type: 'array',
      fieldset: 'navigation',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'href',
              title: 'Lien',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
          ],
          preview: {
            select: { label: 'label', href: 'href' },
            prepare({ label, href }) {
              return { title: label, subtitle: href }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Horaires d\'ouverture',
      description: 'Horaires affichés dans le footer',
      type: 'array',
      fieldset: 'navigation',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Jour',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'time',
              title: 'Horaire',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
          ],
          preview: {
            select: { day: 'day', time: 'time' },
            prepare({ day, time }) {
              return { title: day, subtitle: time }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pied de page',
        subtitle: 'Visible sur toutes les pages'
      }
    }
  }
})
