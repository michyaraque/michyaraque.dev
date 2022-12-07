import React from 'react'
import { FiBriefcase } from 'react-icons/fi'
import { GiPlantRoots } from 'react-icons/gi'
import { MdOutlineMail, MdOutlineGpsFixed } from 'react-icons/md'

const MeCard = () => {
  return (
    <>
      <div className="flex flex-col min-w-[325px] h-full bg-white dark:bg-zinc-800 rounded-md shadow-lg relative">
        <span className="absolute -left-28 top-40 font-thin w-full h-full text-[400px] dark:text-zinc-800 text-zinc-700">
          {'{'}
        </span>

        <div className="border-b-4 mb-1 w-full">
          <img src="me.jpg" alt="Michael Araque's face" className="grayscale-50 object-cover w-full h-[240px] rounded-t-md" />
        </div>

        <div className="mx-4 flex flex-col h-full mb-6">


          <h1 className="mt-1 text-xl text-zinc-800 dark:text-zinc-300 font-regular font-semibold">
            Michael Araque <span className="text-base mt-2 opacity-30">aka michyaraque</span>
          </h1>

          <p className="text-[17px] font-regular">
            Arquitecto de ideas 🚀
          </p>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex">
              <FiBriefcase className="mr-2 text-2xl text-gray-500" />
              <span className="text-base">Blockend dev en <span className="text-zinc-800 font-semibold dark:text-zinc-300">FoxtrotComamnd</span></span>
            </div>
            <div className="flex">
              <MdOutlineGpsFixed className="mr-2 text-[24px] text-gray-500" />
              <span className="text-base">España</span>
              <GiPlantRoots className="ml-4 mr-1 text-xl text-gray-500" />
              <span className="text-base">Venezuela</span>
            </div>
            <div className="flex">
              <MdOutlineMail className="mr-2 text-2xl text-gray-500" />
              <span className="text-base">hello@michyaraque.dev</span>
            </div>
          </div>
        </div>


        <span className="rounded-b-md h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-text transition-all duration-200 ease-in-out"></span>
      </div>
    </>
  )
}

export default MeCard
