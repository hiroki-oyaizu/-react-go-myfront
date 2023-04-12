import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const linkStyle = { display: "block", color: "white" };
  const sectionTitleStyle = { fontWeight: "bold", marginBottom: "10px" };
  return (
    <>
      <Box sx={{ width: "100%", height: 816 }}>
        <Box
          sx={{
            width: "100%",
            height: "49px",

            backgroundColor: "#37475A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            トップへ戻る
          </Link>
        </Box>
        <Box>
          <Box sx={{ backgroundColor: "#232F3E", height: 765, color: "white" }}>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={sectionTitleStyle}>
                    <Link to="/about-amazon" style={{ color: "inherit" }}>
                      Amazonについて
                    </Link>
                  </Typography>
                  <Link
                    to="/career"
                    style={{ display: "block", color: "inherit" }}
                  >
                    採用情報
                  </Link>
                  <Link
                    to="/about"
                    style={{ display: "block", color: "inherit" }}
                  >
                    About Amazon
                  </Link>
                  <Link
                    to="/newsroom"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Newsroom
                  </Link>
                  <Link
                    to="/environment"
                    style={{ display: "block", color: "inherit" }}
                  >
                    環境への取り組み
                  </Link>
                  <Link
                    to="/social-responsibility"
                    style={{ display: "block", color: "inherit" }}
                  >
                    社会貢献・地域活動
                  </Link>
                  <Link
                    to="/amazon-science"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazon Science
                  </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={sectionTitleStyle}>
                    <Link to="/sell-on-amazon" style={{ color: "inherit" }}>
                      Amazonでビジネス
                    </Link>
                  </Typography>
                  <Link
                    to="/selling-on-amazon"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazonで売る
                  </Link>
                  <Link
                    to="/brand-protection"
                    style={{ display: "block", color: "inherit" }}
                  >
                    ブランドの保護＆構築
                  </Link>
                  <Link
                    to="/fulfillment-by-amazon"
                    style={{ display: "block", color: "inherit" }}
                  >
                    フルフィルメント by Amazon
                  </Link>
                  <Link
                    to="/amazon-business"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazonビジネスで法人販売
                  </Link>
                  <Link
                    to="/amazon-pay"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazon Pay（決済サービス）
                  </Link>
                  <Link
                    to="/associate"
                    style={{ display: "block", color: "inherit" }}
                  >
                    アソシエイト（アフィリエイト）
                  </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={sectionTitleStyle}>
                    <Link to="/payment" style={{ color: "inherit" }}>
                      Amazonでのお支払い
                    </Link>
                  </Typography>
                  <Link
                    to="/amazon-point"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazonポイント
                  </Link>
                  <Link
                    to="/gift-cards"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazonギフトカード
                  </Link>
                  <Link
                    to="/mastercard"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazon Mastercard
                  </Link>
                  <Link
                    to="/credit-card-insurance"
                    style={{ display: "block", color: "inherit" }}
                  >
                    クレジットカード＆保険
                  </Link>
                  <Link
                    to="/partner-program"
                    style={{ display: "block", color: "inherit" }}
                  >
                    パートナーポイントプログラム
                  </Link>
                  <Link
                    to="/gift-card-charge-type"
                    style={{ display: "block", color: "inherit" }}
                  >
                    Amazonギフトカードチャージタイプ
                  </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={sectionTitleStyle}>ヘルプ＆ガイド</Typography>
                  <Box>
                    <Link
                      to="/covid-19"
                      style={{ display: "block", color: "inherit" }}
                    >
                      新型コロナウイルス関連
                    </Link>
                    <Link
                      to="/delivery-information"
                      style={{ display: "block", color: "inherit" }}
                    >
                      配送料と配送情報
                    </Link>
                    <Link
                      to="/prime"
                      style={{ display: "block", color: "inherit" }}
                    >
                      Amazon プライム
                    </Link>
                    <Link
                      to="/returns-and-exchanges"
                      style={{ display: "block", color: "inherit" }}
                    >
                      商品の返品・交換
                    </Link>
                    <Link
                      to="/content-and-devices-management"
                      style={{ display: "block", color: "inherit" }}
                    >
                      コンテンツと端末の管理
                    </Link>
                    <Link
                      to="/pricing"
                      style={{ display: "block", color: "inherit" }}
                    >
                      価格について
                    </Link>
                    <Link
                      to="/customer-support"
                      style={{ display: "block", color: "inherit" }}
                    >
                      お客様サポート
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
