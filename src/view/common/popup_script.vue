<template>
	<div>
		<div v-if="popupVo.pop_yn === 'Y' && !isCookieSet('done')" id="popup_Layer">
			<!-- Your popup content here -->
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		if (this.popupVo.pop_yn === 'Y' && !this.isCookieSet('done')) {
			this.$nextTick(() => {
				this.$refs.popupLayer.style.display = 'block';
			});
		}
	},
	methods: {
		closePop(winName) {
			// 2019.04.26 중복사용자 세션종료 후 기존 사용자 session 체크로직 추가
			this.sessioncheck();

			if (this.$refs.close.checked) {
				this.setCookie(winName, 'done', 1);
			}
			this.$refs.popupLayer.style.display = 'none';
		},
		isCookieSet(name) {
			const nameOfCookie = name + '=';
			const cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i];
				while (cookie.charAt(0) === ' ') {
					cookie = cookie.substring(1);
				}
				if (cookie.indexOf(nameOfCookie) === 0) {
					return true;
				}
			}
			return false;
		},
		setCookie(name, value, expiredays) {
			const todayDate = new Date();
			todayDate.setDate(todayDate.getDate() + expiredays);

			document.cookie = `${name}=${escape(value)}; path=/; expires=${todayDate.toGMTString()};`;
		},
		sessioncheck() {
			// Your session check logic here
		},
	},
	data() {
		return {
			popupVo: {
				pop_yn: '${popupVo.pop_yn}',
			},
		};
	},
};
</script>