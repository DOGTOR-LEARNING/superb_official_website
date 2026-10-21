"""
產生 Logo 橫式組合的英文名稱路徑（SUPERB SOFTWARE）。
字型：Montserrat（SIL OFL 1.1，fonts/OFL-Montserrat.txt），全大寫，左緣與中文對齊、底部對齊標誌底座。
比例參考精湛教育 Logo：英文為半粗體、中文縮為原始字高的 68%，英文大寫字高為原始中文字高的 42%。

用法：python3 scripts/build-logo-english.py <paths.json>
"""
import json
import sys

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

TEXT = "SUPERB SOFTWARE"
WEIGHT = 600
TRACKING = 10  # 字距（字型單位，UPM 1000）
CAP_RATIO = 0.42  # 英文大寫字高 ÷ 中文字高
GAP_RATIO = 0.15  # 中英文行距 ÷ 中文字高
# 中文名稱在原始 Logo 圖檔中的範圍
ZH_X0, ZH_X1, ZH_TOP, ZH_BOTTOM = 361, 1102, 1055, 1208

font = instantiateVariableFont(TTFont("fonts/Montserrat[wght].ttf"), {"wght": WEIGHT})
gs = font.getGlyphSet()
cmap = font.getBestCmap()
names = [cmap[ord(c)] for c in TEXT]


def ink(name):
    pen = BoundsPen(gs)
    gs[name].draw(pen)
    return pen.bounds


adv = [gs[n].width for n in names]
first, last = ink(names[0]), ink(names[-1])
natural = sum(adv[:-1]) - first[0] + last[2] + TRACKING * (len(names) - 1)
zh_h = ZH_BOTTOM - ZH_TOP
cap_h = zh_h * CAP_RATIO
scale = cap_h / font["OS/2"].sCapHeight
en_w = natural * scale
block_h = zh_h * (0.68 + GAP_RATIO + CAP_RATIO)
baseline = ZH_TOP + block_h

pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
x = -first[0]
for n, a in zip(names, adv):
    gs[n].draw(TransformPen(pen, (scale, 0, 0, -scale, ZH_X0 + x * scale, baseline)))
    x += a + TRACKING

out = sys.argv[1]
data = json.load(open(out))
data["enCaps"] = pen.getCommands()
data["enCapsBox"] = {"x": ZH_X0, "y": round(baseline - cap_h, 2), "w": round(max(en_w, ZH_X1 - ZH_X0), 2), "h": round(cap_h, 2)}
data["blockH"] = round(block_h, 2)
json.dump(data, open(out, "w"))
print(f"block {block_h:.1f}  cap {cap_h:.1f}  en width {en_w:.0f} vs zh {ZH_X1 - ZH_X0} ({en_w / (ZH_X1 - ZH_X0):.2f}x)")
