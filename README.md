# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ziyun Ouyang 

  #### Je startniveau:
  blauw

  #### Je focus:
  surface plane 
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Ziggo/ homepagina: achtergrond van kleur veranderen bij het kiezen van genre
  #### Screenshot(s) van de eerste pagina (small screen): 
  homepage
  <img src="readme-images/ziggo_homepage.png" width="375px" alt="Ziggo homepagina met alle info">

  #### Screenshot(s) van de tweede pagina (small screen):
Agenda page
  <img src="readme-images/ziggo_agenda.png" width="375px" alt="Een agenda met een filter/carrousel waarmee je kunt zien welke artiesten optreden.">
 
 Website: https://www.ziggodome.nl/
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
1.Kopniveau's:
-Er is geen heading 1 aanwezig, het begint direct bij heading 2.
-Als je probeert naar verschillende koppen te navigeren, slaat de screenreader sommige headings over, omdat deze volgens de screenreader niet bestaan.
-Klik je bijvoorbeeld op een heading 3, dan wordt je doorgestuurd naar "Uitgelicht". Klik je opnieuw, dan verschuift het terug naar de vorige kop. ("3" toets)
-Heading 4 toont informatie over concerten, maar je wordt er niet naartoe geleid.
-Heading 5 en 6 zijn niet aanwezig.

2.Navigatieproblemen:
-De "K" toets springt naar "Bekijk evenement". Naar het einde van de pagina verspringt het naar de footer, waar de agenda start en het rijtje met iconen eindigt bij "Accessibility". (bodem van de footer)
-Na "Accessibility" stopt de screenreader, in plaats van opnieuw alle links af te gaan. 
-Gebruik je de pijl omhoog, dan werkt het wel correct.
-Met "K" + spatie” ga je naar de volgende link. Bijvoorbeeld: bij "Lees meer" en spatie kom je bij "Meer info over merchandise". Dit geldt ook voor artiesten, maar -tickets kan je bijvoorbeeld niet selecteren.

3.Ticket navigatie:
-Je kunt naar alle beschikbare links gaan, behalve het selecteren van tickets.
-Het nadeel is dat je ze allemaal moet afgaan er is geen optie om direct een specifieke ticket te selecteren.

Kortom: de pagina heeft problemen met kopstructuur en screenreader navigatie, waardoor sommige onderdelen niet goed bereikbaar zijn of verwarrend werken.

Bij het checken van de Ziggo Dome-website volgens de WCAG-richtlijnen valt het op:
Tekst & content: Over het algemeen goed, de teksten zijn duidelijk en netjes opgebouwd.
Mobiel & touch: Werkt grotendeels prima op je telefoon of tablet, navigeren gaat soepel.
Afbeeldingen: Hier klopt het niet helemaal: bijvoorbeeld er is vaak geen duidelijke alt-tekst, wat voor mensen met schermlezers lastig kan zijn.
Lijsten: Ze gebruiken bijna geen echte lijst elementen (ul of ol), waardoor het voor sommige gebruikers minder overzichtelijk is.

<img src="readme-images/wcagList1.jpeg" width="375px" alt="WCAG-lijst_p1">
<img src="readme-images/wcagList1.1.jpeg" width="375px" alt="WCAG-lijst_p2">
<img src="readme-images/wcagList1.2.jpeg" width="375px" alt="WCAG-lijst_p3">
<img src="readme-images/wcagList1.3.jpeg" width="375px" alt="WCAG-lijst_p4">
<img src="readme-images/wcagList1.4.jpeg" width="375px" alt="WCAG-lijst_p5">
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownSchets_home.png" width="375px" alt="breakdown van de hele pagina">
   <img src="readme-images/breakdownSchets_agenda.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdown1_carrousel.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/breakdown2_filter.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Wat goed ging:
Voor mij ging het maken van de breakdownschetsen goed. Ik vond het fijn om eerst visueel te bedenken hoe de website eruit zou zien en hoe de onderdelen zich tot elkaar verhouden. Dit gaf me een duidelijk overzicht en maakte het daarna makkelijker om met de code te werken.

Wat lastig was:
Het opzetten van de HTML vond ik lastig, vooral het structureren van de verschillende pagina’s en zorgen dat alles goed gekoppeld was. Het maken van de tweede pagina was in eerste instantie verwarrend, maar met hulp van de studentenassistente is het uiteindelijk gelukt.

<img src="readme-images/homeHtmlCode1.png" width="375px" alt="Homehtml_deel 1">
<img src="readme-images/homeHtmlCode2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/homeHtmlCode3.png" width="375px" alt="Homehtml_deel 3">
<img src="readme-images/agendaHtmlCode1.png" width="375px" alt="Homehtml_deel 1">




  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | plaatsing van  | het groeperen van  | en ik dit    | en dan ik dat    |
  | img in een     | tekst in het       | nog een punt | dit wil ik zeker |
  | carasoul       | midden             | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - stylen in 1 css
  - Geen gebruik maken van classes, behalve wanneer het echt niet anders kan
  


</details>


## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Wat goed ging:
Wat goed ging, is dat de twee HTML-pagina’s al goed waren opgezet, waardoor ik kon beginnen met het stylen.

Wat lastig was:
Wat ik lastig vond en waar ik even op vastliep, was het gebruik van nth-of-type en het bepalen waar ik classes mocht gebruiken. Na de uitleg begreep ik hoe ik dit kon toepassen en kon ik verder met het stylen van de website.

