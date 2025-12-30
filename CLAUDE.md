# CLAUDE.md - Satisfait Services

## Identité du Projet

**Nom** : Satisfait Services
**Type** : Site vitrine professionnel
**Client** : Tina (dirigeante)
**Secteur** : Services à la personne, nettoyage professionnel, home organising
**Localisation** : Narcastet (64510), Pau, Pyrénées-Atlantiques
**Slogan** : "Votre satisfaction, notre priorité"

---

## Coordonnées

| Information | Valeur |
|-------------|--------|
| **Téléphone** | +33 7 69 64 07 24 |
| **Email** | satisfaitservice@gmail.com |
| **WhatsApp** | 33769640724 |
| **Adresse** | 12 Chem. du Moulin, 64510 Narcastet |

### Horaires d'ouverture

- **Lundi - Vendredi** : 8h00 - 18h00
- **Samedi** : 9h00 - 12h00
- **Dimanche** : Fermé

### Zone d'intervention

- Narcastet (siège)
- Pau et agglomération
- Pyrénées-Atlantiques (64)

---

## Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 14+ | Framework React (App Router) |
| TypeScript | 5+ | Typage strict obligatoire |
| Tailwind CSS | 3.4+ | Styling utility-first |
| Framer Motion | 11+ | Animations fluides |
| Lucide React | Latest | Icônes SVG |
| React Hook Form | 7+ | Gestion formulaires |
| Zod | 3+ | Validation schemas |

### Commandes principales

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Linting
npm run lint

# Type checking
npm run type-check
```

---

## Architecture du Projet

```
satisfait-services/
├── src/
│   ├── app/                      # App Router Next.js
│   │   ├── layout.tsx            # Layout racine
│   │   ├── page.tsx              # Page Accueil
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   ├── prestations/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   └── politique-confidentialite/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/               # Header, Footer, Navigation
│   │   ├── ui/                   # Composants réutilisables
│   │   ├── sections/             # Sections de pages
│   │   └── forms/                # Formulaires
│   │
│   ├── lib/
│   │   ├── constants.ts          # Données statiques
│   │   ├── utils.ts              # Fonctions utilitaires
│   │   └── validations.ts        # Schemas Zod
│   │
│   ├── types/
│   │   └── index.ts              # Types TypeScript
│   │
│   └── styles/
│       └── globals.css           # Styles globaux + Tailwind
│
├── public/
│   ├── images/                   # Images optimisées
│   └── fonts/                    # Fonts locales (si nécessaire)
│
├── CLAUDE.md                     # Ce fichier
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Design System

### Palette de Couleurs

```typescript
// À utiliser dans tailwind.config.ts
const colors = {
  // Bleu doux - Couleur principale
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',   // Principal
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  // Beige/Crème - Couleur secondaire
  cream: {
    50: '#FEFDFB',
    100: '#FDF9F3',
    200: '#FAF5ED',   // Fond sections alternées
    300: '#F5EDE0',
    400: '#EDE4D3',
  },
  // Neutres
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
}
```

### Classes Tailwind Personnalisées

```css
/* globals.css */
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-16 md:py-24;
  }

  .heading-1 {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900;
  }

  .heading-2 {
    @apply text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900;
  }

  .heading-3 {
    @apply text-xl md:text-2xl font-semibold text-neutral-800;
  }

  .body-text {
    @apply text-base md:text-lg text-neutral-600 leading-relaxed;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3
           bg-primary-500 hover:bg-primary-600
           text-white font-medium rounded-lg
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3
           bg-white hover:bg-neutral-50
           text-primary-600 font-medium rounded-lg
           border-2 border-primary-500
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .card {
    @apply bg-white rounded-2xl shadow-sm hover:shadow-md
           transition-shadow duration-300 p-6;
  }
}
```

### Typographies

- **Font principale** : Inter (via next/font/google)
- **Fallback** : system-ui, sans-serif

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

### Espacements Standards

| Nom | Valeur | Usage |
|-----|--------|-------|
| section-gap | py-16 md:py-24 | Entre sections |
| container | max-w-7xl | Largeur max contenu |
| card-padding | p-6 md:p-8 | Intérieur cartes |
| grid-gap | gap-6 md:gap-8 | Grilles de cartes |

---

## Pages et Structure

### 1. Accueil (/)

**Sections obligatoires :**
1. Hero avec H1 "Votre satisfaction, notre priorité"
2. Présentation de Tina (photo + texte)
3. Grille des 5 services principaux
4. Avantages (pourquoi nous choisir)
5. Témoignages clients (optionnel)
6. CTA final avec contact

