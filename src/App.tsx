import React from 'react';
import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function App() {
    function Scene() {
        const gltf = useLoader(GLTFLoader, '/original_backrooms/scene.gltf')
        return <primitive object={gltf.scene} />
                         }
  return (
    <Canvas>
        <Scene />
        <OrbitControls />
    </Canvas>
      // <Canvas>
      //     <ambientLight intensity={0.5} />
      //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      //     <pointLight position={[-10, -10, -10]} />
      //     <Box position={[-1.2, 0, 0]} />
      //     <Box position={[1.2, 0, 0]} />
      //     <OrbitControls />
      // </Canvas>
  );
}

export default App;
