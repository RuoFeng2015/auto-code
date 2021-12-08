import impExcel from './src/ImportExcel.vue'
import { jsonToSheetXlsx } from './src/Export2Excel'
import type { App, Plugin } from 'vue'
// import expExcelModal from '@/ExportExcelModal.vue'
export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as T & Plugin
}
export const ImpExcel = withInstall(impExcel)
// export const ExpExcelModal = withInstall(expExcelModal)

/**
 * @description 导出数据
 * @param {Array} columns 表格头部信息
 * @param {Array} data 后台返回的数据
 * @param {function} handleItem 需要转化的函数
 * @param {string} filename 导出的文件名称
 */
export * from './src/typing'
export { jsonToSheetXlsx, aoaToSheetXlsx } from './src/Export2Excel'
