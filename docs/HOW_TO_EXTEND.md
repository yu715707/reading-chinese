/**
 * 扩展指南
 * 如何添加更多汉字到系统中
 */

# 📖 汉字库扩展指南

## 概述

本项目目前包含**300个基础字表**。本指南将指导你如何添加更多汉字。

---

## 方案一：直接扩展基础字库

### 步骤1：打开字库文件

编辑文件：`src/data/characters.js`

### 步骤2：添加新字符

在 `charactersDatabase` 对象中添加新字符。格式如下：

```javascript
新字: {
  id: '新_笔画',
  char: '新',
  pinyin: 'xīn',
  pinyinTone: 1,
  pinyinSimple: 'xin',
  meanings: ['含义1', '含义2', '含义3'],
  radical: '部首',
  radicalName: '部首名称',
  structure: {
    type: '结构类型',  // 独体字 或 合体字
    components: ['部件1', '部件2'],
    description: '结构说明'
  },
  componentPool: ['部件1', '部件2', '干扰部件1', '干扰部件2'],
  correctComponents: ['部件1', '部件2'],
  strokeCount: 13,
  isSimple: false,  // 独体字设为true
  distractors: {
    similar: ['相似字1', '相似字2'],
    meanings: ['干扰含义1', '干扰含义2'],
    components: ['干扰部件组合']
  }
}
```

### 步骤3：如果是独体字

```javascript
新字: {
  id: '新_13hua',
  char: '新',
  pinyin: 'xīn',
  pinyinTone: 1,
  pinyinSimple: 'xin',
  meanings: ['新的', '崭新', '新年'],
  radical: '木',
  radicalName: '木',
  structure: {
    type: '独体字',
    components: [],
    description: '独体字，无需拆分'
  },
  componentPool: [],
  correctComponents: [],
  strokeCount: 13,
  isSimple: true,  // ⚠️ 独体字必须设为true
  distractors: {
    similar: [],
    meanings: [],
    components: []
  }
}
```

### 步骤4：更新简体字列表（如果是独体字）

如果添加的新字是独体字，还需要在文件开头的 `SIMPLE_CHARACTERS` 集合中添加它：

```javascript
const SIMPLE_CHARACTERS = new Set([
  '一', '二', '十',
  // ... 其他字 ...
  '新'  // 添加这一行
]);
```

---

## 方案二：创建新的年级/专题字库

### 步骤1：创建新文件

创建 `src/data/characters-extension.js` 文件

### 步骤2：定义字库结构

```javascript
/**
 * 扩展字库 - 常用2500字
 */

export const charactersDatabase = {
  // 添加字符...
};

export function getCharacterInfo(char) {
  return charactersDatabase[char] || null;
}

// 导出其他必要函数...
```

### 步骤3：注册到加载器

编辑 `src/data/characterLoader.js`，在 `CHARACTER_LIBRARIES` 中添加：

```javascript
const CHARACTER_LIBRARIES = {
  basic: { /* ... 现有配置 ... */ },
  
  // 添加新的字库
  extension: {
    name: '扩展字表',
    size: 2500,
    description: '扩展的常用汉字',
    status: 'active',
    version: '1.0.0',
    module: () => import('./characters-extension.js')
  }
};
```

---

## 字段说明详解

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `id` | string | 唯一标识符（格式：字_笔画数） | `清_11hua` |
| `char` | string | 汉字本身 | `清` |
| `pinyin` | string | 完整拼音（带声调） | `qīng` |
| `pinyinTone` | number | 声调（1-4或0） | `1` |
| `pinyinSimple` | string | 简化拼音（无声调） | `qing` |
| `meanings` | array | 含义数组（至少3个） | `['水很干净', '清楚', '安静']` |
| `radical` | string | 部首 | `氵` |
| `radicalName` | string | 部首名称 | `三点水` |
| `structure.type` | string | 结构类型 | `左右结构` 或 `独体字` |
| `structure.components` | array | 部件组成 | `['氵', '青']` |
| `structure.description` | string | 结构说明 | `左边是三点水，右边是青` |
| `componentPool` | array | 部件池（用于选择题） | `['氵', '忄', '青', '日']` |
| `correctComponents` | array | 正确的部件 | `['氵', '青']` |
| `strokeCount` | number | 笔画总数 | `11` |
| `isSimple` | boolean | 是否是独体字 | `false` |
| `distractors.similar` | array | 相似的干扰字 | `['情', '晴', '请']` |
| `distractors.meanings` | array | 干扰含义 | `['感情', '天气晴朗']` |
| `distractors.components` | array | 干扰部件组合 | `['忄+青']` |

