'use client'

import {useState} from "react";
import Side from '@/components/side'
import {ModelType, Site} from "@/types/type";


const sites: Site[] = [
  {
    title: 'FreeGPT',
    modelType: ['gpt3'],
    url: 'https://chat.api-box.com',
  },
  {
    title: 'lushu chat',
    modelType: ['gpt4'],
    url: 'https://gpt.free.lsdev.me/zh',
  },
  {
    title: 'AiChatOS',
    modelType: ['gpt3'],
    url: 'https://chat10.aichatos.xyz',
  },
  {
    title: '老北鼻AI',
    modelType: ['gpt3'],
    url: 'https://url1.ai-node.com',
  },
  {
    title: 'wuguokai',
    modelType: ['gpt3'],
    url: 'https://chat.wuguokai.cn/',
  },
  {
    title: '77cob',
    modelType: ['gpt3'],
    url: 'https://www.77cob.top/',
  },
  {
    title: 'ninomae',
    modelType: ['gpt4'],
    url: 'https://magic.ninomae.top/zh',
  },
]

export default function Home() {

  const [site, setSite] = useState<Site>()

  const handleChangeSite = (site: Site)=> {
    if (site.openTab){
      window.open(site.url)
      return
    }
    setSite(site)
  }

  return (
    <main className="flex flex-col md:flex-row">
      <Side onChange={handleChangeSite} sites={sites} site={site} />
      <main className="flex-1">
        {
          site?.url ? (
            <div>
              <iframe key={site?.url} className="w-full h-screen" src={site?.url} />
            </div>
          ): (
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="p-4 text-xl">
                Free GPT 🆓 No Auth ⛔
              </h1>
              <p className="p-6 text-xl md:text-2xl">
                如果遇到网站打不开的情况，请使用 <span className="font-bold">科学上网</span>。
              </p>
              <div className="p-6 text-center">
                <p>
                  目的也不是在手机等移动端使用，只是利用几分钟时间临时搭建的一个网站，主要是自己和家人朋友使用而做的一个集合站，不保证可用性。
                </p>
                <p>请尽量在 PC 或 iPad 中使用</p>
              </div>
              <div className="p-6 text-center">
                <p>
                  如果有任何问题，可以在 <a href="https://github.com/zsio/Free-GPT-No-Auth">GitHub</a> 上提issue、直接发邮件给我 <a href="mailto:200676@gmail.com" className="text-blue-400">200676@gmail.com</a>
                </p>
                <p>或者 <a className="text-blue-400" href="https://discord.gg/8AZ9Xa37">加入discord</a> 联系我</p>
              </div>
              <a href="https://discord.gg/8AZ9Xa37">
                <img src="https://discordapp.com/api/guilds/1125981168584626247/widget.png?style=banner2&count=true" alt=""/>
              </a>
            </div>
          )
        }
      </main>
    </main>
  )
}
