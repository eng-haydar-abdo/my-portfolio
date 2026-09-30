import { Certificate, ExperienceItem, Project, SkillCategory } from '../types/portfolio';

// Local generated image assets
import portraitImg from '../assets/images/haydar_profile.jpg';
import foodAppImg from '../assets/images/project_flutter_food_1790628719717.jpg';
import cyberLabImg from '../assets/images/project_cyber_security_1790628729875.jpg';
import hstoreImg from '../assets/images/project_hstore_ecommerce_1790628740476.jpg';

export const PORTRAIT_IMAGE = portraitImg;

export const PROJECTS: Project[] = [
  {
    id: 'food-cr',
    title: 'Chain Restaurants (Food CR) – Mobile App',
    titleAr: 'مشروع Chain Restaurants (Food CR) – تطبيق المطاعم والمقاهي المتطور',
    tagline: 'Flutter & Dart · GetX State Architecture · Custom Order Flow',
    taglineAr: 'فلاتر ودارت · بنية GetX لإدارة الحالة · تجربة طلبات فورية',
    category: 'flutter',
    image: foodAppImg,
    tags: ['Flutter', 'Dart', 'GetX', 'REST API', 'Clean Architecture', 'Figma to Code'],
    description: 'A comprehensive, high-performance food delivery and cafe ordering application built with Flutter. Features clean architecture, reactive state management using GetX, dynamic cart calculation, localized currency, and customizable menu variants.',
    descriptionAr: 'تطبيق متكامل وسريع لطلب وجبات الطعام وخدمات المقاهي تم بناؤه باستخدام Flutter. يتميز بهيكلية برمجية نظيفة، وإدارة حالة تفاعلية عبر GetX، وسلة تسوق ذكية مع دعم متعدد اللغات وتتبع الطلبات.',
    highlights: [
      'Modular state management with GetX controllers and dependency injection',
      'Smooth custom UI transitions and interactive food customization drawers',
      'Integrated RESTful endpoints for real-time order tracking and invoice generation',
      'Responsive design adapting flawlessly across Android and iOS viewports'
    ],
    highlightsAr: [
      'إدارة حالة معيارية متقدمة عبر متحكمات GetX مع حقن التبعيات',
      'انتقالات واجهة مستخدم ناعمة ونوافذ تفاعلية لتخصيص الوجبات والإضافات',
      'ربط متكامل مع واجهات RESTful لمتابعة الطلبات وتوليد الفواتير اللحظية',
      'تصميم متجاوب بالكامل يتطابق بدقة مع مختلف شاشات أندرويد وآيفون'
    ],
    githubUrl: 'https://github.com/eng-haydar-abdo/chain_restaurants',
    demoType: 'mobile'
  },
  {
    id: 'cyberx-engagement',
    title: 'CyberX Penetration Testing & Root Escalation',
    titleAr: 'اختبار اختراق بيئة CyberX وتصعيد الصلاحيات إلى Root',
    tagline: 'Offensive Security · ProFTPD Exploit · Linux Privilege Escalation',
    taglineAr: 'الأمن الهجومي · استغلال ثغرة ProFTPD · تصعيد الصلاحيات لنظام لينكس',
    category: 'cyber',
    image: cyberLabImg,
    tags: ['Kali Linux', 'Metasploit', 'Nmap', 'Privilege Escalation', 'OWASP', 'ProFTPD'],
    description: 'A rigorous Red Team engagement against the CyberX hardened lab (Ubuntu 16.04 LTS). Performed deep network enumeration, identified a ProFTPD 1.3.3c backdoor vulnerability, achieved initial access via Metasploit, performed WordPress-to-www-data lateral movement, and analyzed insecure file permissions to obtain full Root access.',
    descriptionAr: 'عملية تدقيق واختبار اختراق هجومي متقدمة لبيئة مختبر CyberX المبنية على Ubuntu 16.04 LTS. تم خلالها إجراء فحص شبكي دقيق، واكتشاف ثغرة الباب الخلفي في ProFTPD 1.3.3c، والحصول على جلسة Metasploit ثم الوصول لبيانات WordPress وتصعيد الصلاحيات لصلاحيات Root الكاملة مع توثيق تقرير الاختراق.',
    highlights: [
      'Full kill-chain execution: Reconnaissance, Enumeration, Exploitation & Root Escalation',
      'Exploitation of backdoor ProFTPD 1.3.3c and web vulnerability auditing',
      'Privilege escalation analysis with sudo privileges and insecure cron evaluation',
      'Comprehensive vulnerability assessment and executive remediation report'
    ],
    highlightsAr: [
      'تنفيذ كامل لسلسلة الهجوم: جمع المعلومات، الفحص، الاستغلال، والوصول إلى Root',
      'استغلال ثغرة الباب الخلفي ProFTPD 1.3.3c وتدقيق أمني لخدمات الويب',
      'تحليل وتصعيد الصلاحيات الداخلية وفحص أذونات الملفات غير الآمنة',
      'كتابة تقرير تدقيق أمني احترافي يشمل الثغرات وخطوات الترقيع والحماية'
    ],
    demoType: 'terminal'
  },
  {
    id: 'hstore-mobile',
    title: 'Hstore – Cross-Platform E-Commerce Mobile App',
    titleAr: 'تطبيق Hstore – متجر إلكتروني متعدد المنصات بفلاتر',
    tagline: 'Flutter & Dart · Category Browsing · Shopping Cart & Secure Checkout',
    taglineAr: 'فلاتر ودارت · تصفح المنتجات · إدارة السلة والدفع الآمن',
    category: 'flutter',
    image: hstoreImg,
    tags: ['Flutter', 'Dart', 'Provider', 'SQLite/Hive', 'REST API', 'E-Commerce'],
    description: 'A multi-vendor style mobile e-commerce application crafted in Flutter. Provides instant search with query debouncing, category filtering, wishlists with persistent local storage, product review system, and a checkout wizard.',
    descriptionAr: 'تطبيق تجارة إلكترونية متكامل على الهواتف الذكية مطور بـ Flutter. يقدم بحثاً سريعاً، وفلترة متقدمة حسب الفئات والماركات، وقائمة مفضلة مع حفظ محلي، ونظام تقييم المنتجات، مع مسار شراء ودفع سلس وسريع.',
    highlights: [
      'Persistent local caching for offline cart and favorite items using Hive',
      'Dynamic product filters with price range, brand selection, and rating filters',
      'Optimized image caching and lazy-loaded infinite catalog scroll',
      'Validated multi-step checkout workflow with shipping and payment methods'
    ],
    highlightsAr: [
      'تخزين محلي فعال لحفظ محتويات السلة والمفضلة بدون اتصال بالإنترنت',
      'فلاتر منتجات حيوية حسب الأسعار والماركات والتقييمات',
      'تحسين سرعة تحميل الصور والتصفح اللانهائي السلس للمنتجات',
      'مسار دفع متعدد الخطوات مع التحقق الدقيق من عناوين الشحن وطرق الدفع'
    ],
    demoType: 'mobile'
  },
  {
    id: 'owasp-juice-shop',
    title: 'OWASP Juice Shop – Complete Red Team Security Audit',
    titleAr: 'تدقيق أمني شامل لتطبيق OWASP Juice Shop',
    tagline: 'Web App Pentesting · Burp Suite · SQLi, XSS, Broken Auth & IDOR',
    taglineAr: 'اختبار اختراق تطبيقات الويب · بيرب سويت · حقن SQL وهجمات XSS وIDOR',
    category: 'cyber',
    image: cyberLabImg,
    tags: ['Burp Suite', 'OWASP Top 10', 'SQLi', 'XSS', 'IDOR', 'Security Report'],
    description: 'Comprehensive manual penetration testing engagement across 25+ vulnerabilities aligned with the OWASP Top 10 framework. Successfully exploited SQL Injections for administrative authentication bypass, stored and reflected XSS, broken access controls (IDOR), and insecure deserialization.',
    descriptionAr: 'اختبار اختراق يدوي متقدم وشامل شمل أكثر من 25 ثغرة أمنية مصنفة ضمن معايير OWASP Top 10. تضمن تجاوز المصادقة عبر SQLi، واكتشاف ثغرات XSS، وتجاوز صلاحيات الوصول IDOR، وتوثيق الحلول الأمنية البرمجية المضادة.',
    highlights: [
      'Intercepted and modified HTTP/HTTPS payloads using Burp Suite Professional suite',
      'Achieved admin privileges via SQL Injection on login endpoints',
      'Demonstrated cross-site scripting (XSS) token theft and DOM manipulation vectors',
      'Authored in-depth vulnerability mitigation guide for software developers'
    ],
    highlightsAr: [
      'اعتراض وتحليل الحزم البرمجية عبر Burp Suite وفحص تدفق البيانات المشفرة',
      'الوصول لحساب المدير وتجاوز المصادقة بالكامل عبر استغلال ثغرة SQL Injection',
      'إثبات خطورة ثغرات XSS في سرقة الجلسات والتلاعب بواجهة المستخدم',
      'صياغة دليل إرشادي تقني لترقيع الثغرات وتأمين الكود المصدري للمطورين'
    ],
    demoType: 'terminal'
  },
  {
    id: 'labetak-app',
    title: 'Labetak API – On-Demand Home & Laundry Services',
    titleAr: 'مشروع وتطبيق لبيتك (Labetak API) – حجز الخدمات المنزلية والمغاسل',
    tagline: 'Flutter & Dart · RESTful Backend API · Service Booking Flow',
    taglineAr: 'فلاتر ودارت · واجهات برمجية RESTful API · جدولة وتتبع الحجوزات',
    category: 'flutter',
    image: foodAppImg,
    tags: ['Flutter', 'Dart', 'REST API', 'Backend Integration', 'Location Services', 'UI/UX'],
    description: 'An on-demand home care and laundry booking platform built in Flutter with dedicated RESTful API integration. Allows users to schedule cleaning and dry-cleaning appointments, select pickup timeframes, track service staff via map interfaces, and manage service invoices.',
    descriptionAr: 'منصة متطورة لحجز الخدمات المنزلية والمغاسل بنقرات معدودة مطورة بفلاتر ومربوطة مع واجهات Labetak API الخلفية. يتيح للمستخدمين اختيار نوع الخدمة، وجدولة المواعيد وتحديد أوقات الاستلام والتوصيل مع دعم الخرائط وتتبع حالة الطلبات.',
    highlights: [
      'Robust integration with Labetak API endpoints for real-time authentication and service scheduling',
      'Integrated map location picker with address autocomplete and reverse geocoding',
      'Calendar appointment scheduler with intelligent service slot validation',
      'Support for Arabic and English RTL/LTR interfaces out of the box'
    ],
    highlightsAr: [
      'ربط متكامل مع واجهات Labetak API الخلفية للمصادقة وجدولة الخدمات وإدارة الحجوزات',
      'تحديد الموقع الجغرافي وحفظ العناوين المفضلة بدقة عالية',
      'جدولة المواعيد مع التحقق الفوري من التوفر الزمني لمقدمي الخدمة',
      'دعم كامل للغتين العربية والإنجليزية مع اتجاهات RTL و LTR متقنة'
    ],
    githubUrl: 'https://github.com/eng-haydar-abdo/labetak_api',
    demoType: 'mobile'
  },
  {
    id: 'hstore-website',
    title: 'Hstore Web – Modern Front-End',
    titleAr: 'موقع Hstore الإلكتروني – واجهة ويب متطورة (Modern Front-End)',
    tagline: 'Interactive 3D Perfume Model · Mobile App Showcase · Direct APK Download & Contact',
    taglineAr: 'نموذج عطر ثلاثي الأبعاد تفاعلي (3D) · استعراض تطبيق الموبايل · تحميل مباشر لـ APK ونموذج تواصل',
    category: 'web',
    image: hstoreImg,
    tags: ['Web Development', '3D Perfume Model', 'JavaScript', 'HTML5/CSS3', 'APK Download', 'Contact Form'],
    description: 'A modern, high-craft web front-end platform for Hstore featuring an interactive rotating 3D perfume showcase model, detailed highlights of the companion Hstore Flutter mobile application, a direct APK download link, and a fully functional interactive contact form.',
    descriptionAr: 'واجهة ويب عصرية واحترافية لمتجر Hstore تتميز بنموذج عطر تفاعلي ثلاثي الأبعاد (3D Model) يدور مع حركة المستخدم، واستعراض شامل لمميزات تطبيق Hstore للهواتف الذكية، وزر مباشر لتحميل ملف الـ APK، بالإضافة إلى نموذج تواصل تفاعلي متكامل.',
    highlights: [
      'Interactive rotating 3D perfume model with smooth user-driven rotation and showcase lighting',
      'Dedicated companion mobile application showcase highlighting features, UI screens, and capabilities',
      'Direct one-click APK download access for instant Android installation',
      'Integrated responsive contact form with field validation and inquiry dispatch'
    ],
    highlightsAr: [
      'نموذج عطر تفاعلي ثلاثي الأبعاد (3D) يدور بسلاسة مع تفاعل وحركة المستخدم',
      'استعراض بصري مفصل لتطبيق الهواتف الذكية المصاحب ومميزاته وشاشاته',
      'زر تحميل مباشر لملف التطبيق (APK Download) لتثبيته فوراً على أجهزة الأندرويد',
      'نموذج تواصل واستفسار متكامل مع التحقق من صحة المدخلات وتصميم متجاوب بالكامل'
    ],
    liveUrl: 'https://eng-haydar-abdo.github.io/h-store-website/',
    demoType: 'web'
  },
  {
    id: 'your-bank-app',
    title: 'Your Bank – Secure Mobile Banking Concept',
    titleAr: 'مشروع Your Bank – منصة بنكية ومصرفية آمنة عبر الويب',
    tagline: 'Web Development · Responsive Banking UI · Financial Dashboard & Transfers',
    taglineAr: 'تطوير الويب · واجهة بنكية تفاعلية متجاوبة · لوحة تحكم مالية والتحويلات',
    category: 'web',
    image: foodAppImg,
    tags: ['Web Development', 'JavaScript', 'HTML5/CSS3', 'Financial Dashboard', 'Transactions', 'Responsive UI'],
    description: 'A responsive web banking platform designed for modern financial services. Features real-time balance overviews, transaction history, fund transfer validation, virtual card controls, and banking security workflows with a sleek, user-friendly interface.',
    descriptionAr: 'منصة مصرفية تفاعلية حديثة للويب مصممة للخدمات المالية السريعة. تتميز بعرض لحظي للأرصدة وسجل الحركات المالية، والتحقق الآمن من الحوالات، وإدارة البطاقات الرقمية، مع تجربة مستخدم متجاوبة وسلسة.',
    highlights: [
      'Interactive financial dashboard with real-time balance calculations and visual expense charts',
      'Secure fund transfer flow with recipient validation and transaction history review',
      'Card management controls including instant virtual card freeze and spending limit adjustments',
      'Fully responsive front-end architecture optimized across desktop, tablet, and mobile browsers'
    ],
    highlightsAr: [
      'لوحة تحكم مالية تفاعلية مع حساب فوري للأرصدة وعرض بياني للمصروفات',
      'مسار تحويل أموال آمن مع التحقق الفوري من بيانات المستلم وسجل العمليات',
      'أدوات متطورة لإدارة البطاقات تشمل التجميد المؤقت وضبط حدود الإنفاق',
      'بنية واجهات أمامية متجاوبة بالكامل ومحسنة للعمل على مختلف الحواسيب والهواتف'
    ],
    liveUrl: 'https://waseemnasser.github.io/Bank_Project/',
    demoType: 'web'
  },
  {
    id: 'recon-suite',
    title: 'Offensive Recon & Vulnerability Automation Tooling',
    titleAr: 'أدوات الأتمتة لجمع المعلومات وفحص الثغرات (Red Team)',
    tagline: 'Python & Bash · OSINT Gathering · Automated Subdomain & Port Audit',
    taglineAr: 'بايثون وباش · جمع استخبارات المصادر المفتوحة · الفحص الشبكي المؤتمت',
    category: 'cyber',
    image: cyberLabImg,
    tags: ['Python', 'Bash', 'Nmap Scripting', 'OSINT', 'Shodan API', 'Subfinder'],
    description: 'Custom security automation scripts and recon pipelines created for offensive engagements. Orchestrates tools like Subfinder, Nmap, and Shodan API to rapidly map target attack surfaces, uncover exposed services, and generate actionable reconnaissance summaries.',
    descriptionAr: 'مجموعة أدوات وبرمجيات أتمتة أمنية مخصصة لعمليات الفريق الأحمر والاستخبارات المفتوحة OSINT. تنسق العمل بين أدوات الفحص مثل Subfinder وNmap وShodan API لإنتاج مسح شامل لمساحة الهجوم للشبكات وتوثيق المنافذ المفتوحة.',
    highlights: [
      'Automated multi-threaded scanning and asset discovery pipeline',
      'Integration with public OSINT APIs (crt.sh, DNSdumpster, Shodan)',
      'Exportable JSON and Markdown vulnerability reporting formats',
      'Developed with Python 3 and Kali Linux native CLI tools'
    ],
    highlightsAr: [
      'مسار أتمتة سريع ومبرمج بمسارات متزامنة لاكتشاف النطاقات الفرعية والمنافذ',
      'ربط مباشر مع واجهات الاستخبارات المفتوحة مثل crt.sh و Shodan',
      'تصدير تقارير منظمة بتنسيقات JSON و Markdown جاهزة لفرق التدقيق',
      'مكتوبة بلغة Python 3 ومتوافقة مع بيئة Kali Linux الاحترافية'
    ],
    demoType: 'terminal'
  }
];

