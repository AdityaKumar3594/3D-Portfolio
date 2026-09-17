import { useThree } from '@react-three/fiber';
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Dog = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useThree(({ camera, gl }) => {
        camera.position.z = 0.7;
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.outputColorSpace = THREE.SRGBColorSpace;
    })

    const model = useGLTF('/models/dog.drc.glb');
    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
        actions["Take 001"].play();
    }, [actions])

    const [normalMap] = useTexture(['/dog_normals.jpg']).map((t) => {
        t.flipY = false;
        t.colorSpace = THREE.SRGBColorSpace;
        return t;
    })

    const [branchNormalMap] = useTexture(['/branches_normals.jpeg']).map((t) => {
        t.colorSpace = THREE.SRGBColorSpace;
        return t;
    })

    const [
        mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8, mat9, mat10,
        mat11, mat12, mat13, mat14, mat15, mat16, mat17, mat18, mat19, mat20
    ] = useTexture([
        '/matcap/mat-1.png', '/matcap/mat-2.png', '/matcap/mat-3.png', '/matcap/mat-4.png',
        '/matcap/mat-5.png', '/matcap/mat-6.png', '/matcap/mat-7.png', '/matcap/mat-8.png',
        '/matcap/mat-9.png', '/matcap/mat-10.png', '/matcap/mat-11.png', '/matcap/mat-12.png',
        '/matcap/mat-13.png', '/matcap/mat-14.png', '/matcap/mat-15.png', '/matcap/mat-16.png',
        '/matcap/mat-17.png', '/matcap/mat-18.png', '/matcap/mat-19.png', '/matcap/mat-20.png'
    ]).map((t) => {
        t.colorSpace = THREE.SRGBColorSpace;
        return t;
    })

    // Each material gets its own ref to store the compiled shader uniforms
    const dogUniforms = useRef(null);
    const branchUniforms = useRef(null);

    function makeOnBeforeCompile(uniformsRef) {
        return function (shader) {
            // Inject our custom uniforms into this material's compiled shader
            shader.uniforms.uMatcapTexture1 = { value: mat2 };
            shader.uniforms.uMatcapTexture2 = { value: mat2 };
            shader.uniforms.uProgress = { value: 1.0 };

            // Save a reference so we can drive them from GSAP later
            uniformsRef.current = shader.uniforms;

            shader.fragmentShader = shader.fragmentShader.replace(
                "void main() {",
                `
                uniform sampler2D uMatcapTexture1;
                uniform sampler2D uMatcapTexture2;
                uniform float uProgress;

                void main() {
                `
            );

            shader.fragmentShader = shader.fragmentShader.replace(
                "vec4 matcapColor = texture2D( matcap, uv );",
                `
                vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
                vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
                float transitionFactor = 0.2;
                float progress = smoothstep(
                    uProgress - transitionFactor,
                    uProgress,
                    (vViewPosition.x + vViewPosition.y) * 0.5 + 0.5
                );
                vec4 matcapColor = mix(matcapColor2, matcapColor1, progress);
                `
            );
        }
    }

    const dogMaterial = new THREE.MeshMatcapMaterial({ normalMap, matcap: mat2 });
    const branchMaterial = new THREE.MeshMatcapMaterial({ normalMap: branchNormalMap, matcap: mat2 });

    dogMaterial.onBeforeCompile = makeOnBeforeCompile(dogUniforms);
    branchMaterial.onBeforeCompile = makeOnBeforeCompile(branchUniforms);

    model.scene.traverse((child) => {
        if (child.name.includes("DOG")) {
            child.material = dogMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
        }
        if (child.name.includes("BRANCH")) {
            child.material = branchMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
        }
    })

    // Drives both dog and branch uniforms together
    function transitionTo(newMatcap) {
        const refs = [dogUniforms, branchUniforms];

        refs.forEach(ref => {
            if (ref.current) ref.current.uMatcapTexture1.value = newMatcap;
        });

        const proxy = { progress: 1.0 };
        gsap.to(proxy, {
            progress: 0.0,
            duration: 0.3,
            onUpdate: () => {
                refs.forEach(ref => {
                    if (ref.current) ref.current.uProgress.value = proxy.progress;
                });
            },
            onComplete: () => {
                refs.forEach(ref => {
                    if (ref.current) {
                        ref.current.uMatcapTexture2.value = newMatcap;
                        ref.current.uProgress.value = 1.0;
                    }
                });
            }
        });
    }

    const dogModel = useRef(model);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-1",
                endTrigger: "#section-3",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.to(dogModel.current.scene.position, {
            z: "-=0.75",
            y: "+=0.1"
        }).to(dogModel.current.scene.rotation, {
            x: `+=${Math.PI / 12}`,
        }).to(dogModel.current.scene.rotation, {
            y: `-=${Math.PI}`
        }, "third").to(dogModel.current.scene.position, {
            x: "-=0.42",
            z: "+=0.6",
            y: "-=0.05"
        }, "third")
    }, [dogModel])

    useEffect(() => {
        const hoverMap = {
            "tomorrowland": mat19,
            "navy-pier":    mat8,
            "msi-chicago":  mat9,
            "phone":        mat12,
            "kikk":         mat10,
        };

        const listeners = [];

        Object.entries(hoverMap).forEach(([key, matcap]) => {
            const el = document.querySelector(`.title[img-title="${key}"]`);
            if (!el) return;
            const handler = () => transitionTo(matcap);
            el.addEventListener("mouseenter", handler);
            listeners.push({ el, type: "mouseenter", handler });
        });

        const titlesEl = document.querySelector(".titles");
        if (titlesEl) {
            const leaveHandler = () => transitionTo(mat2);
            titlesEl.addEventListener("mouseleave", leaveHandler);
            listeners.push({ el: titlesEl, type: "mouseleave", handler: leaveHandler });
        }

        // Cleanup on unmount
        return () => {
            listeners.forEach(({ el, type, handler }) => el.removeEventListener(type, handler));
        };
    }, [])

    return (
        <>
            <primitive object={model.scene} position={[0.2, -0.5, 0.085]} rotation={[0, Math.PI / 4, 0]} />
            <directionalLight position={[0, 0, 0]} color={"red"} intensity={5} />
            <ambientLight intensity={1} />
        </>
    )
}

export default Dog;
