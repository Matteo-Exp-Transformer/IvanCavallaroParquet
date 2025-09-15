# ParquetPregio - Sito Web per Parquet di Alta Qualità

Sito web professionale per la vendita di parquet di alta qualità, sviluppato per Ivan Cavallaro. Include wizard e-commerce interattivo, supporto multilingue (Italiano/Greco) e ottimizzazioni per immagini ad alta risoluzione.

## 🚀 Caratteristiche Principali

### ✨ Funzionalità Core
- **Wizard E-commerce Interattivo**: Guida l'utente nella selezione del parquet ideale attraverso 5 step personalizzati
- **Supporto Multilingue**: Italiano 🇮🇹 e Greco 🇬🇷 con traduzioni complete
- **Immagini Ad Alta Risoluzione**: Sistema di zoom e lightbox per visualizzare i dettagli
- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance Ottimizzate**: Lazy loading, preload delle immagini critiche

### 🎨 Design e UX
- **Design Moderno**: Palette colori elegante ispirata ai toni del legno
- **Animazioni Fluide**: Transizioni e effetti hover per un'esperienza premium
- **Navigazione Intuitiva**: Menu fisso con scroll smooth
- **Accessibilità**: Supporto per screen reader e navigazione da tastiera

### 🛠️ Sezioni del Sito
1. **Hero Section**: Slider con call-to-action prominenti
2. **Chi Siamo**: Biografia di Ivan Cavallaro con collaborazioni
3. **Referenze**: Portfolio progetti con lightbox
4. **Prodotti**: 5 tipologie di parquet con descrizioni dettagliate
5. **Wizard**: Sistema di raccomandazione personalizzato
6. **Contatti**: WhatsApp, email e social media

## 🎯 Wizard E-commerce

Il wizard intelligente analizza le preferenze dell'utente:

### Step 1: Tipo di Ambiente
- Residenziale
- Commerciale  
- Esterno

### Step 2: Livello di Traffico
- Basso (camera da letto)
- Medio (soggiorno)
- Alto (ufficio/negozio)

### Step 3: Budget
- Economico (€20-40/m²)
- Medio (€40-80/m²)
- Premium (€80+/m²)

### Step 4: Stile
- Moderno
- Classico
- Rustico

### Step 5: Raccomandazione
Sistema di logica che combina tutte le scelte per suggerire il prodotto ideale.

## 📱 Responsive Design

- **Desktop**: Layout completo con tutti gli elementi visibili
- **Tablet**: Adattamento delle griglie e spaziature
- **Mobile**: Menu hamburger, layout verticale, ottimizzazioni touch

## 🖼️ Gestione Immagini

### Ottimizzazioni Implementate
- **Lazy Loading**: Caricamento progressivo delle immagini
- **High Resolution**: Supporto per immagini 4K e superiori
- **Lightbox**: Zoom interattivo per i dettagli
- **Preload**: Caricamento anticipato delle immagini critiche
- **Compression**: Ottimizzazione automatica per web

### Formati Supportati
- JPEG (foto ad alta qualità)
- PNG (trasparenze)
- WebP (formato moderno)
- SVG (icone vettoriali)

## 🌐 Internazionalizzazione

### Lingue Supportate
- **Italiano**: Lingua principale
- **Greco**: Traduzione completa

### Sistema di Traduzione
- Traduzioni dinamiche via JavaScript
- Persistenza della lingua scelta
- Supporto per contenuti dinamici

## 🚀 Installazione e Avvio

### Prerequisiti
- Python 3.x (per server locale)
- Browser moderno (Chrome, Firefox, Safari, Edge)

### Avvio Locale
```bash
# Clone del repository
git clone [repository-url]
cd parquetpregio-website

# Avvio server locale
python -m http.server 8000

# Oppure usando npm
npm start
```

### Accesso
Apri il browser e vai su: `http://localhost:8000`

## 📁 Struttura del Progetto

```
parquetpregio-website/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # JavaScript
├── package.json        # Configurazione npm
├── README.md          # Documentazione
└── assets/            # Risorse (se necessario)
    ├── images/        # Immagini
    ├── icons/         # Icone
    └── fonts/         # Font personalizzati
```

## 🎨 Personalizzazione

### Colori
I colori sono definiti come variabili CSS in `:root`:
- `--primary-color`: #8B6B46 (marrone legno)
- `--secondary-color`: #F4E8D1 (beige chiaro)
- `--accent-color`: #C19A6B (oro antico)

### Font
- **Titoli**: Playfair Display (serif elegante)
- **Testo**: Lato (sans-serif leggibile)

### Layout
- **Container**: Max-width 1200px
- **Spacing**: Sistema di spacing coerente
- **Breakpoints**: 768px, 1024px, 1200px

## 📊 Performance

### Metriche Ottimizzate
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Tecniche Utilizzate
- Lazy loading delle immagini
- Preload delle risorse critiche
- Minificazione CSS/JS
- Compressione delle immagini
- Caching intelligente

## 🔧 Manutenzione

### Aggiornamenti Contenuti
1. Modificare le traduzioni in `script.js`
2. Aggiornare le immagini nelle sezioni
3. Modificare i contatti WhatsApp/email

### Monitoraggio
- Console del browser per errori JavaScript
- Network tab per performance
- Lighthouse per audit completo

## 📞 Supporto

Per supporto tecnico o personalizzazioni:
- **Email**: info@parquetpregio.com
- **WhatsApp**: +39 333 123 4567

## 📄 Licenza

MIT License - Vedi file LICENSE per dettagli.

## 🙏 Crediti

- **Design**: Sistema di design personalizzato
- **Icone**: Font Awesome 6.4.0
- **Font**: Google Fonts (Playfair Display, Lato)
- **Immagini**: Unsplash (placeholder)
- **Sviluppo**: Tailored per Ivan Cavallaro

---

**Versione**: 1.0.0  
**Ultimo aggiornamento**: Dicembre 2023  
**Compatibilità**: Browser moderni (IE11+)