// Local direct download assets and Google Drive links for CVs
export const CV_DOWNLOAD_FILES = {
  flutter: {
    title: 'Haydar Abdo - Flutter CV',
    localPath: '/Haydar_Abdo_Flutter_CV.pdf',
    fileName: 'Haydar_Abdo_Flutter_CV.pdf',
    driveUrl: 'https://drive.google.com/file/d/1wVuNE3YXcVfYDiq2fIfvk8W5zoBhSjMc/view',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1wVuNE3YXcVfYDiq2fIfvk8W5zoBhSjMc',
  },
  cyber: {
    title: 'Haydar Abdo - Cyber Security CV',
    localPath: '/Haydar_Abdo_Cyber_Security_CV.pdf',
    fileName: 'Haydar_Abdo_Cyber_Security_CV.pdf',
    driveUrl: 'https://drive.google.com/file/d/1JxC5XCAExtxOziA2wysa8wLZkvwl7p3P/view',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1JxC5XCAExtxOziA2wysa8wLZkvwl7p3P',
  },
  ai: {
    title: 'Haydar Abdo - AI & Machine Learning CV',
    localPath: '/Haydar_Abdo_AI_CV.pdf',
    fileName: 'Haydar_Abdo_AI_CV.pdf',
    driveUrl: 'https://drive.google.com/file/d/1dzEZB6oh4cyDB3MXWQHwuz501vaYUYee/view',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1dzEZB6oh4cyDB3MXWQHwuz501vaYUYee',
  },
};

