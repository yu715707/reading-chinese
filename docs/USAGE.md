# 📖 项目使用说明书

完成！我已经为你的**汉字认知训练平台**创建了完整的核心系统。下面是**你现在要如何使用这些东西**。

---

## 🎯 快速开始

### 1️⃣ 查看项目结构

你的项目现在包含：

```
reading-chinese/
├── src/
│   ├── index.html                  # 网页首页（可直接打开）
│   ├── data/
│   │   ├── characters.js           # 300字数据库
│   │   └── characterLoader.js      # 字库加载工具
│   ├── engine/
│   │   ├── characterParser.js      # 汉字解析引擎
│   │   ├── trainingEngine.js       # 训练内容生成
│   │   └── answerChecker.js        # 答案检查
│   └── tools/
│       └── databaseManager.js      # 数据库管理工具
├── docs/
│   ├── DATABASE_STRUCTURE.md       # 数据结构详解
│   └── HOW_TO_EXTEND.md           # 扩展指南
└── README.md                       # 项目说明
```

---

## 🚀 立即体验

### 方式1：在浏览器中打开（最简单）

1. 在你的电脑上找到项目文件夹
2. 双击 `src/index.html` 文件
3. 浏览器会自动打开网页

这样就可以看到项目的首页了！

### 方式2：启动本地服务器（推荐）

**如果你有Python**：
```bash
cd reading-chinese
python -m http.server 8000
```

然后在浏览器中访问：`http://localhost:8000/src/index.html`

**如果你有Node.js**：
```bash
cd reading-chinese
npx http-server
```

---

## 📚 核心功能说明

### ✅ 已完成的部分

| 组件 | 功能 | 文件 | 状态 |
|-----|------|------|------|
| **汉字数据库** | 存储300个汉字的完整信息 | `src/data/characters.js` | ✅ 完成 |
| **字库加载器** | 支持多字库动态加载 | `src/data/characterLoader.js` | ✅ 完成 |
| **解析引擎** | 从用户输入中识别汉字 | `src/engine/characterParser.js` | ✅ 完成 |
| **训练引擎** | 生成6关训练内容 | `src/engine/trainingEngine.js` | ✅ 完成 |
| **检查引擎** | 判断答案对错 | `src/engine/answerChecker.js` | ✅ 完成 |
| **数据库工具** | 管理、验证、导出数据 | `src/tools/databaseManager.js` | ✅ 完成 |
| **首页界面** | 用户输入和结果展示 | `src/index.html` | ✅ 完成 |

### ⏳ 需要后续开发的部分

| 组件 | 功能 | 优先级 |
|-----|------|--------|
| **训练页面UI** | 6关的实际训练界面 | 🔴 高 |
| **音频系统** | 发音播放功能 | 🔴 高 |
| **进度保存** | 用户学习记录 | 🟡 中 |
| **教师后台** | 管理和统计功能 | 🟡 中 |
| **移动端适配** | 手机版界面优化 | 🟡 中 |
| **常用字扩展** | 2500+1000字支持 | 🟢 低 |

---

## 💡 如何使用各个部分

### 1. 使用首页

打开 `src/index.html`，你会看到：

- **输入框**：可以输入单个或多个汉字
- **支持的格式**：
  - `清`（单字）
  - `清 情`（空格分隔）
  - `说硕拼`（连续输入）
  - `河、花、跑、跳`（顿号分隔）
  - `河,花,跑,跳`（逗号分隔）

输入完后点击"开始学习"，系统会：
1. 识别所有汉字
2. 显示每个字的详细信息
3. 提供"开始训练"按钮

### 2. 使用数据库管理工具

在你的JavaScript代码中：

```javascript
import { DatabaseManager } from './tools/databaseManager.js';
import { charactersDatabase } from './data/characters.js';

const manager = new DatabaseManager(charactersDatabase);

// 验证数据
const validation = manager.validate();
console.log(validation);  // 检查是否有错误

// 搜索
const chars = manager.search('radical', '氵');  // 找所有三点水的字
console.log(chars);  // ['清', '泪', '河', ...]

// 导出
const json = manager.export('json');
const csv = manager.export('csv');
```

### 3. 使用字库加载器

```javascript
import { loadLibrary, getLibraryRegistry } from './data/characterLoader.js';

// 查看可用字库
const libraries = getLibraryRegistry();
console.log(libraries);

// 加载字库
const basicLib = await loadLibrary('basic');

// 查看已加载的字库
const loaded = getLoadedLibraries();
console.log(loaded);  // ['basic']
```

