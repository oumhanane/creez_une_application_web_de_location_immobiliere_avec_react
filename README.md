# Créez une application web de location immobilière avec React

Objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !).

Back-end / data : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.

Contraintes techniques : les coding guidelines de Kasa sont fournis. Habituellement Create React App est utilisé pour créer les applications React, mais on peut utiliser un autre bundler comme Vite par exemple.

 Contraintes techniques 
React : 
Il est impératif d’utiliser ces éléments de React pour un code de qualité : 
● Découpage en composants modulaires et réutilisables ; 
● Un composant par fichier ; 
● Structure logique des différents fichiers ; 
● Utilisation des props entre les composants ; 
● Utilisation du state dans les composants quand c'est nécessaire ; 
● Gestion des événements ; 
● Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible. 
Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes. 
React Router : 
● Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement. 
● Il existe une page par route. 
● La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
● La logique du routeur est réunie dans un seul fichier. 
