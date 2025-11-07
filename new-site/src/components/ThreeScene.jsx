/**
 * Example Three.js component
 * This demonstrates how to integrate interactive 3D graphics
 *
 * To use this component:
 * 1. Install three.js: npm install three
 * 2. Import in your MDX: import ThreeScene from '../../components/ThreeScene.jsx'
 * 3. Use with client directive: <ThreeScene client:visible />
 */

import { useEffect, useRef } from 'react';

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Placeholder for Three.js scene
    // Uncomment and install three.js to use:

    /*
    import * as THREE from 'three';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
    */

    // Placeholder message
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;background:#1a1a1a;color:#fff;border-radius:8px;';
    div.textContent = 'Three.js Scene Placeholder - Install three.js to activate';
    containerRef.current.appendChild(div);

    return () => {
      containerRef.current?.removeChild(div);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '500px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
}
