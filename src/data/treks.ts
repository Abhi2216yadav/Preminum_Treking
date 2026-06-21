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
  overview: string;
  highlights: string[];
  startPoint: string;
  endPoint: string;
  totalDistance: string;
  ageLimit: string;
  groupSize: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
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
    price: 12500,
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
    id: 'valley-of-flowers',
    slug: 'valley-of-flowers',
    name: 'Valley of Flowers Trek',
    shortName: 'Valley of Flowers',
    tagline: 'A UNESCO World Heritage Paradise',
    image: '/trek-valley-flowers.jpg',
    gallery: ['/trek-valley-flowers.jpg', '/gallery-forest.jpg', '/gallery-lake.jpg', '/hero-gear.jpg'],
    altitude: '14,100 ft',
    altitudeFt: 14100,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Jul - Sep',
    price: 10500,
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
    price: 9500,
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
    image: '/trek-roopkund.jpg',
    gallery: ['/trek-roopkund.jpg', '/gallery-snow.jpg', '/hero-mountain.jpg', '/gallery-camping.jpg'],
    altitude: '16,500 ft',
    altitudeFt: 16500,
    duration: '8 Days',
    durationDays: 8,
    difficulty: 'Moderate-Difficult',
    difficultyLevel: 'difficult',
    bestSeason: 'May - Jun, Sep - Oct',
    price: 15500,
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
    image: '/trek-har-ki-dun.jpg',
    gallery: ['/trek-har-ki-dun.jpg', '/gallery-forest.jpg', '/gallery-sunrise.jpg', '/hero-gear.jpg'],
    altitude: '11,700 ft',
    altitudeFt: 11700,
    duration: '7 Days',
    durationDays: 7,
    difficulty: 'Easy-Moderate',
    difficultyLevel: 'easy',
    bestSeason: 'Mar - Jun, Sep - Dec',
    price: 13500,
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
    image: '/trek-brahmatal.jpg',
    gallery: ['/trek-brahmatal.jpg', '/gallery-snow.jpg', '/gallery-camping.jpg', '/hero-mountain.jpg'],
    altitude: '12,250 ft',
    altitudeFt: 12250,
    duration: '6 Days',
    durationDays: 6,
    difficulty: 'Easy',
    difficultyLevel: 'easy',
    bestSeason: 'Dec - Mar',
    price: 8500,
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
