# Nákup za koruny – jak z toho udělat aplikaci

Ve složce je celá aplikace. Nic se nepřekládá, nekompiluje, neinstaluje.
Soubory musí zůstat pohromadě a `index.html` musí být v kořeni (ne v podsložce).

| soubor | k čemu je |
|---|---|
| `index.html` | samotné cvičení (hlavní soubor, otevře se jako první) |
| `manifest.webmanifest` | název a ikona, když si to student uloží na plochu telefonu |
| `sw.js` | offline režim – funguje i bez internetu |
| `icon-192.png`, `icon-512.png` | ikony aplikace |

---

## Krok 1 – repozitář na GitHubu (přes web, Git Bash zatím netřeba)

1. github.com → zelené tlačítko **New** (nebo **+** vpravo nahoře → New repository).
2. Repository name: `nakup-za-koruny`. Nech **Public**. Nezaškrtávej „Add a README file".
3. **Create repository**.
4. Na další stránce klikni na odkaz **uploading an existing file**.
5. Přetáhni do okna **všech pět souborů** (ne celou složku – označ soubory uvnitř
   a přetáhni je).
6. Dole **Commit changes**.

Kontrola: v repozitáři vidíš `index.html` hned v seznamu, ne zanořený ve složce.

## Krok 2 – Vercel

1. vercel.com → **Continue with GitHub** (přihlaš se přes GitHub účet).
2. **Add New… → Project**.
3. U repozitáře `nakup-za-koruny` klikni **Import**. Když ho nevidíš, Vercel nemá
   přístup – klikni na *Adjust GitHub App Permissions* a repozitář povol.
4. Framework Preset: **Other**. Ostatní pole nech prázdná, nic nevyplňuj.
5. **Deploy**. Po zhruba půl minutě dostaneš adresu typu
   `https://nakup-za-koruny.vercel.app`.

Hotovo. Tuhle adresu můžeš posílat studentům.

## Krok 3 (volitelný) – vlastní doména

Když to má být pod tvojí doménou, třeba `cviceni.janaszittyayay.cz`:

1. Ve Vercelu: **Project → Settings → Domains → Add**, napiš `cviceni.janaszittyayay.cz`.
2. Vercel ti ukáže, co máš nastavit u registrátora domény – u subdomény to bývá
   jeden **CNAME** záznam. Zkopíruj hodnotu přesně tak, jak ji Vercel ukazuje.
3. Přihlas se k registrátorovi domény (tam, kde máš janaszittyayay.cz), otevři
   správu DNS, přidej CNAME záznam a ulož.
4. Změna se propíše do pár minut až hodin, Vercel to sám pozná.

Doména se nastavuje u registrátora, ne ve Vercelu – Vercel jenom řekne, co tam napsat.

---

## Jak to potom měnit

**Malá změna (přidat zboží, změnit cenu):** v repozitáři klikni na `index.html`,
ikonu tužky, uprav, dole **Commit changes**. Vercel to sám nasadí do 30 sekund.

**Přes Git Bash**, když chceš pracovat z počítače:

```bash
git clone https://github.com/TVUJ-UCET/nakup-za-koruny.git
cd nakup-za-koruny
# uprav soubory v editoru
git add .
git commit -m "nove ceny"
git push
```

Git Bash tě při prvním pushi vyzve k přihlášení přes prohlížeč.

## Student si to uloží jako aplikaci na telefon

- **Android/Chrome:** menu tří teček → *Přidat na plochu / Instalovat aplikaci*
- **iPhone/Safari:** ikona sdílení → *Přidat na plochu*

Pak se to otevírá na celou obrazovku bez adresního řádku a funguje i offline.
