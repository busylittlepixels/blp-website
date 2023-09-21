"use client";
import React from "react";
import useGSAPAnimation from "./../../../hooks/useGSAPAnimation"; // Adjust path accordingly
import { useModal } from "../../../hooks/useModal";
import images from './images'; 
import { Modal } from './Modal';

export const ScrollTrigger = () => {
  	const { loaderRef } = useGSAPAnimation();
	const modal = useModal<any>();

	const triggerScreenModal = (e, data) => {
		e.preventDefault(); 
		modal.openModal(data);	
	}

    return(
        <div className="scrollTriggerGallery mt-4">
			{modal.isVisible && (
				<Modal data={modal.data} closeModal={modal.closeModal} isTriggered={modal.isVisible} />
			)}
			<div className="loader flex items-center justify-center">
				<div className="text" ref={loaderRef}>0%</div>
			</div>
			<div className="demo-wrapper">	
				
				<section className="demo-gallery">
					<ul className="wrapper">
						{images.map((img:any) => {
							return(
								<li key={img.src}>
									<img height="874" src={img.src} width="1240" onClick={(e) => triggerScreenModal(e, img)} />
								</li>
							); 
						}).slice(0,4)}
					</ul>
				</section>
				<section className='demo-text'>
					<div className='wrapper text'>
						BUSY<span style={{"color":"red"}}>LITTLE</span>PIXELS
					</div>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
						{images.map((img:any) => {
							return(
								<li key={img.src}>
									<img height="874" src={img.src} width="1240" onClick={(e) => triggerScreenModal(e, img)} />
								</li>
							); 
						}).slice(5,8)}
					</ul>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
						{images.map((img:any) => {
							return(
								<li key={img.src}>
									<img height="874" src={img.src} width="1240" onClick={(e) => triggerScreenModal(e, img)} />
								</li>
							); 
						}).slice(9,12)}
					</ul>
				</section>
				<section className='demo-text'>
					<div className='wrapper text'>
					WEMAKE<span style={{"color":"red"}}>YOURTECH</span>GO!
					</div>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
						{images.map((img:any) => {
							return(
								<li key={img.src}>
									<img height="874" src={img.src} width="1240" onClick={(e) => triggerScreenModal(e, img)} />
								</li>
							); 
						}).slice(9,12)}
					</ul>
				</section>
				
			</div>
		</div>
    ); 
};

export default ScrollTrigger;





