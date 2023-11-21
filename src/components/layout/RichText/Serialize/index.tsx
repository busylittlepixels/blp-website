import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import Link from 'next/link'
import Image from 'next/image'

type Node = {
	type: string
	value?: {
		url: string
		alt: string
	}
	children?: Node[]
	url?: string
	[key: string]: unknown
	newTab?: boolean
}

export type CustomRenderers = {
	[key: string]: (args: {
		node: Node
		Serialize: SerializeFunction
		index: number
	}) => JSX.Element // eslint-disable-line
}

type SerializeFunction = React.FC<{
	content?: Node[]
	customRenderers?: CustomRenderers
}>

const isText = (value: any): boolean =>
	typeof value === 'object' && value !== null && typeof value.text === 'string'

export const Serialize: SerializeFunction = ({ content, customRenderers }) => {
	return (
		<Fragment>
			{content?.map((node, i) => {
				if (isText(node)) {
					let text = (
						<span
							dangerouslySetInnerHTML={{
								// @ts-expect-error
								__html: escapeHTML(node.text),
							}}
						/>
					)

					if (node.bold) {
						text = <strong key={i}>{text}</strong>
					}

					if (node.code) {
						text = <code key={i}>{text}</code>
					}

					if (node.italic) {
						text = <span style={{ color: 'red' }}>{text}</span>
					}

					if (node.underline) {
						text = (
							<span style={{ textDecoration: 'underline' }} key={i}>
								{text}
							</span>
						)
					}

					if (node.strikethrough) {
						text = (
							<span style={{ textDecoration: 'line-through' }} key={i}>
								{text}
							</span>
						)
					}

					return <Fragment key={i}>{text}</Fragment>
				}

				if (!node) {
					return null
				}

				if (
					customRenderers &&
					customRenderers[node.type] &&
					typeof customRenderers[node.type] === 'function'
				) {
					return customRenderers[node.type]({
						node,
						Serialize,
						index: i,
					})
				}

				switch (node.type) {
					case 'br':
						return <br key={i} />

					case 'h1':
						return (
							<h1 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h1>
						)

					case 'h2':
						return (
							<h2 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h2>
						)

					case 'h3':
						return (
							<h3 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h3>
						)

					case 'h4':
						return (
							<h4 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h4>
						)

					case 'h5':
						return (
							<h5 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h5>
						)

					case 'h6':
						return (
							<h6 key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</h6>
						)

					case 'quote':
						return (
							<blockquote key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</blockquote>
						)

					case 'ul':
						return (
							<ul
								key={i}
								role="list"
								className={`max-w-xl space-y-8 text-gray-400`}
							>
								<li key={i} className="flex gap-x-3">
									<span className="font-normal text-gray-900">
										<Serialize
											content={node.children}
											customRenderers={customRenderers}
										/>
									</span>
								</li>
							</ul>
						)

					case 'ol':
						return (
							<ol key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</ol>
						)

					case 'li':
						return (
							<li key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</li>
						)

					case 'upload':
						return (
							<figure key={i} className="my-8 shiney-wrapper shine">
								<Image
									width={100}
									height={100}
									// @ts-ignore
									alt={i}
									className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md"
									// @ts-ignore
									src={node.value?.url}
								/>
							</figure>
						)

					case 'link':
						return (
							<Link
								href={escapeHTML(node.url)}
								key={i}
								{...(node.newTab
									? {
											target: '_blank',
											rel: 'noopener noreferrer',
									  }
									: {})}
							>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</Link>
						)

					default:
						return (
							<p key={i}>
								<Serialize
									content={node.children}
									customRenderers={customRenderers}
								/>
							</p>
						)
				}
			})}
		</Fragment>
	)
}
