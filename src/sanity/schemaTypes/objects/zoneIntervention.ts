import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'zoneIntervention',
  title: 'Zone d\'intervention',
  type: 'object',
  fields: [
    defineField({
      name: 'ville',
      title: 'Ville',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
  ],
  preview: {
    select: { ville: 'ville', description: 'description' },
    prepare({ ville, description }) {
      return { title: ville, subtitle: description }
    }
  }
})
