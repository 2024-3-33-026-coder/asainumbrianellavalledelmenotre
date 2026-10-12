import { PhotoItem, TerritoryDestination, AvailabilityPeriod } from '../types';

export const PROPERTY_INFO = {
  brand: 'CASA IN UMBRIA',
  sublabel: 'VALLE DEL MENOTRE',
  fullName: 'Casa in Umbria nella Valle del Menotre',
  taglineIt: 'Il lusso di rallentare.',
  taglineEn: 'The luxury of slowing down.',
  cin: 'IT054018C2BJ032622',
  phone: '+39 353 484 9640',
  phoneClean: '393534849640',
  email: 'contirossihouse@gmail.com',
  address: {
    village: 'Frazione Scopoli',
    city: 'Foligno',
    province: 'PG',
    region: 'Umbria',
    country: 'Italia',
    postalCode: '06034',
    fullString: 'Frazione Scopoli, 06034 Foligno (PG), Umbria, Italia',
    googleMapsUrl: 'https://maps.google.com/?q=Scopoli+Foligno+Umbria'
  },
  capacity: {
    maxGuests: 4,
    bedrooms: 2,
    bedsDescriptionIt: 'Due camere da letto separate, inclusa la caratteristica camera mansardata con travi in legno',
    bedsDescriptionEn: 'Two separate bedrooms, including a cozy attic room with exposed wooden beams',
    bathrooms: 1
  }
};

export const PROPERTY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    src: '/images/casa-in-umbria/photo_1.jpg',
    altIt: 'Camera da letto accogliente e luminosa con arredi curati a Casa in Umbria',
    altEn: 'Cozy and bright bedroom with thoughtful furnishings at Casa in Umbria',
    titleIt: 'La Camera Padronale',
    titleEn: 'Master Bedroom',
    category: 'spaces',
    aspect: 'portrait'
  },
  {
    id: 'photo-2',
    src: '/images/casa-in-umbria/photo_2.jpg',
    altIt: 'Esterno in pietra e scorcio panoramico della casa nel borgo di Scopoli',
    altEn: 'Stone exterior and scenic village view in Scopoli, Umbria',
    titleIt: 'Scorcio del Borgo di Scopoli',
    titleEn: 'Village View in Scopoli',
    category: 'spaces',
    aspect: 'landscape'
  },
  {
    id: 'photo-3',
    src: '/images/casa-in-umbria/photo_3.jpg',
    altIt: 'Zona giorno e salotto per momenti di relax e lettura',
    altEn: 'Living area and lounge for peaceful reading and downtime',
    titleIt: 'Zona Giorno & Relax',
    titleEn: 'Living & Downtime Area',
    category: 'spaces',
    aspect: 'landscape'
  },
  {
    id: 'photo-4',
    src: '/images/casa-in-umbria/photo_4.jpg',
    altIt: 'Camera mansardata con travi a vista in legno, amata anche dai più piccoli',
    altEn: 'Attic bedroom with exposed wooden ceiling beams, loved by children',
    titleIt: 'Camera Mansardata',
    titleEn: 'Attic Bedroom',
    category: 'spaces',
    aspect: 'portrait'
  },
  {
    id: 'photo-5',
    src: '/images/casa-in-umbria/photo_5.jpg',
    altIt: 'La terrazza privata con vista aperta sulla natura della Valle del Menotre',
    altEn: 'Private terrace with open natural views over Valle del Menotre',
    titleIt: 'Il Terrazzino Panoramico',
    titleEn: 'Scenic Small Terrace',
    category: 'outdoor',
    aspect: 'landscape'
  },
  {
    id: 'photo-6',
    src: '/images/casa-in-umbria/photo_6.jpg',
    altIt: 'Prato verde ampio a disposizione degli ospiti e dei loro animali',
    altEn: 'Expansive lawn area available for guests and their pets',
    titleIt: 'Il Prato Esterno',
    titleEn: 'Open Country Lawn',
    category: 'outdoor',
    aspect: 'landscape'
  },
  {
    id: 'photo-7',
    src: '/images/casa-in-umbria/photo_7.jpg',
    altIt: 'Dettaglio dell accoglienza pet-friendly con cagnolino felice a Casa in Umbria',
    altEn: 'Pet-friendly hospitality detail with happy dog at Casa in Umbria',
    titleIt: 'Ospiti a Quattro Zampe',
    titleEn: 'Four-Legged Guests',
    category: 'details',
    aspect: 'portrait'
  },
  {
    id: 'photo-8',
    src: '/images/casa-in-umbria/photo_8.jpg',
    altIt: 'Area relax esterna con barbecue e divanetti a 50m nel cuore del borgo',
    altEn: 'Outdoor lounge area with barbecue and sofas 50 meters away in the village',
    titleIt: 'Spazio Relax & Barbecue (a 50m)',
    titleEn: 'Lounge & Barbecue Area (50m)',
    category: 'outdoor',
    aspect: 'landscape'
  },
  {
    id: 'photo-9',
    src: '/images/casa-in-umbria/photo_9.jpg',
    altIt: 'Dettagli autentici della tradizione umbra e materiali caldi della casa',
    altEn: 'Authentic Umbrian details and warm natural materials in the home',
    titleIt: 'Dettagli di Tradizione',
    titleEn: 'Traditional Details',
    category: 'details',
    aspect: 'portrait'
  },
  {
    id: 'photo-10',
    src: '/images/casa-in-umbria/photo_10.jpg',
    altIt: 'Il verde rigoglioso e la natura incontaminata della Valle del Menotre',
    altEn: 'Lush greenery and unspoiled nature in the Menotre Valley',
    titleIt: 'Valle del Menotre & Sentieri',
    titleEn: 'Menotre Valley & Hiking Trails',
    category: 'territory',
    aspect: 'landscape'
  }
];

