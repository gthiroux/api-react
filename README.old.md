# Exercice React — Auth & Données privées

## Contexte

Tu vas construire une mini application React avec un système d'authentification.  
Tu utiliseras l'API publique **[DummyJSON](https://dummyjson.com)** — consulte sa documentation pour trouver les endpoints dont tu as besoin.

---

## Compte de test

```
username : emilys  
password : emilyspass
```

---

## Partie 1 — Appels API

L'objectif ici est uniquement de pratiquer `async/await` avec `fetch`. Pas de store, pas de Context — garde tout en local dans tes composants.

### Fonctionnalités attendues

- Un formulaire de connexion qui appelle l'API et affiche le token reçu
- Une page qui récupère et affiche le profil de l'utilisateur connecté
- Une page qui récupère et affiche une liste de produits
- Gérer les états de chargement et les erreurs sur chaque appel

> 💡 Pour l'instant, tu peux passer le token manuellement d'un composant à l'autre via les props.

---

## Partie 2 — Ajout du Context

Maintenant que les appels API fonctionnent, centralise le token dans un **Context React** pour ne plus avoir à le passer en props.

### Ce qui change

- Crée un Context qui stocke le token et expose des fonctions `login` / `logout`
- Les pages protégées ne sont accessibles que si le token existe, sinon redirection vers le login
- Le bouton de déconnexion vide le Context et redirige

---

## Bonus

- Persister le token pour survivre au refresh de la page
- Gérer le cas où le token est expiré (réponse 401)
- Créer un hook personnalisé qui centralise la logique d'appel API avec token
