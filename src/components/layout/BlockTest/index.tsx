/* eslint-disable no-console */

import { RichText } from '../RichText'
import { FadeIn } from '../../shared/FadeIn'

interface ITextBlock {
	content?: any
}

export const BlockTest = ({ content }: ITextBlock) => {
	return (
		<FadeIn>
			<section className={'w-full boundedContainer'}>
				<div className="relative overflow-hidden bg-white md:pt-16 md:pb-16">
					<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
						<div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
							<svg
								className="absolute bottom-12 left-full translate-x-32 transform"
								width="400"
								height="384"
								fill="none"
								viewBox="0 0 400 384"
							>
								<defs>
									<pattern
										id="d3eb07ae-5182-43e6-857d-35c643af9034"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
							</svg>
						</div>
					</div>
					<section className="relative lg:px-8">
						<div className="mx-auto max-w-prose text-lg">
							<h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">
								{content.blockheader}
							</h1>
							<h2>{content.subtitle}</h2>
							<div className="header__underline"></div>
							<RichText content={content.blocktext} className={'pt-8 block_text'} />
						</div>
					</section>
				</div>
			</section>
		</FadeIn>
	)
}

export default BlockTest
