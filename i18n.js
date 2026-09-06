(() => {
  const LANGS = ['zh-Hant', 'ja', 'en'];
  const page = document.body.dataset.page || 'home';

  const common = {
    'zh-Hant': {
      'nav.home': 'Home', 'nav.games': 'Games', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.wishlist': '願望清單',
      'footer.rights': '© 2026 KOKUTAN GAMES. All rights reserved.'
    },
    ja: {
      'nav.home': 'ホーム', 'nav.games': 'ゲーム', 'nav.about': 'About', 'nav.contact': 'お問い合わせ', 'nav.wishlist': 'ウィッシュリスト',
      'footer.rights': '© 2026 KOKUTAN GAMES. All rights reserved.'
    },
    en: {
      'nav.home': 'Home', 'nav.games': 'Games', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.wishlist': 'Wishlist',
      'footer.rights': '© 2026 KOKUTAN GAMES. All rights reserved.'
    }
  };

  const pages = {
    home: {
      'zh-Hant': {
        'meta.title': 'KOKUTAN GAMES',
        'meta.description': 'KOKUTAN GAMES — 獨立遊戲工作室。製作有個性、有溫度的小型遊戲。',
        'hero.lead': '有個性、有魅力的獨立遊戲。',
        'hero.sublead': '用遊戲，讓平凡的日常多一點可愛。',
        'hero.cta': '探索遊戲 →',
        'featured.eyebrow': '精選遊戲', 'featured.heading': '開發中', 'featured.status': '即將推出',
        'game.title': '鬆獅蜥育成所',
        'game.tagline': '培育、收集、互動，打造屬於你的鬆獅蜥小天地。',
        'game.summary': '照顧不同個性的鬆獅蜥，探索基因組合、布置房間，慢慢建立屬於自己的育成生活。',
        'game.feature.genes': '收集基因', 'game.feature.rooms': '房間互動', 'game.feature.dex': '圖鑑收集',
        'game.details': '查看遊戲介紹', 'game.wishlist': '加入願望清單',
        'pipo.status': '已發布', 'pipo.desc': 'Windows 桌面小寵物。Pipo 會在螢幕上走來走去，陪你待在桌面上。', 'pipo.link': '查看下載資訊 →',
        'about.eyebrow': '關於 KOKUTAN GAMES', 'about.heading': '小小的遊戲，也可以留下很長的陪伴。',
        'about.body': 'KOKUTAN GAMES 專注於製作具有個性、收集樂趣與生活感的獨立遊戲。希望玩家打開遊戲時，能找到一點放鬆、一點驚喜，以及屬於自己的小小世界。'
      },
      ja: {
        'meta.title': 'KOKUTAN GAMES',
        'meta.description': 'KOKUTAN GAMES — 個性と温かみのあるインディーゲームを制作するスタジオです。',
        'hero.lead': '個性と魅力のあるインディーゲーム。',
        'hero.sublead': 'ゲームで、何気ない毎日に少しのかわいさを。',
        'hero.cta': 'ゲームを見る →',
        'featured.eyebrow': '注目のゲーム', 'featured.heading': '制作中', 'featured.status': '近日公開',
        'game.title': 'フトアゴ育成所',
        'game.tagline': '育てて、集めて、ふれあって。あなただけのフトアゴの世界を作ろう。',
        'game.summary': '個性豊かなフトアゴをお世話し、遺伝子の組み合わせを探し、部屋を飾りながら、自分だけの育成生活を少しずつ作っていきます。',
        'game.feature.genes': '遺伝子収集', 'game.feature.rooms': '部屋でふれあう', 'game.feature.dex': '図鑑収集',
        'game.details': 'ゲーム紹介を見る', 'game.wishlist': 'ウィッシュリストに追加',
        'pipo.status': '配信中', 'pipo.desc': 'Windows用デスクトップペット。Pipoが画面の上を歩き回り、デスクトップであなたと過ごします。', 'pipo.link': 'ダウンロード情報を見る →',
        'about.eyebrow': 'KOKUTAN GAMESについて', 'about.heading': '小さなゲームでも、長く心に残る相棒になれる。',
        'about.body': 'KOKUTAN GAMESは、個性、コレクションの楽しさ、日常の空気感を大切にしたインディーゲームを制作しています。ゲームを開いたとき、少しの安らぎと驚き、そして自分だけの小さな世界を見つけてもらえることを目指しています。'
      },
      en: {
        'meta.title': 'KOKUTAN GAMES',
        'meta.description': 'KOKUTAN GAMES — An indie game studio creating small games with personality and warmth.',
        'hero.lead': 'Indie games with personality and charm.',
        'hero.sublead': 'Games that add a little charm to everyday life.',
        'hero.cta': 'Explore Our Games →',
        'featured.eyebrow': 'FEATURED GAME', 'featured.heading': 'IN DEVELOPMENT', 'featured.status': 'COMING SOON',
        'game.title': 'BEARDY BREEDER',
        'game.tagline': 'Raise, collect, and interact — build a little bearded dragon world of your own.',
        'game.summary': 'Care for bearded dragons with different personalities, explore genetic combinations, decorate their rooms, and slowly build your own breeding life.',
        'game.feature.genes': 'Collect Genes', 'game.feature.rooms': 'Room Interaction', 'game.feature.dex': 'Complete the Dex',
        'game.details': 'View Game', 'game.wishlist': 'Add to Wishlist',
        'pipo.status': 'RELEASED', 'pipo.desc': 'A Windows desktop pet. Pipo wanders around your screen and keeps you company on your desktop.', 'pipo.link': 'View Download Info →',
        'about.eyebrow': 'ABOUT KOKUTAN GAMES', 'about.heading': 'Small games can become long-lasting companions.',
        'about.body': 'KOKUTAN GAMES creates indie games built around personality, collecting, and everyday life. We want each game to offer a little calm, a little surprise, and a small world that feels like your own.'
      }
    },
    beardy: {
      'zh-Hant': {
        'meta.title': '鬆獅蜥育成所 | KOKUTAN GAMES',
        'meta.description': '鬆獅蜥育成所 — 培育、收集、互動，打造屬於你的鬆獅蜥小天地。',
        'game.status': '即將推出', 'game.title': '鬆獅蜥育成所', 'game.lead': '培育、收集、互動，打造屬於你的鬆獅蜥小天地。',
        'tag.sim': '模擬養成', 'tag.cozy': '休閒療癒', 'tag.single': '單人遊戲',
        'cta.wishlist': '加入願望清單', 'cta.features': '查看特色',
        'about.eyebrow': '關於遊戲', 'about.heading': '一個可以慢慢養、慢慢收集的小世界',
        'about.p1': '《鬆獅蜥育成所》是一款以鬆獅蜥為主題的養成遊戲。你可以培育不同基因與外觀的個體、佈置牠們的生活空間、觀察互動，並逐步完成自己的收集圖鑑。',
        'about.p2': '遊戲重點不是追求高壓節奏，而是讓每一隻鬆獅蜥都有自己的樣子，讓玩家在日常中慢慢累積屬於自己的育成紀錄。',
        'features.eyebrow': '遊戲特色', 'features.heading': '遊戲特色',
        'f1.title': '基因培育', 'f1.body': '透過繁殖與基因組合，培育不同花色與特殊外觀的鬆獅蜥。',
        'f2.title': '房間佈置', 'f2.body': '安排飼養空間與裝飾，打造自己的鬆獅蜥房間。',
        'f3.title': '日常互動', 'f3.body': '餵食、照顧、觀察牠們在房間裡活動，以及各種小事件。',
        'f4.title': '圖鑑收集', 'f4.body': '持續收集不同基因與個體，逐步完成專屬圖鑑。',
        'wish.heading': '願望清單', 'wish.note': 'Steam 商店頁正式公開後，這裡會放上「加入願望清單」連結。目前先保留位置，不放假連結。',
        'back': '← 回 KOKUTAN GAMES 首頁'
      },
      ja: {
        'meta.title': 'フトアゴ育成所 | KOKUTAN GAMES',
        'meta.description': 'フトアゴ育成所 — 育てて、集めて、ふれあって。あなただけのフトアゴの世界を作ろう。',
        'game.status': '近日公開', 'game.title': 'フトアゴ育成所', 'game.lead': '育てて、集めて、ふれあって。あなただけのフトアゴの世界を作ろう。',
        'tag.sim': '育成シミュレーション', 'tag.cozy': 'のんびり', 'tag.single': 'シングルプレイ',
        'cta.wishlist': 'ウィッシュリストに追加', 'cta.features': '特徴を見る',
        'about.eyebrow': 'ゲームについて', 'about.heading': 'ゆっくり育てて、少しずつ集めていく小さな世界',
        'about.p1': '『フトアゴ育成所』は、フトアゴヒゲトカゲをテーマにした育成ゲームです。さまざまな遺伝子や見た目の個体を育て、生活空間を飾り、ふれあいを観察しながら、自分だけの図鑑を少しずつ完成させていきます。',
        'about.p2': '急いで進めるゲームではありません。一匹一匹の違いを楽しみながら、毎日の中で自分だけの育成記録をゆっくり積み重ねていくことを大切にしています。',
        'features.eyebrow': '特徴', 'features.heading': 'ゲームの特徴',
        'f1.title': '遺伝子育成', 'f1.body': '繁殖と遺伝子の組み合わせから、さまざまな色や特別な外見のフトアゴを育てます。',
        'f2.title': '部屋づくり', 'f2.body': '飼育スペースや飾りを配置して、自分だけのフトアゴの部屋を作れます。',
        'f3.title': '日常のふれあい', 'f3.body': 'エサやりやお世話をしながら、部屋での行動や小さな出来事を見守ります。',
        'f4.title': '図鑑収集', 'f4.body': 'さまざまな遺伝子や個体を集めて、自分だけの図鑑を完成させていきます。',
        'wish.heading': 'ウィッシュリスト', 'wish.note': 'Steamストアページ公開後、ここにウィッシュリストへのリンクを掲載します。現在はダミーリンクを置かず、場所だけ確保しています。',
        'back': '← KOKUTAN GAMES ホームへ戻る'
      },
      en: {
        'meta.title': 'BEARDY BREEDER | KOKUTAN GAMES',
        'meta.description': 'BEARDY BREEDER — Raise, collect, and interact with bearded dragons in a little world of your own.',
        'game.status': 'COMING SOON', 'game.title': 'BEARDY BREEDER', 'game.lead': 'Raise, collect, and interact — build a little bearded dragon world of your own.',
        'tag.sim': 'Simulation', 'tag.cozy': 'Cozy', 'tag.single': 'Single-player',
        'cta.wishlist': 'Add to Wishlist', 'cta.features': 'View Features',
        'about.eyebrow': 'ABOUT THE GAME', 'about.heading': 'A small world to raise and collect at your own pace',
        'about.p1': 'BEARDY BREEDER is a raising game centered on bearded dragons. Breed individuals with different genes and appearances, decorate their living spaces, watch them interact, and gradually complete your own collection dex.',
        'about.p2': 'The focus is not on high-pressure progression. Each bearded dragon can look and feel different, letting you slowly build a personal breeding record through everyday play.',
        'features.eyebrow': 'FEATURES', 'features.heading': 'Game Features',
        'f1.title': 'Genetic Breeding', 'f1.body': 'Breed different colors and special appearances through reproduction and genetic combinations.',
        'f2.title': 'Room Decoration', 'f2.body': 'Arrange habitats and decorations to create your own bearded dragon rooms.',
        'f3.title': 'Everyday Interaction', 'f3.body': 'Feed, care for, and watch your bearded dragons move around their rooms and trigger small events.',
        'f4.title': 'Dex Collection', 'f4.body': 'Keep discovering new genes and individuals as you work toward completing your own dex.',
        'wish.heading': 'Wishlist', 'wish.note': 'A Steam wishlist link will appear here once the store page is public. For now, this space is reserved without using a fake link.',
        'back': '← Back to KOKUTAN GAMES Home'
      }
    },
    pipo: {
      'zh-Hant': {
        'meta.title': 'Pipo Desktop Pet | KOKUTAN GAMES', 'meta.description': 'Pipo Desktop Pet — Windows 桌面小寵物。',
        'pipo.lead': 'Windows 桌面小寵物。Pipo 會在螢幕上走來走去，陪你待在桌面上。', 'tag.free': '免費',
        'download': '下載 Windows 版 v1.1.0', 'note.eyebrow': '下載說明', 'note.heading': 'Windows 安全性提示',
        'note.p1': 'Pipo Desktop Pet 目前尚未使用商業程式碼簽章，因此 Windows 第一次執行時可能顯示「Windows 已保護您的電腦」及「不明的發行者」。',
        'note.p2': '這是 Microsoft Defender SmartScreen 對尚未建立信譽之未簽章程式的安全提示，並不代表 Windows 已偵測到病毒。',
        'note.file': '下載檔案：', 'note.sha': 'SHA-256：', 'note.p3': 'SHA-256 相同表示下載檔案與本站發布的 ZIP 內容一致。', 'back': '← 回 KOKUTAN GAMES 首頁'
      },
      ja: {
        'meta.title': 'Pipo Desktop Pet | KOKUTAN GAMES', 'meta.description': 'Pipo Desktop Pet — Windows用デスクトップペット。',
        'pipo.lead': 'Windows用デスクトップペット。Pipoが画面の上を歩き回り、デスクトップであなたと過ごします。', 'tag.free': '無料',
        'download': 'Windows版 v1.1.0 をダウンロード', 'note.eyebrow': 'ダウンロードについて', 'note.heading': 'Windowsのセキュリティ表示について',
        'note.p1': 'Pipo Desktop Pet は現在、商用コード署名を使用していないため、初回起動時に Windows が「Windows によって PC が保護されました」または不明な発行元として表示する場合があります。',
        'note.p2': 'これは、まだ評価が確立されていない未署名アプリに対する Microsoft Defender SmartScreen の警告であり、Windows がウイルスを検出したことを意味するものではありません。',
        'note.file': 'ダウンロードファイル：', 'note.sha': 'SHA-256：', 'note.p3': 'SHA-256 が一致していれば、ダウンロードした ZIP が当サイトで公開しているファイルと同一であることを確認できます。', 'back': '← KOKUTAN GAMES ホームへ戻る'
      },
      en: {
        'meta.title': 'Pipo Desktop Pet | KOKUTAN GAMES', 'meta.description': 'Pipo Desktop Pet — A Windows desktop pet.',
        'pipo.lead': 'A Windows desktop pet. Pipo wanders around your screen and keeps you company on your desktop.', 'tag.free': 'Free',
        'download': 'Download Windows v1.1.0', 'note.eyebrow': 'DOWNLOAD NOTE', 'note.heading': 'Windows Security Notice',
        'note.p1': 'Pipo Desktop Pet is not currently signed with a commercial code-signing certificate, so Windows may show “Windows protected your PC” or identify the publisher as unknown the first time you run it.',
        'note.p2': 'This is a Microsoft Defender SmartScreen warning for an unsigned app that has not yet built reputation. It does not mean that Windows detected a virus.',
        'note.file': 'Download file:', 'note.sha': 'SHA-256:', 'note.p3': 'A matching SHA-256 confirms that the downloaded ZIP is identical to the file published on this site.', 'back': '← Back to KOKUTAN GAMES Home'
      }
    }
  };

  function detectLanguage() {
    const saved = localStorage.getItem('kokutan-lang');
    if (LANGS.includes(saved)) return saved;
    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('ja')) return 'ja';
    if (browser.startsWith('zh')) return 'zh-Hant';
    return 'en';
  }

  function applyLanguage(lang) {
    if (!LANGS.includes(lang)) lang = 'en';
    localStorage.setItem('kokutan-lang', lang);
    document.documentElement.lang = lang;
    const dict = {...common[lang], ...(pages[page]?.[lang] || {})};

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = dict[el.dataset.i18n];
      if (value != null) el.textContent = value;
    });

    const title = dict['meta.title'];
    const desc = dict['meta.description'];
    if (title) document.title = title;
    if (desc) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', desc);
    }

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const active = btn.dataset.langBtn === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    document.querySelectorAll('[data-logo-localized]').forEach(img => {
      const target = img.dataset[`logo${lang === 'zh-Hant' ? 'Zh' : lang === 'ja' ? 'Ja' : 'En'}`];
      const fallback = img.dataset.logoZh;
      if (!target) return;
      img.onerror = () => {
        img.onerror = null;
        if (fallback && img.getAttribute('src') !== fallback) img.src = fallback;
      };
      img.src = target;
      img.alt = dict['game.title'] || img.alt;
    });
  }

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn));
  });

  applyLanguage(detectLanguage());
})();