import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const check = (x: number, y: number) => <path d={`M${x} ${y}l5 5 10-12`} stroke="#d89b27" strokeWidth="2.5" />;
const phone = <><rect x="119" y="25" width="82" height="144" rx="14" fill="white" /><path d="M145 34h30M151 158h18" /></>;
const browser = <><rect x="72" y="35" width="176" height="122" rx="12" fill="white" /><path d="M72 57h176" /><circle cx="85" cy="46" r="1.5" fill="currentColor" /><circle cx="94" cy="46" r="1.5" fill="currentColor" /><path d="M133 168h54m-27-11v11" /></>;

/** 專屬幾何介面線稿；每種服務呈現不同的產品輪廓。 */
export function SolutionOutline({ slug, className }: { slug: string; className?: string }) {
  let drawing: ReactNode;
  switch (slug) {
    case "ai-parent-updates":
      drawing = <>{phone}<path d="M133 65h54M133 78h36" /><rect x="155" y="93" width="79" height="43" rx="9" fill="#fff4d8" /><path d="M174 136l-9 10v-10M168 106h50M168 118h35" /><path d="M88 72V57m-7 8h14" stroke="#d89b27" /></>;
      break;
    case "ai-grading":
      drawing = <><rect x="104" y="25" width="112" height="145" rx="9" fill="white" /><path d="M122 46h54M122 56h34M140 82h54M140 108h54M140 134h42" /><rect x="118" y="73" width="14" height="14" rx="3" /><rect x="118" y="99" width="14" height="14" rx="3" /><rect x="118" y="125" width="14" height="14" rx="3" />{check(119, 78)}{check(119, 104)}<circle cx="222" cy="142" r="23" fill="#fff4d8" />{check(213, 143)}</>;
      break;
    case "ai-question-bank":
      drawing = <><rect x="84" y="49" width="110" height="112" rx="10" fill="#eaf4fb" /><rect x="105" y="36" width="110" height="112" rx="10" fill="white" /><rect x="126" y="23" width="110" height="112" rx="10" fill="white" /><path d="M143 46h55M143 59h35M143 83h75M143 97h59M143 111h42" /><path d="M240 144v24m-12-12h24" stroke="#d89b27" strokeWidth="3" /></>;
      break;
    case "homework-app":
      drawing = <>{phone}<path d="M133 60h40M133 72h28" /><rect x="134" y="90" width="14" height="14" rx="3" />{check(134, 95)}<path d="M156 97h29M134 120h51M134 132h35" /><rect x="181" y="108" width="55" height="48" rx="10" fill="#fff4d8" /><path d="M208 143v-24m-9 9 9-9 9 9" /></>;
      break;
    case "student-attendance":
      drawing = <>{browser}<circle cx="97" cy="81" r="6" /><circle cx="97" cy="108" r="6" /><circle cx="97" cy="135" r="6" /><path d="M113 81h50M113 108h38M113 135h45" />{check(193, 81)}{check(193, 108)}<circle cx="234" cy="139" r="24" fill="#fff4d8" /><path d="M234 124v15l10 5" /></>;
      break;
    case "learning-analytics":
      drawing = <>{browser}<path d="M93 137h132M96 134V91" strokeOpacity=".35" /><rect x="110" y="109" width="19" height="25" rx="3" fill="#eaf4fb" /><rect x="145" y="91" width="19" height="43" rx="3" fill="#eaf4fb" /><rect x="180" y="73" width="19" height="61" rx="3" fill="#fff4d8" /><path d="m104 99 39-18 35 3 39-16" stroke="#d89b27" /></>;
      break;
    case "digital-communication-book":
      drawing = <><rect x="79" y="35" width="140" height="91" rx="14" fill="white" /><path d="m108 126-16 17v-17M98 59h99M98 73h74M98 87h86" /><rect x="155" y="103" width="85" height="49" rx="10" fill="#fff4d8" /><path d="m217 152 13 12v-12M171 121h52M171 134h35" /></>;
      break;
    case "personalized-practice":
      drawing = <><path d="M160 53c-29-17-54-18-82-10v106c28-8 53-7 82 10 29-17 54-18 82-10V43c-28-8-53-7-82 10Z" fill="white" /><path d="M160 53v106M94 64l47 9M94 84l47 9M94 104l33 6M180 72l41-8M180 93l26-5" /><circle cx="218" cy="134" r="24" fill="#fff4d8" /><path d="M207 134a11 11 0 1 0 4-9m-4-8v9h9" /></>;
      break;
    case "class-scheduling":
      drawing = <><rect x="80" y="38" width="160" height="120" rx="12" fill="white" /><path d="M80 67h160M112 27v24M208 27v24M120 67v91M160 67v91M200 67v91M80 97h160M80 127h160" strokeOpacity=".5" /><rect x="127" y="75" width="65" height="14" rx="4" fill="#eaf4fb" /><rect x="88" y="105" width="64" height="14" rx="4" fill="#fff4d8" /><rect x="167" y="135" width="65" height="14" rx="4" fill="#eaf4fb" /></>;
      break;
    case "tuition-management":
      drawing = <><path d="M108 26h104v140l-13-7-13 7-13-7-13 7-13-7-13 7-13-7-13 7Z" fill="white" /><path d="M126 48h68M126 62h43M126 85h27M178 85h16M126 103h27M178 103h16M126 121h68" /><circle cx="224" cy="132" r="27" fill="#fff4d8" />{check(215, 133)}</>;
      break;
    case "enrollment-crm":
      drawing = <>{browser}<circle cx="101" cy="80" r="6" /><path d="M114 80h43M90 100h70M90 114h50M177 72h53l-17 28h-19Z" fill="white" /><path d="M203 100v14m0 0-6-6m6 6 6-6" /><rect x="179" y="123" width="48" height="20" rx="6" fill="#fff4d8" /><path d="M93 137h48" /></>;
      break;
    default:
      drawing = <>{browser}<rect x="88" y="71" width="94" height="63" rx="7" fill="#eaf4fb" /><path d="m127 87 22 15-22 15Z" fill="#fff4d8" /><path d="M198 78h31M198 92h22M198 113h31M198 127h22M90 144h91" /><path d="M90 144h50" stroke="#d89b27" strokeWidth="3" /></>;
  }
  return (
    <svg viewBox="0 0 320 194" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cn("h-auto w-full text-brand", className)}>
      <circle cx="161" cy="97" r="80" strokeOpacity=".09" />
      <path d="M44 173h232" strokeOpacity=".12" />
      <path d="M59 39h8m-4-4v8M266 121h8m-4-4v8" stroke="#d89b27" strokeOpacity=".6" />
      {drawing}
    </svg>
  );
}
