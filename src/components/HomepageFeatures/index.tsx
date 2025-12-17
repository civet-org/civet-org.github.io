import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    description: (
      <>
        Civet takes care of the data handling. All you have to do is to bring it
        to the screen.
      </>
    ),
  },
  {
    title: "Flexible",
    description: (
      <>
        Civet leaves the connection of the data source to you, allowing you to
        integrate nearly any backend.
      </>
    ),
  },
  {
    title: "Powered by React",
    description: (
      <>
        Civet's functionality is accessible by React components and hooks, which
        makes integrating it into your existing environment super easy.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {Svg ? (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      ) : null}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
