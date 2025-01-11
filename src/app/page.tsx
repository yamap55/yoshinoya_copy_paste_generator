"use client";
import { useState, useEffect } from "react";
// import Image from "next/image";
import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function Home() {
  //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [formData, setFormData] = useState({
    who: "",
    where: "",
    what: "",
    situation: "",
    result: "",
    banner: "",
    discount: "",
    action: "",
    give: "",
    demand: "",
    conflictWith: "",
    finallySeated: "",
    neighborSaid: "",
    confrontNeighbor: "",
    orderPart1: "",
    orderPart2: "",
    orderPart3: "",
    middleDetail: "",
    instead: "",
    markedBy: "",
    advice: "",
  });

  const [visitorNumber, setVisitorNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorNumber = async () => {
      try {
        const response = await fetch(
          "https://asia-northeast1-yoshinoya-copy-paste-generator.cloudfunctions.net/incrementCounter",
        );
        const data = await response.json();
        setVisitorNumber(data.visitor_number);
      } catch (error) {
        console.error("Error fetching visitor number:", error);
      }
    };

    fetchVisitorNumber();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatedText = `\
そんな事より${formData.who || "1"}よ、ちょいと聞いてくれよ。スレとあんま関係ないけどさ。
昨日、${formData.where || "近所の吉野家"}行ったんです。${formData.where || "吉野家"}。
そしたらなんか${formData.situation || "人がめちゃくちゃいっぱい"}で${formData.result || "座れない"}んです。
で、よく見たらなんか${formData.banner || "垂れ幕下がってて、１５０円引き"}、とか書いてあるんです。
もうね、アホかと。馬鹿かと。
お前らな、${formData.discount || "１５０円引き"}如きで普段来てない${formData.where || "吉野家"}に来てんじゃねーよ、ボケが。
${formData.discount || "１５０円"}だよ、${formData.discount || "１５０円"}。
なんか親子連れとかもいるし。一家４人で${formData.where || "吉野家"}か。おめでてーな。
よーしパパ${formData.action || "特盛頼んじゃうぞー"}、とか言ってるの。もう見てらんない。
お前らな、${formData.give || "１５０円やる"}から${formData.demand || "その席空けろ"}と。
${formData.where || "吉野家"}ってのはな、もっと殺伐としてるべきなんだよ。
${formData.conflictWith || "Ｕの字テーブルの向かいに座った"}奴といつ喧嘩が始まってもおかしくない、
刺すか刺されるか、そんな雰囲気がいいんじゃねーか。女子供は、すっこんでろ。
で、やっと${formData.finallySeated || "座れた"}かと思ったら、隣の奴が、${formData.neighborSaid || "大盛つゆだくで"}、とか言ってるんです。
そこでまたぶち切れですよ。
あのな、${formData.neighborSaid || "つゆだく"}なんてきょうび流行んねーんだよ。ボケが。
得意げな顔して何が、${formData.neighborSaid || "つゆだく"}、だ。
お前は本当に${formData.confrontNeighbor || "食いたい"}のかと問いたい。問い詰めたい。小１時間問い詰めたい。
お前、${formData.neighborSaid || "つゆだく"}って言いたいだけちゃうんかと。
${formData.where || "吉野家"}通の俺から言わせてもらえば今、${formData.where || "吉野家"}通の間での最新流行はやっぱり、
${formData.orderPart1 || "大盛り"}${formData.orderPart2 || "ねぎだく"}${formData.orderPart3 || "ギョク"}。これが通の頼み方。
${formData.orderPart2 || "ねぎだく"}ってのは${formData.middleDetail || "ネギが多めに入ってる"}。そん代わり${formData.instead || "肉が少なめ"}。これ。
で、それに${formData.orderPart1 || "大盛り"}${formData.orderPart3 || "ギョク（玉子）"}。これ最強。
しかしこれを頼むと次から${formData.markedBy || "店員"}にマークされるという危険も伴う、諸刃の剣。
素人にはお薦め出来ない。
まあお前らド素人は、${formData.advice || "牛鮭定食でも食ってなさい"}ってこった。\
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      alert("クリップボードにコピーしました！");
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">吉野家コピペジェネレータ</h1>
      <p className="mb-4">
        あなたは{visitorNumber !== null ? visitorNumber : "？"}人目の吉野家店員です。
      </p>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="mb-4">下記の質問にお答えください</p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">誰に訴えますか？</label>
            <input
              name="who"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">どこで？</label>
            <input
              name="where"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="吉野家"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">どうした？</label>
            <input
              name="what"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="行った"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">そしたらどういう状態だったの？</label>
            <input
              name="situation"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="人がめちゃくちゃいっぱい"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">だからどうだったの？</label>
            <input
              name="result"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="座れない"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">んで、もっとよく見たらどうだった？</label>
            <input
              name="banner"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="垂れ幕下がってて、１５０円引き、とか書いてある"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">何「ごとき」で来てる人が多い？</label>
            <input
              name="discount"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="１５０円引"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">パパは何をしました（言った）か？</label>
            <input
              name="action"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="特盛り頼んじゃうぞー"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">なにをあげますか</label>
            <input
              name="give"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="１５０円やる"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">そのかわりどうさせますか？</label>
            <input
              name="demand"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="その席空けろ"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">
              どこのヤツとケンカがはじまってもおかしくないですか？
            </label>
            <input
              name="conflictWith"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ｕの字テーブルの向かいに座った"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">んで、やっとどうできましたか？</label>
            <input
              name="finallySeated"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="座れた"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">その時隣の奴は何といってましたか？</label>
            <input
              name="neighborSaid"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="大盛つゆだくで"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">↑の質問に対してどう問い詰めたいですか？</label>
            <input
              name="confrontNeighbor"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="食いたい"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">
              通のあなたが頼むのは？（まん中は必ず書いてください）
            </label>
            <input
              name="orderPart1"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="大盛り"
              onChange={handleChange}
            />
            <input
              name="orderPart2"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="ねぎだく"
              onChange={handleChange}
            />
            <input
              name="orderPart3"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="ギョク（玉子）"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">上の質問のまん中はどうなの？</label>
            <input
              name="middleDetail"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="ネギが多めに入ってる"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">その代わりどうなの？</label>
            <input
              name="instead"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="肉が少なめ"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">次からダレにマークされますか？</label>
            <input
              name="markedBy"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="店員"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">ド素人がするべき事は</label>
            <input
              name="advice"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="牛鮭定食でも食ってなさい"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          生成されたコピペ
          <button onClick={handleCopy} className="ml-2 flex items-center space-x-2">
            <ClipboardIcon className="h-5 w-5" />
          </button>
        </h2>
        <pre className="whitespace-pre-wrap">{generatedText}</pre>
      </div>
    </>
  );
}