**SEO :**
```typescript
export const metadata: Metadata = {
  title: 'Satisfait Services | Ménage, Nettoyage & Home Organising à Pau et Narcastet',
  description: 'Satisfait Services : ménage, repassage, nettoyage professionnel et home organising à Narcastet, Pau et Pyrénées-Atlantiques. Devis gratuit, service personnalisé.',
}
```

### 2. À Propos (/a-propos)

**Sections :**
1. Hero avec titre
2. Histoire de Tina et création de l'entreprise
3. Valeurs et vision
4. Expertise et savoir-faire
5. CTA contact

### 3. Prestations (/prestations)

**Catégories de services :**

```typescript
const services = [
  {
    category: 'Entretien courant',
    target: 'Particuliers',
    items: ['Ménage régulier', 'Repassage', 'Entretien du linge', 'Dépoussiérage', 'Entretien des sols']
  },
  {
    category: 'Services professionnels',
    target: 'Entreprises',
    items: ['Nettoyage de bureaux', 'Entretien de locaux']
  },
  {
    category: 'Services à la personne',
    target: 'Particuliers',
    items: ['Livraison de courses', 'Petits services du quotidien']
  },
  {
    category: 'Nettoyage spécifique',
    target: 'Tous',
    items: ['Vitres', 'Moquettes', 'Canapés', 'Tapis']
  },
  {
    category: 'Home Organising',
    target: 'Particuliers',
    items: ['Coaching en rangement', 'Désencombrement', 'Organisation fonctionnelle']
  }
]
```

### 4. Contact (/contact)

**Éléments :**
- Formulaire de contact (nom, email, téléphone, service, message, RGPD)
- Coordonnées complètes
- Bouton WhatsApp
- Google Maps (zone Narcastet/Pau)
- Bouton "Rappel express"

---

## Composants Essentiels

### Header

```typescript
interface HeaderProps {
  // Navigation sticky avec effet shrink au scroll
  // Logo à gauche
  // Navigation desktop : Accueil | Prestations | À propos | Contact
  // CTA "Devis gratuit" à droite
  // Menu hamburger mobile avec animation
}
```

### Footer

```typescript
interface FooterProps {
  // Logo + slogan
  // Colonnes : Navigation, Services, Contact
  // Réseaux sociaux (icônes)
  // Mentions légales + Politique confidentialité
  // Copyright + "Site réalisé par Propul'SEO"
}
```

### ServiceCard

```typescript
interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}
```

### ContactForm

```typescript
interface ContactFormData {
  nom: string
  email: string
  telephone: string
  service: 'menage' | 'repassage' | 'nettoyage' | 'courses' | 'home-organising' | 'autre'
  message: string
  rgpd: boolean
}
```

### WhatsAppButton (Flottant)

```typescript
// Position fixed bottom-right
// Icône WhatsApp verte
// Animation pulse subtile
// Message pré-rempli : "Bonjour, je souhaite un renseignement..."
```

---

## Animations Framer Motion

### Patterns à utiliser

```typescript
// Fade in up (éléments au scroll)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

// Stagger children (grilles de cartes)
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover (boutons, cartes)
const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 17 }
}
```

### Règles d'animation

- Animations **subtiles** et **professionnelles**
- Durées courtes (0.3s - 0.6s)
- Easing naturel (easeOut, spring)
- Pas d'animations excessives ou distrayantes
- Pas d'animations qui bloquent l'interaction

---

## SEO & Performance

### Mots-clés cibles

```typescript
const keywords = [
  'ménage à domicile Narcastet',
  'service de ménage Pau',
  'entreprise de nettoyage Pau',
  'nettoyage professionnel 64',
  'home organiser Pyrénées-Atlantiques',
  'repassage à domicile Pau',
  'services à la personne Narcastet',
  'femme de ménage Pau',
  'nettoyage bureaux Pau',
  'coaching rangement 64'
]
```

### Schema.org LocalBusiness

```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Satisfait Services",
  "description": "Services de ménage, nettoyage professionnel et home organising",
  "url": "https://satisfait-services.fr",
  "telephone": "+33 7 69 64 07 24",
  "email": "satisfaitservice@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Chem. du Moulin",
    "addressLocality": "Narcastet",
    "postalCode": "64510",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.2833",
    "longitude": "-0.35"
  },
  "areaServed": ["Narcastet", "Pau", "Pyrénées-Atlantiques"],
  "priceRange": "€€"
}
```

### Optimisations obligatoires

- [ ] Images en format WebP/AVIF via next/image
- [ ] Lazy loading des images below-the-fold
- [ ] Font optimization avec next/font
- [ ] Metadata unique par page
- [ ] Sitemap.xml automatique
- [ ] Robots.txt configuré
- [ ] Alt text descriptifs sur toutes les images
- [ ] Score Lighthouse > 90

---

## Conventions de Code

### Nommage

