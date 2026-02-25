export type Tomb = {
  id: string;
  name: string;
  dynasty: string;
  location: string;
  period: string;
  thumbnail: string;
  excerpt: string;
  patterns: string[];
};

export const tombs: Tomb[] = Array.from({ length: 38 }).map((_, index) => {
  const id = index + 1;
  return {
    id: `tomb-${id}`,
    name: `第 ${id} 号古墓`,
    dynasty: "高句丽",
    location: "集安地区",
    period: "公元 4–6 世纪",
    thumbnail: `/tombs/tomb-${id}.jpg`,
    excerpt:
      "示例文案：此处为高句丽古墓壁画简介，后期可在数据文件中替换为真实考证内容。",
    patterns: ["云气纹", "龙纹", "连珠纹"]
  };
});
