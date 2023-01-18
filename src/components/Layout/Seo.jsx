import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default function Seo({ title, description, pathname, children }) {
  const {
    title: defaultTitle,
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
  }

  return (
    <>
      <>
        <title>{`${seo.title} - ${seo.description}`}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        {/* <meta name="twitter:title" content={seo.title} /> */}
        <meta property="og:title" content={seo.title} />
        {/* <meta name="twitter:description" content={seo.description} /> */}
        <meta property="og:description" content={seo.description} />
        {/* <meta name="twitter:url" content={seo.url} /> */}
        <meta property="og:url" content={seo.url} />
        {/* <meta name="twitter:image" content={seo.image} /> */}
        <meta property="og:image" content={seo.image} />
        <link rel="icon" href={seo.icon} />
        {children}
      </>
    </>
  )
}

// < metaproperty="og: url"content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"/>< metaproperty="og: type"content="article"/>< metaproperty="og: title"content="When Great Minds Don’t Think Alike"/>< metaproperty="og: description"content="How much does culture influence creative thinking?"/><goalproperty="og: image"content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"/>
