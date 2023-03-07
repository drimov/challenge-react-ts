# Challenge react-ts

Conversion d'un projet react JS en react avec TS.

## Projet

Récupération des informations depuis une API REST (https://restcountries.com).

Possibilité de faire une recherche de pays ou choisir une région.

## Définitions des spécifications

*Spécification du DarkMode*:

- Le thème doit changer lors du clique sur le bouton.
- Le thème doit être stocker dans le cache locale.
- Si le thème est déjà en cache, lors du rechargement de la page celui-ci doit être le même.
- Si le thème n'est pas en cache, alors il doit avoir le mode clair par défaut.

*Spécification du champs de recherche*:

- Le champs de recherche est vide par défaut.
- Le mot clé tapé dans le champs de recherche doit être le même que celui recherché.
- Lorsque le champs de recherche est effacer, le mot recherché doit être nulle.
- Si le mot clé correspond à des résultats, une liste de pays doit être retourné.
- Si le mot clé ne correspond à aucun résultat alors une phrase disant qu'il n'y aucun résultat correspondant à la recherche.

*Spécification pour le menu déroulant*:

- Le filtre doit correspondre au filtre choisi.
- Le filtre par défaut est 'All'.
- Si le filtre choisi est différent 'All', on doit pouvoir avoir le filtre disponible 'All' dans la liste des filtres.

*Spécification pour les données de contryAPI*:

- Par défaut les données sont nulles.
- Lors du chargement de la page, les données récupérées, un message de chargement est affiché.
- Si la récupération de donné échoue, il y a une erreur qui est retournée.
- Si les données sont récupérées, alors ils seront affichées.