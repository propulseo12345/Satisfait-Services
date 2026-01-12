import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Section Statistiques',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la section',
      type: 'string',
      description: 'Ex: Satisfait Services en',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionHighlight',
      title: 'Texte en surbrillance',
      type: 'string',
      description: 'Le texte qui apparaît en bleu (ex: quelques chiffres)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      description: 'Ex: Des résultats qui témoignent de notre engagement',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Valeur',
              type: 'string',
              description: 'Ex: 100%, 50+, 24h, 30km',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Ex: Clients satisfaits',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Ex: Notre priorité',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: '⭐ Étoile', value: 'star' },
                  { title: '👥 Utilisateurs', value: 'users' },
                  { title: '🕒 Horloge', value: 'clock' },
                  { title: '📍 Localisation', value: 'mapPin' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
              icon: 'icon',
            },
            prepare({ title, subtitle, icon }) {
              const iconMap: Record<string, string> = {
                star: '⭐',
                users: '👥',
                clock: '🕒',
                mapPin: '📍',
              }
              return {
                title,
                subtitle,
                media: iconMap[icon] ? undefined : undefined,
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
})
