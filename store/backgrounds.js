export const state = () => ({
  all: [
    'acolyte',
    'charlatan',
    'criminal',
    'entertainer',
    'folk_hero',
    'guild_artisan',
    'hermit',
    'noble',
    'outlander',
    'sage',
    'sailor',
    'soldier',
    'urchin'
  ],
  backgrounds: {
    acolyte: [
      {
        number: 1,
        text:
          'I ran away from home at an early age and found refuge in a temple.'
      },
      {
        number: 2,
        text:
          'My family gave me to a temple, since they were unable or unwilling to care for me.'
      },
      {
        number: 3,
        text:
          'I grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural.'
      },
      {
        number: 4,
        text:
          'An impassioned sermon struck a chord deep in my soul and moved me to serve the faith .'
      },
      {
        number: 5,
        text:
          'I followed a childhood friend , a respected acquaintance, or someone I loved into religious service.'
      },
      {
        number: 6,
        text:
          'After encountering a true servant of the gods , I was so inspired that I immediately entered the service of a religious group.'
      }
    ],
    charlatan: [
      {
        number: 1,
        text:
          'I was left to my own devices, and my knack for manipulating others helped me survive.'
      },
      {
        number: 2,
        text: 'I learned early on that people are gullible and easy to exploit.'
      },
      {
        number: 3,
        text:
          'I often got in trouble, but I managed to talk my way out of it every time.'
      },
      {
        number: 4,
        text:
          'I took up with a confidence artist, from whom I learned my craft.'
      },
      {
        number: 5,
        text:
          'After a charlatan fleeced my family, I decided to learn the trade so I would never be fooled by such deception again .'
      },
      {
        number: 6,
        text:
          'I was poor or I feared becoming poor, so I learned the tricks I needed to keep myself out of poverty.'
      }
    ],
    criminal: [
      {
        number: 1,
        text:
          'I resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression.'
      },
      {
        number: 2,
        text:
          'Necessity forced me to take up the life, since it was the only way I could survive.'
      },
      {
        number: 3,
        text:
          "I fell in with a gang of reprobates and ne'er-dowells, and I learned my specialty from them."
      },
      {
        number: 4,
        text:
          'A parent or relative taught me my criminal specialty to prepare me for the family business.'
      },
      {
        number: 5,
        text:
          "I left home and found a place in a thieves' guild or some other criminal organization."
      },
      {
        number: 6,
        text:
          'I was always bored, so I turned to crime to pass the time and discovered I was quite good at it.'
      }
    ],
    entertainer: [
      {
        number: 1,
        text:
          'Members of my family made ends meet by performing, so it was fitting for me to follow their example.'
      },
      {
        number: 2,
        text:
          'I always had a keen insight into other people, enough so that I could make them laugh or cry with my stories or songs.'
      },
      {
        number: 3,
        text: 'I ran away from home to fo ll ow a m instrel troupe.'
      },
      {
        number: 4,
        text:
          'I saw a bard perform once, and I knew from that moment on what I was born to do.'
      },
      {
        number: 5,
        text:
          'I earned coin by performing on street corners and eventually made a name for myself.'
      },
      {
        number: 6,
        text: 'A traveling entertainer took me in and taught me the trade.'
      }
    ],
    folk_hero: [
      {
        number: 1,
        text: 'I learned what was right and wrong from my family.'
      },
      {
        number: 2,
        text:
          'I was always enamored by tales of heroes and wished I could be something more than ordinary.'
      },
      {
        number: 3,
        text:
          'I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.'
      },
      {
        number: 4,
        text:
          "A parent or o ne of my relatives was an adventurer, and I was inspired by that person's courage."
      },
      {
        number: 5,
        text:
          'A mad old hermit spoke a prophecy when I was born, saying that I would accomplish great things.'
      },
      {
        number: 6,
        text: 'I have always stood up for those who are weaker than I am.'
      }
    ],
    guild_artisan: [
      {
        number: 1,
        text:
          "I was apprenticed to a master who taught me the guild's business."
      },
      {
        number: 2,
        text:
          'I helped a guild artisan keep a secre t or complete a task, and in return I was taken on as an apprentice.'
      },
      {
        number: 3,
        text:
          'One of my family members who belonged to the guild made a place for me.'
      },
      {
        number: 4,
        text:
          'I was a lways good with my hands, so I took the opportunity to learn a trade.'
      },
      {
        number: 5,
        text:
          'I wanted to get away from my home situation and start a new life.'
      },
      {
        number: 6,
        text:
          'I learned the essentials of my craft from a mentor but had to join the guild to finish my training.'
      }
    ],
    hermit: [
      {
        number: 1,
        text:
          'My enemies rui ned my reputation, and I fled to the wilds to avoid further disparagement.'
      },
      {
        number: 2,
        text: 'I am comfortable with being isolated, as I seek inner peace.'
      },
      {
        number: 3,
        text:
          'I never liked the people I called my friends , so it was easy for me to strike out on my own.'
      },
      {
        number: 4,
        text:
          'I felt compelled to forsake my past, but did so with great reluctance, and sometimes I regret making that decision.'
      },
      {
        number: 5,
        text:
          'I lost everything-my home, my family, my friends. Going it alone was a ll I could do.'
      },
      {
        number: 6,
        text:
          "Society's decadence disgusted me, so I decided to leave it behind."
      }
    ],
    noble: [
      {
        number: 1,
        text:
          'I come from an old and storied fam ily, and it fell to me to preserve the family name.'
      },
      {
        number: 2,
        text: 'My family has been disgraced, and I intend to clear our name.'
      },
      {
        number: 3,
        text:
          'My family recently came by its title, and that elevation thrust us into a new and strange world.'
      },
      {
        number: 4,
        text:
          'My family has a title, but none of my ancestors have distinguished themselves since we gained it.'
      },
      {
        number: 5,
        text:
          'My family is filled with remarkable people. I hope to live up to their example.'
      },
      {
        number: 6,
        text: "I hope to increase my family's power and influence."
      }
    ],
    outlander: [
      {
        number: 1,
        text:
          'I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.'
      },
      {
        number: 2,
        text:
          "From a young age, I couldn't abide the stink of the cities and preferred to spend my time in nature."
      },
      {
        number: 3,
        text:
          'I came to understand the darkness that lurks in the wilds , and I vowed to combat it.'
      },
      {
        number: 4,
        text:
          'My people lived on the edges of civilization, and I learned the methods of survival from my family.'
      },
      {
        number: 5,
        text:
          'After a tragedy I retreated to the w il derness, leaving my old life behind.'
      },
      {
        number: 6,
        text:
          'My family moved away from civilization, and I learned to adapt to my new environment.'
      }
    ],
    sage: [
      {
        number: 1,
        text:
          'I was naturally curious, so I packed up and went to a university to learn more about the world.'
      },
      {
        number: 2,
        text:
          "My mentor's teachings opened my mind to new possibilities in that field of study."
      },
      {
        number: 3,
        text:
          'I was always an avid reader, and I learned much about my favorite topic on my own.'
      },
      {
        number: 4,
        text:
          'I discovered an old library and pored over the texts I found there. That experience awakened a hunger for more knowledge.'
      },
      {
        number: 5,
        text:
          'I impressed a wizard who told me I was squandering my talents and should seek out an education to take advantage of my gifts.'
      },
      {
        number: 6,
        text:
          'One of my parents or a relative gave me a basic education that whetted my appetite, and I left home to build on what I had learned.'
      }
    ],
    sailor: [
      {
        number: 1,
        text:
          'I was press-ganged by pirates and forced to serve on their ship until I finally escaped.'
      },
      {
        number: 2,
        text:
          'I wanted to see the world, so I signed on as a deckhand for a merchant ship.'
      },
      {
        number: 3,
        text: 'One of my relatives was a sailor who took me to sea.'
      },
      {
        number: 4,
        text:
          'I needed to escape my community quickly, so I stowed away on a ship. When the crew found me, I was forced to work for my passage.'
      },
      {
        number: 5,
        text:
          'Reavers attacked my community, so I found refuge on a ship until I could seek vengeance.'
      },
      {
        number: 6,
        text:
          'I had few prospects where I was living, so I left to find my fortune elsewhere.'
      }
    ],
    soldier: [
      {
        number: 1,
        text: 'I joined the militia to help protect my community from monsters.'
      },
      {
        number: 2,
        text:
          'A relative of mine was a soldier, and I wanted to carry on the family tradition.'
      },
      {
        number: 3,
        text: 'The local lord forced me to enlist in the army.'
      },
      {
        number: 4,
        text:
          'War ravaged my homeland while I was growing up. Fighting was the only life I ever knew.'
      },
      {
        number: 5,
        text:
          'I wanted fame and fortune, so I joined a mercenary company, selling my sword to the highest bidder.'
      },
      {
        number: 6,
        text:
          'Invaders attacked my homeland. It was my duty to take up arms in defense of my people.'
      }
    ],
    urchin: [
      {
        number: 1,
        text:
          'Wanderlust caused me to leave my family to see the world. I look after myself.'
      },
      {
        number: 2,
        text:
          'I ran away from a bad situation at home and made my own way in the world.'
      },
      {
        number: 3,
        text:
          'Monsters wiped out my village, and I was the sole survivor. I had to fi nd a way to survive.'
      },
      {
        number: 4,
        text:
          'A notorious thief looked after me and other orphans and we spied and stole to earn our keep.'
      },
      {
        number: 5,
        text:
          'One day I woke up on the streets, alone and hungry, with no memory of my early childhood.'
      },
      {
        number: 6,
        text:
          'My parents died, leaving no one to look after me. I raised myself.'
      }
    ]
  }
})
