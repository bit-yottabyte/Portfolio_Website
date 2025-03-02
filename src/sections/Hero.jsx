// Required libraries
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

// Scaling & properties 
import { calculateSizes } from "../constants/index.js";

// Components
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {

  const isSmall = useMediaQuery({maxWidth: 480});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">

        <div className="w-full mx-auto flex flex-col sm:mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Athavan <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0,0,20]} />

              <HackerRoom 
              scale={sizes.deskScale} 
              position={sizes.deskPosition} 
              rotation={[0.0, -Math.PI, 0]}
              />

              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
              </group>

              <ambientLight intensity={1}/>
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
        </div>    
    </section>
  );
};

export default Hero;