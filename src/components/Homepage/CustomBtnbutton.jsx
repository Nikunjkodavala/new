import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CustomBtnbutton = () => {
    const [bgcolor, setbgcolor] = useState('white')
    const [paddingX, setpaddingX] = useState('0')

    const code = ` <button type="button" className='border px-[${paddingX}rem] py-2 rounded-md bg-${bgcolor}-500'>Button A</button> `
    return (
        <div>
            <div className='flex justify-between w-10/12 mx-auto '>
                <div>
                     <div>
                           <p>Background-color:</p>
                           <input type="text" className='border' onChange={(e)=>setbgcolor(e.target.value)}/>
                     </div>
                     <div>
                           <p>PaddingX axis:</p>
                           <input type="text" className='border' onChange={(e)=>setpaddingX(e.target.value)}/>
                     </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <section>
                        <button type="button" className={`border px-[${paddingX}px] py-2 rounded-md bg-${bgcolor}-500`}>Button A</button>
                    </section>
                    <SyntaxHighlighter style={atelierCaveLight} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
                        {code}
                    </SyntaxHighlighter>    
                </div>
            </div>
        </div>
    )
}

export default CustomBtnbutton
