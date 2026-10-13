export interface SkillItem {
  icon: string;
  name: string;
}

export interface SkillGroupData {
  titleEn: string;
  titleJa: string;
  wide?: boolean;
  skills: SkillItem[];
}

export interface ProjectData {
  id: number;
  caseNumber: string;
  nameEn: string;
  nameJa: string;
  descriptionEn: string;
  descriptionJa: string;
  skills: string[];
  img: string;
  web?: string;
  github?: string;
}

export interface ExperienceItemData {
  periodEn: string;
  periodJa: string;
  titleEn: string;
  titleJa: string;
  organizationEn: string;
  organizationJa: string;
  bulletsEn: string[];
  bulletsJa: string[];
}

export const translations = {
  nav: {
    home: { en: 'Home', ja: 'ホーム' },
    about: { en: 'About', ja: '自己紹介' },
    skills: { en: 'Skills', ja: 'スキル' },
    projects: { en: 'Projects', ja: '実績' },
    experience: { en: 'Path', ja: '経歴' },
    contact: { en: 'Contact', ja: '連絡先' },
    verticalText: {
      en: 'JAVIER PÉREZ — DEVELOPER',
      ja: 'ハビエル・ペレス — デベロッパー',
    },
  },
  hero: {
    seal: 'ハビエル',
    firstName: 'Javier',
    lastName: 'Pérez',
    role: {
      en: 'Frontend & Mobile Developer',
      ja: 'フロントエンド & モバイルデベロッパー',
    },
    quote: {
      en: '"From culinary precision to software craftsmanship — building clean, resilient, and user-centric digital experiences."',
      ja: '「製菓の緻密さをソフトウェアのクラフトマンシップへ。堅牢でユーザーに寄り添うデジタル体験を追求する」',
    },
    available: {
      en: 'Available',
      ja: '求職中',
    },
    portraitAlt: {
      en: 'Javier Pérez Portrait',
      ja: 'ハビエル・ペレス ポートレート',
    },
  },
  about: {
    sectionNum: '01',
    sectionTitle: { en: 'About', ja: '自己紹介' },
    intro: {
      en: {
        before:
          'Pastry chef by profession who transitioned with devotion into software engineering. Currently a student at ',
        school: '42 Tokyo',
        mid: ', sharpening low-level fundamentals in ',
        cLang: 'C',
        and: ' and ',
        pythonLang: 'Python',
        after: ' alongside modern full-stack development with ',
        react: 'React',
        reactNative: 'React Native',
        backend: ', and backend architectures.',
      },
      ja: {
        before:
          'パティシエ（製菓職人）からソフトウェアエンジニアへ転身。現在は ',
        school: '42 Tokyo',
        mid: ' に在籍し、低レイヤの基礎となる ',
        cLang: 'C言語',
        and: ' や ',
        pythonLang: 'Python',
        after: ' の実践を重ねながら、',
        react: 'React',
        reactNative: 'React Native',
        backend: '、およびモダンなバックエンド開発に取り組んでいます。',
      },
    },
    cards: {
      systems: {
        title: { en: '42 Tokyo & Systems', ja: '42 Tokyo & システム開発' },
        desc: {
          en: 'At 42 Tokyo, I build a rigorous systems foundation through peer-to-peer, project-based engineering. Diving deep into memory management, algorithms in C, and scripting in Python.',
          ja: '42 Tokyoにて、ピアラーニングを通じてコンピュータサイエンスの基礎を徹底的に習得。メモリ管理やC言語でのアルゴリズム実装、Pythonによるスクリプト自動化に取り組んでいます。',
        },
      },
      craft: {
        title: {
          en: 'Culinary Precision & Craft',
          ja: '製菓の精密さ & クラフトマンシップ',
        },
        desc: {
          en: 'My past in the culinary world instilled a relentless focus on precision, discipline, and attention to detail. I bring that same dedication to designing clean, maintainable codebases and intuitive mobile and web solutions.',
          ja: '製菓の世界で培った緻密さや規律、細部へのこだわりを活かし、保守性の高いコード設計と直感的なWeb・モバイル体験を創り出します。',
        },
      },
      global: {
        title: {
          en: 'Global Horizons & Communication',
          ja: '国際的な視野 & コミュニケーション',
        },
        desc: {
          en: 'Living and programming in Tokyo. Bilingual in Spanish and English (IELTS 5.5), and actively advancing in Japanese (日本語) to collaborate in diverse, multicultural engineering teams.',
          ja: '東京在住。スペイン語・英語（IELTS 5.5）のバイリンガル。日本の開発チームで円滑に協働できるよう、日本語（JLPT受験に向けて学習中）のコミュニケーション力も日々磨いています。',
        },
      },
    },
    collaborate: { en: 'Collaborate with me', ja: 'お問い合わせ・協業' },
    downloadCV: { en: 'Download CV', ja: '履歴書 (CV) ダウンロード' },
  },
  skills: {
    sectionNum: '02',
    sectionTitle: { en: 'Skills', ja: 'スキル' },
    groups: [
      {
        titleEn: 'Systems & Core Languages',
        titleJa: 'システム & コア言語',
        skills: [
          { icon: 'terminal', name: 'C (Systems & Algorithms)' },
          { icon: 'code', name: 'Python' },
          { icon: 'code', name: 'Typescript' },
          { icon: 'integration_instructions', name: 'Java & Kotlin' },
        ],
      },
      {
        titleEn: 'Frontend & Mobile',
        titleJa: 'フロントエンド & モバイル',
        skills: [
          { icon: 'layers', name: 'React & React Native' },
          { icon: 'smartphone', name: 'Expo' },
          { icon: 'palette', name: 'CSS3 / Sass / Tailwind' },
          { icon: 'tune', name: 'Redux State Management' },
        ],
      },
      {
        titleEn: 'Backend & Data',
        titleJa: 'バックエンド & データベース',
        skills: [
          { icon: 'api', name: 'Node.js & Express' },
          { icon: 'database', name: 'MongoDB' },
          { icon: 'storage', name: 'MySQL & SQLite' },
          { icon: 'local_fire_department', name: 'Firebase' },
        ],
      },
      {
        titleEn: 'Tools & Workflow',
        titleJa: 'ツール & 開発手法',
        skills: [
          { icon: 'account_tree', name: 'Git & GitHub' },
          { icon: 'inventory_2', name: 'Docker' },
          { icon: 'view_kanban', name: 'Agile (Scrum / Jira)' },
          { icon: 'view_quilt', name: 'Material UI' },
        ],
      },
    ] as SkillGroupData[],
  },
  projects: {
    sectionNum: '03',
    sectionTitle: { en: 'Selected Work', ja: '主な開発実績' },
    subtitle: { en: 'Featured Projects', ja: '注目のプロジェクト' },
    caseStudy: { en: 'Case Study', ja: '事例' },
    liveDemo: { en: 'Live Demo', ja: 'デモを見る' },
    sourceCode: { en: 'Source Code', ja: 'ソースコード' },
    items: [
      {
        id: 1,
        caseNumber: '01',
        nameEn: 'Inventory Mobile App',
        nameJa: '在庫管理モバイルアプリ',
        descriptionEn:
          'Cross-platform mobile application managing local inventory data with SQLite and Firebase authentication, built with Expo and Redux.',
        descriptionJa:
          'SQLiteによるローカル永続化とFirebase認証を組み込んだ、クロスプラットフォーム在庫管理アプリ（React Native / Expo / Redux）。',
        skills: ['React Native', 'Redux', 'Expo', 'SQLite', 'Firebase'],
        img: '/images/projects/inventoryapp.png',
        github: 'https://github.com/peladno/inventory-reactNativeApp',
      },
      {
        id: 2,
        caseNumber: '02',
        nameEn: 'E-Commerce (E-Shop)',
        nameJa: 'ECプラットフォーム (E-Shop)',
        descriptionEn:
          'Full-stack e-commerce web application with product catalog, cart workflows, and REST API backend built with Express and MongoDB.',
        descriptionJa:
          '商品カタログからカート機能、ExpressとMongoDBによるREST APIバックエンドまで一貫して構築したフルスタックECプラットフォーム。',
        skills: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Express'],
        img: '/images/projects/Eshop.png',
        web: 'https://eshop-project-29f5e.web.app/',
        github: 'https://github.com/peladno/eshop-project',
      },
      // {
      //   id: 3,
      //   caseNumber: '03',
      //   nameEn: 'Recipe Generator',
      //   nameJa: 'レシピジェネレーター',
      //   descriptionEn:
      //     'Dynamic recipe generator and culinary catalog application built with Vanilla JavaScript, Sass, and Bootstrap.',
      //   descriptionJa:
      //     'Vanilla JavaScript、Sass、Bootstrapで構築した、動的なレシピ検索・提案Webアプリケーション。',
      //   skills: ['JavaScript', 'HTML5', 'Sass', 'Bootstrap'],
      //   img: '/images/projects/recipes.png',
      //   web: 'https://peladno.github.io/JS28160JavierPerez/',
      //   github: 'https://github.com/peladno/JS28160JavierPerez',
      // },
      {
        id: 3,
        caseNumber: '03',
        nameEn: 'DevSafio Platform',
        nameJa: 'DevSafio 就職支援プラットフォーム',
        descriptionEn:
          'Web platform connecting junior developers with job opportunities, focusing on frontend architecture and agile Scrum delivery.',
        descriptionJa:
          'ジュニア開発者と就職機会を繋ぐプラットフォーム開発。Docker環境とScrumアジャイル開発によるフロントエンド設計を担当。',
        skills: ['React', 'Docker', 'Scrum / Jira', 'Git'],
        img: '/images/projects/devsafio.png',
        github: 'https://github.com/dlab-team/c6-frontend',
      },
      {
        id: 4,
        caseNumber: '04',
        nameEn: '42 python modules',
        nameJa: '42 Pythonモジュール',
        descriptionEn: 'Python projects for 42 Tokyo school',
        descriptionJa: '42 Tokyoのカリキュラム課題として開発したPythonプロジェクト。',
        skills: ['Python'],
        img: '/images/projects/python_modules.webp',
        github: 'https://github.com/dlab-team/c6-frontend',
      },
      {
        id: 5,
        caseNumber: '05',
        nameEn: 'Shared Calendar API (In progress)',
        nameJa: '共有カレンダーAPI（進行中）',
        descriptionEn:
          'A robust backend API for a shared calendar application, built with Node.js, Express, and TypeScript. This project uses Hexagonal Architecture to ensure modularity, testability, and maintainability.',
        descriptionJa:
          '共有カレンダーアプリ向けに開発した堅牢なバックエンドREST API。Node.js、Express、TypeScriptを採用し、高い保守性とテスト容易性を担保するためヘキサゴナルアーキテクチャに基づいて設計しています。',
        skills: ['Node js', 'Typescript', 'PostgreSQL'],
        img: '/images/projects/calendar_api.webp',
        github: 'https://github.com/dlab-team/c6-frontend',
      },
      {
        id: 6,
        caseNumber: '06',
        nameEn: 'A-Maze-ing (In progress)',
        nameJa: 'A-maze-ing（進行中）',
        descriptionEn:
          'A-Maze-ing is a Python 3.10+ maze generation, solving, and visualization application built as part of the 42 curriculum. The program reads a configuration file, generates a valid 2D maze (either a perfect maze with a unique path between any two cells or a braided playable board suitable for Pac-Man-style games), calculates the optimal shortest path from entry to exit using Breadth-First Search (BFS), serializes the maze to a file using a 4-bit hexadecimal wall bitmask format, and presents an interactive terminal-based ASCII interface.',
        descriptionJa:
          '42 Tokyoのカリキュラム課題として開発した、Python製の迷路生成・探索・可視化アプリ。設定ファイルを読み込んで2D迷路を生成し、幅優先探索（BFS）でスタートからゴールまでの最短ルートを算出。迷路データは16進数の壁ビットマスク形式で保存し、ターミナル上に直感的なASCIIアートで迷路を描画します。',
        skills: ['Python', 'Pytest', 'Poetry'],
        img: '/images/projects/a-maze-ing.png',
        github: 'https://github.com/peladno/a-maze-ing',
      },
    ] as ProjectData[],
  },
  experience: {
    sectionNum: '04',
    sectionTitle: { en: 'Professional Path', ja: '経歴・歩み' },
    subtitle: {
      en: 'Precision, continuous learning, and software craftsmanship.',
      ja: '緻密なモノづくり、継続的な学び、ソフトウェアのクラフトマンシップ。',
    },
    items: [
      {
        periodEn: '04/2026— Present',
        periodJa: '現在 — 在籍中',
        titleEn: 'Software Engineering Student',
        titleJa: 'ソフトウェアエンジニアリング専攻',
        organizationEn: '42 Tokyo',
        organizationJa: '42 Tokyo',
        bulletsEn: [
          'Rigorous systems programming in C: memory management, pointer arithmetic, data structures, and UNIX architecture.',
          'Scripting and automation in Python within a strict peer-to-peer, project-based curriculum.',
        ],
        bulletsJa: [
          'C言語による低レイヤプログラミング：メモリ管理、ポインタ操作、データ構造、UNIXシステム設計。',
          'ピアラーニング（P2P）形式のプロジェクト課題を通じたPythonによるスクリプト開発と自動化。',
        ],
      },
      {
        periodEn: '03/2023 — 03/2024',
        periodJa: '2023年3月 — 2024年3月',
        titleEn: 'Mobile Developer',
        titleJa: 'モバイルアプリ開発者',
        organizationEn: 'Cross-Platform Mobile Engineering',
        organizationJa: 'クロスプラットフォームモバイル開発',
        bulletsEn: [
          'Developed, tested, and maintained cross-platform mobile apps using React Native and Redux.',
          'Integrated REST APIs, third-party libraries, and optimized application responsiveness.',
        ],
        bulletsJa: [
          'React NativeとReduxを用いたクロスプラットフォームモバイルアプリの開発・テスト・保守。',
          'REST API連携、サードパーティライブラリ導入、アプリ応答性の最適化。',
        ],
      },
      {
        periodEn: '12/2022 — 02/2023',
        periodJa: '2022年12月 — 2023年2月',
        titleEn: 'Frontend Developer',
        titleJa: 'フロントエンド開発者',
        organizationEn: 'DevSafio Incubator',
        organizationJa: 'DevSafio インキュベーター',
        bulletsEn: [
          'Built frontend architecture and reusable UI components for a junior developer employment platform.',
          'Coordinated workflow and sprint reviews using Scrum methodologies, Jira, and Git.',
        ],
        bulletsJa: [
          'ジュニアエンジニア向け求人プラットフォームのフロントエンド設計および再利用可能なUIコンポーネント開発。',
          'Scrum、Jira、Gitを用いたアジャイル開発とスプリント管理。',
        ],
      },
      {
        periodEn: 'Formation & Transition',
        periodJa: '教育 & キャリア転身',
        titleEn: 'Software Engineering Transition',
        titleJa: 'エンジニアへのキャリア転身',
        organizationEn: 'Coderhouse & Self-Taught Journey',
        organizationJa: 'Coderhouse & 独学',
        bulletsEn: [
          'Certified in React JS, JavaScript (ES6+), and Web Development (Coderhouse).',
          'Transferred high-discipline, structured problem-solving from professional pastry chef background into software development.',
        ],
        bulletsJa: [
          'CoderhouseにてWeb開発、JavaScript、React認定を取得。',
          '製菓シェフ時代に培った高い自己規律と構造的な問題解決力を、ソフトウェア開発に応用・実践。',
        ],
      },
    ] as ExperienceItemData[],
  },
  contact: {
    sectionNum: '05',
    hanko: 'ハビエル',
    title: {
      en: "Let's build something beautiful together",
      ja: '魅力的なプロダクトを、一緒に作り上げましょう',
    },
    description: {
      en: 'Available for web and mobile engineering opportunities, freelance collaborations, and challenging software projects.',
      ja: 'Web・モバイル開発の案件、フリーランスのご相談、新しい技術的挑戦の機会をお待ちしております。',
    },
    form: {
      nameLabel: { en: 'Name', ja: 'お名前' },
      namePlaceholder: { en: 'Your Name', ja: '山田 太郎' },
      emailLabel: { en: 'Email', ja: 'メールアドレス' },
      emailPlaceholder: { en: 'your.email@domain.com', ja: 'name@example.com' },
      messageLabel: { en: 'Message', ja: 'メッセージ' },
      messagePlaceholder: {
        en: 'Tell me about your project, ideas, or opportunities...',
        ja: 'プロジェクトのご相談、要件、メッセージなどをご記入ください...',
      },
      submit: { en: 'Send Message', ja: '送信する' },
      sending: { en: 'Sending...', ja: '送信中...' },
      success: {
        en: 'Thank you! Your message has been sent successfully.',
        ja: 'メッセージを送信しました。折り返しご連絡いたします。',
      },
      error: {
        en: 'Failed to send message. Please try again or email directly.',
        ja: '送信に失敗しました。再度お試しいただくか、直接メールでお問い合わせください。',
      },
      rateLimit: {
        en: 'Please wait a moment before sending another message.',
        ja: '短時間に連続して送信することはできません。少し待ってからお試しください。',
      },
    },
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cvPdf: { en: 'CV PDF', ja: '履歴書 (CV)' },
  },
  footer: {
    copyright: {
      en: '© 2026 Javier Pérez Urrutia — All Rights Reserved',
      ja: '© 2026 Javier Pérez Urrutia — 無断転載を禁じます',
    },
    github: 'Github',
    linkedin: 'LinkedIn',
    cv: { en: 'CV', ja: '履歴書' },
  },
};
