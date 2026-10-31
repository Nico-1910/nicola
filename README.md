# Nicola — il mio spazio di forza

Sito personale di Nicola: scheda del macrociclo 2026–2027, registro delle sessioni con i dati dell'orologio e diario di allenamento.

## Sezioni

| Sezione | Percorso | Contenuto |
|---------|----------|-----------|
| Home | `/` | Accessi a Diario, Allenamenti, Sessioni e Schede |
| Diario | `/diario/` | Articoli e appunti (indice + modello vuoto in `/diario/modello/`) |
| Allenamenti | `/allenamenti/` | Indice del programma |
| Sessioni | `/sessioni/` | Registro sedute (indice + modello vuoto in `/sessioni/modello/`), dati dall'orologio |
| Schede | `/schede/` | La scheda del macrociclo: esercizi, figure e PDF |

## Profilo

| Campo | Valore |
|-------|--------|
| Altezza | 176 cm |
| Peso | 73 kg |
| Torace | 83 cm |
| Braccio | 30 cm |
| Punto di forza | Gambe, glutei, polpacci |
| Obiettivo | Sviluppare busto (petto, schiena, spalle, braccia) |

## Settimana tipo

| Giorno | Scheda | Quota volume |
|--------|--------|--------------|
| Lunedì | AB — Parte alta completa A | 35% |
| Mercoledì | AC — Gambe generali + bicipiti 3×8 (no polpacci) | 25% |
| Sabato | CB — Parte alta completa B | 40% |

## Durata sedute

- **Fase 1 (mesi 1–3):** progressivo 45 → 55 min, focus tecnica e recupero
- **Dal mese 4:** max **60 min** per seduta

## Locale

```bash
python -m http.server 8080
```

Poi apri http://127.0.0.1:8080/

- Home: `/`
- Scheda sessione: `/admin/sessione/?ciclo=ipertrofia-accumulo&sessione=ab`
- PDF: `/admin/sessione/pdf/?ciclo=ipertrofia-accumulo&sessione=ab`

## Note

Gli esercizi sono stati scelti **ad hoc per Nicola**, non copiati da altri atleti. La struttura del ciclo (AB/AC/CB, deload, PDF) segue il metodo del coach usato nei progetti allenamenti.

## Grafica

I colori del sito si cambiano dalle variabili CSS in cima a `css/site.css` (`:root`): sfondo, card, testi e accento blu sono tutti lì.
