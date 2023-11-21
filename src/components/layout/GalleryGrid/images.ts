import { Image } from 'react-grid-gallery'

export interface CustomImage extends Image {
	original: string
	title?: string
	description?: string
}

export const images: CustomImage[] = [
	{
		src: '/assets/images/heart.webp',
		original: '/assets/images/heart.webp',
		width: 320,
		height: 174,
		title: "We're no strangers to love...you know the rules and so do I...",
	},
	// {
	//   src: "https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif",
	//   original: "https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif",
	//   width: 350,
	//   height: 250,
	//   title: "..."
	// },
	{
		src: '/assets/images/coffee.webp',
		original: '/assets/images/coffee.webp',
		width: 350,
		height: 212,
		title: "...a full commitment's what I'm thinking of...",
	},
	{
		src: 'assets/images/studio.webp',
		original: 'assets/images/studio.webp',
		width: 480,
		height: 240,
		title: "...you wouldn't get this from any other guy...",
	},
	{
		src: 'assets/images/not-a-meeting.webp',
		original: 'assets/images/not-a-meeting.webp',
		width: 320,
		height: 183,
		title: "...I just wanna tell you how I'm feeling...",
		description: '',
	},
	{
		src: 'assets/images/monster.webp',
		original: 'assets/images/monster.webp',
		width: 580,
		height: 350,
		title: '...gotta make you, understand...',
	},
	{
		src: '/assets/images/code2.webp',
		original: '/assets/images/code2.webp',
		width: 360,
		height: 190,
		title: '...never gonna give you up...',
	},
	{
		src: '/assets/images/ganglia.webp',
		original: '/assets/images/ganglia.webp',
		width: 200,
		height: 140,
		title: '...never gonna let you down...',
	},
	{
		src: '/assets/images/office2.webp',
		original: '/assets/images/office2.webp',
		width: 320,
		height: 213,
		title: '...never gonna run around and desert you...',
	},
	{
		src: '/assets/images/busypixels.webp',
		original: '/assets/images/busypixels.webp',
		alt: 'BusyLittlePixels',
		width: 600,
		height: 450,
		title: '...never gonna make you cry...',
	},
	{
		src: '/assets/images/headless.webp',
		original: '/assets/images/headless.webp',
		alt: 'Specialists in Headless',
		width: 350,
		height: 200,
		title: '...never gonna say goodbye...',
	},
	{
		src: '/assets/images/workdesk.webp',
		original: '/assets/images/workdesk.webp',
		alt: 'Desk',
		width: 500,
		height: 350,
		title: '...never gonna tell a lie...',
	},
	{
		src: '/assets/images/app.webp',
		original: '/assets/images/app.webp',
		alt: 'We Like You Too',
		width: 750,
		height: 450,
		title: '...and hurt you...',
	},

	{
		src: '/assets/images/scrollinnncodin.webp',
		original: '/assets/images/scrollinnncodin.webp',
		alt: 'Code Code Code',
		width: 600,
		height: 350,
		title: '...Code Code Code...',
	},
	{
		src: '/assets/images/desk.webp',
		original: '/assets/images/desk.webp',
		alt: 'Desk',
		width: 650,
		height: 400,
		title: 'All set?',
	},

	{
		src: '/assets/images/functions.webp',
		original: '/assets/images/functions.webp',
		alt: 'Desk',
		width: 500,
		height: 300,
		title: "Let's get pix-ical.",
	},
]
