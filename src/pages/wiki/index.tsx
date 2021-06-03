import * as React from 'react'
import { fetchWikiList } from '../../api/wiki/interface'

const Wiki: React.FC = () => {
  const [dataList, setDataList] = React.useState<any[]>([])
  React.useEffect(() => {
    fetchWikiList().then(res => {
      setDataList(res?.dataList || [])
    })
  }, [])
  return (
    <div>
      Wiki page
    </div>
  )
}

export default Wiki
