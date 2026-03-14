# Project: 中达聚财官网 (Zhongda Jucai Official Website)

## 0. 核心定位与原则 (Core Principles)
* [cite_start]**专业性 (Professionalism)**：通过克制的色彩布局和严谨的排版，传达公司正规、合规、规模化的品牌形象 [cite: 13, 14]。
* [cite_start]**视觉深度 (Visual Depth)**：采用现代化的 UI 元素（如：发光特效、动态光点、Z字型布局），避免传统企业站的廉价感 [cite: 35, 52, 53]。
* [cite_start]**交互引导 (Interaction)**：注重按钮悬停、锚点跳转及动态脉冲等微交互，提升用户留存感 [cite: 30, 53]。


## 0.5. 技术栈与架构 (Technical Stack)
* **框架**: Nuxt 3 (Latest Stable)
* **渲染模式**: SSG (Static Site Generation / `nuxt generate`)
* **样式**: Tailwind CSS (配合 Headless UI 或 PrimeVue 提升专业感)

## 1. 视觉与前端规范 (Design Instructions)
* **色调方案**：主色建议采用深邃蓝（科技与信任）搭配金属金或简洁白，强调“合规赋能”的严肃感。
* **交互要求**：
    * **按钮 (Buttons)**：所有行动呼吁（CTA）按钮需具备平滑的 Hover 缩放或流光效果。
    * [cite_start]**动画 (Animations)**：入场时采用渐隐上升效果；地图点位需有动态脉冲光点 [cite: 53]。
    * [cite_start]**导航栏 (Navbar)**：采用毛玻璃（Glassmorphism）效果，滚动时固定在顶部 [cite: 2, 4]。

## 2. 结构规划 (Site Structure)

### 2.1 导航栏 (Navigation)
* [cite_start]**左侧**：企业 Logo + “中达聚财” [cite: 3]。
* [cite_start]**右侧 Tabs**：首页、关于我们、核心业务、客户与案例、联系我们 [cite: 4, 5, 6, 7, 8, 9]。

### 2.2 页面详细定义
#### 1. 首页 (Home)
* [cite_start]**Hero Section**：宽屏大幅展示公司图片，突出核心理念：“合规赋能，多元协同，价值共生” [cite: 12, 13]。
* [cite_start]**实力数据**：通过计数器组件展示“累计服务4万人”、“覆盖全国多区域”等关键指标 [cite: 15]。
* [cite_start]**模块导航**：2*2 矩阵式卡片布局，通往四大核心板块 [cite: 16, 17, 18, 19, 20]。

#### 2. 关于我们 (About Us)
* [cite_start]**横幅**：标题“关于中达聚财”，大气背景图 [cite: 22]。
* [cite_start]**核心价值**：采用图标阵列展示“合规降本、防控风险、提高效率” [cite: 24]。
* [cite_start]**资质墙**：采用瀑布流或网格画廊展示 AA 级信用、中小企业协会会员等证书 [cite: 25, 26, 27]。

#### 3. 核心业务 (Services) - [重点开发]
* [cite_start]**布局**：侧边栏导航 + 锚点跳转的长图文布局 [cite: 30]。
* [cite_start]**人力资源 (核心)**：环形 UI 图表展示“外包-派遣-薪酬-社保-招聘”全场景闭环 [cite: 32, 33]。
* [cite_start]**商务与生活**：Z字型图文交错布局 [cite: 34, 35]。
* [cite_start]**教育培训**：卡片式列举职业技能与素养 [cite: 36, 37]。
* [cite_start]**咨询与投资**：左右大版块对比设计 [cite: 38, 39]。

#### 4. 客户与案例 (Cases)
* [cite_start]**品牌墙**：展示飞鹤、京东、滴滴、新希望等知名大厂 Logo，增强背书 [cite: 43]。
* [cite_start]**深度案例**：详细拆解“中国中小企业协会”和“亚惠美食”的合作成果 [cite: 49]。

#### 5. 服务网络与联系 (Contact)
* [cite_start]**动态地图**：现代化中国地图，在北京、大连、郑州、深圳、宿迁、新泰标注脉冲光点 [cite: 51, 52, 53]。
* [cite_start]**信息页脚**：包含总部/分部地址、电话、邮箱及 ICP 合规备案号 [cite: 54, 55, 56]。

## 3. 开发指令 (Dev Command Examples)
* *“根据 CLAUDE.md 中的业务三，创建一个卡片式列表组件，区分职业技能和职业素养。”*
* *“为首页的实力数据模块实现一个滚动到视口时触发的数字增长动画。”*
* *“参考服务网络部分，用 CSS 实现一个带有动态脉冲效果的点位组件。”*