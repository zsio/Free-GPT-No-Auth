import {Site} from "@/types/type";


interface Props {
  sites: Site[]
  site?: Site
  onChange: (site: Site) => void
}



export default function List(props: Props) {

  const {onChange, sites, site: currentSite} = props;

  const gpt3Sites = sites.filter(site => site.modelType.includes('gpt3'))
  const gpt4Sites = sites.filter(site => site.modelType.includes('gpt4'))

  const liTag = (site: Site) => (
    <li
      className="flex items-center justify-center cursor-pointer mb-0.5 border bg-gray-300 rounded relative"
      onClick={() => onChange(site)}
      key={site.url}>
      <a className={`w-full ${site.url === currentSite?.url ? 'active' : ''}`}>{site.title}</a>
      {
        site.newWindow && (
          <span className="absolute text-xl right-0 font-bold text-white p-1 pl-2 pr-2">
            ↗
          </span>
        )
      }
    </li>
  )

  return (
    <ul className="p-1 menu rounded-box bg-base-200">
      {
        gpt4Sites.length > 0 && (
          <li className="menu-title">GPT4</li>
        )
      }
      {
        gpt4Sites.map((site) => liTag(site))
      }

      <li className="menu-title">GPT3</li>
      {
        gpt3Sites.map((site) => liTag(site))
      }
    </ul>
  )
}
