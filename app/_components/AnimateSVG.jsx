"use client"

import { motion, AnimatePresence } from "framer-motion"

const AnimateSVG = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
        <motion.path
          initial={{ pathLength: 0 }}
          // animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
          whileInView={{
            pathLength: 1
          }}
          // viewport={{
          //     amount: "all"
          // }}
          d="M95.96412658691406,100.44843292236328C101.61733993530274,117.95515958150227,107.35426020304362,154.6337845102946,123.76681518554688,186.54708862304688C140.17937016805013,218.46039273579916,144.76830444335937,237.15695536295573,176.68161010742188,257.39910888671875C208.59491577148438,277.6412624104818,239.68610666910809,287.3751961771647,280.7174987792969,286.0986633300781C321.74889088948566,284.82213048299155,353.30942270914716,267.89835891723635,378.475341796875,251.12107849121094C403.64126088460284,234.34379806518555,390.4424619547526,221.27653594970704,404.48431396484375,203.5874481201172C418.5261659749349,185.89836029052734,425.83258748372396,175.61435399373372,447.53363037109375,164.1255645751953C469.23467325846354,152.6367751566569,486.59192036946615,146.7204827372233,511.21075439453125,147.085205078125C535.8295884195963,147.4499274190267,550.5560500081381,155.1599393717448,568.60986328125,165.91928100585938C586.6636765543619,176.67862263997395,593.6173388671875,193.07025380452475,600,200" fill="none" strokeWidth="6" stroke="hsl(105, 69%, 30%)" strokeLinecap="round" strokeDasharray="18 9" strokeOpacity="1">
        </motion.path>
        <defs>
          <linearGradient id="SvgjsLinearGradient1001">
            <stop stopColor="hsl(105, 69%, 40%)" offset="0"></stop>
            <stop stopColor="hsl(105, 69%, 60%)" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="w-screen flex justify-around items-center mb-10">
        {/* Black */}
        <div className="max-w-xl rounded-3xl p-1 bg-gradient-to-r from-pink-500 to-orange-500">
          <div className="bg-black p-10 rounded-[calc(1.5rem-1px)]">
            <p className="text-gray-700 dark:text-gray-300">
              I absolutely love Tailus! The component blocks are beautifully dfesigned and easy to use, which makes creating a great-looking website a breeze.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <img className="h-12 w-12 rounded-full" src="/image-1.jpg" alt="" />
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
                <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
              </div>
            </div>
          </div>
        </div>
        {/* White */}
        <div className="max-w-xl rounded-3xl p-1 bg-gradient-to-r from-pink-500 to-orange-500">
          <div className="bg-white p-10 rounded-[calc(1.5rem-1px)]">
            <p className="text-black dark:text-black">
              I absolutely love Tailus! The component blocks are beautifully dfesigned and easy to use, which makes creating a great-looking website a breeze.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <img className="h-12 w-12 rounded-full" src="/image-1.jpg" alt="" />
              <div>
                <h3 className="text-lg font-medium text-black dark:text-black">Oketa Fred</h3>
                <span className="text-sm tracking-wide text-black dark:black">Fullstack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimateSVG
