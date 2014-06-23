# Larrabetzu Eskura Angular #

Larrabetzuko Agenda kulturalaren web aplikazioa

### Aplikazioa eraikitzeko ###
* [NodeJS](http://nodejs.org/) instalatuta egon behar da.
* Instalatu Gulp.js modu globalean:
```
#!javascript

npm install -g gulp
```
* Respositorio hau klonatu edo deskargatu zure makinan dagoen edozein karpetara:

```
#!bash
# Klonatu
git clone https://github.com/larrabetzu/LarrabetzuEskuraWebAppAngular.git

# edo deskargatu
wget https://github.com/larrabetzu/LarrabetzuEskuraWebAppAngular/archive/master.zip


```
* Deskargatu den karpetara sartu eta aplikazioak behar dituen dependentziak instalatu:

```
#!bash

cd ~/nire-karpeta
npm install
```
* Gulp exekutatu eta dist izeneko karpeta bat  sortuko da. dist karpeta horren barruko fitxategiak nahi den zerbitzarira igon behar dira aplikazioa ostatatzeko.

```
#!bash

gulp
```
* Garapenerako lagungarri izan daitezkeen komando eta aukera guztiak:
```
#!bash

# Aplikazioa eraiki
gulp

# Garapenerako zerbitzaria http://localhost:3000
gulp dev

# Aplikazioa eraki eta frogatzeko zerbitzaria http://localhost:9000
gulp dist
```
