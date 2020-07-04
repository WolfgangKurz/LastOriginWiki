<template>
	<div class="animation-canvas" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { AssetsRoot } from "@/libs/Const";

@Component({})
export default class AnimViewer extends Vue {
	private scene: THREE.Scene = new THREE.Scene();
	// private camera = new THREE.OrthographicCamera(-30, 30, -40, 40, -3000, 3000);
	private camera = new THREE.PerspectiveCamera(45, 3 / 4, 0.01, 1000);
	private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true,
		precision: "lowp",
		powerPreference: "low-power",
	});

	private mixer: THREE.AnimationMixer | null = null;

	private clock = new THREE.Clock();

	private created () {
		// this.scene.background = new THREE.Color(0x00ffffff);

		this.scene.add(new THREE.AmbientLightProbe(0xffffff, 1.75));

		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(600, 800);

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(AssetsRoot + "/anim/draco/");

		const loader = new GLTFLoader().setPath(AssetsRoot + "/anim/");
		loader.setDRACOLoader(dracoLoader);
		loader.load("DS_Faucre_NS1.glb", (gltf) => {
			const object = gltf.scene;

			const box = new THREE.Box3().setFromObject(object);
			const size = box.getSize(new THREE.Vector3()).length();
			// const center = box.getCenter(new THREE.Vector3());
			const center = new THREE.Vector3(-0.003, -0.0024, 0);

			object.position.x += (object.position.x - center.x);
			object.position.y += (object.position.y - center.y);
			object.position.z += (object.position.z - center.z);

			this.camera.near = size / 100;
			this.camera.far = size * 100;
			this.camera.updateProjectionMatrix();

			this.camera.position.copy(center);
			this.camera.position.z -= 0.04;
			this.camera.lookAt(center);

			this.mixer = new THREE.AnimationMixer(object);

			const action = this.mixer.clipAction(gltf.animations[0]);
			action.play();

			// eslint-disable-next-line
			// let z = 0;
			object.traverse((node_) => {
				const node = node_ as any;
				if (node.isMesh) {
					// node.material.depthWrite = !node.material.transparent;
					// node_.translateY(z);
					// z += 0.02;
				}
			});
			this.scene.add(object);
		});

		this.animate();
	}

	private animate () {
		requestAnimationFrame(this.animate);

		const delta = this.clock.getDelta();
		if (this.mixer) this.mixer.update(delta);

		this.renderer.render(this.scene, this.camera);
	}

	private mounted () {
		this.$el.appendChild(this.renderer.domElement);
	}

	private beforeDestroy () {
		this.renderer.dispose();
		this.scene.dispose();
	}
}
</script>

<style lang="scss">
.animation-canvas {
	height: 100%;

	> canvas {
		width: auto !important;
		height: auto !important;
		max-height: 100%;
	}
}
</style>
