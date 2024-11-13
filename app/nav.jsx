"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/free-regular-svg-icons'

import { decode } from 'html-entities'
import Link from 'next/link'

import { useState } from "react"

export default function Nav() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <>
            <div className="
                max-md:px-0 px-8 py-4 
                sticky top-4 bg-transparent
                flex justify-between items-center"
            >
                <FontAwesomeIcon icon={faLemon} className="max-sm:text-2xl max-md:text-3xl text-4xl" />
                <p className='max-sm:text-base max-md:text-xl max-lg:text-2xl text-3xl'>magreview ka na!!</p>
                <div 
                    onClick={handleToggleMenu}
                    className='text-4xl cursor-pointer w-8 flex justify-center items-center'
                >
                    {isMenuOpen ? `${decode("&times")}` : `${decode("&#9776")}`}
                </div>
                {isMenuOpen && <Modal />}
            </div>
            <hr className='border-px border-slate-700 rounded-2xl mb-8 sticky top-24' />
        </>
    )
}

const subjects = [ // make this objext of array soon with links
    { subj: "Home", linkTo: "/" },
    { subj: "Introduction to Architecture", linkTo: "/subject-files/introduction-to-architecture" },
    { subj: "Graphics and Visual Computing", linkTo: "/subject-files/graphics-and-visual-computing" },
    { subj: "Human-Computer Interaction", linkTo: "/subject-files/human-computer-interaction" },
    { subj: "Programming Languages Design and Implementation", linkTo: "/subject-files/programming-languages-design-and-implementation" },
    { subj: "Information Assurance and Security", linkTo: "/subject-files/information-assurance-and-security" },
]

function Modal() {
    return (
        <div className='
            bg-white
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
            max-md:w-11/12 w-auto h-auto max-md:p-4 p-8 border-2 border-slate-700 rounded-3xl'
        >
            <ul className='text-center [&>*]:py-4 [&>*]:border-slate-400 [&>*]:cursor-pointer'>
                {subjects.map((subject, index) => (
                    <SubjectList 
                        key={index}  
                        subject={subject.subj}
                        linkTo={subject.linkTo}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    )
}

function SubjectList({ subject, linkTo, index }) {
    if (index === 0) {
        return (
            <li className='border-b-1'>
                <Link href={linkTo}>
                    <div>
                        {subject}
                    </div>
                </Link>
            </li>
        )
    }  else if (index !== subjects.length-1 && index !== 0) {
        return (
            <li className='border-y-1'>
                <Link href={linkTo}>
                    <div>
                        {subject}
                    </div>
                </Link>
            </li>
        )
    } else if (index === subjects.length-1) {
        return (
            <li className='border-t-1'>
                <Link href={linkTo}>
                    <div>
                        {subject}
                    </div>
                </Link>
            </li>
        )
    }
    
}


// &#9776; hamburger 
// &times; close