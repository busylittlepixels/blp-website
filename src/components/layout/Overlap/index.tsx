'use client';
import React from "react";

export const Overlap = (props: any) => {
    
    return(
        
        <div className={`w-full overlapContent mx-auto my-20`}>
            <div className={`overlap mx-auto my-0 bg-left`}>
                <div className={`toutCopy--overlap w-full md:w-1/2 ml-auto bg-red`}>
                    <h1 className="toutHeader--overlap uppercase font-bold">We <span style={{ "color": "#000"}}>Heart </span>Code</h1>
                    <div className="text--overlap text-white mt-6 text-lg leading-8">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default Overlap;
