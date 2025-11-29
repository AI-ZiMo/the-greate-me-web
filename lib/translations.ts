export type Language = 'en' | 'zh';

interface Translation {
  nav: {
    features: string;
    download: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    downloadButton: string;
    comingSoon: string;
  };
  features: {
    title: string;
    items: {
      missions: {
        title: string;
        description: string;
      };
      gamified: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
      tracking: {
        title: string;
        description: string;
      };
      tts: {
        title: string;
        description: string;
      };
      bilingual: {
        title: string;
        description: string;
      };
    };
  };
  screenshots: {
    title: string;
    captions: string[];
  };
  footer: {
    tagline: string;
    copyright: string;
    privacy: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      features: 'Features',
      download: 'Download',
    },
    hero: {
      title: 'The Great Me',
      subtitle: 'Special Task Force',
      description: 'This app uses the method of special agent tasks to help you record and iterate yourself.',
      downloadButton: 'Download on the App Store',
      comingSoon: 'Coming Soon',
    },
    features: {
      title: 'Everything you need to become your greatest self',
      items: {
        missions: {
          title: 'Daily Agent Missions',
          description: 'Transform your tasks into exciting special agent missions. Complete your daily objectives with a gamified approach.',
        },
        gamified: {
          title: 'Gamified Experience',
          description: 'Earn gold coins, track your progress, and level up your productivity with engaging game mechanics.',
        },
        ai: {
          title: 'AI Assistant',
          description: 'Your personal task assistant powered by AI. Get suggestions, add tasks, and summarize your progress.',
        },
        tracking: {
          title: 'Weekly Tracking',
          description: 'Monitor your progress with detailed weekly, monthly, and yearly views. Stay on top of your goals.',
        },
        tts: {
          title: 'Voice Narration',
          description: 'High-quality text-to-speech powered by Aliyun Qwen3-TTS for an immersive experience.',
        },
        bilingual: {
          title: 'Bilingual Support',
          description: 'Seamlessly switch between English and Chinese with full localization support.',
        },
      },
    },
    screenshots: {
      title: 'Beautiful Design. Powerful Features.',
      captions: [
        'Welcome Screen - Choose your language',
        'Daily Missions - Your agent dashboard',
        'Task Details - Track your victories',
        'Weekly Progress - Monitor your growth',
        'AI Assistant - Your mission support',
      ],
    },
    footer: {
      tagline: 'From The Great Me',
      copyright: '© 2025 The Great Me. All rights reserved.',
      privacy: 'Privacy Policy',
    },
  },
  zh: {
    nav: {
      features: '功能特性',
      download: '下载',
    },
    hero: {
      title: '伟大的我',
      subtitle: '特工任务小队',
      description: '这个 APP 用特工任务待办的方式，帮你记录并迭代自我。',
      downloadButton: '在 App Store 下载',
      comingSoon: '即将推出',
    },
    features: {
      title: '成为最伟大的自己所需的一切',
      items: {
        missions: {
          title: '每日特工任务',
          description: '将您的任务转化为激动人心的特工任务。以游戏化的方式完成您的每日目标。',
        },
        gamified: {
          title: '游戏化体验',
          description: '赚取金币，跟踪进度，通过引人入胜的游戏机制提升您的生产力。',
        },
        ai: {
          title: 'AI 助手',
          description: '由 AI 驱动的个人任务助手。获取建议、添加任务并总结您的进展。',
        },
        tracking: {
          title: '周度追踪',
          description: '通过详细的周、月、年视图监控您的进度。掌握您的目标。',
        },
        tts: {
          title: '语音叙述',
          description: '由阿里云 Qwen3-TTS 提供支持的高质量文字转语音，带来沉浸式体验。',
        },
        bilingual: {
          title: '双语支持',
          description: '在英语和中文之间无缝切换，完全本地化支持。',
        },
      },
    },
    screenshots: {
      title: '精美设计。强大功能。',
      captions: [
        '欢迎屏幕 - 选择您的语言',
        '每日任务 - 您的特工仪表板',
        '任务详情 - 追踪您的胜利',
        '周度进展 - 监控您的成长',
        'AI 助手 - 您的任务支持',
      ],
    },
    footer: {
      tagline: '来自伟大的我',
      copyright: '© 2025 伟大的我。保留所有权利。',
      privacy: '隐私政策',
    },
  },
};
