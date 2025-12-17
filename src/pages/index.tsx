import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/getting-started"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={"/docs/category/api-reference"}
            >
              API Reference
            </Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 padding-vert--lg">
              <h2>Learn How</h2>
              <p>
                The resource component is used to access your data, which you
                can then hand over to your display components.
                <br />
                <a href="/docs/api/core#resource">Resource reference</a>
              </p>
              <img src={useBaseUrl("img/example-simple.png")} alt="Learn How" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2 padding-vert--lg">
              <h2>Try it Out</h2>
              <iframe
                src="https://codesandbox.io/embed/5fr4xn?view=Editor+%2B+Preview&module=%2Fsrc%2FGameList.js&hidenavigation=1"
                style={{
                  width: "100%",
                  height: "500px",
                  border: 0,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
                title="Civet Game Demo"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
