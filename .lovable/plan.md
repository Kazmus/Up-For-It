# Landing page Up For It — page unique

## Décisions arrêtées avec vous
- Menu : ajout d'une courte section « À propos » (2-3 phrases sur l'approche terrain) ; « Références » pointe vers les témoignages.
- Témoignages : j'écris des exemples réalistes (citations + résultats crédibles), faciles à remplacer par les vrais.
- Photos : zones réservées stylisées (blocs d'ambiance avec libellé), prêtes à recevoir vos photos ; le code prévoit déjà les textes alternatifs.
- Formulaire : message de confirmation à l'écran, aucun envoi pour l'instant.

## Direction visuelle (définie par vous)
- Orange #F28C28 pour les CTA, bleu-turquoise #3AA0C0 pour les accents, texte #1F2933.
- Police Inter, beaucoup d'espace blanc, cartes arrondies, ombres légères.
- Terrain, direct et chaleureux, sans jargon.

## Structure de la page (dans cet ordre)
1. **Header** : logo texte « UP FOR IT », menu (Studio, Academy, À propos, Références, Contact), bouton « Me faire conseiller ». Menu burger sur mobile.
2. **Hero** : H1 « Des projets horeca qui tiennent la route. », sous-titre, CTA « Me faire conseiller ». Lisible sans scroll sur mobile.
3. **Deux portes** : 2 cartes côte à côte (empilées sur mobile) — Studio (« Vous êtes plutôt Studio si » : établissement ouvert, rentabilité/trésorerie difficile, équipe sous tension, visibilité faible) et Academy (« Vous êtes plutôt Academy si » : projet en structuration, reconversion/sortie du chômage, premier établissement, besoin de clarté). CTA secondaires « Découvrir le Studio » / « Découvrir l'Academy » (ancres internes).
4. **Orientation** : « Vous hésitez entre les deux ? On vous oriente, sans forcing commercial. » + bouton.
5. **À propos** (nouvelle section courte) : 2-3 phrases sur l'approche terrain d'Up For It.
6. **Témoignages** (ancre « Références ») : 3 cartes — citation courte, 3 résultats en puces, prénom + type d'établissement : Alex (bar à vin et tapas), Sarah (concept food multi-sites), Jean (projet de café après chômage).
7. **Primes et aides** : accompagnements potentiellement cofinancés, aide à l'éligibilité et au dossier + mention obligatoire « L'obtention d'une prime dépend des organismes publics et n'est jamais garantie. »
8. **CTA final** (ancre « Contact ») : « Construisons votre succès » + formulaire (nom, e-mail, téléphone, choix Studio / Academy / Je ne sais pas, message) + bouton « Me faire conseiller ». Confirmation à l'écran après envoi.
9. **Footer** : +32 (0)479 09 19 09, Instagram, Facebook, LinkedIn, lien « Espace Learning », mentions légales, confidentialité, cookies.

## Mise en œuvre technique
- Réécriture de la page d'accueil (`src/routes/index.tsx`) en une seule page avec ancres ; header commun dans cette même page.
- Design tokens (couleurs, ombres, rayons) dans `src/styles.css` ; police Inter chargée via `<link>` dans la racine.
- Formulaire géré côté client uniquement (validation simple, état « envoyé » avec message de confirmation).
- Aucune image lourde ni vidéo dans le hero ; mobile-first, H1 unique, H2 par section.
- Meta SEO propres à la page (titre, description, réseaux sociaux) — jamais « Lovable App ».

## Vérifications avant livraison
- Aperçu mobile : hero + CTA visibles sans scroll, menu burger fonctionnel.
- Tous les liens du menu et CTA pointent vers la bonne section.
- Textes 100 % français, aucun lorem ipsum ; mention primes présente.
