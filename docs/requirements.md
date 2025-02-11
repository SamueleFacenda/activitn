Il problema che stiamo risolvendo riguarda le difficoltà nel trovare persone interessate a partecipare ad attività comuni, come creare un gruppo di studio o organizzare una partita di basket. Questo problema si manifesta in modo particolarmente evidente per chi si è appena trasferito in città, come studenti o lavoratori, che non conoscono né il territorio né la comunità locale e hanno difficoltà a identificare gruppi o associazioni che condividono i loro interessi. Anche chi ha passioni più specifiche o meno popolari potrebbe non trovare facilmente un contesto organizzato per portarle avanti.

Dall’altra parte, gli enti organizzatori, come associazioni locali e organizzatori di eventi pubblici, spesso faticano a promuovere le loro attività e raggiungere il pubblico giusto. La mancanza di visibilità è accentuata dall’uso di metodi tradizionali e limitati, come i poster o gli annunci su bacheche locali, che non sempre riescono a catturare l’attenzione delle persone che potrebbero essere interessate. Questo crea un doppio ostacolo: gli utenti non trovano le attività, e gli organizzatori non riescono a farle conoscere.

\


**ActiviTN** propone una soluzione attraverso una piattaforma digitale che permette a chiunque di pubblicare eventi e attività liberamente, offrendo agli utenti la possibilità di iscriversi, chattare con i partecipanti, per organizzare i trasporti o informare i vari aggiornamenti. La piattaforma categorizza gli eventi per tipo, livello di esperienza (ad esempio gruppo-studio per studenti medie o superiori), facilitando la ricerca e l’organizzazione. Inoltre quest’ultima aiuterebbe a pubblicizzare gli eventi organizzati dalle associazioni locali o altre enti, cosi’ che, tutti gli utenti possano essere a conoscenza di tale evento, cosi’ da conoscere e integrarsi meglio alla societa’. 

Vantaggi comune:

1. **Maggiore coinvolgimento e partecipazione della comunità**: La piattaforma favorisce l'integrazione sociale dei cittadini, specialmente dei nuovi arrivati, incoraggiandoli a partecipare ad attività locali. Questo contribuisce a creare una comunità più coesa, attiva e inclusiva, riducendo il rischio di isolamento sociale

2. **Sostenibilità e riduzione dell’impatto ambientale**: L'integrazione di strumenti per organizzare trasporti condivisi attraverso la piattaforma (chat tra i partecipanti) contribuisce alla riduzione dell'uso di mezzi privati, abbattendo le emissioni di CO2

3. **Supporto alle associazioni locali**: La piattaforma offre un mezzo gratuito, facile e veloce da usare per le associazioni di volontariato e gli organizzatori locali, che possono pubblicizzare le loro attività senza dover investire in annunci su bacheca / volantini, cosi’ da risparmiare risorse e tempo, visto che verrebbe visto da tutti gli utenti 

4. **Promozione del turismo locale**: Attraverso la piattaforma, il Comune può promuovere eventi e attività che attirano visitatori da fuori città, incrementando il turismo locale e valorizzando le risorse culturali e naturali del territorio.

\



### **Vantaggi per l'Utente**

1. **Accesso facile e immediato agli eventi**: Gli utenti possono trovare rapidamente attività ed eventi locali adatti ai propri interessi, grazie a una piattaforma intuitiva che organizza gli eventi per categoria e livello di competenza

2. **Integrazione sociale più facile**: Soprattutto per chi è nuovo in città, la piattaforma offre un modo semplice per connettersi con persone con interessi simili, favorendo la creazione di nuovi gruppi sociali, di studio o sportivi, senza la necessità di conoscere già persone o associazioni locali.

3. **Migliore pianificazione del tempo libero**: La piattaforma offre un unico spazio in cui gli utenti possono scoprire eventi di ogni genere, dai workshop culturali alle attività sportive, permettendo loro di pianificare al meglio il proprio tempo libero.