### 4. 使用汉字解析引擎

```javascript
import { parseCharacters, validateInput } from './engine/characterParser.js';

// 解析用户输入
const input = '清 情晴';
const chars = parseCharacters(input);
console.log(chars);  // ['清', '情', '晴']

// 验证输入
const result = validateInput(input);
console.log(result);
// {
//   valid: true,
//   error: null,
//   characters: ['清', '情', '晴']
// }
```

### 5. 使用训练引擎

```javascript
import { 
  generateAllTrainingPhases, 
  TrainingProgress 
} from './engine/trainingEngine.js';

// 为某个字生成所有6关内容
const phases = generateAllTrainingPhases('清');
console.log(phases);

// 创建进度跟踪器
const progress = new TrainingProgress(['清', '情', '晴']);
console.log(progress.getCurrentCharacter());  // '清'
console.log(progress.getCurrentPhase());      // 'learning'

progress.moveToNextPhase();
console.log(progress.getCurrentPhase());      // 'phonetic'
```

### 6. 使用答案检查

```javascript
import { checkAnswer } from './engine/answerChecker.js';

// 检查拼音答案
let result = checkAnswer('phonetic', '清', 'qīng');
console.log(result.correct);  // true

// 检查部件选择
result = checkAnswer('structure_id', '清', ['氵', '青']);
console.log(result.correct);  // true
```

---

## 📝 添加新汉字

要添加更多汉字，请查看 `docs/HOW_TO_EXTEND.md`。

快速步骤：

1. 打开 `src/data/characters.js`
2. 在 `charactersDatabase` 对象中添加新字
3. 如果是独体字，还要加到 `SIMPLE_CHARACTERS` 集合中
4. 使用 `DatabaseManager` 验证数据

详见：`docs/HOW_TO_EXTEND.md`

---

## 🔍 了解数据结构

每个汉字包含哪些信息？查看 `docs/DATABASE_STRUCTURE.md`。

这里面有详细说明每个字段的含义和使用方法。

---

## 🧪 测试和验证

### 测试字符解析

```javascript
import { testParser } from './engine/characterParser.js';

// 运行测试
testParser();
```

### 验证数据库

```javascript
import { DatabaseValidator } from './tools/databaseManager.js';
import { charactersDatabase } from './data/characters.js';

const validator = new DatabaseValidator(charactersDatabase);
const report = validator.generateReport();
console.log(report);
```

---

## 📊 查看统计信息

```javascript
import { DatabaseManager } from './tools/databaseManager.js';
import { charactersDatabase } from './data/characters.js';

const manager = new DatabaseManager(charactersDatabase);
const stats = manager.getStats();

console.log(stats);
// {
//   summary: {
//     totalCharacters: 300,
//     simpleCharacters: 87,
//     complexCharacters: 213,
//     uniqueRadicals: 42
//   },
//   strokeDistribution: { 1: 1, 2: 14, 3: 23, ... },
//   radicalDistribution: { '一': 12, '二': 8, ... }
// }
```

---

## 🎮 后续开发建议

### 第一步：创建训练页面

创建 `src/training.html`，包含6个关卡的UI。

### 第二步：集成音频

使用 Web Audio API 或者调用在线TTS服务。

### 第三步：添加进度保存

使用 localStorage 或云服务保存用户的学习记录。

---

## 🆘 常见问题

### Q: 我如何开始添加更多汉字？
A: 打开 `docs/HOW_TO_EXTEND.md` 按照指南添加。

### Q: 我可以在哪里修改系统的行为？
A: 
- 字库数据：`src/data/characters.js`
- 解析逻辑：`src/engine/characterParser.js`
- 训练逻辑：`src/engine/trainingEngine.js`
- 检查逻辑：`src/engine/answerChecker.js`

### Q: 如何部署到网络上？
A: 这是纯前端项目，可以直接部署到：
- Vercel（推荐）
- Netlify
- GitHub Pages
- Cloudflare Pages

### Q: 首页中的"开始训练"按钮点击后会发生什么？
A: 目前显示一条提示消息。后续需要创建训练页面并跳转。

---

## 📞 项目仓库

https://github.com/yu715707/reading-chinese

---

## 🎉 下一步

现在你可以：

1. ✅ **在浏览器打开首页**，尝试输入汉字
2. ✅ **查看各个文件的代码**，理解系统的工作原理
3. ✅ **根据 HOW_TO_EXTEND.md 添加汉字**
4. ⏳ **创建训练页面**，让用户可以进行实际的训练

祝你使用愉快！有任何问题随时问我。🚀
