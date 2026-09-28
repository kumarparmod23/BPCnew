import { Testimonial } from '../types';

export const PATIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'रामेश्वर त्यागी',
    location: 'किरतपुर, बिजनौर',
    age: 52,
    condition: 'जटिल भगन्दर (Complex Fistula-in-Ano)',
    conditionCategory: 'fistula',
    rating: 5,
    doctorTreated: 'Dr. Pramod Chaudhary',
    recoveryTime: '4 सप्ताह में स्थायी समाधान',
    story: 'मैं 2 साल से मवाद और दर्द से परेशान था। मेरठ के एक बड़े अस्पताल में सर्जरी की सलाह दी गई थी जिसमें मल नियंत्रण खोने का खतरा बताया गया। बिजनौर पाइल्स सेंटर में डॉ. प्रमोद चौधरी जी ने क्षार सूत्र द्वारा इलाज किया। बिना किसी बड़े कट के आज मैं पूरी तरह ठीक हूँ और अपनी दुकान संभाल रहा हूँ।',
    verified: true,
    date: 'फरवरी 2025'
  },
  {
    id: 'test-2',
    patientName: 'सीमा रानी',
    location: 'नजीबाबाद',
    age: 38,
    condition: 'प्रसव उपरांत बवासीर व तीव्र फिशर (Post-Delivery Piles)',
    conditionCategory: 'female',
    rating: 5,
    doctorTreated: 'Dr. Shivani Chaudhary',
    recoveryTime: '24 घंटे में दर्द से राहत',
    story: 'डिलीवरी के बाद मुझे शौच के समय असहनीय जलन और दर्द होता था। पुरुष डॉक्टर को दिखाने में बहुत संकोच था। जब बिजनौर पाइल्स सेंटर की महिला विंग में डॉ. शिवानी चौधरी जी से मिली, तो उन्होंने बहुत धैर्य से सुना। अलग कक्ष और केवल महिला स्टाफ के बीच इलाज हुआ। 24 घंटे में मेरा दर्द गायब हो गया।',
    verified: true,
    date: 'जनवरी 2025'
  },
  {
    id: 'test-3',
    patientName: 'मोहम्मद असलम',
    location: 'बिजनौर शहर',
    age: 44,
    condition: 'ग्रेड 3 खूनी बवासीर (Grade 3 Bleeding Piles)',
    conditionCategory: 'piles',
    rating: 5,
    doctorTreated: 'Dr. Pramod Chaudhary',
    recoveryTime: '1 घंटे में डे-केयर डिस्चार्ज',
    story: 'शौच करते समय खून के फव्वारे जैसे गिरते थे और मस्से बाहर आ जाते थे। क्लिनिक में बिना किसी ऑपरेशन और बिना भर्ती हुए रबर बैंड लिगेशन और क्षार कर्म किया गया। सिर्फ 1 घंटे बाद मैं पैदल चलकर घर आ गया। अगले दिन से मेरा रक्तस्राव पूरी तरह रुक गया।',
    verified: true,
    date: 'मार्च 2025'
  },
  {
    id: 'test-4',
    patientName: 'सुनीता वर्मा',
    location: 'धामपुर',
    age: 41,
    condition: 'क्रोनिक एनल फिशर (Chronic Anal Fissure)',
    conditionCategory: 'fissure',
    rating: 5,
    doctorTreated: 'Dr. Shivani Chaudhary',
    recoveryTime: '3 दिन में सामान्य दिनचर्या',
    story: 'कब्ज के बाद गुदा मार्ग में ऐसा चीरा लग गया था कि शौच के बाद 5-6 घंटे तक रोना आ जाता था। डॉ. शिवानी मैम की औषधीय क्षार लेपन और जात्यादि तेल पट्टी से पहले ही दिन से 80% जलन में आराम मिला। महिलाओं के लिए यह बिजनौर का सबसे सुरक्षित और गरिमापूर्ण क्लिनिक है।',
    verified: true,
    date: 'दिसंबर 2024'
  },
  {
    id: 'test-5',
    patientName: 'विकास सैनी',
    location: 'चांदपुर',
    age: 28,
    condition: 'नाड़ी व्रण (Pilonidal Sinus)',
    conditionCategory: 'sinus',
    rating: 5,
    doctorTreated: 'Dr. Pramod Chaudhary',
    recoveryTime: 'नौकरी में बिना छुट्टी लिए ठीक',
    story: 'मेरी टेलबोन पर फोड़ा होकर लगातार बाल और मवाद निकलता था। एलोपैथी डॉक्टरों ने 3 महीने का बेडरेस्ट और बड़ा गड्ढा चीरा बताया था। बिजनौर पाइल्स सेंटर में मिनिमल क्षार सूत्र से इलाज हुआ। मैंने ऑफिस से एक भी दिन की छुट्टी नहीं ली और घाव पूरी तरह भर गया।',
    verified: true,
    date: 'नवंबर 2024'
  },
  {
    id: 'test-6',
    patientName: 'हरीश चंद्र शर्मा',
    location: 'कोटद्वार रोड',
    age: 58,
    condition: 'शनिवार फ्री कैम्प में बवासीर परामर्श',
    conditionCategory: 'piles',
    rating: 5,
    doctorTreated: 'Dr. Pramod Chaudhary',
    recoveryTime: '₹0 फीस में वरिष्ठ मार्गदर्शन',
    story: 'मैं शनिवार के निःशुल्क शिविर में टोकन लेकर गया था। कोई दिखावा नहीं था, डॉ. प्रमोद जी ने पूरी तसल्ली से जांच की और उचित दवाइयां व जीवनशैली समझाई। आज बिजनौर जिले में ऐसा जनसेवा भाव बहुत कम देखने को मिलता है। पूरा परिवार आभारी है।',
    verified: true,
    date: 'फरवरी 2025'
  }
];
