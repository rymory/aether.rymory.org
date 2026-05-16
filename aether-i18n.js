// Aether i18n — EN, TR, RU, ES, FR, ET, IT, PL
// XSS-safe — textContent only, never innerHTML

const AETHER_I18N = {
  en: {
    nav_what: "What is Aether",
    nav_arch: "Architecture",
    nav_origin: "Origin",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Rymory Protocol",

    hero_eyebrow: "◈ Ecosystem Runtime",
    hero_h1a: "The medium",
    hero_h1b: "apps live in.",
    hero_sub: "Aether is the web ecosystem runtime and application shell of the Rymory platform. It carries authentication, session orchestration, cross-app navigation and multi-tenant context — invisibly, across every application.",
    hero_btn1: "Explore on GitHub",
    hero_btn2: "What is Aether?",

    what_label: "What is Aether",
    what_h2a: "Not a frontend.",
    what_h2b: "An environment.",
    what_p1: "Most identity systems give you an auth endpoint. Aether gives applications a place to live. It is the shared runtime layer that connects identity to experience — carrying auth context, session state, navigation, multi-language support and multi-tenant isolation across every application in the ecosystem.",
    what_p2: "You do not see Aether. You see the applications it carries.",

    layer1_tag: "Rymory",
    layer1_h: "Identity Layer",
    layer1_p: "JWT authentication, federation, role hierarchy, session tokens. The ground truth of who you are.",
    layer2_tag: "Aether",
    layer2_h: "Runtime Layer",
    layer2_p: "App orchestration, config-driven routing, SSO propagation, template engine, multi-tenant context. The medium everything runs in.",
    layer3_tag: "Lemoras",
    layer3_h: "Ecosystem Layer",
    layer3_p: "Notes, Drive, Planner, Passwords — applications that live inside the runtime, authenticated by the identity layer.",

    quote: "\"Aether is not the authority. It is the environment.\"",
    quote_cite: "— Aether Runtime, design principle",

    feat_label: "What Aether carries",
    feat_h2a: "Everything apps need.",
    feat_h2b: "Nothing they don't.",
    feat1_h: "Config-driven routing",
    feat1_p: "Every application, route and navigation structure is defined in JSON config. Same runtime, infinite configurations.",
    feat2_h: "SSO session propagation",
    feat2_p: "Cross-domain login and logout flow built in. One session travels to every connected application automatically.",
    feat3_h: "Multi-tenant context",
    feat3_p: "appId, merchantId, projectId, roleId — carried in every request. Applications always know their tenant scope.",
    feat4_h: "Template engine",
    feat4_p: "w_artfactory for public pages. w_default for authenticated panels. Swappable per-application, even per-user.",
    feat5_h: "Multi-language runtime",
    feat5_p: "EN, TR, RU and more built in. Language detected from browser, stored in context, applied across every view.",
    feat6_h: "Plugin-style app loading",
    feat6_p: "Each app is an isolated module. Notes, Drive, Planner, Passwords — same shell, different configs. New apps drop in.",

    arch_label: "Architecture",
    arch_h2a: "How Aether sits",
    arch_h2b: "in the stack.",
    arch1_h: "Rymory sits above",
    arch1_p: "Authentication, JWT issuance and session validation are handled entirely by Rymory. Aether consumes the identity — it does not produce it.",
    arch2_h: "Aether carries the middle",
    arch2_p: "Between identity and application lives the runtime. Config loading, route orchestration, SSO propagation, template selection — all Aether.",
    arch3_h: "Apps plug in below",
    arch3_p: "Notes, Drive, Planner, Passwords — each app is a module. Same shell. Different config. New applications drop in without touching the runtime.",
    arch4_h: "Lemoras is the ecosystem",
    arch4_p: "Lemoras is not a framework. It is a living ecosystem of applications built on top of Rymory identity and Aether runtime.",

    origin_label: "Origin",
    origin_h: "Nine years of organic evolution.",
    origin_p1: "Aether was not designed. It emerged. Starting in 2017 as the frontend layer of the Lemoras ecosystem, it accumulated patterns over years of real production use — config-driven routing, cross-domain SSO, multi-tenant context, plugin-style app loading.",
    origin_p2: "At some point, the infrastructure had clearly outgrown its label. This was no longer a UI project. It was a runtime. An environment. A medium. The word Aether — the ancient concept of the invisible medium that carries everything — was the only name that fit.",
    origin_p3: "Aether is developed as an independent runtime project, while remaining the official runtime layer of the Rymory ecosystem.",
    origin_btn1: "View on GitHub",
    origin_btn2: "Read the philosophy →",

    cta_h2a: "The medium",
    cta_h2b: "is now open.",
    cta_p: "Aether is part of the Rymory open ecosystem. Build your own applications on top of it, fork it, extend it — or just understand how a real production runtime works.",
    cta_btn1: "GitHub →",
    cta_btn2: "Back to Rymory",

    footer_copy: "© 2027 Aether Runtime — Part of the Rymory ecosystem · By Onur Yaşar",
  },

  tr: {
    nav_what: "Aether Nedir",
    nav_arch: "Mimari",
    nav_origin: "Köken",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Rymory Protokolü",

    hero_eyebrow: "◈ Ekosistem Çalışma Ortamı",
    hero_h1a: "Uygulamaların",
    hero_h1b: "yaşadığı ortam.",
    hero_sub: "Aether, Rymory platformunun web ekosistemi çalışma ortamı ve uygulama kabuğudur. Kimlik doğrulama, oturum yönetimi, uygulamalar arası navigasyon ve çok kiracılı bağlamı — görünmez biçimde her uygulamaya taşır.",
    hero_btn1: "GitHub'da İncele",
    hero_btn2: "Aether Nedir?",

    what_label: "Aether Nedir",
    what_h2a: "Bir frontend değil.",
    what_h2b: "Bir ortam.",
    what_p1: "Çoğu kimlik sistemi size bir auth endpoint verir. Aether uygulamalara yaşanacak bir yer verir. Kimliği deneyime bağlayan ortak çalışma katmanıdır — auth bağlamını, oturum durumunu, navigasyonu, çok dilli desteği ve çok kiracılı izolasyonu ekosistemde her uygulamaya taşır.",
    what_p2: "Aether'i görmezsiniz. Taşıdığı uygulamaları görürsünüz.",

    layer1_tag: "Rymory",
    layer1_h: "Kimlik Katmanı",
    layer1_p: "JWT kimlik doğrulama, federasyon, rol hiyerarşisi, oturum token'ları. Kim olduğunuzun gerçeği.",
    layer2_tag: "Aether",
    layer2_h: "Çalışma Ortamı Katmanı",
    layer2_p: "Uygulama orkestrasyonu, config tabanlı yönlendirme, SSO yayılımı, şablon motoru, çok kiracılı bağlam. Her şeyin içinde çalıştığı ortam.",
    layer3_tag: "Lemoras",
    layer3_h: "Ekosistem Katmanı",
    layer3_p: "Notlar, Drive, Planlayıcı, Şifreler — çalışma ortamı içinde yaşayan ve kimlik katmanı tarafından doğrulanan uygulamalar.",

    quote: "\"Aether otorite değildir. Ortamdır.\"",
    quote_cite: "— Aether Runtime, tasarım ilkesi",

    feat_label: "Aether Ne Taşır",
    feat_h2a: "Uygulamaların ihtiyacı olan her şey.",
    feat_h2b: "Gerekmeyenler değil.",
    feat1_h: "Config tabanlı yönlendirme",
    feat1_p: "Her uygulama, rota ve navigasyon yapısı JSON config ile tanımlanır. Aynı ortam, sonsuz yapılandırma.",
    feat2_h: "SSO oturum yayılımı",
    feat2_p: "Çapraz domain giriş ve çıkış akışı yerleşik. Bir oturum tüm bağlı uygulamalara otomatik taşınır.",
    feat3_h: "Çok kiracılı bağlam",
    feat3_p: "appId, merchantId, projectId, roleId — her istekte taşınır. Uygulamalar her zaman kiracı kapsamını bilir.",
    feat4_h: "Şablon motoru",
    feat4_p: "Genel sayfalar için w_artfactory. Kimlik doğrulamalı paneller için w_default. Uygulama veya kullanıcı başına değiştirilebilir.",
    feat5_h: "Çok dilli çalışma ortamı",
    feat5_p: "TR, EN, RU ve daha fazlası yerleşik. Dil tarayıcıdan algılanır, bağlamda saklanır, her görünüme uygulanır.",
    feat6_h: "Eklenti tarzı uygulama yükleme",
    feat6_p: "Her uygulama izole bir modüldür. Notlar, Drive, Planlayıcı, Şifreler — aynı kabuk, farklı config. Yeni uygulamalar kolayca eklenir.",

    arch_label: "Mimari",
    arch_h2a: "Aether stack'te",
    arch_h2b: "nasıl konumlanır.",
    arch1_h: "Rymory üstte durur",
    arch1_p: "Kimlik doğrulama, JWT üretimi ve oturum doğrulama tamamen Rymory tarafından yönetilir. Aether kimliği tüketir — üretmez.",
    arch2_h: "Aether ortayı taşır",
    arch2_p: "Kimlik ve uygulama arasında çalışma ortamı yaşar. Config yükleme, rota orkestrasyonu, SSO yayılımı, şablon seçimi — hepsi Aether.",
    arch3_h: "Uygulamalar alta bağlanır",
    arch3_p: "Notlar, Drive, Planlayıcı, Şifreler — her uygulama bir modüldür. Aynı kabuk. Farklı config. Yeni uygulamalar çalışma ortamına dokunmadan eklenir.",
    arch4_h: "Lemoras ekosistemdir",
    arch4_p: "Lemoras bir framework değildir. Rymory kimliği ve Aether çalışma ortamı üzerine inşa edilmiş canlı bir uygulama ekosistemidir.",

    origin_label: "Köken",
    origin_h: "Dokuz yıllık organik evrim.",
    origin_p1: "Aether tasarlanmadı. Ortaya çıktı. 2017'de Lemoras ekosisteminin frontend katmanı olarak başlayarak, yıllar içinde gerçek üretim kullanımıyla örüntüler biriktirdi — config tabanlı yönlendirme, çapraz domain SSO, çok kiracılı bağlam, eklenti tarzı uygulama yükleme.",
    origin_p2: "Bir noktada altyapı açıkça etiketini geride bırakmıştı. Bu artık bir UI projesi değildi. Bir çalışma ortamıydı. Bir ortamdı. Bir medium'du. Aether kelimesi — her şeyi taşıyan görünmez medium'un antik kavramı — uyan tek isimdi.",
    origin_p3: "Aether, Rymory ekosisteminin resmi çalışma ortamı katmanı olmayı sürdürürken bağımsız bir çalışma ortamı projesi olarak geliştirilmektedir.",
    origin_btn1: "GitHub'da İncele",
    origin_btn2: "Felsefeyi Oku →",

    cta_h2a: "Ortam",
    cta_h2b: "artık açık.",
    cta_p: "Aether, Rymory açık ekosisteminin bir parçasıdır. Üzerine kendi uygulamalarınızı inşa edin, fork'layın, genişletin — ya da gerçek bir üretim çalışma ortamının nasıl çalıştığını anlayın.",
    cta_btn1: "GitHub →",
    cta_btn2: "Rymory'ye Dön",

    footer_copy: "© 2027 Aether Runtime — Rymory ekosisteminin parçası · Onur Yaşar",
  },

  ru: {
    nav_what: "Что такое Aether",
    nav_arch: "Архитектура",
    nav_origin: "Происхождение",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Протокол Rymory",

    hero_eyebrow: "◈ Среда выполнения экосистемы",
    hero_h1a: "Среда, в которой",
    hero_h1b: "живут приложения.",
    hero_sub: "Aether — среда выполнения веб-экосистемы и оболочка приложений платформы Rymory. Она несёт аутентификацию, управление сессиями, межприложную навигацию и мультиарендный контекст — незримо, для каждого приложения.",
    hero_btn1: "Открыть на GitHub",
    hero_btn2: "Что такое Aether?",

    what_label: "Что такое Aether",
    what_h2a: "Не фронтенд.",
    what_h2b: "Среда.",
    what_p1: "Большинство систем идентификации дают вам endpoint аутентификации. Aether даёт приложениям место для жизни. Это общий слой среды выполнения, соединяющий идентификацию с опытом — несущий контекст аутентификации, состояние сессии, навигацию, многоязычную поддержку и мультиарендную изоляцию.",
    what_p2: "Вы не видите Aether. Вы видите приложения, которые она несёт.",

    layer1_tag: "Rymory",
    layer1_h: "Слой идентификации",
    layer1_p: "JWT-аутентификация, федерация, иерархия ролей, токены сессий. Истина о том, кто вы есть.",
    layer2_tag: "Aether",
    layer2_h: "Слой среды выполнения",
    layer2_p: "Оркестрация приложений, маршрутизация на основе конфигурации, распространение SSO, движок шаблонов, мультиарендный контекст. Среда, в которой всё работает.",
    layer3_tag: "Lemoras",
    layer3_h: "Слой экосистемы",
    layer3_p: "Заметки, Drive, Планировщик, Пароли — приложения, живущие в среде выполнения, аутентифицированные слоем идентификации.",

    quote: "\"Aether — не авторитет. Это среда.\"",
    quote_cite: "— Aether Runtime, принцип проектирования",

    feat_label: "Что несёт Aether",
    feat_h2a: "Всё, что нужно приложениям.",
    feat_h2b: "Ничего лишнего.",
    feat1_h: "Маршрутизация на основе конфигурации",
    feat1_p: "Каждое приложение, маршрут и структура навигации определены в JSON. Одна среда, бесконечные конфигурации.",
    feat2_h: "Распространение SSO-сессий",
    feat2_p: "Встроенный поток входа и выхода между доменами. Одна сессия автоматически распространяется на все подключённые приложения.",
    feat3_h: "Мультиарендный контекст",
    feat3_p: "appId, merchantId, projectId, roleId — передаётся в каждом запросе. Приложения всегда знают свой арендный контекст.",
    feat4_h: "Движок шаблонов",
    feat4_p: "w_artfactory для публичных страниц. w_default для панелей. Меняется на уровне приложения или пользователя.",
    feat5_h: "Многоязычная среда выполнения",
    feat5_p: "RU, EN, TR и другие встроены. Язык определяется из браузера, хранится в контексте, применяется везде.",
    feat6_h: "Загрузка приложений в стиле плагинов",
    feat6_p: "Каждое приложение — изолированный модуль. Заметки, Drive, Планировщик, Пароли — одна оболочка, разные конфигурации.",

    arch_label: "Архитектура",
    arch_h2a: "Как Aether",
    arch_h2b: "располагается в стеке.",
    arch1_h: "Rymory сверху",
    arch1_p: "Аутентификация, выдача JWT и проверка сессий полностью обрабатываются Rymory. Aether потребляет идентификацию — не производит её.",
    arch2_h: "Aether занимает середину",
    arch2_p: "Между идентификацией и приложением живёт среда выполнения. Загрузка конфигурации, оркестрация маршрутов, распространение SSO, выбор шаблона — всё это Aether.",
    arch3_h: "Приложения подключаются снизу",
    arch3_p: "Заметки, Drive, Планировщик, Пароли — каждое приложение является модулем. Одна оболочка. Разная конфигурация.",
    arch4_h: "Lemoras — это экосистема",
    arch4_p: "Lemoras — не фреймворк. Это живая экосистема приложений, построенных на основе идентификации Rymory и среды выполнения Aether.",

    origin_label: "Происхождение",
    origin_h: "Девять лет органической эволюции.",
    origin_p1: "Aether не был спроектирован. Он возник. Начав в 2017 году как фронтенд-слой экосистемы Lemoras, он накапливал паттерны за годы реального производственного использования.",
    origin_p2: "В какой-то момент инфраструктура явно переросла своё название. Это был уже не UI-проект. Это была среда выполнения. Среда. Медиум. Слово Aether — древняя концепция невидимого медиума, несущего всё — оказалось единственным подходящим именем.",
    origin_p3: "Aether разрабатывается как независимый проект среды выполнения, оставаясь официальным слоем среды выполнения экосистемы Rymory.",
    origin_btn1: "Открыть на GitHub",
    origin_btn2: "Читать философию →",

    cta_h2a: "Среда",
    cta_h2b: "теперь открыта.",
    cta_p: "Aether — часть открытой экосистемы Rymory. Создавайте свои приложения поверх неё, форкайте, расширяйте — или просто поймите, как работает реальная производственная среда выполнения.",
    cta_btn1: "GitHub →",
    cta_btn2: "Назад к Rymory",

    footer_copy: "© 2027 Aether Runtime — Часть экосистемы Rymory · Онур Яшар",
  },

  es: {
    nav_what: "Qué es Aether",
    nav_arch: "Arquitectura",
    nav_origin: "Origen",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Protocolo Rymory",

    hero_eyebrow: "◈ Runtime del Ecosistema",
    hero_h1a: "El medio donde",
    hero_h1b: "viven las apps.",
    hero_sub: "Aether es el runtime del ecosistema web y la shell de aplicaciones de la plataforma Rymory. Lleva autenticación, orquestación de sesiones, navegación entre apps y contexto multi-tenant — de forma invisible, a través de cada aplicación.",
    hero_btn1: "Explorar en GitHub",
    hero_btn2: "¿Qué es Aether?",

    what_label: "Qué es Aether",
    what_h2a: "No es un frontend.",
    what_h2b: "Es un entorno.",
    what_p1: "La mayoría de los sistemas de identidad te dan un endpoint de auth. Aether da a las aplicaciones un lugar donde vivir. Es la capa de runtime compartida que conecta la identidad con la experiencia — llevando el contexto de auth, el estado de sesión, la navegación, el soporte multiidioma y el aislamiento multi-tenant a cada aplicación del ecosistema.",
    what_p2: "No ves Aether. Ves las aplicaciones que lleva.",

    layer1_tag: "Rymory", layer1_h: "Capa de Identidad",
    layer1_p: "Autenticación JWT, federación, jerarquía de roles, tokens de sesión.",
    layer2_tag: "Aether", layer2_h: "Capa de Runtime",
    layer2_p: "Orquestación de apps, enrutamiento config-driven, propagación SSO, motor de plantillas, contexto multi-tenant.",
    layer3_tag: "Lemoras", layer3_h: "Capa del Ecosistema",
    layer3_p: "Notas, Drive, Planificador, Contraseñas — aplicaciones que viven dentro del runtime.",

    quote: "\"Aether no es la autoridad. Es el entorno.\"",
    quote_cite: "— Aether Runtime, principio de diseño",

    feat_label: "Qué lleva Aether",
    feat_h2a: "Todo lo que las apps necesitan.",
    feat_h2b: "Nada más.",
    feat1_h: "Enrutamiento config-driven", feat1_p: "Cada app, ruta y estructura de navegación definida en JSON config.",
    feat2_h: "Propagación de sesión SSO", feat2_p: "Flujo de login y logout entre dominios integrado.",
    feat3_h: "Contexto multi-tenant", feat3_p: "appId, merchantId, projectId, roleId — llevado en cada solicitud.",
    feat4_h: "Motor de plantillas", feat4_p: "w_artfactory para páginas públicas. w_default para paneles autenticados.",
    feat5_h: "Runtime multiidioma", feat5_p: "ES, EN, TR, RU integrados. Idioma detectado del navegador.",
    feat6_h: "Carga de apps estilo plugin", feat6_p: "Cada app es un módulo aislado. Misma shell, diferente config.",

    arch_label: "Arquitectura",
    arch_h2a: "Cómo se posiciona Aether",
    arch_h2b: "en el stack.",
    arch1_h: "Rymory arriba", arch1_p: "Autenticación, emisión JWT y validación de sesiones manejadas por Rymory.",
    arch2_h: "Aether en el medio", arch2_p: "Entre identidad y aplicación vive el runtime.",
    arch3_h: "Apps se conectan abajo", arch3_p: "Notas, Drive, Planificador, Contraseñas — cada app es un módulo. Misma shell, diferente config. Nuevas apps se añaden sin tocar el runtime.",
    arch4_h: "Lemoras es el ecosistema", arch4_p: "Un ecosistema vivo de aplicaciones sobre Rymory y Aether.",

    origin_label: "Origen",
    origin_h: "Nueve años de evolución orgánica.",
    origin_p1: "Aether no fue diseñado. Emergió. Comenzando en 2017 como la capa frontend del ecosistema Lemoras.",
    origin_p2: "En algún momento, la infraestructura había claramente superado su etiqueta. Ya no era un proyecto UI. Era un runtime. Un entorno. Un medio.",
    origin_p3: "Aether se desarrolla como proyecto de runtime independiente, siendo la capa de runtime oficial del ecosistema Rymory.",
    origin_btn1: "Ver en GitHub", origin_btn2: "Leer la filosofía →",

    cta_h2a: "El medio", cta_h2b: "ahora está abierto.",
    cta_p: "Aether es parte del ecosistema abierto de Rymory. Construye tus propias aplicaciones sobre él, haz un fork, extiéndelo — o simplemente entiende cómo funciona un runtime de producción real.",
    cta_btn1: "GitHub →", cta_btn2: "Volver a Rymory",
    footer_copy: "© 2027 Aether Runtime — Parte del ecosistema Rymory · Onur Yaşar",
  },

  fr: {
    nav_what: "Qu'est-ce qu'Aether",
    nav_arch: "Architecture",
    nav_origin: "Origine",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Protocole Rymory",

    hero_eyebrow: "◈ Runtime de l'Écosystème",
    hero_h1a: "Le milieu où",
    hero_h1b: "vivent les apps.",
    hero_sub: "Aether est le runtime de l'écosystème web et le shell d'application de la plateforme Rymory. Il porte l'authentification, l'orchestration de sessions, la navigation inter-apps et le contexte multi-tenant — invisiblement, à travers chaque application.",
    hero_btn1: "Explorer sur GitHub",
    hero_btn2: "Qu'est-ce qu'Aether?",

    what_label: "Qu'est-ce qu'Aether",
    what_h2a: "Pas un frontend.",
    what_h2b: "Un environnement.",
    what_p1: "La plupart des systèmes d'identité vous donnent un endpoint auth. Aether donne aux applications un endroit où vivre. C'est la couche de runtime partagée qui connecte l'identité à l'expérience — portant le contexte d'auth, l'état de session, la navigation, le support multilingue et l'isolation multi-tenant à chaque application de l'écosystème.",
    what_p2: "Vous ne voyez pas Aether. Vous voyez les applications qu'il porte.",

    layer1_tag: "Rymory", layer1_h: "Couche d'Identité",
    layer1_p: "Authentification JWT, fédération, hiérarchie des rôles, tokens de session.",
    layer2_tag: "Aether", layer2_h: "Couche Runtime",
    layer2_p: "Orchestration d'apps, routage config-driven, propagation SSO, moteur de templates, contexte multi-tenant.",
    layer3_tag: "Lemoras", layer3_h: "Couche Écosystème",
    layer3_p: "Notes, Drive, Planificateur, Mots de passe — applications vivant dans le runtime.",

    quote: "\"Aether n'est pas l'autorité. C'est l'environnement.\"",
    quote_cite: "— Aether Runtime, principe de conception",

    feat_label: "Ce qu'Aether porte",
    feat_h2a: "Tout ce dont les apps ont besoin.",
    feat_h2b: "Rien de plus.",
    feat1_h: "Routage config-driven", feat1_p: "Chaque app, route et structure de navigation définie en JSON config.",
    feat2_h: "Propagation de session SSO", feat2_p: "Flux de connexion et déconnexion inter-domaines intégré.",
    feat3_h: "Contexte multi-tenant", feat3_p: "appId, merchantId, projectId, roleId — porté dans chaque requête.",
    feat4_h: "Moteur de templates", feat4_p: "w_artfactory pour pages publiques. w_default pour panneaux authentifiés.",
    feat5_h: "Runtime multilingue", feat5_p: "FR, EN, TR, RU intégrés. Langue détectée du navigateur.",
    feat6_h: "Chargement d'apps style plugin", feat6_p: "Chaque app est un module isolé. Même shell, config différente.",

    arch_label: "Architecture",
    arch_h2a: "Comment Aether se positionne",
    arch_h2b: "dans la stack.",
    arch1_h: "Rymory en haut", arch1_p: "Authentification, émission JWT et validation de session gérées par Rymory.",
    arch2_h: "Aether au milieu", arch2_p: "Entre l'identité et l'application vit le runtime.",
    arch3_h: "Les apps se connectent en bas", arch3_p: "Notes, Drive, Planificateur, Mots de passe — chaque app est un module. Même shell, config différente. Nouvelles apps sans toucher le runtime.",
    arch4_h: "Lemoras est l'écosystème", arch4_p: "Un écosystème vivant d'applications sur Rymory et Aether.",

    origin_label: "Origine",
    origin_h: "Neuf ans d'évolution organique.",
    origin_p1: "Aether n'a pas été conçu. Il a émergé. Commençant en 2017 comme couche frontend de l'écosystème Lemoras, il a accumulé des patterns au fil des années d'utilisation réelle en production — routage config-driven, SSO inter-domaines, contexte multi-tenant, chargement d'apps style plugin.",
    origin_p2: "À un moment donné, l'infrastructure avait clairement dépassé son étiquette. Ce n'était plus un projet UI. C'était un runtime. Un environnement. Un milieu.",
    origin_p3: "Aether est développé comme projet de runtime indépendant, tout en restant la couche de runtime officielle de l'écosystème Rymory.",
    origin_btn1: "Voir sur GitHub", origin_btn2: "Lire la philosophie →",

    cta_h2a: "Le milieu", cta_h2b: "est maintenant ouvert.",
    cta_p: "Aether fait partie de l'écosystème ouvert Rymory. Construisez vos propres applications par-dessus, forkez-le, étendez-le — ou comprenez simplement comment fonctionne un vrai runtime de production.",
    cta_btn1: "GitHub →", cta_btn2: "Retour à Rymory",
    footer_copy: "© 2027 Aether Runtime — Partie de l'écosystème Rymory · Onur Yaşar",
  },

  et: {
    nav_what: "Mis on Aether",
    nav_arch: "Arhitektuur",
    nav_origin: "Päritolu",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Rymory protokoll",

    hero_eyebrow: "◈ Ökosüsteemi käituskeskkond",
    hero_h1a: "Keskkond, kus",
    hero_h1b: "rakendused elavad.",
    hero_sub: "Aether on Rymory platvormi veebi ökosüsteemi käituskeskkond ja rakenduste kest. See kannab autentimist, seansi haldust, rakenduste vahelist navigatsiooni ja mitme rentniku konteksti — nähtamatult, igale rakendusele.",
    hero_btn1: "Uuri GitHubis",
    hero_btn2: "Mis on Aether?",

    what_label: "Mis on Aether",
    what_h2a: "Mitte frontend.",
    what_h2b: "Keskkond.",
    what_p1: "Enamik identiteedisüsteeme annab teile auth endpoint'i. Aether annab rakendustele koha elamiseks. See on ühine käituskeskkonna kiht, mis ühendab identiteedi kogemusega — kandes autentimise konteksti, seansi olekut, navigatsiooni, mitmekeelset tuge ja mitme rentniku isolatsiooni igale ökosüsteemi rakendusele.",
    what_p2: "Te ei näe Aetherut. Näete rakendusi, mida see kannab.",

    layer1_tag: "Rymory", layer1_h: "Identiteedikiht",
    layer1_p: "JWT autentimine, federatsioon, rollide hierarhia, seansi tokenid.",
    layer2_tag: "Aether", layer2_h: "Käituskeskkonna kiht",
    layer2_p: "Rakenduste orkestreerimine, konfig-põhine marsruutimine, SSO levimine, mallimootor, mitme rentniku kontekst.",
    layer3_tag: "Lemoras", layer3_h: "Ökosüsteemikiht",
    layer3_p: "Märkmed, Drive, Planeerija, Paroolid — käituskeskkonnas elavad rakendused.",

    quote: "\"Aether ei ole autoriteet. See on keskkond.\"",
    quote_cite: "— Aether Runtime, kujunduspõhimõte",

    feat_label: "Mida Aether kannab",
    feat_h2a: "Kõik, mida rakendused vajavad.",
    feat_h2b: "Midagi muud mitte.",
    feat1_h: "Konfig-põhine marsruutimine", feat1_p: "Iga rakendus, marsruut ja navigatsioonistruktuur JSON konfiguratsioonil.",
    feat2_h: "SSO seansi levimine", feat2_p: "Domeeniülene sisselogimine ja väljalogimine sisseehitatud.",
    feat3_h: "Mitme rentniku kontekst", feat3_p: "appId, merchantId, projectId, roleId — kantud igas päringus.",
    feat4_h: "Mallimootor", feat4_p: "w_artfactory avalikele lehtedele. w_default autentitud paneelide jaoks.",
    feat5_h: "Mitmekeelne käituskeskkond", feat5_p: "ET, EN, TR, RU sisseehitatud. Keel tuvastatakse brauserist.",
    feat6_h: "Plugina-stiilis rakenduste laadimine", feat6_p: "Iga rakendus on isoleeritud moodul. Sama kest, erinev konfig.",

    arch_label: "Arhitektuur",
    arch_h2a: "Kuidas Aether paikneb",
    arch_h2b: "virnas.",
    arch1_h: "Rymory on peal", arch1_p: "Autentimine, JWT väljastamine ja seansi valideerimine Rymory poolt.",
    arch2_h: "Aether kannab keskel", arch2_p: "Identiteedi ja rakenduse vahel elab käituskeskkond.",
    arch3_h: "Rakendused ühenduvad all", arch3_p: "Märkmed, Drive, Planeerija, Paroolid — iga rakendus on moodul. Sama kest, erinev konfig. Uued rakendused lisanduvad käituskeskkonda puutumata.",
    arch4_h: "Lemoras on ökosüsteem", arch4_p: "Elav rakenduste ökosüsteem Rymory ja Aetheri peal.",

    origin_label: "Päritolu",
    origin_h: "Üheksa aastat orgaanilist evolutsiooni.",
    origin_p1: "Aetherut ei kujundatud. See tekkis. Alustades 2017. aastal Lemorasi ökosüsteemi frontend-kihina, kogus see aastate jooksul reaalsest tootmiskasutusest mustreid — konfig-põhine marsruutimine, domeeniülene SSO, mitme rentniku kontekst, plugina-stiilis rakenduste laadimine.",
    origin_p2: "Mingil hetkel oli infrastruktuur oma sildi selgelt ületanud. See ei olnud enam UI-projekt. See oli käituskeskkond. Keskkond. Medium.",
    origin_p3: "Aetherut arendatakse iseseisva käituskeskkonna projektina, jäädes Rymory ökosüsteemi ametlikuks käituskeskkonna kihiks.",
    origin_btn1: "Vaata GitHubis", origin_btn2: "Loe filosoofiat →",

    cta_h2a: "Keskkond", cta_h2b: "on nüüd avatud.",
    cta_p: "Aether on osa Rymory avatud ökosüsteemist. Ehitage oma rakendusi selle peale, tehke fork, laiendage — või mõistke lihtsalt, kuidas päris tootmiskäituskeskkond töötab.",
    cta_btn1: "GitHub →", cta_btn2: "Tagasi Rymory juurde",
    footer_copy: "© 2027 Aether Runtime — Rymory ökosüsteemi osa · Onur Yaşar",
  },

  it: {
    nav_what: "Cos'è Aether",
    nav_arch: "Architettura",
    nav_origin: "Origine",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Protocollo Rymory",

    hero_eyebrow: "◈ Runtime dell'Ecosistema",
    hero_h1a: "Il mezzo in cui",
    hero_h1b: "vivono le app.",
    hero_sub: "Aether è il runtime dell'ecosistema web e la shell applicativa della piattaforma Rymory. Porta autenticazione, orchestrazione delle sessioni, navigazione tra app e contesto multi-tenant — invisibilmente, attraverso ogni applicazione.",
    hero_btn1: "Esplora su GitHub",
    hero_btn2: "Cos'è Aether?",

    what_label: "Cos'è Aether",
    what_h2a: "Non un frontend.",
    what_h2b: "Un ambiente.",
    what_p1: "La maggior parte dei sistemi di identità ti dà un endpoint auth. Aether dà alle applicazioni un posto dove vivere. È il layer di runtime condiviso che connette l'identità all'esperienza — portando il contesto di auth, lo stato della sessione, la navigazione, il supporto multilingua e l'isolamento multi-tenant a ogni applicazione dell'ecosistema.",
    what_p2: "Non vedi Aether. Vedi le applicazioni che porta.",

    layer1_tag: "Rymory", layer1_h: "Strato Identità",
    layer1_p: "Autenticazione JWT, federazione, gerarchia dei ruoli, token di sessione.",
    layer2_tag: "Aether", layer2_h: "Strato Runtime",
    layer2_p: "Orchestrazione app, routing config-driven, propagazione SSO, motore template, contesto multi-tenant.",
    layer3_tag: "Lemoras", layer3_h: "Strato Ecosistema",
    layer3_p: "Note, Drive, Pianificatore, Password — applicazioni che vivono nel runtime.",

    quote: "\"Aether non è l'autorità. È l'ambiente.\"",
    quote_cite: "— Aether Runtime, principio di progettazione",

    feat_label: "Cosa porta Aether",
    feat_h2a: "Tutto ciò che le app necessitano.",
    feat_h2b: "Niente di più.",
    feat1_h: "Routing config-driven", feat1_p: "Ogni app, route e struttura di navigazione definita in JSON config.",
    feat2_h: "Propagazione sessione SSO", feat2_p: "Flusso di login e logout cross-domain integrato.",
    feat3_h: "Contesto multi-tenant", feat3_p: "appId, merchantId, projectId, roleId — portato in ogni richiesta.",
    feat4_h: "Motore template", feat4_p: "w_artfactory per pagine pubbliche. w_default per pannelli autenticati.",
    feat5_h: "Runtime multilingua", feat5_p: "IT, EN, TR, RU integrati. Lingua rilevata dal browser.",
    feat6_h: "Caricamento app stile plugin", feat6_p: "Ogni app è un modulo isolato. Stessa shell, config diversa.",

    arch_label: "Architettura",
    arch_h2a: "Come Aether si posiziona",
    arch_h2b: "nello stack.",
    arch1_h: "Rymory in alto", arch1_p: "Autenticazione, emissione JWT e validazione sessione gestite da Rymory.",
    arch2_h: "Aether al centro", arch2_p: "Tra identità e applicazione vive il runtime.",
    arch3_h: "Le app si collegano in basso", arch3_p: "Note, Drive, Pianificatore, Password — ogni app è un modulo. Stessa shell, config diversa. Nuove app si aggiungono senza toccare il runtime.",
    arch4_h: "Lemoras è l'ecosistema", arch4_p: "Un ecosistema vivente di applicazioni su Rymory e Aether.",

    origin_label: "Origine",
    origin_h: "Nove anni di evoluzione organica.",
    origin_p1: "Aether non è stato progettato. È emerso. Iniziando nel 2017 come strato frontend dell'ecosistema Lemoras, ha accumulato pattern nel corso di anni di utilizzo reale in produzione — routing config-driven, SSO cross-domain, contesto multi-tenant, caricamento app stile plugin.",
    origin_p2: "A un certo punto, l'infrastruttura aveva chiaramente superato la sua etichetta. Non era più un progetto UI. Era un runtime. Un ambiente. Un medium.",
    origin_p3: "Aether è sviluppato come progetto runtime indipendente, rimanendo lo strato runtime ufficiale dell'ecosistema Rymory.",
    origin_btn1: "Vedi su GitHub", origin_btn2: "Leggi la filosofia →",

    cta_h2a: "Il mezzo", cta_h2b: "è ora aperto.",
    cta_p: "Aether fa parte dell'ecosistema aperto Rymory. Costruisci le tue applicazioni sopra di esso, forkalo, estendilo — o semplicemente capisci come funziona un vero runtime di produzione.",
    cta_btn1: "GitHub →", cta_btn2: "Torna a Rymory",
    footer_copy: "© 2027 Aether Runtime — Parte dell'ecosistema Rymory · Onur Yaşar",
  },

  pl: {
    nav_what: "Czym jest Aether",
    nav_arch: "Architektura",
    nav_origin: "Pochodzenie",
    nav_rymory: "Rymory →",
    nav_github: "GitHub",
    nav_protocol: "Protokół Rymory",

    hero_eyebrow: "◈ Runtime Ekosystemu",
    hero_h1a: "Środowisko, w którym",
    hero_h1b: "żyją aplikacje.",
    hero_sub: "Aether to runtime ekosystemu webowego i powłoka aplikacji platformy Rymory. Przenosi uwierzytelnianie, orkiestrację sesji, nawigację między aplikacjami i kontekst wielodostępny — niewidocznie, przez każdą aplikację.",
    hero_btn1: "Przeglądaj na GitHub",
    hero_btn2: "Czym jest Aether?",

    what_label: "Czym jest Aether",
    what_h2a: "Nie frontend.",
    what_h2b: "Środowisko.",
    what_p1: "Większość systemów tożsamości daje endpoint auth. Aether daje aplikacjom miejsce do życia. To wspólna warstwa runtime, która łączy tożsamość z doświadczeniem — przenosząc kontekst auth, stan sesji, nawigację, wsparcie wielojęzyczne i izolację multi-tenant do każdej aplikacji w ekosystemie.",
    what_p2: "Nie widzisz Aether. Widzisz aplikacje, które przenosi.",

    layer1_tag: "Rymory", layer1_h: "Warstwa tożsamości",
    layer1_p: "Uwierzytelnianie JWT, federacja, hierarchia ról, tokeny sesji.",
    layer2_tag: "Aether", layer2_h: "Warstwa runtime",
    layer2_p: "Orkiestracja aplikacji, routing config-driven, propagacja SSO, silnik szablonów, kontekst wielodostępny.",
    layer3_tag: "Lemoras", layer3_h: "Warstwa ekosystemu",
    layer3_p: "Notatki, Drive, Planer, Hasła — aplikacje żyjące w runtime.",

    quote: "\"Aether nie jest autorytetem. Jest środowiskiem.\"",
    quote_cite: "— Aether Runtime, zasada projektowania",

    feat_label: "Co przenosi Aether",
    feat_h2a: "Wszystko, czego potrzebują aplikacje.",
    feat_h2b: "Nic zbędnego.",
    feat1_h: "Routing config-driven", feat1_p: "Każda aplikacja, trasa i struktura nawigacji zdefiniowana w JSON config.",
    feat2_h: "Propagacja sesji SSO", feat2_p: "Wbudowany przepływ logowania i wylogowania między domenami.",
    feat3_h: "Kontekst wielodostępny", feat3_p: "appId, merchantId, projectId, roleId — przenoszony w każdym żądaniu.",
    feat4_h: "Silnik szablonów", feat4_p: "w_artfactory dla stron publicznych. w_default dla paneli.",
    feat5_h: "Wielojęzyczny runtime", feat5_p: "PL, EN, TR, RU wbudowane. Język wykrywany z przeglądarki.",
    feat6_h: "Ładowanie aplikacji w stylu pluginów", feat6_p: "Każda aplikacja to izolowany moduł. Ta sama powłoka, inna konfiguracja.",

    arch_label: "Architektura",
    arch_h2a: "Jak Aether pozycjonuje się",
    arch_h2b: "w stosie.",
    arch1_h: "Rymory na górze", arch1_p: "Uwierzytelnianie, emisja JWT i walidacja sesji obsługiwane przez Rymory.",
    arch2_h: "Aether przenosi środek", arch2_p: "Między tożsamością a aplikacją żyje runtime.",
    arch3_h: "Aplikacje podłączają się na dole", arch3_p: "Notatki, Drive, Planer, Hasła — każda aplikacja to moduł. Ta sama powłoka, inna konfiguracja. Nowe aplikacje bez dotykania runtime.",
    arch4_h: "Lemoras to ekosystem", arch4_p: "Żywy ekosystem aplikacji zbudowany na Rymory i Aether.",

    origin_label: "Pochodzenie",
    origin_h: "Dziewięć lat organicznej ewolucji.",
    origin_p1: "Aether nie był projektowany. Wyłonił się. Zaczynając w 2017 roku jako warstwa frontend ekosystemu Lemoras, przez lata gromadził wzorce z rzeczywistego użycia produkcyjnego — routing config-driven, cross-domain SSO, kontekst multi-tenant, ładowanie aplikacji w stylu pluginów.",
    origin_p2: "W pewnym momencie infrastruktura wyraźnie przerosła swoją etykietę. To nie był już projekt UI. Był to runtime. Środowisko. Medium.",
    origin_p3: "Aether jest rozwijany jako niezależny projekt runtime, pozostając oficjalną warstwą runtime ekosystemu Rymory.",
    origin_btn1: "Zobacz na GitHub", origin_btn2: "Czytaj filozofię →",

    cta_h2a: "Środowisko", cta_h2b: "jest teraz otwarte.",
    cta_p: "Aether jest częścią otwartego ekosystemu Rymory. Buduj własne aplikacje na jego podstawie, forkuj, rozszerzaj — lub po prostu zrozum, jak działa prawdziwy runtime produkcyjny.",
    cta_btn1: "GitHub →", cta_btn2: "Powrót do Rymory",
    footer_copy: "© 2027 Aether Runtime — Część ekosystemu Rymory · Onur Yaşar",
  },
};

(function() {
  const SUPPORTED = ['en','tr','ru','es','fr','et','it','pl'];
  const LS_KEY = 'aether_lang';

  function detectLang() {
    const stored = localStorage.getItem(LS_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').slice(0,2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  function applyLang(lang) {
    const t = AETHER_I18N[lang] || AETHER_I18N['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(LS_KEY, lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function buildSwitcher() {
    const el = document.getElementById('lang-switcher');
    if (!el) return;
    const labels = {en:'EN',tr:'TR',ru:'RU',es:'ES',fr:'FR',et:'ET',it:'IT',pl:'PL'};
    SUPPORTED.forEach(l => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.setAttribute('data-lang', l);
      btn.textContent = labels[l];
      btn.addEventListener('click', () => applyLang(l));
      el.appendChild(btn);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    buildSwitcher();
    applyLang(detectLang());
  });

  window.aetherSetLang = applyLang;
})();
