export interface Trek {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  gallery: string[];
  altitude: string;
  altitudeFt: number;
  duration: string;
  durationDays: number;
  difficulty: string;
  difficultyLevel: 'easy' | 'moderate' | 'difficult';
  bestSeason: string;
  price: number;
  location: string;
  overview: string | string[];
  highlights: string[];
  startPoint: string;
  endPoint: string;
  totalDistance: string;
  ageLimit: string;
  groupSize: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  altitudeProfile?: {
    name: string;
    altitude: string;
  }[];
  localCulture?: string[];
  majorPeaks?: string[];
  floraFauna?: {
    trees: string[];
    wildlife: string[];
  };
  closingSummary?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  distance?: string;
  duration?: string;
  highlight?: boolean;
}

export const treks: Trek[] = [
  {
    id: 'gomukh-tapovan',
    slug: 'gomukh-tapovan',
    name: 'GoMukh Tapovan Trek',
    shortName: 'GoMukh Tapovan',
    tagline: 'Walk to the Source of the Ganges',
    image: '/trek-gomukh.jpg',
    gallery: ['/trek-gomukh.jpg', '/trek-tapovan.jpg', '/gallery-summit.jpg', '/gallery-camping.jpg'],
    altitude: '14,600 ft',
    altitudeFt: 14600,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Moderate',
    difficultyLevel: 'moderate',
    bestSeason: 'May - Jun, Sep - Oct',
    price: 13000,
    location: 'Uttarkashi, Uttarakhand',
    overview: 'The GoMukh Tapovan Trek is one of the most rewarding Himalayan pilgrimages for trekkers. Leading to the snout of the Gangotri Glacier — the source of the mighty River Ganges — and the sacred meadows of Tapovan, this trek offers a perfect blend of spirituality and adventure. You will traverse ancient pilgrim trails, cross the mesmerizing Gangotri National Park, camp beside the Bhagirathi River, and witness the majestic Shivling Peak up close from the high-altitude meadows of Tapovan.',
    highlights: [
      'Witness the Gangotri Glacier snout, the origin of the Ganges',
      'Camp at the sacred high-altitude meadows of Tapovan',
      'Panoramic views of Bhagirathi peaks and Shivling',
      'Traverse through Gangotri National Park',
      'Visit the ancient Gangotri Temple'
    ],
    startPoint: 'Gangotri',
    endPoint: 'Gangotri',
    totalDistance: '46 km',
    ageLimit: '12+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      { day: 1, title: 'Arrival at Gangotri (10,200 ft)', description: 'Arrive at Gangotri, one of the Char Dham pilgrimage sites. Acclimatization walk to the Gangotri Temple. Evening briefing and gear check.' },
      { day: 2, title: 'Gangotri to Chirbasa (11,800 ft)', description: 'Trek alongside the roaring Bhagirathi River through pine forests. 9 km gradual ascent. Camp at Chirbasa with views of the Bhagirathi peaks.', highlight: true },
      { day: 3, title: 'Chirbasa to Bhojbasa (12,500 ft)', description: 'Continue along the river through birch forests. Visit the ancient Bhagirathi Sisters peaks. 5 km trek to Bhojbasa, the last inhabited place before the glacier.', highlight: true },
      { day: 4, title: 'Bhojbasa to Tapovan via GoMukh (14,600 ft)', description: 'Early morning trek to GoMukh, the snout of the Gangotri Glacier. Continue the steep ascent to Tapovan meadows. Witness Shivling Peak up close. This is the summit day of the trek.', highlight: true },
      { day: 5, title: 'Tapovan to Bhojbasa', description: 'Morning photography session at Tapovan with sunrise views. Descend back to Bhojbasa through the same route. Relax by the river in the evening.' },
      { day: 6, title: 'Bhojbasa to Gangotri & Departure', description: 'Trek back to Gangotri. Visit the temple for blessings. Depart for your onward journey with memories of a lifetime.', highlight: true }
    ],
    included: [
      'Experienced trek leader and support staff',
      'All camping equipment (tents, sleeping bags)',
      'Nutritious vegetarian meals throughout the trek',
      'Forest permits and entry fees',
      'Basic medical kit and oxygen cylinder',
      'Transport from Dehradun to Gangotri (return)'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear (shoes, jacket)',
      'Emergency evacuation costs',
      'Anything not mentioned in inclusions'
    ]
  },
  {
    id: 'kedarkantha',
    slug: 'kedarkantha',
    name: 'Kedarkantha Trek',
    shortName: 'Kedarkantha',
    tagline: 'Beginner-Friendly Winter Summit Trek',
    image: '/trek-kedarkantha-new1.jpeg',
    gallery: [
      '/trek-kedarkantha-new1.jpeg',
      '/trek-kedarkantha-new2.jpeg',
      '/trek-kedarkantha-new3.jpeg',
      '/trek-kedarkantha-new4.jpeg',
      '/trek-kedarkantha-new5.jpeg',
      '/trek-kedarkantha-new6.jpeg',
      '/trek-kedarkantha-new7.jpeg',
      '/trek-kedarkantha-new8.jpeg',
      '/trek-kedarkantha-new9.jpeg',
      '/trek-kedarkantha-new10.jpeg',
      '/trek-kedarkantha-new11.jpeg',
      '/trek-kedarkantha-new12.jpeg'
    ],
    altitude: '12,500 ft',
    altitudeFt: 12500,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Dec - Apr',
    price: 12999,
    location: 'Uttarkashi, Uttarakhand',
    overview: [
      'The Kedarkantha Trek is one of Uttarakhand\'s most loved winter summit treks, starting from the beautiful mountain village of Sankri in the Govind Wildlife Sanctuary region. Known for dependable snow, forested trails, and a rewarding summit climb, the route gives beginners a true Himalayan expedition feel without becoming overly technical. From Sankri, the trail gradually rises through quiet villages, pine-scented forests, frozen clearings, and open snowfields before reaching the summit ridge.',
      'The trek is especially famous for Juda Ka Talab, a serene high-altitude lake surrounded by deodar, pine, oak, and rhododendron forests. In winter, this campsite often turns into a snow-covered amphitheatre, while higher sections open into wide views of Swargarohini, Bandarpoonch, Black Peak, Ranglana, and the surrounding Garhwal ranges. The summit morning is the highlight: trekkers begin before dawn, climb under a starlit sky, and reach the top in time for one of the finest sunrise panoramas in the region.',
      'With a maximum altitude of 12,500 ft and a total trekking distance of around 20 km, Kedarkantha balances accessibility with a strong sense of achievement. The loop-style descent through Hargaon keeps the experience fresh, and the well-paced itinerary allows time for acclimatization, snow walking, photography, and campsite life. It is an excellent choice for first-time Himalayan trekkers, families with good fitness, and anyone looking for a classic snow trek from December to April.'
    ],
    highlights: [
      'Summit Kedarkantha Peak at 12,500 ft with spectacular sunrise views',
      'Camp near the frozen Juda Ka Talab lake surrounded by winter forests',
      'Beginner-friendly trail with a genuine Himalayan summit experience',
      'Walk through deodar, pine, oak, and rhododendron forest sections',
      'Panoramic views of Swargarohini, Bandarpoonch, Black Peak, and Ranglana',
      'Loop-style descent via Hargaon for varied scenery on the return'
    ],
    startPoint: 'Sankri',
    endPoint: 'Sankri',
    totalDistance: '20 km',
    ageLimit: '8+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri (6,400 ft)',
        description: 'Begin with a scenic mountain drive from Dehradun to Sankri, passing through the Tons Valley, Purola, Mori, and pine-covered Himalayan villages. On arrival, settle into the guesthouse, meet the trek leader, complete the briefing, and prepare your layers and snow gear for the trail ahead.',
        distance: '~200 km drive',
        duration: '8-10 hours'
      },
      {
        day: 2,
        title: 'Sankri to Juda Ka Talab (9,100 ft)',
        description: 'Start trekking from Sankri through dense pine, oak, and deodar forests. The trail climbs steadily through clearings, wooden huts, and snow patches in winter before reaching Juda Ka Talab, a beautiful campsite near a high-altitude lake that often freezes during peak snow season.',
        distance: '4-5 km trek',
        duration: '4-5 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Kedarkantha Base Camp (11,250 ft)',
        description: 'Continue through forested slopes and open snowfields toward Kedarkantha Base Camp. As the tree line begins to thin, the views expand dramatically, revealing surrounding Garhwal peaks. Spend the evening acclimatizing, photographing the mountain skyline, and preparing for the summit push.',
        distance: '4 km trek',
        duration: '3-4 hours',
        highlight: true
      },
      {
        day: 4,
        title: 'Base Camp to Kedarkantha Summit to Hargaon (12,500 ft)',
        description: 'Leave before sunrise for the summit climb. The ascent is steady and snowy, with the final ridge opening into a grand 360-degree Himalayan panorama. Watch the first light touch Swargarohini, Bandarpoonch, Black Peak, and nearby ranges, then descend carefully to Hargaon campsite at around 8,900 ft.',
        distance: '6 km trek',
        duration: '6-7 hours',
        highlight: true
      },
      {
        day: 5,
        title: 'Hargaon to Sankri',
        description: 'Descend through quiet forest trails, passing snow-covered clearings, oak stands, and pine sections as you return toward Sankri. The trail eases gradually into the village, where the trek ends with warm food, team celebrations, and time to rest after the summit effort.',
        distance: '5-6 km trek',
        duration: '3-4 hours'
      },
      {
        day: 6,
        title: 'Sankri to Dehradun',
        description: 'After breakfast, drive back to Dehradun through the same scenic valley route. The journey closes with views of terraced hills, river bends, and mountain towns before reaching Dehradun by evening.',
        distance: '~200 km drive',
        duration: '8-10 hours',
        highlight: true
      }
    ],
    included: [
      'Experienced trek leader and support staff',
      'All camping equipment including tents and sleeping bags',
      'Nutritious vegetarian meals during the trek',
      'Forest permits and entry fees',
      'Basic medical kit and oxygen support',
      'Transportation from Dehradun to Sankri and return if included in package',
      'Accommodation in Sankri and campsites during the trek'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, jackets, and gloves',
      'Emergency evacuation costs',
      'Porter or mule charges for personal luggage',
      'Any additional items not mentioned in inclusions'
    ],
    floraFauna: {
      trees: [
        'Deodar cedar',
        'Himalayan pine',
        'Oak',
        'Rhododendron (Buransh)',
        'Maple',
        'Silver fir'
      ],
      wildlife: [
        'Himalayan Monal',
        'Barking Deer',
        'Langur',
        'Himalayan Fox',
        'Koklass pheasant',
        'Woodpeckers and other high-altitude mountain birds'
      ]
    },
    closingSummary: 'Kedarkantha is special because it offers a complete Himalayan winter experience in a compact, beginner-friendly format: deep forests, snow camps, a real summit climb, and unforgettable sunrise views from 12,500 ft. It is best suited for first-time trekkers, fit beginners, families, photographers, and winter adventure seekers, with the snowiest experience usually from December to February and comfortable winter-to-spring trekking continuing into March and April.'
  },
  {
    id: 'pangarchulla-peak',
    slug: 'pangarchulla-peak',
    name: 'Pangarchulla Peak Trek',
    shortName: 'Pangarchulla Peak',
    tagline: 'A Snowy Garhwal Summit Above Kuari Pass',
    image: '/trek-pangachula2.jpg',
    gallery: [
      '/trek-pangachula2.jpg',
      '/trek-pangachula.jpg',
      '/trek-pangachula1.jpg',
      '/trek-pangachula3.jpg.jpg'
    ],
    altitude: '15,060 ft',
    altitudeFt: 15060,
    duration: '7 Days',
    durationDays: 7,
    difficulty: 'Moderate-Difficult',
    difficultyLevel: 'difficult',
    bestSeason: 'Mar - Apr, Sep - Nov',
    price: 10999,
    location: 'Chamoli, Uttarakhand',
    overview: [
      'Pangarchulla Peak Trek is a dramatic summit trek in the Garhwal Himalayas of Uttarakhand, usually beginning from Joshimath and returning to the same mountain town. The route moves through the classic Kuari Pass region, linking high Himalayan villages, dense forests, open campsites, and a final snow-covered summit ridge. At around 15,060 ft, Pangarchulla offers a true peak-climbing feeling without requiring technical mountaineering equipment in normal trekking conditions.',
      'The trail begins with the road journey to Joshimath, then continues toward Dhak or Tugasi village before climbing through Guling and Khullara. Lower sections pass terraced farms, Garhwali homes, oak and rhododendron forests, and quiet shepherd clearings. Higher up, the landscape opens into alpine meadows and snowfields, with the Kuari Pass route adding wide-angle views of Nanda Devi, Dronagiri, Chaukhamba, Kamet, Hathi Parvat, and other major Garhwal peaks.',
      'The summit day is the soul of this trek. Trekkers leave early from Khullara and climb across snow slopes, rocky patches, and exposed ridgelines toward the Pangarchulla top. The effort is demanding, especially in March and April when snow makes the ascent more adventurous, but the reward is an unforgettable 360-degree Himalayan panorama. It is an excellent choice for fit trekkers who want their first serious Himalayan summit experience.'
    ],
    highlights: [
      'Climb Pangarchulla Peak at 15,060 ft in the Garhwal Himalayas',
      'Experience a high-energy summit day with snow slopes and ridge walking',
      'Walk through the Kuari Pass region with close views of Nanda Devi and Dronagiri',
      'Camp around Guling and Khullara with forest, meadow, and mountain scenery',
      'Explore Garhwali village culture around Dhak, Tugasi, and Joshimath',
      'Best suited for fit trekkers attempting their first Himalayan peak summit'
    ],
    startPoint: 'Joshimath',
    endPoint: 'Joshimath',
    totalDistance: '34-39 km',
    ageLimit: '15+ years',
    groupSize: '8-12 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Haridwar/Rishikesh to Joshimath (2,000 m)',
        description: 'Begin with a long but beautiful drive from Haridwar or Rishikesh to Joshimath. The route follows the Alaknanda valley through important mountain towns and river confluences, gradually gaining altitude as the road enters the higher Garhwal Himalayas. Reach Joshimath by evening for check-in, dinner, briefing, and gear preparation.',
        distance: '~250 km drive',
        duration: '8-10 hours'
      },
      {
        day: 2,
        title: 'Joshimath to Dhak/Tugasi and Trek to Guling (2,900 m)',
        description: 'After breakfast, drive from Joshimath to Dhak or Tugasi village, the trailhead for the trek. Start walking through village paths, terraced fields, and mixed forest sections before reaching the Guling campsite. This first trekking day introduces the Garhwali landscape, traditional homes, and the first big views of the surrounding peaks.',
        distance: '3-5 km trek',
        duration: '3-4 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Guling to Khullara Camp (3,350 m)',
        description: 'Continue the climb through oak, rhododendron, pine, and deodar forest. The trail is steady and scenic, opening occasionally to views of Dronagiri, Hathi Parvat, and the wider Nanda Devi region. Reach Khullara, one of the most beautiful campsites on the route, and spend the evening acclimatizing before the higher days ahead.',
        distance: '5-6 km trek',
        duration: '4-5 hours',
        highlight: true
      },
      {
        day: 4,
        title: 'Khullara to Kuari Pass and Back (3,800 m)',
        description: 'Trek from Khullara toward Kuari Pass, a historic viewpoint known for its grand Himalayan skyline. The day offers outstanding views of Nanda Devi, Dronagiri, Chaukhamba, Kamet, and Hathi Parvat. Return to Khullara after spending time at the pass, using the day as both a scenic highlight and preparation for the summit push.',
        distance: '7-8 km trek',
        duration: '5-6 hours',
        highlight: true
      },
      {
        day: 5,
        title: 'Khullara to Pangarchulla Peak and Back (15,060 ft)',
        description: 'Start before dawn for the most challenging and exciting day of the trek. The trail climbs from Khullara toward the Pangarchulla summit through snowfields, boulder patches, and steep ridgeline sections. Reach the summit at around 4,590 m for a 360-degree panorama of the Garhwal Himalayas, then descend carefully back to Khullara.',
        distance: '12-14 km trek',
        duration: '8-10 hours',
        highlight: true
      },
      {
        day: 6,
        title: 'Khullara to Dhak/Tugasi and Drive to Joshimath',
        description: 'Descend from Khullara through the forest and village route toward Dhak or Tugasi. After reaching the roadhead, drive back to Joshimath for a hotel stay. The evening is kept relaxed for rest, hot food, and a comfortable close to the trekking section.',
        distance: '5-6 km trek',
        duration: '4-5 hours'
      },
      {
        day: 7,
        title: 'Joshimath to Haridwar/Rishikesh',
        description: 'After breakfast, begin the return drive from Joshimath to Haridwar or Rishikesh. The journey follows the same Alaknanda valley route, ending the trek with memories of snow, summit views, village trails, and the high Garhwal skyline.',
        distance: '~250 km drive',
        duration: '8-10 hours',
        highlight: true
      }
    ],
    included: [
      'Experienced trek leader and support staff',
      'Camping equipment including tents and sleeping bags',
      'Nutritious vegetarian meals during the trek',
      'Forest permits and trekking permits',
      'Basic medical kit and oxygen support',
      'Local transportation between Joshimath and Dhak/Tugasi if included in the package',
      'Accommodation in Joshimath and campsites during the trek'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, jacket, gloves, and headlamp',
      'Emergency evacuation costs',
      'Haridwar/Rishikesh to Joshimath transport unless selected',
      'Any additional items not mentioned in inclusions'
    ],
    altitudeProfile: [
      { name: 'Joshimath', altitude: '2,000 m' },
      { name: 'Guling', altitude: '2,900 m' },
      { name: 'Khullara', altitude: '3,350 m' },
      { name: 'Kuari Pass', altitude: '3,800 m' },
      { name: 'Pangarchulla Peak', altitude: '4,590 m / 15,060 ft' }
    ],
    localCulture: [
      'The region is deeply rooted in Garhwali culture.',
      'Local communities traditionally depend on farming and animal husbandry.',
      'Garhwali and Hindi are commonly spoken across the villages.',
      'Traditional foods include mandua roti, jhangora kheer, kafuli, and aloo ke gutke.',
      'Many villages still feature stone-and-wood mountain houses.',
      'Religious beliefs and stories connected to Nanda Devi are widely respected here.'
    ],
    majorPeaks: [
      'Nanda Devi',
      'Dronagiri',
      'Chaukhamba',
      'Kamet',
      'Hathi Parvat'
    ],
    floraFauna: {
      trees: [
        'Oak',
        'Rhododendron',
        'Deodar cedar',
        'Himalayan pine',
        'Silver fir',
        'Birch'
      ],
      wildlife: [
        'Himalayan Monal',
        'Koklass pheasant',
        'Barking Deer',
        'Himalayan langur',
        'Himalayan fox',
        'High-altitude raptors and forest birds'
      ]
    },
    closingSummary: 'Pangarchulla Peak is special because it combines village culture, forest trails, Kuari Pass views, and a genuine snow summit in one compact Garhwal itinerary. It is best suited for fit beginners moving beyond easy treks, repeat trekkers, and anyone who wants to attempt a first Himalayan peak summit. March and April are the best months for a snowy summit experience, while September to November offers clearer skies and crisp mountain views.'
  },
  {
    id: 'dayara-bugyal',
    slug: 'dayara-bugyal',
    name: 'Dayara Bugyal Trek',
    shortName: 'Dayara Bugyal',
    tagline: 'Rolling Alpine Meadows Above Raithal',
    image: '/trek-dayara-bugyal6.jpg',
    gallery: [
      '/trek-dayara-bugyal6.jpg',
      '/trek-dayara-bugyal.jpg',
      '/trek-dayara-bugyal2.jpg',
      '/trek-dayara-bugyal5.jpg',
      '/trek-dayara-bugyal1.jpg',
      '/trek-dayara-bugyal3.jpg',
      '/trek-dayara-bugyal4.jpg',
      '/trek-dayara-bugyal7.jpeg',
      '/trek-dayara-bugyal8.jpeg',
      '/trek-dayara-bugyal9.jpeg',
      '/trek-dayara-bugyal10.jpeg',
      '/trek-dayara-bugyal11.jpeg',
      '/trek-dayara-bugyal12.jpeg'
    ],
    altitude: '11,181 ft',
    altitudeFt: 11181,
    duration: '3 Days',
    durationDays: 3,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Apr - Jun, Sep - Feb',
    price: 9500,
    location: 'Uttarkashi, Uttarakhand',
    overview: [
      'Dayara Bugyal Trek is one of Uttarakhand\'s most beautiful meadow treks, known for its vast alpine grasslands, gentle trails, and big Himalayan views. The trek begins from Raithal, a traditional Garhwali village in the Uttarkashi district, and climbs gradually through forest sections, shepherd clearings, and open ridges before reaching the sweeping meadows of Dayara Bugyal at around 11,181 ft.',
      'The trail is short, scenic, and rewarding, making it suitable for both first-time trekkers and experienced hikers looking for a relaxed Himalayan escape. In spring and summer, the bugyal turns into a rolling green carpet with wildflowers and grazing slopes, while in winter the same landscape becomes a soft snowfield perfect for beginners who want a safe snow-trek experience. On clear days, the meadow opens into a remarkable 360-degree panorama of Bandarpunch, Srikanth, Draupadi Ka Danda, Jaonli, and the Gangotri range.',
      'Dayara Bugyal also carries a strong cultural charm because the route begins and ends in Raithal village. Traditional stone-and-wood houses, local Garhwali food, farming life, cattle grazing, folk songs, and seasonal festivals give the trek a warm village connection. With a total distance of around 18-20 km and a well-paced 3-day itinerary, Dayara is ideal for families, beginners, photographers, and anyone wanting a compact but complete Himalayan meadow trek.'
    ],
    highlights: [
      'Walk across one of Uttarakhand\'s most beautiful high-altitude bugyals',
      'Begin and end the trek in the traditional Garhwali village of Raithal',
      'Enjoy 360-degree views of Bandarpunch, Srikanth, and the Gangotri range',
      'Beginner-friendly trail with forest, meadow, and snow-trek experiences',
      'Trek through oak and rhododendron forests on the way to Gui Camp',
      'Excellent in summer for green meadows and in winter for snow-covered landscapes'
    ],
    startPoint: 'Raithal Village',
    endPoint: 'Raithal Village',
    totalDistance: '18-20 km',
    ageLimit: '8+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Dehradun/Haridwar to Raithal Village (5,905 ft)',
        description: 'Drive from Dehradun or Haridwar toward Raithal, a scenic Garhwali village that serves as the base for the Dayara Bugyal Trek. The road journey passes through river valleys, mountain towns, terraced farms, and forested ridges before reaching Raithal by evening. Overnight stay is arranged in the village, followed by trek briefing and preparation.',
        distance: '180-200 km drive',
        duration: '7-8 hours'
      },
      {
        day: 2,
        title: 'Raithal to Gui Camp (9,514 ft)',
        description: 'Start trekking from Raithal through village trails, terraced fields, and beautiful oak and rhododendron forest. The climb is steady but beginner-friendly, with frequent openings toward the surrounding valleys and peaks. Reach Gui Camp, a peaceful campsite set among forest clearings and mountain views.',
        distance: '4-5 km trek',
        duration: '4-5 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Gui Camp to Dayara Bugyal and Back to Raithal (11,181 ft)',
        description: 'Begin early for Dayara Bugyal, the main highlight of the trek. The trail opens into vast alpine meadows with sweeping Himalayan views, and in winter these slopes often turn into a wide snowfield. Spend time exploring the bugyal, photographing the Bandarpunch, Srikanth, and Gangotri range views, then descend back through Gui toward Raithal by evening.',
        distance: '10-12 km trek',
        duration: '7-8 hours',
        highlight: true
      }
    ],
    included: [
      'Experienced trek leader and support staff',
      'Accommodation in Raithal and camping during the trek',
      'Camping equipment including tents and sleeping bags',
      'Nutritious vegetarian meals during the trek',
      'Forest permits and trekking permits',
      'Basic medical kit and trail support'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, jackets, and gloves',
      'Emergency evacuation costs',
      'Dehradun/Haridwar to Raithal transport unless selected',
      'Any additional items not mentioned in inclusions'
    ],
    altitudeProfile: [
      { name: 'Raithal Village', altitude: '1,800 m / 5,905 ft' },
      { name: 'Gui Camp', altitude: '2,900 m / 9,514 ft' },
      { name: 'Dayara Bugyal', altitude: '3,408 m / 11,181 ft' }
    ],
    localCulture: [
      'Raithal village is known for its warm Garhwali culture.',
      'Traditional stone-and-wood houses are common across the village.',
      'Local food includes simple Garhwali meals prepared with regional grains and vegetables.',
      'Daily life is closely connected with farming and animal husbandry.',
      'Seasonal festivals, folk songs, and village traditions are an important part of the region.'
    ],
    majorPeaks: [
      'Bandarpunch',
      'Srikanth',
      'Gangotri Range',
      'Draupadi Ka Danda',
      'Jaonli'
    ],
    floraFauna: {
      trees: [
        'Oak',
        'Rhododendron',
        'Deodar cedar',
        'Himalayan pine',
        'Maple',
        'Walnut'
      ],
      wildlife: [
        'Himalayan Monal',
        'Koklass pheasant',
        'Barking Deer',
        'Himalayan langur',
        'Mountain fox',
        'Eagles and other high-altitude birds'
      ]
    },
    closingSummary: 'Dayara Bugyal is special because it delivers a grand Himalayan meadow experience in a short, beginner-friendly itinerary. It is suitable for first-time trekkers, families, photographers, winter snow lovers, and experienced hikers who want a peaceful bugyal trail. April to June is best for green meadows, September to December brings clear mountain views, and December to February is ideal for a snow-trek experience.'
  },
  {
    id: 'ali-bedni-bugyal',
    slug: 'ali-bedni-bugyal',
    name: 'Ali-Bedni Bugyal Trek',
    shortName: 'Ali-Bedni Bugyal',
    tagline: 'Twin Meadows of Trishul and Nanda Ghunti',
    image: '/trek-alli-badni1.jpg',
    gallery: [
      '/trek-alli-badni1.jpg',
      '/trek-alli-badni.jpg',
      '/trek-alli-badni4.jpg',
      '/trek-alli-badni3.jpg',
      '/trek-alli-badni2.jpg',
      '/trek-alli-badni5.jpg',
      '/trek-alli-badni6.jpg',
      '/trek-alli-badni7.jpeg',
      '/trek-alli-badni8.jpeg',
      '/trek-alli-badni9.jpeg',
      '/trek-alli-badni10.jpeg',
      '/trek-alli-badni11.jpeg',
      '/trek-alli-badni12.jpeg',
      '/trek-alli-badni13.jpeg',
      '/trek-alli-badni14.jpeg',
      '/trek-alli-badni15.jpeg',
      '/trek-alli-badni16.jpeg'
    ],
    altitude: '11,975 ft',
    altitudeFt: 11975,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'May - Jun, Sep - Nov',
    price: 9000,
    location: 'Chamoli, Uttarakhand',
    overview: [
      'The Ali-Bedni Bugyal Trek is one of Uttarakhand\'s finest high-altitude meadow journeys, combining two legendary bugyals in the Garhwal Himalayas. Starting from Lohajung, the route moves through forested valleys, traditional hill villages, and wide open grasslands before reaching the celebrated twin meadows of Ali Bugyal and Bedni Bugyal. At around 11,975 ft, the trek offers a generous Himalayan experience without becoming too technical for fit beginners.',
      'Ali Bugyal is famous for its rolling green slopes that seem to stretch endlessly under the skyline, while Bedni Bugyal adds a more sacred and dramatic character with Bedni Kund, sunrise viewpoints, and close views of Trishul and Nanda Ghunti. In the post-monsoon months, the meadows turn deep green and the mountain visibility is excellent; in late spring, the forests and clearings feel fresh, floral, and alive. The route is also linked with the larger Roopkund region, giving trekkers a taste of one of Garhwal\'s most iconic trekking landscapes.',
      'The journey is as cultural as it is scenic. Villages around Lohajung, Didna, and Wan reflect a blend of Garhwali and Kumaoni influence, with traditional homes, local hospitality, folk songs, farming rhythms, and mountain food such as mandua roti, jhangora kheer, and aloo ke gutke. For first-time trekkers who want a beautiful, non-technical, high-altitude route with major Himalayan views, Ali-Bedni Bugyal is one of the most rewarding choices in Uttarakhand.'
    ],
    highlights: [
      'Walk across the twin meadows of Ali Bugyal and Bedni Bugyal',
      'Enjoy close views of Trishul and Nanda Ghunti from open grasslands',
      'Visit the sacred Bedni Kund and photograph sunrise and sunset from the bugyal',
      'Trek through forests, mountain villages, and traditional Garhwali settlements',
      'Beginner-friendly high-altitude trek with a strong meadow experience',
      'Experience local food, folk culture, and warm village hospitality'
    ],
    startPoint: 'Lohajung',
    endPoint: 'Lohajung',
    totalDistance: '30-35 km',
    ageLimit: '10+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Lohajung to Didna Village (2,450 m)',
        description: 'Start the trek from Lohajung and descend toward the valley before climbing gradually to Didna village. The trail passes through dense forests, terraced fields, and traditional mountain settlements, giving the first glimpse of rural life in this part of Garhwal. Overnight stay is arranged near Didna.',
        distance: '6-7 km trek',
        duration: '5-6 hours'
      },
      {
        day: 2,
        title: 'Didna to Ali Bugyal (3,350 m)',
        description: 'Climb from Didna through forested sections before the landscape suddenly opens into the enormous rolling slopes of Ali Bugyal. This is one of the most beautiful meadow walks in Uttarakhand, with wide green carpets, grazing lands, and clear views toward the surrounding Himalayan ranges.',
        distance: '9-10 km trek',
        duration: '6-7 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Ali Bugyal to Bedni Bugyal (3,540 m)',
        description: 'Walk from Ali Bugyal to Bedni Bugyal across undulating high-altitude grasslands. The trail stays open and scenic for most of the day, with excellent views of Trishul, Nanda Ghunti, and nearby Garhwal ridges. Reach Bedni Bugyal, one of the most celebrated campsites in the region.',
        distance: '5-6 km trek',
        duration: '4-5 hours',
        highlight: true
      },
      {
        day: 4,
        title: 'Bedni Bugyal Exploration and Bedni Kund',
        description: 'Spend the day exploring Bedni Bugyal at a relaxed pace. Visit Bedni Kund, walk around the nearby meadow ridges, and use the day for sunrise and sunset photography. This buffer-style exploration day allows trekkers to absorb the landscape, acclimatize well, and enjoy the best views of Trishul and Nanda Ghunti.',
        distance: '3-4 km exploration',
        duration: '3-4 hours',
        highlight: true
      },
      {
        day: 5,
        title: 'Bedni Bugyal to Wan Village and Drive to Lohajung',
        description: 'Descend from Bedni Bugyal through forests and village trails toward Wan, one of the important villages on this route. After completing the trekking section, board the vehicle for the drive back to Lohajung. The trek ends with a comfortable evening at the base village.',
        distance: '10-12 km trek',
        duration: '6-7 hours',
        highlight: true
      },
      {
        day: 6,
        title: 'Lohajung Buffer Day and Departure',
        description: 'This day is kept for departure from Lohajung or as a practical buffer in case weather, trail conditions, or group pace require extra time. Trekkers can use the morning for village walks, local interaction, and final mountain views before continuing their onward journey.',
        distance: 'Optional local walk',
        duration: 'Flexible'
      }
    ],
    included: [
      'Experienced trek leader and support staff',
      'Camping equipment including tents and sleeping bags',
      'Nutritious vegetarian meals during the trek',
      'Forest permits and trekking permits',
      'Basic medical kit and oxygen support',
      'Accommodation at Lohajung and campsites during the trek'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, jackets, and gloves',
      'Emergency evacuation costs',
      'Transport to and from Lohajung unless selected',
      'Any additional items not mentioned in inclusions'
    ],
    altitudeProfile: [
      { name: 'Lohajung', altitude: '2,300 m / 7,545 ft' },
      { name: 'Didna Village', altitude: '2,450 m / 8,038 ft' },
      { name: 'Ali Bugyal', altitude: '3,350 m / 10,991 ft' },
      { name: 'Bedni Bugyal', altitude: '3,540 m / 11,614 ft' },
      { name: 'Highest Point', altitude: '3,650 m / 11,975 ft' },
      { name: 'Wan Village', altitude: '2,450 m / 8,038 ft' }
    ],
    localCulture: [
      'The region reflects a blend of traditional Garhwali and Kumaoni mountain culture.',
      'Villages around Lohajung, Didna, and Wan are known for rural hospitality and simple mountain life.',
      'Traditional stone-and-wood houses can be seen along the route.',
      'Local folk songs, seasonal fairs, and village rituals are part of the cultural landscape.',
      'Common mountain foods include mandua roti, jhangora kheer, and aloo ke gutke.',
      'Farming, cattle grazing, and forest-based livelihoods remain important in daily life.'
    ],
    majorPeaks: [
      'Trishul',
      'Nanda Ghunti',
      'Chaukhamba',
      'Neelkanth',
      'Mrigthuni'
    ],
    floraFauna: {
      trees: [
        'Oak',
        'Rhododendron',
        'Himalayan pine',
        'Deodar cedar',
        'Maple',
        'Birch'
      ],
      wildlife: [
        'Himalayan Monal',
        'Koklass pheasant',
        'Barking Deer',
        'Himalayan langur',
        'Yellow-throated marten',
        'High-altitude eagles and mountain birds'
      ]
    },
    closingSummary: 'Ali-Bedni Bugyal is special because it combines two of Uttarakhand\'s most beautiful alpine meadows with easy-to-moderate trails, major Himalayan views, and deep local culture. It is well suited for first-time trekkers, meadow lovers, photographers, families with good fitness, and anyone seeking a classic Garhwal bugyal experience. May to June offers fresh meadows and pleasant weather, while September to November brings clearer skies and sharp mountain views.'
  },
  {
    id: 'kedarnath',
    slug: 'kedarnath',
    name: 'Kedarnath Trek',
    shortName: 'Kedarnath',
    tagline: 'Sacred Himalayan Trail to Kedarnath Temple',
    image: '/trek-Kedarnath.jpg',
    gallery: [
      '/trek-Kedarnath.jpg',
      '/trek-Kedarnath1.jpg',
      '/trek-Kedarnath2.jpg',
      '/trek-Kedarnath3.jpg',
      '/trek-Kedarnath4.jpg',
      '/trek-Kedarnath5.jpg'
    ],
    altitude: '11,755 ft',
    altitudeFt: 11755,
    duration: '5 Days',
    durationDays: 5,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'May - Jun, Sep - Oct',
    price: 10999,
    location: 'Rudraprayag, Uttarakhand',
    overview: [
      'The Kedarnath Trek is one of the most important pilgrimage treks in the Indian Himalayas, beginning from Gaurikund and ending at the sacred Kedarnath Temple. Gaurikund is the final motorable point of the yatra, and from here the trail climbs steadily through mountain settlements, service camps, river valleys, and high-altitude views before reaching the temple at 3,583 m. The route carries both spiritual intensity and a real trekking challenge because the altitude gain is around 1,600 m over a long walking day.',
      'The trail follows the established yatra path via Jungle Chatti, Bheembali, Linchauli, Kedarnath Base Camp, and finally Kedarnath Temple. Trekkers and pilgrims walk beside the Mandakini valley, crossing stone-paved stretches, bridges, rest points, and dramatic mountain bends. As the route gains height, the scenery changes from green valley slopes and forest patches to rugged high-Himalayan terrain backed by snow-covered peaks around the Kedarnath shrine.',
      'Kedarnath is not just a trek; it is a cultural and devotional journey. The route depends deeply on local Garhwali communities who support the yatra through guiding, hotels, camps, food stalls, horse and mule services, and dandi-kandi assistance. For trekkers, the experience combines endurance, faith, mountain weather, traditional hospitality, and the unforgettable sight of Kedarnath Temple standing beneath a massive Himalayan backdrop.'
    ],
    highlights: [
      'Trek from Gaurikund, the final motorable point, to the sacred Kedarnath Temple',
      'Follow the classic route via Jungle Chatti, Bheembali, Linchauli, and Kedarnath Base Camp',
      'Gain around 1,600 m of altitude through a dramatic Himalayan valley',
      'Experience Garhwali hospitality, pilgrimage services, and local mountain culture',
      'Witness Kedarnath Temple against a spectacular snow-clad mountain backdrop',
      'Best undertaken in May-June or September-October outside the heavy monsoon period'
    ],
    startPoint: 'Gaurikund',
    endPoint: 'Kedarnath Temple',
    totalDistance: '16-19 km one way',
    ageLimit: '10+ years',
    groupSize: '8-20 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Haridwar/Rishikesh to Guptkashi or Sonprayag',
        description: 'Begin with a mountain drive toward the Kedarnath region, following the Alaknanda and Mandakini river valleys through important pilgrimage towns and hill settlements. Reach Guptkashi, Phata, or Sonprayag by evening for check-in, briefing, and preparation for the next day\'s trek.',
        distance: '200-220 km drive',
        duration: '8-10 hours'
      },
      {
        day: 2,
        title: 'Gaurikund to Kedarnath Temple (3,583 m)',
        description: 'Drive or transfer to Gaurikund, the last motorable point, and begin the trek toward Kedarnath. The route climbs via Jungle Chatti, Bheembali, Linchauli, and Kedarnath Base Camp before reaching Kedarnath Temple. This is the main trekking day, with a long ascent, multiple rest points, and a powerful arrival at the shrine.',
        distance: '16-19 km trek',
        duration: '6-9 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Kedarnath Darshan and Acclimatization Walk',
        description: 'Spend the day at Kedarnath for temple darshan, rest, and local exploration. Depending on weather and group fitness, take a short acclimatization walk around the temple area, visit nearby viewpoints, or walk toward the Bhairavnath Temple trail for panoramic views of the valley and shrine.',
        distance: '2-3 km local walk',
        duration: '2-3 hours',
        highlight: true
      },
      {
        day: 4,
        title: 'Kedarnath to Gaurikund and Return to Guptkashi/Sonprayag',
        description: 'After morning prayers and breakfast, descend from Kedarnath to Gaurikund on the same yatra trail. The descent passes Kedarnath Base Camp, Linchauli, Bheembali, and Jungle Chatti before reaching the roadhead. Continue by vehicle to Guptkashi, Phata, or Sonprayag for the night.',
        distance: '16-19 km trek',
        duration: '5-7 hours'
      },
      {
        day: 5,
        title: 'Guptkashi/Sonprayag to Haridwar or Rishikesh',
        description: 'Drive back through the Mandakini valley, closing the pilgrimage trek with views of mountain towns, river confluences, and forested ridges. The journey usually reaches Haridwar or Rishikesh by evening, depending on road and traffic conditions.',
        distance: '200-220 km drive',
        duration: '8-10 hours',
        highlight: true
      }
    ],
    included: [
      'Experienced trek leader and local support staff',
      'Accommodation during the journey as per package plan',
      'Nutritious vegetarian meals during the trek plan',
      'Basic medical kit and trail support',
      'Local guidance for the Kedarnath yatra route',
      'Transportation support if included in the selected package'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, rainwear, warm layers, and daypack',
      'Emergency evacuation costs',
      'Horse, mule, dandi, kandi, or porter charges',
      'Any additional items not mentioned in inclusions'
    ],
    altitudeProfile: [
      { name: 'Gaurikund', altitude: '1,982 m / 6,503 ft' },
      { name: 'Jungle Chatti', altitude: 'Approx. 2,650 m' },
      { name: 'Bheembali', altitude: 'Approx. 2,800 m' },
      { name: 'Linchauli', altitude: 'Approx. 3,200 m' },
      { name: 'Kedarnath Base Camp', altitude: 'Approx. 3,450 m' },
      { name: 'Kedarnath Temple', altitude: '3,583 m / 11,755 ft' }
    ],
    localCulture: [
      'The Kedarnath region is deeply rooted in Garhwali culture and Shiva devotion.',
      'Garhwali is widely spoken along with Hindi across the yatra route.',
      'Local livelihoods depend on tourism, farming, animal husbandry, and pilgrimage services.',
      'Traditional foods include mandua roti, jhangora kheer, kafuli, and phaanu.',
      'Folk traditions include Pandav Nritya, Chaufla, and Thadiya.',
      'Local people support the yatra through horse-mule services, dandi-kandi, guiding, hotels, camps, and food stalls.'
    ],
    majorPeaks: [
      'Kedarnath Peak',
      'Kedar Dome',
      'Bharatekuntha',
      'Mandani Parbat',
      'Meru-Sumeru region'
    ],
    floraFauna: {
      trees: [
        'Deodar cedar',
        'Himalayan pine',
        'Oak',
        'Rhododendron',
        'Birch',
        'Juniper'
      ],
      wildlife: [
        'Himalayan Monal',
        'Barking Deer',
        'Himalayan langur',
        'Mountain fox',
        'Yellow-billed chough',
        'High-altitude eagles and valley birds'
      ]
    },
    closingSummary: 'Kedarnath Trek is special because it blends a demanding Himalayan walk with one of India\'s most revered spiritual journeys. It is suitable for pilgrims, fit beginners, families with preparation, and trekkers who want a culturally rich high-altitude route rather than a remote wilderness trek. May to June and September to October are the best windows, while July and August are best avoided because monsoon rain can increase landslide and road-risk conditions.'
  },
  {
    id: 'chopta-tungnath-chandrashila',
    slug: 'chopta-tungnath-chandrashila',
    name: 'Chopta Tungnath Chandrashila Trek',
    shortName: 'Chandrashila',
    tagline: 'Weekend Summit Trek via Tungnath Temple',
    image: '/trek-chandrashila.jpg',
    gallery: [
      '/trek-chandrashila.jpg',
      '/trek-chandrashila3.jpg',
      '/trek-chandrashila4.jpg',
      '/trek-chandrashila7.jpg',
      '/trek-chandrashila5.jpg',
      '/trek-chandrashila6.jpg',
      '/trek-chandrashila2.jpg',
      '/trek-chandrashila1.jpg'
    ],
    altitude: '13,550 ft',
    altitudeFt: 13550,
    duration: '3 Days',
    durationDays: 3,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Mar - Jun, Sep - Feb',
    price: 9999,
    location: 'Rudraprayag, Uttarakhand',
    overview: [
      'The Chopta-Tungnath-Chandrashila Trek is one of Uttarakhand\'s most popular short Himalayan treks, loved for its easy access, sacred trail, and extraordinary summit views. The trek starts from Chopta at around 2,680 m and climbs first to Tungnath, the highest Shiva temple in the world, before continuing to the Chandrashila summit. Even though the walking distance is compact, the route delivers a complete mountain experience with forest, snow, temple culture, and a 360-degree Himalayan panorama.',
      'The trail from Chopta to Tungnath is a well-defined stone path that rises through rhododendron, oak, and alpine slopes. In spring, the forest is bright with buransh blooms; in winter, the same path becomes a beautiful snow trail. From Tungnath, the final climb to Chandrashila is steeper and more exposed, but the reward is immense: clear views of Chaukhamba, Nanda Devi, Trishul, Kedar Dome, and several Garhwal and Kumaon peaks.',
      'This trek is ideal for first-time trekkers, weekend travelers, families with good fitness, photographers, and anyone wanting a quick summit experience in North India. The short 3-day itinerary usually includes a drive from Rishikesh or Haridwar to Chopta, an early morning summit day to Tungnath and Chandrashila, and a return drive the next day. It is beginner friendly, but winter snow, early starts, and the summit climb still demand basic fitness and proper layering.'
    ],
    highlights: [
      'Visit Tungnath, the highest Shiva temple in the world',
      'Climb to Chandrashila summit for 360-degree Himalayan views',
      'See Chaukhamba, Nanda Devi, Trishul, Kedar Dome, and surrounding peaks',
      'Walk through rhododendron and oak forest sections near Chopta',
      'Enjoy one of North India\'s most popular beginner-friendly weekend treks',
      'Experience excellent winter snow trekking from December to February'
    ],
    startPoint: 'Chopta',
    endPoint: 'Chandrashila Summit',
    totalDistance: '10 km round trip',
    ageLimit: '8+ years',
    groupSize: '8-20 trekkers',
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh/Haridwar to Chopta (8,790 ft)',
        description: 'Drive from Rishikesh or Haridwar to Chopta through the Alaknanda and Mandakini valley region, passing mountain towns, river bends, and forested ridges along the way. Reach Chopta by evening and settle into a camp or hotel. The evening is used for briefing, acclimatization, and preparation for the early summit start.',
        distance: '200-220 km drive',
        duration: '8-10 hours'
      },
      {
        day: 2,
        title: 'Chopta to Tungnath to Chandrashila and Back',
        description: 'Start around 4-5 AM for the main trekking day. The trail climbs 3.5 km from Chopta to Tungnath Temple, then continues another 1.5 km on a steeper section to Chandrashila summit. Watch the sunrise and the wide Himalayan skyline from the top, then descend carefully to Tungnath and return to Chopta by afternoon or evening.',
        distance: '10 km trek',
        duration: '6-7 hours',
        highlight: true
      },
      {
        day: 3,
        title: 'Chopta to Rishikesh/Haridwar',
        description: 'After breakfast, begin the return drive from Chopta to Rishikesh or Haridwar. The journey closes with valley views, river confluences, and time to reflect on the Tungnath temple trail and Chandrashila summit experience.',
        distance: '200-220 km drive',
        duration: '8-10 hours',
        highlight: true
      }
    ],
    included: [
      'Experienced trek leader and local support staff',
      'Accommodation in Chopta in camps or hotel as per package',
      'Nutritious vegetarian meals during the trek plan',
      'Camping or hotel arrangements as per selected package',
      'Basic medical kit and trail support',
      'Permits and local assistance if applicable'
    ],
    excluded: [
      'Personal expenses and tips',
      'Travel insurance',
      'Personal trekking gear such as shoes, warm layers, rainwear, and gloves',
      'Emergency evacuation costs',
      'Delhi or base-city transport unless selected',
      'Any additional items not mentioned in inclusions'
    ],
    altitudeProfile: [
      { name: 'Chopta', altitude: '2,680 m / 8,790 ft' },
      { name: 'Tungnath Temple', altitude: '3,680 m / 12,073 ft' },
      { name: 'Chandrashila Summit', altitude: '4,000-4,130 m / 13,100+ ft' }
    ],
    localCulture: [
      'The route is closely connected with Garhwali temple culture and Shiva devotion.',
      'Tungnath is part of the sacred Panch Kedar circuit and is deeply respected by local communities.',
      'Garhwali and Hindi are commonly spoken in Chopta, Ukhimath, and nearby villages.',
      'Local livelihoods include tourism, small lodges, camps, farming, and pilgrimage support.',
      'Regional food often includes mandua roti, local dal, pahadi vegetables, and seasonal mountain preparations.',
      'Village hospitality and temple traditions are an important part of the trek experience.'
    ],
    majorPeaks: [
      'Chaukhamba',
      'Nanda Devi',
      'Trishul',
      'Kedar Dome',
      'Bandarpunch',
      'Kedarnath Peak'
    ],
    floraFauna: {
      trees: [
        'Rhododendron (Buransh)',
        'Oak',
        'Deodar cedar',
        'Himalayan pine',
        'Maple',
        'Juniper'
      ],
      wildlife: [
        'Himalayan Monal',
        'Koklass pheasant',
        'Musk Deer',
        'Himalayan langur',
        'Mountain fox',
        'High-altitude eagles and forest birds'
      ]
    },
    closingSummary: 'Chopta-Tungnath-Chandrashila is special because it gives trekkers a sacred temple trail, a real summit, rhododendron forests, winter snow, and one of the best 360-degree Himalayan views in a short itinerary. It is perfect for beginners, weekend trekkers, photographers, families with good fitness, and snow-trek lovers. March to June is best for greenery and pleasant weather, September to November offers the clearest mountain views, and December to February is ideal for snow.'
  },
  {
    id: 'valley-of-flowers',
    slug: 'valley-of-flowers',
    name: 'Valley of Flowers Trek',
    shortName: 'Valley of Flowers',
    tagline: 'A UNESCO World Heritage Paradise',
    image: '/trek-valley-flowers new.jpeg',
    gallery: [
      '/trek-valley-flowers new.jpeg',
      '/trek-valley-flowers new1.jpeg',
      '/trek-valley-flowers new2.jpeg',
      '/trek-valley-flowers new3.jpeg',
      '/trek-valley-flowers new4.jpeg',
      '/trek-valley-flowers new5.jpeg',
      '/trek-valley-flowers new6.jpeg',
      '/trek-valley-flowers new7.jpeg',
      '/trek-valley-flowers new8.jpeg',
      '/trek-valley-flowers new9.jpeg',
      '/trek-valley-flowers new10.jpeg',
      '/trek-valley-flowers new11.jpeg'
    ],
    altitude: '14,100 ft',
    altitudeFt: 14100,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Jul - Sep',
    price: 9999,
    location: 'Chamoli, Uttarakhand',
    overview: 'The Valley of Flowers is a UNESCO World Heritage Site that transforms into a kaleidoscope of colors during the monsoon months. Nestled in the Pushpawati River valley, this high-altitude Himalayan valley is home to over 600 species of wildflowers, including the rare Brahma Kamal and the Blue Poppy. Combined with a visit to the sacred Hemkund Sahib Gurudwara at 15,200 feet, this trek offers a unique blend of natural beauty and spiritual significance.',
    highlights: [
      'Walk through a UNESCO World Heritage Site',
      'See over 600 species of alpine wildflowers',
      'Visit the sacred Hemkund Sahib at 15,200 ft',
      'Spot rare Himalayan wildlife and birds',
      ' witness the legendary Brahma Kamal flower'
    ],
    startPoint: 'Govindghat',
    endPoint: 'Govindghat',
    totalDistance: '38 km',
    ageLimit: '10+ years',
    groupSize: '10-20 trekkers',
    itinerary: [
      { day: 1, title: 'Dehradun to Joshimath/Govindghat', description: 'Scenic drive from Dehradun through Devprayag and Rudraprayag. Overnight stay at Joshimath or Govindghat.' },
      { day: 2, title: 'Govindghat to Ghangaria (9,600 ft)', description: '13 km trek along the Pushpawati River through dense forests. Ghangaria is the base camp for both Valley of Flowers and Hemkund Sahib.', highlight: true },
      { day: 3, title: 'Valley of Flowers Exploration (14,100 ft)', description: 'Enter the magical Valley of Flowers. Spend the day exploring the vast meadows filled with countless flowers. Photography and nature walks.', highlight: true },
      { day: 4, title: 'Hemkund Sahib (15,200 ft)', description: 'Steep 6 km ascent to the sacred Hemkund Sahib Gurudwara beside a glacial lake. Spiritual experience at one of the highest gurudwaras in the world.', highlight: true },
      { day: 5, title: 'Ghangaria to Govindghat', description: 'Descend back to Govindghat. Optional visit to Badrinath Temple. Drive to Joshimath for overnight stay.' },
      { day: 6, title: 'Joshimath to Dehradun', description: 'Drive back to Dehradun via the same scenic route. Trek concludes with unforgettable memories.', highlight: true }
    ],
    included: [
      'Experienced trek leader and guides',
      'Hotel accommodation at Joshimath',
      'Camping at Ghangaria (tents/sleeping bags)',
      'All meals during the trek',
      'Forest permits and entry fees',
      'Transport from Dehradun (return)'
    ],
    excluded: [
      'Personal expenses and tips',
      'Porter/mule charges for personal bags',
      'Travel insurance',
      'Personal trekking gear',
      'Emergency evacuation costs'
    ]
  },
  {
    id: 'kuari-pass',
    slug: 'kuari-pass',
    name: 'Kuari Pass Trek',
    shortName: 'Kuari Pass',
    tagline: 'The Lord Curzon Trail',
    image: '/trek-kuari-pass.jpg',
    gallery: ['/trek-kuari-pass.jpg', '/gallery-sunrise.jpg', '/about-hero.jpg', '/gallery-summit.jpg'],
    altitude: '12,500 ft',
    altitudeFt: 12500,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy',
    difficultyLevel: 'easy',
    bestSeason: 'Mar - Jun, Sep - Dec',
    price: 10999,
    location: 'Chamoli, Uttarakhand',
    overview: 'The Kuari Pass Trek, also known as the Lord Curzon Trail, is one of the most beginner-friendly treks in the Indian Himalayas. It offers the most spectacular close-up views of India\'s second-highest peak, Nanda Devi (25,643 ft), along with a panorama of other major peaks including Dronagiri, Hathi Parvat, and Nilkanth. The trail passes through charming Himalayan villages, dense oak and rhododendron forests, and vast bugyals (alpine meadows) that make this trek a photographer\'s delight.',
    highlights: [
      '360-degree views of Nanda Devi and surrounding peaks',
      'Walk through Asia\'s largest bugyal (alpine meadow) at Gorson',
      'Perfect trek for beginners and families',
      'Pass through charming Himalayan villages',
      'Dense rhododendron and oak forests'
    ],
    startPoint: 'Dhak village',
    endPoint: 'Joshimath',
    totalDistance: '33 km',
    ageLimit: '8+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      { day: 1, title: 'Dehradun to Joshimath', description: 'Scenic 10-hour drive from Dehradun to Joshimath through the holy towns of Devprayag and Rudraprayag.' },
      { day: 2, title: 'Joshimath to Dhak to Gulling (9,600 ft)', description: 'Short drive to Dhak village. Trek through terraced fields and forests to Gulling Top. First views of Dronagiri peak.', highlight: true },
      { day: 3, title: 'Gulling to Tali (11,000 ft)', description: 'Trek through dense oak and rhododendron forests. Camp at Tali with stunning sunset views of Nanda Devi range.', highlight: true },
      { day: 4, title: 'Tali to Kuari Pass to Tali (12,500 ft)', description: 'Summit day! Early morning trek to Kuari Pass. Panoramic views of Nanda Devi, Dronagiri, and Hathi Parvat. Return to Tali camp.', highlight: true },
      { day: 5, title: 'Tali to Auli via Gorson Bugyal', description: 'Trek through the vast Gorson Bugyal, Asia\'s largest alpine meadow. Descend to Auli, the ski resort town.' },
      { day: 6, title: 'Auli to Dehradun', description: 'Morning views from Auli. Drive back to Dehradhan. Trek concludes.', highlight: true }
    ],
    included: [
      'Experienced trek leader and local guides',
      'All camping equipment',
      'Nutritious meals throughout',
      'Forest permits',
      'Medical kit',
      'Transport from Dehradun (return)'
    ],
    excluded: [
      'Personal expenses',
      'Porter charges',
      'Travel insurance',
      'Personal gear',
      'Cable car ride at Auli (optional)'
    ]
  },
  {
    id: 'roopkund',
    slug: 'roopkund',
    name: 'Roopkund Trek',
    shortName: 'Roopkund',
    tagline: 'The Mystery Lake Expedition',
    image: '/trek-roopkund-new1.jpeg',
    gallery: [
      '/trek-roopkund-new1.jpeg',
      '/trek-roopkund-new2.jpeg',
      '/trek-roopkund-new3.jpeg',
      '/trek-roopkund-new4.jpeg',
      '/trek-roopkund-new5.jpeg',
      '/trek-roopkund-new6.jpeg',
      '/trek-roopkund-new7.jpeg',
      '/trek-roopkund-new8.jpeg',
      '/trek-roopkund-new9.jpeg',
      '/trek-roopkund-new10.jpeg',
      '/trek-roopkund-new11.jpeg',
      '/trek-roopkund-new12.jpeg',
      '/trek-roopkund-new13.jpeg',
      '/trek-roopkund-new14.jpeg',
      '/trek-roopkund-new15.jpeg',
      '/trek-roopkund-new16.jpeg',
      '/trek-roopkund-new17.jpeg'
    ],
    altitude: '16,500 ft',
    altitudeFt: 16500,
    duration: '8 Days',
    durationDays: 8,
    difficulty: 'Moderate-Difficult',
    difficultyLevel: 'difficult',
    bestSeason: 'May - Jun, Sep - Oct',
    price: 15999,
    location: 'Chamoli, Uttarakhand',
    overview: 'The Roopkund Trek is one of the most fascinating and challenging treks in the Indian Himalayas. The trek leads to the mysterious Roopkund Lake at 16,500 feet, where hundreds of ancient human skeletons are visible at the lake\'s bottom when the snow melts. This high-altitude glacial lake, surrounded by rock-strewn glaciers and snow-clad mountains, has baffled scientists and trekkers alike for decades. The trek also offers views of the mighty Trishul and Nanda Ghunti peaks.',
    highlights: [
      'Visit the mysterious Skeleton Lake at 16,500 ft',
      'Witness ancient human skeletons at the lake bed',
      'Views of Trishul and Nanda Ghunti peaks',
      'Cross the Junargali Pass (16,900 ft)',
      'Trek through Ali and Bedni Bugyals'
    ],
    startPoint: 'Lohajung',
    endPoint: 'Lohajung',
    totalDistance: '53 km',
    ageLimit: '15+ years',
    groupSize: '8-12 trekkers',
    itinerary: [
      { day: 1, title: 'Kathgodam to Lohajung', description: 'Scenic drive through Kumaon hills to the base village of Lohajung. Trek briefing and preparation.' },
      { day: 2, title: 'Lohajung to Didna (8,100 ft)', description: 'Descend to the Neel Ganga River, then a steep ascent to the village of Didna. First night in tents.' },
      { day: 3, title: 'Didna to Ali Bugyal (11,300 ft)', description: 'Steep climb through oak and rhododendron forests opens up to the vast Ali Bugyal meadow. Panoramic mountain views.', highlight: true },
      { day: 4, title: 'Ali Bugyal to Patar Nachauni (12,700 ft)', description: 'Easy walk across the meadow to Bedni Bugyal. Visit the ancient Bedni Kund. Continue to Patar Nachauni.' },
      { day: 5, title: 'Patar Nachauni to Bhagwabasa (14,100 ft)', description: 'Steep ascent to Kalu Vinayak Temple. Continue to Bhagwabasa, the highest campsite. Altitude acclimatization.', highlight: true },
      { day: 6, title: 'Bhagwabasa to Roopkund to Bedni (16,500 ft)', description: 'The summit day! Early morning trek to the mysterious Roopkund Lake. View the ancient skeletons. Optional climb to Junargali Pass. Return to Bedni Bugyal.', highlight: true },
      { day: 7, title: 'Bedni to Lohajung via Wan', description: 'Long descent through forests and villages to Wan village. Drive back to Lohajung.' },
      { day: 8, title: 'Lohajung to Kathgodam', description: 'Drive back to Kathgodam. Trek concludes.', highlight: true }
    ],
    included: [
      'Experienced high-altitude trek leader',
      'All camping and technical equipment',
      'Nutritious meals',
      'Forest and trekking permits',
      'Comprehensive medical kit with oxygen',
      'Transport from Kathgodam (return)'
    ],
    excluded: [
      'Personal expenses',
      'Porter/mule charges',
      'Travel insurance (mandatory)',
      'Personal gear',
      'Emergency evacuation costs'
    ]
  },
  {
    id: 'har-ki-dun',
    slug: 'har-ki-dun',
    name: 'Har Ki Dun Trek',
    shortName: 'Har Ki Dun',
    tagline: 'Valley of Gods',
    image: '/trek-har-ki-dun-new.jpeg',
    gallery: [
      '/trek-har-ki-dun-new.jpeg',
      '/trek-har-ki-dun-new1.jpeg',
      '/trek-har-ki-dun-new2.jpeg',
      '/trek-har-ki-dun-new3.jpeg',
      '/trek-har-ki-dun-new4.jpeg',
      '/trek-har-ki-dun-new5.jpeg',
      '/trek-har-ki-dun-new6.jpeg',
      '/trek-har-ki-dun-new7.jpeg',
      '/trek-har-ki-dun-new8.jpeg',
      '/trek-har-ki-dun-new9.jpeg'
    ],
    altitude: '11,700 ft',
    altitudeFt: 11700,
    duration: '7 Days',
    durationDays: 7,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Mar - Jun, Sep - Dec',
    price: 12999,
    location: 'Uttarkashi, Uttarakhand',
    overview: 'Har Ki Dun, meaning "Valley of Gods," is a cradle-shaped hanging valley in the Garhwal Himalayas. This ancient trek follows the trail taken by the Pandavas from the Mahabharata on their way to heaven. Surrounded by Swargarohini, Bandarpoonch, and Black Peak, the valley offers mesmerizing views of snow-capped peaks, dense pine forests, gushing streams, and charming mountain villages that seem frozen in time. The valley is also a paradise for bird watchers and botanists.',
    highlights: [
      'Ancient valley mentioned in the Mahabharata',
      'Views of Swargarohini peak (pathway to heaven)',
      'Visit the 3,000-year-old Osla village',
      'Perfect for beginners and nature lovers',
      'Rich Himalayan flora and fauna'
    ],
    startPoint: 'Sankri',
    endPoint: 'Sankri',
    totalDistance: '44 km',
    ageLimit: '10+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri (6,400 ft)', description: 'Drive through the scenic Tons River valley to Sankri, the base camp. Trek briefing in the evening.' },
      { day: 2, title: 'Sankri to Taluka to Seema (8,200 ft)', description: 'Drive to Taluka. Trek alongside the Tons River through forests to Seema. Views of the Ruinsara Range.', highlight: true },
      { day: 3, title: 'Seema to Har Ki Dun (11,700 ft)', description: 'Gradual ascent through mixed forests and meadows. Arrive at the beautiful Har Ki Dun valley. Views of Swargarohini.', highlight: true },
      { day: 4, title: 'Har Ki Dun Exploration Day', description: 'Explore the valley, visit the Jaundhar Glacier viewpoint. Interact with villagers at Osla. Photography and acclimatization walk.', highlight: true },
      { day: 5, title: 'Har Ki Dun to Seema', description: 'Descend back to Seema through the same scenic route. Relax by the riverside camp.' },
      { day: 6, title: 'Seema to Taluka to Sankri', description: 'Trek back to Taluka and drive to Sankri. Celebrate the completion of the trek with the team.' },
      { day: 7, title: 'Sankri to Dehradun', description: 'Drive back to Dehradun. Trek concludes.', highlight: true }
    ],
    included: [
      'Experienced trek leader',
      'Guest house at Sankri, tents on trek',
      'All meals',
      'Forest permits',
      'Medical kit',
      'Transport from Dehradun (return)'
    ],
    excluded: [
      'Personal expenses',
      'Porter charges',
      'Travel insurance',
      'Personal gear',
      'Village donations (optional)'
    ]
  },
  {
    id: 'brahmatal',
    slug: 'brahmatal',
    name: 'Brahmatal Trek',
    shortName: 'Brahmatal',
    tagline: 'A Winter Wonderland Trek',
    image: '/trek-brahmtal-new.jpeg',
    gallery: ['/trek-brahmtal-new.jpeg', '/trek-brahmtal-new1.jpeg', '/trek-brahmtal-new2.jpeg', '/trek-brahmtal-new3.jpeg', '/trek-brahmtal-new4.jpeg', '/trek-brahmtal-new5.jpeg', '/trek-brahmtal-new6.jpeg', '/trek-brahmtal-new7.jpeg', '/trek-brahmtal-new8.jpeg', '/trek-brahmtal-new9.jpeg', '/trek-brahmtal-new10.jpeg', '/trek-brahmtal-new11.jpeg', '/trek-brahmtal-new12.jpeg', '/trek-brahmtal-new13.jpeg', '/trek-brahmtal-new14.jpeg'],
    altitude: '12,250 ft',
    altitudeFt: 12250,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy',
    difficultyLevel: 'easy',
    bestSeason: 'Dec - Mar',
    price: 7999,
    location: 'Chamoli, Uttarakhand',
    overview: 'The Brahmatal Trek is one of the best winter treks in Uttarakhand, offering a perfect combination of snow-covered trails, frozen lakes, and majestic Himalayan views. The trek takes you to the pristine Brahmatal Lake at 12,250 feet, believed to be the meditation ground of Lord Brahma. From the summit, you get unobstructed views of Mt. Trishul and Mt. Nanda Ghunti. The trail passes through rhododendron forests, vast snowfields, and offers a unique view of Roopkund and Ali Bugyal from a distance.',
    highlights: [
      'Best winter snow trek for beginners',
      'Camp beside the frozen Brahmatal Lake',
      '360-degree summit views of Trishul and Nanda Ghunti',
      'Walk through snow-covered rhododendron forests',
      'Unique view of Ali Bugyal from the ridge'
    ],
    startPoint: 'Lohajung',
    endPoint: 'Lohajung',
    totalDistance: '24 km',
    ageLimit: '8+ years',
    groupSize: '8-15 trekkers',
    itinerary: [
      { day: 1, title: 'Kathgodam to Lohajung', description: 'Drive through the beautiful Kumaon region to Lohajung village. Trek briefing and preparation for the winter trek.' },
      { day: 2, title: 'Lohajung to Bekaltal (9,900 ft)', description: 'Trek through oak and rhododendron forests. Camp near the beautiful Bekaltal Lake surrounded by forests.', highlight: true },
      { day: 3, title: 'Bekaltal to Brahmatal (10,800 ft)', description: 'Ascend through snow-covered trails. Camp near the frozen Brahmatal Lake. Views of Mt. Trishul in the distance.', highlight: true },
      { day: 4, title: 'Brahmatal to Brahmatal Summit to Brahmatal (12,250 ft)', description: 'Summit day! Early morning climb to the Brahmatal Top. Panoramic views of Trishul, Nanda Ghunti, and the surrounding peaks. Return to camp.', highlight: true },
      { day: 5, title: 'Brahmatal to Lohajung', description: 'Descend through the snow-covered trail back to Lohajung. Celebrate the completion of the winter trek.' },
      { day: 6, title: 'Lohajung to Kathgodam', description: 'Drive back to Kathgodam. Trek concludes with winter memories.', highlight: true }
    ],
    included: [
      'Experienced winter trek leader',
      'All camping equipment including winter-grade tents',
      'Nutritious hot meals',
      'Forest permits',
      'Microspikes and gaiters for snow',
      'Medical kit',
      'Transport from Kathgodam (return)'
    ],
    excluded: [
      'Personal expenses',
      'Porter charges',
      'Travel insurance',
      'Winter clothing rental',
      'Emergency evacuation'
    ]
  }
];

export const getTrekBySlug = (slug: string): Trek | undefined => {
  return treks.find(trek => trek.slug === slug);
};

export const getRelatedTreks = (slug: string, count: number = 3): Trek[] => {
  return treks.filter(trek => trek.slug !== slug).slice(0, count);
};
