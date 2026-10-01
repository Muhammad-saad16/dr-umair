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
  address: "City of Knowledge, B/105, 13D/1, Karachi, Pakistan",
  social: {
    facebook: "https://www.facebook.com/DrUmairMahmoodSiddiqui",
    youtube: "https://www.youtube.com/@DrUmairMahmoodSiddiquiOfficial",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/events-programs", label: "Events & Programs" },
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

export const featuredVideoId = "Pb02utyudnY";

export type VideoCategory = "Lectures" | "Sermons" | "Events";

export const videos: {
  id: string;
  thumbnail: string;
  category: VideoCategory;
  title: string;
  description: string;
}[] = [
  { id: "p0aU2nHEITM", thumbnail: "/images/w1.jpg", category: "Lectures", title: "Lecture 1", description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui." },
  { id: "rspwczpoag0", thumbnail: "/images/w2.jpg", category: "Sermons", title: "Friday Sermon 1", description: "Jumu'ah khutbah delivered by Dr. Umair Mahmood Siddiqui." },
  { id: "HjhNUTbkepc", thumbnail: "/images/w3.jpg", category: "Events", title: "Event Highlight 1", description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui." },
  { id: "iBvTbgqSWdw", thumbnail: "/images/w4.jpg", category: "Events", title: "Event Highlight 2", description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui." },
  { id: "zKSCALl6Az8", thumbnail: "/images/w5.jpg", category: "Lectures", title: "Lecture 2", description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui." },
  { id: "6H84LdW1Fas", thumbnail: "/images/w6.jpg", category: "Sermons", title: "Friday Sermon 2", description: "Jumu'ah khutbah delivered by Dr. Umair Mahmood Siddiqui." },
  { id: "I0RX-wkGeFM", thumbnail: "/images/w7.jpg", category: "Events", title: "Event Highlight 3", description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui." },
  { id: "nmBqWuMtJsg", thumbnail: "/images/w8.jpg", category: "Events", title: "Event Highlight 4", description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui." },
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
