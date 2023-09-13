"use client";
import { notFound } from "next/navigation"
import { Page } from "../../../payload/payload-types"
import { Team } from "../../../components/layout/Team"
import { TitleContainer } from "../../../components/layout/TitleContainer"
import { RenderBlocks } from "../../../components/layout/RenderBlocks"
import { GalleryGrid } from "../../../components/layout/GalleryGrid"
import { BigTextLittleText } from "../../../components/layout/BigTextLittleText"
import { FadeIn } from "../../../components/shared/FadeIn"
import { useTranslations } from 'next-intl';
import { MarqueeBanner } from "../../../components/layout/MarqueeBanner"
import { Overlap } from "../../../components/layout/Overlap"

export default async function Home() {
  const t = useTranslations('Home');
  const home: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  if (!home) {
    return notFound()
  }

  const { subtitle, layout } = home

  console.log(t('meetThePixels'));
  
  return (  
      <main className={'page'}>
        <MarqueeBanner text={t('title')}/>
        <FadeIn>
          <TitleContainer title={'little'} subtitle={'ass'}/>
          <GalleryGrid />
          <RenderBlocks content={layout} />
          <Team />
        </FadeIn>
        <Overlap />
        <BigTextLittleText />
        
       
      </main>
   
  )
}
