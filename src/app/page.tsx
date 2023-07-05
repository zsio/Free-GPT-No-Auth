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

  const [site, setSite] = useState<Site>(sites[0])

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
        <iframe key={site?.url} className="w-full h-screen" src={site?.url} />
      </main>
    </main>
  )
}