### **Limiti dell'Applicazione**

1. **Dipendenza dalla connessione internet**: L'applicazione è completamente basata su una piattaforma web, quindi gli utenti devono disporre di una connessione internet stabile per poter accedere ai servizi. In aree con scarsa copertura o per persone senza accesso a internet, l’utilizzo della piattaforma potrebbe essere limitato.

2. **Accessibilità limitata per chi ha poca dimestichezza con la tecnologia**: Utenti meno esperti dal punto di vista digitale, come alcuni anziani o persone non abituate all’uso di smartphone e computer, potrebbero trovare difficoltà a utilizzare l'applicazione in maniera efficiente. Questo potrebbe limitare l'accesso di queste fasce di popolazione alle attività locali.


### **Requisiti Funzionali**

- **RF1: Login, Registrazione.** Il sistema deve consentire agli utenti di registrarsi tramite email e password. Una volta completata la registrazione, l’utente riceve un'email di conferma per attivare l’account. Deve esserci la possibilità per gli utenti di essere verificati per accrescere la loro affidabilità.

- **RF2: Post di Eventi.** Gli utenti possono pubblicare eventi inserendo informazioni quali titolo, descrizione, data, orario, e luogo. Ogni evento e’ associato a una categoria (sport, studio, volontariato, ecc.) per facilitare la ricerca.

- **RF3: Chat per Eventi.** Per ogni evento creato, il sistema deve generare automaticamente una chat dedicata dove i partecipanti possono coordinarsi e comunicare tra loro per organizzare i dettagli dell'evento (come i mezzi trasporto, materiali da portare).

- **RF4: Home Page con Eventi Consigliati.** La homepage della piattaforma, deve mostrare eventi che potrebbero piacere all’utente

- **RF5: Sponsorizzazione Eventi.** Gli utenti possono sponsorizzare i propri eventi, aumentando la loro visibilità all'interno della piattaforma. 

- **RF6: Categorizzazione Eventi.** Gli eventi devono essere categorizzati in base al tipo (sport, studio, ecc.) (forse anche: e al livello di esperienza). Questo permette agli utenti di trovare eventi specifici in base ai propri interessi e competenze.

- **RF7: Ricerca Eventi.** Gli utenti possono cercare eventi utilizzando diversi criteri di filtraggio come data, località, categoria (forse anche: livello di competenza). Possono combinare più filtri per affinare i risultati della ricerca.

- **RF8: Iscrizione e Disiscrizione dagli Incontri.** Gli utenti devono poter iscriversi o disiscriversi facilmente dagli eventi o dagli incontri. Il sistema deve gestire le notifiche relative agli aggiornamenti dell'evento e allo stato della partecipazione dell'utente.

- **RF9:** **Modifica e Cancellazione del Profilo.** Gli utenti possono modificare i propri dati personali, le impostazioni del profilo e, se lo desiderano, cancellare completamente il loro account, rimuovendo tutti i dati associati, in conformità con la normativa GDPR.

- **RF10:** **Valutazione affidabilità utenti.** Ad ogni utente viene assegnato un punteggio di affidabilità, che viene diminuito in caso di assenza ad attività a cui si era iscritto, cattivo comportamento (valutato dagli altri utenti), etc…

- **RF11: Classifica degli utenti più attivi.** In base a quanti eventi un utente organizza/partecipa nell'ultimo mese esso viene posizionato in una classifica con tutti gli altri utenti, e in base alla posizione vengono assegnati dei punti spendibili in sponsorizzazione gratuita di eventi a piacere.

- **RF12 Organizzazione eventi privati**: solo gli amici dell’organizzatore dell’evento, possono partecipare ad esso, tramite un invito dal creatore dell’evento.


### **Requisiti Non Funzionali**

1. **RNF1: Conformità al GDPR.** La piattaforma deve garantire la protezione dei dati personali, consentendo agli utenti di richiedere la cancellazione dei propri dati o il takeout (esportazione dei dati personali) in qualsiasi momento.

