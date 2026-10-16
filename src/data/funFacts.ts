export interface FunFact {
	en: string;
	es: string;
}

/**
 * One fun fact per country, keyed by ISO 3166-1 alpha-2 code (the format of
 * Vercel's `x-vercel-ip-country` header). Only imported on the server, so
 * visitors never download the whole list.
 */
export const funFacts: Record<string, FunFact> = {
	AD: {
		en: "Andorra has no airport and no train station of its own.",
		es: "Andorra no tiene aeropuerto ni estación de tren propios.",
	},
	AE: {
		en: "Dubai's police patrol in Lamborghinis, Ferraris and even a Bugatti Veyron.",
		es: "La policía de Dubái patrulla en Lamborghinis, Ferraris e incluso un Bugatti Veyron.",
	},
	AF: {
		en: "The blue lapis lazuli in Tutankhamun's mask most likely came from mines in Afghanistan's Badakhshan.",
		es: "El lapislázuli azul de la máscara de Tutankamón probablemente vino de minas de Badajshán, en Afganistán.",
	},
	AG: {
		en: "Barbuda's Codrington Lagoon has one of the largest frigatebird colonies in the world.",
		es: "La laguna de Codrington, en Barbuda, tiene una de las mayores colonias de fragatas del mundo.",
	},
	AL: {
		en: "Until 1991, owning a private car was practically forbidden in Albania.",
		es: "Hasta 1991, tener un coche particular estaba prácticamente prohibido en Albania.",
	},
	AM: {
		en: "The world's oldest known leather shoe, about 5,500 years old, was found in an Armenian cave.",
		es: "El zapato de cuero más antiguo conocido, de unos 5.500 años, se encontró en una cueva de Armenia.",
	},
	AO: {
		en: "Angola's giant sable antelope was feared extinct during the civil war, until camera traps spotted it in 2005.",
		es: "El antílope sable gigante de Angola se creía extinguido durante la guerra civil, hasta que unas cámaras trampa lo captaron en 2005.",
	},
	AR: {
		en: "In 1892, Argentina became the first country to solve a crime using fingerprints.",
		es: "En 1892, Argentina fue el primer país en resolver un crimen gracias a las huellas dactilares.",
	},
	AT: {
		en: "There is a full-size copy of the Austrian village of Hallstatt in China.",
		es: "Existe una copia a tamaño real del pueblo austriaco de Hallstatt en China.",
	},
	AU: {
		en: "In 1932, the Australian army went to \"war\" against emus, and lost.",
		es: "En 1932, el ejército australiano le declaró la \"guerra\" a los emús, y perdió.",
	},
	AZ: {
		en: "In Naftalan, people bathe in crude oil as a health treatment.",
		es: "En Naftalán, la gente se baña en petróleo crudo como tratamiento de salud.",
	},
	BA: {
		en: "Sarajevo had one of Europe's first electric tram lines, running since 1895.",
		es: "Sarajevo tuvo una de las primeras líneas de tranvía eléctrico de Europa, en servicio desde 1895.",
	},
	BB: {
		en: "The only trip George Washington ever made abroad was to Barbados, in 1751.",
		es: "El único viaje al extranjero que hizo George Washington fue a Barbados, en 1751.",
	},
	BD: {
		en: "Dhaka's hand-painted rickshaw art was added to UNESCO's cultural heritage list in 2023.",
		es: "El arte pintado a mano de los rickshaws de Daca entró en la lista de patrimonio cultural de la UNESCO en 2023.",
	},
	BE: {
		en: "Belgium once went 541 days without a government, a world record at the time.",
		es: "Bélgica estuvo una vez 541 días sin gobierno, récord mundial en su momento.",
	},
	BF: {
		en: "Ouagadougou hosts FESPACO, the largest film festival in Africa, every two years.",
		es: "Uagadugú acoge cada dos años el FESPACO, el mayor festival de cine de África.",
	},
	BG: {
		en: "John Atanasoff, a pioneer of the electronic digital computer, was the son of a Bulgarian immigrant.",
		es: "John Atanasoff, pionero del ordenador digital electrónico, era hijo de un inmigrante búlgaro.",
	},
	BH: {
		en: "In 2004, Bahrain hosted the first Formula 1 Grand Prix in the Middle East.",
		es: "En 2004, Baréin acogió el primer Gran Premio de Fórmula 1 de Oriente Medio.",
	},
	BI: {
		en: "Lake Tanganyika, on Burundi's western edge, is the longest freshwater lake in the world.",
		es: "El lago Tanganica, en el oeste de Burundi, es el lago de agua dulce más largo del mundo.",
	},
	BJ: {
		en: "Ganvié is a whole town of around 20,000 people living in stilt houses on a lake.",
		es: "Ganvié es un pueblo entero de unas 20.000 personas que viven en casas sobre pilotes en un lago.",
	},
	BN: {
		en: "The Sultan of Brunei's palace has 1,788 rooms, making it the largest residential palace in the world.",
		es: "El palacio del sultán de Brunéi tiene 1.788 habitaciones: es el mayor palacio residencial del mundo.",
	},
	BO: {
		en: "La Paz's cable car network, Mi Teleférico, is the largest urban cable car system in the world.",
		es: "Mi Teleférico, la red de La Paz, es el mayor sistema de teleféricos urbanos del mundo.",
	},
	BR: {
		en: "Visiting Brazil's Snake Island is banned: it's home to thousands of venomous golden lanceheads.",
		es: "Visitar la Isla de las Serpientes de Brasil está prohibido: viven en ella miles de serpientes venenosas.",
	},
	BS: {
		en: "Andros Island has more underwater blue holes than anywhere else on Earth.",
		es: "La isla de Andros tiene más agujeros azules submarinos que ningún otro lugar del planeta.",
	},
	BT: {
		en: "Bhutan didn't allow television or the internet until 1999.",
		es: "Bután no permitió la televisión ni internet hasta 1999.",
	},
	BW: {
		en: "Botswana is home to the largest elephant population in the world, around 130,000.",
		es: "Botsuana tiene la mayor población de elefantes del mundo, unos 130.000.",
	},
	BY: {
		en: "Minsk's National Library is shaped like a giant diamond, a rhombicuboctahedron.",
		es: "La Biblioteca Nacional de Minsk tiene forma de diamante gigante: un rombicuboctaedro.",
	},
	BZ: {
		en: "Belize's Cockscomb Basin was the world's first sanctuary created just for jaguars.",
		es: "La cuenca de Cockscomb, en Belice, fue el primer santuario del mundo creado solo para jaguares.",
	},
	CA: {
		en: "Churchill, Manitoba, has a \"polar bear jail\" for bears that wander into town.",
		es: "Churchill, en Manitoba, tiene una \"cárcel para osos polares\" que se acercan demasiado al pueblo.",
	},
	CD: {
		en: "Mount Nyiragongo holds one of the largest lava lakes in the world inside its crater.",
		es: "El monte Nyiragongo guarda en su cráter uno de los mayores lagos de lava del mundo.",
	},
	CF: {
		en: "At Dzanga Bai, hundreds of forest elephants gather in a single clearing.",
		es: "En Dzanga Bai, cientos de elefantes de bosque se reúnen en un mismo claro.",
	},
	CG: {
		en: "Odzala-Kokoua, created in 1935, is one of the oldest national parks in Africa.",
		es: "Odzala-Kokoua, creado en 1935, es uno de los parques nacionales más antiguos de África.",
	},
	CH: {
		en: "Swiss law requires guinea pigs to be kept with a companion, because they get lonely.",
		es: "La ley suiza obliga a tener a los conejillos de Indias acompañados, porque se sienten solos.",
	},
	CI: {
		en: "Yamoussoukro's Basilica of Our Lady of Peace is listed as the largest church in the world.",
		es: "La basílica de Nuestra Señora de la Paz de Yamusukro figura como la iglesia más grande del mundo.",
	},
	CL: {
		en: "The famous Easter Island \"heads\" on Rano Raraku have full bodies buried underground.",
		es: "Las famosas \"cabezas\" de Isla de Pascua en Rano Raraku tienen el cuerpo entero enterrado.",
	},
	CM: {
		en: "Around 250 different languages are spoken in Cameroon.",
		es: "En Camerún se hablan alrededor de 250 lenguas distintas.",
	},
	CN: {
		en: "China spans five geographical time zones but uses just one official time.",
		es: "China abarca cinco husos horarios geográficos, pero usa una única hora oficial.",
	},
	CO: {
		en: "Nearly 200 wild hippos live in Colombia, descendants of Pablo Escobar's private zoo.",
		es: "En Colombia viven casi 200 hipopótamos salvajes, descendientes del zoo privado de Pablo Escobar.",
	},
	CR: {
		en: "Hundreds of perfectly round stone spheres, carved over 1,000 years ago, are scattered around southern Costa Rica.",
		es: "Cientos de esferas de piedra perfectas, talladas hace más de 1.000 años, están repartidas por el sur de Costa Rica.",
	},
	CU: {
		en: "Hemingway's fishing boat, the Pilar, is still kept at his old home outside Havana.",
		es: "El barco de pesca de Hemingway, el Pilar, se conserva todavía en su antigua casa a las afueras de La Habana.",
	},
	CV: {
		en: "On Fogo, people grow wine grapes inside the crater of an active volcano.",
		es: "En Fogo se cultivan uvas para vino dentro del cráter de un volcán activo.",
	},
	CY: {
		en: "The oldest known burial of a pet cat, about 9,500 years old, was found in Cyprus.",
		es: "El enterramiento de un gato doméstico más antiguo conocido, de unos 9.500 años, se encontró en Chipre.",
	},
	CZ: {
		en: "The word \"robot\" comes from Czech; writer Karel Čapek's brother Josef coined it.",
		es: "La palabra \"robot\" viene del checo; la inventó Josef, el hermano del escritor Karel Čapek.",
	},
	DE: {
		en: "Fanta was invented in Germany during WWII, when Coca-Cola syrup couldn't be imported.",
		es: "La Fanta se inventó en Alemania durante la Segunda Guerra Mundial, cuando no se podía importar el jarabe de Coca-Cola.",
	},
	DJ: {
		en: "The limestone chimneys of Lac Abbé appeared in the original Planet of the Apes.",
		es: "Las chimeneas de piedra caliza del lago Abbé aparecieron en El planeta de los simios original.",
	},
	DK: {
		en: "Bakken, north of Copenhagen, opened in 1583 and is the oldest amusement park still running.",
		es: "Bakken, al norte de Copenhague, abrió en 1583 y es el parque de atracciones en funcionamiento más antiguo.",
	},
	DM: {
		en: "Dominica is said to have 365 rivers, one for every day of the year.",
		es: "Se dice que Dominica tiene 365 ríos, uno para cada día del año.",
	},
	DO: {
		en: "The Dominican Republic is one of the very few places in the world with blue amber.",
		es: "República Dominicana es uno de los poquísimos lugares del mundo con ámbar azul.",
	},
	DZ: {
		en: "Tassili n'Ajjer has thousands of prehistoric paintings showing a green Sahara full of giraffes and cattle.",
		es: "Tassili n'Ajjer tiene miles de pinturas prehistóricas que muestran un Sáhara verde lleno de jirafas y ganado.",
	},
	EC: {
		en: "In 2008, Ecuador became the first country to give nature its own rights in its constitution.",
		es: "En 2008, Ecuador fue el primer país en reconocer derechos a la naturaleza en su constitución.",
	},
	EE: {
		en: "Estonians invented kiiking: swinging a full 360° loop on a giant swing.",
		es: "Los estonios inventaron el kiiking: dar una vuelta completa de 360° en un columpio gigante.",
	},
	EG: {
		en: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.",
		es: "Cleopatra vivió más cerca en el tiempo de la llegada a la Luna que de la construcción de la Gran Pirámide.",
	},
	ER: {
		en: "Asmara sits at about 2,300 m, making it one of the highest capital cities in Africa.",
		es: "Asmara está a unos 2.300 m de altitud, una de las capitales más altas de África.",
	},
	ES: {
		en: "Llívia is a Spanish town completely surrounded by France.",
		es: "Llívia es un pueblo español completamente rodeado por Francia.",
	},
	ET: {
		en: "Legend says coffee was discovered when a goat herder named Kaldi saw his goats dancing after eating the berries.",
		es: "La leyenda cuenta que el café se descubrió cuando un pastor llamado Kaldi vio a sus cabras bailar tras comer sus frutos.",
	},
	FI: {
		en: "Oulu hosts the Air Guitar World Championships every year.",
		es: "Oulu acoge cada año el Campeonato Mundial de Guitarra Invisible.",
	},
	FJ: {
		en: "The Sawau people of Beqa island are famous for walking barefoot over red-hot stones.",
		es: "El pueblo sawau de la isla de Beqa es famoso por caminar descalzo sobre piedras al rojo vivo.",
	},
	FM: {
		en: "Nan Madol is an ancient city built on around 100 artificial islets in a lagoon.",
		es: "Nan Madol es una antigua ciudad construida sobre unos 100 islotes artificiales en una laguna.",
	},
	FR: {
		en: "Until 2013, an 1800 police order technically banned women in Paris from wearing trousers.",
		es: "Hasta 2013, una ordenanza policial de 1800 prohibía técnicamente a las mujeres de París llevar pantalones.",
	},
	GA: {
		en: "Oklo has the only known natural nuclear reactors, active about 2 billion years ago.",
		es: "En Oklo están los únicos reactores nucleares naturales conocidos, activos hace unos 2.000 millones de años.",
	},
	GB: {
		en: "All unmarked mute swans on open water in England technically belong to the monarch.",
		es: "Todos los cisnes mudos sin marcar en aguas abiertas de Inglaterra pertenecen técnicamente al monarca.",
	},
	GD: {
		en: "Grenada has the world's first underwater sculpture park, in Molinere Bay.",
		es: "Granada tiene el primer parque de esculturas submarinas del mundo, en la bahía de Molinere.",
	},
	GE: {
		en: "In Chiatura, miners still ride Soviet-era cable cars nicknamed \"Stalin's rope roads\".",
		es: "En Chiatura, los mineros aún usan teleféricos soviéticos apodados \"los caminos de cuerda de Stalin\".",
	},
	GH: {
		en: "In Ghana, people can be buried in fantasy coffins shaped like fish, planes or even Coca-Cola bottles.",
		es: "En Ghana se puede enterrar a alguien en ataúdes con forma de pez, avión o incluso botella de Coca-Cola.",
	},
	GL: {
		en: "No roads connect Nuuk to any other town; you travel by boat, plane, dog sled or snowmobile.",
		es: "Ninguna carretera une Nuuk con otro pueblo: se viaja en barco, avión, trineo de perros o moto de nieve.",
	},
	GM: {
		en: "At Kachikally's sacred pool, visitors can touch crocodiles that are considered holy.",
		es: "En la poza sagrada de Kachikally, los visitantes pueden tocar cocodrilos considerados sagrados.",
	},
	GN: {
		en: "Mount Nimba is home to a tiny toad that gives birth to live young instead of laying eggs.",
		es: "El monte Nimba alberga un pequeño sapo que pare crías vivas en lugar de poner huevos.",
	},
	GQ: {
		en: "Equatorial Guinea's capital, Malabo, isn't on the mainland but on Bioko island.",
		es: "La capital de Guinea Ecuatorial, Malabo, no está en el continente sino en la isla de Bioko.",
	},
	GR: {
		en: "Greece's national anthem has 158 stanzas, the longest anthem text in the world.",
		es: "El himno nacional de Grecia tiene 158 estrofas, la letra de himno más larga del mundo.",
	},
	GT: {
		en: "Chicle, the original base of chewing gum, came from sapodilla trees in Guatemala's jungles.",
		es: "El chicle original, base de la goma de mascar, salía de los árboles de chicozapote de las selvas de Guatemala.",
	},
	GW: {
		en: "On Orango island in the Bijagós, it's traditionally the women who choose their husbands.",
		es: "En la isla de Orango, en las Bijagós, tradicionalmente son las mujeres quienes eligen marido.",
	},
	GY: {
		en: "Guyana is the only country in South America with English as its official language.",
		es: "Guyana es el único país de Sudamérica con el inglés como lengua oficial.",
	},
	HK: {
		en: "Hong Kong's Central–Mid-Levels escalator is the longest outdoor covered escalator system in the world.",
		es: "Las escaleras mecánicas Central–Mid-Levels de Hong Kong son el sistema cubierto al aire libre más largo del mundo.",
	},
	HN: {
		en: "In Yoro, locals celebrate a \"rain of fish\" that appears after heavy storms.",
		es: "En Yoro se celebra la \"lluvia de peces\", que aparece tras fuertes tormentas.",
	},
	HR: {
		en: "The Dalmatian dog breed is named after Croatia's Dalmatia region.",
		es: "La raza de perro dálmata debe su nombre a la región croata de Dalmacia.",
	},
	HT: {
		en: "The Citadelle Laferrière, built after independence, is the largest fortress in the Americas.",
		es: "La Ciudadela Laferrière, construida tras la independencia, es la mayor fortaleza de América.",
	},
	HU: {
		en: "By tradition, many Hungarians don't clink beer glasses, a custom dating back to 1849.",
		es: "Por tradición, muchos húngaros no brindan chocando las jarras de cerveza, una costumbre que viene de 1849.",
	},
	ID: {
		en: "On Nyepi, Bali's Day of Silence, even the international airport shuts down for 24 hours.",
		es: "En Nyepi, el Día del Silencio de Bali, hasta el aeropuerto internacional cierra durante 24 horas.",
	},
	IE: {
		en: "Bram Stoker, the author of Dracula, was born in Dublin.",
		es: "Bram Stoker, el autor de Drácula, nació en Dublín.",
	},
	IL: {
		en: "One of the first USB flash drives, the DiskOnKey, was developed in Israel.",
		es: "Uno de los primeros pendrives USB, el DiskOnKey, se desarrolló en Israel.",
	},
	IN: {
		en: "Srinagar has a post office that floats on a houseboat on Dal Lake.",
		es: "Srinagar tiene una oficina de correos flotante, en una casa barco sobre el lago Dal.",
	},
	IQ: {
		en: "The oldest known written recipes, on clay tablets from about 1750 BC, come from ancient Mesopotamia.",
		es: "Las recetas escritas más antiguas conocidas, en tablillas de arcilla de hacia 1750 a. C., vienen de la antigua Mesopotamia.",
	},
	IR: {
		en: "Ancient Persians kept ice frozen through desert summers in domed buildings called yakhchāls.",
		es: "Los antiguos persas conservaban hielo en pleno verano del desierto en edificios con cúpula llamados yakhchāls.",
	},
	IS: {
		en: "Icelanders have an app to check they're not about to date a relative.",
		es: "Los islandeses tienen una app para comprobar que no van a salir con un pariente.",
	},
	IT: {
		en: "In 2016, a winery in Caldari di Ortona, Abruzzo, installed a fountain that pours free red wine 24/7.",
		es: "En 2016, una bodega de Caldari di Ortona, en los Abruzos, instaló una fuente que da vino tinto gratis las 24 horas.",
	},
	JM: {
		en: "Most of Jamaica's famous Blue Mountain coffee is exported to Japan.",
		es: "La mayor parte del famoso café Blue Mountain de Jamaica se exporta a Japón.",
	},
	JO: {
		en: "Wadi Rum has played Mars in several films, including The Martian.",
		es: "Wadi Rum ha hecho de Marte en varias películas, como The Martian.",
	},
	JP: {
		en: "Nishiyama Onsen Keiunkan, a hot spring inn open since 705 AD, is the oldest hotel in the world.",
		es: "Nishiyama Onsen Keiunkan, una posada termal abierta desde el año 705, es el hotel más antiguo del mundo.",
	},
	KE: {
		en: "Kenya is named after Mount Kenya, its highest mountain.",
		es: "Kenia debe su nombre al monte Kenia, su montaña más alta.",
	},
	KG: {
		en: "Issyk-Kul, high in the mountains, never freezes despite the harsh winters.",
		es: "El Issyk-Kul, en lo alto de las montañas, nunca se congela pese a los duros inviernos.",
	},
	KH: {
		en: "In the town of Skuon, fried tarantulas are a popular roadside snack.",
		es: "En la ciudad de Skuon, las tarántulas fritas son un aperitivo popular en la carretera.",
	},
	KI: {
		en: "Kiribati is the only country in all four hemispheres, and the first to welcome the New Year.",
		es: "Kiribati es el único país en los cuatro hemisferios y el primero en recibir el Año Nuevo.",
	},
	KM: {
		en: "Coelacanths, \"living fossil\" fish once thought extinct for 66 million years, live in the deep waters off the Comoros.",
		es: "Los celacantos, peces \"fósiles vivientes\" que se creían extinguidos hace 66 millones de años, viven en las aguas profundas de Comoras.",
	},
	KN: {
		en: "Green vervet monkeys are said to outnumber people on Saint Kitts.",
		es: "Se dice que en San Cristóbal hay más monos verdes que personas.",
	},
	KR: {
		en: "Until 2023, Koreans traditionally counted everyone as one year old at birth, adding a year every New Year's Day.",
		es: "Hasta 2023, los coreanos contaban tradicionalmente un año al nacer y sumaban otro cada Año Nuevo.",
	},
	KW: {
		en: "Kuwait has no rivers or lakes; almost all of its drinking water comes from the sea.",
		es: "Kuwait no tiene ríos ni lagos: casi toda su agua potable sale del mar.",
	},
	KZ: {
		en: "Wild apples originated in Kazakhstan, and Almaty's name is linked to the Kazakh word for apple.",
		es: "Las manzanas silvestres son originarias de Kazajistán, y el nombre de Almaty está ligado a la palabra kazaja para manzana.",
	},
	LA: {
		en: "Vientiane's Patuxai monument was built with cement the US had donated for an airport runway.",
		es: "El monumento Patuxai de Vientián se construyó con cemento que EE. UU. había donado para una pista de aeropuerto.",
	},
	LB: {
		en: "The Phoenician alphabet, ancestor of the Latin, Greek and Arabic scripts, was found in Byblos.",
		es: "El alfabeto fenicio, antepasado de los alfabetos latino, griego y árabe, se encontró en Biblos.",
	},
	LC: {
		en: "Saint Lucia has more Nobel laureates per person than any other country: two, for 180,000 people.",
		es: "Santa Lucía tiene más premios Nobel por habitante que ningún otro país: dos, para 180.000 personas.",
	},
	LI: {
		en: "Liechtenstein was once offered for rent as a whole country, for private events.",
		es: "Liechtenstein llegó a ofrecerse en alquiler como país entero para eventos privados.",
	},
	LK: {
		en: "Sri Lanka had what is considered the world's first wildlife sanctuary, in the 3rd century BC.",
		es: "Sri Lanka tuvo lo que se considera el primer santuario de fauna del mundo, en el siglo III a. C.",
	},
	LR: {
		en: "Liberia's capital, Monrovia, is named after US President James Monroe.",
		es: "La capital de Liberia, Monrovia, se llama así por el presidente estadounidense James Monroe.",
	},
	LS: {
		en: "At Maletsunyane Falls you can do the world's longest commercial abseil: 204 m down.",
		es: "En las cataratas de Maletsunyane puedes hacer el rápel comercial más largo del mundo: 204 m.",
	},
	LT: {
		en: "Vilnius has a self-declared artists' republic, Užupis, with its own constitution and president.",
		es: "Vilna tiene una república de artistas autoproclamada, Užupis, con su propia constitución y presidente.",
	},
	LU: {
		en: "In 2020, Luxembourg became the first country to make all public transport free.",
		es: "En 2020, Luxemburgo fue el primer país en hacer gratuito todo el transporte público.",
	},
	LV: {
		en: "Riga's Central Market is housed in old German Zeppelin hangars from WWI.",
		es: "El Mercado Central de Riga está en antiguos hangares alemanes de zepelines de la Primera Guerra Mundial.",
	},
	LY: {
		en: "In the old town of Ghadames, rooftops are linked by walkways once used mainly by women.",
		es: "En la ciudad vieja de Gadamés, los tejados están unidos por pasarelas que usaban sobre todo las mujeres.",
	},
	MA: {
		en: "In Morocco, goats climb argan trees to eat the fruit.",
		es: "En Marruecos, las cabras trepan a los árboles de argán para comerse sus frutos.",
	},
	MC: {
		en: "Monaco's own citizens are banned from gambling in the Monte Carlo Casino.",
		es: "Los propios ciudadanos de Mónaco tienen prohibido jugar en el Casino de Montecarlo.",
	},
	MD: {
		en: "Moldova's national anthem is called \"Our Language\".",
		es: "El himno nacional de Moldavia se llama \"Nuestra lengua\".",
	},
	ME: {
		en: "Our Lady of the Rocks is a church on an island that locals built by throwing stones into the sea.",
		es: "Nuestra Señora de las Rocas es una iglesia en una isla que los lugareños crearon tirando piedras al mar.",
	},
	MG: {
		en: "Madagascar's aye-aye finds food by tapping on wood with a long middle finger.",
		es: "El aye-aye de Madagascar busca comida golpeando la madera con un dedo corazón muy largo.",
	},
	MH: {
		en: "Marshallese navigators mapped ocean swells with charts made from sticks and shells.",
		es: "Los navegantes marshaleses cartografiaban el oleaje con mapas hechos de palos y conchas.",
	},
	MK: {
		en: "Mother Teresa was born in Skopje.",
		es: "La Madre Teresa nació en Skopie.",
	},
	ML: {
		en: "Mansa Musa, a 14th-century king of Mali, is often called the richest person who ever lived.",
		es: "Mansa Musa, rey de Malí en el siglo XIV, suele considerarse la persona más rica de la historia.",
	},
	MM: {
		en: "Myanmar is one of only three countries that haven't officially adopted the metric system.",
		es: "Myanmar es uno de los tres únicos países que no han adoptado oficialmente el sistema métrico.",
	},
	MN: {
		en: "Ulaanbaatar is the coldest capital city in the world.",
		es: "Ulán Bator es la capital más fría del mundo.",
	},
	MR: {
		en: "Mauritania's iron ore trains, up to 2.5 km long, are among the longest in the world.",
		es: "Los trenes de mineral de hierro de Mauritania, de hasta 2,5 km, están entre los más largos del mundo.",
	},
	MT: {
		en: "The film set of Popeye (1980) still stands in Malta, as a theme park called Popeye Village.",
		es: "El decorado de Popeye (1980) sigue en pie en Malta, convertido en el parque Popeye Village.",
	},
	MU: {
		en: "Off Le Morne, the seabed creates the optical illusion of an underwater waterfall.",
		es: "Frente a Le Morne, el fondo marino crea la ilusión óptica de una cascada submarina.",
	},
	MV: {
		en: "In 2009, the Maldives held a cabinet meeting underwater to warn about rising seas.",
		es: "En 2009, Maldivas celebró un consejo de ministros bajo el agua para alertar sobre la subida del mar.",
	},
	MW: {
		en: "David Livingstone nicknamed Lake Malawi the \"Lake of Stars\" after the fishermen's lanterns at night.",
		es: "David Livingstone llamó al lago Malaui el \"Lago de las Estrellas\" por los faroles de los pescadores de noche.",
	},
	MX: {
		en: "The Caesar salad was invented in Tijuana, in 1924.",
		es: "La ensalada César se inventó en Tijuana, en 1924.",
	},
	MY: {
		en: "Rafflesia, the largest single flower in the world, blooms in Malaysian rainforests and smells like rotting meat.",
		es: "La rafflesia, la flor individual más grande del mundo, crece en las selvas de Malasia y huele a carne podrida.",
	},
	MZ: {
		en: "The whole country takes its name from the tiny Island of Mozambique.",
		es: "Todo el país toma su nombre de la pequeña Isla de Mozambique.",
	},
	NA: {
		en: "The Welwitschia plant of the Namib Desert can live over 1,000 years with just two leaves.",
		es: "La welwitschia del desierto del Namib puede vivir más de 1.000 años con solo dos hojas.",
	},
	NE: {
		en: "The Tree of Ténéré was the most isolated tree on Earth, until a truck crashed into it in 1973.",
		es: "El Árbol del Teneré era el árbol más aislado del planeta, hasta que un camión chocó contra él en 1973.",
	},
	NG: {
		en: "Igbo-Ora calls itself the \"twin capital of the world\" for its unusually high number of twins.",
		es: "Igbo-Ora se hace llamar la \"capital mundial de los gemelos\" por su número inusualmente alto de gemelos.",
	},
	NI: {
		en: "On Cerro Negro you can go volcano boarding, sliding down an active volcano on a board.",
		es: "En el Cerro Negro puedes hacer volcano boarding: bajar un volcán activo deslizándote sobre una tabla.",
	},
	NL: {
		en: "Dutch growers are credited with making the orange carrot popular; earlier carrots were mostly purple or yellow.",
		es: "A los agricultores neerlandeses se les atribuye popularizar la zanahoria naranja; antes la mayoría eran moradas o amarillas.",
	},
	NO: {
		en: "Norway's King's Guard has a penguin with the rank of brigadier and a knighthood: Sir Nils Olav.",
		es: "La Guardia Real de Noruega tiene un pingüino con rango de general de brigada y título de caballero: Sir Nils Olav.",
	},
	NP: {
		en: "Nepal's time zone is 5 hours and 45 minutes ahead of UTC, one of the few with a 45-minute offset.",
		es: "La hora de Nepal va 5 horas y 45 minutos por delante de UTC, una de las pocas con un desfase de 45 minutos.",
	},
	NR: {
		en: "You can drive all the way around Nauru in about 20 minutes.",
		es: "Puedes dar la vuelta completa a Nauru en coche en unos 20 minutos.",
	},
	NZ: {
		en: "A hill in New Zealand has one of the longest place names in the world, 85 letters long.",
		es: "Una colina de Nueva Zelanda tiene uno de los topónimos más largos del mundo, con 85 letras.",
	},
	OM: {
		en: "Some of Oman's falaj irrigation channels, over 1,500 years old, still water farms today.",
		es: "Algunos canales de riego falaj de Omán, con más de 1.500 años, todavía riegan cultivos hoy.",
	},
	PA: {
		en: "The \"Panama hat\" actually comes from Ecuador; it got its name from being sold in Panama.",
		es: "El \"sombrero de Panamá\" en realidad viene de Ecuador; se llama así porque se vendía en Panamá.",
	},
	PE: {
		en: "In Cusco's cathedral, a painting of the Last Supper shows Jesus and the apostles eating guinea pig.",
		es: "En la catedral de Cusco, un cuadro de la Última Cena muestra a Jesús y los apóstoles comiendo cuy.",
	},
	PG: {
		en: "The hooded pitohui of Papua New Guinea is one of the few poisonous birds in the world.",
		es: "El pitohuí encapuchado de Papúa Nueva Guinea es una de las pocas aves venenosas del mundo.",
	},
	PH: {
		en: "Jeepneys started as US military jeeps left behind after WWII.",
		es: "Los jeepneys empezaron siendo jeeps militares estadounidenses abandonados tras la Segunda Guerra Mundial.",
	},
	PK: {
		en: "Most \"Himalayan\" pink salt actually comes from the Khewra Salt Mine in Pakistan.",
		es: "La mayor parte de la sal rosa \"del Himalaya\" sale en realidad de la mina de sal de Khewra, en Pakistán.",
	},
	PL: {
		en: "Near Gryfino there's a forest of pine trees all bent at the base, and no one knows exactly why.",
		es: "Cerca de Gryfino hay un bosque de pinos todos curvados en la base, y nadie sabe exactamente por qué.",
	},
	PR: {
		en: "Vieques' Mosquito Bay is considered the brightest bioluminescent bay in the world.",
		es: "La Bahía Mosquito de Vieques está considerada la bahía bioluminiscente más brillante del mundo.",
	},
	PS: {
		en: "Nablus, famous for its knafeh, made one of the largest ever in 2009: about 1,765 kg.",
		es: "Nablus, famosa por su knafeh, hizo uno de los más grandes de la historia en 2009: unos 1.765 kg.",
	},
	PT: {
		en: "Portuguese missionaries are credited with bringing the dish that became tempura to Japan.",
		es: "A los misioneros portugueses se les atribuye haber llevado a Japón el plato que se convirtió en el tempura.",
	},
	PW: {
		en: "Palau's Jellyfish Lake is home to millions of jellyfish with a sting too weak to hurt swimmers.",
		es: "El Lago de las Medusas de Palaos alberga millones de medusas con una picadura demasiado débil para dañar a los bañistas.",
	},
	PY: {
		en: "Paraguay's flag has a different emblem on each side.",
		es: "La bandera de Paraguay tiene un escudo distinto en cada cara.",
	},
	QA: {
		en: "In Qatar, camel races are ridden by small robot jockeys.",
		es: "En Catar, las carreras de camellos las montan pequeños jinetes robot.",
	},
	RO: {
		en: "Bran Castle is sold as Dracula's castle, but Vlad the Impaler probably never lived there.",
		es: "El castillo de Bran se vende como el castillo de Drácula, pero Vlad el Empalador probablemente nunca vivió allí.",
	},
	RS: {
		en: "\"Vampire\" is one of the few English words that comes from Serbian.",
		es: "\"Vampiro\" es una de las pocas palabras que han llegado a otros idiomas desde el serbio.",
	},
	RU: {
		en: "In 1989 the Soviet Union traded Pepsi a fleet of old warships and submarines in exchange for cola.",
		es: "En 1989 la Unión Soviética entregó a Pepsi una flota de viejos buques y submarinos a cambio de refrescos.",
	},
	RW: {
		en: "On the last Saturday of every month, Rwandans join Umuganda, a nationwide community work morning.",
		es: "El último sábado de cada mes, los ruandeses participan en Umuganda, una mañana de trabajo comunitario en todo el país.",
	},
	SA: {
		en: "Saudi Arabia imports camels from Australia.",
		es: "Arabia Saudí importa camellos de Australia.",
	},
	SB: {
		en: "Some Solomon Islanders have naturally blond hair, caused by a gene found only there.",
		es: "Algunos habitantes de las Islas Salomón tienen el pelo rubio natural por un gen que solo existe allí.",
	},
	SC: {
		en: "Aldabra atoll is home to around 100,000 giant tortoises, more than the Galápagos.",
		es: "El atolón de Aldabra alberga unas 100.000 tortugas gigantes, más que las Galápagos.",
	},
	SD: {
		en: "Sudan has more pyramids than Egypt, built by the ancient Nubian kingdoms.",
		es: "Sudán tiene más pirámides que Egipto, construidas por los antiguos reinos nubios.",
	},
	SE: {
		en: "Every winter, the Icehotel in Jukkasjärvi is rebuilt from scratch out of ice and snow.",
		es: "Cada invierno, el Icehotel de Jukkasjärvi se vuelve a construir desde cero con hielo y nieve.",
	},
	SG: {
		en: "Durian, the famously smelly fruit, is banned on Singapore's public transport.",
		es: "El durián, la fruta famosa por su olor, está prohibido en el transporte público de Singapur.",
	},
	SI: {
		en: "Slovenia's olm, a blind cave salamander, can live over 100 years and go years without eating.",
		es: "El proteo de Eslovenia, una salamandra ciega de las cuevas, puede vivir más de 100 años y pasar años sin comer.",
	},
	SK: {
		en: "Ochtinská Aragonite Cave is one of only three aragonite caves in the world.",
		es: "La cueva de aragonito de Ochtiná es una de las tres únicas cuevas de aragonito del mundo.",
	},
	SL: {
		en: "Tiwai Island has one of the highest densities of primates in the world.",
		es: "La isla de Tiwai tiene una de las mayores densidades de primates del mundo.",
	},
	SM: {
		en: "San Marino has more registered vehicles than people.",
		es: "San Marino tiene más vehículos matriculados que habitantes.",
	},
	SN: {
		en: "Dakar's African Renaissance Monument is taller than the Statue of Liberty.",
		es: "El Monumento al Renacimiento Africano de Dakar es más alto que la Estatua de la Libertad.",
	},
	SO: {
		en: "Somalia is often called a \"nation of poets\"; poetry has long been used to settle disputes.",
		es: "A Somalia se la llama a menudo \"nación de poetas\"; la poesía se ha usado durante siglos para resolver disputas.",
	},
	SR: {
		en: "In Paramaribo, a mosque and a synagogue stand right next to each other.",
		es: "En Paramaribo, una mezquita y una sinagoga están una al lado de la otra.",
	},
	SS: {
		en: "The Sudd, a vast swamp on the White Nile, is one of the largest wetlands in the world.",
		es: "El Sudd, un enorme pantano en el Nilo Blanco, es uno de los mayores humedales del mundo.",
	},
	ST: {
		en: "The equator crosses Ilhéu das Rolas, where a monument lets you stand in both hemispheres.",
		es: "El ecuador atraviesa el Ilhéu das Rolas, donde un monumento te permite estar en ambos hemisferios.",
	},
	SV: {
		en: "El Salvador has a National Pupusa Day, celebrated every second Sunday of November.",
		es: "El Salvador tiene un Día Nacional de la Pupusa, que se celebra el segundo domingo de noviembre.",
	},
	SY: {
		en: "The oldest known written melody, the Hurrian Hymn, was found in Ugarit and is about 3,400 years old.",
		es: "La melodía escrita más antigua conocida, el Himno hurrita, se encontró en Ugarit y tiene unos 3.400 años.",
	},
	SZ: {
		en: "Each year, tens of thousands of young women take part in Umhlanga, the reed dance.",
		es: "Cada año, decenas de miles de jóvenes participan en el Umhlanga, la danza de las cañas.",
	},
	TD: {
		en: "The Ennedi Plateau is home to Aloba Arch, one of the tallest natural arches on Earth.",
		es: "La meseta de Ennedi alberga el arco de Aloba, uno de los arcos naturales más altos del mundo.",
	},
	TG: {
		en: "Lomé's Akodessewa market is one of the largest voodoo fetish markets in the world.",
		es: "El mercado de Akodessewa en Lomé es uno de los mayores mercados de fetiches vudú del mundo.",
	},
	TH: {
		en: "Bangkok's full ceremonial name is 168 letters long, the longest place name in the world.",
		es: "El nombre ceremonial completo de Bangkok tiene 168 letras, el topónimo más largo del mundo.",
	},
	TJ: {
		en: "The Fedchenko Glacier, about 77 km long, is the longest glacier outside the polar regions.",
		es: "El glaciar Fedchenko, de unos 77 km, es el más largo fuera de las regiones polares.",
	},
	TL: {
		en: "Local legend says the island of Timor was formed from the back of a giant crocodile.",
		es: "Según la leyenda local, la isla de Timor se formó a partir del lomo de un cocodrilo gigante.",
	},
	TM: {
		en: "Ashgabat holds the world record for the most white marble buildings.",
		es: "Asjabad tiene el récord mundial de más edificios de mármol blanco.",
	},
	TN: {
		en: "Luke Skywalker's home planet, Tatooine, was filmed in Tunisia and named after the town of Tataouine.",
		es: "Tatooine, el planeta de Luke Skywalker, se rodó en Túnez y debe su nombre a la ciudad de Tataouine.",
	},
	TO: {
		en: "In 1969, Tonga issued postage stamps shaped like bananas.",
		es: "En 1969, Tonga emitió sellos con forma de plátano.",
	},
	TR: {
		en: "Tulips came to the Netherlands from the Ottoman Empire.",
		es: "Los tulipanes llegaron a los Países Bajos desde el Imperio otomano.",
	},
	TT: {
		en: "Trinidad's Pitch Lake is the largest natural deposit of asphalt in the world.",
		es: "El Pitch Lake de Trinidad es el mayor depósito natural de asfalto del mundo.",
	},
	TV: {
		en: "Tuvalu earns a big part of its income from its internet domain, .tv.",
		es: "Tuvalu obtiene buena parte de sus ingresos de su dominio de internet, .tv.",
	},
	TW: {
		en: "Taipei 101's giant 660-tonne damper ball has its own cartoon mascots, the Damper Babies.",
		es: "La gigantesca bola amortiguadora de 660 toneladas del Taipei 101 tiene sus propias mascotas, los Damper Babies.",
	},
	TZ: {
		en: "Lake Natron's alkaline water can calcify dead birds into stone-like statues.",
		es: "El agua alcalina del lago Natron puede calcificar aves muertas hasta dejarlas como estatuas de piedra.",
	},
	UA: {
		en: "Near Klevan, trees have grown around a railway into a green \"Tunnel of Love\".",
		es: "Cerca de Klevan, los árboles han crecido alrededor de una vía de tren formando un \"Túnel del Amor\" verde.",
	},
	UG: {
		en: "Uganda is home to about half of the world's mountain gorillas.",
		es: "Uganda alberga alrededor de la mitad de los gorilas de montaña del mundo.",
	},
	US: {
		en: "Talkeetna, Alaska, had a cat named Stubbs as its honorary mayor for about 20 years.",
		es: "Talkeetna, en Alaska, tuvo un gato llamado Stubbs como alcalde honorario durante unos 20 años.",
	},
	UY: {
		en: "Uruguay has more than three cows for every person.",
		es: "Uruguay tiene más de tres vacas por cada persona.",
	},
	UZ: {
		en: "In Moynaq, rusting fishing boats sit in the desert where the Aral Sea used to be.",
		es: "En Muynak, barcos de pesca oxidados descansan en el desierto donde antes estaba el mar de Aral.",
	},
	VA: {
		en: "The Vatican has an ATM with instructions in Latin.",
		es: "El Vaticano tiene un cajero automático con instrucciones en latín.",
	},
	VC: {
		en: "Parts of Pirates of the Caribbean were filmed in Saint Vincent's Wallilabou Bay.",
		es: "Parte de Piratas del Caribe se rodó en la bahía de Wallilabou, en San Vicente.",
	},
	VE: {
		en: "Over Lake Maracaibo, Catatumbo lightning flashes on up to 160 nights a year.",
		es: "Sobre el lago de Maracaibo, el relámpago del Catatumbo se ve hasta 160 noches al año.",
	},
	VN: {
		en: "On Hanoi's \"Train Street\", trains squeeze past just inches from people's front doors.",
		es: "En la \"Calle del Tren\" de Hanói, los trenes pasan a centímetros de las puertas de las casas.",
	},
	VU: {
		en: "Vanuatu has a post office underwater, where you can mail waterproof postcards.",
		es: "Vanuatu tiene una oficina de correos bajo el agua, donde puedes enviar postales impermeables.",
	},
	WS: {
		en: "Samoa skipped December 30, 2011 entirely when it moved across the International Date Line.",
		es: "Samoa se saltó por completo el 30 de diciembre de 2011 al cambiar de lado de la línea internacional de cambio de fecha.",
	},
	YE: {
		en: "Socotra's dragon's blood trees look like giant upside-down umbrellas.",
		es: "Los dragos de Socotra parecen enormes paraguas del revés.",
	},
	ZA: {
		en: "Soweto's Vilakazi Street is the only street in the world where two Nobel Peace Prize winners lived: Mandela and Tutu.",
		es: "La calle Vilakazi de Soweto es la única del mundo donde vivieron dos premios Nobel de la Paz: Mandela y Tutu.",
	},
	ZM: {
		en: "At Devil's Pool, you can swim right at the edge of Victoria Falls.",
		es: "En la Piscina del Diablo puedes bañarte justo al borde de las cataratas Victoria.",
	},
	ZW: {
		en: "Zimbabwe once printed a 100 trillion dollar banknote.",
		es: "Zimbabue llegó a imprimir un billete de 100 billones de dólares.",
	},
};

/** Turns a two-letter country code into its flag emoji, e.g. "ES" → 🇪🇸. */
export function flagEmoji(code: string): string {
	return String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

/**
 * Localized name, flag and fun fact for a country code, or null when the code
 * isn't a known country (e.g. missing in local development).
 */
export function getCountryInfo(code: string | null | undefined, lang: "es" | "en") {
	if (!code || !/^[A-Z]{2}$/.test(code)) return null;
	const name = new Intl.DisplayNames([lang], { type: "region" }).of(code);
	if (!name || name === code) return null;
	return { name, flag: flagEmoji(code), fact: funFacts[code]?.[lang] };
}
