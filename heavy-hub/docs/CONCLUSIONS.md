# Conclusions des implémentations de bonnes pratiques

## BP 1 — Lazy Loading (`feat/lazy-loading`)

**Implémentation :** Ajout de `loading="lazy"` sur toutes les balises `<img>` du projet.

**Mesures :**
| Métrique | Avant | Après |
|---|---|---|
| Requêtes | 28 | 28 |
| Transférés | 48,9 Ko | 48,9 Ko |
| Load | 346ms | 352ms |

**Constat :** Pas d'impact mesurable sur ce projet d'entraînement car les images SVG sont très légères (0,3 Ko). Sur un service réel comme MAL avec des centaines de couvertures d'animes, l'impact serait significatif.

---

## BP 2 — Conversion WebP (`feat/webp-images`)

**Implémentation :** Conversion des images SVG en WebP via sharp + mise à jour des références JSON.

**Mesures :**
| Métrique | Avant | Après |
|---|---|---|
| Format | svg+xml | webp |
| Poids images | 30,7 Ko | 89,9 Ko |

**Constat :** La conversion SVG → WebP n'est pas pertinente car les SVG sont des fichiers vectoriels déjà optimaux. La BP WebP est pertinente uniquement pour les images raster (photos, couvertures d'animes sur MAL).

---

## BP 3 — Suppression trackers (`feat/remove-trackers`)