export const AVAILABILITY_PERIODS: AvailabilityPeriod[] = [
  {
    id: 'autumn-2026',
    titleIt: 'Autunno 2026 (Periodo Confermato)',
    titleEn: 'Autumn 2026 (Confirmed Window)',
    datesIt: '9 Novembre – 22 Novembre 2026',
    datesEn: 'November 9 – November 22, 2026',
    statusIt: 'Disponibilità Verificata',
    statusEn: 'Verified Availability',
    statusType: 'available',
    notesIt: 'Perfetto per il foliage autunnale, passeggiate tra i boschi e quiete assoluta.',
    notesEn: 'Ideal for autumn foliage, tranquil woodland walks, and deep quiet.'
  },
  {
    id: 'december-2026',
    titleIt: 'Dicembre 2026',
    titleEn: 'December 2026',
    datesIt: 'Date flessibili su richiesta',
    datesEn: 'Flexible dates on inquiry',
    statusIt: 'Disponibile su Richiesta',
    statusEn: 'Available on Request',
    statusType: 'on-request',
    notesIt: 'Disponibilità comunicata dal proprietario. Verifica anticipata per le festività natalizie.',
    notesEn: 'Period communicated by owner. Advance verification recommended for Christmas holidays.'
  },
  {
    id: 'holidays-2026',
    titleIt: 'Festività Natalizie & Capodanno',
    titleEn: 'Christmas Season & New Year',
    datesIt: 'Dicembre 2026 – Gennaio 2027',
    datesEn: 'December 2026 – January 2027',
    statusIt: 'Richieste Aperte',
    statusEn: 'Inquiries Open',
    statusType: 'open',
    notesIt: 'Nota trasparenza: nel borgo (~200 abitanti) non è possibile garantire isolamento acustico totale dai fuochi di Capodanno.',
    notesEn: 'Transparency note: in the small village (~200 people), total fireworks isolation cannot be guaranteed for New Year.'
  },
  {
    id: 'season-2027',
    titleIt: 'Stagione 2027',
    titleEn: '2027 Season',
    datesIt: 'Primavera, Estate, Autunno 2027',
    datesEn: 'Spring, Summer, Autumn 2027',
    statusIt: 'Prenotazioni Aperte',
    statusEn: 'Bookings Open',
    statusType: 'open',
    notesIt: 'Richiedi il tuo soggiorno con anticipo per assicurarti le settimane migliori tra le fioriture e le escursioni estive.',
    notesEn: 'Plan ahead to secure preferred weeks during spring blooms and summer trekking.'
  }
];

