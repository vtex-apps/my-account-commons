export default function getNamespace(isPackage) {
  return `myo-${isPackage ? 'package-' : ''}progress-bar`
}
