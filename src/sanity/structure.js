import { HomeIcon, DocumentTextIcon, SparklesIcon, BlockElementIcon } from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .title('Contenu')
    .items([
      // ACCUEIL
      S.listItem()
        .title('Accueil')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Sections Accueil')
            .items([
              // Section Hero (singleton)
              S.listItem()
                .title('Section Hero')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('f4e020cc-b7d7-42b5-ac12-65737b185997')
                ),

              // Section Services (singleton)
              S.listItem()
                .title('Section Services')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('servicesSection')
                    .documentId('b3d32a9e-f6de-47c1-ad60-5229b46f2a34')
                ),

              // Cartes de service (liste)
              S.listItem()
                .title('Cartes de service')
                .icon(SparklesIcon)
                .child(
                  S.documentTypeList('serviceCard')
                    .title('Cartes de service')
                ),

              // Section Statistiques (singleton)
              S.listItem()
                .title('Section Statistiques')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('statsSection')
                    .documentId('eb926bfe-5af1-4412-bbb1-f73b6a11a2b6')
                ),

              // Section À Propos (singleton)
              S.listItem()
                .title('Section À Propos')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('aboutSection')
                    .documentId('808f31fe-01cc-469f-a784-3a1c4fd6c9c3')
                ),

              // Section Comment ça fonctionne (singleton)
              S.listItem()
                .title('Section Comment ça fonctionne')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('howItWorksSection')
                    .documentId('537a7dc5-0ee9-4d60-8b27-dd506ea1a12c')
                ),

              // Section Témoignages (singleton)
              S.listItem()
                .title('Section Témoignages')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('testimonialsSection')
                    .documentId('4e443826-20da-450e-87c6-d5192c402793')
                ),

              // Section Zones d'intervention (singleton)
              S.listItem()
                .title('Section Zones d\'intervention')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('zonesInterventionSection')
                    .documentId('955fd11b-994c-4fcb-86fb-5e8015717786')
                ),

              // Section FAQ (singleton)
              S.listItem()
                .title('Section FAQ')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('faqSection')
                    .documentId('053ccc44-c572-4449-a846-9d3d4ed95548')
                ),

              // Section CTA (singleton)
              S.listItem()
                .title('Section CTA')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('ctaSection')
                    .documentId('065423ed-07fb-4a11-b7e7-f73164f9e5e4')
                ),
            ])
        ),

      S.divider(),

      // PAGE À PROPOS
      S.listItem()
        .title('Page À Propos')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Sections Page À Propos')
            .items([
              // Contenu principal
              S.listItem()
                .title('Contenu principal')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('f0d64dbe-1c56-4f4b-997b-dcee6a638fee')
                ),

              // Section Valeurs
              S.listItem()
                .title('Section Valeurs')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('valuesSection')
                    .documentId('4c0647ee-3c4b-4459-a3c3-c209d78bfbb6')
                ),

              // Section Timeline
              S.listItem()
                .title('Section Timeline')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('timelineSection')
                    .documentId('89144c4a-296f-4d2a-9d51-9355528e0d25')
                ),
            ])
        ),

      S.divider(),

      // PRESTATIONS
      S.listItem()
        .title('Prestations')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Prestations')
            .items([
              // Liste des prestations
              S.listItem()
                .title('Liste des prestations')
                .icon(BlockElementIcon)
                .child(
                  S.documentTypeList('prestation')
                    .title('Prestations')
                ),

              // Page Prestations (CTA)
              S.listItem()
                .title('Page Prestations')
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .schemaType('prestationsPage')
                    .documentId('fff3837f-61d7-497b-bce8-6a42a5605971')
                ),
            ])
        ),

      S.divider(),

      // CONTACT
      S.listItem()
        .title('Contact')
        .icon(DocumentTextIcon)
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('e52a4799-589b-43a8-85e5-89f7bf1dce69')
        ),

      S.divider(),

      // FOOTER
      S.listItem()
        .title('Footer')
        .icon(BlockElementIcon)
        .child(
          S.document()
            .schemaType('footer')
            .documentId('5d146215-f243-474a-8a02-e31df9c83123')
        ),
    ])
