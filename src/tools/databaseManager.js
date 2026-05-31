/**
 * 数据库管理工具
 * 功能：管理、验证、导出、导入汉字数据
 */

/**
 * 数据验证器
 * 检查字符数据是否完整和正确
 */
export class DatabaseValidator {
  constructor(characterDatabase) {
    this.database = characterDatabase;
    this.errors = [];
    this.warnings = [];
  }

  /**
   * 验证单个字符数据
   */
  validateCharacter(char, charData) {
    const issues = [];

    // 必需字段检查
    const requiredFields = ['id', 'char', 'pinyin', 'meanings', 'radical', 'structure', 'strokeCount'];
    for (const field of requiredFields) {
      if (!charData[field]) {
        issues.push(`缺少必需字段: ${field}`);
      }
    }

    // 逻辑验证
    if (charData.char !== char) {
      issues.push(`字符不匹配: 期望 ${char}，得到 ${charData.char}`);
    }

    if (!Array.isArray(charData.meanings) || charData.meanings.length === 0) {
      issues.push(`含义数组为空或无效`);
    }

    if (typeof charData.strokeCount !== 'number' || charData.strokeCount <= 0) {
      issues.push(`笔画数无效: ${charData.strokeCount}`);
    }

    // 结构验证
    if (!charData.structure || !charData.structure.type) {
      issues.push(`结构信息缺失`);
    }

    // 独体字验证
    if (charData.isSimple === true && charData.componentPool && charData.componentPool.length > 0) {
      this.warnings.push(`${char}: 独体字不应有部件池`);
    }

    return issues;
  }

  /**
   * 验证整个数据库
   */
  validateDatabase() {
    this.errors = [];
    this.warnings = [];

    for (const [char, charData] of Object.entries(this.database)) {
      const issues = this.validateCharacter(char, charData);
      if (issues.length > 0) {
        this.errors.push({
          char,
          issues
        });
      }
    }

    return {
      valid: this.errors.length === 0,
      errorCount: this.errors.length,
      warningCount: this.warnings.length,
      errors: this.errors,
      warnings: this.warnings
    };
  }

  /**
   * 生成验证报告
   */
  generateReport() {
    const validation = this.validateDatabase();
    
    let report = '=== 数据库验证报告 ===\n';
    report += `总字数: ${Object.keys(this.database).length}\n`;
    report += `错误: ${validation.errorCount}\n`;
    report += `警告: ${validation.warningCount}\n\n`;

    if (validation.errors.length > 0) {
      report += '【错误详情】\n';
      validation.errors.forEach(error => {
        report += `${error.char}:\n`;
        error.issues.forEach(issue => {
          report += `  - ${issue}\n`;
        });
      });
    }

    if (validation.warnings.length > 0) {
      report += '\n【警告详情】\n';
      validation.warnings.forEach(warning => {
        report += `⚠️ ${warning}\n`;
      });
    }

    if (validation.valid) {
      report += '\n✅ 数据库验证通过！';
    }

    return report;
  }
}

/**
 * 数据导出工具
 */
export class DatabaseExporter {
  constructor(characterDatabase) {
    this.database = characterDatabase;
  }

  /**
   * 导出为JSON格式
   */
  exportAsJSON(pretty = true) {
    return pretty 
      ? JSON.stringify(this.database, null, 2)
      : JSON.stringify(this.database);
  }

  /**
   * 导出为CSV格式（用于Excel）
   */
  exportAsCSV() {
    let csv = '汉字,拼音,含义,部首,笔画,结构类型,部件\n';

    for (const [char, data] of Object.entries(this.database)) {
      const meanings = data.meanings.join('；');
      const components = data.correctComponents ? data.correctComponents.join('+') : '-';
      csv += `${char},${data.pinyin},"${meanings}",${data.radical},${data.strokeCount},${data.structure.type},${components}\n`;
    }

    return csv;
  }

  /**
   * 导出为JavaScript模块
   */
  exportAsModule() {
    return `export const charactersDatabase = ${this.exportAsJSON()};\n`;
  }

  /**
   * 导出统计信息
   */
  exportStats() {
    const simple = Object.values(this.database).filter(c => c.isSimple).length;
    const complex = Object.keys(this.database).length - simple;

    return {
      totalCharacters: Object.keys(this.database).length,
      simpleCharacters: simple,
      complexCharacters: complex,
      exportTime: new Date().toISOString(),
      dataSize: this.exportAsJSON().length
    };
  }
}

/**
 * 字符查询工具
 */
export class CharacterQueryEngine {
  constructor(characterDatabase) {
    this.database = characterDatabase;
  }

  /**
   * 按拼音搜索
   */
  searchByPinyin(pinyin) {
    return Object.entries(this.database)
      .filter(([char, data]) => data.pinyinSimple === pinyin)
      .map(([char, data]) => char);
  }

  /**
   * 按部首搜索
   */
  searchByRadical(radical) {
    return Object.entries(this.database)
      .filter(([char, data]) => data.radical === radical)
      .map(([char, data]) => char);
  }

