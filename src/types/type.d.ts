

export enum ModelType {
  'gpt3',
  'gpt4',
}

export interface Site {
  title: string
  url: string
  modelType: (keyof typeof ModelType)[]
  icon?: string
  openTab?: boolean
}
