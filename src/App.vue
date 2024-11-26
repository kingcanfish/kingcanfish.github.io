<script setup>
import { onMounted, reactive } from 'vue'
import StarTrails from './components/StarTrails.vue'

const data = reactive({
  titleList: [
    '在稻城冰雪融化的早晨<br/>在布满星辰斑斓的黄昏',
  ],
  navLinks: [{
    name: '博 客',
    link: 'https://ts.gxy.plus',
  }, {
    name: '影 集',
    link: 'https://ts.gxy.plus',
  }],

  // myProjects: [{
  //   name: 'Home',
  //   description: '个人简介、主页、引导页',
  //   link: 'https://github.com/sun0225SUN/home',
  // }, {
  //   name: 'Blog',
  //   description: '个人博客，学习&随笔',
  //   link: 'https://github.com/sun0225SUN/blog',
  // }, {
  //   name: 'Brain',
  //   description: '知识库、第二大脑',
  //   link: 'https://github.com/sun0225SUN/brain',
  // }, {
  //   name: 'Camera',
  //   description: '摄影相册',
  //   link: 'https://github.com/sun0225SUN/camera',
  // }, {
  //   name: 'Camera Tools',
  //   description: '摄影工具箱',
  //   link: 'https://github.com/sun0225SUN/camera-tools',
  // }, {
  //   name: 'Bicycling',
  //   description: '骑行主页',
  //   link: 'https://github.com/sun0225SUN/bicycling',
  // }, {
  //   name: 'Life Map',
  //   description: '人生地图、点亮足迹',
  //   link: 'https://github.com/sun0225SUN/life-map',
  // }, {
  //   name: 'Coder',
  //   description: '闪闪发光的程序们',
  //   link: 'https://github.com/sun0225SUN/coder',
  // }, {
  //   name: 'Starter',
  //   description: '前端项目起手架模版',
  //   link: 'https://github.com/sun0225SUN/starter',
  // }],

  socialLinks: [{
    icon: '<i i-ant-design-github-outlined />',
    link: 'https://github.com/kingcanfish',
    label: 'Github',
  }, {
    icon: '<i i-ant-design-mail-outlined />',
    link: 'mailto:i@gxy.plus',
    label: 'Email',
  }, {
    icon: '<i i-ant-design-instagram-outlined />',
    link: 'https://www.instagram.com/kuoisguo/',
    label: 'Instagram',
  }],
})

onMounted(() => {
  // 背景固定
  window.addEventListener('scroll', () => {
    const bg = document.getElementById('background')
    const scrollTop = window.scrollY
    if (scrollTop > 0.7 * window.innerHeight)
      bg.classList.add('fixed')
    else
      bg.classList.remove('fixed')
  })
})
</script>

<template>
  <!-- 导航 -->
  <nav absolute fixed bottom-4 left-4 z-20>
    <div v-for="(item, index) in data.navLinks" :key="index" my-6 text-3 text-white wv>
      <a :href="item.link" text-white tracking-widest opacity-75 hover:opacity-100>
        {{ item.name }}
      </a>
    </div>
  </nav>

  <!-- 主体 -->
  <main absolute top-75vh z-10 w-full bg-transparent>
    <!-- 大标题 -->
    <section absolute ml-15vw>
      <div text-10 text-white font-bold tracking-widest v-html="data.titleList[Math.floor(Math.random() * data.titleList.length)]" />
      <div flex items-center>
        <div mr-4 flex gap-2>
          <div h-3 w-3 rounded-full bg-red />
          <div h-3 w-3 rounded-full bg-yellow />
          <div h-3 w-3 rounded-full bg-green />
        </div>
        <div text-4 text-white tracking-widest>
          我肩上是自由的风
        </div>
      </div>
    </section>
    <!-- 个人简介 -->
    <section mx-9vw mt-90>
      <!-- 关于我 -->
      <div text-bold mb-4 ml-10 text-8 text-white>
        About
      </div>
      <div mx-10 mb-10 flex justify-between>
        <div class="text-white/80">
          <p leading-10>
            Hi 👋～ 我是 kingcanfish
          </p>
          <p leading-10>
            一个混迹在互联网的普通开发者, 后端零食工, Gopher。
          </p>
          <p leading-10>
            世间的美好太多了 你也是
          </p>
          <p leading-10>
            家园已在身后, 世界尽在眼前
          </p>
          <p leading-10 />
        </div>
        <img hidden h-25 w-25 rounded-full transition md:block hover:-translate-y--2 src="./assets/images/avatar.jpeg" alt="avatar">
      </div>

      <!-- 我的技能 -->
      <!-- <div text-bold mb-2 ml-10 text-8 text-white>
          My Skills
        </div> -->

      <!-- 我的项目 -->
      <!-- <div text-bold mb-2 ml-10 text-8 text-white>
        Projects
      </div> -->
      <div mb-10 flex flex-wrap justify-between>
        <div v-for="(item, index) in data.myProjects" :key="index" mx-10 my-4 class="basis-3/4 md:basis-1/6">
          <a :href="item.link">
            <div class="bg-white/5 hover:bg-white/10" flex-col rounded-lg p-2 shadow-md backdrop-blur-3xl backdrop-opacity-60 transition hover:backdrop-opacity-100 hover:-translate-y-2>
              <div text-bold text-white opacity-75>
                {{ item.name }}
              </div>
              <div mt-1 text-3 text-white opacity-50>
                {{ item.description }}
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- 社交链接 -->
      <div text-bold mb-2 ml-10 text-8 text-white>
        Find Me
      </div>
      <div flex flex-wrap justify-between>
        <div v-for="(item, index) in data.socialLinks" :key="index" mx-10 my-4 class="basis-1/6">
          <a class="bg-white/5 hover:bg-white/10" flex-col items-center justify-between rounded-lg p-2 shadow-md backdrop-blur-3xl backdrop-opacity-60 transition hover:backdrop-opacity-100 hover:-translate-y-2 :href="item.link">
            <div mb-1 f-c-c text-white v-html="item.icon" />
            <div text-bold text-white opacity-75>{{ item.label }}</div>
          </a>
        </div>
      </div>
    </section>

    <!-- 底部 -->
    <footer mb-5>
      <div class="text-white/60" mt-50 f-c-c>
        <i i-ant-design-environment-outlined mr-1 />
        <p>拥有一个有趣的灵魂</p>
        <i i-ant-design-environment-outlined ml-1 />
      </div>
      <div class="text-white/60" mt-2 f-c-c gap-4>
        <a href="https://beian.miit.gov.cn/" style="text-decoration: none; color: inherit;">
          <div>赣ICP备2022003182号-1</div>
        </a>
        <div>© 2024 kingcanfish</div>
      </div>
    </footer>
  </main>

  <!-- 背景 -->
  <div id="background" absolute left-0 top-0 z-0 wh-full>
    <!-- 渐变阴影 -->
    <div to-black-500 absolute bottom--30vh left-0 h-80vh w-full from-black bg-gradient-to-t />
    <!-- 星轨背景 -->
    <StarTrails bg-black pb-45vh />
  </div>
</template>

<style lang="scss" scoped>
#background.fixed {
  position: fixed;
  top: -70%;
}
</style>
