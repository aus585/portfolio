import * as THREE from "three";

export function initPortrait() {
    const container = document.querySelector(".portrait-container");
    if (!container) return;

    const canvas = document.getElementById("mosaicCanvas");
    if (!canvas) return;

    const imagePath = "/photo/art.png";

    // 1. Tighter tile arrangement configurations (Reduced gaps)
    const tileSize = 0.72;             
    const tileGap = 0.02; // Reduced gap from 0.04 so tiles blend closer together

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    
    // 2. ZOOM IN CLOSER: Brought camera from 300 down to 215 to scale up the portrait size
    camera.position.z = 275;          

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    const mouse = new THREE.Vector2(-9999, -9999);
    const targetMouse = new THREE.Vector2(-9999, -9999);
    const raycaster = new THREE.Raycaster();
    
    let instancedMesh;
    let tilesData = [];
    const dummy = new THREE.Object3D();
    
    const colorParsers = new THREE.Color();

    const loader = new THREE.TextureLoader();
    loader.load(imagePath, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        
        const img = texture.image;
        const maxDimension = 400; 
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
            if (width > maxDimension) {
                height = Math.round((height * maxDimension) / width);
                width = maxDimension;
            }
        } else {
            if (height > maxDimension) {
                width = Math.round((width * maxDimension) / height);
                height = maxDimension;
            }
        }

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(img, 0, 0, width, height);
        const imgData = tempCtx.getImageData(0, 0, width, height).data;

        let validTiles = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;
                const r = imgData[idx];
                const g = imgData[idx + 1];
                const b = imgData[idx + 2];
                const a = imgData[idx + 3];

                if (a < 15) continue; 

                validTiles.push({ x, y, r, g, b });
            }
        }

        const totalWidth = width * (tileSize + tileGap);
        const totalHeight = height * (tileSize + tileGap);
        const offsetX = -totalWidth / 2 + tileSize / 2;
        const offsetY = (totalHeight / 2 - tileSize / 2); 

        const geometry = new THREE.PlaneGeometry(tileSize, tileSize); 
        
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 1.0, 
            side: THREE.DoubleSide
        });

        instancedMesh = new THREE.InstancedMesh(geometry, material, validTiles.length);
        
        validTiles.forEach((tile, index) => {
            const posX = offsetX + tile.x * (tileSize + tileGap);
            const posY = offsetY - tile.y * (tileSize + tileGap);
            
            const spawnAngle = Math.random() * Math.PI * 2;
            const spawnDistance = 160 + Math.random() * 80; 
            
            const spawnX = posX + Math.cos(spawnAngle) * spawnDistance;
            const spawnY = posY + Math.sin(spawnAngle) * spawnDistance;
            const spawnZ = (Math.random() - 0.5) * 60; 

            tilesData.push({
                baseX: posX,
                baseY: posY,
                baseZ: 0,
                currentX: spawnX,
                currentY: spawnY,
                currentZ: spawnZ,
                scale: 0.0, 
                delay: Math.sqrt(tile.x * tile.x + tile.y * tile.y) * 0.25 + (Math.random() * 15), 
                isAssembled: false
            });

            dummy.position.set(spawnX, spawnY, spawnZ);
            dummy.scale.set(0, 0, 1);
            dummy.updateMatrix();
            instancedMesh.setMatrixAt(index, dummy.matrix);

            colorParsers.setRGB(tile.r / 255, tile.g / 255, tile.b / 255, THREE.SRGBColorSpace);
            instancedMesh.setColorAt(index, colorParsers);
        });

        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
        
        scene.add(instancedMesh);
        resize();
    });

    let frameCount = 0;

    function animate() {
        requestAnimationFrame(animate);
        frameCount++;

        if (!instancedMesh) return;

        mouse.x += (targetMouse.x - mouse.x) * 0.15;
        mouse.y += (targetMouse.y - mouse.y) * 0.15;

        raycaster.setFromCamera(mouse, camera);
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeZ, intersectPoint);

        for (let i = 0; i < tilesData.length; i++) {
            const data = tilesData[i];

            if (!data.isAssembled) {
                if (frameCount > data.delay) {
                    data.currentX += (data.baseX - data.currentX) * 0.04;
                    data.currentY += (data.baseY - data.currentY) * 0.04;
                    data.currentZ += (data.baseZ - data.currentZ) * 0.04;
                    
                    if (data.scale < 1.0) data.scale += 0.04;

                    dummy.position.set(data.currentX, data.currentY, data.currentZ);
                    dummy.scale.set(data.scale, data.scale, 1);

                    if (Math.abs(data.currentX - data.baseX) < 0.08 && 
                        Math.abs(data.currentY - data.baseY) < 0.08) {
                        data.currentX = data.baseX;
                        data.currentY = data.baseY;
                        data.currentZ = data.baseZ;
                        data.scale = 1.0;
                        data.isAssembled = true;
                    }
                } else {
                    dummy.position.set(data.currentX, data.currentY, data.currentZ);
                    dummy.scale.set(0, 0, 1);
                }
            } 
            else {
                let targetZ = data.baseZ;
                let currentScale = 1.0;

                if (targetMouse.x !== -9999) {
                    const dx = data.baseX - intersectPoint.x;
                    const dy = data.baseY - intersectPoint.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const activeRadius = 45; 

                    if (distance < activeRadius) {
                        let force = (1.0 - (distance / activeRadius));
                        force = Math.pow(force, 1.8); 

                        targetZ += force * 15; 
                        currentScale += force * 0.45;
                    }
                }

                data.currentZ += (targetZ - data.currentZ) * 0.15;
                dummy.position.set(data.baseX, data.baseY, data.currentZ);
                dummy.scale.set(currentScale, currentScale, 1);
            }

            dummy.updateMatrix();
            instancedMesh.setMatrixAt(i, dummy.matrix);
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
        renderer.render(scene, camera);
    }

    window.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        targetMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    window.addEventListener('pointerleave', () => {
        targetMouse.set(-9999, -9999); 
    });

    function resize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}