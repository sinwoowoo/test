<template>
	<div id="popup_Layer" class="popup-layer" v-show="showPopup">
		<div v-if="!pop_list">
			<div id="popup_title" class="popup-title"></div>
			<div id="popup_content" class="popup-contents"></div>
		</div>
		<div v-else>
			<div v-for="list in pop_list" :key="list.pop_title">
				<div id="popup_title" class="popup-title">{{ list.pop_title }}</div>
				<div id="popup_content" class="popup-contents">{{ list.pop_cont }}</div>
			</div>
		</div>
		<div class="close-panel">
			<div>
				<input type="checkbox" name="close" id="close" /> <label for="close">하루동안 이 창을 열지 않음</label>
			</div>
			<div>
				<a href="javascript:" @click="closePop('egov')" class="btn">닫기</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPopup: false,
			pop_list: [] // Add any necessary data properties here
		};
	},
	methods: {
		closePop(param) {
			// Add your closePop method logic here
		}
	}
};
</script>

<style>
/* Add any necessary styles here */
</style>