'use client'

import {useState} from "react";
import Side from '@/components/side'
import {Site} from "@/types/type";


const sites: Site[] = [
  {
    title: 'FreeGPT',
    url: 'https://chat.api-box.com',
  },
  {
    title: 'lushu chat',
    url: 'https://gpt.free.lsdev.me/zh',
  },
  {
    title: 'AiChatOS',
    url: 'https://chat10.aichatos.xyz',
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
    <main className="flex">
      <Side onChange={handleChangeSite} sites={sites} site={site} />
      <main className="flex-1">
        {
          site?.url ? (
            <iframe key={site?.url} className="w-full h-screen" src={site?.url} />
          ): (
            <div className="h-full flex flex-col items-center justify-center">
              <p className="text-3xl">
                如果左侧的网站遇到打不开的情况，请使用科学网络。
              </p>

              <div className="p-6 text-center">
                <p>
                  目的也不是在手机等移动端使用，只是利用几分钟时间临时搭建的一个网站，主要是自己和家人朋友使用而做的一个集合站，不保证可用性。
                </p>
                <p>请尽量在PC或IPad中使用</p>
              </div>
              <div className="p-6 text-center">
                <p>
                  如果有好的网站，可以在github上提issue、直接发邮件给我 <a href="mailto:200676@gmail.com" className="text-blue-400">200676@gmail.com</a>
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
