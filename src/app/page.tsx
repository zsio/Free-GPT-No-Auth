'use client'

import {useState} from "react";
import Side from '@/components/side'
import { Site } from "@/types/type";


const sites: Site[] = [
  {
    title: 'FreeGPT',
    modelType: ['gpt3'],
    url: 'https://chat.api-box.com',
  },
  {
    title: 'acytoo',
    modelType: ['gpt3'],
    url: 'https://chat.acytoo.com/',
  },
  {
    title: 'gpt2',
    modelType: ['gpt3'],
    url: 'https://chat.getgpt.world',
  },
  {
    title: 'ai.ls',
    modelType: ['gpt3'],
    url: 'https://ai.ls/',
  },
  {
    title: 'ikunn',
    modelType: ['gpt3'],
    url: 'https://ikunn.icu/',
  }
]

export default function Home() {

  const [site, setSite] = useState<Site>()

  /**
   * change site
   * @param site Site
   * @returns void
   */
  const handleChangeSite = (site: Site)=> {
    if (!site) return
    const {url, newWindow} = site
    if (newWindow){
      // open in a new window
      window.open(url)
      return
    }
    // open in the same window
    setSite(site)
  }


  return (
    <main className="flex flex-col md:flex-row">
      <Side onChange={handleChangeSite} sites={sites} site={site} />
      <main className="flex-1">
        {
          site?.url ? (
            <div>
              <iframe
                key={site?.url}
                className="w-full h-screen"
                src={site?.url}
              />
            </div>
          ): (
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="p-4 pl-8 pr-8 text-2xl font-bold border rounded shadow-xl">
                Free GPT 🆓 No Auth ⛔
              </h1>
              <div className="p-6 text-center">
                <p>
                  使用公共免费api，不保证可用性。
                </p>
                <p>首选使用FreeGPT，回复慢则需要耐心等待</p>
              </div>
              <div className="p-6 text-center">
                <p>
                  源代码出处 <a href="https://github.com/zsio/Free-GPT-No-Auth">GitHub</a> 邮件 <a href="mailto:200676@gmail.com" className="text-blue-400">200676@gmail.com</a>
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