```typescript
// Composants : PascalCase
export function ServiceCard() {}

// Fichiers composants : PascalCase.tsx
// ServiceCard.tsx, ContactForm.tsx

// Hooks : camelCase avec prefix 'use'
export function useScrollPosition() {}

// Utils/lib : camelCase
export function formatPhoneNumber() {}

// Types/Interfaces : PascalCase avec prefix descriptif
interface ServiceCardProps {}
type ServiceCategory = 'menage' | 'nettoyage'

// Constantes : SCREAMING_SNAKE_CASE
const MAX_SERVICES_PER_PAGE = 10
```

### Structure d'un composant

```typescript
// 1. Imports
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

// 2. Types
interface ComponentProps {
  title: string
  icon: LucideIcon
  className?: string
}

// 3. Composant
export function Component({ title, icon: Icon, className }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState()

  // 5. Handlers
  const handleClick = () => {}

  // 6. Render
  return (
    <div className={cn('base-classes', className)}>
      {/* JSX */}
    </div>
  )
}
```

### Imports

```typescript
// Ordre des imports :
// 1. React/Next
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. Librairies externes
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

// 3. Composants internes
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// 4. Utils/Lib
import { cn } from '@/lib/utils'
import { SERVICES } from '@/lib/constants'

// 5. Types
import type { Service } from '@/types'

// 6. Styles (si nécessaire)
import styles from './Component.module.css'
```

---

## Informations Client

### Coordonnées complètes

```typescript
const businessInfo = {
  name: 'Satisfait Services',
  owner: 'Tina',
  address: {
    street: '12 Chem. du Moulin',
    city: 'Narcastet',
    postalCode: '64510',
    department: 'Pyrénées-Atlantiques',
    country: 'France'
  },
  phone: '+33 7 69 64 07 24',
  email: 'satisfaitservice@gmail.com',
  whatsapp: '33769640724',
  hours: {
    weekdays: 'Lundi - Vendredi : 8h00 - 18h00',
    saturday: 'Samedi : 9h00 - 12h00',
    sunday: 'Dimanche : Fermé'
  },
  social: {
    facebook: '',
    instagram: '',
  },
  googleMaps: {
    embedUrl: '',
    placeId: '',
  }
}
```

---

## Workflow de Développement

### Ordre de développement recommandé

1. **Setup initial**
   - [ ] Initialisation Next.js + TypeScript + Tailwind
   - [ ] Configuration tailwind.config.ts avec couleurs
   - [ ] Configuration des fonts
   - [ ] Création globals.css avec classes custom

2. **Composants de base**
   - [ ] Container
   - [ ] Button (primary, secondary, outline)
   - [ ] SectionTitle
   - [ ] Card

3. **Layout**
   - [ ] Header avec navigation responsive
   - [ ] Footer complet
   - [ ] Layout racine

4. **Pages**
   - [ ] Accueil (toutes sections)
   - [ ] Prestations
   - [ ] À propos
   - [ ] Contact avec formulaire

5. **Fonctionnalités**
   - [ ] Formulaire de contact avec validation
   - [ ] Bouton WhatsApp flottant
   - [ ] Animations Framer Motion
   - [ ] Intégration Google Maps

6. **SEO & Optimisation**
   - [ ] Metadata par page
   - [ ] Schema.org
   - [ ] Sitemap
   - [ ] Optimisation images
   - [ ] Test Lighthouse

7. **Finalisation**
   - [ ] Mentions légales
   - [ ] Politique de confidentialité
   - [ ] Tests responsivité
   - [ ] Déploiement Vercel

---

## Règles Importantes

### À FAIRE

- Utiliser TypeScript strict (no any)
- Composants réutilisables et modulaires
- Mobile-first responsive design
- Accessibilité WCAG 2.1 AA
- Contenu réel en français (pas de Lorem Ipsum)
- Commentaires sur le code complexe
- Tests des formulaires
- Validation côté client ET préparation côté serveur

### À NE PAS FAIRE

- Pas de `any` en TypeScript
- Pas de styles inline (utiliser Tailwind)
- Pas d'images non optimisées
- Pas de textes placeholder en production
- Pas d'animations bloquantes ou excessives
- Pas de console.log en production
- Pas de secrets/clés API dans le code

---

## Notes pour Claude Code

Quand tu développes ce projet :

1. **Sois cohérent** avec le design system défini
2. **Respecte** l'architecture de fichiers
3. **Utilise** les classes Tailwind personnalisées
4. **Vérifie** la responsivité à chaque étape
5. **Optimise** le SEO dès la création des pages
6. **Commente** les parties complexes du code
7. **Propose** des améliorations si pertinent

Pour toute question sur le projet, réfère-toi à ce fichier CLAUDE.md.

---

*Projet développé pour Propul'SEO - Agence digitale*
*Dernière mise à jour : Janvier 2025*
