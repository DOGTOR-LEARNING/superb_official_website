import { ImageResponse } from "next/og";
import { EN_CAPS_BOX, LOGO_COLORS, MARK_BOX, TEXT_BLOCK_H, ZH_BOX, ZH_SCALE, logoPaths } from "@/components/brand/logo-paths";

// 正式 Logo 標誌（向量）以 data URI 嵌入
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_BOX.x} ${MARK_BOX.y} ${MARK_BOX.w} ${MARK_BOX.h}"><path fill-rule="evenodd" fill="${LOGO_COLORS.gold}" d="${logoPaths.gold}"/><path fill-rule="evenodd" fill="${LOGO_COLORS.blue}" d="${logoPaths.blueMark}"/></svg>`;
const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;
const wordSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${EN_CAPS_BOX.x} ${ZH_BOX.y} ${EN_CAPS_BOX.w} ${TEXT_BLOCK_H}"><g transform="translate(361 1055) scale(${ZH_SCALE}) translate(-361 -1055)"><path fill-rule="evenodd" fill="#163247" d="${logoPaths.blackZh}"/><path fill-rule="evenodd" fill="${LOGO_COLORS.blue}" d="${logoPaths.blueZh}"/></g><path fill="#163247" d="${logoPaths.enCaps}"/></svg>`;
const wordSrc = `data:image/svg+xml;base64,${Buffer.from(wordSvg).toString("base64")}`;

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SuperB Software — Building technology that makes a difference.";

/** 預設 Open Graph 圖片（品牌色 + Logo 幾何）。中文字型不嵌入，使用英文標語 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #FFFFFF 0%, #EAF4FB 100%)",
          color: "#163247",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: 120, top: 95, width: 360, height: 440, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={markSrc} width={340} height={432} />
        </div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={wordSrc} width={Math.round((70 * EN_CAPS_BOX.w) / TEXT_BLOCK_H)} height={70} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#2868A6", fontWeight: 600 }}>HUMAN-CENTERED TECHNOLOGY</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginTop: 20 }}>Building technology that makes a difference.</div>
        </div>
      </div>
    ),
    size,
  );
}
