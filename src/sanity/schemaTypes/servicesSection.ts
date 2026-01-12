import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export default defineType({
  name: 'servicesSection',
  title: 'Section Services',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la section',
      type: 'string',
      description: 'Ex: Des services pensés pour',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionHighlight',
      title: 'Texte en surbrillance',
      type: 'string',
      description: 'Le texte qui apparaît en dégradé (ex: votre bien-être)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Description de la section',
      type: 'text',
      rows: 2,
      description: 'Ex: Une gamme complète de prestations...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texte du bouton CTA',
      type: 'string',
      description: 'Ex: Voir toutes nos prestations',
      initialValue: 'Voir toutes nos prestations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayedServices',
      title: 'Services affichés',
      type: 'array',
      description: 'Sélectionner les services à afficher (max 5 recommandé)',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'serviceCard' }],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'sectionDescription',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Section Services - Accueil',
        subtitle: `${title} ${subtitle}`,
      }
    },
  },
})
