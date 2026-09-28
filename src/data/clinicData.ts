import { Treatment, Doctor } from '../types';

export const CLINIC_INFO = {
  name: 'Bijnor Piles Centre',
  taglineHindi: 'बवासीर, भगन्दर एवं फिशर का सफल इलाज',
  motto: '"Come with Pain, Go with Smile" • प्रामाणिक आयुर्वेदिक क्षार सूत्र तकनीक',
  phone: '+917017790760',
  displayPhone: '+91 7017790760',
  address: 'सामने श्री हॉस्पिटल, किरतपुर रोड, बिजनौर (उ.प्र.) 246701',
  addressEnglish: 'Opp. Shree Hospital, Kiratpur Road, Bijnor (U.P.) 246701',
  website: 'www.bijnorpilescentre.com',
  websiteUrl: 'https://www.bijnorpilescentre.com',
  mapsUrl: 'https://maps.google.com/?q=Kiratpur+Road+Bijnor+Uttar+Pradesh+Opp+Shree+Hospital',
  mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.220317385477!2d78.14744977452601!3d29.393110349138556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390befd6fca62cf9%3A0xb1f472bdb257bf06!2sBijnor%20Piles%20Centre!5e0!3m2!1sen!2sin!4v1790576701931!5m2!1sen!2sin',
  hours: {
    weekdays: 'सोमवार से शुक्रवार: 10:00 AM - 08:00 PM',
    saturday: 'शनिवार (फ्री कैम्प): 10:00 AM - 08:00 PM',
    sunday: 'रविवार: केवल टेलीफोनिक आपातकालीन परामर्श',
  },
  images: {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_PDzK_t8T90gfBLL0B997hwbb5zuwvnpYlH_IjoOJbzRsm4LxsC3ooX6XfvYqurLr4aIVBN6U7RVGMegevt4tzMfNzeKE-EHxWt6XREnuMdx5lq-UdMSNBazaO0xbOuY0h-nNfnwqnzjraccvORBC_1Jp4X7DcOKKdjgVupO8ULosCnU6oTP-NMp-UbkE-DneLw23jlw5D3qC3aWBxNGtMgrykisDWjs1ihOUxRwmsqrBeUKAhB7eni2uebldt26ZUg',
    femaleDoctorFeature: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV-2AAw0xQd0Ttex9s1IPgktdGLWluo6iyn4Ggq7Q5QFgzJlreXYLfBY11khs-BvTHAzsD-vf_tTA6tbALrWzAywkqpizPpV1UZQVlpu8F6-eFD9oURBmRXZtZomKWOb2JwbCwZeMmZMD90WUTALNZcXKVZZSjw_7y0CTVCPiTt0IfFQ6HicOINtUdMgPMOssDm_SvDVU6Un51G5f6Ei7qrIQyjbM0rtdl3dOoSFC_0tgx9gcMdrs0-HEW9f4MX39UhA',
    drPramod: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZhNNjYx8f3VytdP6S4TfsAhSdTI8KJEpnFALrlfoYIyqa8fZRxpkyFo-JhEEPkx-TU-KFoC8wWZhyCAVAjP9VjSe00gbu5szvIeEY1BvglS3lfRMLuzJqXSxqNg3UzT6xNZkrnE-u9jzFQlMI10qJJEr3eBwi269VudLnKLoNHEbb4fyxgPaUJjBCehEOytQpCjv9SBlK1p8YgRfzVhuqREbX9H-Mw1We3O5CuLvvQW040j0JYQ_1XtvwgONp56ygUQ',
    drShivani: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqgcioc4dJK0hum04LdhqUG7C3ZDJXtExxygUZIoICIFzfwliBpFWvEXG29P6V3E3l1mzn5r590OZn2AXnGUCYSKonH1wyeR0tdx0Ano5j53EjLchEjMhHrnNlQSl8BkhbOApxFin9TDaJaa4wRBVJFIDeD8ZqAUKwUmM1tHGV22XdUv6o_MZN_mjloybChDXiGCUaJMT-YteF-5iTLaJacSJIjzqYRkfARwj9n5J9VCzZMRCwdnvATstZj1TctTrSfQ',
    footerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBou0xuyzT1r5oV2iGCPdTOpKoE1839yr6BvzDzWLwxDaSUtirJaRrNz_EfWplHOFDVPMxA0o6MN0rybm0dlmtAkPVaqUzYzah2yiJueRiy-obmKuNt5xoJwFaqckh5S_2gcw1kmtJf9z6bQaL_eK3hyp0aeGEB4McsCsdYtfoPK-lok4vLNv9ZG7knxy-lRjG-iXKkfxKYpihqhAPi8ihBpo7LU5CEQ54JNgJWEyZddx9LxCSPZExWorPwslDDVGJ7lQ',
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'piles',
    number: '01',
    titleHindi: 'बवासीर (Piles / Hemorrhoids)',
    titleEnglish: 'Hemorrhoids (Internal & External)',
    subtitle: 'खूनी अथवा बादी बवासीर',
    description: 'मलत्याग के दौरान खून गिरना, मस्सों का बाहर आना, खुजली और सूजन। ग्रेड 1 से ग्रेड 4 तक बिना ऑपरेशन रबर बैंड लिगेशन व क्षार कर्म द्वारा उपचार।',
    badge: '98% सफलता दर',
    accentColor: 'border-blue-200 text-brand-navy bg-blue-50',
    symptoms: [
      'मलत्याग के समय बिना दर्द के ताज़ा लाल खून गिरना',
      'गुदा द्वार पर मांस के मस्सों (Lumps) का बाहर निकलना',
      'गुदा क्षेत्र में तीव्र खुजली, बेचैनी व सूजन',
      'मल त्याग के बाद भी पेट पूरी तरह साफ न होने का आभास'
    ],
    ayurvedicSolution: 'रबर बैंड लिगेशन (Rubber Band Ligation) एवं विशेष हर्बल क्षार कर्म द्वारा बिना चीरे मस्सों को सुखाकर नष्ट किया जाता है। अस्पताल में भर्ती होने की आवश्यकता नहीं होती।',
    advantages: [
      'बिना चीरा, बिना टांके (No stitches)',
      'प्रक्रिया के 1 घंटे बाद मरीज घर जा सकता है',
      'रक्तस्राव तुरंत बंद होता है',
      'संक्रमण व रिकरेंस की संभावना नगण्य'
    ]
  },
  {
    id: 'fissure',
    number: '02',
    titleHindi: 'फिशर (Anal Fissure)',
    titleEnglish: 'Acute & Chronic Anal Fissure',
    subtitle: 'असहनीय दर्द व जलन',
    description: 'कठोर मलत्याग के कारण गुदा मार्ग में चीरा या कट लगना, घंटों तक तीव्र जलन और लकीर के रूप में रक्त आना। औषधीय क्षार लेपन से तुरंत राहत।',
    badge: '24 घंटे में दर्द में आराम',
    accentColor: 'border-amber-200 text-amber-700 bg-amber-50',
    symptoms: [
      'मलत्याग करते समय कांच चुभने जैसा असहनीय तीखा दर्द',
      'शौच के बाद 2 से 8 घंटे तक तीव्र जलन व ऐंठन रहना',
      'मल पर या टॉयलेट पेपर पर पतली लाल खून की लकीर दिखना',
      'गुदा के किनारे छोटा अतिरिक्त मांस (Sentinel Tag) बनना'
    ],
    ayurvedicSolution: 'जात्यादि तेल व विशेष औषधीय क्षार लेपन तथा न्यूनतम इनवेसिव आयुर्वेदिक प्रक्रिया से गुदा की स्फिंक्टर मांसपेशी की ऐंठन समाप्त कर घाव को प्राकृतिक रूप से तेजी से भरा जाता है।',
    advantages: [
      'पहले ही दिन से दर्द व जलन में 80-90% राहत',
      'प्राकृतिक आयुर्वेदिक हीलिंग, कोई कट नहीं',
      'कब्ज नियंत्रण के लिए विशेष हर्बल परामर्श',
      'दैनिक कार्यों में कोई व्यवधान नहीं'
    ]
  },
  {
    id: 'fistula',
    number: '03',
    titleHindi: 'भगन्दर (Fistula-in-Ano)',
    titleEnglish: 'Anal Fistula (Simple & Complex)',
    subtitle: 'मवाद (Pus) व नली बनना',
    description: 'गुदा के पास फोड़ा या फुंसी होकर लगातार मवाद, खून या पानी निकलना। ICMR प्रमाणित क्षार सूत्र (Kshar Sutra) तकनीक द्वारा जड़ से खात्मा।',
    badge: 'दोबारा न होने की गारंटी',
    accentColor: 'border-rose-200 text-rose-700 bg-rose-50',
    symptoms: [
      'गुदा के पास बार-बार फोड़ा बनना और फूटकर मवाद बहना',
      'कपड़ों पर गंदा पानी, चिपचिपा स्राव या बदबूदार मवाद लगना',
      'बैठने या चलने-फिरने में भारी दर्द व हल्का बुखार आना',
      'सर्जरी के बाद भी बार-बार उसी स्थान पर नली का फिर बन जाना'
    ],
    ayurvedicSolution: 'औषधीय जड़ी-बूटियों (अपामार्ग, स्नुही, हरिद्रा) से निर्मित विशेष "क्षार सूत्र" धागे को फिस्टुला की पूरी नली में डाला जाता है। यह धागा अवांछित ट्रैक को एक साथ काटता और भरता चलता है (Simultaneous cutting & healing)।',
    advantages: [
      'गुदा नियंत्रण मांसपेशी (Sphincter) को कोई नुकसान नहीं',
      'मल रोकने की क्षमता (Continence) 100% सुरक्षित रहती है',
      'ICMR और AIIMS द्वारा प्रमाणित सर्वश्रेष्ठ तकनीक',
      'पुनः रोग होने (Recurrence) की दर 2% से भी कम'
    ]
  },
  {
    id: 'sinus',
    number: '04',
    titleHindi: 'नाड़ी व्रण (Pilonidal Sinus)',
    titleEnglish: 'Pilonidal Sinus / Cyst',
    subtitle: 'बालों का गुच्छा व घाव',
    description: 'रीढ़ की हड्डी के अंतिम भाग पर बालों के धंसने से सूजन और बार-बार मवाद आना। बड़े चीरे के बिना मिनिमल क्षार सूत्र द्वारा स्थायी समाधान।',
    badge: 'डे-केयर प्रोसीजर',
    accentColor: 'border-purple-200 text-purple-700 bg-purple-50',
    symptoms: [
      'नितंबों के ऊपरी हिस्से (कूल्हे के जोड़) पर बार-बार फोड़ा होना',
      'घाव से बाल, मवाद व खून का रिसाव होना',
      'लंबे समय तक कुर्सी या बाइक पर बैठने में भारी असहजता',
      'दुर्गंधयुक्त पानी रिसना और आसपास त्वचा में लाली'
    ],
    ayurvedicSolution: 'मिनिमल क्षार सूत्र तकनीक से बिना मांस के बड़े टुकड़े को काटे केवल साइनस ट्रैक को औषधीय धागे से जड़ से साफ किया जाता है, जिससे न्यूनतम निशान रहता है और घाव जल्दी भरता है।',
    advantages: [
      'पारंपरिक बड़ी सर्जरी (Excision) जैसा 3 महीने का बेडरेस्ट नहीं',
      'अगले ही दिन मरीज अपनी नौकरी या पढ़ाई जारी रख सकता है',
      'घाव की दैनिक ड्रेसिंग बेहद सरल और दर्द-रहित',
      'स्थायी जड़ से समाधान'
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-pramod',
    name: 'Dr. Pramod Chaudhary',
    qualifications: 'BAMS, PGCKS (Specialist in Anorectal Surgery)',
    role: 'Senior Proctologist & Kshar Sutra Surgeon',
    experienceBadge: 'Many Years of Experience',
    bio: 'जटिल भगन्दर (Complex Fistula), क्रोनिक बवासीर और नाड़ी व्रण के सफल उपचार में विशेष दक्षता। 5,000+ से अधिक सफल डे-केयर प्रोसीजर्स और 98% से अधिक रिकवरी दर।',
    image: CLINIC_INFO.images.drPramod,
    timings: 'सोम - शनि: 10:00 AM - 08:00 PM',
    specialties: ['जटिल भगन्दर (Complex Fistula)', 'क्रोनिक बवासीर (Piles)', 'नाड़ी व्रण (Pilonidal Sinus)', 'प्रामाणिक क्षार सूत्र थेरेपी'],
    waMessage: 'नमस्ते Dr. Pramod Chaudhary, मुझे परामर्श के लिए अपॉइंटमेंट चाहिए।'
  },
  {
    id: 'dr-shivani',
    name: 'Dr. Shivani Chaudhary',
    qualifications: 'BAMS, PGCKS (Female Anorectal & Pelvic Care)',
    role: 'Senior Lady Medical Consultant & Female Wing Incharge',
    experienceBadge: 'महिला विंग प्रमुख',
    bio: 'महिला मरीजों में प्रसव के बाद की बवासीर, तीव्र फिशर एवं पेल्विक पेन का कोमल एवं दर्द-रहित आयुर्वेदिक पद्धति से पूर्ण सम्मान और गोपनीयता के साथ सफल इलाज।',
    image: CLINIC_INFO.images.drShivani,
    timings: '100% Confidential Environment • सोमवार - शनिवार',
    specialties: ['महिला बवासीर एवं फिशर', 'प्रसव उपरांत पाइल्स केयर (Post-delivery piles)', 'गोपनीय महिला परामर्श', 'आयुर्वेदिक आहार-विहार'],
    waMessage: 'नमस्ते Dr. Shivani Chaudhary, मुझे महिला डॉक्टर से परामर्श हेतु समय लेना है।'
  }
];

export const CLINIC_FAQS = [
  {
    q: 'क्षार सूत्र क्या है और यह पारंपरिक ऑपरेशन से बेहतर क्यों है?',
    a: 'क्षार सूत्र एक प्राचीन एवं वैज्ञानिक रूप से ICMR द्वारा प्रमाणित आयुर्वेदिक औषधीय धागा है जिसे अपामार्ग क्षार, थूहर का दूध एवं हरिद्रा से तैयार किया जाता है। पारंपरिक सर्जरी में गुदा मार्ग की मांसपेशियों को काटने का जोखिम रहता है जिससे मल नियंत्रण खोने का खतरा होता है, जबकि क्षार सूत्र बिना किसी मांसपेशी को काटे केवल अवांछित रोग को जड़ से नष्ट करता है। इसमें रिकरेंस दर 2% से भी कम है।'
  },
  {
    q: 'क्या इलाज के लिए अस्पताल में कई दिनों तक भर्ती रहना पड़ता है?',
    a: 'बिल्कुल नहीं! बिजनौर पाइल्स सेंटर में लगभग सभी प्रक्रियाएं आधुनिक "डे-केयर" (Day-Care) रूप में की जाती हैं। उपचार के मात्र 1 से 2 घंटे के भीतर मरीज पैदल चलकर अपने घर जा सकता है और अगले दिन से अपनी सामान्य दिनचर्या या नौकरी पर लौट सकता है।'
  },
  {
    q: 'शनिवार का निःशुल्क परामर्श शिविर क्या है?',
    a: 'हर शनिवार को बिजनौर एवं आसपास के सभी क्षेत्रों के मरीजों के लिए ओपीडी कंसल्टेशन, प्राथमिक जांच एवं वरिष्ठ सर्जनों का मार्गदर्शन पूरी तरह निःशुल्क (₹0 परामर्श शुल्क) प्रदान किया जाता है। टोकन पहले आओ-पहले पाओ अथवा ऑनलाइन अग्रिम बुकिंग पर उपलब्ध होते हैं।'
  },
  {
    q: 'क्या महिला मरीजों के लिए अलग महिला डॉक्टर और स्टाफ उपलब्ध है?',
    a: 'हाँ, हमारे यहाँ महिला विंग की प्रमुख डॉ. शिवानी चौधरी (BAMS, PGCKS) द्वारा अलग व पूर्णतः निजी जांच कक्ष में केवल महिला अटेंडेंट एवं नर्सिंग स्टाफ की उपस्थिति में इलाज किया जाता है, ताकि महिला मरीजों को किसी भी प्रकार का संकोच न हो।'
  },
  {
    q: 'अपॉइंटमेंट कैसे बुक करें और क्या जांच तुरंत हो जाती है?',
    a: 'आप हमारी वेबसाइट के फॉर्म द्वारा अथवा सीधे फोन नंबर +91 7017790760 पर कॉल या व्हाट्सएप करके तुरंत स्लॉट प्राप्त कर सकते हैं। क्लिनिक आने पर प्राथमिक जांच (Proctoscopy) उसी दिन कर दी जाती है।'
  }
];

export const SYMPTOM_CHECKER_QUESTIONS = [
  {
    id: 'q1',
    question: 'आपको सबसे मुख्य लक्षण क्या महसूस हो रहा है?',
    options: [
      { text: 'मलत्याग में बिना दर्द के ताज़ा लाल खून टपकना या पिचकारी जैसा आना', target: 'piles', weight: 4 },
      { text: 'मलत्याग के दौरान व बाद में 3-6 घंटे तक असहनीय जलन और तीखा दर्द होना', target: 'fissure', weight: 4 },
      { text: 'गुदा के पास फोड़ा/फुंसी होना और उसमें से लगातार मवाद व बदबूदार पानी निकलना', target: 'fistula', weight: 4 },
      { text: 'रीढ़ की हड्डी के अंत (कूल्हे के बीच ऊपर) में दर्द, सूजन या बाल व मवाद निकलना', target: 'sinus', weight: 4 }
    ]
  },
  {
    id: 'q2',
    question: 'मलत्याग के समय मांस का मस्सा बाहर महसूस होता है?',
    options: [
      { text: 'हाँ, मस्सा बाहर आता है और अपने आप या हाथ से अंदर करना पड़ता है', target: 'piles', weight: 3 },
      { text: 'मस्सा नहीं है, केवल गुदा के किनारे कट या चीरा जैसा जलनदार घाव है', target: 'fissure', weight: 3 },
      { text: 'गुदा के बाहर 1-2 सेमी दूर एक छोटा छेद या मस्से जैसा मुंह है जहाँ से रिसाव होता है', target: 'fistula', weight: 3 },
      { text: 'गुदा पर नहीं, बल्कि पीठ के निचले हिस्से (Tailbone) में है', target: 'sinus', weight: 3 }
    ]
  },
  {
    id: 'q3',
    question: 'यह समस्या आपको कितने समय से है?',
    options: [
      { text: 'कुछ दिनों या हफ्तों से (हाल ही में कब्ज के बाद शुरू हुई)', target: 'fissure', weight: 2 },
      { text: 'महीनों या सालों से रुक-रुक कर आ रही है', target: 'piles', weight: 2 },
      { text: 'पहले भी ऑपरेशन या इलाज कराया था लेकिन दोबारा हो गया', target: 'fistula', weight: 3 },
      { text: 'लंबे समय तक कुर्सी पर बैठने या बाइक चलाने से बढ़ी है', target: 'sinus', weight: 2 }
    ]
  }
];