<img src="readme-images/html1wk2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/html2wk2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/html3wk2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/html4wk2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/html5wk2.png" width="375px" alt="Homehtml_deel 2">
<img src="readme-images/css1wk2.png" width="375px" alt="Csshtml_deel 1">
<img src="readme-images/css2wk2.png" width="375px" alt="Csshtml_deel 1">
<img src="readme-images/css3wk2.png" width="375px" alt="Csshtml_deel 1">
<img src="readme-images/css4wk2.png" width="375px" alt="Csshtml_deel 1">

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - werken met nth-of-type selectors
  - alles binnen de sections plaatsen
  - gebruik van nth-child


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
 1. Header & navigatie
-Op de homepagina geeft de screenreader 3 items in de header/nav aan.
-Img worden correct voorgelezen, inclusief wat erop staat.
-Koppen worden in HTML-volgorde voorgelezen: van h1 tot h4.
-Buttons worden duidelijk aangegeven, inclusief de inhoud.

2. Nieuw-sectie
-Data, artiest en type tour worden correct voorgelezen.
-Navigatie met de → toets gaat niet door naar het volgende blok; alleen via tab wordt het hele blok geselecteerd en voorgelezen.

3. Iframe
-Bij selectie speelt het iframe af; spatie-toets start/stop de content.

4. Footer
-Alles wordt goed voorgelezen, inclusief iconen en sponsors.

5. Agenda & filter
-Filter bovenin werkt goed; alles wordt correct voorgelezen.
-Artiestenlijst wordt per artiest voorgelezen; het hele blok wordt niet tegelijk gepakt zoals bij home.

Kortom: screenreader werkt grotendeels goed, maar bij navigatie tussen blokken, nieuw-sectie en artiesten op de agenda zijn er beperkingen.
<img src="readme-images/wcagList2.1.jpg" width="375px" alt="WCAG-lijst_p1">
<img src="readme-images/wcagList2.2.jpg" width="375px" alt="WCAG-lijst_p2">
<img src="readme-images/wcagList2.3.jpg" width="375px" alt="WCAG-lijst_p3">
<img src="readme-images/wcagList2.4.jpg" width="375px" alt="WCAG-lijst_p4">
<img src="readme-images/wcagList2.5.jpg" width="375px" alt="WCAG-lijst_p5">

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Wat goed ging:
Wat goed ging, is dat de basis van de CSS al stond, zoals de achtergrondkleur. Door de opzet van de HTML begon de pagina al meer op een echte website te lijken.

Wat minder goed ging:
Wat minder goed ging, was het stylen met nth-of-type selectors. Dit was erg verwarrend, waardoor het werk soms stroef verliep.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Positioneren van datum met grid
  - Gebruik maken van margin-top/margin-bottom
  - Gebruik position absolute om elementen vast te zetten


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/home1Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/home2Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/home3Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/home4Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/home5Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/home6Wk3.png" width="375px" alt="homePagina">
  <img src="readme-images/agenda1Wk3.png" width="375px" alt="agendaPagina">


  ### Dit ging goed/Heb ik geleerd: 
 Tijdens het maken van mijn website heb ik geleerd over het gebruik van nth-of-type selectors. In het begin was het lastig, omdat je hiermee elementen selecteert op basis van hun positie binnen een bepaald type, zoals het tweede <section> of derde <li>. Dit was vooral handig omdat ik zo min mogelijk classes mocht gebruiken.


  <img src="readme-images/nth-of-type.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Tijdens het stylen van mijn website heb ik geprobeerd om CSS Grid te gebruiken om de onderdelen netjes te positioneren. Dit bleek echter nog best ingewikkeld, waardoor ik Grid nauwelijks heb kunnen toepassen en vooral heb gewerkt met Flexbox en positioneren.

De filteroptie staat inmiddels wel op de pagina, maar werkt nog niet helemaal zoals bedoeld. Dit komt doordat ik voor deze functionaliteit DOM-manipulatie heb toegepast, die nog niet volledig functioneert. 

Daarnaast wil ik onderzoeken waarom mijn header scheef staat. Het lijkt te maken te hebben met positionering en marges. Ook bij de sectie met artiesten lukt het niet om de <h4> en <p> elementen correct te positioneren. Met vele pogingen werken de oplossingen niet, zelfs met externe bronnen werkt het niet.

  <img src="readme-images/filteroptie.png" width="375px" alt="filteroptie">
</details>




## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.


- [Element click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) – Hoe je klik-events toevoegt aan HTML-elementen met JavaScript.  
- [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) – Uitleg van positioneringsmethodes (`static`, `relative`, `absolute`, `fixed`, `sticky`).  
- [CSS Variables en Themes](https://www.freecodecamp.org/news/how-to-easily-create-themes-with-css-variables-2d0f4cfa5b9a/) – Werken met CSS-variabelen voor kleuren en thema’s.  
- [Window scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) – Huidige scrollpositie van de pagina meten.  
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) – Vloeiende veranderingen van CSS-stijlen.  
- [Element classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) – Dynamisch classes toevoegen, verwijderen of toggelen.  
- [Window setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) – Tijdvertragingen in JavaScript toepassen.  
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) – CSS-animaties maken met keyframes.  
- [Simple auto-playing slideshow](https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/) – Voorbeeld van een automatisch afspelende slider.  
- [Grid/Flex voorbeeld](https://codepen.io/shooft/pen/vENdvzK) – Voorbeeld van combinatie van CSS Grid en Flexbox.  
- [Interactie filter demo](https://chatgpt.com/share/68db2b32-9a58-8006-97a0-7ac2b083d35e) – Voorbeeld van een filterfunctie met DOM-manipulatie.  
- [Grid en Flexbox demo]()


</details>