// Korean B2 vocabulary — 111 items
// data/korean/vocab/b2.ts
import { VocabItem } from "../../../types"

export const b2Vocab: VocabItem[] = [
    // ── Politics & Society (10) ────────────────────────────────────────────────
    {
        id: "ko-v-b2-001", level: "B2", word: "민주주의", romanized: "minjujuui",
        translation: "democracy", category: "politics & society",
        example: { native: "민주주의는 시민의 참여로 유지됩니다.", romanized: "Minjujuuineun simineui chamyeoro yujidoemnida.", translation: "Democracy is maintained through citizens' participation." }
    },
    {
        id: "ko-v-b2-002", level: "B2", word: "시민권", romanized: "siminkkwon",
        translation: "civil rights / citizenship", category: "politics & society",
        example: { native: "모든 국민은 시민권을 보장받아야 합니다.", romanized: "Modeun gungmineun siminkkwoneul bojangbadaya hamnida.", translation: "All citizens must have their civil rights guaranteed." }
    },
    {
        id: "ko-v-b2-003", level: "B2", word: "불평등", romanized: "bulpyeongdeung",
        translation: "inequality", category: "politics & society",
        example: { native: "사회적 불평등을 해소하는 것이 중요해요.", romanized: "Sahoejok bulpyeongdeongeul haesohaneun geosi jungyohaeyo.", translation: "It is important to resolve social inequality." }
    },
    {
        id: "ko-v-b2-004", level: "B2", word: "시위", romanized: "siwi",
        translation: "protest / demonstration", category: "politics & society",
        example: { native: "시민들이 광장에서 시위를 벌였어요.", romanized: "Siminduri gwangjangeso siwireul beoryeosseoyo.", translation: "Citizens held a protest in the square." }
    },
    {
        id: "ko-v-b2-005", level: "B2", word: "법률", romanized: "beopnyul",
        translation: "law / legislation", category: "politics & society",
        example: { native: "새로운 법률이 국회에서 통과되었어요.", romanized: "Saeroun beopnyuri gukhoeso tongkwadoeeosseoyo.", translation: "A new law was passed in the National Assembly." }
    },
    {
        id: "ko-v-b2-006", level: "B2", word: "선거운동", romanized: "seongeorundong",
        translation: "election campaign", category: "politics & society",
        example: { native: "후보자들이 선거운동을 시작했어요.", romanized: "Hubojaduri seongeorundong-eul sijakhaesseoyo.", translation: "Candidates started their election campaigns." }
    },
    {
        id: "ko-v-b2-007", level: "B2", word: "참정권", romanized: "chamjeonggwon",
        translation: "right to vote / suffrage", category: "politics & society",
        example: { native: "참정권은 민주주의의 핵심 권리입니다.", romanized: "Chamjeonggwoneun minjujuuieui haeksim gwonnimnida.", translation: "The right to vote is a core right of democracy." }
    },
    {
        id: "ko-v-b2-008", level: "B2", word: "국회의원", romanized: "gukhoeuiwon",
        translation: "member of the National Assembly", category: "politics & society",
        example: { native: "우리 지역 국회의원이 연설을 했어요.", romanized: "Uri jiyeok gukhoeuiwoni yeonseoreul haesseoyo.", translation: "Our local member of the National Assembly gave a speech." }
    },
    {
        id: "ko-v-b2-009", level: "B2", word: "주권", romanized: "jugwon",
        translation: "sovereignty", category: "politics & society",
        example: { native: "국가의 주권은 국민에게 있습니다.", romanized: "Gukgaeui jugwoneun gungminege isseumnida.", translation: "State sovereignty lies with the people." }
    },
    {
        id: "ko-v-b2-010", level: "B2", word: "부패", romanized: "bupae",
        translation: "corruption", category: "politics & society",
        example: { native: "정부의 부패를 근절해야 한다는 목소리가 높아요.", romanized: "Jeongbuui bupaereul geunjeolhaeya handaneun moksori-ga nopayo.", translation: "Voices calling for an end to government corruption are growing." }
    },

    // ── Economy & Finance (10) ─────────────────────────────────────────────────
    {
        id: "ko-v-b2-011", level: "B2", word: "인플레이션", romanized: "inpeullaeisyeon",
        translation: "inflation", category: "economy & finance",
        example: { native: "인플레이션으로 물가가 계속 오르고 있어요.", romanized: "Inpeullaeisyeoneumo mulgaga gyesok oreugo isseoyo.", translation: "Prices keep rising due to inflation." }
    },
    {
        id: "ko-v-b2-012", level: "B2", word: "예산", romanized: "yesan",
        translation: "budget", category: "economy & finance",
        example: { native: "정부는 내년도 예산을 확정했습니다.", romanized: "Jeongbuneun naenyeondo yesaneul hwagjeonhaessseumnida.", translation: "The government finalized next year's budget." }
    },
    {
        id: "ko-v-b2-013", level: "B2", word: "부채", romanized: "buchae",
        translation: "debt", category: "economy & finance",
        example: { native: "가계 부채가 증가하고 있어 우려됩니다.", romanized: "Gagye buchaega jeunggahago isseo uryeodoemnida.", translation: "Household debt is increasing, which is worrying." }
    },
    {
        id: "ko-v-b2-014", level: "B2", word: "투자", romanized: "tuja",
        translation: "investment", category: "economy & finance",
        example: { native: "외국 기업의 투자가 늘고 있어요.", romanized: "Oeguk gieobeui tujaga neulgo isseoyo.", translation: "Foreign corporate investment is increasing." }
    },
    {
        id: "ko-v-b2-015", level: "B2", word: "시장", romanized: "sijang",
        translation: "market (economic)", category: "economy & finance",
        example: { native: "글로벌 시장에서 경쟁이 치열해요.", romanized: "Geullobeol sijangeso gyeongjaengi chiyeolhaeyo.", translation: "Competition in the global market is fierce." }
    },
    {
        id: "ko-v-b2-016", level: "B2", word: "수출", romanized: "suchul",
        translation: "export", category: "economy & finance",
        example: { native: "한국의 반도체 수출이 증가했습니다.", romanized: "Hangugui bandoche sucuri jeunggahaessseumnida.", translation: "South Korea's semiconductor exports increased." }
    },
    {
        id: "ko-v-b2-017", level: "B2", word: "소비자", romanized: "sobija",
        translation: "consumer", category: "economy & finance",
        example: { native: "소비자 물가 지수가 상승했어요.", romanized: "Sobija mulga jisuга sangseuenghaesseoyo.", translation: "The consumer price index rose." }
    },
    {
        id: "ko-v-b2-018", level: "B2", word: "노동조합", romanized: "nodong-johap",
        translation: "labor union", category: "economy & finance",
        example: { native: "노동조합이 임금 인상을 요구했어요.", romanized: "Nodong-johabi imgeum insangeul yoguhaesseoyo.", translation: "The labor union demanded a wage increase." }
    },
    {
        id: "ko-v-b2-019", level: "B2", word: "경기침체", romanized: "gyeonggi-chimche",
        translation: "economic recession", category: "economy & finance",
        example: { native: "경기침체로 실업률이 높아졌어요.", romanized: "Gyeonggi-chimchero sireomnyuri nopajyeosseoyo.", translation: "The unemployment rate rose due to the economic recession." }
    },
    {
        id: "ko-v-b2-020", level: "B2", word: "민영화", romanized: "minyeonghwa",
        translation: "privatization", category: "economy & finance",
        example: { native: "국영 기업의 민영화는 논쟁이 많습니다.", romanized: "Gungyeong gieobeui minyeonghwaneun nonjaengi manssemnida.", translation: "The privatization of state-owned enterprises is highly controversial." }
    },

    // ── Environment & Climate (8) ──────────────────────────────────────────────
    {
        id: "ko-v-b2-021", level: "B2", word: "지구온난화", romanized: "jigu-onnan-hwa",
        translation: "global warming", category: "environment & climate",
        example: { native: "지구온난화를 막기 위해 탄소 배출을 줄여야 해요.", romanized: "Jigu-onnan-hwaleul makgi wihe tanso baeureul juryeoha haeyo.", translation: "We need to reduce carbon emissions to prevent global warming." }
    },
    {
        id: "ko-v-b2-022", level: "B2", word: "배기가스", romanized: "baegi-gaseu",
        translation: "exhaust gas / emissions", category: "environment & climate",
        example: { native: "자동차 배기가스가 대기 오염의 주요 원인이에요.", romanized: "Jadongcha baegi-gaseuga daegi oyeomeui juyo woninieyeo.", translation: "Car exhaust emissions are a major cause of air pollution." }
    },
    {
        id: "ko-v-b2-023", level: "B2", word: "생물다양성", romanized: "saengmul-dayangseong",
        translation: "biodiversity", category: "environment & climate",
        example: { native: "산림 파괴는 생물다양성을 위협합니다.", romanized: "Sallim pagwaeneun saengmul-dayangseong-eul wiheophamnida.", translation: "Deforestation threatens biodiversity." }
    },
    {
        id: "ko-v-b2-024", level: "B2", word: "산림파괴", romanized: "sallim-pagwae",
        translation: "deforestation", category: "environment & climate",
        example: { native: "산림파괴는 기후변화를 가속화시킵니다.", romanized: "Sallim-pagwaeneun gihu-byeonhwareul gasokwasikipnida.", translation: "Deforestation accelerates climate change." }
    },
    {
        id: "ko-v-b2-025", level: "B2", word: "가뭄", romanized: "gamum",
        translation: "drought", category: "environment & climate",
        example: { native: "심각한 가뭄으로 농작물 피해가 컸어요.", romanized: "Simgakhan gameumeuro nongjakmul pihaega keosseoyo.", translation: "Severe drought caused significant damage to crops." }
    },
    {
        id: "ko-v-b2-026", level: "B2", word: "재생에너지", romanized: "jaesaeng-eneoji",
        translation: "renewable energy", category: "environment & climate",
        example: { native: "정부는 재생에너지 확대 정책을 발표했습니다.", romanized: "Jeongbuneun jaesaeng-eneoji hwakdae jeongchaekeul balpyohaessseumnida.", translation: "The government announced a policy to expand renewable energy." }
    },
    {
        id: "ko-v-b2-027", level: "B2", word: "오염", romanized: "oyeom",
        translation: "pollution / contamination", category: "environment & climate",
        example: { native: "강의 오염 수준이 위험한 수준에 달했어요.", romanized: "Gang-ui oyeom sujuni wiheomhan sujune dalhaesseoyo.", translation: "The river's pollution level has reached a dangerous level." }
    },
    {
        id: "ko-v-b2-028", level: "B2", word: "생태계", romanized: "saengtagye",
        translation: "ecosystem", category: "environment & climate",
        example: { native: "해양 생태계가 플라스틱 쓰레기로 파괴되고 있어요.", romanized: "Haeyang saengtagye-ga peullaseutik sseuregiro pagwaedoego isseoyo.", translation: "The marine ecosystem is being destroyed by plastic waste." }
    },

    // ── Science & Technology (8) ───────────────────────────────────────────────
    {
        id: "ko-v-b2-029", level: "B2", word: "인공지능", romanized: "ingong-jineung",
        translation: "artificial intelligence (AI)", category: "science & technology",
        example: { native: "인공지능이 의료 분야에서 혁신을 이끌고 있어요.", romanized: "Ingong-jineungi uiryo bunyaeso hyeoksinul ikkeugo isseoyo.", translation: "Artificial intelligence is leading innovation in the medical field." }
    },
    {
        id: "ko-v-b2-030", level: "B2", word: "알고리즘", romanized: "algollijeum",
        translation: "algorithm", category: "science & technology",
        example: { native: "검색 알고리즘이 우리의 정보 소비에 영향을 줘요.", romanized: "Geomsaek algolijeum-i uriui jeongbo sobie yeonghyangeul jwoyo.", translation: "Search algorithms influence how we consume information." }
    },
    {
        id: "ko-v-b2-031", level: "B2", word: "혁신", romanized: "hyeoksin",
        translation: "innovation", category: "science & technology",
        example: { native: "기술 혁신이 산업 구조를 바꾸고 있습니다.", romanized: "Gisul hyeoksin-i saneop gujoреul bakkugo isseumnida.", translation: "Technological innovation is transforming industrial structures." }
    },
    {
        id: "ko-v-b2-032", level: "B2", word: "나노기술", romanized: "nano-gisul",
        translation: "nanotechnology", category: "science & technology",
        example: { native: "나노기술은 의학과 소재 개발에 활용됩니다.", romanized: "Nano-gisureun uihakgwa sojae gaebare hwargyongdoemnida.", translation: "Nanotechnology is used in medicine and material development." }
    },
    {
        id: "ko-v-b2-033", level: "B2", word: "연구", romanized: "yeongu",
        translation: "research / study", category: "science & technology",
        example: { native: "이 연구는 암 치료에 중요한 발견을 담고 있어요.", romanized: "I yeongeuneun am chiryo-e jungyohan balgyeoneul damgo isseoyo.", translation: "This research contains an important discovery for cancer treatment." }
    },
    {
        id: "ko-v-b2-034", level: "B2", word: "실험실", romanized: "silheomsil",
        translation: "laboratory", category: "science & technology",
        example: { native: "과학자들이 실험실에서 새로운 물질을 발견했어요.", romanized: "Gwahakjaduri silheomsil-eseo saeroun mulssireul balgyeonhaesseoyo.", translation: "Scientists discovered a new substance in the laboratory." }
    },
    {
        id: "ko-v-b2-035", level: "B2", word: "가설", romanized: "gaseol",
        translation: "hypothesis", category: "science & technology",
        example: { native: "연구팀이 새로운 가설을 제시했습니다.", romanized: "Yeongutimi saeroun gasereul jessihaessseumnida.", translation: "The research team presented a new hypothesis." }
    },
    {
        id: "ko-v-b2-036", level: "B2", word: "발견", romanized: "balgyeon",
        translation: "discovery / finding", category: "science & technology",
        example: { native: "이 발견은 과학계에 큰 파장을 일으켰어요.", romanized: "I balgyeoneun gwahakgye-e keun pajang-eul ireukkyeosseoyo.", translation: "This discovery caused a great stir in the scientific community." }
    },

    // ── Arts & Literature (8) ──────────────────────────────────────────────────
    {
        id: "ko-v-b2-037", level: "B2", word: "서사", romanized: "seosa",
        translation: "narrative / epic", category: "arts & literature",
        example: { native: "이 소설의 서사는 매우 복잡하고 흥미로워요.", romanized: "I soseoreui seosaneun maeu bokjaphago heungmirowoyo.", translation: "The narrative of this novel is very complex and interesting." }
    },
    {
        id: "ko-v-b2-038", level: "B2", word: "비유", romanized: "biyu",
        translation: "metaphor / analogy", category: "arts & literature",
        example: { native: "시인은 자연을 삶의 비유로 자주 사용해요.", romanized: "Siineun jayeoneul salmeui biyuro jaju sayonghaeyo.", translation: "Poets often use nature as a metaphor for life." }
    },
    {
        id: "ko-v-b2-039", level: "B2", word: "주인공", romanized: "juingong",
        translation: "protagonist / main character", category: "arts & literature",
        example: { native: "이 소설의 주인공은 복잡한 내면을 가진 인물이에요.", romanized: "I soseoreui juingong-eun bokjaphan naemyeoneul gajin inmuriyeyo.", translation: "The protagonist of this novel is a character with a complex inner world." }
    },
    {
        id: "ko-v-b2-040", level: "B2", word: "문학 장르", romanized: "munhak-jangreu",
        translation: "literary genre", category: "arts & literature",
        example: { native: "추리소설은 가장 인기 있는 문학 장르 중 하나예요.", romanized: "Churisoseoreun gajang ingi inneun munhak-jangreu jung hanayeyo.", translation: "Detective fiction is one of the most popular literary genres." }
    },
    {
        id: "ko-v-b2-041", level: "B2", word: "비평", romanized: "bipyeong",
        translation: "criticism / critique", category: "arts & literature",
        example: { native: "문학 비평가들이 그 작품을 높이 평가했어요.", romanized: "Munhak bipyeonggaduri geu jakpumeul nopi pyeonggahaesseoyo.", translation: "Literary critics gave the work a high evaluation." }
    },
    {
        id: "ko-v-b2-042", level: "B2", word: "전위", romanized: "jeon'wi",
        translation: "avant-garde", category: "arts & literature",
        example: { native: "그의 작품은 전위적 예술 운동의 일부였어요.", romanized: "Geuui jakpumeun jeon'wijeok yesul undong-ui ilbuyeosseoyo.", translation: "His work was part of the avant-garde art movement." }
    },
    {
        id: "ko-v-b2-043", level: "B2", word: "해석", romanized: "haesok",
        translation: "interpretation / analysis", category: "arts & literature",
        example: { native: "이 시의 해석은 독자마다 다를 수 있어요.", romanized: "I si-ui haesok-eun dokjamada dareul su isseoyo.", translation: "The interpretation of this poem can vary from reader to reader." }
    },
    {
        id: "ko-v-b2-044", level: "B2", word: "출판사", romanized: "chulpansa",
        translation: "publisher / publishing house", category: "arts & literature",
        example: { native: "유명 출판사에서 그의 첫 번째 소설을 출판했어요.", romanized: "Yumyeong chulpansa-eseo geuui cheot beonjjae soseoreul chulpanhaesseoyo.", translation: "A famous publishing house published his first novel." }
    },

    // ── Health & Medicine (8) ──────────────────────────────────────────────────
    {
        id: "ko-v-b2-045", level: "B2", word: "진단", romanized: "jindan",
        translation: "diagnosis", category: "health & medicine",
        example: { native: "의사가 정확한 진단을 내리는 데 시간이 걸렸어요.", romanized: "Uisaga jeongwakhan jindaneul naerineun de sigani geollyeosseoyo.", translation: "It took time for the doctor to make an accurate diagnosis." }
    },
    {
        id: "ko-v-b2-046", level: "B2", word: "치료", romanized: "chiryo",
        translation: "treatment / therapy", category: "health & medicine",
        example: { native: "새로운 치료법이 개발되어 환자들에게 희망을 주고 있어요.", romanized: "Saeroun chiryobeopi gaebaldoeo hwanjaduleg-e huimangeul jugo isseoyo.", translation: "A new treatment has been developed, giving hope to patients." }
    },
    {
        id: "ko-v-b2-047", level: "B2", word: "만성", romanized: "manseong",
        translation: "chronic", category: "health & medicine",
        example: { native: "만성 질환은 장기적인 관리가 필요해요.", romanized: "Manseong jilhwaneun janggijeogín gwalliga piryohaeyo.", translation: "Chronic diseases require long-term management." }
    },
    {
        id: "ko-v-b2-048", level: "B2", word: "증상", romanized: "jeungsang",
        translation: "symptom", category: "health & medicine",
        example: { native: "초기 증상을 무시하면 병이 악화될 수 있어요.", romanized: "Chogi jeungsangeul musihamyeon byeongi akwadoel su isseoyo.", translation: "Ignoring early symptoms can worsen the disease." }
    },
    {
        id: "ko-v-b2-049", level: "B2", word: "예방접종", romanized: "yebang-jeopjong",
        translation: "vaccination / immunization", category: "health & medicine",
        example: { native: "독감 예방접종을 매년 받는 것이 좋아요.", romanized: "Dokgam yebang-jeopjongeul maenyeon badneun geosi joayo.", translation: "It is good to get a flu vaccination every year." }
    },
    {
        id: "ko-v-b2-050", level: "B2", word: "유행병", romanized: "yuhaengbyeong",
        translation: "epidemic / pandemic", category: "health & medicine",
        example: { native: "전 세계적인 유행병은 의료 체계를 시험에 들게 했어요.", romanized: "Jeon segyejeogín yuhaengbyeongeun uiryo chegyereul siheom-e deulge haesseoyo.", translation: "A worldwide epidemic put the healthcare system to the test." }
    },
    {
        id: "ko-v-b2-051", level: "B2", word: "정신 건강", romanized: "jeongsin-geongang",
        translation: "mental health", category: "health & medicine",
        example: { native: "정신 건강도 신체 건강만큼 중요해요.", romanized: "Jeongsin-geongang-do sinche geongang-mankeum jungyohaeyo.", translation: "Mental health is just as important as physical health." }
    },
    {
        id: "ko-v-b2-052", level: "B2", word: "행복감", romanized: "haengbokkam",
        translation: "sense of well-being / happiness", category: "health & medicine",
        example: { native: "규칙적인 운동이 행복감을 높여 준다고 알려져 있어요.", romanized: "Gyuchikjeogin undong-i haengbokkameul nopyeo jundago allyeojyeo isseoyo.", translation: "Regular exercise is known to enhance the sense of well-being." }
    },

    // ── Law & Rights (8) ──────────────────────────────────────────────────────
    {
        id: "ko-v-b2-053", level: "B2", word: "인권", romanized: "inkwon",
        translation: "human rights", category: "law & rights",
        example: { native: "인권 침해에 맞서 싸우는 것이 중요합니다.", romanized: "Inkwon chimhae-e matseo ssauneun geosi jungyohamnida.", translation: "It is important to fight against human rights violations." }
    },
    {
        id: "ko-v-b2-054", level: "B2", word: "법적", romanized: "beopjeok",
        translation: "legal / juridical", category: "law & rights",
        example: { native: "법적 절차에 따라 문제를 해결해야 해요.", romanized: "Beopjeok jeolcha-e ttara munjereul haegyeolhaeya haeyo.", translation: "You need to resolve the issue following legal procedures." }
    },
    {
        id: "ko-v-b2-055", level: "B2", word: "법원", romanized: "beopwon",
        translation: "court (of law)", category: "law & rights",
        example: { native: "법원은 공정한 판결을 내려야 합니다.", romanized: "Beopwoneun gongjeonhan pangyeoreul naeryeoha hamnida.", translation: "Courts must deliver fair judgments." }
    },
    {
        id: "ko-v-b2-056", level: "B2", word: "피고인", romanized: "pigoin",
        translation: "defendant / accused", category: "law & rights",
        example: { native: "피고인은 재판에서 자신을 변호할 권리가 있어요.", romanized: "Pigoin-eun jaepan-eseo jasineul byeonhohal gwonri-ga isseoyo.", translation: "The defendant has the right to defend themselves in court." }
    },
    {
        id: "ko-v-b2-057", level: "B2", word: "판결", romanized: "pangyeol",
        translation: "verdict / judgment", category: "law & rights",
        example: { native: "법원의 판결에 불복하여 항소를 제기했어요.", romanized: "Beopwoneui pangyeore bulbokhayeo hangso-reul jegihaeisseoyo.", translation: "They appealed against the court's verdict." }
    },
    {
        id: "ko-v-b2-058", level: "B2", word: "법적 구제", romanized: "beopjeok-guje",
        translation: "legal remedy", category: "law & rights",
        example: { native: "피해자는 법적 구제를 요청할 수 있습니다.", romanized: "Pihaejaneun beopjeok-gujereul yocheonghal su isseumnida.", translation: "The victim may request a legal remedy." }
    },
    {
        id: "ko-v-b2-059", level: "B2", word: "평등", romanized: "pyeongdeung",
        translation: "equality", category: "law & rights",
        example: { native: "모든 사람은 법 앞에서 평등합니다.", romanized: "Modeun sarameun beop ap-eseo pyeongdeunghamnida.", translation: "All people are equal before the law." }
    },
    {
        id: "ko-v-b2-060", level: "B2", word: "차별", romanized: "chabyeol",
        translation: "discrimination", category: "law & rights",
        example: { native: "직장 내 차별은 법으로 금지되어 있어요.", romanized: "Jikjang nae chabyeoreun beobeuro geumjidoeo isseoyo.", translation: "Workplace discrimination is prohibited by law." }
    },

    // ── Abstract & Philosophical (8) ───────────────────────────────────────────
    {
        id: "ko-v-b2-061", level: "B2", word: "윤리", romanized: "yulli",
        translation: "ethics / morality", category: "abstract & philosophical",
        example: { native: "인공지능 개발에는 윤리적 고려가 필요해요.", romanized: "Ingong-jineung gaebare-neun yullijeok goryeo-ga piryohaeyo.", translation: "Ethical consideration is needed in the development of AI." }
    },
    {
        id: "ko-v-b2-062", level: "B2", word: "주관적", romanized: "juganjeok",
        translation: "subjective", category: "abstract & philosophical",
        example: { native: "예술 작품에 대한 평가는 주관적일 수 있어요.", romanized: "Yesul jakpume daehan pyeongganneun juganjeogil su isseoyo.", translation: "Evaluations of artworks can be subjective." }
    },
    {
        id: "ko-v-b2-063", level: "B2", word: "인식", romanized: "insik",
        translation: "perception / awareness / cognition", category: "abstract & philosophical",
        example: { native: "환경 문제에 대한 사회적 인식이 높아지고 있어요.", romanized: "Hwangyeong munje-e daehan sahoejok insiği nopajigo isseoyo.", translation: "Social awareness of environmental issues is growing." }
    },
    {
        id: "ko-v-b2-064", level: "B2", word: "이데올로기", romanized: "ideoollogi",
        translation: "ideology", category: "abstract & philosophical",
        example: { native: "정치적 이데올로기가 정책 결정에 영향을 줍니다.", romanized: "Jeongchijeok ideoolloğiga jeongchaek gyeoljeong-e yeonghyangeul jumnida.", translation: "Political ideology influences policy decisions." }
    },
    {
        id: "ko-v-b2-065", level: "B2", word: "패러다임", romanized: "paerodaim",
        translation: "paradigm", category: "abstract & philosophical",
        example: { native: "디지털 혁명은 산업의 패러다임을 바꿔 놓았어요.", romanized: "Dijiteol hyeongmyeong-eun saneop-ui paerodarmeul bakkwo notasseoyo.", translation: "The digital revolution changed the industrial paradigm." }
    },
    {
        id: "ko-v-b2-066", level: "B2", word: "원칙", romanized: "wonchik",
        translation: "principle", category: "abstract & philosophical",
        example: { native: "그 회사는 투명성의 원칙을 지킵니다.", romanized: "Geu hoesaneun tumyeongseong-ui wonchigeul jikipnida.", translation: "The company adheres to the principle of transparency." }
    },
    {
        id: "ko-v-b2-067", level: "B2", word: "추상", romanized: "chusang",
        translation: "abstraction / abstract (concept)", category: "abstract & philosophical",
        example: { native: "자유는 매우 추상적인 개념이에요.", romanized: "Jayuneun maeu chusangjeogín gaenyeomieyeo.", translation: "Freedom is a very abstract concept." }
    },
    {
        id: "ko-v-b2-068", level: "B2", word: "딜레마", romanized: "dilllema",
        translation: "dilemma", category: "abstract & philosophical",
        example: { native: "그는 도덕적 딜레마에 빠졌어요.", romanized: "Geuneun dodeokjeok dillema-e ppajyeosseoyo.", translation: "He fell into a moral dilemma." }
    },

    // ── Formal Academic Connectors (6) ─────────────────────────────────────────
    {
        id: "ko-v-b2-069", level: "B2", word: "따라서", romanized: "ttaraseo",
        translation: "therefore / consequently", category: "formal academic connectors",
        example: { native: "데이터가 부족합니다. 따라서 결론을 내리기 어렵습니다.", romanized: "Deiteo-ga bujokamnida. Ttaraseo gyeolloneul naerigi eoryeopseumnida.", translation: "The data is insufficient. Therefore, it is difficult to draw conclusions." }
    },
    {
        id: "ko-v-b2-070", level: "B2", word: "그럼에도 불구하고", romanized: "geureomedo-bulgugago",
        translation: "nevertheless / in spite of that", category: "formal academic connectors",
        example: { native: "많은 어려움이 있었습니다. 그럼에도 불구하고 목표를 달성했어요.", romanized: "Maneun eoryeoumi isseossseumnida. Geureomedo bulgugago mokpyoreul dalseonghaesseoyo.", translation: "There were many difficulties. Nevertheless, they achieved their goal." }
    },
    {
        id: "ko-v-b2-071", level: "B2", word: "주목할 점은", romanized: "jumokhal-jeomeun",
        translation: "it is noteworthy that / notably", category: "formal academic connectors",
        example: { native: "주목할 점은 두 집단 간의 차이가 매우 크다는 것입니다.", romanized: "Jumokhal jeomeun du jipdan gan-eui chai-ga maeu keudaneun geosimnida.", translation: "It is noteworthy that the difference between the two groups is very large." }
    },
    {
        id: "ko-v-b2-072", level: "B2", word: "에 관하여", romanized: "e-gwanhayeo",
        translation: "regarding / concerning", category: "formal academic connectors",
        example: { native: "이 보고서는 기후변화에 관하여 심층적으로 다루고 있습니다.", romanized: "I bogoseoneun gihu-byeonhwa-e gwanhayeo simseujeogíneuro darugo isseumnida.", translation: "This report deals in depth with regard to climate change." }
    },
    {
        id: "ko-v-b2-073", level: "B2", word: "비록...지라도", romanized: "birog...jirado",
        translation: "even though / although (concessive)", category: "formal academic connectors",
        example: { native: "비록 결과가 좋지 않았을지라도 최선을 다했습니다.", romanized: "Birog gyeolgwa-ga jochi anasseuljirado choeseoneul dahaessseumnida.", translation: "Even though the result was not good, we did our best." }
    },
    {
        id: "ko-v-b2-074", level: "B2", word: "마찬가지로", romanized: "machang-ajiro",
        translation: "likewise / similarly", category: "formal academic connectors",
        example: { native: "첫 번째 실험과 마찬가지로 두 번째 실험도 실패했어요.", romanized: "Cheot beonjjae silheomgwa machan-gajiro du beonjjae silheomdo silpaehaesseoyo.", translation: "Similarly to the first experiment, the second experiment also failed." }
    },

    // ── Complex Emotions (6) ───────────────────────────────────────────────────
    {
        id: "ko-v-b2-075", level: "B2", word: "후회", romanized: "huhoe",
        translation: "regret", category: "complex emotions",
        example: { native: "그 결정을 후회하지 않아요.", romanized: "Geu gyeoljeong-eul huhoehai anayo.", translation: "I don't regret that decision." }
    },
    {
        id: "ko-v-b2-076", level: "B2", word: "회복력", romanized: "hoebongnyeok",
        translation: "resilience", category: "complex emotions",
        example: { native: "그녀는 뛰어난 회복력으로 어려움을 극복했어요.", romanized: "Geunyeoneun ttwieoran hoebongnyeogeuro eoryeoumul geukbokhaesseoyo.", translation: "She overcame difficulties with outstanding resilience." }
    },
    {
        id: "ko-v-b2-077", level: "B2", word: "공감", romanized: "gonggam",
        translation: "empathy", category: "complex emotions",
        example: { native: "공감 능력은 좋은 인간 관계의 기초예요.", romanized: "Gonggam neungnyeogeun joeun ingan gwangye-ui gicho-yeyo.", translation: "The ability to empathize is the foundation of good human relationships." }
    },
    {
        id: "ko-v-b2-078", level: "B2", word: "향수", romanized: "hyangsu",
        translation: "nostalgia", category: "complex emotions",
        example: { native: "고향의 냄새를 맡으면 향수가 느껴져요.", romanized: "Gohyang-ui naemse-reul matgeumyeon hyangsu-ga neukkyeojyeoyo.", translation: "When I smell the scent of my hometown, I feel nostalgia." }
    },
    {
        id: "ko-v-b2-079", level: "B2", word: "복잡한 감정", romanized: "bokjapan-gamjeong",
        translation: "mixed / complex feelings", category: "complex emotions",
        example: { native: "졸업식에서 복잡한 감정을 느꼈어요.", romanized: "Joreopsik-eseo bokjapan gamjeong-eul neukkyeosseoyo.", translation: "I felt mixed emotions at the graduation ceremony." }
    },
    {
        id: "ko-v-b2-080", level: "B2", word: "좌절", romanized: "jwajol",
        translation: "frustration / setback", category: "complex emotions",
        example: { native: "반복되는 좌절에도 포기하지 않는 것이 중요해요.", romanized: "Banbokdoeneun jwajol-edo pogihaji anneun geosi jungyohaeyo.", translation: "It is important not to give up despite repeated frustration." }
    },
    { id: "ko-v-b2-081", level: "B2", word: "~ㄹ 수밖에 없다", romanized: "~l subakke eopda", translation: "have no choice but to / inevitably", category: "abstract concepts", example: { native: "이 상황에서는 포기할 수밖에 없었어요.", romanized: "I sangwangeseseo pogigal subakke eopseosseoyo.", translation: "In this situation, there was no choice but to give up." } },
    { id: "ko-v-b2-082", level: "B2", word: "~(으)ㄹ지라도", romanized: "~(eu)ljirado", translation: "even if / even though (formal concessive)", category: "abstract concepts", example: { native: "어려울지라도 포기하지 않겠습니다.", romanized: "Eoryeoul jirado pogihaji anketseumnida.", translation: "Even if it is difficult, I will not give up." } },
    { id: "ko-v-b2-083", level: "B2", word: "-(으)므로", romanized: "-(eu)meuro", translation: "therefore / since (formal written causal)", category: "formal academic connectors", example: { native: "자원이 한정되어 있으므로, 우선순위를 정해야 합니다.", romanized: "Jaguoni hanjeonghaeisseumeuro, useons umwireul jeonghaeya hamnida.", translation: "Since resources are limited, priorities must be set." } },
    { id: "ko-v-b2-084", level: "B2", word: "따라서", romanized: "ttaraseo", translation: "therefore / accordingly (formal)", category: "formal academic connectors", example: { native: "데이터가 불충분합니다. 따라서 결론을 내릴 수 없습니다.", romanized: "Deitaga bulchungbunhamnida. Ttaraseo gyeollon eul naerril su eopseumnida.", translation: "The data is insufficient. Therefore, no conclusion can be drawn." } },
    { id: "ko-v-b2-085", level: "B2", word: "반면에", romanized: "banmyeone", translation: "on the other hand / whereas (formal)", category: "formal academic connectors", example: { native: "도시는 발전했다. 반면에, 농촌은 쇠퇴했다.", romanized: "Dosineun baljeonhaetda. Banmyeone, nongchoneun soetwehaetda.", translation: "Cities developed. On the other hand, rural areas declined." } },
    { id: "ko-v-b2-086", level: "B2", word: "성함", romanized: "seonham", translation: "name (honorific noun for 이름)", category: "social interactions", example: { native: "성함이 어떻게 되세요?", romanized: "Seonghami eotteoke doeseyo?", translation: "What is your name? (respectful)" } },
    { id: "ko-v-b2-087", level: "B2", word: "연세", romanized: "yeonse", translation: "age (honorific noun for 나이)", category: "social interactions", example: { native: "연세가 어떻게 되세요?", romanized: "Yeonsega eotteoke doeseyo?", translation: "How old are you? (respectful)" } },
    { id: "ko-v-b2-088", level: "B2", word: "댁", romanized: "daek", translation: "home / house (honorific noun for 집)", category: "social interactions", example: { native: "어느 댁에서 오셨어요?", romanized: "Eoneu daekeseo osyeosseoyo?", translation: "Where are you from? (respectful, literally: from which home)" } },
    { id: "ko-v-b2-089", level: "B2", word: "말씀", romanized: "malsseum", translation: "words / speech (honorific/humble noun for 말)", category: "social interactions", example: { native: "말씀 드릴 것이 있습니다.", romanized: "Malsseum deuril geosi itseumnida.", translation: "I have something to tell you. (humble)" } },
    { id: "ko-v-b2-090", level: "B2", word: "나아가", romanized: "naaga", translation: "furthermore / going one step further (formal)", category: "formal academic connectors", example: { native: "이 정책은 효과적이다. 나아가, 비용도 절약할 수 있다.", romanized: "I jeongsaeg eun hyogwajeogiida. Naaga, biyongdo jeollyakhal su itda.", translation: "This policy is effective. Furthermore, costs can also be saved." } },
    { id: "ko-v-b2-091", level: "B2", word: "즉", romanized: "jeuk", translation: "namely / in other words / that is (formal)", category: "formal academic connectors", example: { native: "이 현상의 원인, 즉 사회적 불평등에 대해 논의해야 한다.", romanized: "I hyeonsang ui wonin, jeuk sahoejeogeul bulpyeongdeunge daehae noneuihaeya handa.", translation: "The cause of this phenomenon, namely social inequality, must be discussed." } },
    { id: "ko-v-b2-092", level: "B2", word: "이에 따라", romanized: "ie ttara", translation: "accordingly / in accordance with this", category: "formal academic connectors", example: { native: "새 지침이 발표되었다. 이에 따라, 모든 절차가 변경될 것이다.", romanized: "Sae jichim i balpyodoeotda. Ie ttara, modeun jeolcha ga byeongyeongdoel geotida.", translation: "New guidelines were announced. Accordingly, all procedures will be changed." } },

    // ── -(으)므로 Formal Causal Contexts ──────────────────────────────────────
    { id: "ko-v-b2-093", level: "B2", word: "일반화하다", romanized: "ilbanhwahada", translation: "to generalise", category: "formal academic connectors", example: { native: "표본이 충분하지 않으므로 결과를 일반화하기 어렵다.", romanized: "Pyoboni chungbunhaji aneulmuro gyeolgwareul ilbanhwahagi eoryeopda.", translation: "Since the sample is insufficient, it is difficult to generalise the results." } },
    { id: "ko-v-b2-094", level: "B2", word: "표본", romanized: "pyobon", translation: "sample / specimen (research)", category: "formal academic connectors", example: { native: "이 연구의 표본 수가 너무 작으므로 신뢰성이 낮다.", romanized: "I yeonguui pyobon suga neomu jageulmuro sinloeseong-i natta.", translation: "Since the sample size of this study is too small, its reliability is low." } },
    { id: "ko-v-b2-095", level: "B2", word: "적용되다", romanized: "jeogyongdoeda", translation: "to apply / to be applicable", category: "formal academic connectors", example: { native: "이 규정은 모든 직원에게 적용되므로 예외는 없습니다.", romanized: "I gyujeong-eun modeun jigwonege jeogyongdoemeulog yewoineun eopseumnida.", translation: "Since this regulation applies to all employees, there are no exceptions." } },

    // ── -(으)ㅁ Formal Nominalisation ─────────────────────────────────────────
    { id: "ko-v-b2-096", level: "B2", word: "삶", romanized: "sam", translation: "life / living (lexicalised -(으)ㅁ form of 살다)", category: "abstract concepts", example: { native: "삶이란 끊임없는 선택의 연속이다.", romanized: "Sami-ran kkeun-im-eomneun seonteagui yeonsogida.", translation: "Life is an unending series of choices." } },
    { id: "ko-v-b2-097", level: "B2", word: "죽음", romanized: "jugeum", translation: "death (lexicalised -(으)ㅁ form of 죽다)", category: "abstract concepts", example: { native: "그의 죽음은 많은 이들에게 큰 충격이었다.", romanized: "Geuui jugeumeon manheun ideulege keun chungg-yeogieotda.", translation: "His death was a great shock to many people." } },
    { id: "ko-v-b2-098", level: "B2", word: "믿음", romanized: "mideum", translation: "trust / faith / belief (lexicalised -(으)ㅁ form of 믿다)", category: "abstract concepts", example: { native: "상호 믿음이 좋은 관계의 기초가 됩니다.", romanized: "Sangho mideumi joh-eun gwangyeui gicho-ga doemnida.", translation: "Mutual trust is the foundation of a good relationship." } },
    { id: "ko-v-b2-099", level: "B2", word: "앎", romanized: "am", translation: "knowledge / the act of knowing (lexicalised -(으)ㅁ form of 알다)", category: "abstract concepts", example: { native: "앎이란 단순한 암기가 아니라 이해이다.", romanized: "Ami-ran dansunhan amgiga anira ihaeda.", translation: "Knowledge is not mere memorisation but understanding." } },

    // ── ~에 따라 / ~한편 / ~반면에 Academic Discourse ──────────────────────────
    { id: "ko-v-b2-100", level: "B2", word: "한편", romanized: "hanpyeon", translation: "on the other hand / meanwhile / at the same time", category: "formal academic connectors", example: { native: "경제는 성장하고 있다. 한편, 사회적 불평등은 심화되고 있다.", romanized: "Gyeongje-neun seongjang-hago itda. Hanpyeon, sahoejok bulpyeongdeung-eun simwadoego itda.", translation: "The economy is growing. On the other hand, social inequality is deepening." } },
    { id: "ko-v-b2-101", level: "B2", word: "출산율", romanized: "chulsannyul", translation: "birth rate / fertility rate", category: "formal academic connectors", example: { native: "전문가에 따르면, 출산율 저하는 심각한 사회 문제이다.", romanized: "Jeonmunga e ttareumyeon, chulsannyul jeoha-neun simgaghan sahoe munjeda.", translation: "According to experts, the declining birth rate is a serious social problem." } },
    { id: "ko-v-b2-102", level: "B2", word: "심화되다", romanized: "simwadoeda", translation: "to deepen / to intensify / to worsen", category: "formal academic connectors", example: { native: "경제 위기로 인해 빈곤이 더욱 심화되고 있는 반면에, 부유층은 더 부유해졌다.", romanized: "Gyeongje wigi-ro inhae bingoni deo-uk simwadoego itneun banmyeon-e, buyucheung-eun deo buyuhaejyeotsda.", translation: "While poverty is deepening further due to the economic crisis, the wealthy have become even richer." } },

    // ── 사동사 Causative Verb Pairs ────────────────────────────────────────────
    { id: "ko-v-b2-103", level: "B2", word: "먹이다", romanized: "meogyida", translation: "to feed / to make (someone) eat (causative of 먹다)", category: "causative verbs", example: { native: "엄마가 아이에게 이유식을 먹였어요.", romanized: "Eomma ga ai ege iyusig-eul meogyeosseoyo.", translation: "The mother fed the baby food to the child." } },
    { id: "ko-v-b2-104", level: "B2", word: "입히다", romanized: "ipida", translation: "to dress (someone) / to make (someone) wear (causative of 입다)", category: "causative verbs", example: { native: "부모님이 아이에게 교복을 입히셨어요.", romanized: "Bumonimi ai ege gyobogeul ipiseosseoyo.", translation: "The parents dressed the child in a school uniform." } },
    { id: "ko-v-b2-105", level: "B2", word: "앉히다", romanized: "anjida", translation: "to seat (someone) / to make (someone) sit (causative of 앉다)", category: "causative verbs", example: { native: "안내원이 손님들을 좌석에 앉혔어요.", romanized: "Annaewoni sonnimdeureul jwaseogeul anjeosseoyo.", translation: "The usher seated the guests at their seats." } },
    { id: "ko-v-b2-106", level: "B2", word: "웃기다", romanized: "utgida", translation: "to make (someone) laugh (causative of 웃다)", category: "causative verbs", example: { native: "그 코미디언은 항상 관객을 웃겨요.", romanized: "Geu komidieon-eun hangsang gwanggeogeul utgyeoyo.", translation: "That comedian always makes the audience laugh." } },

    // ── TOPIK II Essay Connectors ──────────────────────────────────────────────
    { id: "ko-v-b2-107", level: "B2", word: "이로 인해", romanized: "iro inhae", translation: "as a result of this / due to this", category: "abstract concepts", example: { native: "기온이 급상승하였다. 이로 인해 해수면이 높아지고 있다.", romanized: "Gion-i geupssangseuphayeotsda. Iro inhae haesu-myeon-i nop-ajigo itda.", translation: "Temperatures have risen sharply. As a result of this, sea levels are rising." } },
    { id: "ko-v-b2-108", level: "B2", word: "이에 따라", romanized: "ie ttara", translation: "accordingly / in response to this / in line with this", category: "abstract concepts", example: { native: "새 환경 규정이 도입되었다. 이에 따라 기업들은 생산 방식을 바꿔야 한다.", romanized: "Sae hwangyeong gyujeong-i doip-doeeotda. Ie ttara gieopdeurun saengsan bangsigeul bakkwoya handa.", translation: "New environmental regulations have been introduced. Accordingly, companies must change their production methods." } },
    { id: "ko-v-b2-109", level: "B2", word: "이러한 점에서", romanized: "ireohan jeom-eseo", translation: "from this perspective / in this regard / in light of this", category: "abstract concepts", example: { native: "이러한 점에서 교육 투자는 장기적인 경제 성장의 핵심이라 할 수 있다.", romanized: "Ireohan jeom-eseo gyoyuk tujaneun janggijeog-in gyeongje seongjang-ui haeksimirada hal su itda.", translation: "From this perspective, investment in education can be said to be the core of long-term economic growth." } },
    { id: "ko-v-b2-110", level: "B2", word: "결론적으로", romanized: "gyeollon-jeogeuro", translation: "in conclusion / to conclude", category: "abstract concepts", example: { native: "결론적으로, 이 문제는 개인과 사회가 함께 해결해야 할 과제이다.", romanized: "Gyeollon-jeogeuro, i munjeneun gaein-gwa sahoe-ga hamkke haegyeolhaeya hal gwajeeda.", translation: "In conclusion, this problem is a challenge that individuals and society must solve together." } },
    { id: "ko-v-b2-111", level: "B2", word: "다시 말해", romanized: "dasi malhae", translation: "in other words / put differently", category: "abstract concepts", example: { native: "경제 성장이 멈췄다. 다시 말해, 국민의 생활 수준이 나아지지 않고 있다는 것이다.", romanized: "Gyeongje seongjang-i meomchweotsda. Dasi malhae, gungmin-ui saenghwal sujeun-i naajiji anko ittaneun geosida.", translation: "Economic growth has stalled. In other words, the standard of living of citizens is not improving." } }
]
