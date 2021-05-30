import * as React from 'react'
import { fetchWikiList } from '../../api/wiki'

const Wiki: React.FC = () => {
  const [count, setCount] = React.useState(1)
  React.useEffect(() => {
    fetchWikiList().then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      Wiki page
      {count}
    </div>
  )
}

export default Wiki
