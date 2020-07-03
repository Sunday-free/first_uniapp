<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc mid" style="margin: auto;" @tap="changelook">
				{{ yinsi }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea"><textarea v-model="text" placeholder="说一句话吧" /></view>
		<!-- 上传多图 -->
		<upload-images @upload="upload"></upload-images>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc"><image src="../../static/common/addinput.png" mode="widthFix"></image></view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
let changelook = ['所有人可见', '尽自己可见'];
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uploadImages from '../../components/common/upload-images.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniNavBar,
		uploadImages,
		uniPopup
	},
	data() {
		return {
			yinsi: '所有人可见',
			text: '',
			imageList: [],
			showpopup: true,
			isget: false
		};
	},
	onBackPress() {
		//如果有值
		if(!this.text&&this.imageList.length<1){return;};
		if (!this.isget) {
			this.baocun();
			return true; //不返回
		}
	},
	methods: {
		//保存
		baocun(){
			uni.showModal({
				content: '是否要保存为草稿',
				cancelText: '不保存',
				confirmText: '保存',
				success: res => {
					if (res.confirm) {
						console.log('保存');
					} else {
						console.log('不保存');
					}
					this.isget = true;
					uni.navigateBack({
						delta: 1
					});
				}
			});
		},
		hidePopup() {
			this.showpopup = false;
		},
		upload(arr) {
			this.imageList = arr;
		},
		//返回
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 发布
		submit() {
			console.log('发布');
		},
		// 隐私
		changelook() {
			uni.showActionSheet({
				itemList: changelook,
				success: res => {
					this.yinsi = changelook[res.tapIndex];
				}
			});
		}
	}
};
</script>

<style>
.uni-textarea {
	border: 1upx solid #eeeeee;
}
.gonggao {
	width: 500upx;
}
.gonggao image {
	width: 75%;
	margin-bottom: 20upx;
}
.gonggao button {
	margin-top: 20upx;
	background-color: #ffe934;
	color: #171606;
}
</style>
