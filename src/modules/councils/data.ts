export interface CouncilChair {
  role: string;
  name: string;
  image: string;
  experiences: string[];
}

export interface CouncilData {
  slug: string;
  name: string;
  detailName: string;
  nameSize: "lg" | "sm";
  type: string;
  level: string;
  mode: string;
  topic: string;
  description: string;
  logo: string;
  image: string;
  chairs: CouncilChair[];
}

export const councils: CouncilData[] = [
  {
    slug: "fifa",
    name: "FIFA",
    detailName: "FIFA",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    topic:
      "World Cup Expansion: The Importance of Regional Representation in Global Sporting Events",
    description:
      "The FIFA World Cup is more than simply a football tournament. The FIFA World Cup is one of only a handful of international sports competitions that allow countries from all around the globe to play against each other. As FIFA considers expanding the number of countries that can compete in the FIFA World Cup, there have been concerns raised about regional representation. Although more countries participating will increase the opportunity for more countries to participate, this will create questions about how qualification spots will be distributed among the various regions, and if a larger tournament will continue to hold the high level of competition and prestige associated with the FIFA World Cup. Regions vary greatly in their attempts to establish football programs. Some regions have a large number of very competitive national teams; other regions have far fewer competitive national teams. However, those regions that have fewer competitive national teams do have huge populations of passionate supporters. An expansion in representation would allow emerging footballing countries to receive greater recognition, invest more money into their domestic football programs, and provide players and supporters from a wider range of countries to take part in international sporting events. Critics, however, may argue that qualification spots should be awarded based on competitive performance rather than geographical representation. For FIFA, the challenge will be to balance inclusion, competition and equity. Any expansion of the FIFA World Cup must consider the requirements of each of the five continental confederations. An expanded FIFA World Cup will also require consideration of the financial, logistical and sporting implications of an expanded tournament. There is no simple answer to how many teams should participate in the FIFA World Cup. Instead, there is a question of what the FIFA World Cup should signify: either a tournament in which sporting ability determines who wins, or a global event that allows for meaningful participation opportunities for footballing countries from every corner of the earth. Delegates of this Council must discuss how World Cup expansion can facilitate global football development while maintaining regional representation that is equitable, sustainable and consistent with the competitive nature of the tournament.",
    logo: "/landing/fifa-logo.png",
    image: "/landing/fifa-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Muhammad Rafi Aurelian Rizkiyansyah",
        image: "/councils/chairs/fifa-1.png",
        experiences: [
          "Chair – NATO – Indonesia MUN 2025",
          "Chair – ADB – Jogja International MUN 2024",
          "Chair – UNESCO – ITBMUN 2024",
        ],
      },
      {
        role: "Co-Chair",
        name: "Kilan Kaimalik Yunus",
        image: "/councils/chairs/fifa-2.png",
        experiences: [
          "Best Delegate Crisis TEIMUN 2026",
          "Crisis Director IICSMUN 2026",
          "Honorable Mention & Best Directive Crisis JoinMUN 2024",
        ],
      },
      {
        role: "Co-Chair",
        name: "Darryl Rafa Vinan Halpito",
        image: "/councils/chairs/fifa-3.png",
        experiences: [
          "JMUN 2026 UNESCO - Academics",
          "AWMUN Bangkok 2024 INTERPOL - Israel",
          "AYIMUN Kuala Lumpur INTERPOL - Israel",
        ],
      },
    ],
  },
  {
    slug: "unicef",
    name: "UNICEF",
    detailName: "United Nations Children’s Fund (UNICEF)",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Online",
    topic:
      "Addressing the Impact of Climate-Induced Displacement of Children Following the 2022 Pakistani Floods",
    description:
      "The natural disaster that happened in 2022 located in Pakistan was being caused by the flooding of the Indus River and the tributaries where it took place between June and October; this event has been flagged as the worst scenario that had happened in Pakistan where this disaster also became a domino effect of humanitarian crisis. The primary reason being believed to be unusually heavy monsoon rains, the situation also being worsened by the season of the melting glaciers seeing that Pakistan is home to more than 5,000 glaciers, taking from the meteorologists and climate scientists they mention that the melting point was also being caused due to climate change. An observer in Pakistan highlighted that this flood has submerged around one third of the country’s total land. Moreover, more than 1,700 people were killed followed by damaging more than 2 million homes, within that data the government has to evacuate 33 million people within a total of 30 million USD losses. Furthermore, when the flood occurred Pakistan was also currently dealing within the economic failures due to the effect of COVID-19. Narrowing into the children’s condition during the massive flood that happened, Pakistan itself has claimed that around 528 children had died during the disaster. A report shown by UNICEF presents that 16 million children have been severely impacted, with 3.4 million of them being young boys and girls. During the tragedy UNICEF also reported that the children are living without any shelter, drinking facilities, and food; due to the massive incidents thousands of water systems, schools, and health facilities are unable to operate.",
    logo: "/landing/unicef-logo.png",
    image: "/landing/unicef-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Bunga Cinta Andyra Dewanto",
        image: "/councils/chairs/unicef-1.png",
        experiences: [
          "Secretary General - ITBMUN 2026",
          "Verbal Commendation - WTO - SMUN 2025",
          "Co-Chair - ALSA UNPAD E-Challenge MUN 2025",
        ],
      },
      {
        role: "Co-Chair",
        name: "Charissa Ananda Citradi",
        image: "/councils/chairs/unicef-2.png",
        experiences: [
          "Co-Chair UNICEF PADMUN 2026",
          "Head Chair ASEAN+6 SUMUN 2026",
          "Academic Director of KEMA JMUN 2026",
        ],
      },
      {
        role: "Co-Chair",
        name: "Kayla Felicya Chen",
        image: "/councils/chairs/unicef-2.png",
        experiences: [
          "Honorable Mention - Singapore MUN 2026 - IMO",
          "Best Delegate - UNSC - ECONOMIX 23rd MUN",
          "Vertex MUN - UNHRC - Head Chair",
        ],
      },
    ],
  },
  {
    slug: "unep",
    name: "UNEP",
    detailName: "United Nations Environment Programme (UNEP)",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    topic:
      "Facilitating a Sustainable and Actionable Green Transition for Developing States’ Mining Sector",
    description:
      "Green transition has become a long conversation between countries, looking into the rapid rising of sea level, the constant increase of temperature day by day, and not to mention the never-ending heat wave that is affecting several countries in the European region. By this issue the agenda of green transition has emerged and been processed deeply through many forums including the Conference of the Parties (COP). In order to achieve such a measure OECD highlights that it will be very dependent on countries’ minimum ability in transitioning their economy. Moreover, they evaluate that this transition required effective public policies within a strong force by the private sector engagement; coordination between economy, finance, industry, agriculture, and trade are important to support the agenda. Furthermore, discussing the role of developing nations and Least Developed Countries (LDCs), these two categorizations have a high index of being impacted through climate change. Within the event of COP27 in Egypt it was presented that every developing or developed country has uncommon considerations of interest. The International Energy Agency (IEA) shows that investment in renewable energy has reached three quarters of the growth in overall energy investment. However, in order for developing nations to follow this they need to find alternative resources that have a price below or equivalent to fossil fuels. In addition, a paper published by Van and Szeles (2026) mentions that their research discovered that green transition has worsened the condition of developing nations, evaluating 74 developing economies from 2000 to 2022. Lastly, specifying the mining sector for developing countries, the main concerns include whether mining projects positively affect local communities, whether developed nations exploit the sources of rare minerals, and how developing nations can find alternatives equivalent to fossil fuels while still contributing more to the green transition.",
    logo: "/landing/unep-logo.png",
    image: "/landing/unep-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Deanna Peramesty Wijaya",
        image: "/councils/chairs/unep-1.png",
        experiences: [
          "Assistant Chair - COP28 - Indonesia MUN 2023",
          "Assistant Chair - African Union - Jakarta International MUN 2025",
          "Assistant Chair - UN Women - Jogja International MUN 2024",
        ],
      },
      {
        role: "Co-Chair",
        name: "Rafael Alexander Susanto",
        image: "/councils/chairs/unep-2.png",
        experiences: [
          "ITBMUN 2025 - ILO - MO",
          "PemudaMUN 2025 - UNDP - BD",
          "VeritasMUN 2026 - WHO - Co-Chair",
        ],
      },
      {
        role: "Co-Chair",
        name: "Celine Haurissa",
        image: "/councils/chairs/unep-3.png",
        experiences: [
          "SE-MUN PGD FT UI 2026 UNEP Co-chair",
          "PemudaMUN 2025 ASEAN Head Chair",
          "JakartaMUN 2024 NATO Most Outstanding Delegate",
        ],
      },
    ],
  },
  {
    slug: "unwomen",
    name: "UNWomen",
    detailName: "UN Women",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Offline",
    topic:
      "Addressing the Threat of Artificial Intelligence-Based Gender Violence Following The Case of the 2024 South Korean Deepfake Crisis",
    description:
      "Discussing the specific measurement upon rapid violence against women within the involvement of current technologies of Artificial Intelligence, UN Women has published articles that discuss the matter. This violence is being labeled as an act conducted by AI that attacks women in the classification of digital abuse. This action is believed to result in physical, sexual, psychological, social, political, or economic harm, or other infringements of women’s rights and freedoms. UN Women itself has recognised that one of three women are experiencing this violence across the globe, scaling on how powerful AI innovations are. Moreover, it has highlighted this violence as deepfake: digitally altered images, audio, or videos created by AI. The result of deepfake is believed and proved to be highly connected with the creation of non-consensual sexual images, the spread of disinformation, or damage to a person’s reputation. UN Women also mentions that this type of file has a high risk of being multiplied and shared or stored on privately owned devices, making the movement of the suspect difficult to trace. Following the increasing concerns of violence globally, this council draws attention to the crisis that happened in South Korea. Since 2021, multiple reports have been filed and the number has increased rapidly. Human Rights Watch discovered that this video-making process was shared into a social media group with more than 200,000 members. South Korea introduced new legislation near the end of 2022, but the local community believes that without specific and strong policies targeting sectors including education, South Korea will remain in danger of continuing mass violence. Several sources also mention that the targets of these crimes are not only women but also minors.",
    logo: "/landing/unwomen-logo.png",
    image: "/landing/unwomen-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Puti Khayira Naila",
        image: "/councils/chairs/unwomen-1.png",
        experiences: [
          "Secretary General of JOINMUN 2025",
          "Chair of WHO Euromun 2026",
          "Co-Chair of UNICEF Indonesia MUN 2025",
        ],
      },
      {
        role: "Co-Chair",
        name: "Ariel Davis Suntoro",
        image: "/councils/chairs/unwomen-2.png",
        experiences: [
          "Most Outstanding Delegate in Jakarta International MUN KEMA Council",
          "Verbal Commendation in ALSA E-MUN 2026 UN Women Council",
          "Honorable Mention in Indonesia MUN UNHCR Council",
          "Best Delegate in ALSA E-MUN 2025 UNEP",
        ],
      },
      {
        role: "Co-Chair",
        name: "Fahmi Milan Amyar",
        image: "/councils/chairs/unwomen-3.png",
        experiences: [
          "Most Outstanding Delegate & Best Position Paper Singapore Model UN 2025",
          "Most Outstanding Delegate UNSC NTUMUN 2025",
          "Head Chair World Trade Organization Economix UI 2026",
        ],
      },
    ],
  },
  {
    slug: "african-union",
    name: "African Union",
    detailName: "African Union (AU)",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Online",
    topic:
      "Increasing Regional Currency Independence: The Possibility of a Common Currency for African Trade",
    description:
      "African nations are continuing to be challenged by the task of increasing economic integration within themselves and decreasing their reliance on currencies and financial systems from outside of the continent. The majority of intra-African trade occurs using major international currencies, specifically the United States Dollar and the Euro. The use of these foreign currencies increases the cost of transactions, leaving African economies vulnerable to the instability of those foreign currencies, and making regional trade less stable due to external influences. Therefore, as African states are trying to increase economic cooperation, the option of becoming more monetarily independent has grown in relevance. There is a possibility that a single African currency could simplify cross-border trade by eliminating the requirement for currency exchanges and decreasing transaction costs among member nations. A single African currency may also help further integrate the economies and work along with other initiatives, including the African Continental Free Trade Area (AfCFTA). However, alongside the benefits, there will be issues regarding sovereignty since adopting a single currency will force states to give up control over their own national monetary policies. Therefore, the African Union must assess if a single currency is a feasible and advantageous method towards achieving higher levels of regional economic independence or if there exist alternative methods that may accomplish the same goals with fewer risks. Delegates must weigh the advantages of increasing intra-African trade versus concerns related to economic stability, national sovereignty, and the disparities among economic conditions throughout the continent. Instead of assuming that a single currency is either essential or possible, this Council must determine which type of monetary cooperation will best facilitate Africa’s long-term economic integration.",
    logo: "/landing/african-union-logo.png",
    image: "/landing/african-union-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Dian Olivia Siregar",
        image: "/councils/chairs/african-union-1.png",
        experiences: [
          "Best Delegate — Model European Union Surabaya 2026",
          "Academics – UNESCO, Airlangga International Conference 2026",
          "Co-Chair — UNSC, VoNMUN 2025",
        ],
      },
      {
        role: "Co-Chair",
        name: "Joshua Wawo Unsulangi",
        image: "/councils/chairs/african-union-2.png",
        experiences: [
          "ITBMUN UNSC 2026, Honorable Mention",
          "PSTDMUN 2026, Secretary-General",
          "JISMUN DISEC 2026, Best Delegate",
        ],
      },
      {
        role: "Co-Chair",
        name: "Anna Angela Wihelmina Fofid",
        image: "/councils/chairs/african-union-3.png",
        experiences: [
          "Surabaya MUN - 2026 - Kongres Pemuda - Head Chair",
          "NTU - 2025 - FAO - Best Delegate",
          "ALSA UI MUN - 2025 - DPR - Best Fraction & Verbal Commendation",
        ],
      },
    ],
  },
  {
    slug: "unctad",
    name: "UNCTAD",
    detailName: "United Nations Conference on Trade and Development",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Online",
    topic:
      "Data Nationalism vs Data Sovereignty: Should States Restrict Cross-Border Data Flows?",
    description:
      "Data nationalism is defined as a loose effort of local states in ensuring that they have control over their national data. Moreover, data sovereignty is a concept that transitions data into a subject based on the origin of the data country. This concept, also sometimes referred to as data residency, has become a rapid part of the legal, privacy, security, and governance strategies for enterprises. Should states restrict cross-border data flows? This has become the main question of the case and leads into a study case which will draw on the decision to be made. Within this era where everything is based on technology, IoT, and data, it has become a major discussion between nations. The use of cross-border data functions as part of global economic and social interactions between countries, and it also supports the operation of international logistics, supply chains, and business. Nevertheless, this innovation has gaps and amplifies concerns regarding privacy, data protection, IP rights, and digital and national security. All in all, the main topic is data protection within the study case that mentions whether limitation is needed to protect the national asset. As mentioned in the short definition and brief, data is important for enterprise strategies to gain more profit. However, the concern of national protection, IP rights, and digital security has become the wall that is becoming a burden for this agenda to be continued.",
    logo: "/landing/unctad-logo.png",
    image: "/landing/unctad-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "I P. Satyena U. Pande",
        image: "/councils/chairs/unctad-1.png",
        experiences: [
          "Best Innovator, UNSC Crisis, AMUNC 2021",
          "Best Delegate, UNHCR, MUN@TIU 2020",
          "Chair of TEIMUN HSC, 2021",
        ],
      },
      {
        role: "Co-Chair",
        name: "Collin Pierson",
        image: "/councils/chairs/unctad-2.png",
        experiences: [
          "Chair — European Model UN — MERCOSUR 2026",
          "Best Delegate at NTUMUN 2025, PadMUN 2025, BinusMUN 2025, and AYIMUN 2025",
          "Co-Secretary General — Consensus International MUN",
        ],
      },
      {
        role: "Co-Chair",
        name: "Morgan Kei Santoso",
        image: "/councils/chairs/unctad-2.png",
        experiences: [
          "IICSMUN 2026 — Best Delegate — ECOSOC",
          "Jakarta International MUN 2026 — Most Outstanding Delegate — ICAO",
          "MISMUN 2026 — Co-Chair — WHO",
        ],
      },
    ],
  },
  {
    slug: "unsc",
    name: "UNSC",
    detailName: "United Nations Security Council (UNSC)",
    nameSize: "sm",
    type: "Double",
    level: "Advanced",
    mode: "Offline",
    topic:
      "Addressing the Security of Middle Eastern Countries: The Threat of Unprovoked Retaliation",
    description:
      "West Asia has been identified as one of the world’s most strategically unstable areas due to long-standing political disputes, military rivalries, and territorial conflicts. One of the main security concerns is the possibility of unprovoked retaliation, which occurs when a nation takes military action in response to what it believes to be a potential or anticipated threat, but there is no evidence that an attack was imminent. Although Article 51 of the United Nations Charter allows nations to defend themselves, it is difficult for the international community to determine if military action is truly defensive, excessive, or preemptive. The possibility of unprovoked retaliation is especially relevant in West Asia because military action by one country can lead to retaliatory actions by other countries, non-state actors, and international players. A single military action or perceived act of aggression can result in a broader regional conflict that jeopardizes regional stability, civilian lives, international commerce, and the global security environment. Varying interpretations of self-defense and national sovereignty can hinder diplomatic efforts to resolve conflicts and prevent further violence. In particular, some countries may claim that military action is required to avoid future attacks. Ultimately, the challenge of unprovoked retaliation will require enhanced international norms to prohibit unilateral escalation and ensure that all legitimate security concerns are resolved collaboratively and peacefully. The United Nations Security Council must strike a balance between providing protection to its member states from security threats and preventing member states from using self-defense as a justification for taking military action.",
    logo: "/landing/unsc-logo.png",
    image: "/landing/unsc-bg.png",
    chairs: [
      {
        role: "Head Chair",
        name: "Fauzan Adim",
        image: "/councils/chairs/unsc-1.png",
        experiences: [
          "Head Chair - UNSC - Jogja International MUN 2025",
          "Head Chair - UNSC - Indonesia MUN 2025",
          "Head Chair - UNSC - Padjadjaran International MUN 2025",
        ],
      },
      {
        role: "Co-Chair",
        name: "Dwi Jatmiko Adikoro",
        image: "/councils/chairs/unsc-2.png",
        experiences: [
          "Chair of UNSC at Bandung MUN 2026",
          "Chair of DISEC at Jakarta MUN 2025",
          "Chair of NBA at MAINMUN 2025",
        ],
      },
      {
        role: "Co-Chair",
        name: "Mohamad Dafiryan",
        image: "/councils/chairs/unsc-3.png",
        experiences: [
          "Partner at CV Linqga",
          "Best Delegate - UNSC Jakarta MUN 2021",
          "Most Outstanding Delegate - UNSC JOINMUN 2021",
        ],
      },
    ],
  },
  {
    slug: "historical-crisis",
    name: "Historical Crisis",
    detailName: "Historical Crisis",
    nameSize: "sm",
    type: "Single",
    level: "Advanced",
    mode: "Offline",
    topic:
      "The Fate of the Indonesian National Revolution: The Occupation of Yogyakarta and the General Offensive of 1 March 1949",
    description:
      "By early 1949, the Indonesian National Revolution had reached a turning point. The dispute between the Indonesian Republic and the Netherlands was now about more than just which country had military control; it was now also a battle for political legitimacy and for what kind of future Indonesia would have. On December 19th, 1948, the Dutch launched an attack (Operation Kraai) on Yogyakarta (the capital city of the Republic). Many Republican leaders including President Sukarno and Vice President Mohammad Hatta were captured. The Dutch believed that their action would show that the Republican government could no longer function as a legitimate governing body and that they could restore Dutch authority. However, to the Republic, the capture of their leaders and their capital city presented them with a major problem: how would the revolutionary movement be able to continue without its political leadership and its capital city being controlled by the Dutch? In addition to the capture of their leaders and capital city, the Republic was facing many problems. The Republic continued to resist Dutch attacks outside of Yogyakarta. They began using guerrilla tactics against Dutch soldiers. Political leaders tried to keep the Republican government intact. International interest was developing through the United Nations. Both sides of the conflict were beginning to feel pressure to find a peaceful resolution to the conflict. Faced with so much uncertainty, Republican forces planned the General Offensive of March 1st, 1949. Their goal was to briefly take away Dutch control of Yogyakarta. Even though the military goal of the offensive was short-term, the offensive had larger implications for the perception of Republican power, the morale of Indonesians, and the level of international support that the Republic received. The main question that delegates need to answer is how does the Republic need to react to the occupation of Yogyakarta and retain its legitimacy, while still pursuing its objectives despite facing tremendous military and diplomatic obstacles?",
    logo: "/landing/historical-crisis-logo.png",
    image: "/landing/historical-crisis-bg.png",
    chairs: [
      {
        role: "Frontroom Chair",
        name: "Adam Patrick Hegarty",
        image: "/councils/chairs/historical-crisis-1.png",
        experiences: [
          "ITBMUN 2026 CRISIS Frontroom Chair",
          "Economix MUN 2026 UNSC Head Chair",
          "Indonesia MUN 2023 UNSC Most Outstanding Delegate and Best Position Paper",
        ],
      },
      {
        role: "Backroom Chair",
        name: "Steven Adrian Auw",
        image: "/councils/chairs/historical-crisis-2.png",
        experiences: [
          "JMUN 2026, Assistant Crisis Director",
          "ITBMUN 2026, Backrooms",
          "IndonesiaMUN 2025, Most Outstanding and Best Directives",
        ],
      },
      {
        role: "Backroom Chair",
        name: "Dimas Andelino Setiawan",
        image: "/councils/chairs/historical-crisis-3.png",
        experiences: [
          "YaleMUN Singapore Assistant Chair",
          "BhinnekaMUN Best Delegate",
          "H!MUN HCC Backroom Chair",
        ],
      },
    ],
  },
];

export function getCouncil(slug: string) {
  return councils.find((council) => council.slug === slug);
}
