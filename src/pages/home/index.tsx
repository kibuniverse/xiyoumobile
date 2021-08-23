import * as React from 'react';
import { Carousel, Divider, message } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { fetchActivityList } from '../../api/activity';
import './index.less';
import { ActivityHome } from '../../components/activity-home';
import { WikiItem } from '../../components/wiki-item';
import { fetchWikiList } from '../../api/wiki/interface';
import { IWikiItem } from '../../api/wiki';
import { GroupIntroduce } from '../../components/group-introduce';
import { IActivityItem } from '../../api/activity/interface';
import { WikiHome } from '../../components/wiki-home';

const MainCarousel: React.FC = () => (
  <div className="content-header">
    <Carousel adaptiveHeight>
      <div className="carousel-item item1" />
      <div className="carousel-item item2" />
    </Carousel>
  </div>
);

const MoreAbout: React.FC<{ to: string }> = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <Link to={props.to} className="moreAbout">
    了解更多
  </Link>
);

const Home: React.FC = () => {
  const [activityList, setActivityList] = React.useState<IActivityItem[]>([]);
  const [wikiList, setWikiList] = React.useState<IWikiItem[]>([]);
  const history = useHistory();
  // 获取activity
  React.useEffect(() => {
    fetchActivityList({ size: 6 }).then((res) => {
      if (res) {
        console.log(res.dataList);
        setActivityList(res.dataList);
        return;
      }
      message.error('服务器游离中...');
    });
    fetchWikiList({ size: 6 }).then((res) => {
      console.log(res);
      if (res) {
        console.log(res.dataList);
        setWikiList(res.dataList);
        return;
      }
      message.error('服务器游离中...');
    });
  }, []);

  const handleClickActivity = (id: number) => () => {
    history.push(`/activity-detail?id=${id}`);
  };

  return (
    <div className="home-wrapper">
      <MainCarousel />
      <div className="content">
        <GroupIntroduce />
        <ActivityHome {...activityList} row={1} />
        <WikiHome {...wikiList} row={1} />
      </div>
    </div>
  );
};
export default Home;
