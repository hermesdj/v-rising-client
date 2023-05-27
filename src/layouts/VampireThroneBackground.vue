<template>
	<div
			class="bg-vampire-throne"
	>
		<video class="main-bg-video z-10" src="../assets/empty-throne.webm" autoplay="true" loop muted/>
		<img src="../assets/female-vampire.png" id="vampire" width="2560" height="1440"/>
		<img src="../assets/throne.png" id="throne" width="2560" height="1440">
		<video class="fog-video" src="../assets/fog.webm" autoplay="true" loop muted/>
	</div>
</template>

<script>
export default {
	name: "VampireThroneBackground"
}
</script>

<style scoped>
.bg-vampire-throne {
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 50;
}

#vampire {
	position: fixed;
	right: -300px;
	top: 0;
	width: auto;
	height: 120%;
	z-index: 52;
}

#throne {
	position: fixed;
	right: -300px;
	top: 0;
	width: auto;
	height: 120%;
	z-index: 51;
}

.z-10 {
	z-index: 10;
}

.main-bg-video {
	-o-object-position: center;
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
}

.fog-video {
	height: 100%;
	width: 100%;
	z-index: 53;
	left: 0;
	top: 0;
	position: fixed;
	mix-blend-mode: screen;
	object-fit: cover;
	object-position: bottom;
	opacity: 1;
}
</style>
