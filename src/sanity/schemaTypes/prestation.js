export default {
    name: 'prestation',
    title: 'Prestation',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Catégorie',
        type: 'string',
        description: 'Ex: POUR LES PARTICULIERS, POUR LES PROFESSIONNELS',
      },
      {
        name: 'icon',
        title: 'Icône',
        type: 'string',
        options: {
          list: [
            {title: '🏠 Maison / Domicile', value: 'maison'},
            {title: '🏢 Immeuble / Bureaux', value: 'immeuble'},
            {title: '🏪 Magasin / Commerce', value: 'magasin'},
            {title: '🏭 Usine / Industrie', value: 'usine'},
            {title: '🧹 Balai / Nettoyage', value: 'balai'},
            {title: '🧼 Spray / Produits', value: 'spray'},
            {title: '✨ Étoiles / Brillance', value: 'etoiles'},
            {title: '👔 T-Shirt / Repassage', value: 'tshirt'},
            {title: '🧺 Panier / Linge', value: 'panier'},
            {title: '🪟 Fenêtre / Vitres', value: 'fenetre'},
            {title: '🚿 Douche / Sanitaires', value: 'douche'},
            {title: '🍽️ Vaisselle / Cuisine', value: 'vaisselle'},
            {title: '📦 Carton / Déménagement', value: 'carton'},
            {title: '📊 Grille / Organisation', value: 'grille'},
            {title: '⏰ Horloge / Régulier', value: 'horloge'},
          ],
          layout: 'dropdown'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
        description: 'Ex: Entretien courant',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'features',
        title: 'Caractéristiques',
        type: 'array',
        of: [{type: 'string'}],
        description: 'Liste des services inclus',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'buttonText',
        title: 'Texte du bouton',
        type: 'string',
        initialValue: 'Demander un devis',
      },
      {
        name: 'order',
        title: 'Ordre d\'affichage',
        type: 'number',
        description: 'Pour contrôler l\'ordre des prestations (1, 2, 3...)',
      },
    ],
    orderings: [
      {
        title: 'Ordre',
        name: 'orderAsc',
        by: [{field: 'order', direction: 'asc'}],
      },
    ],
  }