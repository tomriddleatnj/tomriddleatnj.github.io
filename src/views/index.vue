<template>
<div>
	<div class="container">
		<ul class="list-group">
			<li class="list-group-item d-flex justify-content-between align-items-center">我跟你说，你这个样子是有问题的！</li>
			<li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
				我没有搞完！
				<span class="badge badge-primary badge-pill">?!</span>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">ABCDEFG, G！不是丁勾！</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">么得几天，我就比你受了！</li>
		</ul>
		<div class="card" style="width: 14rem; margin-top: 1em;">
			<picture>
				<source srcset="/assets/images/home/wzlgreen.webp" type="image/webp">
				<source srcset="/assets/images/home/wzlgreen.jpg" type="image/jpeg">
				<img class="card-img-top" src="/assets/images/home/wzlgreen.jpg" alt="wzl green">
			</picture>
			<div class="card-body">
				<h4 class="card-title">中午吃什么</h4>
				<p class="card-text">中午吃啥？咖喱给谁？</p>
				<router-link :to="{name: 'lunch'}" class="btn btn-primary">Random!</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {

}
</script>

<style scoped>

</style>