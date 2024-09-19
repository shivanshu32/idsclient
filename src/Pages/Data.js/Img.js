import {
  d6,
  d7,
  d5,
  d3,
  d2,
  d1,
  d4,
  db3,
  db4,
  db1,
  db6,
} from "../../assets/designer/index.js";
import {
  g1,
  g3,
  g4,
  g5,
  g6,
  g10,
  g12,
  g13,
  g7,
  g9,
} from "../../assets/gallery/index.js";
import {
  m1,
  m2,
  m4,
  m10,
  m12,
  m13,
  m15,
  m16,
  m17,
  m18,
  m7,
  m9,
  m8,
  m14,
  m19,
  m20,
  m21,
  m22,
  m23,
  m25,
  m24,
  m26,
  m27,
  m28,
} from "../../assets/smodel/index.js";
import {
  feed1,
  feed2,
  feed3,
  feed4,
  feed5,
  feed6,
} from "../../assets/home/index.js";

const modelImg = [
  {
    id: 1,
    modsrc: m2,
    text: "Sony Kaur",
    instaurl: "https://www.instagram.com/sonyrockstar/",
  },
  { id: 2, modsrc: m24, text: "Khushboo Kankan" , instaurl: "https://www.instagram.com/khushbookankan/" },
  { id: 3, modsrc: m25, text: "Candice Pinto" , instaurl: "https://www.instagram.com/ninjapinto/" },
  {
    id: 4,
    modsrc: m7,
    text: "Saumya Bhandhari",
    instaurl: "https://www.instagram.com/saumyabhandari/",
  },

  {
    id: 5,
    modsrc: m12,
    text: "Aishwarya Goel",
    instaurl: "https://www.instagram.com/aishwaryagoel_/",
  },
  {
    id: 6,
    modsrc: m22,
    text: "Kanika Dev",
    instaurl: "https://www.instagram.com/kanika.dev/",
  },
  {
    id: 7,
    modsrc: m26,
    text: "Gurleen Greywal  ",
    instaurl: "https://www.instagram.com/_gurleengrewal_/",
  },
  {
    id: 8,
    modsrc: m9,
    text: "Iris Maitry",
    instaurl: "https://www.instagram.com/irismaity7/",
  },
  {
    id: 9,
    modsrc: m8,
    text: "Nisha Yadav",
    instaurl: "https://www.instagram.com/nisha.yadav.official/",
  },
  {
    id: 10,
    modsrc: m21,
    text: "Apala Rajvanshi",
    instaurl: "https://www.instagram.com/apalarajvanshi/",
  },
  {
    id: 11,
    modsrc: m20,
    text: "Donna Katherine Masih",
    instaurl: "https://www.instagram.com/donnamasih/",
  },
  { id: 12, modsrc: m14, text: "Parul Mishra", instaurl: "https://www.instagram.com/parulmishraa_official/" },

  {
    id: 13,
    modsrc: m27,
    text: "Deepti Gujral",
    instaurl: "https://www.instagram.com/deeptigujral",
  },

  {
    id: 14,
    modsrc: m13,
    text: "Bella D",
    instaurl: "https://www.instagram.com/modele_bella/",
  },
  {
    id: 15,
    modsrc: m23,
    text: "Elix Chaudhary",
    instaurl: "https://www.instagram.com/chaudharyelix/",
  },
  {
    id: 16,
    modsrc: m15,
    text: "Anjali Khandal",
    instaurl: "https://www.instagram.com/anjalikhandalofficial/",
  },
  {
    id: 17,
    modsrc: m19,
    text: "Rhea Subbaiah",
    instaurl: "https://www.instagram.com/rhea.subbaiah/",
  },
  {
    id: 18,
    modsrc: m1,
    text: "Aasttha Ssidana",
    instaurl: "https://www.instagram.com/aasttha.s/",
  },
  { id: 19, modsrc: m4, text: "Daman Brar" , instaurl: "https://www.instagram.com/brardaman/"},

  {
    id: 20,
    modsrc: m28,
    text: "Vidisha Singh",
    instaurl: "https://www.instagram.com/vidisshasiingh/",
  },
  {
    id: 21,
    modsrc: m10,
    text: "Krishna Kakoty",
    instaurl: "https://www.instagram.com/iamkrishnakakoty/",
  },

  {
    id: 22,
    modsrc: m16,
    text: "Mir Tawseef",
    instaurl: "https://www.instagram.com/mirtawseef18/",
  },

  { id: 23, modsrc: m17, text: "Lalit Sarout", instaurl: "" },
  {
    id: 24,
    modsrc: m18,
    text: "Sunny Kotwal",
    instaurl: "https://www.instagram.com/sunny_kotwal/",
  },

  ,
  ,
];

