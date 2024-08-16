import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Key Features",
    Svg: require("@site/static/img/undraw_visual_data_re_mxxo.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>Random number generation based on Mersenne Twister</li>
          <li>Various probability distributions</li>
          <li>Statistic utility functions</li>
        </ul>
      </>
    ),
  },
  {
    title: "Purposes of Use",
    Svg: require("@site/static/img/undraw_problem_solving_re_4gq3.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>Pricing financial derivatives</li>
          <li>Risk management studies</li>
          <li>
            Preliminary test before introducing a costly calculating system
          </li>
          <li>Writing your research article</li>
        </ul>
      </>
    ),
  },
  {
    title: "Capabilities",
    Svg: require("@site/static/img/undraw_all_the_data_re_hh4w.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>Generate Over 1 Million Random Numbers</li>
          <li>Excel 64-bit and 32-bit compatible</li>
          <li>Armed with higher precision</li>
        </ul>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