export const PET_WELCOME_KIT = [
  {
    nameIt: 'Asciugamani dedicati',
    nameEn: 'Dedicated pet towels',
    descIt: 'Morbidi teli riservati alla pulizia delle zampe dopo le camminate nella natura',
    descEn: 'Soft towels specifically set aside for paws after trail adventures'
  },
  {
    nameIt: 'Lunghine da passeggio',
    nameEn: 'Long training leads',
    descIt: 'Comode per far esplorare il prato esterno non recintato in tutta serenità',
    descEn: 'Comfortable for exploring the open, unfenced lawn with complete peace of mind'
  },
  {
    nameIt: 'Salviette igieniche',
    nameEn: 'Pet wet wipes',
    descIt: 'Sempre pronte all ingresso per rinfrescare il pelo al rientro',
    descEn: 'Ready by the door to freshen up coats when returning from walks'
  },
  {
    nameIt: 'Sacchetti igienici biodegradabili',
    nameEn: 'Biodegradable waste bags',
    descIt: 'In dotazione per le vostre passeggiate nel borgo e lungo i sentieri',
    descEn: 'Supplied for respectful walks through the village alleys and pathways'
  },
  {
    nameIt: 'Tappetini per ciotole & riposo',
    nameEn: 'Waterproof floor mats',
    descIt: 'Superfici protettive igieniche per le ciotole e per il comfort del riposo',
    descEn: 'Clean protective mats for bowls and cozy lounging corners'
  }
];

export const CONFIRMED_AMENITIES = [
  {
    titleIt: '4 Posti Letto Reali',
    titleEn: '4 Real Sleeping Places',
    descIt: 'Due camere da letto separate, con camera mansardata caratteristica ideale per bambini o relax',
    descEn: 'Two separate bedrooms, including a characterful attic room ideal for kids or restful retreat'
  },
  {
    titleIt: 'Prato Esterno Ampio',
    titleEn: 'Generous Outdoor Lawn',
    descIt: 'Spazio verde all aperto (non recintato) per respirare aria pura di montagna',
    descEn: 'Open natural green area (unfenced) to breathe fresh mountain air'
  },
  {
    titleIt: 'Piccolo Terrazzino',
    titleEn: 'Scenic Small Terrace',
    descIt: 'Angolo all aperto affacciato sul borgo e sui monti della valle per colazioni lente',
    descEn: 'Outdoor corner facing the village and valley hills for slow mornings'
  },
  {
    titleIt: 'Area Barbecue & Divani a 50m',
    titleEn: 'Barbecue & Sofas Area at 50m',
    descIt: 'Spazio comune a breve distanza (circa 50 metri dalla casa) per grigliate e relax serale',
    descEn: 'Lounge area just ~50 meters from the home for quiet evening grilling and conversation'
  },
  {
    titleIt: 'Pet Welcome Kit Incluso',
    titleEn: 'Complimentary Pet Kit',
    descIt: 'Nessun supplemento e nessun limite di taglia. Kit con asciugamani, lunghine e salviette',
    descEn: 'No extra pet fees and no breed size restrictions. Welcoming kit included upon arrival'
  },
  {
    titleIt: 'Comodità del Borgo a Piedi',
    titleEn: 'Village Essentials on Foot',
    descIt: 'Piccolo alimentari di paese e bar raggiungibili comodamente a piedi a Scopoli',
    descEn: 'Local corner grocer and traditional cafe-bar within short walking distance in Scopoli'
  },
  {
    titleIt: '10 Minuti da Foligno',
    titleEn: '10 Minutes to Foligno',
    descIt: 'Supermercati, farmacie, ristoranti e tutti i servizi cittadini a circa 10 minuti di auto',
    descEn: 'Supermarkets, pharmacies, restaurants and urban conveniences just 10 mins drive away'
  },
  {
    titleIt: 'Consigli Personalizzati Trekking',
    titleEn: 'Host Trekking Insights',
    descIt: 'L host condivide consigli mirati su percorsi, sentieri ad anello e cascate meno battute',
    descEn: 'Personal advice from the host on scenic trails, loop hikes, and hidden regional waterfalls'
  }
];

