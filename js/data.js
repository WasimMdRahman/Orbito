/**
 * Solar System Data Model
 * All distance/speed units are scaled for visual representation, not scientifically accurate 1:1.
 */

export const SOLAR_SYSTEM_DATA = [
    {
        id: 'sun',
        name: 'The Sun',
        type: 'Star',
        visualRadius: 60,
        orbitRadius: 0,
        orbitSpeed: 0,
        color: '#FDB813',
        glowColor: 'rgba(253, 184, 19, 0.6)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/512px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
        description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, comprising about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun\'s mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V). As such, it is informally, and not completely accurately, referred to as a yellow dwarf (its light is closer to white than yellow). It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, while the rest flattened into an orbiting disk that became the Solar System. Over billions of years, it has maintained its glow, acting as the ultimate anchor for everything in our cosmic neighborhood.',
        details: {
            orbitRadius: '0 AU',
            orbitSpeed: '0 km/s'
        },
        backgroundVideo: 'videos/sun.mp4'
    },
    {
        id: 'mercury',
        name: 'Mercury',
        type: 'Planet',
        visualRadius: 8,
        orbitRadius: 100,
        orbitSpeed: 1.5,
        color: '#A5A5A5',
        glowColor: 'rgba(165, 165, 165, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/512px-Mercury_in_color_-_Prockter07_centered.jpg',
        description: 'Mercury is the smallest and innermost planet in our Solar System, orbiting the Sun at an average distance of just 58 million kilometers. Because of its proximity to the Sun, Mercury experiences extreme temperature fluctuations, ranging from a blistering 430 degrees Celsius during the day to a frigid -180 degrees Celsius at night. It is a rocky world with a heavily cratered surface, resembling Earth\'s Moon. Despite its small size, Mercury is remarkably dense, possessing a large iron core that generates a weak magnetic field. The planet has virtually no atmosphere to speak of, meaning its surface is constantly bombarded by solar radiation and meteoroids. One of its most prominent features is the Caloris Basin, a massive impact crater that spans nearly 1,550 kilometers. Mercurian years are very short, lasting only 88 Earth days, whereas its rotation is slow, taking 59 Earth days to complete a single turn. This unique 3:2 spin-orbit resonance means that for every two orbits Mercury completes around the Sun, it rotates three times on its axis. Exploring Mercury is a significant challenge for scientists due to its extreme heat and the immense gravitational pull of the Sun, but missions like NASA\'s Messenger and ESA\'s BepiColombo continue to peel back the layers of this ancient, scarred world.',
        details: {
            orbitRadius: '0.39 AU',
            orbitSpeed: '47.87 km/s'
        },
        backgroundVideo: 'videos/mercury.mp4'
    },
    {
        id: 'venus',
        name: 'Venus',
        type: 'Planet',
        visualRadius: 14,
        orbitRadius: 140,
        orbitSpeed: 1.2,
        color: '#E3BB76',
        glowColor: 'rgba(227, 187, 118, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/512px-Venus-real_color.jpg',
        description: 'Often referred to as Earth\'s "sister planet" due to its similar size and density, Venus is a world of hostile extremes. It is the second planet from the Sun and possesses the thickest atmosphere of all the terrestrial planets, composed primarily of carbon dioxide with clouds of sulfuric acid. This dense atmosphere creates a runaway greenhouse effect, trapping heat and making Venus the hottest planet in the Solar System, with surface temperatures consistently reaching 467 degrees Celsius—hot enough to melt lead. Unlike most planets, Venus rotates in a retrograde direction (clockwise), meaning the Sun rises in the west and sets in the east. Furthermore, its rotation is incredibly slow; a single day on Venus lasts longer than its entire orbital year. The surface of Venus is a volcanic landscape shrouded in mystery, as its thick cloud deck prevents direct visual observation. Radar mapping missions have revealed vast plains, towering volcanoes, and unique geological features like tesserae—highly deformed, elevated terrain. While its environment is currently uninhabitable, scientists believe that Venus may have once had liquid water and a more temperate climate billions of years ago. Today, it serves as a stark warning of how atmospheric composition can drastically alter a planet\'s fate, making it a focal point for understanding climate change on a planetary scale.',
        details: {
            orbitRadius: '0.72 AU',
            orbitSpeed: '35.02 km/s'
        },
        backgroundVideo: 'videos/venus.mp4'
    },
    {
        id: 'earth',
        name: 'Earth',
        type: 'Planet',
        visualRadius: 15,
        orbitRadius: 180,
        orbitSpeed: 1.0,
        color: '#4F4CB0',
        glowColor: 'rgba(79, 76, 176, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/512px-The_Earth_seen_from_Apollo_17.jpg',
        description: 'Earth is our home, the third planet from the Sun and the only astronomical object known to harbor life. It is the largest of the terrestrial planets and the only one with liquid water on its surface, covering about 71% of the globe. This abundance of water, combined with an atmosphere rich in nitrogen and oxygen, provides the perfect conditions for a staggering diversity of life to thrive. Earth\'s internal structure is dynamic, featuring a liquid outer core that generates a protective magnetic field, shielding the surface from harmful solar radiation. Its crust is divided into tectonic plates that are constantly in motion, creating mountain ranges, causing earthquakes, and recycling carbon through volcanic activity. Earth\'s atmosphere is not only essential for breathing but also regulates temperature through a moderate greenhouse effect. The planet is accompanied by its only natural satellite, the Moon, which stabilizes Earth\'s axial tilt and creates the tides in our oceans. From its bustling cities to its vast, untouched wilderness, Earth is a complex and interconnected system where every element—the atmosphere, hydrosphere, lithosphere, and biosphere—works together to sustain the delicate balance of life. As we look out into the cosmos, Earth remains a unique blue marble, a testament to the incredible power of planetary evolution and the resilience of biological systems.',
        details: {
            orbitRadius: '1.00 AU',
            orbitSpeed: '29.78 km/s'
        },
        backgroundVideo: 'videos/earth.mp4'
    },
    {
        id: 'mars',
        name: 'Mars',
        type: 'Planet',
        visualRadius: 12,
        orbitRadius: 220,
        orbitSpeed: 0.8,
        color: '#E27B58',
        glowColor: 'rgba(226, 123, 88, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/512px-OSIRIS_Mars_true_color.jpg',
        description: 'Mars, known as the "Red Planet," is the fourth planet from the Sun and has long captivated the human imagination as a potential home for future explorers. Its distinctive reddish hue is caused by iron oxide, or rust, on its surface. Mars is a desert world with a very thin atmosphere composed mainly of carbon dioxide, resulting in extremely cold temperatures and low atmospheric pressure. Despite its current barren state, Mars features some of the most spectacular geological formations in the Solar System, including Olympus Mons—the largest volcano—and Valles Marineris—a canyon system that dwarfs Earth\'s Grand Canyon. The planet also has polar ice caps containing both water ice and frozen carbon dioxide. Evidence gathered by rovers and orbiters suggests that Mars once had liquid water flowing on its surface, raising the profound question of whether life ever existed there. Modern missions like Perseverance and Curiosity are currently searching for signs of ancient microbial life and preparing for future human arrival. Mars has two small, irregularly shaped moons, Phobos and Deimos, which may be captured asteroids. As we continue to study Mars, it offers critical insights into the history of our Solar System and represents the next frontier in humanity\'s journey to become a multi-planetary species.',
        details: {
            orbitRadius: '1.52 AU',
            orbitSpeed: '24.07 km/s'
        },
        backgroundVideo: 'videos/mars.mp4'
    },
    {
        id: 'jupiter',
        name: 'Jupiter',
        type: 'Gas Giant',
        visualRadius: 35,
        orbitRadius: 300,
        orbitSpeed: 0.5,
        color: '#D39C7E',
        glowColor: 'rgba(211, 156, 126, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/512px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
        description: 'Jupiter is the undisputed king of the Solar System, a massive gas giant so large that all the other planets could fit inside it more than twice. It is the fifth planet from the Sun and is primarily composed of hydrogen and helium, much like a star. Jupiter\'s most iconic feature is the Great Red Spot, a gargantuan storm larger than Earth that has been raging for at least 400 years. The planet possesses an incredibly strong magnetic field, roughly 14 times stronger than Earth\'s, which traps charged particles and creates intense radiation belts. Jupiter is also famous for its diverse family of moons, with over 90 discovered to date. The four largest—Io, Europa, Ganymede, and Callisto—were first observed by Galileo Galilei in 1610. These moons are worlds in their own right, from Io\'s hyperactive volcanoes to the sub-surface oceans of Europa and Ganymede. The planet acts as a "celestial vacuum cleaner," its immense gravity influencing the orbits of asteroids and protecting the inner planets from potential impacts. Its atmosphere is characterized by colorful bands of clouds, driven by powerful jet streams and massive storms. Jupiter is not just a planet; it is a mini-solar system that continues to provide scientists with vital data about the formation of our planetary neighborhood and the dynamics of gas giants across the universe.',
        details: {
            orbitRadius: '5.20 AU',
            orbitSpeed: '13.07 km/s'
        },
        backgroundVideo: 'videos/jupiter.mp4'
    },
    {
        id: 'saturn',
        name: 'Saturn',
        type: 'Gas Giant',
        visualRadius: 30,
        orbitRadius: 380,
        orbitSpeed: 0.35,
        color: '#C5AB6E',
        glowColor: 'rgba(197, 171, 110, 0.4)',
        hasRings: true,
        ringColor: 'rgba(192, 177, 140, 0.6)',
        ringInner: 40,
        ringOuter: 65,
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Saturn_from_Cassini_Orbiter_-_2004-10-06.jpg/640px-Saturn_from_Cassini_Orbiter_-_2004-10-06.jpg',
        description: 'Saturn is perhaps the most visually stunning planet in our Solar System, renowned for its magnificent and complex ring system. It is the sixth planet from the Sun and the second-largest gas giant after Jupiter. While it is mostly made of hydrogen and helium, Saturn is the only planet in the Solar System that is less dense than water—meaning if you had a bathtub large enough, Saturn would float. Its rings are composed of billions of individual pieces of ice and rock, ranging in size from tiny dust grains to massive boulders. These rings are not solid, but rather a dynamic disk influenced by the gravity of Saturn\'s numerous moons. Saturn has over 140 moons, the largest of which is Titan, a world with a thick atmosphere and lakes of liquid methane. The planet\'s atmosphere features powerful winds and unique storms, such as the mysterious hexagon-shaped storm at its north pole. Saturn has a strong magnetic field and an internal heat source that radiates more energy into space than it receives from the Sun. For centuries, Saturn has been an object of wonder for astronomers, and missions like Cassini-Huygens have provided breathtaking views and invaluable scientific discoveries about this lord of the rings and the intricate dance of its satellites and ring particles.',
        details: {
            orbitRadius: '9.58 AU',
            orbitSpeed: '9.68 km/s'
        },
        backgroundVideo: 'videos/saturn.mp4'
    },
    {
        id: 'uranus',
        name: 'Uranus',
        type: 'Ice Giant',
        visualRadius: 22,
        orbitRadius: 450,
        orbitSpeed: 0.25,
        color: '#BBE1E4',
        glowColor: 'rgba(187, 225, 228, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/512px-Uranus2.jpg',
        description: 'Uranus is a unique and mysterious "ice giant," the seventh planet from the Sun. It is distinguished by its striking cyan color, which is caused by methane in its atmosphere absorbing red light. One of the most unusual characteristics of Uranus is its extreme axial tilt; it rotates on its side at an angle of roughly 98 degrees. This means that its poles essentially point where other planets HAVE their equators, leading to extreme seasonal variations as it completes its 84-year orbit around the Sun. Uranus is primarily composed of various ices, such as water, ammonia, and methane, surrounding a rocky core. Its atmosphere is the coldest of any planet in the Solar System, with temperatures dropping to -224 degrees Celsius. Uranus has a faint but complex ring system and 27 known moons, many of which are named after characters from the works of William Shakespeare and Alexander Pope. Its magnetic field is also peculiar, being highly tilted and offset from the planet\'s center. Discovered by William Herschel in 1781, Uranus was the first planet found using a telescope, effectively doubling the known size of the Solar System at the time. Despite its quiet appearance, Uranus is a world of incredible complexity that challenges our understanding of planetary physics and atmospheric dynamics.',
        details: {
            orbitRadius: '19.22 AU',
            orbitSpeed: '6.80 km/s'
        },
        backgroundVideo: 'videos/uranus.mp4'
    },
    {
        id: 'neptune',
        name: 'Neptune',
        type: 'Ice Giant',
        visualRadius: 21,
        orbitRadius: 510,
        orbitSpeed: 0.2,
        color: '#6081FF',
        glowColor: 'rgba(96, 129, 255, 0.4)',
        textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/512px-Neptune_Full.jpg',
        description: 'Neptune is the eighth and farthest known planet from the Sun, a cold and dark "ice giant" that remains an enigma in the outer reaches of our Solar System. Its deep blue color, even more intense than that of Uranus, suggests a slightly different atmospheric composition, though methane still plays a key role. Neptune is a world of extreme weather, possessing the fastest recorded winds in the Solar System, which can reach speeds of over 2,100 kilometers per hour. These supersonic winds drive massive storms, such as the Great Dark Spot—an Earth-sized storm system first observed by Voyager 2 in 1989. Neptune takes 165 Earth years to complete a single orbit and possesses a core roughly the size of Earth. It has 14 known moons, the most fascinating of which is Triton. Triton is unique as it orbits Neptune in a retrograde direction (opposite to the planet\'s rotation) and is geologically active, with geysers erupting nitrogen gas. Neptune also has a system of faint, clumpy rings. Its existence was mathematically predicted before it was actually seen, a triumph of Newtonian gravitation. As a sentinel on the edge of the Kuiper Belt, Neptune continues to serve as a frontier for planetary science, representing the extreme conditions that exists at the periphery of our stellar neighborhood.',
        details: {
            orbitRadius: '30.05 AU',
            orbitSpeed: '5.43 km/s'
        },
        backgroundVideo: 'videos/neptune.mp4'
    }
];
