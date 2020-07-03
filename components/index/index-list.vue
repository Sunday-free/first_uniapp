<template>
	<view class="index-list animated fadeInLeft fast">
		<view class="index-list1 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="scaleToFill" lazy-load></image>
				{{ item.username }}
			</view>
			<view class="u-f-ac" v-show="!isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-zengjia"></view>
				关注
			</view>
		</view>
		<view class="index-list2" @tap="opendetail">{{ item.title }}</view>
		<view class="index-list3 u-f-ajc" @tap="opendetail">
			<!-- 图片 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type == 'video'">
				<view class="icon iconfont icon-bofang index-list-play"></view>
				<view class="index-list-playinfo">{{ item.playnum }}次播放 {{ item.long }}</view>
			</template>
		</view>
		<view class="index-list4 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<view class="u-f-ac" @tap="caozuo('ding')" :class="{ active: infonum.index == 1 }">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>
					{{ infonum.dingnum }}
				</view>
				<view class="u-f-ac"  @tap="caozuo('cai')" :class="{ active: infonum.index == 2 }">
					<view class="icon iconfont icon-kulian"></view>
					{{ infonum.cainum }}
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont icon-pinglun1"></view>
					{{ item.sharenum }}
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa"></view>
					{{ item.sharenum }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		item:Object
	},
	data(){
		return{
				isguanzhu:this.item.isguanzhu,
				infonum:this.item.infonum
		}
	},
	methods:{
		//进入详情页
		opendetail(){
			uni.navigateTo({
				url: '../../pages/detail/detail?detailData='+JSON.stringify(this.item),
			});
		},
		guanzhu(){
			this.isguanzhu=true;
			uni.showToast({
				title: '关注成功'
			});
		},
		caozuo(type){
			switch (type){
				case "ding":
				if(this.infonum.index==1){return;};
				this.infonum.dingnum++;
				if(this.infonum.index==2){
					this.infonum.cainum--;
					};
				this.infonum.index=1;
					break;
				case "cai":
				if(this.infonum.index==2){return;};
				this.infonum.cainum++;
				if(this.infonum.index==1){
					this.infonum.dingnum--;
					};
				this.infonum.index=2;
					break;
			}
		}
	}
};
</script>

<style scoped>
	.index-list {
		padding: 20upx;
		border-bottom: 1upx solid #eeeeee;
	}
	.index-list1 > view:first-child {
		color: #999999;
	}
	.index-list1 > view:first-child image {
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list1 > view:last-child {
		background-color: #f4f4f4;
		border-radius: 5upx;
		padding: 0 10upx;
	}
	.index-list2 {
		padding-top: 15upx;
		font-size: 32upx;
	}
	.index-list3 {
		padding-top: 15upx;
		position: relative;
		overflow: hidden;
	}
	.index-list-playinfo {
		position: absolute;
		background-color: rgba(51, 51, 51, 0.72);
		color: #ffffff;
		bottom: 8upx;
		right: 8upx;
		border-radius: 49upx;
		font-size: 22upx;
		padding: 0 12upx;
	}
	.index-list-play {
		position: absolute;
		font-size: 140upx;
		color: #ffffff;
		z-index: 2;
	}
	.index-list3 > image {
		width: 100%;
		border-radius: 20upx;
	}
	.index-list4 {
		padding: 15upx 0;
	}
	.index-list4 view {
		color: #999999;
	}
	.index-list4 > view > view:first-child,
	.index-list4 > view > view > view {
		margin-right: 10upx;
	}
	.index-list4 .active,.index-list4 .active>view{
		color: #FFDF34;
	}
</style>
