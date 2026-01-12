import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'zonesInterventionSection',
  title: 'Section Zones d\'intervention',
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
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'zones',
      title: 'Zones d\'intervention',
      type: 'array',
      of: [{ type: 'zoneIntervention' }],
      validation: (Rule) => Rule.required().min(1)
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Zones d\'intervention',
        subtitle: 'Villes couvertes'
      }
    }
  }
})
