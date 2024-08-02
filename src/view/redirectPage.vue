<template>
	<div>
		<form ref="redirectform" @submit.prevent="sendRedirect">
			<input type="hidden" :value="csrfToken" name="request_token" />
			<input type="hidden" :value="''" name="request_url" />
			<input type="hidden" :value="redirectUrl" name="redirect_url" />
			<input v-if="flag !== null && flag !== ''" type="hidden" name="flag" :value="flag" />
		</form>
	</div>
</template>

<script>
export default {
	name: 'RedirectPage',
	data() {
		return {
			csrfToken: '<%=request.getSession().getAttribute("CSRF_TOKEN")%>',
			redirectUrl: '${redirect_url}',
			flag: '${flag}'
		};
	},
	mounted() {
		this.sendRedirect();
	},
	methods: {
		sendRedirect() {
			const url = window.location.href;
			const allowedUrl =
				'login.do,logout.do,popup_list.do,popup_write.do,clause.do,join.do,member_delete.do/error.do,popup_write_register.do,traffic1.do,traffic2.do,traffic3.do, ' +
				'main.do,/idpw_change.do,/idpw_change2.do,personalPop.do,dataroom_view.do,dataroom_write.do,idpw_change_done.do,member_edit2.do, ' +
				'notice_list.do,notice_view.do,notice_write.do,notice_edit.do,notice_delete.do,dataroom_list.do,login_check.do,file_download.do,mail_send.do, ' +
				'dataroom_write_register.do,popup_delete.do,personal_insert_register.do,personal_delete.do,dataroom_delete.do,personal_download.do,member_list.do,mail_approval.do,idpw_pass.do ';
			const checkUrl = url.substring(url.lastIndexOf('/') + 1, url.length).toLowerCase();

			if (allowedUrl.indexOf(checkUrl) === -1) {
				alert('정상적인 경로가 아닙니다');
				const actionUrl = '<%=request.getContextPath()%>/error.do';
				this.$refs.redirectform.action = actionUrl;
				this.$refs.redirectform.submit();
			} else {
				this.$refs.redirectform.request_url.value = url;
				this.$refs.redirectform.action = '<%=request.getContextPath()%>' + this.$refs.redirectform.redirect_url.value;
				this.$refs.redirectform.submit();
			}
		}
	}
};
</script>
