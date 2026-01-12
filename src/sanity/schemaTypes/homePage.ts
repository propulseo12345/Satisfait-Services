import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Page d\'accueil',
  type: 'document',
  icon: HomeIcon,
  fields: [
    // Section Hero
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      description: 'Ex: Services de qualité pour',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHighlightedText',
      title: 'Texte en surbrillance',
      type: 'string',
      description: 'Le texte qui apparaît en bleu (ex: votre intérieur)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Le paragraphe de description sous le titre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescriptionMobile',
      title: 'Description mobile',
      type: 'text',
      rows: 2,
      description: 'Version courte pour mobile (optionnel)',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numéro de téléphone',
      type: 'string',
      description: 'Ex: +33 7 69 64 07 24',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton1Text',
      title: 'Texte bouton 1',
      type: 'string',
      description: 'Texte du bouton principal (téléphone)',
      initialValue: 'Appeler maintenant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton1TextDesktop',
      title: 'Texte bouton 1 (Desktop)',
      type: 'string',
      description: 'Texte alternatif pour desktop (optionnel, affichera le numéro par défaut)',
    }),
    defineField({
      name: 'ctaButton2Text',
      title: 'Texte bouton 2',
      type: 'string',
      description: 'Texte du bouton secondaire (devis)',
      initialValue: 'Demander un devis',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: 'Description de l\'image pour l\'accessibilité et le SEO',
          validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Section CTA
    defineField({
      name: 'cta',
      title: 'Section CTA Contact',
      type: 'object',
      description: 'Section d\'appel à l\'action en bas de page',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
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
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: (Rule) => Rule.required(),
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
                  validation: (Rule) => Rule.required(),
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
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'value',
                  title: 'Valeur',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icône',
                  type: 'string',
                  options: {
                    list: [
                      { title: '📞 Téléphone', value: 'phone' },
                      { title: '💬 Message', value: 'messageCircle' },
                      { title: '📧 Email', value: 'mail' },
                      { title: '📍 Localisation', value: 'mapPin' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare() {
      return {
        title: 'Page d\'accueil',
        subtitle: 'Configuration de la section Hero',
      }
    },
  },
})