export const TERRITORY_DESTINATIONS: TerritoryDestination[] = [
  {
    id: 'rasiglia',
    name: 'Rasiglia',
    subtitleIt: 'La Piccola Venezia dell Umbria',
    subtitleEn: 'The Little Venice of Umbria',
    distanceIt: '~10 min auto',
    distanceEn: '~10 mins drive',
    descriptionIt: 'Un incantevole borgo medievale dove ruscelli limpidi scorrono tra case in pietra, antichi mulini e telai d epoca. Uno dei luoghi più fotografati e magici della regione.',
    descriptionEn: 'An enchanting medieval hamlet where crystalline water streams flow directly between stone houses, old mills, and weaving looms.',
    tag: 'borgo',
    highlightIt: 'Cascate e canali d acqua perenne tra i vicoli',
    highlightEn: 'Living streams and waterfalls weaving through stone alleys'
  },
  {
    id: 'cascate-menotre',
    name: 'Pale & Cascate del Menotre',
    subtitleIt: 'Grotte carsiche e salti d acqua',
    subtitleEn: 'Karst Caves and Waterfalls',
    distanceIt: '~8 min auto',
    distanceEn: '~8 mins drive',
    descriptionIt: 'Ai piedi del monte Sasso di Pale, il fiume Menotre si tuffa in suggestive cascate immerse nella vegetazione. Da non perdere le Grotte dell Abbadessa.',
    descriptionEn: 'At the foot of Sasso di Pale, the Menotre River tumbles down scenic cascades shrouded in lush forest. Home to prehistoric caves.',
    tag: 'natura',
    highlightIt: 'Sentiero ombreggiato lungo il corso d acqua',
    highlightEn: 'Shaded path following the refreshing mountain river'
  },
  {
    id: 'eremo-giacobbe',
    name: 'Eremo di Santa Maria Giacobbe',
    subtitleIt: 'Santuario incastonato nella roccia',
    subtitleEn: 'Rock-Carved Mountain Sanctuary',
    distanceIt: '~10 min auto + sentiero',
    distanceEn: '~10 mins drive + hike',
    descriptionIt: 'Spettacolare santuario medievale letteralmente scavato nella parete rocciosa del monte. Affreschi duecenteschi e una vista mozzafiato sulla valle.',
    descriptionEn: 'A breathtaking medieval hermitage perched cliffside on the mountain. Rich with 13th-century frescoes and panoramic valley vistas.',
    tag: 'cultura',
    highlightIt: 'Silenzio mistico e architettura rupestre',
    highlightEn: 'Mystical silence and extraordinary rock architecture'
  },
  {
    id: 'sellano',
    name: 'Sellano & Ponte Tibetano',
    subtitleIt: 'L adrenalina sospesa sulla Valnerina',
    subtitleEn: 'Europe’s High Suspension Bridge',
    distanceIt: '~25 min auto',
    distanceEn: '~25 mins drive',
    descriptionIt: 'Borgo fortificato che ospita il ponte tibetano pedonale a pedata discontinua più alto d Europa, sospeso a 175 metri sopra il torrente Vigi.',
    descriptionEn: 'A fortified village hosting Europe’s highest pedestrian discontinuous suspension bridge, floating 175 meters above the valley stream.',
    tag: 'escursione',
    highlightIt: 'Vista a 360° sulla gola e sul lago di Montesanto',
    highlightEn: '360° views across the gorge and Montesanto lake'
  },
  {
    id: 'colfiorito',
    name: 'Parco Naturale di Colfiorito',
    subtitleIt: 'Altopiano e palude protetta',
    subtitleEn: 'High Plateau & Protected Wetlands',
    distanceIt: '~15 min auto',
    distanceEn: '~15 mins drive',
    descriptionIt: 'Altopiano carsico protetto, celebre per la sua palude ricca di avifauna migratoria e per i celebri prodotti tipici come le lenticchie IGP e la patata rossa.',
    descriptionEn: 'A high karst plateau protected park famous for migratory bird watching and renowned local delicacies like IGP lentils and red potatoes.',
    tag: 'natura',
    highlightIt: 'Birdwatching e sapori tipici umbri d alta quota',
    highlightEn: 'Birdwatching trails and high-plateau culinary heritage'
  },
  {
    id: 'spello-foligno',
    name: 'Spello & Foligno',
    subtitleIt: 'Fiori in pietra e cuore rinascimentale',
    subtitleEn: 'Flower Alleys & Renaissance Heart',
    distanceIt: '~10-15 min auto',
    distanceEn: '~10-15 mins drive',
    descriptionIt: 'Spello, celebre per le sue infiorate e i vicoli fioriti di pietra rosa; Foligno, vivace centro con boutique, palazzi rinascimentali e comodità quotidiane.',
    descriptionEn: 'Spello, renowned for pink-stone floral alleys; Foligno, vibrant city with boutiques, Renaissance palaces and every convenience.',
    tag: 'borgo',
    highlightIt: 'Pinturicchio a Santa Maria Maggiore e vita di piazza',
    highlightEn: 'Pinturicchio frescoes and authentic Italian piazza life'
  },
  {
    id: 'assisi',
    name: 'Assisi, Montefalco & Spoleto',
    subtitleIt: 'I grandi tesori dell Umbria a portata di mano',
    subtitleEn: 'Umbria’s Renowned Gems Within Easy Reach',
    distanceIt: '~20-35 min auto',
    distanceEn: '~20-35 mins drive',
    descriptionIt: 'La spiritualità di San Francesco ad Assisi, i calici di Sagrantino sui colli di Montefalco e lo scenografico Ponte delle Torri di Spoleto.',
    descriptionEn: 'Saint Francis’ serenity in Assisi, Sagrantino wine tastings in Montefalco, and the monumental fortress bridges in Spoleto.',
    tag: 'cultura',
    highlightIt: 'Patrimoni UNESCO e degustazioni enologiche d eccellenza',
    highlightEn: 'UNESCO world heritage sites and world-class wine cellars'
  }
];