// Centralized Google Drive Links for CVs and Certificates
export const GOOGLE_DRIVE_LINKS = {
  cv: {
    ai: 'https://drive.google.com/file/d/1dzEZB6oh4cyDB3MXWQHwuz501vaYUYee/view',
    flutter: 'https://drive.google.com/file/d/1wVuNE3YXcVfYDiq2fIfvk8W5zoBhSjMc/view',
    cyber: 'https://drive.google.com/file/d/1JxC5XCAExtxOziA2wysa8wLZkvwl7p3P/view',
  },
  certificates: {
    cyber: 'https://drive.google.com/file/d/1fENpJbN6y9-yIoLzABGWw-eLI56HklTE/view',
    flutterLv1: 'https://drive.google.com/file/d/1YXiI3zVfNHdePN49jQViLzlv0-IcFzlD/view',
    flutterLv2: 'https://drive.google.com/file/d/17X668G-h8cA5ikKTtgAAAywDq8vwPg9n/view',
    frontendLv1: 'https://drive.google.com/file/d/1rN0FpgYCV1GqkBXevhgZqgLu_XIeBszx/view',
  },
  recommendations: {
    cyber: 'https://drive.google.com/file/d/1bopP7kAybdH7eVQD94KOP6A1b0_kYSr8/view',
    flutterLv1: 'https://drive.google.com/file/d/1I3HebnNtyygyslQkKy3aNaVbamtDlWk4/view',
    flutterLv2: 'https://drive.google.com/file/d/1elUBuozcbADZSNZsx0nKbH6-F9xBkSpN/view',
    frontendLv1: 'https://drive.google.com/file/d/1P6cqoAawJDThZiYKDQJToyPgZgxkydsG/view',
  },
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-cyber',
    title: 'Cyber Security Internship Certificate',
    titleAr: 'شهادة تدريب تخصصي في الأمن السيبراني واختبار الاختراق',
    issuer: 'Focal X Academy (L.L.C)',
    date: 'Issued Dec 2024 / Completed Feb 2026',
    certId: '9PEDOSS3Z08',
    category: 'cyber',
    type: 'certificate',
    localPath: '/certificates/Haydar_Abdo_Cyber_Security_Certificate.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.certificates.cyber,
    externalUrl: GOOGLE_DRIVE_LINKS.certificates.cyber,
    summary: 'Successfully completed intensive task-based training in Cyber Security & Penetration Testing, finishing 1st out of 25 trainees. Valid Certificate ID: 9PEDOSS3Z08 signed by Alaa Darwish (Founder & CEO).',
    summaryAr: 'إتمام البرنامج التدريبي المكثف بنجاح في الأمن السيبراني واختبار الاختراق، والحصول على المركز الأول من بين 25 متدرباً مع كود توثيق معتمد 9PEDOSS3Z08 وتوقيع المؤسس والمدير التنفيذي علاء درويش.'
  },
  {
    id: 'recom-cyber',
    title: 'Official Recommendation Letter – Cyber Security',
    titleAr: 'كتاب توصية رسمي – الأمن السيبراني واختبار الاختراق',
    issuer: 'Focal X Agency (Syrian O.P limited liability co.)',
    date: 'Date: 20/01/2026',
    recommender: 'Alaa Darwish (Founder & CEO)',
    category: 'cyber',
    type: 'recommendation',
    localPath: '/certificates/Haydar_Abdo_Cyber_Security_Recommendation.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.recommendations.cyber,
    externalUrl: GOOGLE_DRIVE_LINKS.recommendations.cyber,
    summary: '"Haydar is a motivated individual with a passion for Cyber Security. He demonstrated exceptional creativity, attention to detail, technical expertise, teamwork, and adaptability... I highly recommend him for employment."',
    summaryAr: '"حيدر شخص متميز وشغوف بالأمن السيبراني، أظهر إبداعاً استثنائياً ودقة تقنية عالية وروح عمل جماعي وقدرة على التكيف خلال فترة التدريب... أوصي به بشدة للعمل في هذا المجال."'
  },
  {
    id: 'cert-flutter-2',
    title: 'App Development | Flutter Lvl.2 Certificate',
    titleAr: 'شهادة تطوير تطبيقات الهواتف الذكية | فلاتر المستوى الثاني',
    issuer: 'Focal X Academy (L.L.C)',
    date: 'Issued July 2024 / Completed Jan 2025',
    category: 'flutter',
    type: 'certificate',
    localPath: '/certificates/Haydar_Abdo_Flutter_Lv2_Certificate.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.certificates.flutterLv2,
    externalUrl: GOOGLE_DRIVE_LINKS.certificates.flutterLv2,
    summary: 'Advanced certification in cross-platform mobile development with Flutter, covering Clean Architecture, complex state management, custom animations, and API consumption.',
    summaryAr: 'شهادة متقدمة في تطوير تطبيقات الهواتف الذكية عبر Flutter تشمل العمارة البرمجية النظيفة، إدارة الحالة المتقدمة، الحركات المخصصة، والتعامل الاحترافي مع واجهات API.'
  },
  {
    id: 'recom-flutter-2',
    title: 'Recommendation Letter – Flutter App Development Lvl.2',
    titleAr: 'كتاب توصية رسمي – تطوير التطبيقات بفلاتر المستوى الثاني',
    issuer: 'Focal X Agency (Syrian O.P limited liability co.)',
    date: 'Date: 15/02/2025',
    recommender: 'Alaa Darwish (Founder & CEO)',
    category: 'flutter',
    type: 'recommendation',
    localPath: '/certificates/Haydar_Abdo_Flutter_Lv2_Recommendation.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.recommendations.flutterLv2,
    externalUrl: GOOGLE_DRIVE_LINKS.recommendations.flutterLv2,
    summary: '"He successfully completed a four-months training program in App Development | Flutter Lvl.2. Haydar is a motivated individual with a passion for Flutter... He has the skills and work ethic to thrive."',
    summaryAr: '"أتم بنجاح البرنامج التدريبي المتخصص في تطوير تطبيقات الهواتف فلاتر المستوى الثاني، وأثبت امتلاكه للمهارات البرمجية وأخلاقيات العمل العالية للنجاح في أي فريق تقني."'
  },
  {
    id: 'cert-flutter-1',
    title: 'App Development | Flutter Lvl.1 Certificate',
    titleAr: 'شهادة تطوير تطبيقات الهواتف الذكية | فلاتر المستوى الأول',
    issuer: 'Focal X Academy (L.L.C)',
    date: 'Issued Dec 2024 (Completed June 2024)',
    certId: '645xrjszj70',
    category: 'flutter',
    type: 'certificate',
    localPath: '/certificates/Haydar_Abdo_Flutter_Lv1_Certificate.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.certificates.flutterLv1,
    externalUrl: GOOGLE_DRIVE_LINKS.certificates.flutterLv1,
    summary: 'Foundational mobile engineering certificate covering Dart OOP fundamentals, Widget tree lifecycles, UI composition, and local state management. Valid Certificate ID: 645xrjszj70.',
    summaryAr: 'شهادة الأساسيات الهندسية لتطبيقات الهواتف الذكية: لغة Dart، البرمجة كائنية التوجه، شجرة العناصر، وإدارة الحالة الأساسية. كود التحقق المعتمد: 645xrjszj70.'
  },
  {
    id: 'recom-flutter-1',
    title: 'Recommendation Letter – Flutter App Development Lvl.1',
    titleAr: 'كتاب توصية رسمي – تطوير التطبيقات بفلاتر المستوى الأول',
    issuer: 'Focal X Agency (Syrian O.P limited liability co.)',
    date: 'Date: 15/07/2024',
    recommender: 'Alaa Darwish (Founder & CEO)',
    category: 'flutter',
    type: 'recommendation',
    localPath: '/certificates/Haydar_Abdo_Flutter_Lv1_Recommendation.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.recommendations.flutterLv1,
    externalUrl: GOOGLE_DRIVE_LINKS.recommendations.flutterLv1,
    summary: '"He successfully completed four-months training program in App Development | Flutter Lvl.1 from February 2024 to June 2024. Exceptional creativity and adaptability."',
    summaryAr: '"أتم بنجاح برنامج تدريب فلاتر المستوى الأول على مدار 4 أشهر من شباط 2024 حتى حزيران 2024 متميزاً بالإبداع وسرعة الإنجاز والتعلم."'
  },
  {
    id: 'cert-web',
    title: 'Web Development | Front-end Lvl.1 Certificate',
    titleAr: 'شهادة تطوير واجهات الويب الأمامية | المستوى الأول',
    issuer: 'Focal X Academy (L.L.C)',
    date: 'Issued Dec 2024 (Completed Sep 2025)',
    certId: '9PEDOSS3Z08',
    category: 'web',
    type: 'certificate',
    localPath: '/certificates/Haydar_Abdo_Frontend_Lv1_Certificate.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.certificates.frontendLv1,
    externalUrl: GOOGLE_DRIVE_LINKS.certificates.frontendLv1,
    summary: 'Certification in modern front-end engineering, semantic HTML5, responsive CSS3/Bootstrap, and JavaScript web interactivity. Valid Certificate ID: 9PEDOSS3Z08.',
    summaryAr: 'شهادة احترافية في بناء واجهات الويب الحديثة، معايير HTML5 وCSS3 المتقدمة، وبناء مواقع تفاعلية وسريعة الاستجابة.'
  },
  {
    id: 'recom-web',
    title: 'Recommendation Letter – Web Development Front-end Lvl.1',
    titleAr: 'كتاب توصية رسمي – تطوير واجهات الويب الأمامية',
    issuer: 'Focal X Agency (Syrian O.P limited liability co.)',
    date: 'Date: 20/09/2025',
    recommender: 'Alaa Darwish (Founder & CEO)',
    category: 'web',
    type: 'recommendation',
    localPath: '/certificates/Haydar_Abdo_Frontend_Lv1_Recommendation.pdf',
    driveUrl: GOOGLE_DRIVE_LINKS.recommendations.frontendLv1,
    externalUrl: GOOGLE_DRIVE_LINKS.recommendations.frontendLv1,
    summary: '"He demonstrated exceptional creativity, attention to detail, technical expertise, teamwork, and adaptability... He has the skills and work ethic to thrive in digital front-end."',
    summaryAr: '"أثبت مهارة استثنائية واهتماماً دقيقاً بالتفاصيل والتقنيات الحديثة، وأوصي به كإضافة قيمة لأي فريق تطوير واجهات أمامية رقمية."'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'focal-mentor',
    role: 'Cyber Security Training Mentor (Teaching Assistant)',
    roleAr: 'مرشد ومساعد تدريس في الأمن السيبراني واختبار الاختراق',
    organization: 'Focal X Academy',
    organizationAr: 'أكاديمية Focal X',
    period: 'Mar 2026 – Aug 2026',
    periodAr: 'آذار 2026 – آب 2026',
    type: 'cyber',
    achievements: [
      'Transitioned from top-performing trainee (Ranked 1st) to Teaching Assistant mentoring 19 incoming cybersecurity trainees across 31 intensive live sessions.',
      'Guided trainees through hands-on reconnaissance and exploitation techniques using Nmap, Subfinder, Maltego, Gobuster, and Metasploit.',
      'Coached learners through practical hacking labs (Metasploit, Burp Suite, SQLmap, Hydra) aligned with the OWASP Top 10 security framework.',
      'Supported trainees on TryHackMe and PortSwigger Web Security Academy, driving an 80% measurable improvement in assessment performance.'
    ],
    achievementsAr: [
      'تمت الترقية من المتدرب الأول على الدفعة إلى مساعد تدريس وموجه لـ 19 متدرباً جديداً عبر 31 جلسة عملية تفاعلية.',
      'تدريب الطلاب على تقنيات جمع المعلومات، والفحص، والاستغلال العملي باستخدام Nmap و Subfinder و Maltego و Metasploit.',
      'توجيه الطلاب في حل سيناريوهات الاختراق الواقعية وتطبيق إطار OWASP Top 10 باستخدام Burp Suite و SQLmap و Hydra.',
      'مرافقة المتدربين على منصتي TryHackMe و PortSwigger Web Security Academy، مما رفع معدل نجاحهم في التقييمات بنسبة 80%.'
    ]
  },
  {
    id: 'focal-trainee',
    role: 'Cyber Security Penetration Tester Trainee (Ranked 1st of 25)',
    roleAr: 'متدرب اختبار اختراق الأمن السيبراني (المركز الأول من بين 25 متدرباً)',
    organization: 'Focal X Academy',
    organizationAr: 'أكاديمية Focal X',
    period: 'Sep 2025 – Feb 2026',
    periodAr: 'أيلول 2025 – شباط 2026',
    type: 'cyber',
    achievements: [
      'Finished 1st out of 25 trainees across 13 graded, timed penetration testing assignments and 2 full live engagements (CyberX and OWASP Juice Shop).',
      'Conducted end-to-end penetration testing methodology: Reconnaissance, Scanning, Vulnerability Assessment, Exploitation, Privilege Escalation, and Reporting.',
      'Gained hands-on experience across 4+ lab environments: Metasploitable 2, Windows 7 SP1 (x64), OWASP Juice Shop, and Ubuntu CyberX.',
      'Solved 25+ TryHackMe challenge rooms and 33+ PortSwigger Web Security Academy labs with zero reliance on walk-throughs.'
    ],
    achievementsAr: [
      'تحقيق المركز الأول من بين 25 متدرباً عبر إتمام 13 مهمة اختبار اختراق محددة بوقت، وتنفيذ عمليتي تدقيق كاملتين (CyberX و OWASP Juice Shop).',
      'تطبيق منهجية اختبار الاختراق الكاملة من جمع المعلومات والفحص والاستغلال وتصعيد الصلاحيات إلى صياغة التقارير الفنية.',
      'إجراء اختبارات اختراق عملية على 4 بيئات تدريبية: Metasploitable 2 و Windows 7 و OWASP Juice Shop وخادم CyberX.',
      'إكمال أكثر من 25 غرفة في منصة TryHackMe و 33 مختبراً متخصصاً في PortSwigger Web Security Academy.'
    ]
  },
  {
    id: 'education-uni',
    role: 'B.Sc. in Computer Engineering & Automatic Control (Ranked 3rd in Cohort)',
    roleAr: 'إجازة في هندسة حاسبات وتحكم آلي (المرتبة الثالثة على الدفعة)',
    organization: 'Latakia University / Tishreen University',
    organizationAr: 'جامعة اللاذقية / جامعة تشرين',
    period: 'Graduated: 2026',
    periodAr: 'سنة التخرج: 2026',
    type: 'education',
    achievements: [
      'Graduated ranked 3rd in the entire academic cohort with high distinction.',
      'Comprehensive study of systems programming, computer networks, object-oriented programming (OOP), data structures & algorithms, and automated control systems.',
      'Robotics & AI graduation project utilizing computer vision, convolutional neural networks (CNNs), and Python data-science libraries.',
      'Deep foundation in low-level operating system architectures, fuzzy logic, state machines, and real-time computing systems.'
    ],
    achievementsAr: [
      'التخرج بالمرتبة الثالثة على مستوى الدفعة الأكاديمية بتفوق مع مرتبة شرف.',
      'دراسة متعمقة في هندسة البرمجيات، شبكات الحاسوب، البرمجة كائنية التوجه، الخوارزميات، ونظم التحكم الآلي والروبوتات.',
      'مشروع تخرج تطبيقي في الروبوتات والذكاء الاصطناعي معتمداً على الرؤية الحاسوبية وشبكات التعلم العميق CNNs.',
      'أساس متين في بنية أنظمة التشغيل، والمنطق الضبابي Fuzzy Logic، والأنظمة المدمجة الآنية.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'flutter-skills',
    title: 'Mobile App Development (Flutter & Dart)',
    titleAr: 'تطوير تطبيقات الهواتف الذكية (فلاتر ودارت)',
    track: 'flutter',
    skills: [
      { name: 'Flutter SDK (Lvl.1 & Lvl.2 Certified)', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Dart Programming Language', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'State Management: GetX & Provider', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Clean Architecture & BLoC Principles', level: 'Proficient', levelAr: 'متقن', featured: true },
      { name: 'REST APIs & JSON Parsing', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Firebase (Auth, Firestore, Cloud)', level: 'Proficient', levelAr: 'متقن' },
      { name: 'Local Databases: SQLite, Hive, SharedPreferences', level: 'Proficient', levelAr: 'متقن' },
      { name: 'Figma to Flutter Pixel-Perfect UI', level: 'Advanced', levelAr: 'متقدم' },
      { name: 'Custom Animations & Transitions', level: 'Proficient', levelAr: 'متقن' },
      { name: 'Multilingual & RTL Layout Support', level: 'Expert', levelAr: 'خبير' },
      { name: 'App Security & Encrypted Storage', level: 'Proficient', levelAr: 'متقن', featured: true }
    ]
  },
  {
    id: 'cyber-skills',
    title: 'Cyber Security & Red Teaming (Penetration Tester)',
    titleAr: 'الأمن السيبراني واختبار الاختراق (الفريق الأحمر)',
    track: 'cyber',
    skills: [
      { name: 'Methodology: Recon, Enum, Exploit, PrivEsc', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Kali Linux & Virtualization (VMware)', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Metasploit Framework & Msfvenom', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Burp Suite (Web Vulnerability Intercept)', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Nmap & Network Enumeration', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'OWASP Top 10 (SQLi, XSS, IDOR, SSRF)', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'Gobuster, Hydra, Subfinder, Netcraft', level: 'Advanced', levelAr: 'متقدم' },
      { name: 'OSINT: Shodan, DNSdumpster, Whois, crt.sh, Maltego', level: 'Advanced', levelAr: 'متقدم' },
      { name: 'Linux & Windows Privilege Escalation', level: 'Proficient', levelAr: 'متقن', featured: true },
      { name: 'Wireshark & Packet Analysis', level: 'Proficient', levelAr: 'متقن' },
      { name: 'Technical & Remediation Reporting', level: 'Advanced', levelAr: 'متقدم' }
    ]
  },
  {
    id: 'engineering-ai',
    title: 'Computer Engineering & Automatic Control · AI',
    titleAr: 'هندسة حاسبات وتحكم آلي والذكاء الاصطناعي',
    track: 'general',
    skills: [
      { name: 'Computer Engineering & Automatic Control (3rd Rank)', level: 'Degree', levelAr: 'إجازة جامعية', featured: true },
      { name: 'Machine Learning & Deep Learning (CNNs)', level: 'Applied', levelAr: 'تطبيقي', featured: true },
      { name: 'Computer Vision & OpenCV', level: 'Applied', levelAr: 'تطبيقي' },
      { name: 'Python (NumPy, Pandas, Scikit-learn)', level: 'Advanced', levelAr: 'متقدم', featured: true },
      { name: 'C++ & Object-Oriented Programming (OOP)', level: 'Advanced', levelAr: 'متقدم' },
      { name: 'Data Structures & Algorithms', level: 'Advanced', levelAr: 'متقدم' },
      { name: 'Fuzzy Logic & State Machines', level: 'Proficient', levelAr: 'متقن' },
      { name: 'Front-End Web: React, HTML5, CSS3, Tailwind', level: 'Proficient', levelAr: 'متقن' },
      { name: 'AI Workflows: ChatGPT, Gemini, Copilot, Claude', level: 'Expert', levelAr: 'خبير', featured: true },
      { name: 'Git, GitHub & Version Control Workflows', level: 'Advanced', levelAr: 'متقدم' }
    ]
  }
];

export const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      certifications: 'Certifications',
      terminal: 'Terminal CLI',
      contact: 'Contact',
      downloadCv: 'Preview CV',
      viewAll: 'All Domains'
    },
    hero: {
      badge: 'Available for Remote & On-Site Opportunities',
      academicHighlight: 'Ranked 3rd in Academic Cohort · B.Sc. Computer Engineering & Automatic Control (2026)',
      pentestHighlight: 'Ranked 1st of 25 in Focal X Cyber Security Training',
      name: 'Haydar Thaeer Abdo',
      taglineAll: 'Computer Engineering & Automatic Control · Flutter Mobile Developer · Cyber Security Penetration Tester',
      taglineFlutter: 'Crafting High-Performance, Beautiful Flutter & Dart Mobile Applications',
      taglineCyber: 'Methodology-Driven Red Team Penetration Tester & Offensive Security Specialist',
      summary: 'Computer Engineering & Automatic Control graduate (Latakia University, ranked 3rd in cohort) bridging software craftsmanship and defensive-minded offensive security. Specialized in building cross-platform Flutter applications and executing end-to-end penetration testing with Kali Linux, Metasploit, and Burp Suite.',
      downloadFlutterCv: 'Preview Flutter CV (PDF)',
      downloadCyberCv: 'Preview Penetration Tester CV (PDF)',
      downloadAiCv: 'Preview AI / ML CV (PDF)',
      exploreProjects: 'Explore Projects',
      launchTerminal: 'Launch Terminal',
      contactMe: 'Get In Touch'
    },
    trackSwitcher: {
      title: 'Active Specialization Lens',
      all: 'All Disciplines',
      flutter: 'Flutter Developer',
      cyber: 'Penetration Tester',
      descAll: 'Showcasing full cross-discipline capabilities in Mobile, Cyber Security, and Computer Engineering.',
      descFlutter: 'Focusing on Flutter SDK, Dart, Clean Architecture, State Management, and interactive UI.',
      descCyber: 'Focusing on Red Teaming, OSINT, Network Enumeration, Exploitation, and OWASP Top 10.'
    },
    about: {
      title: 'About Me',
      subtitle: 'Where Systems Engineering Meets Mobile Innovation & Offensive Security',
      bioP1: 'I am Haydar Thaeer Abdo, a Computer Engineering & Automatic Control graduate from Latakia University (Tishreen University), where I ranked 3rd across my academic cohort in 2026. My engineering education instilled a rigorous understanding of low-level systems, data structures, operating systems, and algorithmic thinking.',
      bioP2: 'In software development, I have specialized as a Flutter Developer, completing Level 1 & Level 2 certifications and building production-grade mobile applications with Clean Architecture, GetX, Provider, and seamless API integrations.',
      bioP3: 'In cybersecurity, I operate as a Junior Penetration Tester (Red Team). I finished 1st out of 25 trainees in an intensive hands-on program at Focal X Academy and was subsequently promoted to Training Mentor, coaching 19 future security analysts across 31 sessions with an 80% improvement in assessment performance.',
      statsRank: '3rd',
      statsRankLabel: 'Academic Cohort Rank (Latakia University)',
      statsFirst: '1st',
      statsFirstLabel: 'Place in Cyber Security Training (Focal X)',
      statsRooms: '58+',
      statsRoomsLabel: 'TryHackMe & PortSwigger Labs Solved',
      statsTrainees: '19',
      statsTraineesLabel: 'Trainees Mentored Across 31 Sessions',
      softSkillsTitle: 'Core Engineering Competencies & Soft Skills',
      softSkills: [
        'Problem Solving & Analytical Thinking',
        'Time Management & Delivery Under Pressure',
        'Team Collaboration & Mentorship',
        'Adaptability & Fast Self-Learning',
        'Clear Technical Communication & Documentation'
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Arabic', level: 'Native Language' },
        { name: 'English', level: '(A2+)' }
      ]
    },
    skills: {
      title: 'Skills & Technical Matrix',
      subtitle: 'Categorized proficiencies across Mobile Engineering, Offensive Security, and AI Systems',
      filterAll: 'All Skills',
      filterFlutter: 'Flutter & Mobile',
      filterCyber: 'Cyber Security (Red Team)',
      filterGeneral: 'AI & Engineering',
      legendFeatured: 'Primary Production Focus'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Real-world mobile apps, penetration testing engagements, and web platforms',
      filterAll: 'All Projects',
      filterFlutter: 'Flutter Apps',
      filterCyber: 'Penetration Testing',
      filterWeb: 'Web & AI',
      viewCode: 'Source Code',
      viewDetails: 'Inspect Architecture',
      liveDemo: 'Live Demo',
      closeModal: 'Close',
      modalHighlights: 'Key Technical Highlights',
      modalTechStack: 'Tech Stack & Tools Used'
    },
    experience: {
      title: 'Experience & Mentorship',
      subtitle: 'Proven track record of high achievement, technical coaching, and applied research',
      mentorBadge: 'Leadership & Mentorship',
      traineeBadge: 'Top Distinction',
      eduBadge: 'University Honours'
    },
    certifications: {
      title: 'Certifications & Official Endorsements',
      subtitle: 'Verifiable credentials and recommendation letters issued by Focal X Academy leadership',
      filterAll: 'All Credentials',
      filterCertificates: 'Certificates',
      filterLetters: 'Recommendation Letters',
      viewCredential: 'View Document & Verification Details',
      certifiedBy: 'Certified & Signed by Alaa Darwish, Founder & CEO',
      validId: 'Credential ID'
    },
    terminal: {
      title: 'Interactive Engineer Console',
      subtitle: 'Explore Haydar’s profile through an authentic Unix-style terminal emulator',
      placeholder: 'Type a command (e.g. help, whoami, skills, projects, cv flutter, clear)...',
      run: 'Execute',
      welcome: 'Welcome to Haydar Thaeer Abdo Interactive CLI v2.4.\nType "help" for a list of available commands or click the shortcut buttons below.'
    },
    cv: {
      title: 'Download & Preview Curriculum Vitae',
      subtitle: 'Official CVs tailored specifically for hiring managers and recruiters',
      flutterTitle: 'Flutter Mobile Developer CV',
      flutterDesc: 'Tailored for Mobile Engineering roles. Covers Dart, Flutter SDK, Clean Architecture, GetX, state patterns, and app portfolio.',
      cyberTitle: 'Penetration Tester (Red Team) CV',
      cyberDesc: 'Tailored for Offensive Security, Pentesting, and SOC roles. Covers Nmap, Metasploit, Burp Suite, OWASP Top 10, and lab engagements.',
      engineerTitle: 'Computer Engineering & Automatic Control · AI CV',
      engineerDesc: 'Full comprehensive CV highlighting B.Sc. graduation 3rd rank, systems engineering, AI/ML background, and dual disciplines.',
      downloadPdf: 'Download PDF',
      previewCv: 'Preview Online',
      printCv: 'Print / Save as PDF'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind, need a security audit, or seeking a dedicated engineer? Let’s connect.',
      formName: 'Your Full Name',
      formEmail: 'Your Email Address',
      formSubject: 'Subject / Area of Interest',
      formSubjectOptions: {
        flutter: 'Flutter Mobile App Development',
        cyber: 'Penetration Testing & Security Audit',
        mentorship: 'Technical Mentorship / Consultation',
        hiring: 'Full-time / Part-time Job Offer',
        general: 'General Inquiry'
      },
      formMessage: 'Your Message',
      formMessagePlaceholder: 'Describe your project requirements, timeline, or scope...',
      submit: 'Send Message',
      sending: 'Transmitting Message to Haydar...',
      successTitle: 'Message Dispatched Successfully!',
      successDesc: 'Thank you for reaching out! Your message was delivered directly to eng.haydar.abdo@gmail.com. Haydar will review your inquiry and reply promptly.',
      recipientNotice: 'Directly delivered to: eng.haydar.abdo@gmail.com',
      errorTitle: 'Message Transmission Notice',
      errorDesc: 'Could not connect to the form delivery gateway. You can retry or open your mail app with all details pre-filled.',
      retryBtn: 'Retry Sending',
      openEmailApp: 'Open Email Client (Pre-filled to Haydar)',
      directContacts: 'Direct Contact Coordinates',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone & WhatsApp',
      locationLabel: 'Location & Availability',
      locationVal: 'Latakia, Syria · Open to Global Remote & Relocation',
      copySuccess: 'Copied to clipboard!'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Engineered with React, TypeScript & Tailwind CSS.',
      backToTop: 'Back to Top'
    }
  },
  ar: {
    nav: {
      about: 'نبذة عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرات',
      certifications: 'الشهادات والتوصيات',
      terminal: 'الطرفية التفاعلية',
      contact: 'تواصل معي',
      downloadCv: 'معاينة السيرة الذاتية',
      viewAll: 'كافة المجالات'
    },
    hero: {
      badge: 'متاح للعمل عن بُعد وللفرص الوظيفية في المشاريع',
      academicHighlight: 'المرتبة الثالثة على الدفعة الأكاديمية · إجازة في هندسة حاسبات وتحكم آلي (2026)',
      pentestHighlight: 'المركز الأول من بين 25 متدرباً في برنامج الأمن السيبراني بأكاديمية Focal X',
      name: 'حيدر ثائر عبدو',
      taglineAll: 'مهندس حاسبات وتحكم آلي · مطور تطبيقات هواتف (فلاتر) · مختبر اختراق أمن سيبراني',
      taglineFlutter: 'بناء وتطوير تطبيقات هواتف ذكية متقدمة وسريعة الاستجابة بتقنية Flutter و Dart',
      taglineCyber: 'مختبر اختراق أمني معتمد (فريق أحمر) وخبير في اكتشاف وترقيع الثغرات الأمنية',
      summary: 'خريج هندسة حاسبات وتحكم آلي من جامعة اللاذقية (المرتبة 3 على الدفعة). أجمع بين دقة الهندسة البرمجية العالية وتطوير تطبيقات Flutter متعددة المنصات، والخبرة الميدانية الهجومية في اختبار اختراق الشبكات وتطبيقات الويب وفق معايير OWASP.',
      downloadFlutterCv: 'معاينة سيرة فلاتر (PDF)',
      downloadCyberCv: 'معاينة سيرة الأمن السيبراني (PDF)',
      downloadAiCv: 'معاينة سيرة الذكاء الاصطناعي (PDF)',
      exploreProjects: 'تصفح المشاريع',
      launchTerminal: 'تشغيل الطرفية',
      contactMe: 'تواصل معي مباشرة'
    },
    trackSwitcher: {
      title: 'عدسة التخصص النشطة',
      all: 'مهندس شامل',
      flutter: 'مطور فلاتر',
      cyber: 'مختبر اختراق',
      descAll: 'عرض شامل لكافة الإمكانات في تطوير تطبيقات الموبايل، والأمن السيبراني، وهندسة البرمجيات.',
      descFlutter: 'التركيز على إطار Flutter، ولغة Dart، والعمارة النظيفة، وإدارة الحالة وتجارب الاستخدام.',
      descCyber: 'التركيز على الفريق الأحمر، وجمع المعلومات الاستخباراتية، والفحص الشبكي، واستغلال الثغرات.'
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'حيث تلتقي النظم الهندسية الصارمة مع ابتكار الموبايل والأمن الهجومي',
      bioP1: 'أنا المهندس حيدر ثائر عبدو، خريج هندسة حاسبات وتحكم آلي من جامعة اللاذقية (جامعة تشرين) لعام 2026، وقد حققت المرتبة الثالثة بمرتبة الشرف على مستوى الدفعة الأكاديمية. منحتني دراستي الهندسية فهماً عميقاً لبنية النظم، والشبكات، وهياكل البيانات، والخوارزميات المعقدة.',
      bioP2: 'في مجال تطوير البرمجيات، تخصصت في تطوير تطبيقات الهواتف الذكية بتقنية Flutter، وحصلت على شهادات المستوى الأول والثاني وكتب توصية رسمية، حيث قمت بتنفيذ تطبيقات إنتاجية متكاملة تعتمد Clean Architecture و GetX و Provider والربط مع خدمات الويب وقواعد البيانات.',
      bioP3: 'في مجال الأمن السيبراني، أعمل كمختبر اختراق (فريق أحمر). أحرزت المركز الأول من بين 25 متدرباً في برنامج مكثف بأكاديمية Focal X، وتم اختياري لاحقاً كمساعد تدريس ومرشد قمت خلالها بتدريب 19 متدرباً عبر 31 جلسة عملية، محققاً تحسناً بنسبة 80% في أدائهم التقييمي.',
      statsRank: '3',
      statsRankLabel: 'المرتبة الأكاديمية على مستوى الدفعة (جامعة اللاذقية)',
      statsFirst: '1',
      statsFirstLabel: 'المركز الأول في تدريب الأمن السيبراني (Focal X)',
      statsRooms: '+58',
      statsRoomsLabel: 'تحدي ومختبر على TryHackMe و PortSwigger',
      statsTrainees: '19',
      statsTraineesLabel: 'متدرباً تم توجيههم عبر 31 جلسة حية',
      softSkillsTitle: 'المهارات الشخصية والهندسية',
      softSkills: [
        'حل المشكلات البرمجية والتفكير التحليلي العميق',
        'إدارة الوقت والالتزام بالتسليم تحت ضغط العمل',
        'العمل الجماعي وروح الإرشاد والتوجيه التقني',
        'المرونة العالية وسرعة التعلم الذاتي ومواكبة الأدوات',
        'التواصل الفني الفعال وتوثيق التقارير الاحترافية'
      ],
      languagesTitle: 'اللغات',
      languages: [
        { name: 'العربية', level: 'اللغة الأم (إتقان تام)' },
        { name: 'الإنجليزية', level: ' (A2+)' }
      ]
    },
    skills: {
      title: 'المهارات والخبرات التقنية',
      subtitle: 'مصفوفة شاملة ومصنفة لتطوير الموبايل، والأمن الهجومي، وتقنيات الذكاء الاصطناعي',
      filterAll: 'كافة المهارات',
      filterFlutter: 'فلاتر والموبايل',
      filterCyber: 'الأمن السيبراني (Red Team)',
      filterGeneral: 'هندسة حاسبات وتحكم آلي والذكاء الاصطناعي',
      legendFeatured: 'مهارة رئيسية في بيئات الإنتاج'
    },
    projects: {
      title: 'المشاريع البارزة',
      subtitle: 'تطبيقات هواتف حقيقية، وعمليات اختبار اختراق ميدانية، ومواقع ويب حديثة',
      filterAll: 'كافة المشاريع',
      filterFlutter: 'تطبيقات فلاتر',
      filterCyber: 'اختبار الاختراق',
      filterWeb: 'الويب والذكاء الاصطناعي',
      viewCode: 'الكود المصدري',
      viewDetails: 'فحص البنية التقنية',
      liveDemo: 'معاينة حية',
      closeModal: 'إغلاق',
      modalHighlights: 'أبرز الإنجازات التقنية والمعمارية',
      modalTechStack: 'حزمة التقنيات والأدوات المستخدمة'
    },
    experience: {
      title: 'الخبرات المهنية والإرشاد',
      subtitle: 'سجل حافل بالتفوق الأكاديمي، وتدريب الكفاءات، والبحث التقني التطبيقي',
      mentorBadge: 'قيادة وإرشاد تقني',
      traineeBadge: 'صدارة وتفوق تدريبي',
      eduBadge: 'مرتبة شرف أكاديمية'
    },
    certifications: {
      title: 'الشهادات وكتب التوصية الرسمية',
      subtitle: 'وثائق اعتماد رسمية موثقة برقم الترخيص وموقعة من الرئيس التنفيذي لأكاديمية Focal X',
      filterAll: 'كافة الاعتمادات',
      filterCertificates: 'شهادات التدريب',
      filterLetters: 'كتب التوصية الرسمية',
      viewCredential: 'معاينة الوثيقة وبيانات التحقق',
      certifiedBy: 'معتمدة وموقعة من علاء درويش، المؤسس والمدير التنفيذي',
      validId: 'رقم الشهادة المعتمد'
    },
    terminal: {
      title: 'الطرفية البرمجية التفاعلية',
      subtitle: 'استكشف مهارات حيدر وسيرته الذاتية عبر سطر أوامر حقيقي مستوحى من نظام لينكس',
      placeholder: 'اكتب أمراً برمجياً (مثل: help, whoami, skills, projects, cv flutter, clear)...',
      run: 'تنفيذ',
      welcome: 'مرحباً بك في طرفية حيدر ثائر عبدو التفاعلية الإصدار 2.4.\nاكتب "help" لعرض الأوامر المتاحة أو اضغط على الأزرار السريعة أدناه.'
    },
    cv: {
      title: 'معاينة وتحميل السيرة الذاتية',
      subtitle: 'سير ذاتية متخصصة ومصممة بدقة لمسؤولي التوظيف والشركات التقنية',
      flutterTitle: 'سيرة مطور تطبيقات فلاتر (Flutter CV)',
      flutterDesc: 'مخصصة لوظائف تطوير الموبايل: لغة Dart، وإطار Flutter، والعمارة النظيفة، وإدارة الحالة، ونماذج التطبيقات المنجزة.',
      cyberTitle: 'سيرة مختبر الاختراق والأمن السيبراني (Red Team CV)',
      cyberDesc: 'مخصصة لوظائف الأمن الهجومي واختبار الاختراق: أدوات Kali و Metasploit و Burp Suite وتقارير تدقيق بيئة CyberX و OWASP.',
      engineerTitle: 'سيرة هندسة حاسبات وتحكم آلي والذكاء الاصطناعي',
      engineerDesc: 'سيرة شاملة تبرز التفوق بالمرتبة الثالثة على الدفعة، وأساسيات نظم التشغيل، ومشروع التخرج في الروبوتات والذكاء الاصطناعي.',
      downloadPdf: 'تحميل كملف PDF',
      previewCv: 'معاينة فورية',
      printCv: 'طباعة / حفظ PDF'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك مشروع تطبيق هاتف، أو تحتاج لتدقيق أمني شامل، أو تبحث عن مهندس كفء لفريقك؟ يسعدني التواصل معك.',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formSubject: 'الموضوع / مجال التعاون المطلوب',
      formSubjectOptions: {
        flutter: 'تطوير تطبيق هاتف ذكي (فلاتر)',
        cyber: 'اختبار اختراق وتدقيق أمني',
        mentorship: 'إرشاد تقني واستشارة برمجية',
        hiring: 'عرض عمل وظيفي (عن بعد أو دوام كامل)',
        general: 'استفسار عام'
      },
      formMessage: 'تفاصيل الرسالة أو المشروع',
      formMessagePlaceholder: 'صف متطلبات مشروعك، والجدول الزمني المقترح، والمواصفات المطلوبة...',
      submit: 'إرسال الرسالة الآن',
      sending: 'جارٍ إرسال الرسالة إلى م. حيدر...',
      successTitle: 'تم إرسال رسالتك بنجاح!',
      successDesc: 'شكراً لتواصلك! تم تسليم رسالتك مباشرة إلى eng.haydar.abdo@gmail.com وسيقوم المهندس حيدر بالرد عليك في أقرب وقت.',
      recipientNotice: 'يتم تسليم الرسائل مباشرة إلى: eng.haydar.abdo@gmail.com',
      errorTitle: 'تعذر الاتصال ببوابة الإرسال',
      errorDesc: 'حدث خطأ في الاتصال بالشبكة أو البوابة. يمكنك إعادة المحاولة فوراً، أو إرسال الرسالة عبر تطبيق البريد مع تعبئة البيانات مسبقاً.',
      retryBtn: 'إعادة المحاولة',
      openEmailApp: 'إرسال عبر تطبيق البريد (مباشرة إلى حيدر)',
      directContacts: 'بيانات التواصل المباشر',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف والواتساب',
      locationLabel: 'الموقع والجاهزية',
      locationVal: 'اللاذقية، سوريا · متاح للعمل عن بُعد ولفرص الانتقال الدولية',
      copySuccess: 'تم النسخ إلى الحافظة بنجاح!'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      builtWith: 'تم البناء والتصميم باستخدام React و TypeScript و Tailwind CSS.',
      backToTop: 'العودة للأعلى'
    }
  }
};
