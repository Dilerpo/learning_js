"use strict";
let numberOfFilms;

function start () {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}

start();

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

function rememberMyFims () {
   for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотреных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
   
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         personalMovieDB.movies[a]= b;
         console.log("done");
      } else {
         console.log("error");
         i--;
      }
   
   }
}

rememberMyFims();

function detectPersonalLvl () {
   if (personalMovieDB.count <= 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы обыкновенный зритель");
   } else if (personalMovieDB.count >= 10) {
      console.log("Вы киноман");
   } else {
      console.log("ERROR");
   }
}

detectPersonalLvl ();

function showMyDB () {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}

showMyDB();

function showMuGeneres () {
   for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш лубимый жанр под номером по порядку ${i}`);
      personalMovieDB.genres[i - 1] = genre;
   }
}

showMuGeneres();