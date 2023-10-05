import { Metadata } from 'next';
import { Html, Head, Main, NextScript } from 'next/document'


export const metadata: Metadata = {
	title: {
		default: "",
		template: "%s | ",
	},
	description: "Software engineer at upstash.com and founder of planetfall.io",
	openGraph: {
		title: "",
		description:
			"Software engineer at upstash.com and founder of planetfall.io",
		url: "https://",
		siteName: "",
		images: [
			{
				url: "https:///og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Chronark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
