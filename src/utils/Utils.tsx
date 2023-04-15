export type OptionType = {
  value: string;
  label: string;
};

export const CategoryOptions: OptionType[] = [
  { value: "fashion", label: "ファッション" },
  { value: "electronics", label: "家電・スマホ・カメラ" },
  { value: "toys_games", label: "おもちゃ・ゲーム" },
  { value: "hobbies_collectibles", label: "趣味・コレクション" },
  { value: "beauty_health", label: "コスメ・健康" },
  { value: "sports_outdoors", label: "スポーツ・アウトドア" },
  { value: "home_living", label: "家具・インテリア" },
  { value: "baby_kids", label: "ベビー・キッズ" },
  { value: "books_magazines", label: "本・雑誌・コミック" },
  { value: "movies_music", label: "映画・音楽" },
  { value: "automotive", label: "自動車・バイク" },
  { value: "pet_supplies", label: "ペット用品" },
  { value: "food_drink", label: "食品・飲料" },
  { value: "others", label: "その他" },
];

export const ConditionOptions: OptionType[] = [
  { value: "new", label: "新品、未使用" },
  { value: "like_new", label: "未使用に近い" },
  { value: "used_good", label: "目立った傷や汚れなし" },
  { value: "used_fair", label: "やや傷や汚れあり" },
  { value: "used_poor", label: "傷や汚れあり" },
  { value: "for_parts", label: "ジャンク品・部品取り" },
];
