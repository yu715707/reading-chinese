/**
 * 汉字数据库 - 基础字表（300字）
 * 数据来源：《义务教育语文课程标准（2022版）》识字写字基本字表
 * 
 * 字库设计原则：
 * 1. 每个汉字包含完整的学习信息
 * 2. 独体字自动标记，跳过拆分训练
 * 3. 支持后续扩展到2500+1000字
 * 4. 模块化结构，便于维护和更新
 */

// ===== 独体字列表 =====
// 这些字不能再拆分，系统会自动跳过结构训练
const SIMPLE_CHARACTERS = new Set([
  '一', '二', '十', '厂', '七', '儿', '八', '人', '入', '几', '九', '了', '刀', '力', '又',
  '三', '干', '工', '土', '才', '下', '大', '上', '小', '口', '山', '巾', '千', '个', '广', '门', '已', '子', '也', '女', '飞', '习', '马',
  '五', '不', '太', '友', '车', '牙', '比', '切', '止', '少', '日', '中', '贝', '内', '见',
  '牛', '气', '毛', '长', '片', '反', '父', '从', '今', '分', '公', '月', '风', '六', '文', '方', '户', '双', '书', '打', '正', '去', '古', '本', '可', '左', '石', '右', '平', '北', '旦', '目', '电', '田', '叫', '四', '生', '禾', '们', '白', '他', '瓜', '用', '册', '外', '冬', '鸟', '包', '主',
  '立', '半', '出', '皮', '母', '老', '地', '耳', '共', '过', '在', '百', '有', '页', '光', '当', '早', '虫', '同', '吃', '回', '网', '年', '先', '自', '向', '后', '行', '全', '会', '合', '爷', '多', '冰', '交', '字', '羊', '米', '灯', '江', '阳', '阴', '好', '她', '妈', '羽', '红',
  '远', '走', '花', '村', '更', '豆', '医', '来', '时', '里', '男', '吵', '听', '吹', '财', '我', '利', '每', '体', '你', '住', '身', '近', '坐', '岛', '饭', '床', '库', '间', '灾', '迟', '张',
  '玩', '现', '拾', '直', '林', '画', '雨', '到', '非', '果', '国', '明', '忠', '和', '爸', '采', '朋', '鱼', '狗', '饱', '京', '放', '河', '学', '空', '房', '话', '织', '经',
  '春', '城', '草', '面', '轻', '背', '点', '是', '星', '昨', '看', '胆', '胖', '亮', '美', '前', '首', '洗', '穿', '语', '说', '孩',
  '班', '起', '都', '校', '样', '桌', '铅', '笔', '饿', '高', '站', '海', '家', '被', '祥', '课',
  '理', '雪', '常', '晚', '船', '盒', '彩', '猫'
]);

