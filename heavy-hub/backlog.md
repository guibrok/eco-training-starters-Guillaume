# Backlog du projet "Éco-conception MyAnimeList"

## USER STORIES

---

### Story 1 : Réduction du poids des images

**En tant que** utilisateur de MAL sur mobile,  
**je veux** que les couvertures d'animes chargent plus rapidement  
**afin de** économiser ma data et réduire l'impact environnemental.

- Objectif : 100% des images converties en WebP
- BP associée : Compresser et convertir les images au format WebP (RWEB GreenIT — BP Frontend)
- KPI : poids moyen des images < 50Ko
- Tag roadmap : M2
- Repo concerné : heavy-hub/assets
- Critère de réussite : score EcoIndex amélioré d'au moins 10 points sur la fiche anime
- Priorité : Haute

---

### Story 2 : Lazy loading des contenus

**En tant que** utilisateur qui parcourt les fiches animes,  
**je veux** que les images se chargent uniquement quand je les fais défiler  
**afin de** ne pas charger inutilement des contenus non vus.

- Objectif : 100% des images en lazy loading
- BP associée : Mettre en place le lazy loading des images (RWEB GreenIT — BP Frontend)
- KPI : réduction du nombre de requêtes initiales de 30%
- Tag roadmap : M2
- Repo concerné : heavy-hub/frontend/src
- Critère de réussite : nombre de requêtes au chargement initial < 100
- Priorité : Haute

---

### Story 3 : Suppression des trackers tiers

**En tant que** utilisateur de MAL,  
**je veux** que le site ne charge pas de scripts publicitaires inutiles  
**afin de** protéger ma vie privée et réduire la consommation du terminal.

- Objectif : 0 tracker tiers non essentiel chargé au démarrage
- BP associée : Supprimer les scripts et trackers tiers inutiles (RWEB GreenIT — BP Frontend)
- KPI : nombre de requêtes tierces < 5
- Tag roadmap : M3
- Repo concerné : heavy-hub/frontend/src
- Critère de réussite : score EcoIndex page d'accueil passe de F à D minimum
- Priorité : Moyenne