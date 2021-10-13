import * as React from 'react'
import { getGraduateMemberInfo } from '@/api/member'
import Year from '../year/index'
import './index.less'

// 成员
const Graduate: React.FC = () => {
  const [state, setState] = React.useState(0);
  const [group, setGroup] = React.useState(2017);
  React.useEffect(() => {
    getGraduateMemberInfo({ size: 100, year: '2017' }).then((res) => {
      if (res) {
        // console.log(res.dataList)
      }
    })
  }, [])
  const yearling = [
    { id: 2017, index: 0 },
    { id: 2016, index: 1 },
    { id: 2015, index: 2 },
    { id: 2014, index: 3 },
    { id: 2013, index: 4 },
    { id: 2012, index: 5 },
    { id: 2011, index: 6 },
    { id: 2010, index: 7 },
    { id: 2009, index: 8 },
  ]
  return (
    // <div className="graduate">
    //   <div className="yearContent">
    //     {yearling.map((item) => (
    //       <Link
    //         key={item.id}
    //         to={`${url}/${item.id}`}
    //         className="year"
    //         style={{
    //           backgroundColor: state === item.index ? '#2e6acc' : 'white',
    //           color: state === item.index ? 'white' : 'black',
    //           opacity: state === item.index ? '0.8' : '1',
    //           // border: state === item.index ? '1px solid white' : 'black',
    //         }}
    //         onClick={() => {
    //           setState(item.index)
    //         }}
    //       >
    //         <span>{item.id}</span>
    //       </Link>
    //     ))}
    //   </div>
    //   <div className="graduateMessage">
    //     <Switch>
    //       {yearling.map((item) => (
    //         <Route key={item.id} path={`${path}/${item.id}`} component={year} />
    //       ))}
    //       <Redirect to={`${path}/2017`} />
    //     </Switch>
    //   </div>
    // </div>

    <div className="graduate">
      <div className="yearContent">
        {yearling.map((item) => (
          <div
            key={item.id}
            className="year"
            style={{
              backgroundColor: state === item.index ? '#2e6acc' : 'white',
              color: state === item.index ? 'white' : 'black',
              opacity: state === item.index ? '0.8' : '1',
            }}
            onClick={() => {
              setState(item.index);
              setGroup(item.id);
            }}
          >
            <span>{item.id}</span>
          </div>
        ))}
      </div>
      <div className="graduateMessage">
        <div>
          {/* {group} */}
          <Year dataYear={group} clicked={group} />
        </div>
      </div>
    </div>
  )
}

export default Graduate
