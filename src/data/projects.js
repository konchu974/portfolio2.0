export const projects = [
  {
    id: 'emcafe',
    category: 'E-Commerce',
    title: 'EMCAFE',
    description: 'Stage de 11 semaines chez EMCA (Emporio del Café). Développement d\'une plateforme e-commerce complète pour remplacer Amazon. Architecture full-stack avec backend Node.js/TypeScript, frontend Astro, et intégrations Stripe & Sendcloud.',
    image: '/images/emcafemainimg.png',
    metrics: [
      { value: '69+', label: 'Tests Jest' },
      { value: '11 sem', label: 'Stage' },
      { value: 'Full', label: 'Stack' }
    ],
    tags: ['Node.js', 'TypeScript', 'MySQL', 'Astro', 'Stripe', 'Sendcloud'],
    links: {
      github: '#',
      live: '#'
    },
    isMain: true
  },
  {
    id: 'prospect-hunter',
    category: 'CRM',
    title: 'Prospect Hunter',
    description: 'CRM de prospection locale pour freelances. Recherche d\'entreprises par région, détection de site web, extraction des contacts (téléphone/email), et dashboard de suivi avec pipeline personnalisable.',
    image: '/images/prospecthuntermainimg.png',
    metrics: [
      { value: '3', label: 'APIs Used' },
      { value: 'Auto', label: 'Scraping' },
      { value: 'CRM', label: 'Pipeline' }
    ],
    tags: ['React', 'Node.js', 'SQLite', 'API Maps', 'CRM', 'Web Scraping', 'Tailwind'],
    links: {
      github: 'https://github.com/konchu974/Prospect_hunter',
      live: '#'
    },
    isMain: false
  },
  {
    id: 'jobtracker',
    category: 'Front-End',
    title: 'JobTracker',
    description: 'Projet personnel pour retravailler le front-end vanilla. Kanban de suivi de candidatures avec drag & drop, tags personnalisés, export/import CSV, dashboard de statistiques et persistance localStorage — zéro dépendance, zéro framework.',
    image: '/images/jobtrackermainimg.png',
    metrics: [
      { value: '5', label: 'Colonnes' },
      { value: '0', label: 'Dépendances' },
      { value: 'SCSS', label: 'Architecture' }
    ],
    tags: ['HTML', 'SCSS', 'JavaScript', 'localStorage', 'Drag & Drop', 'CSV'],
    links: {
      github: 'https://github.com/konchu974/jobtracker',
      live: 'https://konchu974.github.io/JobTracker/'
    },
    isMain: false
  },
 

];
