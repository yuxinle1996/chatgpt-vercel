import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Based on OpenAI API (gpt-3.5-turbo).
- 自备API_KEY,点击输入框上方的小齿轮,填入你的API_KEY,以后浏览器会缓存你的KEY,不用每次都填写.
- 如果本项目对你有所帮助，可以给大咪 [买点零食](https://mida.vip/upload/2023/04/zfb.png)
- 本网站仅作为项目演示，不提供长期服务，请勿滥用，请勿长期使用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
