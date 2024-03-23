import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '区块链浏览器',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        实时查看区块链交易、区块、账户等信息。
      </>
    ),
  },
  {
    title: '可信平台区块链',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        自主、可控、开源、卫星互联网特色。
      </>
    ),
  },
  {
    title: '可信平台API文档',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        在管理域提供文件存证及查验等可信业务。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
