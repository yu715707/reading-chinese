/**
 * 字库加载器 - 支持动态加载和管理多个字库
 * 
 * 当需要添加更多字库时（2500字、1000字等），
 * 只需要创建新文件，然后在这里注册即可
 * 
 * 优点：
 * 1. 模块化管理
 * 2. 按需加载
 * 3. 易于扩展
 * 4. 版本控制
 */

// 字库注册表
const CHARACTER_LIBRARIES = {
  // 基础字表（必须）
  basic: {
    name: '识字写字基本字表',
    size: 300,
    description: '《义务教育语文课程标准（2022版）》',
    status: 'active',
    version: '1.0.0',
    module: () => import('./characters.js')
  },

  // 常用字表一（后续添加）
  common2500: {
    name: '常用字表一',
    size: 2500,
    description: '常用汉字',
    status: 'planned',
    version: '1.0.0',
    module: () => import('./characters-common-2500.js').catch(() => ({}))
  },

  // 常用字表二（后续添加）
  common1000: {
    name: '常用字表二',
    size: 1000,
    description: '较生僻汉字',
    status: 'planned',
    version: '1.0.0',
    module: () => import('./characters-common-1000.js').catch(() => ({}))
  }
};

// 缓存已加载的字库
const loadedLibraries = {};

/**
 * 加载指定的字库
 * @param {string} libraryName - 字库名称（basic, common2500, common1000）
 * @returns {Promise<object>} 字库数据
 */
export async function loadLibrary(libraryName = 'basic') {
  // 检查是否已在缓存中
  if (loadedLibraries[libraryName]) {
    return loadedLibraries[libraryName];
  }

  // 检查字库是否存在
  if (!CHARACTER_LIBRARIES[libraryName]) {
    throw new Error(`字库不存在: ${libraryName}`);
  }

  const libConfig = CHARACTER_LIBRARIES[libraryName];

  // 检查状态
  if (libConfig.status !== 'active') {
    console.warn(`⚠️ 字库 "${libConfig.name}" 还未准备就绪，状态: ${libConfig.status}`);
  }

  try {
    // 动态加载模块
    const module = await libConfig.module();
    loadedLibraries[libraryName] = module;
    console.log(`✅ 成功加载字库: ${libConfig.name} (${libConfig.size}字)`);
    return module;
  } catch (error) {
    console.error(`❌ 加载字库失败: ${libraryName}`, error);
    throw error;
  }
}

/**
 * 加载多个字库并合并
 * @param {array} libraryNames - 字库名称数组
 * @returns {Promise<object>} 合并后的字库数据
 */
export async function loadMultipleLibraries(libraryNames = ['basic']) {
  const mergedData = {
    charactersDatabase: {},
    metadata: {
      totalCharacters: 0,
      libraries: [],
      loadTime: new Date().toISOString()
    }
  };

  for (const libName of libraryNames) {
    try {
      const lib = await loadLibrary(libName);
      
      if (lib.charactersDatabase) {
        // 合并字库数据
        Object.assign(mergedData.charactersDatabase, lib.charactersDatabase);
        
        // 记录元数据
        mergedData.metadata.libraries.push({
          name: libName,
          size: CHARACTER_LIBRARIES[libName].size,
          version: CHARACTER_LIBRARIES[libName].version
        });
      }
    } catch (error) {
      console.warn(`⚠️ 跳过无法加载的字库: ${libName}`);
    }
  }

  // 更新总数
  mergedData.metadata.totalCharacters = Object.keys(mergedData.charactersDatabase).length;

  return mergedData;
}

/**
 * 获取字库注册表
 * @returns {object} 所有可用的字库信息
 */
export function getLibraryRegistry() {
  return Object.entries(CHARACTER_LIBRARIES).map(([key, config]) => ({
    id: key,
    name: config.name,
    size: config.size,
    description: config.description,
    status: config.status,
    version: config.version
  }));
}

/**
 * 检查字库是否已加载
 * @param {string} libraryName - 字库名称
 * @returns {boolean}
 */
export function isLibraryLoaded(libraryName) {
  return libraryName in loadedLibraries;
}

/**
 * 卸载字库（释放内存）
 * @param {string} libraryName - 字库名称
 */
export function unloadLibrary(libraryName) {
  if (loadedLibraries[libraryName]) {
    delete loadedLibraries[libraryName];
    console.log(`📦 已卸载字库: ${libraryName}`);
  }
}

/**
 * 获取所有已加载的字库
 * @returns {array} 已加载字库的名称列表
 */
export function getLoadedLibraries() {
  return Object.keys(loadedLibraries);
}

/**
 * 清空所有缓存
 */
export function clearCache() {
  Object.keys(loadedLibraries).forEach(lib => delete loadedLibraries[lib]);
  console.log('🗑️ 已清空所有字库缓存');
}

/**
 * 输出加载统计
 */
export function printLoadingStats() {
  const registry = getLibraryRegistry();
  const loaded = getLoadedLibraries();
  
  console.log('=== 字库加载统计 ===');
  registry.forEach(lib => {
    const isLoaded = loaded.includes(lib.id);
    const status = isLoaded ? '✅ 已加载' : '⏳ 未加载';
    console.log(`${lib.name}: ${lib.size}字 [${status}]`);
  });
}
