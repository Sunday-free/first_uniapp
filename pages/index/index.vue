<template>
	<view class="content">
		
		<swiper-tab-head :tabBars="tabBars"
		 :tabIndex="tabIndex" 
		 @changIndex="changIndex"></swiper-tab-head>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" 
			:current="tabIndex"
			@change="tabChange">
				<swiper-item v-for="(items, index) in newslist" :key="index">
					<scroll-view @scrolltolower="loadmore(index)" scroll-y="true" class="list">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item, index1) in items.list" :key="index1"><index-list :item="item" :index="index1"></index-list></block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import indexList from '../../components/index/index-list.vue';
import swiperTabHead from "../../components/index/swiper-tab-head.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue"
export default {
	components: {
		indexList,
		swiperTabHead,
		loadMore,
		noThing
	},
	data() {
		return {
			swiperheight:500, 
			tabIndex: 0,
			tabBars: [
				{ name: '关注', id: 'guanzhu' },
				{ name: '推荐', id: 'tuijian' },
				{ name: '体育', id: 'tiyu' },
				{ name: '热点', id: 'redian' },
				{ name: '关注1', id: 'guanzhu1' },
				{ name: '推荐1', id: 'tuijian1' },
				{ name: '体育1', id: 'tiyu1' },
				{ name: '热点1', id: 'redian1' }
			],
			newslist: [
				{
					loadtext:"上拉加载更多",
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'video', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'video', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '我是标题',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '我是标题',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '我是标题',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 1, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '',
							isguanzhu: false,
							title: '',
							type: 'img', //img：图文 video：视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 2, //0：没有操作 1：顶了 2：踩了
								dingnum: 11,
								cainum: 11
							},
							playnum: '20w',
							long: '2:47',
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list: []
				},
				{
					loadtext:"上拉加载更多",
					list: []
				},
				{
					loadtext:"上拉加载更多",
					list: []
				}
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
		    success: (res) =>{
				let height=res.windowHeight-uni.upx2px(100);
		        this.swiperheight=height;
		    }
		});
	},
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	// 监听原生标题导航按钮点击事件
	onNavigationBarButtonTap(e) {
		switch (e.index){
			case 1:
			//打开发布页面
			uni.navigateTo({
				url: '../add-input/add-input'
			});
				break;
		}
	},
	methods: {
		//tabbar切换事件
		changIndex(index) {
			this.tabIndex = index;
		},
		//滑动事件
		tabChange(e){
			this.tabIndex=e.detail.current;
		},
		//上拉加载更多
		loadmore(index){
			if(this.newslist[index].loadtext!="上拉加载更多"){return;}
			this.newslist[index].loadtext="加载中......";
			
			//获取数据
			setTimeout(()=>{
				//获取数据完成
				let obj = {
					userpic: '../../static/demo/userpic/12.jpg',
					username: '',
					isguanzhu: false,
					title: '',
					type: 'img', //img：图文 video：视频
					titlepic: '../../static/demo/datapic/11.jpg',
					infonum: {
						index: 1, //0：没有操作 1：顶了 2：踩了
						dingnum: 11,
						cainum: 11
					},
					playnum: '20w',
					long: '2:47',
					commentnum: 10,
					sharenum: 10
				};
				this.newslist[index].list.push(obj);
				this.newslist[index].loadtext="上拉加载更多";
			},1000)
			
			
			//this.newslist[index].loadtext="没有更多数据";
		}
	}
};
</script>

<style>

</style>
