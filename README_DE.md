# Theme2Go Series
## #1 Healthnavigator

### Beschreibung

Das Theme ist im Flat-Design Stil gestaltet und verwendet modernes und elegantes Schriftbild. Es nutzt Farben, die auch so in der Natur vorkommen. Um den Inhalt hervorzuheben, ist das Farbschema entsprechend übersichtlich gehalten.

Durch die großen Bilder weckt der Header entsprechend die Emotionen des Users, so dass Sie mit Ihren eigens abgestimmten Bildwelten die passenden Zielgruppen ansprechen können. Sowohl der Headerbereich als auch die horizontale Navigation sind so angelegt, dass auch Besucher mit kleineren Bildschirmen diese Elemente ohne zu scrollen direkt sehen können.

Über die globalen Variablen des Themes können die einzelnen Farben leicht ausgetauscht werden, so dass sich das Farbschema sehr einfach an den eigenen Bedarf anpassen lässt.

Die mobile, dynamisch animierte Navigation, bietet eine intuitive Benutzeroberfläche in dem auch Untermenüs (bei inhaltsreichen Seiten) angesteuert werden können.

### Features

*   Responsive
*   HTML5 [&] CSS3
*   Google-Fonts
*   CSS3-Animationseffekte (transitions)
*   Viele vorkonfigurierte Module (Events, Login, FAQ, Galerien, Navigation, Newsletter, Suche, u.a.)
*   Einsatz von Akkordeons, wodurch sich in allen Bereichen lange Listen vermeiden lassen (FAQ, News-Archiv, Events).
*   SCSS-Dateien sind im Download enthalten (Anpassung via Sass möglich).
*   Grid auf 960px Breite angelegt / in vier Spalten unterteilt.
*   1 Breakpoint

### Vorteile

*   Farbschema kann ohne Programierkenntnisse verändert werden (Globale Variablen).
*   Modifikation und Erweiterung ist auch für wenig erfahrene Contao-Nutzer geeignet.

Die Installationsanleitung ist im Download-Paket enthalten.

***

## WICHTIGE HINWEISE!

### Stylesheets

#### colors.css, fonts.css
Farben und Font Stylesheets (colors.css, font.css) werden in Contao importiert. Dort greifen in Contao Backend definierte Globale Variablen auf
die in die diese Stylesheets definierte Variablen umd Farben und Schriftart zu definieren. Sehe auch die Notizen in 
variables.scss

Es ist sehr wichtig, dass die Stylesheets colors und fonts NICHT in das contao Dateisystem hochgeladen und zur Verfügung gestellt werden.

#### styles.css
Die styles.css wird als externe Stylesheet über die Layouts in das Theme eingebunden. Alle weitere Theme Styles werden hierin definiert.

#### Entwicklung
Wenn Änderungen an Farben vorgenommen werden bzw. neue Elemente Farbdefinitionen benötigen, müssen diese zwingend nur in colors.scss definiert werden.
Anderen Falls werden die Werte im styles.css Fest hinterlegt sein und können von den Benutzer nicht über die Globalen Variablen angepasst werden.

Während der Entwicklung kann in die variables.scss der Variable $dev auf true gesetzt werden. Damit wird ein colors.css mit echte Farbwerte generiert. Lade
diese Datei in die Dev Umgebung hoch und binde es während die Entwicklung über die Layouts ein. 

Wenn die Farben definiert sind, müssen die colors.css erneut in Contao importiert werden. 
* $dev auf false einstellen
* generierte colors.css (mit Contao Variablen) bearbeiten ( "_ und \_" entfernen ) 
* setze den shadow highlight variable manually (see variables.scss)
* colors.css in contao importieren.

Für fonts.css gilt die gleiche Vorgehensweise. 