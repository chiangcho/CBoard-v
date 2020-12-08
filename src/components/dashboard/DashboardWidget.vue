<template>
  <component v-if="!loading" :is="currentComponent(widgetInternal)" :widget="widgetInternal" :filters="filters" :height="height"></component>
</template>

<script>
/**
 * 图表统一访问组件，提供图表的id或图表定义，即可自动判断图表类型，并加载相关统计数据
 */
export default {
  name: 'DashboardWidget',
  props: {
    widgetId: {
      type: Number
    },
    widget: {
      type: Object
    },
    filters: {
      type: Array
    },
    height: {
      type: String
    }
  },
  components: {
    KpiContent: () => import('./widgets/KpiContent'),
    ChartContent: () => import('./widgets/ChartContent'),
    TableContent: () => import('./widgets/TableContent'),
    MapContent: () => import('./widgets/MapContent'),
    RadarContent: () => import('@/components/dashboard/widgets/RadarContent'), //雷达图
    FunnelContent: () => import('@/components/dashboard/widgets/FunnelContent'), //漏斗图
    ScatterContent: () => import('@/components/dashboard/widgets/ScatterContent'),
    ChinaMapContent: () => import('@/components/dashboard/widgets/ChinaMapContent')
  },
  created() {
    if (this.widgetId) {
      this.$req.post(this.$api.getWidget, { id: this.widgetId }).then(response => {
        this.widgetInternal = { widget: response.data }
        this.loading = false
      })
    } else {
      this.widgetInternal = { widget: this.widget }
      this.loading = false
    }
  },
  data() {
    return {
      widgetInternal: {},
      loading: true
    }
  },
  methods: {
    currentComponent(widget) {
      switch (widget.widget.data.config.chart_type) {
        case 'line':
        case 'pie':
        case 'contrast':
          return 'ChartContent'
        case 'kpi':
          return 'KpiContent'
        case 'table':
          return 'TableContent'
        case 'map':
          return 'MapContent'
        case 'radar':
          return 'RadarContent'
        case 'funnel':
          return 'FunnelContent'
        case 'chinaMap':
          return 'ChinaMapContent'
        case 'scatter':
          return 'ScatterContent'
        default:
          return 'ChartContent'
      }
    }
  }
}
</script>

<style>
</style>
