# @kevinmarrec/stylelint-config

## Description

Opinionated [Stylelint](https://stylelint.io) config.

## Opinions

- Extends the following configs:
  - [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
  - [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html)
  - [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)

- Adds the following plugins:
  - [stylelint-plugin-use-baseline](https://github.com/ryo-manba/stylelint-plugin-use-baseline)

- Enforces the following rules:
  - [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties)
  - [length-zero-no-unit](https://stylelint.io/user-guide/rules/list/length-zero-no-unit)

- Supports all [Stylelint config](https://stylelint.io/user-guide/configure) options

## Usage

> Requires [Stylelint](https://stylelint.io) v16 _or later_.

### Default

```ts
// stylelint.config.ts
export { default } from '@kevinmarrec/stylelint-config'
```

### Extended

```ts
// stylelint.config.ts
import { useConfig } from '@kevinmarrec/stylelint-config'

export default useConfig({ /* options */ })
```