2. **RNF2: Compatibilità.** Il sistema deve essere compatibile con i principali browser (Firefox, Chrome, Safari), assicurando che tutte le funzionalità siano disponibili su qualsiasi piattaforma, tipo la corretta visualizzazione delle interfacce indipendentemente dal browser utilizzato.

3. **RNF3: Performance:** Le operazioni chiave (login, iscrizione a eventi, ricerca) devono essere completate entro un massimo di 3 secondi per il 95% delle richieste, anche quando ci sono molti utenti attivi allo stesso momento. Il sistema deve inoltre scalare facilmente per supportare un numero crescente di utenti

4. **RNF4 Scalabilità:** Il sistema deve essere in grado di gestire un carico simultaneo fino a 80.000 utenti simultanei senza compromettere le performance o la stabilità. 

5. **RNF 5: Affidabilità.** La piattaforma deve garantire una disponibilità minima del 99.9%, con un downtime massimo di circa 10 ore all’anno. Il sistema garantisce un accesso continuo ai servizi anche durante i momenti di picco di utilizzo. In caso di guasti o altri fenomeni (es: atmosferici) che potrebbero compromettere il servizio,  sono implementati sistemi di backup implementati per assicurare la continuità operativa

6. **RNF6 Facilità d’Uso:** L'interfaccia deve essere intuitiva e user-friendly, consentendo agli utenti di utilizzare tutte le funzionalità senza bisogno di istruzioni complesse o formazione.

7. **RNF7: Multilingua** Il sistema deve supportare più lingue, offrendo agli utenti la possibilità di scegliere tra Italiano, Inglese e Tedesco. Il cambio della lingua deve essere intuitivo da applicare e soprattutto applicabile in ogni momento, garantendo contenuti tradotti correttamente 




## USER STORY dei Requisiti funzionali:

Come utente, voglio poter creare e usare il mio account sulla piattaforma:

- Come utente, voglio registrarmi al sistema usando la mia email e password oppure google, così posso creare un account.

- Come utente, voglio poter fare login con la mia email e password oppure google, così posso accedere alla piattaforma.

- Come utente, voglio richiedere una nuova password se la dimentico, così posso recuperare il mio account.

- Come amministratore, voglio che gli utenti debbano confermare la mail da un link di conferma, così evito account falsi.

Come organizzatore, voglio poter pubblicare i miei eventi:

- Come organizzatore, voglio poter creare un evento inserendo titolo, descrizione, data, orario e luogo, così posso organizzare un'attività.

- Come organizzatore, voglio selezionare una categoria per il mio evento, così posso facilitare la ricerca da parte degli altri utenti.

- Come organizzatore, voglio modificare le informazioni di un evento che ho creato, così posso aggiornare i dettagli se necessario.

- Come organizzatore, voglio poter cancellare un evento creato, così posso annullarlo se non è più disponibile.

Come partecipante, voglio partecipare agli eventi che mi interessano:

- Come partecipante, voglio poter accedere a una chat dedicata all'evento a cui mi sono iscritto, così posso comunicare con gli altri partecipanti.

- Come partecipante, voglio ricevere notifiche di nuovi messaggi nella chat dell'evento, così posso essere aggiornato sugli ultimi sviluppi.

- Come partecipante, voglio poter inviare e ricevere messaggi privati nella chat, così posso coordinarmi direttamente con altri partecipanti.

Come utente, voglio scoprire nuovi eventi interessanti:

- Come utente, voglio vedere eventi suggeriti in homepage basati sui miei interessi, così posso trovare attività rilevanti per me.

- Come utente, voglio che il sistema tenga traccia delle mie preferenze e partecipazioni passate, così può fornire raccomandazioni più accurate.

- Come utente, voglio che il sistema aggiorni regolarmente la homepage con nuovi eventi che potrebbero interessarmi.

