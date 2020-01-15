export const state = () => ({
  parents: [
    { '01-95': 'You know who your parents are or were.' },
    { '96-100': 'You do not know who your parents were.' }
  ],
  'half-elf parents': [
    { '1-5': 'One parent was an elf and the other was a human.' },
    { '6': 'One parent was an elf and the other was a half-elf.' },
    { '7': 'One parent was a human and the other was a half-elf.' },
    { '8': 'Both parents were half-elves.' }
  ],
  'half-orc parents': [
    { '1-3': 'One parent was an ore and the other was a human.' },
    { '4-5': 'One parent was an ore and the other was a halforc.' },
    { '6-7': 'One parent was a human and the other was a halforc.' },
    { '8': 'Both parents were half-ores.' }
  ],
  'tiefling parents': [
    {
      '1-4':
        'Both parents we re humans, their infernal heritage dorma nt until you came along.'
    },
    { '5-6': 'One parent was a tiefling and the other was a human.' },
    { '7': 'One parent was a tiefling and the other was a devil.' },
    { '8': 'One parent was a human and the other was a devil.' }
  ],
  birthplace: [
    { '01-50': 'Home' },
    { '51-55': 'Home of a family friend' },
    { '56-63': 'Home of a healer or midwife' },
    { '64-65': 'Carriage , cart, or wagon' },
    { '66-68': 'Barn, shed, or other outbuilding' },
    { '69-70': 'Cave' },
    { '71-72': 'Field' },
    { '73-74': 'Forest' },
    { '75-77': 'Temple' },
    { '78': 'Battlefield' },
    { '79-80': 'Alley or street' },
    { '81-82': 'Brothel, tavern or inn' },
    { '83-84': 'Castle, keep, tower or palace' },
    { '85': 'Sewer or rubbish heap' },
    { '86-88': 'Among people of a different race' },
    { '89-91': 'On board a boat or a ship' },
    { '92-93': 'In a prison or in the headquarters of a secret organization' },
    { '94-95': "In a sage's laboratory" },
    { '96': 'In the Feywild' },
    { '97': 'In the Shadowfell' },
    { '98': 'On the Astral Plane or the Ethereal Plane' },
    { '99': 'On an Inner Plane of your choice' },
    { '100': 'On an Outer Plane of your choice' }
  ],
  'number of siblings': [
    { '01-02': '0' },
    { '03-04': '1d3' },
    { '05-06': '1d4+1' },
    { '07-08': '1d6+2' },
    { '09-10': '1d8+3' }
  ],
  'birth order': [
    { '2': 'Twin, triplet or quadruplet' },
    { '3-7': 'Older' },
    { '8-12': 'Younger' }
  ],
  family: [
    { '01': 'none' },
    { '02': 'Institution , such as an asylum' },
    { '03': 'Temple' },
    { '04-05': 'Guardian' },
    {
      '08-15':
        'Paternal or maternal aunt, uncle, or both; or extended family such as a t ribe or clan'
    },
    { '16-25': 'Paternal or maternal grandparent(s)' },
    { '26-35': 'Adoptive family (same or different race)' },
    { '36-55': 'Single father or stepfather' },
    { '56-75': 'Single mother or stepmother' },
    { '76-100': 'Mother and father' }
  ],
  'absent parent': [
    {
      '1': 'Your parent died (roll on the Cause of Death supplemental table).'
    },
    { '2': 'Your parent was imprisoned, ens laved, or otherwise taken away.' },
    { '3': 'Your parent abandoned you.' },
    { '4': "You'r parent disappeared to an unknown fate." }
  ],
  'family lifestyle': [
    { '3': 'Wretched (-40)' },
    { '4-5': 'Squalid (-20)' },
    { '6-8': 'Poor (-10)' },
    { '9-12': 'Modest (+O)' },
    { '13-15': 'Comfortable (+10)' },
    { '16-17': 'Wealthy (+20)' },
    { '18': 'Aristocratic (+40)' }
  ],
  'childhood home': [
    { '.100-0': 'or lower On the streets' },
    { '1-20': 'Rundown shack' },
    { '21-30': 'No permanent residence; you moved around a lot' },
    { '31-40': 'Encampment or village in the wilderness' },
    { '41-50': 'Apartment in a rundown neigh borhood' },
    { '51-70': 'Small house' },
    { '71-90': 'Large house' },
    { '91-110': 'Mansion' },
    { '111-9999': 'Palace or castle' }
  ],
  'childhood memories': [
    {
      '.100-3':
        'I am still haunted by my childhood, when I was treated badly by my peers.'
    },
    { '4-5': 'I spent most of my childhood alone, with no close friends.' },
    {
      '6-8':
        'Others saw me as being different or strange, and so I had few companions.'
    },
    { '9-12': 'I had a few close friends and lived an ordinary childhood.' }
  ]
})
/*
LIFE EVENTS BY AGE
dlOO Current Age Life Events
01 - 20 20 years or younger
21-59 21-30 years ld4
60- 69 31 - 40 years ld6
70-89 41 - 50 years ld8
90-99 51 - 60 years ldlO
00 61 yea rs or o lder ld12

LIFE EVENTS
dlOO Event
01 - 10 You suffered a tragedy. Roll on the Tragedies t able.
11 -20 You gained a bit of good fortu ne. Roll on the Boons
table.
21-30 You fe ll in love or got married . If you get this result
more than once, you can choose to have a child
instead. Work with your DM to determine the identity
of your love interest.
31 -40 You made an enemy of an adventure r. Roll a d6. An
odd number indicates you are to blame for the rift,
and an even number indicates you are blameless.
Use the supplemental tables and work with your
DM to determine this hostile character's identity
and the danger th is enemy poses to you.
41 - 50 You made a friend of an adventurer. Use the supplemental
tables and work with your DM to add
more detail to this friendly character and establish
how your friendship began.
51-70 You spent time working in a job related to your
background. Start the game with an extra 2d6 gp.
71-75 You met someone important. Use the supplemental
tables to determine this character's identity and
how this individual feels about you. Work out additional
details with your DM as needed to fit this
character into your backstory.
76- 80 You went on an adventure. Roll on the Adventures
table to see what happened to you. Work with your
DM to determine the nature of the adventure and
the creatures you encountered.
81-85 You had a supernatural experience. Roll on t he Supernatural
Events table to find out what it was.
86-90 You fought in a battle. Roll on the War table to
learn what happened to you. Work with your DM to
come up with the reason for the battle and the factions
involved. It might have been a small conAict
between your community and a band of ores, or it
could have been a major battle in a larger war.
91-95 You committed a crime or were wrongly accused of
doing so. Roll on the Crime table to determine the
nature of the offense and on the Punishment table
to see what became of you.
96-99 You encountered something magical. Roll on the
Arcane Matters table.
00 Something truly strange happened to you . Roll on
the Weird Stuff table.

ADVENTURES
dl 00 O utcome
01-10 You nearly died. You have nasty scars on your
body, and you are m issi n g an ear, ld3 fingers, or
ld4 toes.
11 - 20 You suffere d a grievous injury. Although the wound
healed, it still pains you from time to time.
21-30 You were woun ded, bu t in time you fu lly recovered.
31 - 40 You contracted a disease while exploring a filthy
warren. You recovered from the disease, but you
have a persistent cough, pockmarks on your skin,
or prematurely gray hair.
41-50 You were poisoned by a trap or a monster. You recovered,
but the next time you must make a saving
throw against poison, you make the saving throw
with disadvantage.
51-60 You lost something of sentimental value to you
during your adventure. Remove one trinket from
your possessions.
61-70 You were terrib ly frighte ned by something you encountered
a nd ran away, a bandoning your companions
to their fa te.
71-80 You learned a great dea l d u ring your adventure.
The next time you make an ability check or a saving
throw, you have advantage o n the roll .
81-90 You found some treasure on your adventure. You
have 2d6 gp left from your share of it.
91-99 You found a considerable amount of treasure on
your adventure. You have ld20 + 50 gp left from
your share of it .
00 You came across a common magic item (of the
DM's choice).

ARCANE MATTERS
dlO Magical Event
1 You were c harmed o r frightened by a spell.
2 You were injured by the effect of a spell .
3 Yo u witnessed a powerful spell being cast by a
cleric, a druid, a sorcerer, a warlock, or a wizard.
4 You drank a potion (of the DM 's choice}.
S You found a spell scroll (of the DM 's choice} and
succeeded in casting the spell it contained.
6 You were affected by teleportation magic.
7 You turned invisible for a time.
8 You identified an illusion for what it was.
9 You saw a creature being conjured by magic.
10 Your fortune was read by a diviner. Roll twice on
the Life Events table, but don't apply the results.
Instead, the DM picks one event as a portent of
your future (which might or might not come true).

BOONS
dlO Bo on
A friendly wizard gave you a spell scroll containing
one cantrip (of the DM's choice).
2 You saved the life of a commoner, who now owes
you a life debt. This individual accompanies you on
your travels and performs mundane tasks for you,
but will leave if neglected, abused, or imperiled.
Determine details about this c haracter by using the
sup p lemental tables and working with your DM .
3 You found a riding horse.
4 You found some money. You have l d20 gp in addition
to your regular starting fund s .
S A relative bequeathed you a s imple weapon of your
choice.
6
7
8
9
10
You found something interesting. You gain one
additional trinket.
You once performed a service for a local temple.
The next time you visit the temple, you can receive
healing up to your hit point maximum.
A friendly alchemist gifted you with a potion of
healing or a flask of acid, as you choose.
You found a treasure map.
A distant relative left you a stipend that enables
you to live at the comfortable lifestyle for ld20
years. If you choose t o live at a h igher lifest yle, you
reduce the price of the lifestyle by 2 gp during that
time period.


CRIME
d8
1
2
3
4
5
6
7
8
C ri me
Murder
Theft
Burglary
Assault
Smuggling
Kidnapping
Exto rtio n
Counterfeiting

PUNISHMENT
d1 2 Pun ishment
1-3 You did not commit the crime and were exonerated
after being accused.
4-6 You committed the crime or helped do so, but
nonetheless the authorities found you not guilty.
7-8 You were nearly caught in the act. You had to flee
and are wanted in the community where the crime
occurred.
9-12 You were caught and convicted. You spent time in
jail, chained to an oar, or perform ing hard labor.
You served a sentence of ld4 years or succeeded in
escaping after that much time.

SUPERNATURAL EVENTS
dlOO Event
01 - 05 You were ensorcelled by a fey and enslaved for ld6
years before you escaped.
06- 10 You saw a demon and ran away before it could do
anything to you.
11 - 15 A devil tempted you. Make a DC 10 Wisdom saving
throw. On a failed save, your alignment shifts one
step toward evil (if it 's not evil already), and you
start the game with an additional ld20 + 50 gp.
16-20 You woke up one morning miles from your home,
with no idea how you got there.
21- 30 You visited a holy site and felt the presence of the
divine there.
31 - 40 You witnessed a falling red star, a face appearing in
the frost , or some other bizarre happening. You are
certain that it was an omen of some sort.
41 - 50 You escaped certain death and believe it was the
intervention of a god that saved you.
51-60
61 - 70
71 -75
76-80
81-85
86-90
91-95
96- 00
You witnessed a minor miracle.
You explored an empty house and found it to be
haunted.
You were briefly possessed. Roll a d6 to determine
what type of creature possessed you: l , celestial; 2,
devil; 3, demon; 4, fey; 5, elemental; 6, undead.
You saw a ghost.
You saw a ghoul feed ing on a corpse.
A celestial or a fiend visited you in your dreams to
give a warning of dangers to come.
You briefly visited the Feywild or the Shadowfell.
You saw a portal that you believe leads to another
plane of existence.

TRAGEDIES
dl 2 Tragedy
1-2 A family member or a close friend died. Roll on
the Cause of Death supplemental table to find out
how.
3
4
5
6
7
A friendship ended bitterly, and the other person
is now hostile to you. The cause might have been a
misunderstanding or something you or the former
friend d id.
You lost all your possessions in a disaster, and you
had to rebuild your life.
You were imprisoned for a crime you didn't commit
and spent ld6 years at hard labor, in jail, or
shackled to an oar in a slave galley.
War ravaged your home community, reducing everything
to rubble and ruin. In the aftermath, you
either helped your town rebuild or moved somewhere
else.
A lover disappeared without a trace. You have been
looking for that person ever since.

dl2
8
9
10
11
12
Tragedy
A terrible blight in your home community caused
crops to fail, and many starved. You lost a sibling
or some other family member.
You did something that bro ught terrible shame to
you in the eyes of your family. You might have been
involved in a scandal, dabbled in dark magic, or
offended someone important. The attitude of your
fam ily members toward you becomes indifferent at
best, though they might eventually forgive you.
For a reason you were never told, you were exiled
from your community. You then either wandered in
the wi lderness for a time or promptly found a new
place to live.
A romantic relationship ended . Roll a d6. An odd
number means it ended with bad feelings, while an
even number means it ended amicably.
A current or prospective romantic partner of yours
died. Roll on the Cause of Death supplemental
table to find out how. If the resu lt is murder, roll a
dl2. On a l , you were responsible, whether directly
or indi rectly.


WAR
dl2
2-3
4
5- 7
War Outcome
You were knocked out and left for dead. You woke
up hours later with no recollection of the battle.
You were badly injured in the fight, and you still
bear the awful scars of those wounds.
You ran away from the battle to save your life, but
you still feel shame for your cowardice.
You suffered only minor injuries, and the wounds
all healed without leaving scars.
dl2
8-9
10-11
12
War Outcome
You survived the battle, but you suffer from terrible
nightmares in which you relive the experience.
You escaped the battle unscathed, though many of
your friends were injured or lost.
You acquitted yourself well in battle and are remembered
as a hero. You might have received a
medal for your bravery.

W EIRD STUFF
dl2
2
3
4
What Happened
You were turned into a toad and remained in that
form for ld4 weeks.
You were petrified and remained a stone statue for
a time until someone freed you.
You were enslaved by a hag, a satyr, or some other
being and lived in that creature's thrall for ld6
years.
A dragon held you as a prisoner for ld4 months
until adventurers killed it.
5 You were taken captive by a race of evil humanoids
such as drow, kuo-toa, or quaggoths. You lived as a
slave in the Underdark until you escaped.
6 You served a powerfu l adventurer as a hireling. You
have only recently left that service. Use the supplemental
tables and work with your DM to determine
the basic details about your former employer.
7 You went insane for ld6 years and recently regained
your sanity. A tic or some other bit of odd
behavior might linger.
8 A lover of yours was secretly a silver dragon.
9 You were captured by a cult and nearly sacrificed
on an altar to the foul being the cultists served.
You escaped, but you fear they will find you.
10 You met a demigod , an archdevil, an archfey, a demon
lord, or a titan, and you lived to tell the tale.
11 You were swallowed by a giant fish and spent a
month in its gullet before you escaped.
12 A powerful being granted you a wish, but you
squandered it on something frivolous.


A LI GNMENT
3d6 Alignment
3 Chaotic evil (50%) or chaotic neutral (50%)
4-5 Lawful evil
6- 8 Neutral evil
9- 12 Neutral
3d6
13-15
16-17
18
Alignment
Neutral good
Lawful good (50%) or lawful neutral (50%)
Chaotic good (50%) or chaotic neutral (50%)

CAUSE O F DEATH
dl 2 Cause of Death
Unknown
2
3
4
5
6-7
8
9
10
11
12
Murdered
Killed in battle
Accident related to class or occupation
Accident unrelated to class or occupation
Natural causes, such as disease or old age
Apparent suicide
Torn apart by an an imal or a natural disaster
Consumed by a monster
Executed for a crime or tortured to death
Bizarre event, such as being hit by a meteorite,
struck down by an angry god, or ki lled by a hatching
s laad egg


CLASS
dlOO
01-07
08-14
15-29
30- 36
37-52
53-58
59-64
65-70
71-84
85-89
90-94
95-00
Class
Barbarian
Bard
Cleric
Druid
Fighter
Monk
Paladin
Ranger
Rogue
Sorcerer
Warlock
Wizard

OCCUPATION
dl OO Occupation
01-05 Academic
06-10 Adventurer (roll on the Class table)
11 Aristocrat
12-26 Artisan or guild member
27-31 Criminal
32-36 Entertainer
37-38 Exile, hermit, or refugee
39-43 Explorer or wanderer
44- 55 Farmer or herder
56-60 Hunter or trapper
61-75 Laborer
76-80 Merchant
81- 85 Politician or bureaucrat
86-90 Priest
91-95 Sailor
96- 00 Soldier

RACE
dlOO Race
01-40 Human
41-50 Dwarf
51 - 60 Elf
61-70 Halfling
71-75 Dragon born
76- 80 Gnome
81-85 Half-elf
86-90 Half-ore
91-95 Tiefling
96- 00 DM's choice

RELATIONSHIP
3d4 Attitude
3-4 Hostile
5-10 Friendly
11-12 Indifferent

STATUS
3d6 Status
3 Dead (roll on the Cause of Death table)
4-5 Missing or unknown
6-8 Alive, but doing poorly due to injury, financial trouble,
or relation ship difficulties
9-12 Alive and well
13-15 Alive and quite successful
16- 17 Alive and infamous
18 Alive and famous


EXAMPLE RIVALS
d20 Ri va l
Tax collector who is convinced the characters are
dodging fees
2 Politician who is concerned that the characters a re
causing more trouble than they solve
3 High priest who worries the characters are dimin ishing
the temple's prestige
4 Wizard who blames the characters for some recent
troubles
5 Rival adventuring party
6 Bard who loves a scandal enough to spark one
7 Childhood rival or member of a rival clan
8 Scorned sib ling or parent
9 Merchant who blames the characte rs for any busi·
ness woes
10 Newcomer out to make a mark on the world
11 Sibling or ally of defeated enemy
12 Official seeking to restore a tarnished reputation
13 Deadly foe disguised as a social rival
14 Fiend seeking to tempt the characters to evil
15 Spurned romantic interest
16 Political opportunist seeking a scapegoat
17 Traitorous noble looking to foment a revolution
18 Would-be tyrant who brooks no opposition
19 Exiled noble looking for revenge
20 Corrupt official worried that recent misdeeds will
be revealed



*/