  /**
   * 按笔画数搜索
   */
  searchByStrokeCount(strokeCount) {
    return Object.entries(this.database)
      .filter(([char, data]) => data.strokeCount === strokeCount)
      .map(([char, data]) => char);
  }

  /**
   * 按含义关键词搜索
   */
  searchByMeaning(keyword) {
    return Object.entries(this.database)
      .filter(([char, data]) => data.meanings.some(m => m.includes(keyword)))
      .map(([char, data]) => char);
  }

  /**
   * 获取同部首的字
   */
  getCharactersByRadical(radical) {
    const chars = this.searchByRadical(radical);
    return chars.map(char => ({
      char,
      data: this.database[char]
    }));
  }

  /**
   * 获取笔画范围内的字
   */
  getCharactersInStrokeRange(min, max) {
    return Object.entries(this.database)
      .filter(([char, data]) => data.strokeCount >= min && data.strokeCount <= max)
      .map(([char, data]) => char);
  }

  /**
   * 获取所有独体字
   */
  getSimpleCharacters() {
    return Object.entries(this.database)
      .filter(([char, data]) => data.isSimple)
      .map(([char, data]) => char);
  }

  /**
   * 获取所有合体字
   */
  getComplexCharacters() {
    return Object.entries(this.database)
      .filter(([char, data]) => !data.isSimple)
      .map(([char, data]) => char);
  }
}

/**
 * 数据库统计工具
 */
export class DatabaseStatistics {
  constructor(characterDatabase) {
    this.database = characterDatabase;
  }

  /**
   * 获取按笔画分组的统计
   */
  getStrokeCountDistribution() {
    const distribution = {};

    for (const [char, data] of Object.entries(this.database)) {
      const stroke = data.strokeCount;
      distribution[stroke] = (distribution[stroke] || 0) + 1;
    }

    return distribution;
  }

  /**
   * 获取部首统计
   */
  getRadicalDistribution() {
    const distribution = {};

    for (const [char, data] of Object.entries(this.database)) {
      const radical = data.radical;
      distribution[radical] = (distribution[radical] || 0) + 1;
    }

    return distribution;
  }

  /**
   * 生成统计报告
   */
  generateReport() {
    const strokes = this.getStrokeCountDistribution();
    const radicals = this.getRadicalDistribution();
    const simple = Object.values(this.database).filter(c => c.isSimple).length;
    const complex = Object.keys(this.database).length - simple;

    return {
      summary: {
        totalCharacters: Object.keys(this.database).length,
        simpleCharacters: simple,
        complexCharacters: complex,
        uniqueRadicals: Object.keys(radicals).length
      },
      strokeDistribution: strokes,
      radicalDistribution: radicals,
      mostCommonRadical: Object.entries(radicals).sort((a, b) => b[1] - a[1])[0]
    };
  }
}

/**
 * 主数据库管理器
 */
export class DatabaseManager {
  constructor(characterDatabase) {
    this.database = characterDatabase;
    this.validator = new DatabaseValidator(characterDatabase);
    this.exporter = new DatabaseExporter(characterDatabase);
    this.queryEngine = new CharacterQueryEngine(characterDatabase);
    this.statistics = new DatabaseStatistics(characterDatabase);
  }

  /**
   * 获取字符
   */
  getCharacter(char) {
    return this.database[char] || null;
  }

  /**
   * 添加字符
   */
  addCharacter(char, charData) {
    const issues = this.validator.validateCharacter(char, charData);
    if (issues.length > 0) {
      throw new Error(`字符数据验证失败: ${issues.join(', ')}`);
    }
    this.database[char] = charData;
  }

  /**
   * 删除字符
   */
  removeCharacter(char) {
    delete this.database[char];
  }

  /**
   * 更新字符
   */
  updateCharacter(char, updates) {
    if (!this.database[char]) {
      throw new Error(`字符不存在: ${char}`);
    }
    Object.assign(this.database[char], updates);
  }

  /**
   * 执行完整验证
   */
  validate() {
    return this.validator.validateDatabase();
  }

  /**
   * 导出数据
   */
  export(format = 'json') {
    switch (format) {
      case 'json':
        return this.exporter.exportAsJSON();
      case 'csv':
        return this.exporter.exportAsCSV();
      case 'module':
        return this.exporter.exportAsModule();
      default:
        throw new Error(`未知的导出格式: ${format}`);
    }
  }

  /**
   * 搜索
   */
  search(type, query) {
    switch (type) {
      case 'pinyin':
        return this.queryEngine.searchByPinyin(query);
      case 'radical':
        return this.queryEngine.searchByRadical(query);
      case 'stroke':
        return this.queryEngine.searchByStrokeCount(query);
      case 'meaning':
        return this.queryEngine.searchByMeaning(query);
      default:
        throw new Error(`未知的搜索类型: ${type}`);
    }
  }

  /**
   * 获取统计信息
   */
  getStats() {
    return this.statistics.generateReport();
  }

  /**
   * 生成完整报告
   */
  generateFullReport() {
    return {
      validation: this.validator.generateReport(),
      statistics: this.statistics.generateReport(),
      exportedSize: this.exporter.exportStats()
    };
  }
}