const designerData = [
  {
    id: 1,
    srcdata: d3,
    instalink:
      "https://www.instagram.com/rockystarofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    text: "Rocky Star",
  },
  {
    id: 2,
    srcdata: d1,
    instalink: "https://www.instagram.com/iamkenferns?igsh=N2RveW9hZ240b2My",
    text: "Ken Ferns",
  },
  {
    id: 3,
    srcdata: d2,
    instalink:
      "https://www.instagram.com/shravankummar?igsh=MTViOXIxdGxsbDZ6OQ==",
    text: "Shravan Kummar ",
  },
  {
    id: 4,
    srcdata: d5,
    instalink: "https://www.instagram.com/manalijagtap?igsh=amt6MmY1MWFvMzRn",
    text: " Rosy Ahluwalia ",
  },
  {
    id: 5,
    srcdata: d6,
    instalink:
      "https://www.instagram.com/prestocoutureofficial?igsh=bzNvNm12cnhrN21h",
    text: "Presto Couture ",
  },
  {
    id: 6,
    srcdata: d4,
    instalink: "https://www.instagram.com/meeamifashion?igsh=em9scmRlOXpmbmFq",
    text: "Amit Bhardwaj ",
  },
  {
    id: 7,
    srcdata: d7,
    instalink:
      "https://www.instagram.com/dikhakhadiworld?igsh=MThqeXhieGdyaHNuZw==",
    text: "Manali",
  },
];

const ytSrc = [
  {
    id: 1,
    vidsrc:
      "https://www.youtube.com/embed/di7rgOHys6I?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 2,
    vidsrc:
      "https://www.youtube.com/embed/Vyt7ViGp0DE?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 3,
    vidsrc:
      "https://www.youtube.com/embed/fmxkhDzotNE?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 4,
    vidsrc:
      "https://www.youtube.com/embed/j9At-GtwPoU?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 5,
    vidsrc:
      "https://www.youtube.com/embed/WfpAeZAjCGU?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 6,
    vidsrc:
      "https://www.youtube.com/embed/TmfAVEZ6DqM?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 7,
    vidsrc:
      "https://www.youtube.com/embed/WuT53LGFw2k?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 8,
    vidsrc:
      "https://www.youtube.com/embed/fFJmv0ZYDaw?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 9,
    vidsrc:
      "https://www.youtube.com/embed/agfLj6TpQwA?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 10,
    vidsrc:
      "https://www.youtube.com/embed/BekoNaifz1M?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 11,
    vidsrc:
      "https://www.youtube.com/embed/8f1IEzoP7no?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 12,
    vidsrc:
      "https://www.youtube.com/embed/XagvQxdypSg?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 13,
    vidsrc:
      "https://www.youtube.com/embed/sr3z0-kT0yk?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 14,
    vidsrc:
      "https://www.youtube.com/embed/WxOhNp8avmA?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 15,
    vidsrc:
      "https://www.youtube.com/embed/lHgW9MTCqpw?autoplay=1&mute=1&controls=0&loop=1",
  },
  {
    id: 16,
    vidsrc:
      "https://www.youtube.com/embed/Ev4nfyazmmM?autoplay=1&mute=1&controls=0&loop=1",
  },
];

const galleryBanner = [
  { id: 1, galImg: g1 },

  { id: 3, galImg: g3 },
  { id: 4, galImg: g4 },
  { id: 5, galImg: g5 },
  { id: 6, galImg: g6 },
  { id: 7, galImg: g7 },

  { id: 9, galImg: g9 },
  { id: 10, galImg: g10 },

  { id: 12, galImg: g12 },
  { id: 13, galImg: g13 },
];

const instaData = [
  {
    id: 1,
    srcLink: "https://www.instagram.com/p/C4ApRorrn_f/?hl=en",
    imgUrl: feed1,
    linkProfile: "https://www.instagram.com/p/C4VciZDvjZO/",
  },
  {
    id: 2,
    srcLink: "https://www.instagram.com/p/C4XzEuyOGqO/?hl=en",
    imgUrl: feed2,
    linkProfile: "https://www.instagram.com/p/C4AoxLVr4y5/",
  },
  {
    id: 3,
    srcLink: "https://www.instagram.com/p/C4AoxLVr4y5/?hl=en",
    imgUrl: feed3,
    linkProfile: "https://www.instagram.com/p/C4KcBDsLYfq/",
  },
  {
    id: 4,
    srcLink: "https://www.instagram.com/p/C4VciZDvjZO/?hl=en",
    imgUrl: feed4,
    linkProfile: "https://www.instagram.com/p/C4ApRorrn_f/",
  },
  {
    id: 5,
    srcLink: "https://www.instagram.com/p/C4KcBDsLYfq/?hl=en",
    imgUrl: feed5,
    linkProfile: "https://www.instagram.com/p/C4XzEuyOGqO/",
  },
  {
    id: 6,
    srcLink: "https://www.instagram.com/p/C4F9RHFPPGb/?hl=en",
    imgUrl: feed6,
    linkProfile: "https://www.instagram.com/p/Cnjk2Xur8U6/?img_index=1",
  },
];

const dbData = [
  { id: 1, designerImg: db1 },
  // { id: 2, designerImg: db2 },
  { id: 3, designerImg: db3 },
  { id: 4, designerImg: db4 },
  // { id: 5, designerImg: db5 },
  { id: 6, designerImg: db6 },
];
export { designerData, ytSrc, modelImg, galleryBanner, instaData, dbData };
