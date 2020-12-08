//看板的标题
import DashboardHeader from './dashboard/DashboardHeader.vue'
import DashboardLoading from './dashboard/DashboardLoading.vue'
import DashboardParam from './dashboard/DashboardParam.vue'
//一组图表，通常对应看板的一行
import DashboardWidgets from './dashboard/DashboardWidgets.vue'
//封装下面几个具体的图表
import DashboardWidget from './dashboard/DashboardWidget.vue'
//单个图表
import KpiContent from './dashboard/widgets/KpiContent'
import ChartContent from './dashboard/widgets/ChartContent'
import TableContent from './dashboard/widgets/TableContent'
import MapContent from './dashboard/widgets/MapContent'
import RadarContent from './dashboard/widgets/RadarContent' //雷达图
import FunnelContent from './dashboard/widgets/FunnelContent' //漏斗图
import ScatterContent from './dashboard/widgets/ScatterContent'
import ChinaMapContent from './dashboard/widgets/ChinaMapContent'

//配置功能入口
import BoardConfig from '../views/config/board/BoardConfig.vue'
import CategoryConfig from '../views/config/category/CategoryConfig.vue'
import DatasetConfig from '../views/config/dataset/DatasetConfig.vue'
import DatasourceConfig from '../views/config/datasource/DatasourceConfig.vue'
import JobConfig from '../views/config/job/JobConfig.vue'
import RoleConfig from '../views/config/role/RoleConfig.vue'
import WidgetConfig from '../views/config/widget/WidgetConfig.vue'

//看板总入口，根据类型显示以下三个具体看板中的一个
import Dashboard from '../views/dashboard/Dashboard.vue'
//不同类型的看板，Grid（按行展示的看板），Gridster（复杂布局看板），Timeline（时间线看板）
import Grid from '../views/dashboard/Grid.vue'
import Gridster from '../views/dashboard/Gridster.vue'
import Timeline from '../views/dashboard/Timeline.vue'
//需要在应用的main.js中添加到store里
import StoreConfig from '../store/modules/config'
import StoreDashboard from '../store/modules/dashboard'
import StoreMenu from '../store/modules/menu'
import StoreParams from '../store/modules/params'
import StoreWidget from '../store/modules/widget'
//需要在应用的main.js中添加到is18里
import i18n from '../i18n/'

import '../styles/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'font-awesome/css/font-awesome.min.css'

const components = [
  DashboardHeader,
  DashboardLoading,
  DashboardParam,
  DashboardWidgets,
  KpiContent,
  ChartContent,
  TableContent,
  MapContent,
  RadarContent,
  FunnelContent,
  ScatterContent,
  ChinaMapContent,
  DashboardWidget,
  BoardConfig,
  CategoryConfig,
  DatasetConfig,
  DatasourceConfig,
  JobConfig,
  RoleConfig,
  WidgetConfig,
  Dashboard,
  Grid,
  Gridster,
  Timeline,
  StoreConfig,
  StoreDashboard,
  StoreMenu,
  StoreParams,
  StoreWidget,
  i18n
]

const install = function(vue) {
  /* istanbul ignore if */
  if (install.installed) return
  /*eslint-disable*/
  components.forEach(component => {
    vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  DashboardHeader,
  DashboardLoading,
  DashboardParam,
  DashboardWidgets,
  KpiContent,
  ChartContent,
  TableContent,
  MapContent,
  RadarContent,
  FunnelContent,
  ScatterContent,
  ChinaMapContent,
  DashboardWidget,
  BoardConfig,
  CategoryConfig,
  DatasetConfig,
  DatasourceConfig,
  JobConfig,
  RoleConfig,
  WidgetConfig,
  Dashboard,
  Grid,
  Gridster,
  Timeline,
  StoreConfig,
  StoreDashboard,
  StoreMenu,
  StoreParams,
  StoreWidget,
  i18n
}

export default {
  install,
  DashboardHeader,
  DashboardLoading,
  DashboardParam,
  DashboardWidgets,
  KpiContent,
  ChartContent,
  TableContent,
  MapContent,
  RadarContent,
  FunnelContent,
  ScatterContent,
  ChinaMapContent,
  DashboardWidget,
  BoardConfig,
  CategoryConfig,
  DatasetConfig,
  DatasourceConfig,
  JobConfig,
  RoleConfig,
  WidgetConfig,
  Dashboard,
  Grid,
  Gridster,
  Timeline,
  StoreConfig,
  StoreDashboard,
  StoreMenu,
  StoreParams,
  StoreWidget,
  i18n
}
