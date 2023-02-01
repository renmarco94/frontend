import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default function Seo({
  title,
  description,
  pathname,
  children,
  published,
}) {
  const {
    title: defaultTitle,
    author,
    description: defaultDescription,
    image,
    icon,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    icon: `${siteUrl}${icon}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    author,
    published,
  }

  return (
    <>
      <>
        <title>{`${seo.title} - ${seo.description}`}</title>
        <meta
          name="google-site-verification"
          content="mjq5DtsDhyOgGE3egTFHS3JMajGqOVf8Aaiupq0A6BI"
        />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="author" content={seo.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <meta property="article:published_time" content={seo.published} />
        {/* <meta name="twitter:title" content={seo.title} /> */}
        <meta property="og:title" content={seo.title} />
        {/* <meta name="twitter:description" content={seo.description} /> */}
        <meta property="og:description" content={seo.description} />
        {/* <meta name="twitter:url" content={seo.url} /> */}
        <meta property="og:url" content={seo.url} />
        {/* <meta name="twitter:image" content={seo.image} /> */}
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:alt" content="my social media banner" />
        <meta property="og:type" content="website" />
        <link rel="icon" href={seo.icon} />
        {children}
      </>
    </>
  )
}