---

## 🎯 添加汉字检查清单

在添加新字前，请确保：

- [ ] 汉字在 `characters.js` 中不重复
- [ ] `pinyin` 包含声调符号
- [ ] `meanings` 数组至少有3个含义
- [ ] 独体字的 `isSimple` 设为 `true`
- [ ] 独体字的 `componentPool` 和 `correctComponents` 为空数组
- [ ] 合体字的 `componentPool` 至少有4个候选项
- [ ] 合体字的 `correctComponents` 列出正确的部件
- [ ] 部件池中包含干扰项
- [ ] `strokeCount` 与实际笔画数相符
- [ ] `structure.description` 清楚说明结构
- [ ] 独体字已添加到 `SIMPLE_CHARACTERS` 集合中

---

## 📝 实际示例

### 添加一个合体字：情

```javascript
情: {
  id: '情_11hua',
  char: '情',
  pinyin: 'qíng',
  pinyinTone: 2,
  pinyinSimple: 'qing',
  meanings: [
    '感受，感情',
    '情况，状况',
    '爱好'
  ],
  radical: '忄',
  radicalName: '竖心旁',
  structure: {
    type: '左右结构',
    components: ['忄', '青'],
    description: '左边是"竖心旁"（表示心理活动），右边是"青"'
  },
  componentPool: ['氵', '忄', '青', '日', '月'],  // 5个候选
  correctComponents: ['忄', '青'],  // 2个正确
  strokeCount: 11,
  isSimple: false,
  distractors: {
    similar: ['清', '晴', '请'],
    meanings: ['水很干净', '天气晴朗', '请坐'],
    components: ['氵+青', '日+青', '讠+青']
  }
}
```

### 添加一个独体字：山

```javascript
山: {
  id: '山_3hua',
  char: '山',
  pinyin: 'shān',
  pinyinTone: 1,
  pinyinSimple: 'shan',
  meanings: [
    '高耸的地形',
    '山脉',
    '形状像山'
  ],
  radical: '山',
  radicalName: '山',
  structure: {
    type: '独体字',
    components: [],
    description: '这是一个独体字，不能拆分成更小的部件'
  },
  componentPool: [],  // 空数组
  correctComponents: [],  // 空数组
  strokeCount: 3,
  isSimple: true,  // 重要！
  distractors: {
    similar: [],
    meanings: [],
    components: []
  }
}

// 同时在SIMPLE_CHARACTERS中添加：
const SIMPLE_CHARACTERS = new Set([
  // ... 其他字 ...
  '山'  // 添加这一行
]);
```

---

## 🔧 使用数据库管理工具验证

添加完新字后，使用验证工具检查：

```javascript
import { DatabaseManager } from '../tools/databaseManager.js';
import { charactersDatabase } from './characters.js';

const manager = new DatabaseManager(charactersDatabase);

// 验证整个数据库
const validation = manager.validate();
console.log(validation);

// 生成完整报告
const report = manager.generateFullReport();
console.log(report);
```

---

## 常见问题

### Q: 如何确定部件池的大小？
A: 推荐4-6个候选项。太多会让题目太难，太少题目太简单。

### Q: 干扰项应该如何选择？
A: 选择与目标字相似的字，或者有相关含义的干扰项。

### Q: 独体字可以拆分吗？
A: 不可以。独体字在项目设计中会自动跳过结构训练关卡。

### Q: 拼音的声调应该如何标注？
A: 使用汉语拼音标准：
- 第一声：ā á ǎ à（用ā表示）
- 第二声：á
- 第三声：ǎ
- 第四声：à

---

## 性能建议

- 字库大小在 **1000字以内**：不需要优化
- 字库大小在 **1000-5000字**：考虑分成多个文件
- 字库大小超过 **5000字**：必须分割并使用 `characterLoader.js` 按需加载

---

## 数据导出

添加完字符后，可以导出为不同格式：

```javascript
const manager = new DatabaseManager(charactersDatabase);

// 导出为JSON
const json = manager.export('json');

// 导出为CSV（用于Excel）
const csv = manager.export('csv');

// 导出为JavaScript模块
const module = manager.export('module');
```

---

## 后续计划

目标是逐步添加：

- [x] **基础字表**（300字）✅ 完成
- [ ] **常用字表一**（2500字）- 计划中
- [ ] **常用字表二**（1000字）- 计划中
- [ ] **分级词汇表** - 计划中
- [ ] **教材配套字表** - 计划中

祝你的扩展工作顺利！🎉
