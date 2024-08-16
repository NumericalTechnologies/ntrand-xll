import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "home.keyFeatures.title",
      message: "Key Features",
    }),
    Svg: require("@site/static/img/undraw_visual_data_re_mxxo.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>
            <Translate id="home.keyFeatures.description.randomNumberGeneration">
              Random number generation based on Mersenne Twister
            </Translate>
          </li>
          <li>
            <Translate id="home.keyFeatures.description.variousProbabilityDistributions">
              Various probability distributions
            </Translate>
          </li>
          <li>
            <Translate id="home.keyFeatures.description.statisticUtilityFunctions">
              Statistic utility functions
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: translate({
      id: "home.purposesOfUse.title",
      message: "Purposes of Use",
    }),
    Svg: require("@site/static/img/undraw_problem_solving_re_4gq3.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>
            <Translate id="home.purposesOfUse.description.pricingFinancialDerivatives">
              Pricing financial derivatives
            </Translate>
          </li>
          <li>
            <Translate id="home.purposesOfUse.description.riskManagementStudies">
              Risk management studies
            </Translate>
          </li>
          <li>
            <Translate id="home.purposesOfUse.description.preliminaryTestBeforeIntroducingACostlyCalculatingSystem">
              Preliminary test before introducing a costly calculating system
            </Translate>
          </li>
          <li>
            <Translate id="home.purposesOfUse.description.writingYourResearchArticle">
              Writing your research article
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: translate({
      id: "home.capabilities.title",
      message: "Capabilities",
    }),
    Svg: require("@site/static/img/undraw_all_the_data_re_hh4w.svg").default,
    description: (
      <>
        <ul className="text--left">
          <li>
            <Translate id="home.capabilities.description.excelRandomGeneratorBasedOnMersenneTwister">
              Excel Random Generator based on Mersenne Twister
            </Translate>
          </li>
          <li>
            <Translate id="home.capabilities.description.generateOver1MillionRandomNumbers">
              Generate Over 1 Million Random Numbers
            </Translate>
          </li>
          <li>
            <Translate id="home.capabilities.description.excel64BitAnd32BitCompatible">
              Excel 64-bit and 32-bit compatible
            </Translate>
          </li>
          <li>
            <Translate id="home.capabilities.description.armedWithHigherPrecision">
              Armed with higher precision
            </Translate>
          </li>
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
