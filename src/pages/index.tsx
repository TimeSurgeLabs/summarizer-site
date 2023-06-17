import React from "react";
// import clsx from "clsx";
// import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  IconBrain,
  IconDeviceDesktop,
  IconBrandChrome,
  IconBrandFirefox,
  IconUser,
  IconRobot,
  IconDatabase,
  IconBrandOpenai,
} from "@tabler/icons-react";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

// import styles from "./index.module.css";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
const LandingPage: React.FC = () => {
  const title = "Summarize YouTube instantly!";
  const description =
    "Summarize YouTube videos with our powerful browser extension and web app!";

  const features = [
    {
      title: "Discord and Telegram Bots",
      description:
        "Bots to automatically summarize YouTube videos in your Discord Servers and Telegram Groups",
      icon: <IconRobot size={48} />,
    },
    {
      title: "ChatGPT Plugin",
      description:
        "Summarize YouTube right within ChatGPT. No Summarizer account required!",
      icon: <IconBrandOpenai size={48} />,
    },
    {
      title: "Browser Extensions (Soon™️)",
      description: "Summaries right on YouTube in Chrome and Firefox.",
      icon: (
        <>
          <IconBrandChrome size={48} className="margin-right--sm" />
          <IconBrandFirefox size={48} />
        </>
      ),
    },
    {
      title: "Web App",
      description:
        "Access video summaries directly from our easy-to-use web app without installing any extensions.",
      icon: <IconDeviceDesktop size={48} />,
    },
    {
      title: "Free account",
      description:
        "Get started with a free account and enjoy access to basic features without any cost.",
      icon: <IconUser size={48} />,
    },
    {
      title: "Summaries are cached by our API",
      description:
        "For faster performance, our API caches summaries, ensuring a quicker response time.",
      icon: <IconDatabase size={48} />,
    },
  ];

  return (
    <Layout title={title} description={description}>
      <div className="App">
        <header className="hero hero-banner">
          <div className="container">
            <h1 className="hero-title">Summarize</h1>
            <p className="hero-subtitle">
              Effortlessly summarize YouTube videos with our powerful Discord
              bot, Telegram Bot, and web app!
            </p>
            <div className="hero-cta">
              <a
                href="/docs/getting-started"
                className="button button--primary margin-right--sm"
              >
                Get Started
              </a>
              <a href="/blog/welcome" className="button button--secondary">
                Learn More
              </a>
            </div>
          </div>
        </header>
        <main>
          <div className="container margin-top--md">
            <div className="row">
              <div className="col">
                <h2>Features</h2>
              </div>
            </div>
            <div className="row">
              {features.map((feature, index) => (
                <div className="col col--4" key={index}>
                  <div className="card margin-bottom--md">
                    <div className="card-header">
                      <div className="avatar avatar--large avatar--centered margin-left--sm margin-top--sm">
                        <div className="avatar-icon">{feature.icon}</div>
                      </div>
                      <h3 className="card-title margin-left--sm">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="card-body margin-left--sm">
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col">
                <h2>Download Now</h2>
                <a
                  href="https://chrome.google.com/webstore/detail/summarize/your-chrome-extension-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary margin-right--sm"
                >
                  Get it on Chrome
                </a>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/summarize/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                >
                  Get it on Firefox
                </a>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default LandingPage;
