import type { Config } from '@netlify/edge-functions'

export { addSlash as default } from 'https://esm.sh/gh/ascorbic/slash-edge/mod.ts'

export const config: Config = {
  path: '/*'
}