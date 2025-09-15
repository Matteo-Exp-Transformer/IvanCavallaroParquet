// ===== GLOBAL VARIABLES =====
let currentStep = 1;
let wizardData = {};
let currentImageIndex = 0;
let lightboxImages = [];

// ===== TRANSLATIONS =====
const translations = {
    it: {
        hero_title: "Qualità ed esperienza nel parquet in Italia e in Grecia",
        hero_subtitle: "Oltre 20 anni di esperienza nella posa e nel restauro di parquet di pregio",
        whatsapp_btn: "WhatsApp",
        email_btn: "Email",
        wizard_btn: "Richiedi preventivo",
        about_title: "Chi Siamo",
        about_text1: "Con oltre 20 anni di esperienza nel settore del parquet, Ivan Cavallaro ha costruito una reputazione di eccellenza e affidabilità. Specializzato nella posa e nel restauro di parquet di pregio, lavora con clienti residenziali e commerciali in Italia e in Grecia.",
        about_text2: "La nostra filosofia si basa sulla qualità artigianale, l'attenzione ai dettagli e l'uso di materiali selezionati per garantire risultati duraturi nel tempo.",
        collaborations_title: "Collaborazioni di prestigio",
        view_projects: "Vedi i suoi lavori",
        request_quote: "Richiedi preventivo",
        projects_title: "Esperienze e collaborazioni",
        project1_name: "Residenza privata - Milano",
        project1_desc: "Pavimentazione in rovere massello con finitura a olio naturale",
        project2_name: "Hotel di lusso - Atene",
        project2_desc: "Parquet prefinito per 50 camere con design contemporaneo",
        project3_name: "Villa sul lago di Como",
        project3_desc: "Restauro parquet storico con elementi artistici intarsiati",
        project4_name: "Appartamento - Roma",
        project4_desc: "Posa parquet laminato ad alta resistenza per famiglia con bambini",
        project5_name: "Terrazza - Isola di Mykonos",
        project5_desc: "Parquet per esterni in teak con trattamento antiscivolo",
        project6_name: "Showroom - Torino",
        project6_desc: "Pavimentazione continua in noce americano con finitura opaca",
        products_title: "Le nostre tipologie di parquet",
        product_massello: "Massello",
        product_massello_desc: "Parquet tradizionale in legno massiccio, spessore superiore a 10mm. Durata illimitata con possibilità di numerose carteggiature.",
        product_prefinito: "Prefinito",
        product_prefinito_desc: "Pavimento multistrato con strato superiore in legno nobile. Facile da posare, stabile e resistente alle variazioni climatiche.",
        product_laminato: "Laminato",
        product_laminato_desc: "Soluzione economica con effetto legno, resistente a graffi e urti. Ideale per ambienti con alto traffico e famiglie con bambini.",
        product_artistico: "Artistico",
        product_artistico_desc: "Creazioni su misura con disegni personalizzati, intarsi e composizioni geometriche. Per interni di prestigio e design esclusivo.",
        product_esterni: "Esterni",
        product_esterni_desc: "Legni tropicali e trattamenti specifici per resistere agli agenti atmosferici. Per terrazze, giardini d'inverno e piscine.",
        contact_whatsapp: "Contattaci via WhatsApp",
        wizard_title: "Richiedi il tuo preventivo personalizzato",
        wizard_subtitle: "Seleziona il parquet ideale e ricevi un preventivo dettagliato",
        step1_title: "Seleziona la tipologia di parquet",
        wood_massello: "Massello",
        wood_massello_desc: "Legno massiccio tradizionale",
        wood_prefinito: "Prefinito",
        wood_prefinito_desc: "Multistrato con strato nobile",
        wood_laminato: "Laminato",
        wood_laminato_desc: "Soluzione economica e resistente",
        wood_artistico: "Artistico",
        wood_artistico_desc: "Creazioni personalizzate",
        wood_esterni: "Esterni",
        wood_esterni_desc: "Per terrazze e giardini",
        step2_title: "Specifiche tecniche",
        spec_thickness: "Spessore (mm)",
        spec_finish: "Finitura",
        spec_installation: "Tipo di posa",
        step3_title: "Seleziona la colorazione",
        color_chiaro: "Chiaro",
        color_medio: "Medio",
        color_scuro: "Scuro",
        color_naturale: "Naturale",
        color_bianco: "Bianco",
        color_grigio: "Grigio",
        step4_title: "Quantità e dimensioni",
        quantity_sqm: "Superficie in m²",
        quantity_rooms: "Numero di stanze",
        quantity_extra: "Spese extra (opzionale)",
        quantity_extra_placeholder: "Sottoscala, nicchie, dislivelli...",
        step5_title: "Dettagli di consegna",
        delivery_date: "Data ideale di consegna",
        delivery_address: "Indirizzo di consegna",
        consultation_need: "Ho bisogno di consulenza tecnica",
        consultation_info: "Ivan Cavallaro fornirà supporto tecnico per la scelta e l'installazione",
        step6_title: "I tuoi contatti e riepilogo",
        contact_name: "Nome e Cognome *",
        contact_method: "Metodo di contatto preferito",
        contact_email: "Email",
        contact_whatsapp_method: "WhatsApp",
        contact_email_address: "Indirizzo Email *",
        contact_phone: "Numero di telefono *",
        quote_summary: "Riepilogo richiesta",
        consultation_included: "Consulenza tecnica inclusa",
        submit_quote: "Invia richiesta",
        previous: "Precedente",
        next: "Successivo",
        close: "Chiudi",
        select_this_wood: "Seleziona questo parquet",
        view_full_resolution: "Visualizza risoluzione completa",
        technical_specs: "Specifiche tecniche",
        request_quote_from_image: "Richiedi preventivo per questo parquet",
        contact_title: "Parliamo del tuo parquet",
        contact_email_title: "Email",
        contact_email_desc: "Scrivici per un preventivo personalizzato",
        contact_whatsapp_title: "WhatsApp",
        contact_whatsapp_desc: "Contattaci direttamente per una consulenza immediata",
        contact_social_title: "Social",
        contact_social_desc: "Seguici per vedere i nostri ultimi lavori",
        footer_desc: "Qualità ed esperienza nel parquet in Italia e in Grecia",
        footer_links_title: "Link rapidi",
        footer_home: "Home",
        footer_about: "Chi Siamo",
        footer_projects: "Referenze",
        footer_products: "Prodotti",
        footer_wizard: "Wizard",
        footer_contact: "Contatti",
        footer_languages_title: "Lingue",
        footer_rights: "Tutti i diritti riservati."
    },
    en: {
        hero_title: "Quality and experience in parquet in Italy and Greece",
        hero_subtitle: "Over 20 years of experience in laying and restoring premium parquet",
        whatsapp_btn: "WhatsApp",
        email_btn: "Email",
        wizard_btn: "Request quote",
        about_title: "About Us",
        about_text1: "With over 20 years of experience in the parquet sector, Ivan Cavallaro has built a reputation for excellence and reliability. Specialized in laying and restoring premium parquet, he works with residential and commercial clients in Italy and Greece.",
        about_text2: "Our philosophy is based on artisanal quality, attention to detail and the use of selected materials to ensure lasting results over time.",
        collaborations_title: "Prestigious collaborations",
        view_projects: "View his work",
        request_quote: "Request quote",
        projects_title: "Experiences and collaborations",
        project1_name: "Private residence - Milan",
        project1_desc: "Oak solid wood flooring with natural oil finish",
        project2_name: "Luxury hotel - Athens",
        project2_desc: "Prefinished parquet for 50 rooms with contemporary design",
        project3_name: "Villa on Lake Como",
        project3_desc: "Restoration of historic parquet with artistic inlaid elements",
        project4_name: "Apartment - Rome",
        project4_desc: "High-resistance laminate parquet installation for family with children",
        project5_name: "Terrace - Mykonos Island",
        project5_desc: "Outdoor parquet in teak with anti-slip treatment",
        project6_name: "Showroom - Turin",
        project6_desc: "Continuous flooring in American walnut with matte finish",
        products_title: "Our parquet types",
        product_massello: "Solid",
        product_massello_desc: "Traditional solid wood parquet, thickness over 10mm. Unlimited duration with possibility of multiple sanding.",
        product_prefinito: "Prefinished",
        product_prefinito_desc: "Multilayer floor with noble wood top layer. Easy to lay, stable and resistant to climate variations.",
        product_laminato: "Laminate",
        product_laminato_desc: "Economic solution with wood effect, resistant to scratches and impacts. Ideal for high-traffic environments and families with children.",
        product_artistico: "Artistic",
        product_artistico_desc: "Custom creations with personalized designs, inlays and geometric compositions. For prestigious interiors and exclusive design.",
        product_esterni: "Outdoor",
        product_esterni_desc: "Tropical woods and specific treatments to resist atmospheric agents. For terraces, winter gardens and pools.",
        contact_whatsapp: "Contact us via WhatsApp",
        wizard_title: "Request your personalized quote",
        wizard_subtitle: "Select the ideal parquet and receive a detailed quote",
        step1_title: "Select parquet type",
        wood_massello: "Solid",
        wood_massello_desc: "Traditional solid wood",
        wood_prefinito: "Prefinished",
        wood_prefinito_desc: "Multilayer with noble layer",
        wood_laminato: "Laminate",
        wood_laminato_desc: "Economic and resistant solution",
        wood_artistico: "Artistic",
        wood_artistico_desc: "Custom creations",
        wood_esterni: "Outdoor",
        wood_esterni_desc: "For terraces and gardens",
        step2_title: "Technical specifications",
        spec_thickness: "Thickness (mm)",
        spec_finish: "Finish",
        spec_installation: "Installation type",
        step3_title: "Select color",
        color_chiaro: "Light",
        color_medio: "Medium",
        color_scuro: "Dark",
        color_naturale: "Natural",
        color_bianco: "White",
        color_grigio: "Gray",
        step4_title: "Quantity and dimensions",
        quantity_sqm: "Area in m²",
        quantity_rooms: "Number of rooms",
        quantity_extra: "Extra details (optional)",
        quantity_extra_placeholder: "Understairs, niches, level differences...",
        step5_title: "Delivery details",
        delivery_date: "Preferred delivery date",
        delivery_address: "Delivery address",
        consultation_need: "I need technical consultation",
        consultation_info: "Ivan Cavallaro will provide technical support for selection and installation",
        step6_title: "Your contacts and summary",
        contact_name: "Name and Surname *",
        contact_method: "Preferred contact method",
        contact_email: "Email",
        contact_whatsapp_method: "WhatsApp",
        contact_email_address: "Email Address *",
        contact_phone: "Phone Number *",
        quote_summary: "Request summary",
        consultation_included: "Technical consultation included",
        submit_quote: "Send request",
        previous: "Previous",
        next: "Next",
        close: "Close",
        select_this_wood: "Select this parquet",
        view_full_resolution: "View full resolution",
        technical_specs: "Technical specifications",
        request_quote_from_image: "Request quote for this parquet",
        contact_title: "Let's talk about your parquet",
        contact_email_title: "Email",
        contact_email_desc: "Write us for a personalized quote",
        contact_whatsapp_title: "WhatsApp",
        contact_whatsapp_desc: "Contact us directly for immediate consultation",
        contact_social_title: "Social",
        contact_social_desc: "Follow us to see our latest work",
        footer_desc: "Quality and experience in parquet in Italy and Greece",
        footer_links_title: "Quick links",
        footer_home: "Home",
        footer_about: "About Us",
        footer_projects: "References",
        footer_products: "Products",
        footer_wizard: "Wizard",
        footer_contact: "Contact",
        footer_languages_title: "Languages",
        footer_rights: "All rights reserved."
    },
    el: {
        hero_title: "Ποιότητα και εμπειρία στο παρκέ στην Ιταλία και την Ελλάδα",
        hero_subtitle: "Πάνω από 20 χρόνια εμπειρίας στην τοποθέτηση και αποκατάσταση πολυτελών παρκέ",
        whatsapp_btn: "WhatsApp",
        email_btn: "Email",
        wizard_btn: "Βρες το παρκέ σου",
        about_title: "Ποιοι είμαστε",
        about_text1: "Με πάνω από 20 χρόνια εμπειρίας στον τομέα του παρκέ, ο Ivan Cavallaro έχει χτίσει φήμη αριστείας και αξιοπιστίας. Ειδικεύεται στην τοποθέτηση και αποκατάσταση πολυτελών παρκέ, εργάζεται με κατοικίες και εμπορικά κτίρια στην Ιταλία και την Ελλάδα.",
        about_text2: "Η φιλοσοφία μας βασίζεται στην τεχνική ποιότητα, την προσοχή στις λεπτομέρειες και τη χρήση επιλεγμένων υλικών για να εγγυηθούμε αποτελέσματα που διαρκούν στο χρόνο.",
        collaborations_title: "Prestigio συνεργασίες",
        download_cv: "Κατέβασε το βιογραφικό σε PDF",
        projects_title: "Εμπειρίες και συνεργασίες",
        project1_name: "Ιδιωτική κατοικία - Μιλάνο",
        project1_desc: "Επικάλυψη σε μαζέλα βελανιδιάς με φινίρισμα σε φυσικό λάδι",
        project2_name: "Πολυτελές ξενοδοχείο - Αθήνα",
        project2_desc: "Προφινιρισμένο παρκέ για 50 δωμάτια με σύγχρονο σχέδιο",
        project3_name: "Βίλα στη λίμνη Como",
        project3_desc: "Αποκατάσταση ιστορικού παρκέ με καλλιτεχνικά κομμένα στοιχεία",
        project4_name: "Διαμέρισμα - Ρώμη",
        project4_desc: "Τοποθέτηση υψηλής αντίστασης λάμινατο παρκέ για οικογένεια με παιδιά",
        project5_name: "Τεράζα - Μύκονος",
        project5_desc: "Εξωτερικό παρκέ σε τικ με αντιαπολίσθηση επεξεργασία",
        project6_name: "Showroom - Τορίνο",
        project6_desc: "Συνεχής επικάλυψη σε αμερικανικό καρυδιά με ματ φινίρισμα",
        products_title: "Οι τύποι παρκέ μας",
        product_massello: "Μαζέλα",
        product_massello_desc: "Παραδοσιακό παρκέ σε μαζικό ξύλο, πάχος άνω των 10mm. Απεριόριστη διάρκεια με δυνατότητα πολλαπλών λείανσης.",
        product_prefinito: "Προφινιρισμένο",
        product_prefinito_desc: "Πάτωμα πολυστρωματικό με ανώτερο στρώμα σε ευγενές ξύλο. Εύκολο στην τοποθέτηση, σταθερό και ανθεκτικό στις κλιματικές διακυμάνσεις.",
        product_laminato: "Λάμινατο",
        product_laminato_desc: "Οικονομική λύση με ξύλινο αποτέλεσμα, ανθεκτικό σε γρατζουνιές και κτυπήματα. Ιδανικό για περιβάλλοντα με υψηλή κίνηση και οικογένειες με παιδιά.",
        product_artistico: "Καλλιτεχνικό",
        product_artistico_desc: "Δημιουργίες κατ' επαγγελματία με εξατομικευμένα σχέδια, κομμένα και γεωμετρικές συνθέσεις. Για εσωτερικούς χώρους prestigio και αποκλειστικό σχέδιο.",
        product_esterni: "Εξωτερικά",
        product_esterni_desc: "Τροπικά ξύλα και συγκεκριμένες επεξεργασίες για να αντιστέκονται στους ατμοσφαιρικούς παράγοντες. Για τεράζες, χειμερινούς κήπους και πισίνες.",
        contact_whatsapp: "Επικοινώνησε μαζί μας μέσω WhatsApp",
        wizard_title: "Βρες το τέλειο παρκέ για εσένα",
        wizard_subtitle: "Απάντησε σε λίγες ερωτήσεις και θα σου προτείνουμε την ιδανική λύση",
        step1_title: "Τι είδος περιβάλλοντος θέλεις να επικαλύψεις;",
        option_residenziale: "Κατοικία",
        option_commerciale: "Εμπορικό",
        option_esterno: "Εξωτερικό",
        step2_title: "Ποιο είναι το επίπεδο κίνησης του περιβάλλοντος;",
        option_basso: "Χαμηλό (υπνοδωμάτιο)",
        option_medio: "Μεσαίο (καθιστικό)",
        option_alto: "Υψηλό (γραφείο/κατάστημα)",
        step3_title: "Ποιο είναι το budget σου ανά m²;",
        option_economico: "Οικονομικό (€20-40/m²)",
        option_medio_prezzo: "Μεσαίο (€40-80/m²)",
        option_premium: "Premium (€80+/m²)",
        step4_title: "Ποιο στυλ προτιμάς;",
        option_moderno: "Μοντέρνο",
        option_classico: "Κλασικό",
        option_rustico: "Αγροτικό",
        step5_title: "Η σύστασή μας",
        why_recommended: "Γιατί αυτή η επιλογή;",
        get_quote: "Ζήτα προσφορά",
        restart: "Ξαναρχίζω",
        previous: "Προηγούμενο",
        next: "Επόμενο",
        contact_title: "Ας μιλήσουμε για το παρκέ σου",
        contact_email_title: "Email",
        contact_email_desc: "Γράψε μας για μια εξατομικευμένη προσφορά",
        contact_whatsapp_title: "WhatsApp",
        contact_whatsapp_desc: "Επικοινώνησε μαζί μας απευθείας για άμεση συμβουλή",
        contact_social_title: "Social",
        contact_social_desc: "Ακολούθησέ μας για να δεις τις τελευταίες μας εργασίες",
        footer_desc: "Ποιότητα και εμπειρία στο παρκέ στην Ιταλία και την Ελλάδα",
        footer_links_title: "Γρήγοροι σύνδεσμοι",
        footer_home: "Αρχική",
        footer_about: "Ποιοι είμαστε",
        footer_projects: "Αναφορές",
        footer_products: "Προϊόντα",
        footer_wizard: "Οδηγός",
        footer_contact: "Επικοινωνία",
        footer_languages_title: "Γλώσσες",
        footer_rights: "Όλα τα δικαιώματα διατηρούνται."
    }
};

