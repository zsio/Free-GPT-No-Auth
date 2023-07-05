import type {Site} from '@/types/type'

import Image from 'next/image';


interface Props {
  sites: Site[]
  site?: Site
  onChange: (site: Site) => void
}

// 添加props
export default function Side(props: Props) {

  const {onChange, sites, site: currentSite} = props;

  return (
    <div className="w-[120px]">
      <div className="w-full p-1 flex flex-col h-screen">
        <header className="flex-0"/>

        <ul
          className="flex-1 p-1 overflow-x-hidden overflow-y-auto h-0 menu bg-base-200 rounded-box"
        >
          <li className="menu-title">GPT 列表</li>
          {
            sites.map((site) => (
              <li
                className="flex items-center justify-center cursor-pointer"
                onClick={() => onChange(site)}
                key={site.url}>
                <a className={`w-full ${site.url === currentSite?.url? 'active':''}`}>{site.title}</a>
              </li>
            ))
          }
        </ul>


        <footer className="h-[80px] flex items-center justify-center">
          <a className="p-1" target="_blank" href="https://github.com">
            <Image className="m-auto" src="/github.svg" width={26} height={26} alt="github"/>
            <span className="text-xs text-center text-gray-700">Star me</span>
          </a>
        </footer>
      </div>
    </div>

  )
}
