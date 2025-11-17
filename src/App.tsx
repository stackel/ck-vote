import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import MenuBar from './components/MenuBar';
import FlavorSlide from './components/FlavorSlide';
import Editorial from './components/Editorial';
import svgPaths from './imports/svg-ea6n159oix';
import candyImage1 from '../src/assets/Candy1.png';
import candyImage2 from './assets/Candy 2.png';
import sphereTexture from './assets/Sphere texture.png';
import bottomOverlay from './assets/bottom overlay.png';

const flavors = [
  {
    id: 0,
    name: 'YUMMY GUMMY',
    subtitle: 'WHAT FLAVOUR DO YOU WANT?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.',
    backgroundColor: 'radial-gradient(circle at 50% 39%, rgba(113,70,156,1) 0%, rgba(91,55,131,1) 50%, rgba(68,39,105,1) 100%)',
    textColor: '#ffffff',
    accentColor: '#8231a7',
    image: candyImage1,
    imageRotation: 13.657,
    buttonText: 'PLACE VOTE',
    buttonBg: '#480e67',
    showButton: false,
    showSwipeIcon: true,
  },
  {
    id: 1,
    name: 'FOAMY PONY',
    subtitle: 'WHAT FLAVOUR DO YOU WANT?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.',
    backgroundColor: 'radial-gradient(circle at 50% 39%, rgba(248,229,154,1) 0%, rgba(249,223,116,1) 25%, rgba(249,217,78,1) 50%, rgba(250,211,39,1) 75%, rgba(250,208,20,1) 87.5%, rgba(250,205,1,1) 100%)',
    textColor: '#d7006e',
    accentColor: '#ab004f',
    image: candyImage2,
    imageRotation: 352.212,
    buttonText: 'PLACE VOTE',
    buttonBg: '#480e67',
    showButton: true,
    showSwipeIcon: false,
  },
  {
    id: 2,
    name: 'SUMMER SALT',
    subtitle: 'CHOSE THE FUTURE FLAVOURS!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.',
    backgroundColor: 'radial-gradient(circle at 50% 39%, rgba(242,128,179,1) 0%, rgba(234,100,165,1) 25%, rgba(227,72,152,1) 50%, rgba(219,43,138,1) 75%, rgba(211,15,124,1) 100%)',
    textColor: '#f8e59a',
    accentColor: '#d3006e',
    image: candyImage2,
    imageRotation: 352.212,
    buttonText: 'PLACE VOTE',
    buttonBg: '#480e67',
    showButton: true,
    showSwipeIcon: false,
  },
  {
    id: 3,
    name: 'WHAYS YOUR FLAVOUR IDEA?',
    subtitle: 'WHAT FLAVOUR DO YOU WANT?',
    description: 'Submit your own creative candy flavor idea!',
    backgroundColor: 'radial-gradient(circle at 50% 39%, rgba(255,110,104,1) 0%, rgba(240,69,84,1) 50%, rgba(232,49,74,1) 75%, rgba(224,28,64,1) 100%)',
    textColor: '#f8e59a',
    accentColor: '#ff6e68',
    image: null,
    imageRotation: 0,
    buttonText: 'SUBMIT',
    buttonBg: '#76232f',
    isInput: true,
    showButton: true,
    showSwipeIcon: false,
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < flavors.length) {
      setCurrentIndex(newIndex);
      setPage([newIndex, newDirection]);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset > threshold || velocity > 500) {
      // Swipe right - go to previous
      paginate(-1);
    } else if (offset < -threshold || velocity < -500) {
      // Swipe left - go to next
      paginate(1);
    }
  };

  const currentFlavor = flavors[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden">
      {/* Fixed Menu Bar */}
      <div className="sticky top-0 z-50">
        <MenuBar />
      </div>
      
      {/* Fixed colored background */}
      <motion.div
        className="fixed inset-0 top-[70px] bottom-0 w-full -z-10"
        style={{
          background: currentFlavor.backgroundColor,
        }}
        animate={{
          background: currentFlavor.backgroundColor,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Animated spheres background - one set per flavor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {flavors.map((flavor, index) => {
            // Only render current, previous, and next spheres for performance
            if (Math.abs(index - currentIndex) > 1) return null;
            
            return (
              <FloatingSpheres 
                key={flavor.id}
                flavorIndex={index}
                currentIndex={currentIndex}
                sphereTexture={sphereTexture} 
              />
            );
          })}
        </div>

        {/* Bottom decorative overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[187px] pointer-events-none">
          <div className="relative w-full h-full overflow-hidden">
            <img 
              alt="" 
              className="absolute w-full max-w-none" 
              src={bottomOverlay}
              style={{
                height: '373.2%',
                left: 0,
                top: '-27.26%',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(248,229,154,0.47)]" />
          </div>
        </div>
      </motion.div>
      
      {/* Main scrollable content */}
      <div className="relative w-full">
        {/* Swipeable content */}
        <div 
          ref={containerRef}
          className="relative h-[calc(100vh-70px)] w-full overflow-hidden z-10"
        >
          {flavors.map((flavor, index) => {
            // Only render current, previous, and next slides for performance
            if (Math.abs(index - currentIndex) > 1) return null;
            
            const isActive = index === currentIndex;
            
            return (
              <motion.div
                key={flavor.id}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={isActive ? handleDragEnd : undefined}
                className={`absolute inset-0 w-full h-full ${isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                initial={{
                  x: index === currentIndex ? 0 : index > currentIndex ? '100%' : '-100%',
                  opacity: index === currentIndex ? 1 : 0,
                }}
                animate={{
                  x: index === currentIndex ? 0 : index > currentIndex ? '100%' : '-100%',
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <FlavorSlide flavor={flavor} svgPaths={svgPaths} />
              </motion.div>
            );
          })}
        </div>

        {/* Carousel indicators - only show if not first page */}
        {currentIndex !== 0 && (
          <div className="absolute left-1/2 bottom-[150px] -translate-x-1/2 flex gap-1 pointer-events-none z-20">
            {flavors.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${
                  index === currentIndex 
                    ? 'w-6 bg-white/50' 
                    : 'w-2 border border-white/50'
                }`}
                animate={{
                  width: index === currentIndex ? 24 : 8,
                  backgroundColor: index === currentIndex ? 'rgba(255,255,255,0.5)' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        )}

        {/* Bottom Editorial Section - negative margin to overlay */}
        <div className="-mt-[120px] relative z-30">
          <Editorial />
        </div>
      </div>
    </div>
  );
}

function FloatingSpheres({ flavorIndex, currentIndex, sphereTexture }: { flavorIndex: number, currentIndex: number, sphereTexture: string }) {
  // Different sphere configurations for each flavor for variety
  const sphereConfigs = [
    // Flavor 0 - Purple
    [
      { size: 67, left: 5, top: 250, rotation: 180, blur: 0 },
      { size: 41, left: 311, top: 280, rotation: 180, blur: 0 },
      { size: 40, left: 0, top: 360, rotation: 180, blur: 0 },
      { size: 40, left: 237, top: 450, rotation: 180, blur: 0 },
      { size: 19, left: 351, top: 380, rotation: 140, blur: 0 },
      { size: 19, left: 205, top: 450, rotation: 101, blur: 0 },
      { size: 13, left: 48, top: 360, rotation: 101, blur: 0 },
      { size: 13, left: 22, top: 410, rotation: 101, blur: 0 },
    ],
    // Flavor 1 - Yellow
    [
      { size: 67, left: 15, top: 270, rotation: 200, blur: 0 },
      { size: 41, left: 320, top: 260, rotation: 160, blur: 0 },
      { size: 40, left: 10, top: 380, rotation: 190, blur: 0 },
      { size: 40, left: 250, top: 430, rotation: 170, blur: 0 },
      { size: 19, left: 340, top: 400, rotation: 150, blur: 0 },
      { size: 19, left: 220, top: 470, rotation: 110, blur: 0 },
      { size: 13, left: 60, top: 340, rotation: 95, blur: 0 },
      { size: 13, left: 35, top: 390, rotation: 115, blur: 0 },
    ],
    // Flavor 2 - Pink
    [
      { size: 67, left: 25, top: 240, rotation: 220, blur: 0 },
      { size: 41, left: 300, top: 290, rotation: 140, blur: 0 },
      { size: 40, left: 20, top: 340, rotation: 200, blur: 0 },
      { size: 40, left: 225, top: 460, rotation: 160, blur: 0 },
      { size: 19, left: 330, top: 360, rotation: 130, blur: 0 },
      { size: 19, left: 190, top: 440, rotation: 120, blur: 0 },
      { size: 13, left: 70, top: 380, rotation: 90, blur: 0 },
      { size: 13, left: 40, top: 430, rotation: 105, blur: 0 },
    ],
    // Flavor 3 - Red
    [
      { size: 67, left: 10, top: 260, rotation: 190, blur: 0 },
      { size: 41, left: 315, top: 270, rotation: 170, blur: 0 },
      { size: 40, left: 5, top: 370, rotation: 185, blur: 0 },
      { size: 40, left: 240, top: 440, rotation: 175, blur: 0 },
      { size: 19, left: 345, top: 390, rotation: 145, blur: 0 },
      { size: 19, left: 210, top: 460, rotation: 105, blur: 0 },
      { size: 13, left: 55, top: 350, rotation: 100, blur: 0 },
      { size: 13, left: 30, top: 400, rotation: 110, blur: 0 },
    ],
  ];

  const spheres = sphereConfigs[flavorIndex] || sphereConfigs[0];
  const isActive = flavorIndex === currentIndex;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{
        x: flavorIndex === currentIndex ? '0%' : flavorIndex > currentIndex ? '100%' : '-100%',
        opacity: flavorIndex === currentIndex ? 1 : 0,
      }}
      animate={{
        x: flavorIndex === currentIndex ? '0%' : flavorIndex > currentIndex ? '100%' : '-100%',
        opacity: flavorIndex === currentIndex ? 1 : 0,
      }}
      transition={{
        x: { type: 'spring', stiffness: 200, damping: 25 },
        opacity: { duration: 0.3 },
      }}
    >
      {spheres.map((sphere, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: sphere.size,
            height: sphere.size,
            left: sphere.left,
            top: sphere.top,
            opacity: 0.67,
            filter: sphere.blur > 0 ? `blur(${sphere.blur}px)` : 'none',
          }}
          animate={{
            x: [0, Math.sin(i + flavorIndex) * 20, 0],
            y: [0, Math.cos(i + flavorIndex) * 15, 0],
            rotate: [sphere.rotation, sphere.rotation + 360, sphere.rotation],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        >
          <div className="w-full h-full overflow-hidden rounded-full">
            <img 
              alt="" 
              className="w-full h-full object-cover" 
              src={sphereTexture}
              style={{
                objectPosition: '50% 50%',
                transform: `scale(${4.17})`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
