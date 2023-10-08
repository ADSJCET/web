import { Metadata } from 'next';
import { Html, Head, Main, NextScript } from 'next/document'

export const metadata: Metadata = {
	title: {
		default: "ADSA",
		template: "%s | ",
	},
	description: "Artificial Intelligence & Data Science Students Association",
	openGraph: {
		title: "ADSA",
		description:
			"Artificial Intelligence & Data Science Students Association",
		url: "https://adsjcet.vercel.app",
		siteName: "ADSA",
		images: [
			{
				url: "https://adsjcet.vercel.app/assets/sjcet.jpg",
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
		title: "ADSA",
		card: "summary_large_image",
		creator: "Rajat Sandeep",
		creatorId: "rajatsandeepsen",
		description: "Artificial Intelligence & Data Science Students Association",

	},
	icons: {
		icon: [
		  {
			media: '(prefers-color-scheme: light)',
			url: '/images/icon-light.png',
			href: '/images/icon-light.png',
		  },
		  {
			media: '(prefers-color-scheme: dark)',
			url: '/images/icon.png',
			href: '/images/icon-dark.png',
		  },
		],
		shortcut: "/favicon.ico",
	},
};



export default function Document() {
  return (
    <Html lang="en">
      <Head />
		<body className='min-h-screen w-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
        <Main />
		<NextScript />
      </body>
    </Html>
  )
}
