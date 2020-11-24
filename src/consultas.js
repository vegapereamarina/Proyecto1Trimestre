//musica realizada despues del 2000.
db.musica.find({"datos.realizado": {$gt:2000}})

//toda la música que no hubiese sido realizada en el 1998 con el genero de música clásica.
db.musica.find({$and: [ { "datos.realizado": {$eq: 1998}} , {genero:{$ne: "música clásica"}} ]})

//Toda la música que no tenga como género oldies ni jazz.
db.musica.find({genero: {$nin: ["oldies", "jazz"]} })

//Toda la música que no tenga como genero la música clásica, ni el jazz.
db.musica.find({genero: {$not: {$in: ["música clásica" , "jazz"]}} })

//Toda la música que esté entre los años 1997 y 2005, y los que tengan mas de 18 unidades vendidas
db.musica.find({$and: [ {"datos.realizado":{$gte:1997 , $lte:2005}} , {"datos.unidadesVendidas":{$gt: 18}} ] })

//Toda la música que esté entre los años 1960 y 1970, o los que tengan mas de 20 unidades vendidas
db.musica.find({$or: [ {"datos.realizado":{$gte:1960 , $lte:1970}} , {"datos.unidadesVendidas":{$gt: 20}} ] })

//toda la música que no haya sido creada antes del 2000, o que no tenga "o"
db.musica.find({$nor: [{"datos.realizado":{$lt:2000}} , {album: {$regex:/o$/}}]})

//toda la música, cuyos autores hayan nacido despues del 1970/01/01 y su género sea "jazz" o haya ganado un grammy
db.musica.find( {nacimiento:{$gte :new Date("1970-01-01")}, $or: [{"genero": "jazz"}, {grammy: true}]})

//Toda la música que no está en la decada de los 90s, tenga como integrantes los músicos, no haya ganado un grammy y el autor haya nacido despues de 1970/01/01
db.musica.find({$and: [{"datos.realizado":{$not:/199$/}}, {integrantes:"músicos"}, {grammy: false}, {nacimiento: {$gt: new Date("1970-01-01")}}]})

//Toda la musica, cuyo autor haya nacido despues de 1970/01/01, el albúm se hubiese realizado en 2005, vendiendo alrededor de 10, que tenga como integrante una orquesta, haya ganado un grammy y tenga como género la música clásica.
db.musica.find({$and: [{nacimiento: {$gte: new Date("1970:01:01")}}, {datos: {realizado: 2005, unidadesVendidas: 10}}, {integrantes: {$regex: /orquesta/}}, {grammy: true}, {"genero": "música clásica"}]})

