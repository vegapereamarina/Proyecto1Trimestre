//Creo la coleccion materiales e inserto documentos usando un InsertMany
db.musica.drop()

db.musica.insertMany([

{ artista: "Krall Diana", nacimiento: new Date("1915-01-07"), album: "the girl in the other room", datos: {realizado: 2004, unidadesVendidas: 20}, genero: "jazz", grammy: true, integrantes: ["músicos","cantante", "producción"]},
{ artista: "Sinatra Frank", nacimiento: new Date("1970-01-26"), album: "Frank Sinatra sings for Only the lonely", datos: {realizado: 1998, unidadesVendidas: 15}, genero: "oldies", grammy: true, integrantes: ["músicos","cantante"]},
{ artista: "Prokofiev Sergei", nacimiento: new Date("1980-01-03"), album: "Symphonies Nos.1 & 5", datos: {realizado: 2005, unidadesVendidas: 10}, genero: "música clásica", grammy: true, integrantes: ["orquesta"]},
{ artista: "Barlok Bela", nacimiento: new Date("1954-03-28"), album: "the orchestral masterpieces",datos: { realizado: 1998, unidadesVendidas: 10} , genero: "música clásica", grammy: false, integrantes: ["orquesta"]},
{ artista: "Debussy Claude", nacimiento: new Date("1965-07-17"), album: "Nocturnes", datos: {realizado: 1995, unidadesVendidas: 17}, genero: "música clásica", grammy: false, integrantes: ["orquesta"]},
{ artista: "Webster Ben", nacimiento: new Date("1960-10-11"), album: "soulvile", datos: {realizado: 1990, unidadesVendidas: 17}, genero: "jazz", grammy: true, integrantes: ["músicos","cantante"]},
{ artista: "Getz Stan", nacimiento: new Date("1970-01-04"), album: "Gitanes jazz", datos: {realizado: 1998, unidadesVendidas: 23}, genero: "folk", grammy: false, integrantes: ["músicos","cantante", "producción"]},
{ artista: "Krall Diana", nacimiento: new Date("1985-01-07"), album: "all for you", datos: {realizado: 1996, unidadesVendidas: 14}, genero: "jazz", grammy: false, integrantes: ["músicos","cantante"]},
{ artista: "Corea Chick", nacimiento: new Date("1980-08-24"), album: "Light as a feather", datos: {realizado: 2004, unidadesVendidas: 16}, genero: "jazz", grammy: true, integrantes: ["músicos","cantante"]},
{ artista: "Wilson Cassandra", nacimiento: new Date("1978-11-24"), album: "belly of the sun",datos: { realizado: 2002, unidadesVendidas: 19}, genero: "jazz", grammy: true, integrantes: ["músicos","cantante"]},
{ artista: "Ross Diana", nacimiento: new Date("1974-12-28"), album: "Blue", datos: {realizado: 2006, unidadesVendidas: 21}, genero: "jazz", grammy: true, integrantes: ["músicos","cantante", "producción"]},
{ artista: "Jobim Antonio Carlos", nacimiento: new Date("1935-03-27"), album: "wave", datos: {realizado: 1990, unidadesVendidas: 22}, genero: "jazz", grammy: false, integrantes: ["músicos","cantante"]},
{ artista: "Mozart Wolfgang", nacimiento: new Date("1756-01-27"), album: "Piano concertos No 4& 5", datos: {realizado: 1962, unidadesVendidas: 30 }, genero: "música clásica", grammy: true, integrantes: ["orquesta"]},
{ artista: "Tchaikovsky Peter", nacimiento: new Date("1840-05-07"), album: "concerto No. 1 for piano and orchestra", datos: {realizado: 1966, unidadesVendidas: 29}, genero: "música clásica", grammy: false, integrantes: ["orquesta"]},
{ artista: "Sinata Frank", nacimiento: new Date("1915-01-07"), album: "in the wee small hours", datos: {realizado: 1998, unidadesVendidas: 15}, genero: "oldies", grammy: true, integrantes: ["músicos","cantante"]},
])