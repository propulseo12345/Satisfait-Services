import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'prestationsPage',
  title: 'Page Prestations',
  type: 'document',
  preview: {
    select: {
      title: 'cta.mainTitle',
    },
    prepare({ title }) {
      return {
        title: 'Page Prestations',
        subtitle: title || 'Configuration de la page',
      }
    },
  },
  fields: [
    defineField({
      name: 'cta',
      title: 'Section CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Prêt à commencer ?',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'mainTitle',
          title: 'Titre principal',
          type: 'string',
          initialValue: 'Offrez-vous un intérieur',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'highlightedText',
          title: 'Mot en couleur',
          type: 'string',
          initialValue: 'impeccable',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Devis gratuit et personnalisé. Intervention à Jurançon, Pau et dans les Pyrénées-Atlantiques.',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'buttons',
          title: 'Boutons',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Texte',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'type',
                  title: 'Type',
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
                  title: 'Icône',
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
          initialValue: [
            { text: 'Demander un devis', type: 'primary', icon: 'arrowRight' },
            { text: 'Nous appeler', type: 'secondary', icon: 'phone' },
          ],
          validation: (Rule) => Rule.required().min(1).max(2),
        }),
        defineField({
          name: 'contactInfo',
          title: 'Informations de contact',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'value',
                  title: 'Valeur',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Icône',
                  type: 'string',
                  options: {
                    list: [
                      { title: '📞 Téléphone', value: 'phone' },
                      { title: '💬 WhatsApp', value: 'messageCircle' },
                      { title: '📧 Email', value: 'mail' },
                      { title: '📍 Zone', value: 'mapPin' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          initialValue: [
            { label: 'Téléphone', value: '+33 7 69 64 07 24', icon: 'phone' },
            { label: 'WhatsApp', value: '+33 7 69 64 07 24', icon: 'messageCircle' },
            { label: 'Email', value: 'satisfaitservice@gmail.com', icon: 'mail' },
            { label: 'Zone d\'intervention', value: 'Pau & environs (30km)', icon: 'mapPin' },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
})
