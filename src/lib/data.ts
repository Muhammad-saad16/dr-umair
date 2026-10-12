// All content sourced from https://drumairsiddiqui.com

export const site = {
  name: "Dr. Umair Mahmood Siddiqui",
  shortName: "Dr. Umair",
  arabicName: "الدكتور عمير محمود صديقي",
  tagline: "Knowledge • Faith • Guidance",
  email: "btm1432@gmail.com",
  phone: "+92 336 2342386",
  phoneHref: "tel:+923362342386",
  whatsapp: "https://wa.me/923362342386",
  address: "City of Knowledge, B-105, 13D/1, Gulshan-e-Iqbal, Karachi, Pakistan",
  social: {
    facebook: "https://www.facebook.com/DrUmairMahmoodSiddiqui",
    youtube: "https://www.youtube.com/@DrUmairMahmoodSiddiquiOfficial",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/videos", label: "Videos" },
  { href: "/events-programs", label: "Events" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const designations = [
  "Associate Professor, Department of Islamic Learning, University of Karachi, Pakistan",
  "Researcher, International Islamic Fiqh Academy (OIC), Jeddah, KSA",
  "Honorary Chairman, City of Knowledge Islamic Research Institute",
  "Former Member, Council of Islamic Ideology, Federal Ministry of Law, Pakistan",
];

export const biography = [
  "Dr. Umair Mahmood Siddiqui is an esteemed Islamic scholar of international renown and a Professor of Comparative Study of Religions in the Department of Islamic Studies at the University of Karachi, Pakistan. He has served as a member of the Council of Islamic Ideology under Pakistan's Federal Ministry of Law, where he provided invaluable guidance on legislative matters at both provincial and federal levels. He also serves as the Patron-in-Chief of City of Knowledge, a prominent research institute in Karachi.",
  "Dr. Umair actively represents Pakistan at conferences and seminars organized by the International Islamic Fiqh Academy, a subsidiary body of the Organization of Islamic Cooperation (OIC). He has authored numerous books and scholarly articles covering theology, comparative religion, Islamic jurisprudence, law, and Islamic history. His recent book, The Prohibition of Declaring a Muslim as an Infidel, has garnered significant acclaim. Among his most notable literary contributions is his magnum opus on Ibn al-Arabi, his Concept of Prophethood, and the Belief in the Finality of Prophethood.",
  "Eschewing both religious radicalism and secular extremism, Dr. Umair advocates for a balanced approach he calls dynamic orthodoxy, which is firmly rooted in the Quran and the Seerah of the Prophet Muhammad (peace be upon him).",
  "He is particularly distinguished for his in-depth doctoral research, which examines the historical context, underlying causes, and Islamic legal rulings on suicide attacks. In addition to his scholarly and research pursuits, Dr. Umair frequently appears on television, offering expert insights on contemporary issues through the lens of Quranic teachings.",
  "He was recently invited to deliver a keynote speech at an international conference held at the Parliament of Canada, where he addressed a distinguished audience of scholars, policymakers, and community leaders.",
];

export const pillars = [
  { title: "Qur'an & Sunnah", text: "Rooted in authentic sources", icon: "book" },
  { title: "Dynamic Orthodoxy", text: "Balanced, free of extremes", icon: "mosque" },
  { title: "Global Voice", text: "OIC Fiqh Academy & beyond", icon: "globe" },
] as const;

// Latest uploads from the YouTube channel (fetched 12 Oct 2026). Thumbnails live in public/videos/.
export const featuredVideoId = "cD7_pTbXP24";

export const videoCategories = ["Lectures", "Shama'il", "Q&A & Panels", "Dars-e-Quran"] as const;
export type VideoCategory = (typeof videoCategories)[number];

export type Video = { id: string; title: string; category: VideoCategory; date: string; views?: string };

export const videos: Video[] = [
  { id: "cD7_pTbXP24", title: "Shaykh Abdul Qadir Jilani and Imam al-Dhahabi | Siyar A‘lam al-Nubala’", category: "Lectures", date: "2026-10-11", views: "2.9K" },
  { id: "y187n8xABu8", title: "Ibn-e-Taymiyyah on Sheikh Abdul Qadir Jilani (RA)? | Majmoo-al-Fatawa", category: "Lectures", date: "2026-10-10", views: "7.6K" },
  { id: "4Q3EQXtMACk", title: "Sirr’ul Asrar & Futuh al-Ghaib | Shaykh Abdul Qadir Jilani", category: "Lectures", date: "2026-10-08", views: "19K" },
  { id: "bRKS9gzQIvE", title: "How did The Prophet Muhammad ﷺ Recline on a Pillow", category: "Shama'il", date: "2026-10-08", views: "579" },
  { id: "BOCrZ0bF70Y", title: "The Prophet Muhammad ﷺ Spoke at Night | Al-Shamā'il Al-Muḥammadiyyah", category: "Shama'il", date: "2026-10-07", views: "389" },
  { id: "yt7L5atFgRc", title: "The Age of Prophet Muhammad ﷺ | Dars-e-Shama’il Muhammadiyah ﷺ| Part 46", category: "Shama'il", date: "2026-10-06", views: "154" },
  { id: "KU1PY7Aejac", title: "The Lifestyle of Prophet Muhammad ﷺ|Shama’il al-Muhammadiyyah ﷺ|Part 45", category: "Shama'il", date: "2026-10-02", views: "285" },
  { id: "ODAg-i40y0Q", title: "The Blessed Names of Prophet Muhammad ﷺ|Shama’il al-MuhammadiyyahﷺPart 44", category: "Shama'il", date: "2026-10-01", views: "220" },
  { id: "XyC7D1v11fE", title: "What Ibn Arabi Says About Ghaus-e-Azam | Al-Futuhat al-Makkiyyah", category: "Lectures", date: "2026-09-30", views: "20K" },
  { id: "HKgXwWCR1TU", title: "Performing Hijama (Wet Cupping) & the Sunnah | Shama’il al-Muhammadiyyah", category: "Shama'il", date: "2026-09-30", views: "238" },
  { id: "1SpuundMA2I", title: "The Modesty of Prophet Muhammad ﷺ | Haya of the Prophet ﷺ", category: "Shama'il", date: "2026-09", views: "198" },
  { id: "SoEaAkXHrZk", title: "Q&A Session | Religious or Secular Extremism? | University of Karachi", category: "Q&A & Panels", date: "2026-09", views: "309" },
  { id: "jr9gw2MC3sk", title: "The Noble Character of Prophet Muhammad ﷺ| Dars-e-Shama’il Muhammadiyahﷺ", category: "Shama'il", date: "2026-09", views: "172" },
  { id: "JcEYySPP1tM", title: "Q&A Session | Religion & Media | University of Karachi", category: "Q&A & Panels", date: "2026-09", views: "333" },
  { id: "lteCbURq6nc", title: "Q&A Session | Gen Z & Internet Addiction | University of Karachi", category: "Q&A & Panels", date: "2026-09", views: "443" },
  { id: "VNQto8gLBHM", title: "The Humility & Humbleness of Prophet Muhammadﷺ| Shama’il al-Muhammadiyah", category: "Shama'il", date: "2026-09", views: "204" },
  { id: "ZflizDdJoxA", title: "The Noble Character of Prophet Muhammad ﷺ| Dars-e-Shama’il Muhammadiyahﷺ", category: "Shama'il", date: "2026-09", views: "232" },
  { id: "r2Z9KCrvRqI", title: "The Humility & Humbleness of Prophet Muhammadﷺ| Shama’il al-Muhammadiyah", category: "Shama'il", date: "2026-09", views: "313" },
  { id: "lYvZ4RE1ixY", title: "Artificial Intelligence & Seerat un Nabi | AI Ethics in Islam", category: "Lectures", date: "2026-09", views: "2.4K" },
  { id: "T1jFm3LvbTI", title: "Milad-un-Nabi ﷺ Kids Program | Children & the Internet", category: "Q&A & Panels", date: "2026-09", views: "391" },
  { id: "ZXy_GAkuJXg", title: "Human Rights, Gaza & Pakistan | Panel Discussion | University of Karachi", category: "Q&A & Panels", date: "2026-09", views: "361" },
  { id: "RB2tuwB2MF4", title: "The Miracle of the Fly | Proof of Existence of God", category: "Lectures", date: "2026-09", views: "575" },
  { id: "aKkAbCAMR88", title: "The Prophet Muhammad ﷺ Washed His Hands Before Eating | Sunnah Explained", category: "Shama'il", date: "2026-09", views: "338" },
  { id: "OcgSwww9buU", title: "Youth Identity Crisis | Panel Discussion Part 02 | University of Karachi", category: "Q&A & Panels", date: "2026-09", views: "518" },
  { id: "YdjWeqPRzQo", title: "The Blessed Weeping of Prophet Muhammad ﷺ| Dars-e-Shamail Muhammadiyah ﷺ", category: "Shama'il", date: "2026-09", views: "337" },
  { id: "a2Zk6RHHYv0", title: "Violence Against Women and AI | IIFA & Muslim World League Symposium", category: "Q&A & Panels", date: "2026-09", views: "2.4K" },
  { id: "Y7kwPlq1vnE", title: "The Thirty Liars, Dajjal & Khatm-e-Nabuwwat ﷺ", category: "Lectures", date: "2026-09", views: "469" },
  { id: "jGhF1LhRTSI", title: "Why Didn’t Zafarullah Khan Qadiyani Pray Janazah for Quaid-e-Azam?", category: "Lectures", date: "2026-09", views: "483" },
  { id: "yIBJ-foBf9w", title: "The Thirty Liars, Dajjal & Khatm-e-Nabuwwat", category: "Lectures", date: "2026-09", views: "146" },
  { id: "kUtLFt5dZf8", title: "What Is Ahmadism? | Book Introduction", category: "Lectures", date: "2026-09", views: "536" },
  { id: "uOrLSC9vX1g", title: "Surah Naba to Surah Naas", category: "Dars-e-Quran", date: "2026-04", views: "277" },
  { id: "nprlwyzpyZ8", title: "Surah Al Mujadalah to Surah An Naba", category: "Dars-e-Quran", date: "2026-04", views: "162" },
  { id: "ue_jh3Ip56Q", title: "Surah Qaaf to Surah Al Hadeed", category: "Dars-e-Quran", date: "2026-04", views: "271" },
  { id: "ZJThYHR5Np8", title: "Surah Muhammad to Hujrat", category: "Dars-e-Quran", date: "2026-04", views: "218" },
  { id: "8G3bxiSwdEw", title: "Surah Ghafir to Surah Al Fateh", category: "Dars-e-Quran", date: "2026-04", views: "131" },
  { id: "CqzMu8iOKoA", title: "Surah Saffat to Surah Zumar", category: "Dars-e-Quran", date: "2026-03", views: "138" },
  { id: "FwNg7O8T7b0", title: "Surah Sajdah to Surah Yaseen", category: "Dars-e-Quran", date: "2026-03", views: "195" },
  { id: "445uimzL80o", title: "Surah Qasas & Ankaboot &  Rome & Luqman", category: "Dars-e-Quran", date: "2026-03", views: "202" },
  { id: "Lyehlf_waz8", title: "Surah Namal", category: "Dars-e-Quran", date: "2026-03", views: "162" },
  { id: "8UVFs8zYowY", title: "Surah Noor", category: "Dars-e-Quran", date: "2026-03", views: "141" },
  { id: "r30OMP6jQwA", title: "Surah Anbiya Surah Hajj and Surah Mominoon", category: "Dars-e-Quran", date: "2026-03", views: "197" },
];

export const personalities = [
  { name: "Sheikh Dr. Saleh bin Abdullah bin Humaid", image: "/images/meet1.jpg", text: "Meeting with His Excellency at the International Islamic Fiqh Academy (IIFA).", place: "Jeddah" },
  { name: "Hazrat Pir Syed Lakht-e-Hasanian", image: "/images/meet8.jpg", text: "Founder & Chairman of Muslim Hands UK.", place: "Singapore" },
  { name: "Mufti Sher Muhammad Khan Sahib", image: "/images/meet9.jpg", text: "The scholar and Sheikh of Hadith.", place: "City of Knowledge, Karachi" },
  { name: "Sheikh Muhammad Al-Khamis Suleiman Uthman", image: "/images/meet10.jpg", text: "Professor of Al-Hadith and Jurisprudence at the University of Egypt.", place: "City of Knowledge, Karachi" },
  { name: "Prof. Imam Syed Badiuddin Soharwardy", image: "/images/meet11.jpg", text: "Founder of the Islamic Supreme Council of Canada.", place: "Jeddah" },
  { name: "Zainul Abidin Rasheed", image: "/images/meet3.jpg", text: "Ambassador to Kuwait and Special Envoy of the Minister for Foreign Affairs.", place: "Singapore" },
  { name: "Dr. Muhammad Eid Al-Mansour", image: "/images/e33.jpg", text: "University of Damascus, Syria — internationally recognised scholar of Hadith Sciences.", place: "City of Knowledge, Karachi" },
  { name: "Mufti Sher Muhammad", image: "/images/mee3.jpg", text: "Associated with Darul Ifta and Darul Uloom Muhammadia Ghousia, Bhera Sharif.", place: "City of Knowledge, Karachi" },
];

export const books = [
  { title: "What is Ahmadism?", image: "/images/book16.jpg", description: "", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "40 Ahadith for Kids", image: "/images/book1.jpeg", description: "A simplified collection of 40 Ahadith for children.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Ojhri Khane Ki Sharai Hesiat", image: "/images/book17.jpg", description: "", by: "Dr. Umair Mahmood Siddiqui", url: "https://drive.google.com/file/d/1ER4oIXQi_nqrSyCFov3v9LSC3bSkR2Ho/view?usp=sharing" },
  { title: "The Beacon Light", image: "/images/book2.jpeg", description: "A collection of writings of Dr. Umair Mahmood Siddiqui.", by: "Compiled by Dr. Umair Mahmood Siddiqui" },
  { title: "Tazkira", image: "/images/book3.jpeg", description: "A comprehensive source of knowledge exposing Qadianiat through its own content.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Sheikh Ibn Arabi", image: "/images/book4.jpeg", description: "An analysis of the life and teachings of Sheikh Ibn Arabi.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Pakistan Ka Matlab Kya?", image: "/images/book5.jpeg", description: "A discourse on the meaning and significance of Pakistan.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Ghazwa-e-Hind", image: "/images/book6.jpeg", description: "A discussion on the concept and implications of Ghazwa-e-Hind.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Muhammad: The Glory of the Ages", image: "/images/book7.jpeg", description: "A tribute to the Prophet Muhammad's ﷺ life and legacy.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "40 Ahadith", image: "/images/book8.jpeg", description: "A curated selection of 40 Ahadith with commentary.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Communist Challenge to Islam", image: "/images/book9.jpeg", description: "An exposition on the conflict between communism and Islam.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Dr. Fazlur Rahman Ansari", image: "/images/book10.jpeg", description: "A biography highlighting Dr. Fazlur Rahman Ansari's scholarly contributions.", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Islamic Jurisprudence", image: "/images/book11.jpeg", description: "A comprehensive guide to Islamic law and its principles.", by: "Compiled by Dr. Umair Mahmood Siddiqui" },
  { title: "Introduction to Islamic Economics", image: "/images/book12.jpeg", description: "", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Islamic Theology", image: "/images/book13.jpeg", description: "", by: "Dr. Umair Mahmood Siddiqui" },
  { title: "Revival of Muslim Thought", image: "/images/book14.jpeg", description: "", by: "Dr. Umair Mahmood Siddiqui" },
];

export const latestEvents = [16, 15, 14, 13, 12, 11, 10, 9].map((n) => `/images/pic${n}.jpg`);

export const eventPosters = [
  "post26", "post20", "post27", "post28", "post24", "post16", "post10", "post14",
  "post13", "post12", "post1", "post2", "post3", "post4", "post15", "event-poster2",
  "event-poster3", "post5", "event-poster5", "event-poster6", "event-poster7",
  "event-poster10", "event-poster9",
].map((n) => `/images/${n}.jpg`);

export const galleryImages = [
  "e64", "e65", "e66", "e67", "e59", "e60", "e63", "e62", "e61", "e58", "e56", "e57",
  "e45", "e46", "e47", "e48", "e49", "e50", "e51", "e44", "e41", "e40", "e39", "e38",
  "e35", "e34", "e33", "e32", "sildess", "dr", "e21", "e11", "e13", "e14", "e23", "e24",
  "e1", "e10", "e4", "e12", "e5", "e6", "e15", "e16", "e17", "e18", "e19", "e20",
].map((n) => `/images/${n}.jpg`);

export const moments = [
  "slode45.jpg", "slode43.jpg", "slode41.jpg", "slode38.jpg", "slode39.jpg", "slode42.jpg",
  "slode37.jpg", "slode36.jpg", "slode35.jpg", "slode34.jpg", "slode81.png", "slode82.png",
  "slode83.jpg", "slode84.jpg", "slode33.jpg", "slode32.jpg", "slode26.jpg", "slode27.jpg",
  "slode28.jpg", "slode30.jpg", "slode29.jpg", "slode31.jpg", "slode22.jpg", "slode21.jpg",
  "slode20.jpg", "slode24.jpg", "slode23.jpg", "slode19.jpg", "slode17.jpg", "slode18.jpg",
  "slode16.jpg", "slode15.jpg", "slode13.jpg", "slode14.jpg",
].map((n) => `/images/${n}`);

export const testimonials = [
  {
    quote: "Dr. Umair continues to progress both spiritually and worldly, reaching new heights. He exemplifies a man of high-spirited and resilient demeanor.",
    name: "Datuk Dr Mohd Hasbi Bakar",
    role: "President, Jamiyah Singapore",
    image: "/images/dr-mohd-hasbi.jpg",
  },
  {
    quote: "Dr. Umair made significant contributions as an esteemed member of the Council of Islamic Ideology at a remarkably young age.",
    name: "Prof. Dr. Majeedullah Qadri",
    role: "Ex-Dean, University of Karachi",
    image: "/images/Dr.-Majeedullah-Qadri.png",
  },
  {
    quote: "Today, we find ourselves at the City of Knowledge enveloped in an auspicious atmosphere, spearheaded by Dr. Umair Mahmood Siddiqui.",
    name: "Prof. Dr. Qibla Ayaz",
    role: "Chairman, Council of Islamic Ideology",
    image: "/images/qibla-Ayaz.png",
  },
];

// Recurring programs, from the latest posters on the Facebook page (Oct 2026).
export const weeklyPrograms = [
  {
    title: "Jumu'ah Khutbah & Dars-e-Quran",
    subtitle: "Currently: Surah Hud",
    day: "Every Friday",
    time: "Dars 1:00 – 1:45 pm · Jumu'ah 2:00 pm",
    venue: "Jamia Masjid Ali Haider Karrar",
    address: "Bilawal Chowrangi, Clifton, Karachi",
    note: "Organised by Anjuman Qamar-ul-Islam Sulemania. Purdah arrangement for women.",
    poster: "/images/fb/poster-surah-hud.jpg",
  },
  {
    title: "Weekly Dars-e-Quran",
    subtitle: "Currently: Surah Al-Jinn · with Du'a Hizb al-Bahr & Mehfil-e-Durood",
    day: "Every Saturday",
    time: "9:00 – 10:00 pm",
    venue: "City of Knowledge Islamic Research Institute",
    address: "B-105, 13D/1, Gulshan-e-Iqbal, Karachi",
    note: "Families welcome. Separate arrangement for women.",
    poster: "/images/fb/poster-surah-jinn.jpg",
  },
];

// Latest photos from the Facebook page — City of Knowledge gathering, 28 Sep 2026.
export const latestPhotos = Array.from(
  { length: 32 },
  (_, i) => `/images/fb/cok-2026-09-28-${String(i + 1).padStart(2, "0")}.jpg`,
);