// ===== 字库主数据 =====
export const charactersDatabase = {
  // ===== 1画字 (1个) =====
  一: {
    id: '一_1hua',
    char: '一',
    pinyin: 'yī',
    pinyinTone: 1,
    pinyinSimple: 'yi',
    meanings: ['数字一', '单个', '第一'],
    radical: '一',
    radicalName: '横',
    structure: {
      type: '独体字',
      components: [],
      description: '这是一个独体字，笔画最少，代表数字1'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 1,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  // ===== 2画字 (14个) =====
  二: {
    id: '二_1hua',
    char: '二',
    pinyin: 'èr',
    pinyinTone: 4,
    pinyinSimple: 'er',
    meanings: ['数字二', '第二个', '两个'],
    radical: '二',
    radicalName: '二',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，代表数字2'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  十: {
    id: '十_1hua',
    char: '十',
    pinyin: 'shí',
    pinyinTone: 2,
    pinyinSimple: 'shi',
    meanings: ['数字十', '十个', '完全'],
    radical: '十',
    radicalName: '十',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，代表数字10'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  厂: {
    id: '厂_2hua',
    char: '厂',
    pinyin: 'chǎng',
    pinyinTone: 3,
    pinyinSimple: 'chang',
    meanings: ['工厂', '生产场所'],
    radical: '厂',
    radicalName: '厂',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  七: {
    id: '七_2hua',
    char: '七',
    pinyin: 'qī',
    pinyinTone: 1,
    pinyinSimple: 'qi',
    meanings: ['数字七', '七个', '一周'],
    radical: '一',
    radicalName: '横',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  儿: {
    id: '儿_2hua',
    char: '儿',
    pinyin: 'ér',
    pinyinTone: 2,
    pinyinSimple: 'er',
    meanings: ['小孩', '儿子', '幼小的'],
    radical: '儿',
    radicalName: '儿',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  八: {
    id: '八_2hua',
    char: '八',
    pinyin: 'bā',
    pinyinTone: 1,
    pinyinSimple: 'ba',
    meanings: ['数字八', '八个'],
    radical: '八',
    radicalName: '八',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  人: {
    id: '人_2hua',
    char: '人',
    pinyin: 'rén',
    pinyinTone: 2,
    pinyinSimple: 'ren',
    meanings: ['人类', '个人', '人物'],
    radical: '人',
    radicalName: '人',
    structure: {
      type: '独体��',
      components: [],
      description: '独体字，是很多字的部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  入: {
    id: '入_2hua',
    char: '入',
    pinyin: 'rù',
    pinyinTone: 4,
    pinyinSimple: 'ru',
    meanings: ['进入', '加入', '放入'],
    radical: '入',
    radicalName: '入',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  几: {
    id: '几_2hua',
    char: '几',
    pinyin: 'jī',
    pinyinTone: 1,
    pinyinSimple: 'ji',
    meanings: ['多少', '几个', '询问数量'],
    radical: '几',
    radicalName: '几',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  九: {
    id: '九_2hua',
    char: '九',
    pinyin: 'jiǔ',
    pinyinTone: 3,
    pinyinSimple: 'jiu',
    meanings: ['数字九', '九个'],
    radical: '九',
    radicalName: '九',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  了: {
    id: '了_2hua',
    char: '了',
    pinyin: 'le',
    pinyinTone: 0,
    pinyinSimple: 'le',
    meanings: ['完成', '结束', '语气词'],
    radical: '了',
    radicalName: '了',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常用的虚词'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  刀: {
    id: '刀_2hua',
    char: '刀',
    pinyin: 'dāo',
    pinyinTone: 1,
    pinyinSimple: 'dao',
    meanings: ['切割工具', '刀具', '剑'],
    radical: '刀',
    radicalName: '刀',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，可作为部件（刂）'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  力: {
    id: '力_2hua',
    char: '力',
    pinyin: 'lì',
    pinyinTone: 4,
    pinyinSimple: 'li',
    meanings: ['力气', '力量', '能力'],
    radical: '力',
    radicalName: '力',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  又: {
    id: '又_2hua',
    char: '又',
    pinyin: 'yòu',
    pinyinTone: 4,
    pinyinSimple: 'you',
    meanings: ['再一次', '又一个', '并且'],
    radical: '又',
    radicalName: '又',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 2,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  // ===== 3画字 (23个) - 示例几个 =====
  三: {
    id: '三_3hua',
    char: '三',
    pinyin: 'sān',
    pinyinTone: 1,
    pinyinSimple: 'san',
    meanings: ['数字三', '三个', '第三'],
    radical: '一',
    radicalName: '横',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  干: {
    id: '干_3hua',
    char: '干',
    pinyin: 'gàn',
    pinyinTone: 4,
    pinyinSimple: 'gan',
    meanings: ['主干', '杆子', '干燥'],
    radical: '干',
    radicalName: '干',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  工: {
    id: '工_3hua',
    char: '工',
    pinyin: 'gōng',
    pinyinTone: 1,
    pinyinSimple: 'gong',
    meanings: ['工作', '劳动', '工人'],
    radical: '工',
    radicalName: '工',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  土: {
    id: '土_3hua',
    char: '土',
    pinyin: 'tǔ',
    pinyinTone: 3,
    pinyinSimple: 'tu',
    meanings: ['泥土', '土壤', '地土'],
    radical: '土',
    radicalName: '土',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  才: {
    id: '才_3hua',
    char: '才',
    pinyin: 'cái',
    pinyinTone: 2,
    pinyinSimple: 'cai',
    meanings: ['才华', '才能', '刚才'],
    radical: '才',
    radicalName: '才',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  下: {
    id: '下_3hua',
    char: '下',
    pinyin: 'xià',
    pinyinTone: 4,
    pinyinSimple: 'xia',
    meanings: ['下面', '向下', '下去'],
    radical: '下',
    radicalName: '下',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  大: {
    id: '大_3hua',
    char: '大',
    pinyin: 'dà',
    pinyinTone: 4,
    pinyinSimple: 'da',
    meanings: ['大的', '大小', '太大'],
    radical: '大',
    radicalName: '大',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  上: {
    id: '上_3hua',
    char: '上',
    pinyin: 'shàng',
    pinyinTone: 4,
    pinyinSimple: 'shang',
    meanings: ['上面', '向上', '上去'],
    radical: '上',
    radicalName: '上',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  小: {
    id: '小_3hua',
    char: '小',
    pinyin: 'xiǎo',
    pinyinTone: 3,
    pinyinSimple: 'xiao',
    meanings: ['小的', '小小', '年纪小'],
    radical: '小',
    radicalName: '小',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  口: {
    id: '口_3hua',
    char: '口',
    pinyin: 'kǒu',
    pinyinTone: 3,
    pinyinSimple: 'kou',
    meanings: ['嘴巴', '开口', '口腔'],
    radical: '口',
    radicalName: '口',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  山: {
    id: '山_3hua',
    char: '山',
    pinyin: 'shān',
    pinyinTone: 1,
    pinyinSimple: 'shan',
    meanings: ['高山', '山脉', '山地'],
    radical: '山',
    radicalName: '山',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  巾: {
    id: '巾_3hua',
    char: '巾',
    pinyin: 'jīn',
    pinyinTone: 1,
    pinyinSimple: 'jin',
    meanings: ['布巾', '毛巾', '手巾'],
    radical: '巾',
    radicalName: '巾',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  千: {
    id: '千_3hua',
    char: '千',
    pinyin: 'qiān',
    pinyinTone: 1,
    pinyinSimple: 'qian',
    meanings: ['数字千', '千个', '一千'],
    radical: '十',
    radicalName: '十',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  个: {
    id: '个_3hua',
    char: '个',
    pinyin: 'gè',
    pinyinTone: 4,
    pinyinSimple: 'ge',
    meanings: ['一个', '个人', '单位词'],
    radical: '人',
    radicalName: '人',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  广: {
    id: '广_3hua',
    char: '广',
    pinyin: 'guǎng',
    pinyinTone: 3,
    pinyinSimple: 'guang',
    meanings: ['宽广', '广阔', '广场'],
    radical: '广',
    radicalName: '广',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  门: {
    id: '门_3hua',
    char: '门',
    pinyin: 'mén',
    pinyinTone: 2,
    pinyinSimple: 'men',
    meanings: ['门户', '进出口', '大门'],
    radical: '门',
    radicalName: '门',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  已: {
    id: '已_3hua',
    char: '已',
    pinyin: 'yǐ',
    pinyinTone: 3,
    pinyinSimple: 'yi',
    meanings: ['已经', '完成了', '过去了'],
    radical: '己',
    radicalName: '己',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  子: {
    id: '子_3hua',
    char: '子',
    pinyin: 'zǐ',
    pinyinTone: 3,
    pinyinSimple: 'zi',
    meanings: ['儿子', '孩子', '小的'],
    radical: '子',
    radicalName: '子',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  也: {
    id: '也_3hua',
    char: '也',
    pinyin: 'yě',
    pinyinTone: 3,
    pinyinSimple: 'ye',
    meanings: ['也是', '同样', '语气词'],
    radical: '也',
    radicalName: '也',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  女: {
    id: '女_3hua',
    char: '女',
    pinyin: 'nǚ',
    pinyinTone: 3,
    pinyinSimple: 'nv',
    meanings: ['女性', '女人', '女孩'],
    radical: '女',
    radicalName: '女',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  飞: {
    id: '飞_3hua',
    char: '飞',
    pinyin: 'fēi',
    pinyinTone: 1,
    pinyinSimple: 'fei',
    meanings: ['在空中飞行', '快速移动'],
    radical: '飞',
    radicalName: '飞',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  习: {
    id: '习_3hua',
    char: '习',
    pinyin: 'xí',
    pinyinTone: 2,
    pinyinSimple: 'xi',
    meanings: ['学习', '习惯', '练习'],
    radical: '羽',
    radicalName: '羽',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  马: {
    id: '马_3hua',
    char: '马',
    pinyin: 'mǎ',
    pinyinTone: 3,
    pinyinSimple: 'ma',
    meanings: ['马匹', '动物', '骑马'],
    radical: '马',
    radicalName: '马',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 3,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  // ===== 4画字 - 合体字示例 =====
  王: {
    id: '王_4hua',
    char: '王',
    pinyin: 'wáng',
    pinyinTone: 2,
    pinyinSimple: 'wang',
    meanings: ['国王', '帝王', '玉石'],
    radical: '王',
    radicalName: '王',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，也是部件（玉）'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  开: {
    id: '开_4hua',
    char: '开',
    pinyin: 'kāi',
    pinyinTone: 1,
    pinyinSimple: 'kai',
    meanings: ['打开', '开放', '开始'],
    radical: '廾',
    radicalName: '廾',
    structure: {
      type: '合体字',
      components: ['廾', '一'],
      description: '左右结构：廾（表示双手）+ 一（表示打开）'
    },
    componentPool: ['廾', '一', '门', '八'],
    correctComponents: ['廾', '一'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: ['关'],
      meanings: ['关闭'],
      components: ['门+一']
    }
  },

  天: {
    id: '天_4hua',
    char: '天',
    pinyin: 'tiān',
    pinyinTone: 1,
    pinyinSimple: 'tian',
    meanings: ['天空', '白天', '天气'],
    radical: '大',
    radicalName: '大',
    structure: {
      type: '合体字',
      components: ['大', '一'],
      description: '上下结构：大 + 一（横）'
    },
    componentPool: ['大', '一', '天', '人'],
    correctComponents: ['大', '一'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: ['木', '人'],
      meanings: [],
      components: []
    }
  },

  元: {
    id: '元_4hua',
    char: '元',
    pinyin: 'yuán',
    pinyinTone: 2,
    pinyinSimple: 'yuan',
    meanings: ['元首', '元年', '货币'],
    radical: '二',
    radicalName: '二',
    structure: {
      type: '合体字',
      components: ['二', '元'],
      description: '上下结构'
    },
    componentPool: ['二', '元', '一', '人'],
    correctComponents: ['二', '元'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  云: {
    id: '云_4hua',
    char: '云',
    pinyin: 'yún',
    pinyinTone: 2,
    pinyinSimple: 'yun',
    meanings: ['云彩', '云团', '天上的云'],
    radical: '二',
    radicalName: '二',
    structure: {
      type: '合体字',
      components: ['二', '云'],
      description: '上下结构'
    },
    componentPool: ['二', '云', '一', '人'],
    correctComponents: ['二', '云'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  木: {
    id: '木_4hua',
    char: '木',
    pinyin: 'mù',
    pinyinTone: 4,
    pinyinSimple: 'mu',
    meanings: ['树木', '木材', '木头'],
    radical: '木',
    radicalName: '木',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  五: {
    id: '五_4hua',
    char: '五',
    pinyin: 'wǔ',
    pinyinTone: 3,
    pinyinSimple: 'wu',
    meanings: ['数字五', '五个'],
    radical: '二',
    radicalName: '二',
    structure: {
      type: '合体字',
      components: ['二', '五'],
      description: '上下结构'
    },
    componentPool: ['二', '五', '一', '人'],
    correctComponents: ['二', '五'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  不: {
    id: '不_4hua',
    char: '不',
    pinyin: 'bù',
    pinyinTone: 4,
    pinyinSimple: 'bu',
    meanings: ['不是', '否定', '不行'],
    radical: '一',
    radicalName: '一',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为词缀'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  太: {
    id: '太_4hua',
    char: '太',
    pinyin: 'tài',
    pinyinTone: 4,
    pinyinSimple: 'tai',
    meanings: ['太阳', '太太', '太大'],
    radical: '大',
    radicalName: '大',
    structure: {
      type: '合体字',
      components: ['大', '丶'],
      description: '左右结构'
    },
    componentPool: ['大', '丶', '人', '八'],
    correctComponents: ['大', '丶'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: ['犬'],
      meanings: [],
      components: []
    }
  },

  友: {
    id: '友_4hua',
    char: '友',
    pinyin: 'yǒu',
    pinyinTone: 3,
    pinyinSimple: 'you',
    meanings: ['朋友', '友人', '友谊'],
    radical: '又',
    radicalName: '又',
    structure: {
      type: '合体字',
      components: ['又', '友'],
      description: '左右结构'
    },
    componentPool: ['又', '友', '一', '人'],
    correctComponents: ['又', '友'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  车: {
    id: '车_4hua',
    char: '车',
    pinyin: 'chē',
    pinyinTone: 1,
    pinyinSimple: 'che',
    meanings: ['汽车', '车辆', '车轮'],
    radical: '车',
    radicalName: '车',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  牙: {
    id: '牙_4hua',
    char: '牙',
    pinyin: 'yá',
    pinyinTone: 2,
    pinyinSimple: 'ya',
    meanings: ['牙齿', '牙齿硬的', '牙痛'],
    radical: '牙',
    radicalName: '牙',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  比: {
    id: '比_4hua',
    char: '比',
    pinyin: 'bǐ',
    pinyinTone: 3,
    pinyinSimple: 'bi',
    meanings: ['比较', '比赛', '相比'],
    radical: '比',
    radicalName: '比',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  切: {
    id: '切_4hua',
    char: '切',
    pinyin: 'qiē',
    pinyinTone: 1,
    pinyinSimple: 'qie',
    meanings: ['切割', '切开', '贴切'],
    radical: '刀',
    radicalName: '刀',
    structure: {
      type: '合体字',
      components: ['七', '刀'],
      description: '左右结构'
    },
    componentPool: ['七', '刀', '十', '人'],
    correctComponents: ['七', '刀'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  止: {
    id: '止_4hua',
    char: '止',
    pinyin: 'zhǐ',
    pinyinTone: 3,
    pinyinSimple: 'zhi',
    meanings: ['停止', '止住', '脚步'],
    radical: '止',
    radicalName: '止',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  少: {
    id: '少_4hua',
    char: '少',
    pinyin: 'shǎo',
    pinyinTone: 3,
    pinyinSimple: 'shao',
    meanings: ['少量', '年少', '减少'],
    radical: '小',
    radicalName: '小',
    structure: {
      type: '合体字',
      components: ['小', '八'],
      description: '左右结构'
    },
    componentPool: ['小', '八', '大', '人'],
    correctComponents: ['小', '八'],
    strokeCount: 4,
    isSimple: false,
    distractors: {
      similar: ['多'],
      meanings: ['很多'],
      components: ['大+八']
    }
  },

  日: {
    id: '日_4hua',
    char: '日',
    pinyin: 'rì',
    pinyinTone: 4,
    pinyinSimple: 'ri',
    meanings: ['日期', '太阳', '每日'],
    radical: '日',
    radicalName: '日',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  中: {
    id: '中_4hua',
    char: '中',
    pinyin: 'zhōng',
    pinyinTone: 1,
    pinyinSimple: 'zhong',
    meanings: ['中间', '中国', '正中'],
    radical: '中',
    radicalName: '中',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  贝: {
    id: '贝_4hua',
    char: '贝',
    pinyin: 'bè',
    pinyinTone: 4,
    pinyinSimple: 'bei',
    meanings: ['贝壳', '贝类', '蚌贝'],
    radical: '贝',
    radicalName: '贝',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  内: {
    id: '内_4hua',
    char: '内',
    pinyin: 'nèi',
    pinyinTone: 4,
    pinyinSimple: 'nei',
    meanings: ['内部', '里面', '内心'],
    radical: '内',
    radicalName: '内',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  水: {
    id: '水_4hua',
    char: '水',
    pinyin: 'shuǐ',
    pinyinTone: 3,
    pinyinSimple: 'shui',
    meanings: ['液体', '河水', '清水'],
    radical: '水',
    radicalName: '水',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字，常作为部件（氵）'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  见: {
    id: '见_4hua',
    char: '见',
    pinyin: 'jiàn',
    pinyinTone: 4,
    pinyinSimple: 'jian',
    meanings: ['看见', '见面', '观点'],
    radical: '见',
    radicalName: '见',
    structure: {
      type: '独体字',
      components: [],
      description: '独体字'
    },
    componentPool: [],
    correctComponents: [],
    strokeCount: 4,
    isSimple: true,
    distractors: {
      similar: [],
      meanings: [],
      components: []
    }
  },

  // ===== 5-13画的字 - 后续继续添加 =====
  // 由于篇幅限制，这里只展示结构
  // 实际开发中需要添加全部300个字
  // 可按照上面的格式继续扩展
};

/**
 * 获取汉字信息
 * @param {string} char - 汉字
 * @returns {object|null} 汉字详细信息或null
 */
export function getCharacterInfo(char) {
  return charactersDatabase[char] || null;
}

/**
 * 批量获取汉字信息
 * @param {array} chars - 汉字数组
 * @returns {array} 汉字信息数组
 */
export function getCharactersInfo(chars) {
  return chars.map(char => getCharacterInfo(char)).filter(info => info !== null);
}

/**
 * 检查字符是否存在于数据库
 * @param {string} char - 汉字
 * @returns {boolean}
 */
export function characterExists(char) {
  return char in charactersDatabase;
}

/**
 * 检查字符是否是独体字
 * @param {string} char - 汉字
 * @returns {boolean}
 */
export function isSimpleCharacter(char) {
  return SIMPLE_CHARACTERS.has(char);
}

/**
 * 获取所有汉字列表
 * @returns {array} 所有汉字的数组
 */
export function getAllCharacters() {
  return Object.keys(charactersDatabase);
}

/**
 * 获取数据库统计信息
 * @returns {object} 统计信息
 */
export function getDatabaseStats() {
  const allChars = Object.keys(charactersDatabase);
  const simpleChars = allChars.filter(char => isSimpleCharacter(char));
  const complexChars = allChars.filter(char => !isSimpleCharacter(char));

  return {
    totalCharacters: allChars.length,
    simpleCharacters: simpleChars.length,
    complexCharacters: complexChars.length,
    progress: {
      percentage: Math.round((allChars.length / 300) * 100),
      target: 300
    }
  };
}