// ===== PRODUCT RECOMMENDATIONS =====
const productRecommendations = {
    // Residenziale + Basso + Economico
    "residenziale-basso-economico-moderno": {
        product: "Laminato",
        reason: "Per una camera da letto con budget contenuto, il parquet laminato offre il miglior rapporto qualità-prezzo. È resistente, facile da pulire e disponibile in molti colori moderni."
    },
    "residenziale-basso-economico-classico": {
        product: "Laminato",
        reason: "Il laminato con finitura classica è perfetto per ambienti residenziali a basso traffico. Offre l'aspetto del legno naturale a un prezzo accessibile."
    },
    "residenziale-basso-economico-rustico": {
        product: "Laminato",
        reason: "Anche con un budget limitato, puoi ottenere un effetto rustico con il laminato. Molti produttori offrono finiture che imitano perfettamente il legno grezzo."
    },
    
    // Residenziale + Basso + Medio
    "residenziale-basso-medio-moderno": {
        product: "Prefinito",
        reason: "Il parquet prefinito è ideale per una camera da letto. Offre la bellezza del legno naturale con maggiore stabilità rispetto al massello, perfetto per ambienti moderni."
    },
    "residenziale-basso-medio-classico": {
        product: "Prefinito",
        reason: "Con un budget medio, il prefinito ti permette di avere un parquet di qualità superiore. La finitura classica si integra perfettamente in ambienti tradizionali."
    },
    "residenziale-basso-medio-rustico": {
        product: "Prefinito",
        reason: "Il prefinito con finitura rustica offre il meglio dei due mondi: l'autenticità del legno e la praticità di manutenzione."
    },
    
    // Residenziale + Basso + Premium
    "residenziale-basso-premium-moderno": {
        product: "Massello",
        reason: "Per una camera da letto di lusso, il parquet massello è la scelta migliore. Durata illimitata e possibilità di carteggiature multiple per mantenere l'aspetto perfetto."
    },
    "residenziale-basso-premium-classico": {
        product: "Massello",
        reason: "Il massello è la tradizione del parquet. Perfetto per chi cerca autenticità e qualità superiore, garantisce risultati che durano decenni."
    },
    "residenziale-basso-premium-rustico": {
        product: "Artistico",
        reason: "Con un budget premium, puoi permetterti creazioni artistiche personalizzate. Intarsi e disegni su misura per un ambiente unico e raffinato."
    },
    
    // Residenziale + Medio + Economico
    "residenziale-medio-economico-moderno": {
        product: "Laminato",
        reason: "Per il soggiorno con budget contenuto, il laminato ad alta resistenza è la scelta giusta. Resiste al traffico medio e mantiene l'aspetto perfetto."
    },
    "residenziale-medio-economico-classico": {
        product: "Laminato",
        reason: "Il laminato classico è perfetto per ambienti familiari. Facile da pulire, resistente ai graffi e disponibile in molte tonalità calde."
    },
    "residenziale-medio-economico-rustico": {
        product: "Laminato",
        reason: "Anche con un budget limitato, il laminato può offrire un effetto rustico autentico. Ottima soluzione per famiglie attive."
    },
    
    // Residenziale + Medio + Medio
    "residenziale-medio-medio-moderno": {
        product: "Prefinito",
        reason: "Il prefinito è la scelta ideale per il soggiorno. Combina bellezza e praticità, perfetto per ambienti moderni con traffico medio."
    },
    "residenziale-medio-medio-classico": {
        product: "Prefinito",
        reason: "Il prefinito classico offre il calore del legno naturale con la stabilità necessaria per ambienti di vita quotidiana."
    },
    "residenziale-medio-medio-rustico": {
        product: "Prefinito",
        reason: "Perfetto per chi ama lo stile rustico ma ha bisogno di praticità. Il prefinito mantiene l'aspetto naturale del legno."
    },
    
    // Residenziale + Medio + Premium
    "residenziale-medio-premium-moderno": {
        product: "Massello",
        reason: "Il massello moderno è la scelta di lusso per il soggiorno. Finiture contemporanee che esaltano la bellezza naturale del legno."
    },
    "residenziale-medio-premium-classico": {
        product: "Massello",
        reason: "Il massello classico è la tradizione che non tramonta mai. Perfetto per ambienti eleganti e raffinati."
    },
    "residenziale-medio-premium-rustico": {
        product: "Artistico",
        reason: "Con un budget premium, puoi creare un ambiente unico con parquet artistico. Disegni personalizzati che rendono la casa davvero speciale."
    },
    
    // Commerciale + Alto + Economico
    "commerciale-alto-economico-moderno": {
        product: "Laminato",
        reason: "Per uffici e negozi, il laminato commerciale è la scelta più pratica. Alta resistenza, facile manutenzione e costo contenuto."
    },
    "commerciale-alto-economico-classico": {
        product: "Laminato",
        reason: "Il laminato classico è perfetto per ambienti professionali che vogliono mantenere un aspetto elegante senza spendere troppo."
    },
    "commerciale-alto-economico-rustico": {
        product: "Laminato",
        reason: "Anche in ambienti commerciali, il laminato può offrire un look rustico accogliente, perfetto per ristoranti e locali."
    },
    
    // Commerciale + Alto + Medio
    "commerciale-alto-medio-moderno": {
        product: "Prefinito",
        reason: "Il prefinito commerciale offre il perfetto equilibrio tra qualità e prezzo. Resistente al traffico intenso e facile da mantenere."
    },
    "commerciale-alto-medio-classico": {
        product: "Prefinito",
        reason: "Per ambienti professionali che cercano eleganza, il prefinito classico è la scelta ideale. Resistenza e bellezza unite."
    },
    "commerciale-alto-medio-rustico": {
        product: "Prefinito",
        reason: "Il prefinito rustico può creare ambienti commerciali accoglienti e distintivi, perfetti per attività che vogliono distinguersi."
    },
    
    // Commerciale + Alto + Premium
    "commerciale-alto-premium-moderno": {
        product: "Prefinito",
        reason: "Per ambienti commerciali di lusso, il prefinito premium offre massima resistenza e bellezza. Perfetto per hotel e uffici esclusivi."
    },
    "commerciale-alto-premium-classico": {
        product: "Massello",
        reason: "Il massello classico è la scelta di prestigio per ambienti commerciali di alto livello. Eleganza senza tempo e durata garantita."
    },
    "commerciale-alto-premium-rustico": {
        product: "Artistico",
        reason: "Per ambienti commerciali unici, il parquet artistico crea un'atmosfera distintiva che i clienti ricorderanno."
    },
    
    // Esterno
    "esterno-basso-economico-moderno": {
        product: "Esterni",
        reason: "Per terrazze e giardini d'inverno, il parquet per esterni è l'unica scelta possibile. Trattamenti specifici per resistere agli agenti atmosferici."
    },
    "esterno-basso-economico-classico": {
        product: "Esterni",
        reason: "Il parquet per esterni con finitura classica è perfetto per creare continuità tra interno ed esterno mantenendo l'eleganza."
    },
    "esterno-basso-economico-rustico": {
        product: "Esterni",
        reason: "Per ambienti esterni rustici, il parquet per esterni offre la naturalezza del legno con la resistenza necessaria."
    },
    
    // Default fallback
    "default": {
        product: "Prefinito",
        reason: "Il parquet prefinito è la scelta più versatile e bilanciata. Offre il perfetto equilibrio tra qualità, durata e prezzo per la maggior parte delle esigenze."
    }
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== INITIALIZATION =====
function initializeApp() {
    setupMobileMenu();
    setupHeaderScroll();
    setupSmoothScrolling();
    setupLazyLoading();
    setupLanguageSwitcher();
    setupWizard();
    setupLightbox();
    setupContactForms();
    setupAnimations();
    
    // Initialize with Italian language
    changeLanguage('it');
    
    console.log('ParquetPregio website initialized successfully!');
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isActive = nav.classList.contains('active');
            menuToggle.innerHTML = isActive ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}

// ===== HEADER SCROLL EFFECT =====
function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== LAZY LOADING =====
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('.high-res-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// ===== LANGUAGE SWITCHER =====
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.language-switcher button');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    // Update active button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update content
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// ===== WIZARD FUNCTIONALITY =====
function setupWizard() {
    const woodTypeCards = document.querySelectorAll('.wood-type-card');
    const colorOptions = document.querySelectorAll('.color-option');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitQuote');
    const contactMethodRadios = document.querySelectorAll('input[name="contactMethod"]');
    const technicalConsultation = document.getElementById('technicalConsultation');
    
    // Wood type selection
    woodTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            selectWoodType(card);
        });
    });
    
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectColor(option);
        });
    });
    
    // Contact method toggle
    contactMethodRadios.forEach(radio => {
        radio.addEventListener('change', toggleContactMethod);
    });
    
    // Technical consultation toggle
    if (technicalConsultation) {
        technicalConsultation.addEventListener('change', updateQuoteSummary);
    }
    
    // Navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextStep);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevStep);
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuote);
    }
    
    // Form validation and summary updates
    const formInputs = document.querySelectorAll('.quantity-input, .date-input, .address-input, .contact-input');
    formInputs.forEach(input => {
        input.addEventListener('input', updateQuoteSummary);
    });
    
    updateWizardUI();
}

