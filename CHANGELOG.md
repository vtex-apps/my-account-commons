# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.16.1] - 2023-08-15

## [0.16.0] - 2023-05-31

### Fixed

- `isDelivered` function returns `false` when is not possible to tell whether an invoice is `input` or `output`.

### Fixed

- Spanish translation.

## [0.15.1] - 2023-04-05

### Fixed

- `isDelivered` function only considers output packages.

## [0.15.0] - 2021-03-17

### Added

- `getCurrentProgressBarState` function.

## [0.14.0] - 2020-10-05

### Added

- i18n BG, DA, EL, FI, KO, NL, PL, RU, SK, SL, SV & UK.

### Fixed

- i18n CA, DE, ES, FR, IT & RO.

## [0.13.2] - 2020-09-10

### Fixed

- handle `shippingEstimate` without time unit.

## [0.13.1] - 2020-08-04

#### Fixed

- Prevent back button from being hidden when in mobile phones.

## [0.13.0] - 2020-07-24

### Added

- Pickup alternative timeline.

## [0.12.1] - 2020-07-08

### Fixed

- **it** translations.

## [0.12.0] - 2020-06-24

### Added

- `hideBackButton` prop to ContentWrapper.

## [0.11.1] - 2020-06-15

### Fixed

- **it** translations.

## [0.11.0] - 2019-11-13

### Added

- **de** translations.

## [0.10.2] - 2019-08-20

### Fixed

- Pickup order readiness conditional.

## [0.10.1] - 2019-08-07

### Fixed

- Last order status never rendering **ConcludedCircle**.

### Added

- Handle for pickup delivery channel in **ProgressBar**.

## [0.10.0] - 2019-04-29

### Changed

- `SkeletonPiece` to receive size.

## [0.9.2] - 2019-04-08

### Fixed

- `alert.connectionError` update message ca translation.

## [0.9.1] - 2019-03-21

### Added

- Router file

## [0.9.0] - 2019-03-18

### Added

- Italian translation

## [0.8.2] - 2019-02-14

## [0.8.1] - 2019-02-01

## [0.8.0] - 2019-01-31

### Changed

- `vtex.styleguide` to version 8
- `ContentWrapper` inside alignment and padding on small screens.

## [0.7.0] - 2019-01-22

### Changed

- Bumps messages builder major

## [0.6.0] - 2019-01-07

### Added

- Catalan translation

## [0.5.0] - 2018-12-28

### Changed

- Add Messages Builder.

## [0.4.0] - 2018-12-26

### Added

- Add `SkeletonBox` and `SkeletonPiece` components.

## [0.3.2] - 2018-12-07

### Fixed

- `BaseLoading` display nothing when no error message was identified and is not loading anymore.

## [0.3.1] - 2018-12-06

### Fixed

- Fix `PackageProgressBar` exportation.

## [0.3.0] - 2018-11-30

### Added

- `util.js` utility functions.
- `ProgressBar` componentes.

## [0.2.0] - 2018-11-21

### Added

- `parseError` prop on the `BaseLoading` component.
- `namespace` prop on the `ContentWrapper` component.

### Added

- Initializing repo.