Come organizzatore, voglio poter sponsorizzare un evento, così posso aumentare la sua visibilità sulla piattaforma.

Come organizzatore, voglio vedere quante persone hanno visualizzato o interagito con il mio evento sponsorizzato, così posso valutarne l'efficacia.

Come utente, voglio poter cercare gli eventi che mi interessano di più:

- Come utente, voglio che gli eventi siano suddivisi per categoria, così posso trovare più facilmente quelli che mi interessano (es. sport, studio, volontariato).

- Come utente, voglio filtrare gli eventi per livello di esperienza, così posso partecipare solo a quelli adatti alle mie competenze.

- Come utente, voglio poter cercare eventi usando filtri come data, luogo e categoria, così posso trovare eventi che corrispondono alle mie esigenze.

- Come utente, voglio poter salvare i criteri di ricerca che uso frequentemente, così posso velocizzare la ricerca futura.

Come utente, voglio ricevere notifiche sui miei eventi, per non perdermi nulla:

- Come utente, voglio ricevere notifiche sugli aggiornamenti degli eventi a cui mi sono iscritto, così posso rimanere informato.

- Come utente, voglio ricevere un promemoria prima dell'evento a cui mi sono iscritto, così non dimentico di partecipare.

Come utente, voglio poter gestire il mio account, così da tenerlo aggiornato:

- Come utente, voglio poter modificare i miei dati personali e le impostazioni del profilo, così posso mantenere aggiornate le mie informazioni.

- Come utente, voglio poter eliminare il mio account in modo permanente, così posso rimuovere tutti i miei dati dalla piattaforma.

- Come utente, voglio che la cancellazione del mio account sia conforme al GDPR, così posso essere sicuro che i miei dati vengano trattati correttamente.

Come utente, voglio poter verificare l'affidabilità degli utenti.

- Come utente, voglio essere certificato per aumentare la mia affidabilità.

- Come utente, voglio poter vedere il punteggio di affidabilità degli altri utenti, così posso valutare la loro serietà prima di partecipare a un evento organizzato da loro.

- Come utente, voglio ricevere un punteggio di affidabilità in base al mio comportamento nelle attività, così posso aumentare la mia reputazione.

- Come organizzatore, voglio poter abbassare il punteggio di affidabilità di un partecipante per comportamento scorretto o assenze ingiustificate.

- Come utente, voglio verificare l'affidabilità di un organizzatore di un evento

- Come utente, voglio dare un punteggio l'organizzazione di un evento

Come utente, voglio avere una classifica per poter vincere dei premi:

- Come utente, voglio poter vedere una classifica degli utenti più attivi, così posso confrontare il mio livello di partecipazione con quello degli altri.

- Come utente, voglio guadagnare punti in base alla mia posizione in classifica, così posso spendere questi punti per sponsorizzare i miei eventi.

- Come organizzatore, voglio guadagnare punti in classifica per gli eventi che organizzo

Come utente, voglio una piattaforma affidabile e civile:

- Come utente, voglio poter segnalare un evento inappropriato, così il team può prendere provvedimenti.

- Come amministratore, voglio poter visualizzare e moderare i report sugli eventi e sui partecipanti, così posso mantenere la qualità della piattaforma.

- Come organizzatore, voglio poter espellere da un mio evento un utente, per qualsiasi motivo.

Come utente, voglio porter salvare degli utenti, per poter trovare facilmente i miei amici:

- Come utente, voglio poter mandare una richiesta di amicizia a un utente, per poterlo salvare in futuro

- Come utente, voglio organizzare eventi privati solo con i miei amici, per organizzare eventi privati

## Non functional

Come utente, voglio una piattaforma facile e immediata da usare: 

- Come utente, voglio potermi iscrivere a un evento con un solo click, così posso partecipare senza complicazioni.

- Come utente, voglio potermi disiscrivere da un evento con facilità, così posso annullare la mia partecipazione se necessario.
