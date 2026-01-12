import { defineType, defineField } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

export default defineType({
  name: 'serviceCard',
  title: 'Carte de service',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Ex: Ménage & Nettoyage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description courte du service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Choisir une icône pour la carte',
      options: {
        list: [
          { title: '✨ Sparkles (Ménage)', value: 'Sparkles' },
          { title: '👔 Shirt (Repassage)', value: 'Shirt' },
          { title: '🛍️ ShoppingBag (Courses)', value: 'ShoppingBag' },
          { title: '🧴 SprayCan (Nettoyage)', value: 'SprayCan' },
          { title: '📊 LayoutGrid (Organisation)', value: 'LayoutGrid' },
          { title: '🏠 Home (Domicile)', value: 'Home' },
          { title: '💼 Briefcase (Professionnel)', value: 'Briefcase' },
          { title: '🧹 Broom (Balai)', value: 'Broom' },
          { title: '🧽 Soap (Savon)', value: 'Soap' },
          { title: '🪟 Window (Vitres)', value: 'Window' },
          { title: '🛋️ Armchair (Canapé)', value: 'Armchair' },
          { title: '⭐ Star (Premium)', value: 'Star' },
          { title: '❤️ Heart (Satisfaction)', value: 'Heart' },
          { title: '🎯 Target (Précision)', value: 'Target' },
          { title: '♻️ Recycle (Écologique)', value: 'Recycle' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
      description: 'Ex: Découvrir, En savoir plus',
      initialValue: 'Découvrir',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Couleur de fond',
      type: 'string',
      description: 'Couleur de fond de la carte',
      options: {
        list: [
          { title: '🔵 Bleu clair', value: 'lightBlue' },
          { title: '🟢 Vert clair', value: 'lightGreen' },
          { title: '🟣 Violet clair', value: 'lightViolet' },
          { title: '🟠 Orange clair', value: 'lightOrange' },
          { title: '🩷 Rose clair', value: 'lightPink' },
          { title: '🟡 Jaune clair', value: 'lightYellow' },
          { title: '🔴 Rouge clair', value: 'lightRed' },
          { title: '⚪ Beige', value: 'beige' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre d\'affichage de la carte (1, 2, 3, etc.)',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order}. ${title}`,
        subtitle,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
