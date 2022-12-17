import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PreArrow } from '../Arrow.Component';

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 663712,
      "original_language": "en",
      "original_title": "Terrifier 2",
      "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      "popularity": 6912.168,
      "poster_path": "/ydOS2qCqIdPvYbFuWFq1pfAzYsy.jpg",
      "release_date": "2022-10-06",
      "title": "Terrifier 2",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 287
    },
    {
      "adult": false,
      "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      "genre_ids": [
        28,
        14,
        878
      ],
      "id": 436270,
      "original_language": "en",
      "original_title": "Black Adam",
      "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      "popularity": 4657.005,
      "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      "release_date": "2022-10-19",
      "title": "Black Adam",
      "video": false,
      "vote_average": 7,
      "vote_count": 710
    },
    {
      "adult": false,
      "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
      "genre_ids": [
        27,
        53,
        9648
      ],
      "id": 717728,
      "original_language": "en",
      "original_title": "Jeepers Creepers: Reborn",
      "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
      "popularity": 2627.102,
      "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
      "release_date": "2022-09-15",
      "title": "Jeepers Creepers: Reborn",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 394
    },
    {
      "adult": false,
      "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 960704,
      "original_language": "ja",
      "original_title": "鋼の錬金術師 完結編 最後の錬成",
      "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
      "popularity": 2231.864,
      "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
      "release_date": "2022-06-24",
      "title": "Fullmetal Alchemist: The Final Alchemy",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 109
    },
    {
      "adult": false,
      "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 760161,
      "original_language": "en",
      "original_title": "Orphan: First Kill",
      "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      "popularity": 2254.046,
      "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
      "release_date": "2022-07-27",
      "title": "Orphan: First Kill",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1183
    },
    {
      "adult": false,
      "backdrop_path": "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
      "genre_ids": [
        14,
        35,
        10751
      ],
      "id": 642885,
      "original_language": "en",
      "original_title": "Hocus Pocus 2",
      "overview": "It's been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it's up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
      "popularity": 2204.095,
      "poster_path": "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
      "release_date": "2022-09-27",
      "title": "Hocus Pocus 2",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 970
    },
    {
      "adult": false,
      "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
      "genre_ids": [
        53
      ],
      "id": 985939,
      "original_language": "en",
      "original_title": "Fall",
      "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      "popularity": 2191.319,
      "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      "release_date": "2022-08-11",
      "title": "Fall",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 1601
    },
    {
      "adult": false,
      "backdrop_path": "/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
      "genre_ids": [
        878
      ],
      "id": 575322,
      "original_language": "en",
      "original_title": "Звёздный разум",
      "overview": "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
      "popularity": 2049.769,
      "poster_path": "/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
      "release_date": "2022-01-06",
      "title": "Project Gemini",
      "video": false,
      "vote_average": 5.6,
      "vote_count": 138
    },
    {
      "adult": false,
      "backdrop_path": "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 616820,
      "original_language": "en",
      "original_title": "Halloween Ends",
      "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
      "popularity": 2166.823,
      "poster_path": "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
      "release_date": "2022-10-12",
      "title": "Halloween Ends",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 785
    },
    {
      "adult": false,
      "backdrop_path": "/mMA2YNddowV8MZtxpbn0a7Yilum.jpg",
      "genre_ids": [
        10752,
        36,
        28,
        18
      ],
      "id": 928123,
      "original_language": "zh",
      "original_title": "长津湖之水门桥",
      "overview": "In the follow-up to \"The Battle At Lake Changjin\", brothers Wu Qianli and Wu Wanli undertake a new task for the People's Volunteer Army, defending a bridge part of the American troops' escape route from the advancing Chinese.",
      "popularity": 1829.747,
      "poster_path": "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
      "release_date": "2022-02-01",
      "title": "The Battle at Lake Changjin: Water Gate Bridge",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 23
    },
    {
      "adult": false,
      "backdrop_path": "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
      "genre_ids": [
        28,
        35,
        53
      ],
      "id": 718930,
      "original_language": "en",
      "original_title": "Bullet Train",
      "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
      "popularity": 1832.823,
      "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
      "release_date": "2022-07-03",
      "title": "Bullet Train",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2097
    },
    {
      "adult": false,
      "backdrop_path": "/2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg",
      "genre_ids": [
        18,
        53,
        27
      ],
      "id": 848058,
      "original_language": "es",
      "original_title": "Cerdita",
      "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
      "popularity": 1791.757,
      "poster_path": "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
      "release_date": "2022-10-07",
      "title": "Piggy",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 141
    },
    {
      "adult": false,
      "backdrop_path": "/60UN7vvcWWggLe0Uz9EFZJx718P.jpg",
      "genre_ids": [
        53
      ],
      "id": 879538,
      "original_language": "en",
      "original_title": "Crawlspace",
      "overview": "After witnessing a brutal murder in a cabin, a man hides in a crawlspace while the killers scour the property for a hidden fortune. As they draw nearer, he must decide if the crawlspace will be his tomb or the battleground in his fight for survival.",
      "popularity": 1662.837,
      "poster_path": "/qEu6qI5sVoIe10gD1BQBqxcNIW2.jpg",
      "release_date": "2022-03-31",
      "title": "Crawlspace",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      "genre_ids": [
        10751,
        16,
        14,
        10402,
        35,
        12
      ],
      "id": 354912,
      "original_language": "en",
      "original_title": "Coco",
      "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      "popularity": 1959.338,
      "poster_path": "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      "release_date": "2017-10-27",
      "title": "Coco",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 16342
    },
    {
      "adult": false,
      "backdrop_path": "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 420634,
      "original_language": "en",
      "original_title": "Terrifier",
      "overview": "On Halloween night, a young woman finds herself as the obsession of a sadistic murderer known as Art the Clown.",
      "popularity": 2005.684,
      "poster_path": "/6PQqC4SbY910VvyVad6mvsboILU.jpg",
      "release_date": "2016-10-15",
      "title": "Terrifier",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 780
    },
    {
      "adult": false,
      "backdrop_path": "/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
      "genre_ids": [
        53,
        9648
      ],
      "id": 916605,
      "original_language": "en",
      "original_title": "The Infernal Machine",
      "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
      "popularity": 1581.505,
      "poster_path": "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
      "release_date": "2022-09-23",
      "title": "The Infernal Machine",
      "video": false,
      "vote_average": 7,
      "vote_count": 111
    },
    {
      "adult": false,
      "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
      "genre_ids": [
        18,
        28,
        53
      ],
      "id": 852046,
      "original_language": "fr",
      "original_title": "Athena",
      "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
      "popularity": 1549.989,
      "poster_path": "/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
      "release_date": "2022-09-09",
      "title": "Athena",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 315
    },
    {
      "adult": false,
      "backdrop_path": "/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 791155,
      "original_language": "en",
      "original_title": "Secret Headquarters",
      "overview": "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
      "popularity": 1456.601,
      "poster_path": "/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
      "release_date": "2022-08-12",
      "title": "Secret Headquarters",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 137
    },
    {
      "adult": false,
      "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
      "genre_ids": [
        14,
        12,
        10751
      ],
      "id": 532639,
      "original_language": "en",
      "original_title": "Pinocchio",
      "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
      "popularity": 1286.599,
      "poster_path": "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
      "release_date": "2022-09-07",
      "title": "Pinocchio",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 994
    },
    {
      "adult": false,
      "backdrop_path": "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
      "genre_ids": [
        14,
        28,
        18
      ],
      "id": 779782,
      "original_language": "en",
      "original_title": "The School for Good and Evil",
      "overview": "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
      "popularity": 1626.581,
      "poster_path": "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
      "release_date": "2022-10-19",
      "title": "The School for Good and Evil",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 403
    }
  ]);
  const LargeSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    className: "center",
    centerMode: true,
    autoplay: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 1500,
    nextArrow: <NextArrow />,
    preArrow: <PreArrow />,
  }
  const Settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    className: "center",
    centerMode: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 1500,
    nextArrow: <NextArrow />,
    preArrow: <PreArrow />,
  }
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...Settings}>
          {
            images.map((images,index) => (
              <div className="w-full h-56 md:h-80 py-3 px-2" key={index}>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="/hero banner" className="w-full h-full rounded-md object-fit" />
              </div>
            ))
          }
        </HeroSlider>
      </div>
      <div className="hidden lg:block ">
        <HeroSlider {...LargeSettings}>
          {
            images.map((images,index) => (
              <div className="w-full h-80 px-2 py-3 mt-2" key={index}>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="/hero banner" className="w-full h-full focus:outline-none rounded-md object-fit" />
              </div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousel