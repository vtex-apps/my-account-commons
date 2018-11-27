import {
  progressBarStates,
  packageProgressBarStates,
} from './components/ProgressBar/constants'
import {
  generatePackageProgressBarStates,
  generateProgressBarStates,
} from './components/ProgressBar/utils'
import OrderStatus from './components/ProgressBar/OrderStatus'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ProgressBarSection from './components/ProgressBar/ProgressBarSection'
import PackageStatus from './components/ProgressBar/PackageProgressBar/PackageStatus'
import PackageProgressBarSection from './components/ProgressBar/PackageProgressBar/PackageProgressBarSection'

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
