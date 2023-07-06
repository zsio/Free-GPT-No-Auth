import type {Site} from '@/types/type'

import Image from 'next/image';
import List from "@/components/list";


interface Props {
  sites: Site[]
  site?: Site
  onChange: (site: Site) => void
}


export default function Side(props: Props) {

  return (
    <>
      <div className="w-0 hidden md:w-[120px] md:block">
        <div className="w-full p-1 flex flex-col h-screen">
          <header className="flex-0"/>
          <div
            className="flex-1 overflow-x-hidden overflow-y-auto h-0  rounded-box bg-base-200"
          >
            <div>
              <List {...props} />
            </div>
          </div>
          <footer className="h-[80px] flex items-center justify-center">
            <a className="p-1" target="_blank" href="https://github.com/zsio/Free-GPT-No-Auth">
              <Image className="m-auto" src="/github.svg" width={26} height={26} alt="github"/>
              <span className="text-xs text-center text-gray-700">star me</span>
            </a>
          </footer>
        </div>
      </div>

      <div className={`${props.site?.url? 'hidden':'block'} md:hidden`}>
        <div className="w-full p-4 mt-5 mb-5">
          <h1 className="p-2">点击下方的网站列表，刷新页面即可返回。</h1>
          <List {...props} />
        </div>
      </div>

    </>


  )
}
