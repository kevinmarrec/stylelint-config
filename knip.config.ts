import type { KnipConfig } from 'knip'

export default {
  entry: [
    '*.config.ts',
    'src/index.ts',
  ],
  ignoreDependencies: [
    'stylelint-config-html',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-order',
    'stylelint-plugin-use-baseline',
  ],
} satisfies KnipConfig
