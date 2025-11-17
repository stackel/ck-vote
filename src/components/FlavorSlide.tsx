import { motion } from 'motion/react';

interface Flavor {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  image: string | null;
  imageRotation: number;
  buttonText: string;
  buttonBg: string;
  isInput?: boolean;
  showButton?: boolean;
  showSwipeIcon?: boolean;
}

interface FlavorSlideProps {
  flavor: Flavor;
  svgPaths: any;
}

export default function FlavorSlide({ flavor, svgPaths }: FlavorSlideProps) {
  return (
    <div className="relative w-full h-full">
      {/* Top Text */}
      <motion.div
        className="text-center pt-12 px-3 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-[420px]">
          <p 
            className="font-['Amsi_Pro_Condensed:Black',sans-serif] mb-2.5"
            style={{ color: flavor.textColor }}
          >
            {flavor.subtitle}
          </p>
          <h1 
            className="font-['Amsi_Pro_Condensed:Black',sans-serif] text-5xl leading-[0.9] mb-2.5"
            style={{ color: flavor.textColor === '#ffffff' ? '#ffffff' : flavor.textColor }}
          >
            {flavor.name}
          </h1>
          <p 
            className="font-['DM_Sans:Medium',sans-serif] px-6 text-sm"
            style={{ 
              color: flavor.textColor,
              fontVariationSettings: "'opsz' 14" 
            }}
          >
            {flavor.description}
          </p>
        </div>
      </motion.div>

      {/* Flavor Graphic - centered */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {flavor.image && (
          <motion.div
            className="relative"
            style={{
              width: 233,
              height: 233,
              rotate: flavor.imageRotation,
            }}
            animate={{
              rotate: [flavor.imageRotation, flavor.imageRotation + 5, flavor.imageRotation],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img 
              alt={flavor.name}
              className="w-full h-full object-cover pointer-events-none" 
              src={flavor.image} 
            />
          </motion.div>
        )}
      </motion.div>

      {/* Swipe Indicator / Input - positioned from bottom */}
      <motion.div
        className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-full px-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {!flavor.isInput ? (
          <div className="flex flex-col items-center gap-4">
            {flavor.showSwipeIcon && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-14">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 56">
                    <g id="Vector">
                      <path d={svgPaths.p27033100} fill="white" />
                      <path d={svgPaths.p373a700} fill="white" />
                      <path d={svgPaths.p23190f00} fill="white" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] text-white">
                  SWIPE FOR OPTIONS
                </p>
              </div>
            )}
            {/* Vote Button */}
            {flavor.showButton && (
              <motion.button
                className="flex gap-2.5 h-12 items-center justify-center px-8 py-2 rounded-full border-2 border-white"
                style={{ backgroundColor: flavor.buttonBg }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] text-white">
                  {flavor.buttonText}
                </p>
              </motion.button>
            )}
          </div>
        ) : (
          <div className="flex gap-4 items-start w-full px-6">
            <div 
              className="flex gap-2.5 h-12 items-center px-3 py-2 rounded-lg flex-1"
              style={{ backgroundColor: flavor.accentColor }}
            >
              <input
                type="text"
                placeholder="YOUR FLAVOUR..."
                className="font-['Amsi_Pro_Condensed:Black',sans-serif] bg-transparent border-none outline-none text-white/75 placeholder:text-white/75 w-full"
              />
            </div>
            <button
              className="flex gap-2.5 h-12 items-center justify-center px-8 py-2 rounded-full"
              style={{ backgroundColor: flavor.buttonBg }}
            >
              <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] text-white">
                {flavor.buttonText}
              </p>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