export const FAQS = [
  {
    qIt: 'Quante persone possono soggiornare nella casa?',
    qEn: 'How many guests can stay in the apartment?',
    aIt: 'La casa dispone di 4 posti letto reali distribuiti in due camere da letto separate, tra cui la caratteristica camera mansardata particolarmente apprezzata dai bambini.',
    aEn: 'The home comfortably accommodates up to 4 guests across two separate bedrooms, including a charming attic bedroom loved by children.'
  },
  {
    qIt: 'Qual è la politica per gli animali domestici?',
    qEn: 'What is the pet policy?',
    aIt: 'Gli animali domestici (cani e gatti) sono i benvenuti senza alcun supplemento di prezzo e senza limiti di taglia. All arrivo troverete un Pet Welcome Kit con asciugamani, lunghine, salviette e tappetini.',
    aEn: 'Pets (dogs and cats) are warmly welcomed with NO extra fee and NO size/breed restrictions. Guests receive a complimentary Pet Welcome Kit upon arrival.'
  },
  {
    qIt: 'Il prato esterno è recintato?',
    qEn: 'Is the outdoor lawn fenced?',
    aIt: 'No, il prato esterno non è recintato. È uno spazio aperto naturale immerso nel borgo e nella vegetazione. Per i cani che amano allontanarsi forniamo in dotazione pratiche lunghine.',
    aEn: 'No, the outdoor lawn is an open, unfenced natural area. For dogs that tend to roam, we provide long training leads in the welcome kit.'
  },
  {
    qIt: 'La casa è silenziosa a Capodanno per cani paurosi dei botti?',
    qEn: 'Is the home completely fireworks-free for New Year’s Eve?',
    aIt: 'Per massima onestà e trasparenza: la casa è situata in un piccolo borgo abitato di circa 200 persone dove sono presenti altri cani e famiglie. Non possiamo pertanto garantire l assenza assoluta di botti o rumori durante la notte di Capodanno.',
    aEn: 'For complete honesty and safety: the property sits in a small residential village of ~200 people with local families and dogs. Total absence of fireworks cannot be guaranteed on New Year’s Eve.'
  },
  {
    qIt: 'Dove si trovano l area barbecue e i divanetti?',
    qEn: 'Where are the barbecue and outdoor sofas located?',
    aIt: 'L area relax con barbecue e divanetti si trova a circa 50 metri dalla casa, in un punto tranquillo del borgo a disposizione per cene e momenti conviviali.',
    aEn: 'The lounge area with barbecue and sofas is located approximately 50 meters from the house in a peaceful village nook.'
  },
  {
    qIt: 'Ci sono negozi o alimentari raggiungibili a piedi?',
    qEn: 'Are there grocery shops within walking distance?',
    aIt: 'Sì, a Scopoli è presente un piccolo alimentari di paese e un bar raggiungibili a piedi. Per grandi supermercati, farmacie e centri commerciali, Foligno dista solo 10 minuti di automobile.',
    aEn: 'Yes, Scopoli has a traditional local grocer and a cafe-bar within walking distance. For larger supermarkets and pharmacies, Foligno is only 10 minutes by car.'
  },
  {
    qIt: 'Come funziona la richiesta di prenotazione?',
    qEn: 'How does the booking inquiry process work?',
    aIt: 'Invii la tua richiesta tramite il modulo o direttamente via WhatsApp/Email. L host verifica la disponibilità delle date e ti risponde personalmente con tutte le condizioni e i dettagli, senza commissioni di intermediari.',
    aEn: 'You submit your inquiry via the form or directly through WhatsApp/Email. The host personally checks calendar dates and replies directly with all stay terms—no middleman booking fees.'
  }
];
