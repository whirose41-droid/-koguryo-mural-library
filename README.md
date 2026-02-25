## 高句丽纹样库 · Koguryo Mural & Pattern Digital Library

该项目为基于 **Next.js + React + Tailwind CSS + Framer Motion + Lucide-react** 的沉浸式博物馆风网页体验原型。

- **主页布局**
  - 顶部：`NavBar` 半透明毛玻璃导航
  - 英雄区：`HeroMural` 手电筒聚光灯壁画交互
  - 中部：`ScrollShowcase` 动态展开古代卷轴
  - 下部：`TombMatrix` 三十八座古墓壁画矩阵 + 全屏详情弹窗

### 运行方式

在项目根目录执行：

```bash
npm install
npm run dev
```

默认访问地址：`http://localhost:3000`

### 数据替换说明

- 所有古墓数据集中在：`src/data/tombs.ts`
- 可在其中替换：
  - 墓名、年代、地点
  - 简介文字、纹样列表
  - 图片路径（`public/tombs/` 下的 `tomb-*.jpg`）

纹样画卷使用的代表性纹样图片路径位于：

- `src/components/ScrollShowcase.tsx` 中的 `patterns` 数组
- 对应静态资源建议放在：`public/patterns/*.jpg`

