import React, { FC } from 'react';
import './index.less';

export const GroupIntroduce: FC = () => (
  <div className="group-introduce">
    <h2>小组 · 方向</h2>
    <div className="group-box">
      <div className="group-wrapper">
        <div className="group-item group-web" data-scroll-reveal>
          {/* <p className="group-introduce">
          千代你水水水水
        </p> */}
          <h4 className="group-slogen">Web梦想哈哈哈</h4>
          <span className="group-title">前端</span>
        </div>
        <div className="group-item group-java" data-scroll-reveal>
          {/* <p className="group-introduce">
          3G666
        </p> */}
          <h4 className="group-slogen">Web梦想哈哈哈</h4>
          <span className="group-title">前端</span>
        </div>
        <div className="group-item group-ios" data-scroll-reveal>
          {/* <p className="group-introduce">
          3G666
        </p> */}
          <h4 className="group-slogen">Web梦想哈哈哈</h4>
          <span className="group-title">前端</span>
        </div>
        <div className="group-item group-android" data-scroll-reveal>
          {/* <p className="group-introduce">
          3G666
        </p> */}
          <h4 className="group-slogen">Web梦想哈哈哈</h4>
          <span className="group-title">前端</span>
        </div>
      </div>
    </div>
  </div>
  );
