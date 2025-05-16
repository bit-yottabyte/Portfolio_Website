
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Developer = ({animationName = 'idle', ...props}) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/animations/developer.glb')

    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
    const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
    const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

    idleAnimation[0].name = 'idle';
    clappingAnimation[0].name = 'clapping';
    saluteAnimation[0].name = 'salute';
    victoryAnimation[0].name = 'victory';
    
    const { actions } = useAnimations([idleAnimation[0], clappingAnimation[0], saluteAnimation[0], victoryAnimation[0]], group);

    useEffect(() => {
        actions[animationName].reset().fadeIn(0.5).play();

        return () => actions[animationName].fadeOut(0.5)
    }, [animationName])


    return (
    <group {...props} dispose={null} >
        <primitive object={nodes.Hips} ref={group} />
        <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
        />
    </group>
    )
}

useGLTF.preload('/models/animations/developer.glb')

export default Developer;