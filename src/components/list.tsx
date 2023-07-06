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

  return (
    <ul className="p-1 menu rounded-box bg-base-200">
      <li className="menu-title">GPT4</li>
      {
        gpt4Sites.map((site) => (
          <li
            className="flex items-center justify-center cursor-pointer"
            onClick={() => onChange(site)}
            key={site.url}>
            <a className={`w-full ${site.url === currentSite?.url ? 'active' : ''}`}>{site.title}</a>
          </li>
        ))
      }

      <li className="menu-title">GPT3</li>
      {
        gpt3Sites.map((site) => (
          <li
            className="flex items-center justify-center cursor-pointer"
            onClick={() => onChange(site)}
            key={site.url}>
            <a className={`w-full ${site.url === currentSite?.url ? 'active' : ''}`}>{site.title}</a>
          </li>
        ))
      }
    </ul>
  )
}
