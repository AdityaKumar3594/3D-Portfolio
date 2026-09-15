import { useThree } from '@react-three/fiber';
import { OrbitControls ,useGLTF,useTexture,useAnimations} from '@react-three/drei';
import * as THREE from 'three';
import { texture } from 'three/tsl';
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//model-normal map,matcap-material
const Dog = () => {

    gsap.registerPlugin(useGSAP,ScrollTrigger);

    useThree(({camera,scene,gl})=>{
        camera.position.z=0.7;

        //tone mapping and SRGB color
        gl.toneMapping=THREE.ReinhardToneMapping;
        gl.outputColorSpace=THREE.SRGBColorSpace;
    })


    const model = useGLTF('/models/dog.drc.glb');

    const {actions}=useAnimations(model.animations,model.scene);
    useEffect(()=>{
        actions["Take 001"].play();
    },[actions])

   

    const [normalMap,matcap]=useTexture(['/dog_normals.jpg','/matcap/mat-1.png']).map((texture)=>{
        texture.flipY=false;
        texture.colorSpace=THREE.SRGBColorSpace;
        return texture;

    })

    const [branchNormalMap,branchDiffuse]=useTexture(['/branches_normals.jpeg','/branches_diffuse.jpeg']).map((texture)=>{
        texture.colorSpace=THREE.SRGBColorSpace;
        return texture;
    })


    
    const dogMaterial=new THREE.MeshMatcapMaterial({
        normalMap:normalMap,
        matcap:matcap,
    })

    const branchMaterial=new THREE.MeshMatcapMaterial({
        normalMap:branchNormalMap,
        map:branchDiffuse,
    })

    model.scene.traverse((child)=>{
        if(child.name.includes("DOG")){
            child.material=dogMaterial;
            child.castShadow=true;
            child.receiveShadow=true;
        }

        if(child.name.includes("BRANCH")){
            child.material=branchMaterial;
            child.castShadow=true;
            child.receiveShadow=true;
        }
    })

    const dogModel=useRef(model);

    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#section-1",
                endTrigger:"#section-3",
                start:"top top",
                end:"bottom bottom",
                
                scrub:true
            }
        })

        tl.to(dogModel.current.scene.position,{
            z:"-=0.75",
            y:"+=0.1"
        }).to(dogModel.current.scene.rotation,{
            x:`+=${Math.PI/12}`,
         }).to(dogModel.current.scene.rotation,{
            y:`-=${Math.PI}`
        },"third").to(dogModel.current.scene.position,{
            x:"-=0.42",
            z:"+=0.6",
            y:"-=0.05"

           
        },"thord")


    },[dogModel])

    


    return (
        <>
        <primitive object={model.scene} position={[0.2,-0.5,0.085]} rotation={[0,Math.PI/4,0]}/>
        <directionalLight position={[0,0,0]} color={"red"} intensity={5}/>
        <ambientLight intensity={1}/>
        </>
    )
}

export default Dog;
