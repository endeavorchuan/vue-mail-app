<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search" />
      <div>苹果特价1元1斤</div>
    </div>
    <oneTab />
    <template v-if="showContent">
      <sideBar />
    </template>
    <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sideBar from '@/components/SideBar.vue';
import oneTab from '../components/OneTab.vue';

export default {
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
    }),
  },
  components: {
    oneTab,
    sideBar,
  },
};
</script>

<style scoped lang="less">
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    >* {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
