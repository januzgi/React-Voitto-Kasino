# Voitto Kasino
Full Stack -kurssin projektityönä Reactilla koodattu nettikasino.

## Kokeile appia
1. Kloonaa repo:
```git clone https://github.com/januzgi/React-Voitto-Kasino.git```

1. Mene alikansioon ```cd React-Voitto-Kasino/```

3. Asenna ja aja appi:
```npm install; npm start ```


## Appin etusivun design
![Etusivun design](https://github.com/januzgi/React-Voitto-Kasino/blob/janis/leiskat/Kasino_Etusivu_design.jpg)



## Arkkitehtuuri
* MongoDB Atlas tietokantana
* React
* React Router
* Semantic UI React
* CSS moduulit


## Ominaisuudet
**MVP**
* 3 sivun SPA: 
	* Etusivu (design kuten suunniteltu)
	* Luo tunnus -näkymä (karvalakkidesign)
	* Admin -näkymä (karvalakkidesign)
* Käyttäjähallinta, yksi admin ja muut voivat luoda käyttäjätilin
	* Vain adminille näkyy Admin -näkymä
* Jokainen peli on oma korttinsa ja niillä on oma tyylinsä

**2. ominaisuudet (tehdään jos ehtii)**
* Admin pystyy "lisäämään" pelejä niiden ominaisuuksien mukaan Admin näkymästä. Lähinnä siis tietoja tietokantaan, joita voidaan sieltä hakea.
* Pelien järjestäminen eri vaihtoehtojen mukaisesti (voittoprosentti, suurin voitto, pienin panos jne.)

**3. ominaisuudet (ois kiva mut extraa)**
* Veloitus pelitililtä käytön mukaan
* Integroidaan demoja slotti-peleistä

