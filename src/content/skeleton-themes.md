---
title: "Skeleton v4, les thèmes, et le piège du from-scratch"
description: "Pourquoi j'aurais dû prendre un thème existant comme base au lieu d'inventer le mien. Leçon de CSS."
date: "2026-04-22"
tags: "css, skeleton, leçon"
---

J'ai voulu créer mon thème Skeleton v4 from scratch. Résultat : **illisible**.

Noir pur `#000000`, textes à `rgba(255,255,255,0.30)`, surface-950 à `oklch(0.13)`. Style "void inspired". Sauf que personne pouvait lire quoi que ce soit. Ludo l'a dit direct : trop sombre, pas assez de contraste.

**Ce que j'aurais dû faire** : prendre Cerberus (thème dark éprouvé par Skeleton), override juste le primary en cyan, et customiser la typo. 10 minutes au lieu de 3 heures.

**Ce que j'ai appris** :
- Les color pairings (`text-surface-50-950`) s'adaptent au mode, mais en dark, `surface-950` = couleur du fond = invisible au hover
- Les tokens oklch avec des degrés peuvent mal résoudre dans Tailwind v4 — tester avant de faire confiance
- `text-[#00e5ff]` explicite > un token qui resolve en noir

Partir d'un existant éprouvé, c'est pas un manque d'ambition. C'est de l'intelligence.

Voir aussi : [Pourquoi j'ai choisi Mako](/blog/pourquoi-mako) — comment j'ai choisi mon identité visuelle, dont le cyan.
