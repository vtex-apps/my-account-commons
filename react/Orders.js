import {
  progressBarStates,
  packageProgressBarStates,
} from './components/OrderProgressBar/constants'
import {
  generatePackageProgressBarStates,
  generateProgressBarStates,
} from './components/OrderProgressBar/utils'
import OrderStatus from './components/OrderProgressBar/OrderStatus'
import ProgressBar from './components/OrderProgressBar/ProgressBar'
import ProgressBarSection from './components/OrderProgressBar/ProgressBarSection'
import PackageStatus from './components/OrderProgressBar/PackageProgressBar/PackageStatus'
import PackageProgressBarSection from './components/OrderProgressBar/PackageProgressBar/PackageProgressBarSection'

const constants = {
  progressBarStates,
  packageProgressBarStates,
}

const utils = {
  generatePackageProgressBarStates,
  generateProgressBarStates,
}

export default {
  constants,
  utils,
  OrderStatus,
  ProgressBarSection,
  PackageProgressBarSection,
  PackageStatus,
  ProgressBar,
}