function selectWoodType(card) {
    // Remove previous selection
    document.querySelectorAll('.wood-type-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Select current card
    card.classList.add('selected');
    
    // Store selection
    wizardData.woodType = card.getAttribute('data-type');
    
    // Enable next button
    enableNextButton();
}

function selectColor(option) {
    // Remove previous selection
    document.querySelectorAll('.color-option').forEach(o => {
        o.classList.remove('selected');
    });
    
    // Select current option
    option.classList.add('selected');
    
    // Store selection
    wizardData.color = option.getAttribute('data-color');
    
    // Enable next button
    enableNextButton();
}

function toggleContactMethod() {
    const emailGroup = document.getElementById('emailGroup');
    const phoneGroup = document.getElementById('phoneGroup');
    const selectedMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    
    if (selectedMethod === 'email') {
        emailGroup.style.display = 'block';
        phoneGroup.style.display = 'none';
        document.getElementById('contactEmail').required = true;
        document.getElementById('contactPhone').required = false;
    } else {
        emailGroup.style.display = 'none';
        phoneGroup.style.display = 'block';
        document.getElementById('contactEmail').required = false;
        document.getElementById('contactPhone').required = true;
    }
}

function updateQuoteSummary() {
    const summaryContainer = document.getElementById('quoteSummary');
    const consultationBadge = document.getElementById('consultationBadge');
    
    if (!summaryContainer) return;
    
    // Clear previous summary
    summaryContainer.innerHTML = '';
    
    // Add summary items
    if (wizardData.woodType) {
        addSummaryItem('Tipologia', getWoodTypeName(wizardData.woodType));
    }
    
    if (wizardData.color) {
        addSummaryItem('Colorazione', getColorName(wizardData.color));
    }
    
    const thickness = document.getElementById('thickness');
    if (thickness) {
        addSummaryItem('Spessore', thickness.value + 'mm');
    }
    
    const finish = document.getElementById('finish');
    if (finish) {
        addSummaryItem('Finitura', finish.value);
    }
    
    const quantity = document.getElementById('quantity');
    if (quantity && quantity.value) {
        addSummaryItem('Superficie', quantity.value + ' m²');
    }
    
    const rooms = document.getElementById('rooms');
    if (rooms && rooms.value) {
        addSummaryItem('Stanze', rooms.value);
    }
    
    const deliveryDate = document.getElementById('deliveryDate');
    if (deliveryDate && deliveryDate.value) {
        addSummaryItem('Consegna', deliveryDate.value);
    }
    
    // Show consultation badge if needed
    const consultation = document.getElementById('technicalConsultation');
    if (consultation && consultation.checked && consultationBadge) {
        consultationBadge.style.display = 'flex';
    } else if (consultationBadge) {
        consultationBadge.style.display = 'none';
    }
}

function addSummaryItem(label, value) {
    const summaryContainer = document.getElementById('quoteSummary');
    if (!summaryContainer) return;
    
    const item = document.createElement('div');
    item.className = 'summary-item';
    item.innerHTML = `
        <span class="summary-label">${label}</span>
        <span class="summary-value">${value}</span>
    `;
    summaryContainer.appendChild(item);
}

function getWoodTypeName(type) {
    const names = {
        'massello': 'Massello',
        'prefinito': 'Prefinito',
        'laminato': 'Laminato',
        'artistico': 'Artistico',
        'esterni': 'Esterni'
    };
    return names[type] || type;
}

function getColorName(color) {
    const names = {
        'chiaro': 'Chiaro',
        'medio': 'Medio',
        'scuro': 'Scuro',
        'naturale': 'Naturale',
        'bianco': 'Bianco',
        'grigio': 'Grigio'
    };
    return names[color] || color;
}

function enableNextButton() {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function selectOption(button) {
    const step = button.closest('.wizard-step');
    const stepId = step.id;
    
    // Remove previous selection in this step
    step.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Select current option
    button.classList.add('selected');
    
    // Store selection
    const value = button.getAttribute('data-value');
    wizardData[stepId] = value;
    
    // Enable next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
    
    // If this is the last step, show recommendation
    if (stepId === 'step4') {
        setTimeout(() => {
            nextStep();
        }, 500);
    }
}

function nextStep() {
    if (currentStep < 6) {
        // Hide current step
        document.getElementById(`step${currentStep}`).classList.remove('active');
        
        // Show next step
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Update progress
        updateProgress();
        
        // Update navigation buttons
        updateWizardUI();
        
        // If this is the final step, update summary
        if (currentStep === 6) {
            updateQuoteSummary();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step${currentStep}`).classList.remove('active');
        
        // Show previous step
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Update progress
        updateProgress();
        
        // Update navigation buttons
        updateWizardUI();
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        const progress = (currentStep / 6) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentStep} / 6`;
    }
}

function updateWizardUI() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitQuote');
    
    if (prevBtn) {
        prevBtn.disabled = currentStep === 1;
    }
    
    if (nextBtn) {
        nextBtn.style.display = currentStep === 6 ? 'none' : 'inline-flex';
    }
    
    if (submitBtn) {
        submitBtn.style.display = currentStep === 6 ? 'inline-flex' : 'none';
    }
    
    // Enable next button based on current step requirements
    if (nextBtn && currentStep < 6) {
        let canProceed = false;
        
        switch(currentStep) {
            case 1:
                canProceed = wizardData.woodType;
                break;
            case 2:
                canProceed = true; // Specs are optional
                break;
            case 3:
                canProceed = wizardData.color;
                break;
            case 4:
                canProceed = document.getElementById('quantity')?.value;
                break;
            case 5:
                canProceed = document.getElementById('deliveryDate')?.value;
                break;
        }
        
        nextBtn.disabled = !canProceed;
    }
}

function showRecommendation() {
    const recommendation = getRecommendation();
    const productElement = document.getElementById('recommendedProduct');
    const reasonElement = document.getElementById('recommendationReason');
    
    if (productElement && reasonElement) {
        productElement.innerHTML = `
            <h4>${recommendation.product}</h4>
            <p>${recommendation.reason}</p>
        `;
        
        reasonElement.textContent = recommendation.reason;
    }
}

function getRecommendation() {
    const key = `${wizardData.step1}-${wizardData.step2}-${wizardData.step3}-${wizardData.step4}`;
    return productRecommendations[key] || productRecommendations.default;
}

function submitQuote() {
    // Validate required fields
    const name = document.getElementById('contactName').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    
    if (!name || !wizardData.woodType) {
        alert('Per favore compila tutti i campi obbligatori');
        return;
    }
    
    if (contactMethod === 'email' && !email) {
        alert('Per favore inserisci un indirizzo email valido');
        return;
    }
    
    if (contactMethod === 'whatsapp' && !phone) {
        alert('Per favore inserisci un numero di telefono valido');
        return;
    }
    
    // Collect all form data
    const formData = {
        name: name,
        contactMethod: contactMethod,
        contact: contactMethod === 'email' ? email : phone,
        woodType: wizardData.woodType,
        color: wizardData.color,
        thickness: document.getElementById('thickness').value,
        finish: document.getElementById('finish').value,
        installation: document.getElementById('installation').value,
        quantity: document.getElementById('quantity').value,
        rooms: document.getElementById('rooms').value,
        extraInfo: document.getElementById('extraInfo').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        technicalConsultation: document.getElementById('technicalConsultation').checked
    };
    
    // Generate email content
    const emailSubject = 'Richiesta Preventivo Parquet - ' + formData.name;
    const emailBody = generateEmailBody(formData);
    
    // Send email
    const emailUrl = `mailto:0Cavuz0@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailUrl;
    
    // Also prepare WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/393331234567?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message with options
    showQuoteSuccess(emailUrl, whatsappUrl);
}

function generateEmailBody(data) {
    return `Nuova richiesta preventivo parquet

Dati Cliente:
- Nome: ${data.name}
- Contatto: ${data.contact} (${data.contactMethod})

Dettagli Parquet:
- Tipologia: ${getWoodTypeName(data.woodType)}
- Colorazione: ${getColorName(data.color)}
- Spessore: ${data.thickness}mm
- Finitura: ${data.finish}
- Tipo di posa: ${data.installation}

Quantità:
- Superficie: ${data.quantity} m²
- Numero stanze: ${data.rooms}
- Note aggiuntive: ${data.extraInfo || 'Nessuna'}

Consegna:
- Data preferita: ${data.deliveryDate}
- Indirizzo: ${data.deliveryAddress}

Consulenza tecnica richiesta: ${data.technicalConsultation ? 'Sì' : 'No'}

Richiesta inviata il: ${new Date().toLocaleString('it-IT')}`;
}

function generateWhatsAppMessage(data) {
    return `Ciao! Sono ${data.name} e vorrei richiedere un preventivo per parquet.

Tipologia: ${getWoodTypeName(data.woodType)}
Colorazione: ${getColorName(data.color)}
Superficie: ${data.quantity} m²
Data consegna: ${data.deliveryDate}
${data.technicalConsultation ? 'Consulenza tecnica richiesta' : ''}

Potreste fornirmi maggiori informazioni e un preventivo dettagliato?

Grazie!`;
}

function showQuoteSuccess(emailUrl, whatsappUrl) {
    const message = `
Richiesta inviata con successo!

Vuoi anche inviare un messaggio WhatsApp per un contatto più rapido?

[Email] [WhatsApp]
    `;
    
    if (confirm('Richiesta inviata! Vuoi anche inviare un messaggio WhatsApp?')) {
        window.open(whatsappUrl, '_blank');
    }
}

function restartWizard() {
    currentStep = 1;
    wizardData = {};
    
    // Reset all steps
    for (let i = 1; i <= 6; i++) {
        const step = document.getElementById(`step${i}`);
        if (step) {
            step.classList.remove('active');
            if (i === 1) step.classList.add('active');
            
            // Clear selections
            step.querySelectorAll('.wood-type-card').forEach(card => {
                card.classList.remove('selected');
            });
            step.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
        }
    }
    
    // Clear form inputs
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    
    // Reset contact method to email
    document.querySelector('input[name="contactMethod"][value="email"]').checked = true;
    toggleContactMethod();
    
    updateProgress();
    updateWizardUI();
}

// ===== LIGHTBOX =====
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    const zoomWoodButtons = document.querySelectorAll('.zoom-wood-btn');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const requestQuoteFromLightbox = document.getElementById('requestQuoteFromLightbox');
    
    // Collect all images for lightbox
    lightboxImages = Array.from(zoomButtons).map(btn => btn.getAttribute('data-image'));
    
    // Zoom button handlers for projects
    zoomButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentImageIndex = index;
            const projectItem = button.closest('.project-item');
            const projectName = projectItem.querySelector('.project-name').textContent;
            const projectDesc = projectItem.querySelector('.project-description').textContent;
            showLightbox(lightboxImages[index], projectName, projectDesc);
        });
    });
    
    // Zoom button handlers for wood types
    zoomWoodButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const woodType = button.getAttribute('data-wood');
            showWoodModal(woodType);
        });
    });
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', hideLightbox);
    }
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                hideLightbox();
            }
        });
    }
    
    // Request quote from lightbox
    if (requestQuoteFromLightbox) {
        requestQuoteFromLightbox.addEventListener('click', () => {
            hideLightbox();
            document.querySelector('a[href="#wizard"]').click();
        });
    }
    
    // Navigation
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
            showLightbox(lightboxImages[currentImageIndex]);
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
            showLightbox(lightboxImages[currentImageIndex]);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    hideLightbox();
                    break;
                case 'ArrowLeft':
                    if (lightboxPrev) lightboxPrev.click();
                    break;
                case 'ArrowRight':
                    if (lightboxNext) lightboxNext.click();
                    break;
            }
        }
    });
}

function showLightbox(imageSrc, title = '', description = '') {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        
        if (lightboxTitle) {
            lightboxTitle.textContent = title;
        }
        
        if (lightboxDescription) {
            lightboxDescription.textContent = description;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== WOOD MODAL =====
function showWoodModal(woodType) {
    const woodModal = document.getElementById('woodModal');
    const woodModalTitle = document.getElementById('woodModalTitle');
    const woodMainImage = document.getElementById('woodMainImage');
    const woodSpecsList = document.getElementById('woodSpecsList');
    const woodThumbnails = document.getElementById('woodThumbnails');
    const selectWoodTypeBtn = document.getElementById('selectWoodType');
    
    if (!woodModal) return;
    
    // Set title
    if (woodModalTitle) {
        woodModalTitle.textContent = getWoodTypeName(woodType);
    }
    
    // Set main image (placeholder for now)
    if (woodMainImage) {
        woodMainImage.src = getWoodImage(woodType);
    }
    
    // Set specifications
    if (woodSpecsList) {
        woodSpecsList.innerHTML = getWoodSpecs(woodType);
    }
    
    // Set thumbnails (placeholder for now)
    if (woodThumbnails) {
        woodThumbnails.innerHTML = getWoodThumbnails(woodType);
    }
    
    // Set select button
    if (selectWoodTypeBtn) {
        selectWoodTypeBtn.onclick = () => {
            hideWoodModal();
            // Pre-select this wood type in wizard
            const woodCard = document.querySelector(`[data-type="${woodType}"]`);
            if (woodCard) {
                selectWoodType(woodCard);
            }
            // Scroll to wizard
            document.querySelector('a[href="#wizard"]').click();
        };
    }
    
    // Show modal
    woodModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup modal close handlers
    setupWoodModalHandlers();
}

function hideWoodModal() {
    const woodModal = document.getElementById('woodModal');
    
    if (woodModal) {
        woodModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setupWoodModalHandlers() {
    const woodModal = document.getElementById('woodModal');
    const woodModalClose = document.querySelector('.wood-modal-close');
    const closeWoodModal = document.getElementById('closeWoodModal');
    
    if (woodModalClose) {
        woodModalClose.onclick = hideWoodModal;
    }
    
    if (closeWoodModal) {
        closeWoodModal.onclick = hideWoodModal;
    }
    
    if (woodModal) {
        woodModal.onclick = (e) => {
            if (e.target === woodModal) {
                hideWoodModal();
            }
        };
    }
}

function getWoodImage(woodType) {
    const images = {
        'massello': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
        'prefinito': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
        'laminato': 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=800',
        'artistico': 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80&w=800',
        'esterni': 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800'
    };
    return images[woodType] || images['massello'];
}

function getWoodSpecs(woodType) {
    const specs = {
        'massello': [
            { label: 'Spessore', value: '15-22mm' },
            { label: 'Durezza', value: 'Alta' },
            { label: 'Durata', value: 'Illimitata' },
            { label: 'Manutenzione', value: 'Carteggiatura' },
            { label: 'Resistenza', value: 'Eccellente' }
        ],
        'prefinito': [
            { label: 'Spessore', value: '10-15mm' },
            { label: 'Stabilità', value: 'Alta' },
            { label: 'Durata', value: '20+ anni' },
            { label: 'Manutenzione', value: 'Minima' },
            { label: 'Resistenza', value: 'Buona' }
        ],
        'laminato': [
            { label: 'Spessore', value: '8-12mm' },
            { label: 'Durezza', value: 'AC4-AC5' },
            { label: 'Durata', value: '10-15 anni' },
            { label: 'Manutenzione', value: 'Facile' },
            { label: 'Resistenza', value: 'Graffi/Urti' }
        ],
        'artistico': [
            { label: 'Spessore', value: '12-20mm' },
            { label: 'Personalizzazione', value: '100%' },
            { label: 'Durata', value: 'Illimitata' },
            { label: 'Manutenzione', value: 'Specializzata' },
            { label: 'Unicità', value: 'Assoluta' }
        ],
        'esterni': [
            { label: 'Spessore', value: '20-25mm' },
            { label: 'Trattamento', value: 'Antiatmosferico' },
            { label: 'Durata', value: '15-25 anni' },
            { label: 'Manutenzione', value: 'Periodica' },
            { label: 'Resistenza', value: 'UV/Acqua' }
        ]
    };
    
    return specs[woodType].map(spec => `
        <div class="spec-item">
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">${spec.value}</span>
        </div>
    `).join('');
}

function getWoodThumbnails(woodType) {
    // Placeholder thumbnails - in real implementation, these would be actual product images
    const thumbnails = Array.from({length: 4}, (_, i) => `
        <div class="wood-thumbnail ${i === 0 ? 'active' : ''}" onclick="changeWoodImage('${woodType}', ${i})">
            <img src="${getWoodImage(woodType)}?v=${i}" alt="${getWoodTypeName(woodType)} ${i+1}">
        </div>
    `).join('');
    
    return thumbnails;
}

function changeWoodImage(woodType, index) {
    const woodMainImage = document.getElementById('woodMainImage');
    const thumbnails = document.querySelectorAll('.wood-thumbnail');
    
    if (woodMainImage) {
        woodMainImage.src = `${getWoodImage(woodType)}?v=${index}`;
    }
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// ===== CONTACT FORMS =====
function setupContactForms() {
    // WhatsApp integration
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add tracking or analytics here if needed
            console.log('WhatsApp contact initiated');
        });
    });
    
    // Email integration
    const emailButtons = document.querySelectorAll('.btn-email');
    emailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add tracking or analytics here if needed
            console.log('Email contact initiated');
        });
    });
}

// ===== ANIMATIONS =====
function setupAnimations() {
    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.product-card, .project-item, .contact-method');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2070',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=774'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You could send this to an analytics service
});

// ===== ANALYTICS TRACKING =====
function trackEvent(category, action, label) {
    // Google Analytics or other tracking code would go here
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track wizard completions
function trackWizardCompletion() {
    trackEvent('Wizard', 'Complete', wizardData.step1 + '-' + wizardData.step4);
}

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRecommendation,
        productRecommendations,
        translations
    };
}

