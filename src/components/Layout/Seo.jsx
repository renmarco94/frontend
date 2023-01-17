import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default function Seo({ title, description, pathname, children }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{`${seo.title} - ${seo.description}`}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.image} />
      {children}
    </>
  )
}
